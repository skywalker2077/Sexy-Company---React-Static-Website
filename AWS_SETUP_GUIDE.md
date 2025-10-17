# 🔧 Guia de Configuração AWS para GitHub Actions

## ❌ Problema Identificado
```
InvalidClientTokenId: The security token included in the request is invalid.
```

Isso significa que as credenciais AWS não estão corretas ou não foram configuradas nos GitHub Secrets.

## 🚀 Solução: Configurar AWS Credenciais

### Passo 1: Criar Usuário IAM na AWS

1. **Acesse o Console AWS**: https://console.aws.amazon.com/
2. **Vá para IAM** → **Users** → **Create User**
3. **Nome do usuário**: `github-actions-s3`
4. **Attach policies directly**: Selecione as seguintes políticas:
   - `AmazonS3FullAccess`
   - `CloudFrontFullAccess` (para futuras otimizações)

### Passo 2: Gerar Access Keys

1. **Selecione o usuário criado**
2. **Security credentials** → **Create access key**
3. **Use case**: Command Line Interface (CLI)
4. **Confirme** e **Create access key**
5. **⚠️ IMPORTANTE**: Copie e salve:
   - `Access key ID`
   - `Secret access key`

### Passo 3: Configurar GitHub Secrets

1. **Acesse seu repositório**: 
   ```
   https://github.com/skywalker2077/Sexy-Company---React-Static-Website
   ```

2. **Vá para Settings** → **Secrets and variables** → **Actions**

3. **Adicione os seguintes secrets**:

   **Nome**: `AWS_ACCESS_KEY_ID`
   **Valor**: Sua Access Key ID da AWS
   
   **Nome**: `AWS_SECRET_ACCESS_KEY`
   **Valor**: Sua Secret Access Key da AWS
   
   **Nome**: `S3_BUCKET_NAME` (opcional)
   **Valor**: `sexy-company`

### Passo 4: Verificar Bucket S3

Certifique-se de que o bucket `sexy-company` existe ou será criado automaticamente.

**🔧 Sobre o S3_BUCKET_NAME:**
- **É opcional** - O workflow já tem o nome hardcoded como `sexy-company`
- **Configure apenas se** quiser usar um bucket diferente
- **Valor padrão:** `sexy-company` (se não configurar o secret)

## 🔐 Política IAM Personalizada (Alternativa)

Se preferir uma política mais restritiva, use esta JSON:

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
                "s3:PutBucketWebsite",
                "s3:PutBucketPolicy",
                "s3:PutPublicAccessBlock",
                "s3:GetBucketLocation",
                "s3:CreateBucket"
            ],
            "Resource": [
                "arn:aws:s3:::sexy-company",
                "arn:aws:s3:::sexy-company/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListAllMyBuckets",
                "s3:GetBucketLocation"
            ],
            "Resource": "*"
        }
    ]
}
```

## ✅ Teste Final

Após configurar os secrets, execute o workflow:
1. GitHub → Actions → "Simple Secrets Test"
2. Run workflow
3. Verifique se todos os testes passam

## 🌐 URL do Site
Após configuração bem-sucedida:
```
http://sexy-company.s3-website-us-east-1.amazonaws.com
```

## 🆘 Resolução de Problemas

**Erro: Access Denied**
- Verifique se o usuário IAM tem as permissões corretas
- Confirme se os secrets estão corretos no GitHub

**Erro: Bucket Already Exists**
- O nome do bucket pode estar sendo usado por outra conta
- Altere o nome para algo único como `sexy-company-2024-usuario`

**Erro: Invalid Token**
- Regenere as Access Keys na AWS
- Atualize os secrets no GitHub

## 🔑 Resumo dos Secrets Necessários

### **Obrigatórios:**
1. `AWS_ACCESS_KEY_ID` → Sua Access Key ID da AWS
2. `AWS_SECRET_ACCESS_KEY` → Sua Secret Access Key da AWS

### **Opcional:**
3. `S3_BUCKET_NAME` → Nome do bucket (padrão: `sexy-company`)

### **Configuração no GitHub:**
```
Repository → Settings → Secrets and variables → Actions → New repository secret
```

**Exemplo de configuração:**
- **AWS_ACCESS_KEY_ID**: `AKIAIOSFODNN7EXAMPLE` 
- **AWS_SECRET_ACCESS_KEY**: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
- **S3_BUCKET_NAME**: `sexy-company` (opcional)