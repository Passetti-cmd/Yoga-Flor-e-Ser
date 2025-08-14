# 🧘‍♀️ Yoga Studio - Site Profissional

Um site moderno e responsivo para empresa de yoga, desenvolvido com HTML5, CSS3 e JavaScript puro.

## 🎨 Cores do Projeto

- **Branco**: `#ffffff` - Cor principal de fundo
- **Ciano**: `#719f9e` - Cor primária (botões, links, destaques)
- **Vermelho**: `#8c6364` - Cor secundária (acentos, hover states)

## 📁 Estrutura do Projeto

```
yoga-html/
├── templates/
│   └── index.html          # Página principal
├── static/
│   ├── css/
│   │   └── style.css       # Estilos principais
│   ├── js/
│   │   └── script.js       # Funcionalidades JavaScript
│   └── img/                # Pasta para imagens
├── README.md               # Este arquivo
└── outros arquivos...
```

## ✨ Funcionalidades

### 🎯 Principais

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Suave**: Scroll suave entre seções
- **Menu Mobile**: Menu hambúrguer para dispositivos móveis
- **Animações**: Efeitos de entrada e transições suaves
- **Formulário de Contato**: Formulário funcional com validação

### 📱 Seções do Site

1. **Hero Section**: Apresentação principal com call-to-action
2. **Sobre Nós**: Missão, valores e estatísticas
3. **Aulas**: Diferentes modalidades de yoga oferecidas
4. **Horários**: Grade semanal de aulas
5. **Contato**: Informações e formulário de contato
6. **Footer**: Links e redes sociais

## 🚀 Como Usar

### 1. Visualização Local

```bash
# Abra o arquivo index.html no navegador
templates/index.html
```

### 2. Servidor Local (Recomendado)

```bash
# Python 3
python -m http.server 8000

# Node.js (se tiver instalado)
npx serve .

# PHP (se tiver instalado)
php -S localhost:8000
```

Acesse: `http://localhost:8000/templates/`

## 🎨 Personalização

### Alterando Cores

As cores estão definidas como variáveis CSS no arquivo `static/css/style.css`:

```css
:root {
  --primary-color: #719f9e; /* Ciano */
  --secondary-color: #8c6364; /* Vermelho */
  --white: #ffffff; /* Branco */
  /* ... outras cores */
}
```

### Alterando Conteúdo

1. **Texto**: Edite diretamente no arquivo `templates/index.html`
2. **Informações de Contato**: Atualize telefone, email e endereço
3. **Horários**: Modifique a tabela de horários conforme necessário
4. **Aulas**: Adicione ou remova modalidades de yoga

### Adicionando Imagens

1. Coloque suas imagens na pasta `static/img/`
2. Substitua o placeholder no hero section:

```html
<div class="hero-placeholder">
  <img src="../static/img/sua-imagem.jpg" alt="Yoga" />
</div>
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Grid e Flexbox
- **JavaScript**: Interatividade e animações
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia Poppins

## 📋 Checklist de Personalização

- [ ] Alterar nome da empresa
- [ ] Atualizar informações de contato
- [ ] Modificar horários das aulas
- [ ] Adicionar/remover modalidades de yoga
- [ ] Incluir fotos reais da empresa
- [ ] Configurar redes sociais
- [ ] Personalizar cores (se necessário)
- [ ] Adicionar domínio personalizado

## 🌟 Recursos Avançados

### Animações

- Fade-in suave para elementos
- Contadores animados nas estatísticas
- Efeito parallax no hero
- Hover effects em botões e cards

### Performance

- CSS otimizado com variáveis
- JavaScript modular e eficiente
- Lazy loading para imagens
- Animações CSS para melhor performance

### Acessibilidade

- HTML semântico
- Navegação por teclado
- Contraste adequado
- Textos alternativos para imagens

## 📞 Suporte

Para dúvidas ou personalizações adicionais:

- Email: contato@yogastudio.com
- Telefone: (11) 99999-9999

## 📄 Licença

Este projeto foi desenvolvido especificamente para a empresa de yoga. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para transformar vidas através do yoga**
