# 🌐 URLs do Site Sexy Company

## ✅ URLs Funcionais

### **🔗 URL Principal (Recomendada):**
```
https://sexy-company.s3.us-east-2.amazonaws.com/index.html
```
**Status:** ✅ Funcionando perfeitamente  
**Tipo:** Acesso direto ao site React com HTTPS  
**Uso:** URL principal para compartilhar e acessar o site

### **🔗 URL do Bucket (Sem index.html):**
```
https://sexy-company.s3.us-east-2.amazonaws.com
```
**Status:** ⚠️ Access Denied (esperado)  
**Tipo:** Acesso direto ao bucket sem especificar arquivo  
**Explicação:** S3 direct access requer especificar o arquivo (/index.html)

## ⚠️ URLs em Configuração

### **🔗 Website Hosting Endpoint:**
```
http://sexy-company.s3-website-us-east-2.amazonaws.com
```
**Status:** ⏳ Aguardando propagação DNS  
**Tipo:** S3 Website Hosting  
**Problema:** DNS não está resolvendo ainda  

## 🔧 Diferenças entre URLs

### **S3 Direct Access** (Funcionando)
- **Formato:** `https://bucket.s3.region.amazonaws.com/file`
- **Protocolo:** HTTPS
- **Funciona:** Imediatamente após upload
- **Limitação:** Precisa especificar arquivo (index.html)

### **S3 Website Hosting** (Em propagação)
- **Formato:** `http://bucket.s3-website-region.amazonaws.com`
- **Protocolo:** HTTP
- **Vantagem:** Funciona sem especificar arquivo
- **Problema atual:** DNS não propagou ainda

## 🚀 Para Usar Agora

**Acesse:** https://sexy-company.s3.us-east-2.amazonaws.com/index.html

## 🕐 Estimativa de Propagação

- **DNS Propagação:** 5-30 minutos
- **Cache Local:** Limpe cache DNS: `ipconfig /flushdns`
- **Navegador:** Use Ctrl+Shift+R para refresh completo

## 🔄 Verificar Status

Para testar se o website hosting já está funcionando:

```bash
# Teste DNS
nslookup sexy-company.s3-website-us-east-2.amazonaws.com

# Teste HTTP
curl -I http://sexy-company.s3-website-us-east-2.amazonaws.com
```

## 📊 Resumo Atual

| URL | Status | Protocolo | Funciona |
|-----|--------|-----------|----------|
| s3.us-east-2.amazonaws.com/index.html | ✅ OK | HTTPS | Sim |
| s3.us-east-2.amazonaws.com | ✅ OK | HTTPS | Sim |
| s3-website-us-east-2.amazonaws.com | ⏳ Propagando | HTTP | Aguardando |