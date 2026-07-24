// ============ Nav: scroll shadow + mobile burger ============
const nav = document.getElementById('nav');
const navBurger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 8 ? '0 4px 20px rgba(0,0,0,.08)' : 'none';
});

navBurger.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

// ============ Project filters ============
const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');
const emptyMsg = document.getElementById('projectsEmpty');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.filter;
    let visibleCount = 0;
    projectCards.forEach(card => {
      const tags = card.dataset.tags || '';
      const match = filter === 'all' || tags.includes(filter);
      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });
    emptyMsg.hidden = visibleCount !== 0;
  });
});

// ============ Contact form (static demo) ============
const contactForm = document.getElementById('contactForm');
const contactNote = document.getElementById('contactNote');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactNote.hidden = false;
  contactForm.reset();
});

// ============ Chat widget demo ============
const chatLauncher = document.getElementById('chatLauncher');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatBody = document.getElementById('chatBody');

chatLauncher.addEventListener('click', () => { chatPanel.hidden = !chatPanel.hidden; });
chatClose.addEventListener('click', () => { chatPanel.hidden = true; });

const canned = [
  { key: 'services', k: ['service', 'services', 'offer', 'hizmet', 'خدمة', 'خدمات'] },
  { key: 'projects', k: ['project', 'work', 'portfolio', 'app', 'proje', 'çalışma', 'uygulama', 'مشروع', 'مشاريع', 'تطبيق'] },
  { key: 'agents', k: ['agent', 'automation', 'workflow', 'n8n', 'ajan', 'otomasyon', 'iş akışı', 'وكيل', 'أتمتة'] },
  { key: 'voice', k: ['voice', 'ses', 'sesli', 'صوت', 'صوتي'] },
  { key: 'chatbot', k: ['chatbot', 'chat bot', 'rag', 'sohbet', 'bot', 'دردشة', 'بوت'] },
  { key: 'team', k: ['team', 'cto', 'ceo', 'founder', 'ekip', 'kurucu', 'فريق', 'مؤسس'] },
  { key: 'contact', k: ['contact', 'email', 'reach', 'iletişim', 'e-posta', 'تواصل', 'بريد'] },
  { key: 'pricing', k: ['price', 'cost', 'pricing', 'quote', 'fiyat', 'ücret', 'teklif', 'سعر', 'تكلفة', 'عرض'] },
];

function botReply(text) {
  const lang = window.currentLang || 'en';
  const dict = translations[lang] || translations.en;
  const lower = text.toLowerCase();
  const found = canned.find(c => c.k.some(k => lower.includes(k)));
  return found ? dict.bot[found.key] : dict.bot.fallback;
}

function addMsg(text, who) {
  const div = document.createElement('div');
  div.className = `chat-msg chat-msg--${who}`;
  div.textContent = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const val = chatInput.value.trim();
  if (!val) return;
  addMsg(val, 'user');
  chatInput.value = '';

  const lang = window.currentLang || 'en';
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: val, lang }),
    });
    if (!res.ok) throw new Error('api error');
    const data = await res.json();
    addMsg(data.reply || botReply(val), 'bot');
  } catch (err) {
    // Offline / local file testing / API not deployed yet — fall back to canned replies
    setTimeout(() => addMsg(botReply(val), 'bot'), 300);
  }
});

// ============ 3D-ish Agent Orchestration Visual ============
(function agentScene() {
  const canvas = document.getElementById('agentCanvas');
  const container = document.getElementById('agentScene');
  const ctx = canvas.getContext('2d');
  let w, h, dpr;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = container.clientWidth;
    h = container.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const nodes = [
    { label: 'Chat', icon: '💬' },
    { label: 'Voice', icon: '🎙️' },
    { label: 'CRM', icon: '📇' },
    { label: 'Automation', icon: '⚙️' },
    { label: 'Cloud', icon: '☁️' },
    { label: 'Code', icon: '</>' },
  ];
  const radius = 210;
  let theta = 0;
  let tiltX = 0, tiltY = 0, targetTiltX = 0, targetTiltY = 0;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width - 0.5;
    const my = (e.clientY - rect.top) / rect.height - 0.5;
    targetTiltY = mx * 0.6;
    targetTiltX = -my * 0.6;
  });
  container.addEventListener('mouseleave', () => { targetTiltX = 0; targetTiltY = 0; });

  function project(x, y, z, cx, cy) {
    // rotate around Y (theta) then apply mouse tilt around X
    const cosT = Math.cos(theta), sinT = Math.sin(theta);
    let x1 = x * cosT - z * sinT;
    let z1 = x * sinT + z * cosT;
    let y1 = y;

    const cosX = Math.cos(tiltX), sinX = Math.sin(tiltX);
    let y2 = y1 * cosX - z1 * sinX;
    let z2 = y1 * sinX + z1 * cosX;

    const focal = 420;
    const scale = focal / (focal + z2 + 260);
    return { x: cx + x1 * scale, y: cy + y2 * scale, scale };
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    theta += 0.006;
    tiltX += (targetTiltX - tiltX) * 0.05;
    tiltY += (targetTiltY - tiltY) * 0.05;

    const projected = nodes.map((n, i) => {
      const angle = (i / nodes.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 2 + theta) * 26;
      return { ...n, ...project(x, y, z, cx, cy) };
    });

    // sort back-to-front by scale (smaller scale = further away)
    projected.sort((a, b) => a.scale - b.scale);

    // connecting lines
    projected.forEach(p => {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = `rgba(140,26,31,${0.15 + p.scale * 0.35})`;
      ctx.lineWidth = 1 + p.scale;
      ctx.stroke();
    });

    // nodes
    projected.forEach(p => {
      const r = 28 * p.scale + 12;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(20,20,20,${0.75 * p.scale + 0.15})`;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(140,26,31,.6)';
      ctx.stroke();

      ctx.font = `${20 * p.scale + 10}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.fillText(p.icon, p.x, p.y);
    });

    requestAnimationFrame(draw);
  }
  draw();
})();
