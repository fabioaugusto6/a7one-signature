const phone="5511988244380";
const messages={
  geral:"Olá, Dani! Quero conversar sobre o próximo passo da minha empresa.",
  diagnostico:"Olá, Dani! Ainda não sei exatamente o que preciso. Quero explicar o momento da minha empresa e receber um direcionamento.",
  clientes:"Olá, Dani! Quero falar sobre Marketing & Growth.",
  site:"Olá, Dani! Quero falar sobre site e experiência digital.",
  automacao:"Olá, Dani! Quero falar sobre automação e atendimento.",
  marca:"Olá, Dani! Quero falar sobre marca e posicionamento.",
  registro:"Olá, Dani! Quero falar sobre registro de marca.",
  consultoria:"Olá, Dani! Quero um direcionamento estratégico para minha empresa."
};

document.querySelectorAll("[data-topic]").forEach(link=>{
  const topic=link.dataset.topic||"geral";
  link.href=`https://wa.me/${phone}?text=${encodeURIComponent(messages[topic])}`;
  link.target="_blank";
  link.rel="noopener";
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const words=["estratégia.","tecnologia.","execução.","inteligência.","método."];
let wi=0;
const word=document.getElementById("word-cycle");
setInterval(()=>{
  wi=(wi+1)%words.length;
  word.animate(
    [{opacity:0,transform:"translateY(7px)",filter:"blur(5px)"},{opacity:1,transform:"none",filter:"blur(0)"}],
    {duration:520,easing:"cubic-bezier(.2,.8,.2,1)"}
  );
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


/* =========================================================
   A7 ONE — COOKIE CONSENT / LGPD
   ========================================================= */
(() => {
  const STORAGE_KEY = "a7one_cookie_consent_v1";
  const banner = document.querySelector("[data-cookie-banner]");
  const modal = document.querySelector("[data-cookie-modal]");

  if (!banner || !modal) return;

  const categoryInputs = [...modal.querySelectorAll("[data-cookie-category]")];
  const settingsButtons = [...document.querySelectorAll("[data-cookie-settings]")];

  const defaultConsent = {
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
    updatedAt: null
  };

  const readConsent = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return saved && saved.necessary ? { ...defaultConsent, ...saved } : null;
    } catch {
      return null;
    }
  };

  const setInputs = consent => {
    categoryInputs.forEach(input => {
      input.checked = Boolean(consent[input.dataset.cookieCategory]);
    });
  };

  const activateScripts = consent => {
    document.querySelectorAll('script[type="text/plain"][data-cookie-category]').forEach(script => {
      const category = script.dataset.cookieCategory;
      if (!consent[category] || script.dataset.cookieActivated === "true") return;

      const liveScript = document.createElement("script");
      [...script.attributes].forEach(attribute => {
        if (!["type", "data-cookie-category", "data-cookie-activated"].includes(attribute.name)) {
          liveScript.setAttribute(attribute.name, attribute.value);
        }
      });
      liveScript.textContent = script.textContent;
      script.dataset.cookieActivated = "true";
      script.after(liveScript);
    });

    window.dispatchEvent(new CustomEvent("a7one:cookie-consent", { detail: consent }));
  };

  const saveConsent = consent => {
    const normalized = {
      necessary: true,
      preferences: Boolean(consent.preferences),
      analytics: Boolean(consent.analytics),
      marketing: Boolean(consent.marketing),
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    banner.hidden = true;
    modal.hidden = true;
    document.documentElement.classList.remove("cookie-modal-open");
    activateScripts(normalized);
  };

  const openModal = () => {
    const current = readConsent() || defaultConsent;
    setInputs(current);
    modal.hidden = false;
    document.documentElement.classList.add("cookie-modal-open");
  };

  const closeModal = () => {
    modal.hidden = true;
    document.documentElement.classList.remove("cookie-modal-open");
  };

  document.querySelector("[data-cookie-accept]")?.addEventListener("click", () => {
    saveConsent({ preferences: true, analytics: true, marketing: true });
  });

  document.querySelector("[data-cookie-reject]")?.addEventListener("click", () => {
    saveConsent(defaultConsent);
  });

  document.querySelector("[data-cookie-configure]")?.addEventListener("click", openModal);

  document.querySelector("[data-cookie-save]")?.addEventListener("click", () => {
    const selected = { ...defaultConsent };
    categoryInputs.forEach(input => {
      selected[input.dataset.cookieCategory] = input.checked;
    });
    saveConsent(selected);
  });

  document.querySelector("[data-cookie-modal-reject]")?.addEventListener("click", () => {
    setInputs(defaultConsent);
    saveConsent(defaultConsent);
  });

  modal.querySelectorAll("[data-cookie-close]").forEach(button => {
    button.addEventListener("click", closeModal);
  });

  settingsButtons.forEach(button => button.addEventListener("click", openModal));

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });

  const existingConsent = readConsent();
  if (existingConsent) {
    banner.hidden = true;
    activateScripts(existingConsent);
  } else {
    banner.hidden = false;
  }
})();
