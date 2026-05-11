// ===== TABS =====
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.tab;
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + id).classList.add('active');
  });
});

// ===== ACCORDION =====
document.querySelectorAll('.acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.acc-btn').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      btn.classList.add('open');
      body.classList.add('open');
    }
  });
});

// ===== MOBILE NAV =====
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.add('open');
});
document.getElementById('mobileClose').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.remove('open');
});
document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobileNav').classList.remove('open'));
});

// ===== WHY CAROUSEL =====
const track = document.getElementById('whyTrack');
const dotsEl = document.getElementById('wDots');
const cards = track ? Array.from(track.querySelectorAll('.why-card')) : [];
let cur = 0;

function visCount() {
  if (window.innerWidth < 480) return 1;
  if (window.innerWidth < 768) return 2;
  if (window.innerWidth < 1024) return 3;
  return 4;
}
function maxIdx() { return Math.max(0, cards.length - visCount()); }

function buildDots() {
  if (!dotsEl) return;
  dotsEl.innerHTML = '';
  const total = maxIdx() + 1;
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'cdot' + (i === cur ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  }
}
function updateDots() {
  dotsEl.querySelectorAll('.cdot').forEach((d, i) => d.classList.toggle('active', i === cur));
}
function goTo(n) {
  cur = Math.max(0, Math.min(n, maxIdx()));
  const w = cards[0] ? cards[0].offsetWidth + 20 : 0;
  track.style.transform = `translateX(-${cur * w}px)`;
  updateDots();
}

document.getElementById('wPrev')?.addEventListener('click', () => goTo(cur - 1));
document.getElementById('wNext')?.addEventListener('click', () => goTo(cur + 1));

window.addEventListener('resize', () => { buildDots(); goTo(Math.min(cur, maxIdx())); });
buildDots();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 65, behavior: 'smooth' });
    }
  });
});

// ===== SCROLL REVEAL =====
const revEls = document.querySelectorAll('.scard, .expect-item, .pc, .jcard, .why-card');
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  ro.observe(el);
});
