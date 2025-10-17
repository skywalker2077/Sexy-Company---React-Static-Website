# 🚀 Deploy Command Configuration

## Comando Principal de Deploy

O workflow está configurado para usar exatamente o comando que você solicitou:

```bash
aws s3 sync build/ s3://sexy-company --delete
```

## 📍 Localização no Workflow

**Arquivo:** `.github/workflows/deploy-sexy-company.yml`  
**Linha:** ~74

```yaml
- name: 🚀 Deploy to S3 (sexy-company bucket)
  run: |
    echo "🚀 Starting deploy to S3 bucket: $S3_BUCKET_NAME"
    
    # Comando principal conforme solicitado
    aws s3 sync build/ s3://sexy-company --delete
    
    echo "✅ Successfully deployed using: aws s3 sync build/ s3://sexy-company --delete"
```

## 🔧 Configuração Completa

### Variáveis de Ambiente:
- `S3_BUCKET_NAME=sexy-company` (hardcoded no workflow)
- `AWS_REGION=us-east-1`
- `NODE_VERSION=20`

### Secrets Necessários:
- `AWS_ACCESS_KEY_ID` - Sua AWS Access Key
- `AWS_SECRET_ACCESS_KEY` - Sua AWS Secret Key

### O que o comando faz:
- ✅ `aws s3 sync` - Sincroniza arquivos
- ✅ `build/` - Pasta de origem (build do React)
- ✅ `s3://sexy-company` - Bucket de destino
- ✅ `--delete` - Remove arquivos antigos que não existem mais

## 🔍 Logs do Deploy

Quando o workflow executar, você verá logs assim:

```bash
🚀 Starting deploy to S3 bucket: sexy-company
upload: build/static/css/main.28128928.css to s3://sexy-company/static/css/main.28128928.css
upload: build/static/js/main.8cc3c81c.js to s3://sexy-company/static/js/main.8cc3c81c.js
upload: build/index.html to s3://sexy-company/index.html
upload: build/manifest.json to s3://sexy-company/manifest.json
✅ Successfully deployed using: aws s3 sync build/ s3://sexy-company --delete
```

## 🌐 URL Final

Após o deploy, seu site estará disponível em:
```
http://sexy-company.s3-website-us-east-1.amazonaws.com
```

## ⚡ Execução Automática

O deploy acontecerá automaticamente quando:
- ✅ Você fizer push para a branch `main`
- ✅ Executar manualmente via GitHub Actions

## 📊 Workflow Completo

1. **Checkout** do código
2. **Setup** Node.js 20
3. **Install** dependências (`npm ci`)
4. **Build** do projeto (`npm run build`)
5. **Configure** AWS credentials
6. **Deploy** com o comando: `aws s3 sync build/ s3://sexy-company --delete`
7. **Configure** bucket para website hosting
8. **Set** bucket policy para acesso público
9. **Verify** deployment
10. **Show** URLs de acesso

## 🔐 Permissões IAM Mínimas

O usuário IAM precisa dessas permissões no bucket `sexy-company`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject", 
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::sexy-company",
                "arn:aws:s3:::sexy-company/*"
            ]
        }
    ]
}
```

---

**🎯 Pronto! O comando exato que você solicitou está configurado e será executado automaticamente no deploy.**