
(() => {
  const page = document.querySelector(".lp-page");
  if (!page) return;

  document.querySelectorAll('[data-topic="site"]').forEach(link => {
    link.href = "https://wa.me/5511988244380?text=" + encodeURIComponent(
      "Olá, Dani! Vi a página de criação de sites da A7 One e quero entender qual solução é ideal para minha empresa."
    );
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  const details = [...document.querySelectorAll(".faq-list details")];
  details.forEach(item => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      details.forEach(other => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
