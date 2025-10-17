# 🚀 Guia Rápido: Deploy Sexy Company para S3

Este guia te ajuda a configurar o deploy automático do site Sexy Company para o bucket S3 "sexy-company".

## ✅ Checklist de Configuração

### 1. 🔑 Configurar Credenciais AWS no GitHub

Vá para: `Settings → Secrets and variables → Actions` no seu repositório

**Adicione estes Repository Secrets:**
```
AWS_ACCESS_KEY_ID          ← Sua AWS Access Key
AWS_SECRET_ACCESS_KEY      ← Sua AWS Secret Key
```

**Opcionais:**
```
CLOUDFRONT_DISTRIBUTION_ID ← Se você tiver CloudFront
```

### 2. 🪣 Preparar Bucket S3

Execute estes comandos no seu terminal AWS CLI:

```bash
# Verificar se o bucket existe
aws s3 ls s3://sexy-company

# Se não existir, criar
aws s3 mb s3://sexy-company --region us-east-1

# Configurar website hosting
aws s3 website s3://sexy-company \
    --index-document index.html \
    --error-document index.html

# Remover bloqueios de acesso público
aws s3api put-public-access-block \
    --bucket sexy-company \
    --public-access-block-configuration \
    BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false
```

### 3. 🔓 Configurar Política de Acesso Público

```bash
# Criar arquivo de política
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

# Aplicar política
aws s3api put-bucket-policy --bucket sexy-company --policy file://bucket-policy.json
```

### 4. 👤 Configurar Usuário IAM

```bash
# Criar política IAM
cat > iam-policy.json << 'EOF'
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

# Criar a política (substitua YOUR-ACCOUNT-ID)
aws iam create-policy \
    --policy-name SexyCompanyS3Deploy \
    --policy-document file://iam-policy.json

# Anexar ao usuário (substitua YOUR-USERNAME)
aws iam attach-user-policy \
    --user-name YOUR-USERNAME \
    --policy-arn arn:aws:iam::YOUR-ACCOUNT-ID:policy/SexyCompanyS3Deploy
```

## 🚀 Como Fazer o Deploy

### Método 1: Push Automático (Recomendado)
```bash
# Qualquer push para main irá fazer deploy automaticamente
git add .
git commit -m "Deploy Sexy Company to S3"
git push origin main
```

### Método 2: Deploy Manual via GitHub
1. Vá para `Actions` no seu repositório
2. Clique em `Deploy to S3 - Sexy Company`
3. Clique em `Run workflow`
4. Clique em `Run workflow` novamente

### Método 3: Deploy Local (Para teste)
```bash
# Build local
npm run build

# Upload manual
aws s3 sync build/ s3://sexy-company --delete
```

## 🌐 URLs de Acesso

Após o deploy, seu site estará disponível em:

- **S3 Website URL**: http://sexy-company.s3-website-us-east-1.amazonaws.com
- **S3 Direct URL**: https://sexy-company.s3.amazonaws.com/index.html

## 🔍 Verificar Status do Deploy

### GitHub Actions
1. Vá para `Actions` no seu repositório
2. Veja o status do último workflow
3. Clique no workflow para ver logs detalhados

### Testar o Site
```bash
# Testar se o site está online
curl -I http://sexy-company.s3-website-us-east-1.amazonaws.com

# Ver conteúdo da página
curl http://sexy-company.s3-website-us-east-1.amazonaws.com
```

## 🐛 Troubleshooting

### ❌ Erro: "AccessDenied" 
**Solução:** Verificar credenciais AWS nos secrets do GitHub

### ❌ Erro: "NoSuchBucket"
**Solução:** Criar o bucket primeiro:
```bash
aws s3 mb s3://sexy-company --region us-east-1
```

### ❌ Erro: "403 Forbidden" no site
**Solução:** Configurar política de bucket público (ver seção 3)

### ❌ Site não carrega
**Solução:** Verificar configuração de website hosting:
```bash
aws s3 website s3://sexy-company \
    --index-document index.html \
    --error-document index.html
```

## 📋 Comando Completo de Setup

Execute este script para configurar tudo de uma vez:

```bash
#!/bin/bash
echo "🚀 Configurando bucket sexy-company para Sexy Company..."

# Criar bucket se não existir
aws s3 mb s3://sexy-company --region us-east-1 2>/dev/null || echo "Bucket já existe"

# Configurar website hosting
aws s3 website s3://sexy-company --index-document index.html --error-document index.html

# Remover bloqueios
aws s3api put-public-access-block --bucket sexy-company \
    --public-access-block-configuration BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false

# Política pública
cat > /tmp/bucket-policy.json << 'EOF'
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

aws s3api put-bucket-policy --bucket sexy-company --policy file:///tmp/bucket-policy.json

echo "✅ Configuração completa!"
echo "🌐 Seu site estará em: http://sexy-company.s3-website-us-east-1.amazonaws.com"
```

## ✅ Lista Final

- [ ] ✅ Secrets configurados no GitHub
- [ ] ✅ Bucket S3 "sexy-company" criado
- [ ] ✅ Website hosting habilitado
- [ ] ✅ Política de acesso público aplicada
- [ ] ✅ Usuário IAM com permissões corretas
- [ ] ✅ Primeiro deploy executado
- [ ] ✅ Site testado e funcionando

**🎉 Pronto! Seu pipeline está configurado e funcionando!**