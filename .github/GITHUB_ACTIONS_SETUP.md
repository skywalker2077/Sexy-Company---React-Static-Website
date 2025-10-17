# GitHub Actions Configuration Guide

Este documento explica como configurar os workflows do GitHub Actions para o projeto Sexy Company.

## 📋 Workflows Disponíveis

### 1. **CI (Continuous Integration)** - `ci.yml`
- ✅ Executa em todos os pushes e PRs
- ✅ Instala dependências
- ✅ Executa build
- ✅ Verifica integridade dos arquivos
- ✅ Auditoria de segurança

### 2. **Build and Deploy** - `build-and-deploy.yml`
- ✅ Build em múltiplas versões do Node.js (18.x, 20.x)
- ✅ Cache de dependências
- ✅ Upload de artifacts
- ✅ Preparado para deploy

### 3. **Quality Check** - `quality-check.yml`
- ✅ Verificação de tipos TypeScript
- ✅ Análise de tamanho do bundle
- ✅ Detecção de console.log
- ✅ Verificação de TODOs/FIXMEs

### 4. **Deploy to AWS S3** - `deploy-s3.yml`
- 🚀 Deploy automático para AWS S3
- 🔄 Invalidação do CloudFront
- 🔍 Verificação de saúde pós-deploy

## ⚙️ Configuração dos Secrets

Para usar o workflow de deploy AWS com o bucket **sexy-company**, configure os seguintes secrets no GitHub:

### 1. Acesse as configurações do repositório
```
skywalker2077/site_estatico_s3 → Settings → Secrets and variables → Actions
```

### 2. Configure os seguintes **Repository Secrets**:

```bash
# AWS Credentials (OBRIGATÓRIO)
AWS_ACCESS_KEY_ID          # Sua AWS Access Key ID
AWS_SECRET_ACCESS_KEY      # Sua AWS Secret Access Key

# AWS Resources (OPCIONAL)
CLOUDFRONT_DISTRIBUTION_ID # ID da distribuição CloudFront (se você tiver)
```

**📝 Nota:** O bucket "sexy-company" já está configurado diretamente no workflow, não precisa adicionar como secret.

### 3. Configure as seguintes **Repository Variables**:

```bash
# URLs de deploy
DEPLOYMENT_URL             # URL do site (ex: https://sexycompany.com)
CLOUDFRONT_URL             # URL do CloudFront (ex: d123456.cloudfront.net)
```

## 🔐 Criando IAM User para Deploy

### 1. Crie um usuário IAM no AWS Console

### 2. Anexe a seguinte política IAM para o bucket "sexy-company":

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject",
                "s3:ListBucket",
                "s3:PutBucketPolicy",
                "s3:PutBucketWebsite"
            ],
            "Resource": [
                "arn:aws:s3:::sexy-company",
                "arn:aws:s3:::sexy-company/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudfront:CreateInvalidation",
                "cloudfront:GetInvalidation",
                "cloudfront:ListInvalidations"
            ],
            "Resource": "*"
        }
    ]
}
```

### 3. Comando AWS CLI para criar a política:

```bash
# Salve a política em um arquivo
cat > github-actions-policy.json << 'EOF'
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject", 
                "s3:DeleteObject",
                "s3:ListBucket",
                "s3:PutBucketPolicy",
                "s3:PutBucketWebsite"
            ],
            "Resource": [
                "arn:aws:s3:::sexy-company",
                "arn:aws:s3:::sexy-company/*"
            ]
        }
    ]
}
EOF

# Criar a política
aws iam create-policy \
    --policy-name SexyCompanyS3DeployPolicy \
    --policy-document file://github-actions-policy.json

# Anexar ao usuário (substitua YOUR-USERNAME)
aws iam attach-user-policy \
    --user-name YOUR-USERNAME \
    --policy-arn arn:aws:iam::YOUR-ACCOUNT-ID:policy/SexyCompanyS3DeployPolicy
```

## 🏗️ Configuração do AWS S3

### 1. Verificar se o bucket "sexy-company" existe:
```bash
aws s3 ls s3://sexy-company
```

### 2. Se não existir, criar o bucket:
```bash
aws s3 mb s3://sexy-company --region us-east-1
```

### 3. Configurar para hospedagem de site estático:
```bash
aws s3 website s3://sexy-company \
    --index-document index.html \
    --error-document index.html
```

### 4. Configurar a política do bucket para acesso público:
```bash
# Remover bloqueio de acesso público
aws s3api put-public-access-block \
    --bucket sexy-company \
    --public-access-block-configuration \
    BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false

# Aplicar política de bucket
cat > bucket-policy.json << 'EOF'
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::sexy-company/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket sexy-company --policy file://bucket-policy.json
```

### 5. Testar configuração:
```bash
# Upload de um arquivo de teste
echo "<h1>Test</h1>" > test.html
aws s3 cp test.html s3://sexy-company/

# Verificar acesso
curl http://sexy-company.s3-website-us-east-1.amazonaws.com/test.html
```

## ☁️ Configuração do CloudFront (Opcional)

### 1. Crie uma distribuição CloudFront
### 2. Configure:
- **Origin**: Seu bucket S3
- **Default Root Object**: `index.html`
- **Error Pages**: 404 → `/index.html` (para SPA routing)

### 3. Anote o Distribution ID para os secrets

## 🚀 Como Fazer Deploy

### Deploy Automático:
- Push para a branch `main` → Deploy automático
- Ou execute manualmente em: `Actions → Deploy to AWS S3 → Run workflow`

### Deploy Manual:
```bash
# Build local
npm run build

# Upload para S3
aws s3 sync build/ s3://seu-bucket-name --delete

# Invalidar CloudFront (se configurado)
aws cloudfront create-invalidation \
    --distribution-id SEU-DISTRIBUTION-ID \
    --paths "/*"
```

## 📊 Monitoramento

### Verificar status dos workflows:
1. Vá para a aba **Actions** do repositório
2. Veja o status de cada workflow
3. Clique em qualquer workflow para ver os logs detalhados

### URLs de verificação:
- **Staging**: `https://staging.sexycompany.com`
- **Production**: `https://sexycompany.com`

## 🔧 Troubleshooting

### Erro de permissões AWS:
- Verifique se as credenciais estão corretas
- Confirme as políticas IAM
- Teste as credenciais localmente

### Build falhando:
- Verifique os logs no GitHub Actions
- Teste o build localmente: `npm run build`
- Confirme que todas as dependências estão no package.json

### Deploy bem-sucedido mas site não carrega:
- Verifique a política do bucket S3
- Confirme a configuração de website do S3
- Teste a URL diretamente do S3

## 📝 Exemplo de Configuração Completa

```yaml
# Repository Secrets
AWS_ACCESS_KEY_ID: AKIA...
AWS_SECRET_ACCESS_KEY: abcd...
S3_BUCKET_NAME: sexy-company-website
CLOUDFRONT_DISTRIBUTION_ID: E1234567890ABC

# Repository Variables  
DEPLOYMENT_URL: https://sexycompany.com
CLOUDFRONT_URL: d1234567890abc.cloudfront.net
```

## ✅ Lista de Verificação

- [ ] Secrets configurados no GitHub
- [ ] Usuário IAM criado com permissões corretas
- [ ] Bucket S3 criado e configurado
- [ ] CloudFront configurado (opcional)
- [ ] Primeiro deploy executado com sucesso
- [ ] Site acessível na URL configurada

---

Para mais informações, consulte a [documentação do GitHub Actions](https://docs.github.com/en/actions) ou a [documentação da AWS](https://aws.amazon.com/documentation/).