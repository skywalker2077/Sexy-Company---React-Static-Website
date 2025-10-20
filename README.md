# Sexy Company - React Website

Site estático profissional desenvolvido em React com domínio personalizado e CDN global.

## 🌐 URLs do Site

- **Principal:** https://sexycompany.net.br
- **Alternativo:** https://www.sexycompany.net.br
- **CloudFront:** https://djyz1fz0detgq.cloudfront.net

## 🚀 Tecnologias

- **React 19** com TypeScript
- **AWS S3** para hospedagem
- **AWS CloudFront** para CDN global
- **AWS Route 53** para DNS
- **AWS Certificate Manager** para SSL
- **GitHub Actions** para CI/CD

## 📋 Desenvolvimento

### Instalação e Execução
```bash
npm install
npm start  # http://localhost:3000
```

### Build de Produção
```bash
npm run build
```

## 🏗️ Infraestrutura

### AWS CloudFront
- **Distribution ID:** E1KAU442K7IFPV
- **Cache:** HTML (5min), Assets (1 ano)
- **Compressão:** GZIP/Brotli habilitada
- **HTTPS:** Certificado SSL automático

### Deploy Automático
- **Trigger:** Push para branch `main`
- **Pipeline:** Build → S3 Upload → CloudFront Invalidation
- **Tempo:** ~3-5 minutos

## 📁 Estrutura

```
src/
├── components/
│   ├── Header/     # Navegação responsiva
│   ├── Hero/       # Seção principal
│   ├── Services/   # Serviços da empresa
│   ├── Gallery/    # Galeria de produtos
│   ├── Contact/    # Formulário de contato
│   └── Footer/     # Rodapé e links
├── App.tsx
└── index.tsx
```

## 🎨 Design

- **Tema:** Dark mode com acentos dourados
- **Layout:** Mobile-first responsivo
- **Performance:** Otimizado para web

---

**Site profissional com infraestrutura empresarial AWS** ⚡