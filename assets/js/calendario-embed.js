// Só cuido da janela aqui, as regras do calendário ficam no portal
(function () {
  const quadros = Array.from(document.querySelectorAll("iframe[data-calendario]"));
  const estados = new Map();
  quadros.forEach(quadro => {
    const local = location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname);
    if (local && quadro.dataset.urlLocal) quadro.src = quadro.dataset.urlLocal;
    const aviso = document.getElementById(quadro.dataset.aviso);
    const timer = setTimeout(() => {
      if (aviso) {
        aviso.hidden = false;
        aviso.textContent = "Não foi possível carregar o calendário agora. Use o link abaixo para abrir diretamente.";
      }
    }, 15000);
    estados.set(quadro, { origem: new URL(quadro.src, location.href).origin, aviso, timer });
  });
  window.addEventListener("message", event => {
    const quadro = quadros.find(item => item.contentWindow === event.source);
    if (!quadro) return;
    const estado = estados.get(quadro);
    if (event.origin !== estado.origem) return;
    const dados = event.data;
    if (!dados || dados.tipo !== "master-calendario:altura") return;
    if (!Number.isFinite(dados.altura) || dados.altura < 100 || dados.altura > 10000) return;
    quadro.style.height = Math.ceil(dados.altura + 8) + "px";
    clearTimeout(estado.timer);
    if (estado.aviso) estado.aviso.hidden = true;
  });
})();
