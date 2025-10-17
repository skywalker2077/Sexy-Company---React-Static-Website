# 🚀 Comando Rápido para Corrigir Website S3

## ❌ Problema: Website URL não funciona
A URL http://sexy-company.s3-website-us-east-1.amazonaws.com não está acessível.

## 🔧 Solução Rápida - Execute no Terminal:

### Windows (PowerShell):
```powershell
# Configure website hosting
aws s3 website s3://sexy-company --index-document index.html --error-document index.html

# Remove bloqueios de acesso público  
aws s3api put-public-access-block --bucket sexy-company --public-access-block-configuration BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false

# Criar política de bucket
@"
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
"@ | Out-File -FilePath bucket-policy.json -Encoding UTF8

# Aplicar política
aws s3api put-bucket-policy --bucket sexy-company --policy file://bucket-policy.json

# Verificar configuração
aws s3api get-bucket-website --bucket sexy-company
```

### Linux/Mac:
```bash
# Configure website hosting
aws s3 website s3://sexy-company --index-document index.html --error-document index.html

# Remove bloqueios de acesso público
aws s3api put-public-access-block --bucket sexy-company --public-access-block-configuration BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false

# Criar e aplicar política de bucket
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

## 🎯 Alternativa: GitHub Actions

1. **Vá para:** https://github.com/skywalker2077/Sexy-Company---React-Static-Website/actions
2. **Encontre:** "Fix S3 Website Configuration" 
3. **Execute:** "Run workflow" → "Run workflow"

## 🌐 Após Executar:

Aguarde 2-3 minutos e teste:
- http://sexy-company.s3-website-us-east-1.amazonaws.com
- https://sexy-company.s3.amazonaws.com/index.html

## 🔍 Verificação:

```bash
# Verificar se website está configurado
aws s3api get-bucket-website --bucket sexy-company

# Verificar arquivos no bucket
aws s3 ls s3://sexy-company/ --recursive
```