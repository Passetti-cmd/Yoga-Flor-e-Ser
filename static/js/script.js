// Menu mobile toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header com scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (window.scrollY > 100) {
    if (currentTheme === "dark") {
      header.style.background = "rgba(26, 26, 26, 0.95)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)";
    }
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "var(--header-bg)";
    header.style.backdropFilter = "none";
  }
});

// Navegação ativa baseada no scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Animação de entrada dos elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observar elementos para animação
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".class-card, .contact-item, .stat-item"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Formulário de contato
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simular envio do formulário
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;

    // Simular delay de envio
    setTimeout(() => {
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      this.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Contador animado para estatísticas
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + "+";
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + "+";
    }
  }, 16);
}

// Animar contadores quando visíveis
const statNumbers = document.querySelectorAll(".stat-number");
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.textContent);
        animateCounter(entry.target, target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

statNumbers.forEach((stat) => {
  statObserver.observe(stat);
});

// Efeito parallax suave no hero (apenas em desktop)
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector(".hero-placeholder");
  if (heroImage && window.innerWidth > 768) {
    const rate = scrolled * -0.5;
    heroImage.style.transform = `translateY(${rate}px)`;
  }
});

// Tooltip para informações das aulas
document.querySelectorAll(".class-details span").forEach((span) => {
  span.addEventListener("mouseenter", function () {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = this.textContent;
    tooltip.style.cssText = `
            position: absolute;
            background: var(--primary-color);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
        `;

    document.body.appendChild(tooltip);

    const rect = this.getBoundingClientRect();
    tooltip.style.left =
      rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
    tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + "px";

    setTimeout(() => (tooltip.style.opacity = "1"), 10);

    this.addEventListener("mouseleave", () => {
      tooltip.remove();
    });
  });
});

// Lazy loading para imagens (se houver)
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Smooth reveal para seções
const revealSections = document.querySelectorAll("section");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealSections.forEach((section) => {
  revealObserver.observe(section);
});

// Adicionar classe CSS para animação de reveal
const style = document.createElement("style");
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1 !important;
        transform: none !important;
    }
`;
document.head.appendChild(style);

// Preloader (opcional)
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});

// Validação de formulário em tempo real
const formInputs = document.querySelectorAll(
  ".contact-form input, .contact-form textarea, .contact-form select"
);
formInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.hasAttribute("required") && !this.value.trim()) {
      this.style.borderColor = "var(--secondary-color)";
    } else {
      this.style.borderColor = "var(--border-color)";
    }
  });

  input.addEventListener("input", function () {
    if (this.style.borderColor === "rgb(140, 99, 100)") {
      this.style.borderColor = "var(--border-color)";
    }
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Verificar se há tema salvo no localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
}

// Função para alternar tema
function toggleTheme() {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Resetar header para aplicar nova cor
  const header = document.querySelector(".header");
  header.style.background = "var(--header-bg)";
  header.style.backdropFilter = "none";
}

// Event listener para o botão
themeToggle.addEventListener("click", toggleTheme);

console.log("Yoga Studio - Site carregado com sucesso! 🧘‍♀️");
