const phone = "5511988244380";

const messages = {
  geral: "Olá, Dani! Quero conversar sobre o próximo passo da minha empresa.",
  diagnostico: "Olá, Dani! Ainda não sei exatamente o que preciso. Quero explicar o momento da minha empresa e receber um direcionamento.",
  clientes: "Olá, Dani! Quero falar sobre Marketing & Growth para atrair e converter mais clientes.",
  site: "Olá, Dani! Quero falar sobre site e presença digital para minha empresa.",
  automacao: "Olá, Dani! Quero falar sobre automação e atendimento inteligente.",
  marca: "Olá, Dani! Quero falar sobre marca e posicionamento.",
  registro: "Olá, Dani! Quero falar sobre registro e proteção de marca.",
  consultoria: "Olá, Dani! Quero agendar uma conversa de direcionamento estratégico."
};

document.querySelectorAll("[data-topic]").forEach((link) => {
  const topic = link.dataset.topic || "geral";
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(messages[topic])}`;
  link.target = "_blank";
  link.rel = "noopener";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const words = ["estratégia.", "tecnologia.", "execução.", "inteligência.", "método."];
const word = document.getElementById("word-cycle");
let wordIndex = 0;

setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  word.animate(
    [
      { opacity: 0, transform: "translateY(9px)", filter: "blur(6px)" },
      { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }
    ],
    { duration: 560, easing: "cubic-bezier(.2,.8,.2,1)" }
  );
  word.textContent = words[wordIndex];
}, 2300);

const progress = document.querySelector(".progress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${Math.max(0, Math.min(100, (window.scrollY / max) * 100))}%`;
});

const cursor = document.querySelector(".cursor-light");
window.addEventListener("mousemove", (event) => {
  cursor.style.opacity = "1";
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

const system = document.querySelector(".a7-system");
if (system) {
  system.addEventListener("mousemove", (event) => {
    const rect = system.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const core = system.querySelector(".system-core");
    core.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  system.addEventListener("mouseleave", () => {
    system.querySelector(".system-core").style.transform = "";
  });
}


const roomWords = ["estrutura.", "direção.", "ritmo.", "escala."];
const roomWord = document.getElementById("room-word");
let roomWordIndex = 0;
if (roomWord) {
  setInterval(() => {
    roomWordIndex = (roomWordIndex + 1) % roomWords.length;
    roomWord.animate(
      [
        { opacity: 0, transform: "translateY(7px)", filter: "blur(5px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }
      ],
      { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)" }
    );
    roomWord.textContent = roomWords[roomWordIndex];
  }, 2500);
}
