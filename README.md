# Sexy Company - React Static Website

Este é um site estático construído com React para a Sexy Company, inspirado no design e estrutura do site da Boston Tattoo Company.

## 🚀 Características

- **Design Moderno**: Layout responsivo com tema escuro e detalhes dourados
- **Componentes React**: Arquitetura moderna com componentes funcionais e TypeScript
- **Seções Completas**: Hero, Serviços, Galeria, Contato e Footer
- **Responsivo**: Design mobile-first que funciona em todos os dispositivos
- **Performance**: Build otimizado para produção

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Editor de código (VS Code recomendado)

## 🛠️ Instalação

1. Clone ou baixe este repositório
2. Navegue até a pasta do projeto:
   ```bash
   cd CloudFront
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## 🏃‍♂️ Executando o Projeto

### Modo de Desenvolvimento
```bash
npm start
```
Abre o projeto no navegador em `http://localhost:3000`

### Build de Produção
```bash
npm run build
```
Cria uma versão otimizada na pasta `build/`

### Testes
```bash
npm test
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/          # Navegação e cabeçalho
│   ├── Hero/            # Seção principal
│   ├── Services/        # Seção de serviços
│   ├── Gallery/         # Galeria de produtos
│   ├── Contact/         # Formulário de contato
│   └── Footer/          # Rodapé
├── App.tsx              # Componente principal
├── App.css              # Estilos globais do app
├── index.tsx            # Ponto de entrada
└── index.css            # Estilos globais
```

## 🎨 Design e Tema

- **Cores Principais**: Preto (#000000) e Dourado (#FFD700)
- **Tipografia**: Arial com hierarquia clara
- **Layout**: Mobile-first, responsivo
- **Interações**: Hover effects e animações suaves

## 📱 Seções do Site

1. **Header**: Navegação fixa com menu mobile
2. **Hero**: Apresentação da empresa com CTAs
3. **Serviços**: Cards interativos com flip effect
4. **Galeria**: Grid responsivo com filtros por categoria
5. **Contato**: Formulário funcional e informações da loja
6. **Footer**: Links, informações e redes sociais

## 🔧 Tecnologias Utilizadas

- React 19
- TypeScript
- CSS3 com Flexbox e Grid
- React Scripts
- Responsive Design

## 📝 Personalização

### Alterando Conteúdo
- Edite os arquivos dos componentes em `src/components/`
- Modifique textos, imagens e informações conforme necessário

### Alterando Estilos
- Cada componente tem seu próprio arquivo CSS
- Estilos globais estão em `src/index.css`
- Cores principais definidas nas variáveis CSS

### Adicionando Imagens
- Substitua os placeholders na galeria por imagens reais
- Adicione imagens na pasta `public/` ou importe no código

## 🚀 Deploy

### 🤖 Deploy Automático (GitHub Actions)
O projeto inclui pipelines configurados para CI/CD:

- **✅ CI Pipeline**: Build e testes automáticos em cada push
- **🚀 Deploy Pipeline**: Deploy automático para AWS S3 + CloudFront
- **📊 Quality Checks**: Verificação de código e análise de bundle

Para configurar o deploy automático, consulte: [`.github/GITHUB_ACTIONS_SETUP.md`](.github/GITHUB_ACTIONS_SETUP.md)

### 📋 Pipelines Disponíveis

| Workflow | Trigger | Função |
|----------|---------|---------|
| `ci.yml` | Push/PR | Build e testes |
| `build-and-deploy.yml` | Push para main | Build completo |
| `quality-check.yml` | Push/PR | Análise de código |
| `deploy-s3.yml` | Push para main | Deploy AWS |

### 🛠️ Deploy Manual

#### Build Estático
```bash
npm run build
```

#### AWS S3 + CloudFront
```bash
# Upload para S3
aws s3 sync build/ s3://seu-bucket --delete

# Invalidar CloudFront
aws cloudfront create-invalidation --distribution-id SEU-ID --paths "/*"
```

### 🌐 Plataformas Suportadas
- **AWS S3 + CloudFront** ⭐ (Configurado)
- Vercel
- Netlify  
- GitHub Pages

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte:
- Email: contato@sexycompany.com.br
- Telefone: (11) 3456-7890

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo package.json para detalhes.

---

**Sexy Company** - Sua loja de moda e estilo desde 2020