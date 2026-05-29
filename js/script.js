/* ============================================================
   Susan Vieira — Confeitaria Artesanal
   script.js — GSAP animations, data, interactions
   ============================================================ */

/* ─── DADOS — edite aqui para atualizar o site ─────────── */

/* SVGs reutilizáveis */
const SVG = {
  bolo:     `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B1A4A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16m0 1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1z"/><path d="M3 20v1"/><path d="M21 20v1"/><path d="M7 16v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"/><path d="M12 11v-5"/><path d="M10 6a2 2 0 1 1 4 0"/></svg>`,
  cherry:   `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B1A4A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0"/><path d="M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/><path d="M9 13c.366-2 1.866-3.873 4.5-5.6"/><path d="M17 15c-1.333-2.333-2.333-5.333-1-9"/><path d="M5 6c3.667-2.667 7.333-2.667 11 0c-3.667 2.667-7.333 2.667-11 0"/></svg>`,
  candy:    `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B1A4A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="7" cy="11" r="1"/><circle cx="12" cy="11" r="1"/><circle cx="17" cy="11" r="1"/><path d="M3 16l2-7h14l2 7"/><path d="M3 16h18"/><path d="M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3"/></svg>`,
  dessert:  `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B1A4A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c-4 0-7 2.5-7 6c0 2.5 1.5 4.5 4 5.5v1.5h6v-1.5c2.5-1 4-3 4-5.5c0-3.5-3-6-7-6z"/><path d="M9 20h6"/><path d="M10 17v3"/><path d="M14 17v3"/></svg>`,
  gem:      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B1A4A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5h12l3 5l-8.5 9.5a.7.7 0 0 1-1 0l-8.5-9.5l3-5"/><path d="M10 12l-2-2.2l.6-1"/></svg>`,
};

/* 5 mais pedidos — cards quadrados em destaque */
const maisPedidos = [
  {
    nome: 'Bolo de Festa Decorado',
    svg: SVG.bolo,
    desc: 'O queridinho das comemorações — decorado à mão com flores de chantilly e acabamento impecável.',
    tag: '⭐ N°1 Mais pedido',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Caixa de Brigadeiros',
    svg: SVG.candy,
    desc: 'Brigadeiros gourmet em sabores variados, embalados com carinho para sua festa ou presente.',
    tag: '⭐ N°2 Mais pedido',
    img: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=700&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Naked Cake Artesanal',
    svg: SVG.cherry,
    desc: 'Camadas generosas de massa fofinha, recheio cremoso e frutas frescas — elegância sem exageros.',
    tag: '⭐ N°3 Mais pedido',
    img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=700&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Torta de Frutas Vermelhas',
    svg: SVG.cherry,
    desc: 'Base crocante, creme suave e frutas frescas da estação — uma torta que encanta aos olhos e ao paladar.',
    tag: '⭐ N°4 Mais pedido',
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Doces Finos de Chocolate',
    svg: SVG.gem,
    desc: 'Criações refinadas com chocolates belgas e técnicas de confeitaria profissional para presentear.',
    tag: '⭐ N°5 Mais pedido',
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=700&auto=format&fit=crop&q=80'
  }
];

/* Cardápio completo — 15 itens, abre em modal */
const cardapioCompleto = [
  {
    nome: 'Bolo de Chocolate Belga',
    svg: SVG.bolo,
    desc: 'Massa úmida de cacau intenso com ganache aveludada de chocolate belga 70%.',
    tag: 'Premium',
    img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Docinhos de Festa',
    svg: SVG.candy,
    desc: 'Brigadeiros, beijinhos, bicho-de-pé e muito mais — perfeitos para sua comemoração.',
    tag: 'Festa',
    img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Bolo de Casamento',
    svg: SVG.bolo,
    desc: 'Bolos de múltiplos andares com decoração floral e acabamento sofisticado.',
    tag: 'Especial',
    img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Cheesecake de Frutas',
    svg: SVG.dessert,
    desc: 'Base de biscoito, creme de queijo sedoso e cobertura de frutas frescas da estação.',
    tag: 'Sobremesa',
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Caixa de Trufas',
    svg: SVG.gem,
    desc: 'Trufas artesanais em vários sabores — presente perfeito para qualquer ocasião especial.',
    tag: 'Premium',
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Bolo Red Velvet',
    svg: SVG.bolo,
    desc: 'Massa vermelha aveludada com cobertura de cream cheese — um clássico irresistível.',
    tag: 'Clássico',
    img: 'https://images.unsplash.com/photo-1586788224231-6b7d89e5f7a7?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Pavê Especial',
    svg: SVG.dessert,
    desc: 'Camadas alternadas de biscoito, creme e cobertura — receita de família com toque gourmet.',
    tag: 'Sobremesa',
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Cupcakes Decorados',
    svg: SVG.candy,
    desc: 'Mini bolinhos fofos com cobertura de chantilly colorido — perfeitos para festinhas.',
    tag: 'Mini',
    img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Bolo de Cenoura',
    svg: SVG.bolo,
    desc: 'O bolo de cenoura com cobertura de chocolate que lembra a infância — fofinho e afetivo.',
    tag: 'Caseiro',
    img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Torta Gelada de Limão',
    svg: SVG.dessert,
    desc: 'Base crocante de biscoito, creme de limão suave e merengue dourado no maçarico.',
    tag: 'Gelada',
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Bolo de Noivado',
    svg: SVG.gem,
    desc: 'Criação exclusiva para momentos únicos — decoração floral com pétalas comestíveis.',
    tag: 'Especial',
    img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Cesta de Doces',
    svg: SVG.candy,
    desc: 'Seleção especial de docinhos variados em cesta decorada — presente elegante e delicioso.',
    tag: 'Presente',
    img: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Bolo de Aniversário Infantil',
    svg: SVG.bolo,
    desc: 'Bolos temáticos coloridos e criativos que encantam crianças e adultos igualmente.',
    tag: 'Infantil',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Bolo de Pote',
    svg: SVG.dessert,
    desc: 'Camadas de bolo, recheio e cobertura em potinhos individuais — praticidade e sabor.',
    tag: 'Individual',
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80'
  },
  {
    nome: 'Mesa de Doces Completa',
    svg: SVG.gem,
    desc: 'Montagem completa de mesa de doces para eventos — variedade, beleza e muito sabor.',
    tag: 'Evento',
    img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop&q=80'
  }
];

const galeriaFileira1 = [
  { img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80', alt: 'Bolo de festa decorado' },
  { img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=80', alt: 'Naked cake com flores frescas' },
  { img: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&auto=format&fit=crop&q=80', alt: 'Brigadeiros gourmet' },
  { img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=80', alt: 'Bolo de chocolate caseiro' },
  { img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80', alt: 'Sobremesa especial' },
  { img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80', alt: 'Doces finos de chocolate' },
  { img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop&q=80', alt: 'Bolo de aniversário decorado' },
];

const galeriaFileira2 = [
  { img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80', alt: 'Torta de frutas vermelhas' },
  { img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&auto=format&fit=crop&q=80', alt: 'Docinhos de festa coloridos' },
  { img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=80', alt: 'Naked cake artesanal' },
  { img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=80', alt: 'Bolo de cenoura clássico' },
  { img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80', alt: 'Doces finos especiais' },
  { img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80', alt: 'Bolo de festa decorado' },
  { img: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&auto=format&fit=crop&q=80', alt: 'Brigadeiros gourmet' },
];

const depoimentos = [
  {
    texto: 'O bolo foi absolutamente lindo e o sabor então... todo mundo na festa elogiou muito! A Susan tem um talento incrível e caprichou em cada detalhe. Superou todas as minhas expectativas.',
    autor: 'Ana Paula M.',
    ocasiao: 'Festa de aniversário',
    stars: 5
  },
  {
    texto: 'Encomendei os docinhos e o bolo para o casamento e foram um sucesso total. Chegaram lindos, no prazo combinado, e o atendimento foi impecável do início ao fim. Os convidados não paravam de elogiar!',
    autor: 'Carla & Bruno',
    ocasiao: 'Casamento',
    stars: 5
  },
  {
    texto: 'Já é a terceira vez que peço bolo pra minha filha com a Susan. Ela nunca decepciona — cada ano supera o anterior. As crianças amam os detalhes que ela coloca em cada peça. Super recomendo!',
    autor: 'Fernanda R.',
    ocasiao: 'Aniversário infantil',
    stars: 5
  },
  {
    texto: 'Pedi os doces finos para o chá revelação e fiquei encantada com a apresentação. Parecia coisa de confeitaria chique de revista! Os bolinhos cor-de-rosa e azul foram a estrela da festa. Valeu cada centavo.',
    autor: 'Jéssica L.',
    ocasiao: 'Chá revelação',
    stars: 5
  },
  {
    texto: 'O bolo de chocolate caseiro me levou direto para a infância. Um sabor autêntico, sem químico, que a gente não acha em qualquer lugar. A família inteira pediu a receita — tivemos que explicar que é segredo da Susan!',
    autor: 'Roberto T.',
    ocasiao: 'Reunião familiar',
    stars: 5
  },
  {
    texto: 'Encomendei o naked cake para o meu aniversário de 30 anos e foi o maior elogio da noite. Cada camada era uma surpresa de sabor. Todo mundo pedindo o contato na hora — tive que criar uma lista de espera!',
    autor: 'Mariana C.',
    ocasiao: 'Aniversário de 30 anos',
    stars: 5
  },
  {
    texto: 'Brigadeiros lindos, gostosos e entregues no horário combinado para a festinha da minha sobrinha. A Susan é super atenciosa e profissional. As crianças devoraram em minutos. Com certeza vou pedir de novo!',
    autor: 'Tatiane L.',
    ocasiao: 'Festa infantil',
    stars: 5
  }
];

/* ─── HELPERS ───────────────────────────────────────────── */

function starsHTML(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

/* ─── GSAP ──────────────────────────────────────────────── */

gsap.registerPlugin(ScrollTrigger);

/* ─── LOADER ────────────────────────────────────────────── */

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  setTimeout(() => {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => {
        loader.style.display = 'none';
        initHeroAnim();
      }
    });
  }, 1800);
});

/* ─── INIT — tudo dentro do DOMContentLoaded ────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CURSOR PERSONALIZADO ──────────────────────────────── */

  const cursor         = document.getElementById('cursor');
  const cursorFollower = document.getElementById('cursorFollower');
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  /* ── NAVBAR ────────────────────────────────────────────── */

  const navbar      = document.getElementById('navbar');
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  let menuOpen = false;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);

    const spans = hamburger.querySelectorAll('span');
    if (menuOpen) {
      gsap.to(spans[0], { rotation: 45,  y:  6.5, duration: 0.3 });
      gsap.to(spans[1], { opacity: 0,           duration: 0.2 });
      gsap.to(spans[2], { rotation: -45, y: -6.5, duration: 0.3 });
    } else {
      gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
      gsap.to(spans[1], { opacity: 1,         duration: 0.2 });
      gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
      gsap.to(spans[1], { opacity: 1,         duration: 0.2 });
      gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
    });
  });

  /* ── TOUCH SWIPE: DEPOIMENTOS ──────────────────────────── */

  let touchStartX = 0;
  const trackWrap = document.querySelector('.depoimentos__track-wrap');

  if (trackWrap) {
    trackWrap.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    trackWrap.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        irParaDep(diff > 0
          ? (depAtual + 1) % depoimentos.length
          : (depAtual - 1 + depoimentos.length) % depoimentos.length
        );
      }
    });
  }

  /* ── SMOOTH SCROLL (links navbar) ─────────────────────── */

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── RENDER + ANIMAÇÕES ────────────────────────────────── */

  renderCardapio();
  renderGaleria();
  renderDepoimentos();
  initScrollAnimations();

}); // fim DOMContentLoaded

/* ─── HERO ANIMATION (após loader) ─────────────────────── */

function initHeroAnim() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Conteúdo central
  tl.fromTo('.hero__bg-img',
    { scale: 1.12 },
    { scale: 1.05, duration: 2.4, ease: 'power2.out' }
  )
  .to('.hero__eyebrow',     { opacity: 1, y: 0, duration: 0.7 }, '-=2')
  .to('.hero__logo',        { opacity: 1, y: 0, duration: 0.9, ease: 'back.out(1.4)' }, '-=0.5')
  .to('.hero__tagline',     { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
  .to('.hero__content .btn',{ opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
  .to('.hero__scroll',      { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')

  // 8 decos entram com stagger + scale
  .fromTo(
    ['.hero__deco--L1','.hero__deco--L2','.hero__deco--L3','.hero__deco--L4',
     '.hero__deco--R1','.hero__deco--R2','.hero__deco--R3','.hero__deco--R4'],
    { opacity: 0, scale: 0.4, rotation: -15 },
    { opacity: 0.7, scale: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(1.7)' },
    '-=0.8'
  );

  // ── INTERAÇÃO MAGNÉTICA COM O CURSOR ─────────────────────
  // Cada ícone tem sua posição original e reage ao cursor:
  // — perto (< raio de repulsão): foge do cursor com força proporcional
  // — longe: volta suavemente para a posição original com mola

  const decos = document.querySelectorAll('.hero__deco');
  const REPULSE_RADIUS = 140; // px — distância para ativar repulsão
  const REPULSE_FORCE  = 90;  // px — deslocamento máximo
  const ATTRACT_RADIUS = 220; // px — distância para atração suave
  const ATTRACT_FORCE  = 18;  // px — atração máxima

  // Guarda o estado de cada ícone
  const decoState = Array.from(decos).map(el => ({
    el,
    vx: 0, vy: 0,   // velocidade acumulada (inércia)
    ox: 0, oy: 0    // offset atual
  }));

  let heroMouseX = window.innerWidth / 2;
  let heroMouseY = window.innerHeight / 2;

  const hero = document.getElementById('hero');
  hero.addEventListener('mousemove', (e) => {
    heroMouseX = e.clientX;
    heroMouseY = e.clientY;
  });

  // Loop de física — roda todo frame
  function decoPhysics() {
    decoState.forEach(state => {
      const rect  = state.el.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = heroMouseX - cx;
      const dy    = heroMouseY - cy;
      const dist  = Math.sqrt(dx * dx + dy * dy);

      let targetX = 0;
      let targetY = 0;

      if (dist < REPULSE_RADIUS && dist > 0) {
        // Repulsão: quanto mais perto, mais forte
        const force = (1 - dist / REPULSE_RADIUS) * REPULSE_FORCE;
        targetX = -(dx / dist) * force;
        targetY = -(dy / dist) * force;
      } else if (dist < ATTRACT_RADIUS) {
        // Atração suave na zona intermediária
        const t     = (dist - REPULSE_RADIUS) / (ATTRACT_RADIUS - REPULSE_RADIUS);
        const force = (1 - t) * ATTRACT_FORCE;
        targetX = (dx / dist) * force * 0.4;
        targetY = (dy / dist) * force * 0.4;
      }

      // Mola com amortecimento (spring physics)
      const stiffness  = 0.14;
      const damping    = 0.72;
      state.vx = state.vx * damping + (targetX - state.ox) * stiffness;
      state.vy = state.vy * damping + (targetY - state.oy) * stiffness;
      state.ox += state.vx;
      state.oy += state.vy;

      // Aplica sem sobrescrever o CSS animation — usa translate separado
      state.el.style.translate = `${state.ox.toFixed(2)}px ${state.oy.toFixed(2)}px`;
    });

    requestAnimationFrame(decoPhysics);
  }

  decoPhysics();

  // Parallax leve no bg ao mover o mouse (mantém)
  document.addEventListener('mousemove', (e) => {
    const cx = (e.clientX / window.innerWidth  - 0.5) * 2;
    const cy = (e.clientY / window.innerHeight - 0.5) * 2;
    gsap.to('.hero__bg-img', { x: cx * 10, y: cy * 6, duration: 1.8, ease: 'power2.out' });
  });
}

/* ─── GSAP SCROLL TRIGGERS — motions em todas as seções ── */

gsap.registerPlugin(ScrollTrigger);

/* helper — once:true garante que dispara mesmo se já estiver no viewport */
const st = (trigger, start = 'top 75%') => ({
  scrollTrigger: { trigger, start, once: true }
});

function initScrollAnimations() {
  /* ── MARQUEE ─────────────────────────────────────────────── */
  gsap.from('.marquee', {
    ...st('.marquee', 'top 95%'),
    scaleX: 0, transformOrigin: 'left center', duration: 1, ease: 'expo.out'
  });

  /* ── SOBRE ──────────────────────────────────────────────── */
  gsap.from('.sobre__foto-frame', {
    ...st('.sobre', 'top 68%'),
    x: -70, opacity: 0, rotation: -4, duration: 1.1, ease: 'power3.out'
  });
  gsap.from('.sobre__badge', {
    ...st('.sobre', 'top 60%'),
    scale: 0, opacity: 0, duration: 0.55, delay: 0.5, ease: 'back.out(2.2)'
  });
  gsap.from('.sobre__foto-deco', {
    ...st('.sobre', 'top 60%'),
    scale: 0, rotation: 30, opacity: 0, duration: 0.5, delay: 0.7, ease: 'back.out(2)'
  });
  gsap.from([
    '.sobre__pretitulo', '.sobre__titulo', '.sobre__desc',
    '.sobre__lista li',  '.sobre .btn'
  ], {
    ...st('.sobre__texto', 'top 78%'),
    y: 36, opacity: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out'
  });

  /* ── ESPECIALIDADES header ──────────────────────────────── */
  gsap.from('.especialidades__header > *', {
    ...st('.especialidades', 'top 72%'),
    y: 32, opacity: 0, duration: 0.7, stagger: 0.13, ease: 'power3.out'
  });

  /* ── GALERIA ────────────────────────────────────────────── */
  gsap.from('.galeria__header > *', {
    ...st('.galeria', 'top 75%'),
    y: 32, opacity: 0, duration: 0.7, stagger: 0.13, ease: 'power3.out'
  });
  gsap.from('.galeria__footer', {
    ...st('.galeria__footer', 'top 92%'),
    y: 20, opacity: 0, duration: 0.6, ease: 'power2.out'
  });

  /* ── DEPOIMENTOS ────────────────────────────────────────── */
  gsap.from('.depoimentos__header > *', {
    ...st('.depoimentos', 'top 75%'),
    y: 32, opacity: 0, duration: 0.7, stagger: 0.13, ease: 'power3.out'
  });
  gsap.from('.depoimentos__nav', {
    ...st('.depoimentos__nav', 'top 95%'),
    y: 16, opacity: 0, duration: 0.5, ease: 'power2.out'
  });

  /* ── CTA FINAL ──────────────────────────────────────────── */
  gsap.from([
    '.cta-final__cherry-icon', '.cta-final__titulo',
    '.cta-final__sub', '.cta-final .btn', '.cta-final__info'
  ], {
    ...st('.cta-final', 'top 72%'),
    y: 44, opacity: 0, duration: 0.75, stagger: 0.13, ease: 'power3.out'
  });

  /* ── FOOTER ─────────────────────────────────────────────── */
  gsap.from('.footer__inner > *', {
    ...st('.footer', 'top 95%'),
    y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out'
  });
}

/* ─── RENDER: CARDÁPIO ──────────────────────────────────── */

function cardHTMLSquare(item, extra = '') {
  return `
    <div class="card-esp${extra}">
      <div class="card-esp__img-wrap">
        <img src="${item.img}" alt="${item.nome}" loading="lazy" onerror="this.src='img/placeholder.jpg'" />
        <div class="card-esp__icon">${item.svg}</div>
        <div class="card-esp__tag-overlay"><span class="card-esp__tag">${item.tag}</span></div>
      </div>
      <div class="card-esp__body">
        <h3 class="card-esp__nome">${item.nome}</h3>
        <p class="card-esp__desc">${item.desc}</p>
      </div>
    </div>`;
}

function cardHTMLModal(item) {
  return `
    <div class="card-modal">
      <div class="card-modal__img-wrap">
        <img src="${item.img}" alt="${item.nome}" loading="lazy" onerror="this.src='img/placeholder.jpg'" />
      </div>
      <div class="card-modal__body">
        <span class="card-modal__tag">${item.tag}</span>
        <h3 class="card-modal__nome">${item.nome}</h3>
        <p class="card-modal__desc">${item.desc}</p>
      </div>
    </div>`;
}

function renderCardapio() {
  const grid = document.getElementById('especialidadesGrid');
  if (!grid) return;

  // 5 cards quadrados
  const cardsHTML = maisPedidos.map(item => cardHTMLSquare(item, ' card-esp--destaque')).join('');

  grid.innerHTML = `
    <div class="cardapio__cinco">
      ${cardsHTML}
    </div>
    <div class="cardapio__toggle-wrap">
      <button class="btn btn--vinho cardapio__toggle" id="cardapioToggle">
        <i class="ph ph-book-open"></i>
        Ver cardápio completo
      </button>
    </div>

    <!-- MODAL CARDÁPIO -->
    <div class="cardapio-modal" id="cardapioModal" aria-hidden="true">
      <div class="cardapio-modal__overlay" id="cardapioModalOverlay"></div>
      <div class="cardapio-modal__panel">
        <div class="cardapio-modal__scroll">
        <div class="cardapio-modal__header">
          <div>
            <p class="section-pretitulo">✦ Tudo que preparamos</p>
            <h2 class="cardapio-modal__titulo">Cardápio <em>Completo</em></h2>
          </div>
          <button class="cardapio-modal__close" id="cardapioModalClose" aria-label="Fechar">
            <i class="ph ph-x"></i>
          </button>
        </div>
        <div class="cardapio-modal__grid">
          ${cardapioCompleto.map(item => cardHTMLModal(item)).join('')}
        </div>
        <div class="cardapio-modal__footer">
          <a href="https://wa.me/5519999474895?text=Ol%C3%A1%20Susan!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20encomenda" target="_blank" class="btn btn--vinho">
            <i class="ph ph-whatsapp-logo"></i> Fazer encomenda
          </a>
        </div>
        </div>
      </div>
    </div>
  `;

  // Abrir modal
  const toggleBtn = document.getElementById('cardapioToggle');
  const modal     = document.getElementById('cardapioModal');
  const overlay   = document.getElementById('cardapioModalOverlay');
  const closeBtn  = document.getElementById('cardapioModalClose');

  function abrirModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    gsap.fromTo('.card-modal',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out', delay: 0.2 }
    );
  }

  function fecharModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', abrirModal);
  overlay.addEventListener('click', fecharModal);
  closeBtn.addEventListener('click', fecharModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModal();
  });

  // GSAP: 5 cards entram em cascata
  // Garante que os cards comecem visíveis caso já estejam no viewport
  gsap.set('.card-esp--destaque', { autoAlpha: 1, y: 0 });

  ScrollTrigger.create({
    trigger: '.cardapio__cinco',
    start: 'top 90%',
    once: true,
    onEnter: () => {
      gsap.fromTo('.card-esp--destaque',
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out' }
      );
    }
  });

  // Fallback: se já está visível no load, anima imediatamente
  ScrollTrigger.refresh();

  gsap.from('.cardapio__toggle-wrap', {
    scrollTrigger: {
      trigger: '.cardapio__toggle-wrap',
      start: 'top 95%',
      once: true
    },
    y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.out'
  });
}

/* ─── RENDER: GALERIA ───────────────────────────────────── */

function renderGaleria() {
  const grid = document.getElementById('galeriaGrid');
  if (!grid) return;

  // Duplica as imagens para loop contínuo sem salto
  function buildStrip(items, dir) {
    const doubled = [...items, ...items];
    const imgs = doubled.map(item => `
      <div class="galeria-strip__item">
        <img src="${item.img}" alt="${item.alt}" loading="lazy" />
      </div>
    `).join('');
    return `<div class="galeria-strip galeria-strip--${dir}">${imgs}</div>`;
  }

  grid.innerHTML =
    buildStrip(galeriaFileira1, 'left') +
    buildStrip(galeriaFileira2, 'right');
}

/* ─── RENDER + LÓGICA: DEPOIMENTOS ─────────────────────── */

let depAtual = 0;

function renderDepoimentos() {
  const stage = document.getElementById('depStage');
  const dots  = document.getElementById('depDots');
  if (!stage || !dots) return;

  stage.innerHTML = depoimentos.map((dep, i) => `
    <div class="card-dep" data-index="${i}">
      <span class="card-dep__aspas">"</span>
      <p class="card-dep__texto">${dep.texto}</p>
      <div class="card-dep__stars">${starsHTML(dep.stars)}</div>
      <div class="card-dep__rodape">
        <p class="card-dep__autor">${dep.autor}</p>
        <p class="card-dep__ocasiao">${dep.ocasiao}</p>
      </div>
    </div>
  `).join('');

  dots.innerHTML = depoimentos.map((_, i) => `
    <button class="dep-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Depoimento ${i + 1}"></button>
  `).join('');

  // Dots
  dots.querySelectorAll('.dep-dot').forEach(dot => {
    dot.addEventListener('click', () => irParaDep(+dot.dataset.index));
  });

  // Setas
  document.getElementById('depPrev').addEventListener('click', () => {
    irParaDep((depAtual - 1 + depoimentos.length) % depoimentos.length);
  });
  document.getElementById('depNext').addEventListener('click', () => {
    irParaDep((depAtual + 1) % depoimentos.length);
  });

  // Posição inicial sem animação
  posicionarCards(false);

  // Auto-play
  setInterval(() => {
    irParaDep((depAtual + 1) % depoimentos.length);
  }, 5500);

  // Entrada com scroll
  gsap.from('.dep-carousel-wrap', {
    scrollTrigger: { trigger: '.dep-carousel-wrap', start: 'top 80%', once: true },
    y: 50, opacity: 0, duration: 0.85, ease: 'power3.out'
  });
}

function posicionarCards(animate) {
  const cards = document.querySelectorAll('#depStage .card-dep');
  const total = depoimentos.length;

  cards.forEach((card, i) => {
    const pos = ((i - depAtual) % total + total) % total;
    // pos 0 = centro, 1 = direita, total-1 = esquerda, resto = oculto
    let cfg;
    if (pos === 0) {
      cfg = { x: 0,    scale: 1,    autoAlpha: 1,   zIndex: 10, y: 0,  pointerEvents: 'auto'  };
    } else if (pos === 1) {
      cfg = { x: 420,  scale: 0.76, autoAlpha: 0.5, zIndex: 5,  y: 28, pointerEvents: 'none' };
    } else if (pos === total - 1) {
      cfg = { x: -420, scale: 0.76, autoAlpha: 0.5, zIndex: 5,  y: 28, pointerEvents: 'none' };
    } else {
      cfg = { x: 0,    scale: 0.55, autoAlpha: 0,   zIndex: 1,  y: 0,  pointerEvents: 'none' };
    }

    if (animate) {
      gsap.to(card, { ...cfg, duration: 0.65, ease: 'power3.inOut' });
    } else {
      gsap.set(card, cfg);
    }
  });
}

function irParaDep(index) {
  depAtual = index;
  posicionarCards(true);
  document.querySelectorAll('.dep-dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}


