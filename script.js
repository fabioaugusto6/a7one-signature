const phone = "5511988244380";
const messages = {
  geral: "Olá, Dani! Quero entender como a A7 One pode ajudar minha empresa.",
  clientes: "Olá, Dani! Quero atrair e converter mais clientes.",
  site: "Olá, Dani! Quero transformar o site e a presença digital da minha empresa.",
  automacao: "Olá, Dani! Quero ganhar velocidade com automação e atendimento inteligente.",
  marca: "Olá, Dani! Quero criar ou reposicionar a marca da minha empresa.",
  registro: "Olá, Dani! Quero proteger e registrar minha marca.",
  duvida: "Olá, Dani! Ainda não sei qual solução preciso. Posso explicar o momento da minha empresa?"
};

document.querySelectorAll("[data-topic]").forEach((link) => {
  const topic = link.dataset.topic || "geral";
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(messages[topic])}`;
  link.target = "_blank";
  link.rel = "noopener";
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

const progress = document.querySelector(".page-progress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / max) * 100}%`;
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (event) => {
  glow.style.opacity = "1";
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const words = ["direção.", "estrutura.", "clareza.", "escala."];
let wordIndex = 0;
const wordCycle = document.getElementById("word-cycle");
setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  wordCycle.animate(
    [
      { opacity: 0, transform: "translateY(10px)", filter: "blur(7px)" },
      { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }
    ],
    { duration: 600, easing: "cubic-bezier(.2,.8,.2,1)" }
  );
  wordCycle.textContent = words[wordIndex];
}, 2400);

// Lightweight animated canvas for a living, dimensional hero.
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  particles = Array.from({ length: window.innerWidth < 720 ? 22 : 46 }, () => ({
    x: Math.random() * rect.width,
    y: Math.random() * rect.height,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    r: Math.random() * 1.4 + 0.6
  }));
}

function drawCanvas() {
  const rect = canvas.getBoundingClientRect();
  ctx.clearRect(0, 0, rect.width, rect.height);

  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > rect.width) p.vx *= -1;
    if (p.y < 0 || p.y > rect.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(10,102,255,.28)";
    ctx.fill();
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 135) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(10,102,255,${(1 - distance / 135) * 0.11})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawCanvas);
}

resizeCanvas();
drawCanvas();
window.addEventListener("resize", resizeCanvas);
