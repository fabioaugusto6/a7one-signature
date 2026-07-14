const phone='5511988244380';
const messages={
  geral:'Olá, Dani! Quero entender qual é o próximo passo da minha empresa.',
  diagnostico:'Olá, Dani! Quero conversar sobre os desafios da minha empresa e receber um direcionamento.',
  clientes:'Olá, Dani! Quero atrair mais clientes e melhorar meu marketing.',
  automacao:'Olá, Dani! Quero automatizar o atendimento da minha empresa.',
  site:'Olá, Dani! Quero criar ou melhorar o site da minha empresa.',
  marca:'Olá, Dani! Quero criar ou reposicionar minha marca.',
  registro:'Olá, Dani! Quero proteger e registrar minha marca.'
};

document.querySelectorAll('[data-topic]').forEach(link=>{
  const topic=link.dataset.topic;
  link.href=`https://wa.me/${phone}?text=${encodeURIComponent(messages[topic])}`;
  link.target='_blank';
  link.rel='noopener';
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const words=['direção.','estrutura.','velocidade.','escala.'];
let index=0;
const target=document.getElementById('word-cycle');
setInterval(()=>{
  index=(index+1)%words.length;
  target.animate([{opacity:0,transform:'translateY(10px)',filter:'blur(6px)'},{opacity:1,transform:'none',filter:'blur(0)'}],{duration:520,easing:'ease-out'});
  target.textContent=words[index];
},2300);
