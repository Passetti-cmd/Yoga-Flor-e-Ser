# 🎨 Guia de Personalização - Yoga Studio

Este guia mostra como personalizar o site para a empresa específica da sua sogra.

## 📝 Informações Básicas para Alterar

### 1. Nome da Empresa

**Arquivo**: `templates/index.html`
**Localizações**:

- Linha 8: `<title>Yoga Studio - Transforme sua vida através do yoga</title>`
- Linha 22: `<h2>Yoga Studio</h2>`
- Linha 350: `<h3>Yoga Studio</h3>`

**Exemplo de alteração**:

```html
<title>
  Nome da Empresa da Sua Sogra - Transforme sua vida através do yoga
</title>
<h2>Nome da Empresa da Sua Sogra</h2>
```

### 2. Informações de Contato

**Arquivo**: `templates/index.html`
**Seção**: Contact (linhas 280-320)

**Alterar**:

```html
<!-- Endereço -->
<p>Endereço Real da Empresa<br />Cidade - Estado</p>

<!-- Telefone -->
<p>(DDD) 99999-9999</p>

<!-- Email -->
<p>email@empresa.com</p>

<!-- Horário -->
<p>Horários reais de funcionamento</p>
```

### 3. Horários das Aulas

**Arquivo**: `templates/index.html`
**Seção**: Schedule (linhas 200-250)

**Estrutura atual**:

```html
<div class="schedule-row">
  <div class="schedule-cell time">07:00</div>
  <div class="schedule-cell">Hatha Yoga</div>
  <div class="schedule-cell">Vinyasa</div>
  <!-- ... outros dias -->
</div>
```

**Personalizar com horários reais da empresa**

### 4. Tipos de Aulas

**Arquivo**: `templates/index.html`
**Seção**: Classes (linhas 120-180)

**Adicionar/remover modalidades conforme oferecidas**:

```html
<div class="class-card">
  <div class="class-icon">
    <i class="fas fa-heart"></i>
  </div>
  <h3>Nome da Aula</h3>
  <p>Descrição da aula oferecida</p>
  <div class="class-details">
    <span><i class="fas fa-clock"></i> Duração</span>
    <span><i class="fas fa-signal"></i> Nível</span>
  </div>
</div>
```

## 🖼️ Adicionando Imagens

### 1. Criar pasta de imagens

```bash
mkdir static/img
```

### 2. Adicionar imagens

- Logo da empresa
- Fotos das aulas
- Imagens do espaço
- Fotos da instrutora

### 3. Substituir placeholder no hero

**Arquivo**: `templates/index.html`
**Linha**: 60

**De**:

```html
<div class="hero-placeholder">
  <i class="fas fa-yoga"></i>
</div>
```

**Para**:

```html
<div class="hero-image">
  <img src="../static/img/hero-image.jpg" alt="Aulas de Yoga" />
</div>
```

## 🎨 Personalização de Cores

### Cores Atuais

- **Primária**: `#719f9e` (Ciano)
- **Secundária**: `#8c6364` (Vermelho)
- **Branco**: `#ffffff`

### Para alterar cores

**Arquivo**: `static/css/style.css`
**Linha**: 6-15

```css
:root {
  --primary-color: #NOVA_COR_PRIMARIA;
  --secondary-color: #NOVA_COR_SECUNDARIA;
  --white: #ffffff;
  /* ... outras cores */
}
```

## 📱 Redes Sociais

### Adicionar links reais

**Arquivo**: `templates/index.html`
**Linha**: 355

```html
<div class="social-links">
  <a href="https://facebook.com/empresa"><i class="fab fa-facebook"></i></a>
  <a href="https://instagram.com/empresa"><i class="fab fa-instagram"></i></a>
  <a href="https://wa.me/5511999999999"><i class="fab fa-whatsapp"></i></a>
</div>
```

## 📋 Checklist de Personalização

### Informações Essenciais

- [ ] Nome da empresa
- [ ] Endereço completo
- [ ] Telefone de contato
- [ ] Email profissional
- [ ] Horários de funcionamento

### Conteúdo das Aulas

- [ ] Tipos de yoga oferecidos
- [ ] Duração de cada aula
- [ ] Níveis (iniciante, intermediário, avançado)
- [ ] Preços (se aplicável)

### Horários

- [ ] Segunda-feira
- [ ] Terça-feira
- [ ] Quarta-feira
- [ ] Quinta-feira
- [ ] Sexta-feira
- [ ] Sábado
- [ ] Domingo (se aplicável)

### Mídia

- [ ] Logo da empresa
- [ ] Fotos do espaço
- [ ] Fotos das aulas
- [ ] Foto da instrutora

### Redes Sociais

- [ ] Facebook
- [ ] Instagram
- [ ] WhatsApp
- [ ] YouTube (se aplicável)

## 🔧 Configurações Avançadas

### 1. Adicionar Google Analytics

**Arquivo**: `templates/index.html`
**Adicionar antes de** `</head>`

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### 2. Adicionar Meta Tags SEO

**Arquivo**: `templates/index.html`
**Adicionar em** `<head>`

```html
<meta name="description" content="Descrição da empresa de yoga" />
<meta name="keywords" content="yoga, aulas, bem-estar, meditação" />
<meta name="author" content="Nome da Empresa" />
<meta property="og:title" content="Nome da Empresa - Yoga" />
<meta property="og:description" content="Descrição para redes sociais" />
<meta property="og:image" content="URL_DA_IMAGEM" />
```

### 3. Configurar Formulário de Contato

Para fazer o formulário funcionar, você precisará de:

- Backend (PHP, Node.js, etc.)
- Ou serviço como Formspree, Netlify Forms

**Exemplo com Formspree**:

```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
  <!-- campos do formulário -->
</form>
```

## 🚀 Deploy

### Opções gratuitas:

1. **GitHub Pages**
2. **Netlify**
3. **Vercel**
4. **Firebase Hosting**

### Opções pagas:

1. **Hostinger**
2. **GoDaddy**
3. **HostGator**

## 📞 Suporte

Para dúvidas sobre personalização:

- Consulte o README.md principal
- Verifique a documentação das tecnologias utilizadas
- Entre em contato para suporte adicional

---

**Lembre-se**: Mantenha sempre um backup do projeto antes de fazer alterações!
