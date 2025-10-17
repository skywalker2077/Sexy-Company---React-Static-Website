# 🚀 GitHub Actions Workflows

## 📋 Workflows Ativos

### 🔍 **aws-credentials-check.yml**
- **Função:** Validar credenciais AWS e acesso ao S3
- **Uso:** Manual (workflow_dispatch)
- **Status:** ✅ Funcionando

### 🏗️ **build-and-deploy.yml** 
- **Função:** Build da aplicação React e deploy automático
- **Uso:** Automático (push para main)
- **Status:** ✅ Pronto para uso

### ✅ **ci.yml**
- **Função:** Integração contínua - testes e validação
- **Uso:** Automático (push/PR)
- **Status:** ✅ Funcionando

### 🪣 **deploy-s3.yml**
- **Função:** Deploy específico para S3
- **Uso:** Manual (workflow_dispatch)
- **Status:** ✅ Pronto para uso

### 🎯 **deploy-sexy-company.yml**
- **Função:** Deploy completo do projeto Sexy Company
- **Uso:** Automático (push para main)
- **Status:** ✅ Principal workflow de deploy

### 🔍 **quality-check.yml**
- **Função:** Verificações de qualidade do código
- **Uso:** Automático (push/PR)
- **Status:** ✅ Funcionando

## 🎯 Workflow Principal

O **deploy-sexy-company.yml** é o workflow principal que:
1. Faz build da aplicação React
2. Faz deploy para o S3 bucket "sexy-company"
3. Configura website hosting
4. Configura acesso público
5. Retorna URLs do site

## 🔑 Secrets Necessários

- `AWS_ACCESS_KEY_ID` - Access Key ID da AWS
- `AWS_SECRET_ACCESS_KEY` - Secret Access Key da AWS
- `S3_BUCKET_NAME` - Nome do bucket (opcional, padrão: sexy-company)

## 🌐 URLs do Site

Após deploy bem-sucedido:
- **Website URL:** http://sexy-company.s3-website-us-east-1.amazonaws.com
- **Direct URL:** https://sexy-company.s3.amazonaws.com/index.html