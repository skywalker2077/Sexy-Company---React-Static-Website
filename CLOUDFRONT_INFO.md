# 🚀 CloudFront Distribution - Sexy Company

## 📡 **Informações da Distribuição:**

- **Distribution ID:** `E2UTZ254M2KQPK`
- **Domain CloudFront:** `dd6gi5ps2pi94.cloudfront.net`
- **Status:** InProgress → Deployed (15-20 min)
- **URL Principal:** https://dd6gi5ps2pi94.cloudfront.net

## ⚡ **Configurações Otimizadas:**

### **🗜️ Compressão:**
- ✅ **GZIP/Brotli** habilitado para todos os arquivos
- ✅ **Redução de 60-80%** no tamanho dos arquivos

### **📦 Cache Policies:**

#### **HTML Files (*.html):**
- **Default TTL:** 5 minutos (300s)
- **Max TTL:** 1 dia (86400s)
- **Motivo:** Permite atualizações rápidas do conteúdo

#### **Assets (static/*):**
- **Default TTL:** 1 ano (31536000s)
- **Max TTL:** 1 ano (31536000s)
- **Motivo:** JS/CSS com hash no nome, cache longo é seguro

#### **Root/Outros:**
- **Min TTL:** 0 (sem cache mínimo forçado)
- **Compressão:** Habilitada

### **🔒 HTTPS & Segurança:**
- ✅ **Redirect HTTP → HTTPS** automático
- ✅ **SSL/TLS** com certificado AWS padrão
- ✅ **Protocol Policy:** Redirect-to-HTTPS

## 🛠️ **Deploy Automático:**

### **Invalidation Automática:**
```bash
# Executado automaticamente no deploy:
aws cloudfront create-invalidation \
  --distribution-id E2UTZ254M2KQPK \
  --paths "/*"
```

### **Pipeline Atualizado:**
1. ✅ Build do React
2. ✅ Upload para S3
3. ✅ Invalidation do CloudFront
4. ✅ Cache limpo em 1-3 minutos

## 📊 **Performance Esperada:**

### **Antes (S3 direto):**
- 🌍 **Localização:** us-east-2 apenas
- ⏱️ **Latência:** 100-300ms (Brasil)
- 📦 **Compressão:** Limitada
- 🔒 **HTTPS:** Complexo de configurar

### **Depois (CloudFront):**
- 🌍 **Localização:** 400+ edge locations globais
- ⏱️ **Latência:** 10-50ms (Brasil)
- 📦 **Compressão:** Automática e otimizada
- 🔒 **HTTPS:** Nativo e automático
- 💾 **Cache:** Inteligente por tipo de arquivo

## 🌐 **URLs do Site:**

### **🚀 Principal (CloudFront):**
```
https://dd6gi5ps2pi94.cloudfront.net
```

### **📦 S3 Backup:**
```
https://sexy-company.s3.us-east-2.amazonaws.com/index.html
```

## 🔧 **Comandos Úteis:**

### **Status da Distribuição:**
```bash
aws cloudfront get-distribution --id E2UTZ254M2KQPK
```

### **Criar Invalidation Manual:**
```bash
aws cloudfront create-invalidation \
  --distribution-id E2UTZ254M2KQPK \
  --paths "/index.html" "/static/*"
```

### **Listar Invalidations:**
```bash
aws cloudfront list-invalidations --distribution-id E2UTZ254M2KQPK
```

## ⏱️ **Tempo de Propagação:**
- **Primeira vez:** 15-20 minutos
- **Invalidations:** 1-3 minutos
- **Cache refresh:** Automático conforme TTL

---

**🎉 Seu site agora tem performance e segurança de nível empresarial!**