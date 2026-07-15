const phone = "5511988244380";
const messages = {
  geral: "Olá, Dani! Quero conversar sobre o próximo passo da minha empresa.",
  diagnostico: "Olá, Dani! Ainda não sei exatamente o que preciso. Quero explicar o momento da minha empresa e receber um direcionamento.",
  clientes: "Olá, Dani! Quero falar sobre Marketing & Growth.",
  site: "Olá, Dani! Quero falar sobre site e experiência digital.",
  automacao: "Olá, Dani! Quero falar sobre automação e atendimento.",
  marca: "Olá, Dani! Quero falar sobre marca e posicionamento.",
  registro: "Olá, Dani! Quero falar sobre registro de marca.",
  consultoria: "Olá, Dani! Quero um direcionamento estratégico para minha empresa."
};

document.querySelectorAll("[data-topic]").forEach(link => {
  const topic = link.dataset.topic || "geral";
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(messages[topic])}`;
  link.target = "_blank";
  link.rel = "noopener";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const words = ["estratégia.","tecnologia.","execução.","inteligência.","método."];
let wi=0;
const word=document.getElementById("word-cycle");
setInterval(()=>{
  wi=(wi+1)%words.length;
  word.animate([{opacity:0,transform:"translateY(7px)",filter:"blur(5px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:520,easing:"cubic-bezier(.2,.8,.2,1)"});
  word.textContent=words[wi];
},2300);

const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=`${Math.max(0,Math.min(100,scrollY/max*100))}%`;
});

const glow=document.querySelector(".cursor-glow");
window.addEventListener("mousemove",e=>{
  glow.style.opacity="1";
  glow.style.left=`${e.clientX}px`;
  glow.style.top=`${e.clientY}px`;
});
