(() => {
  const vitrine = document.querySelector('[data-vitrine-veiculos]');
  if (!vitrine) return;
  const prefixo = vitrine.dataset.assets;
  // Para adicionar carros ou alterar textos, edite cadastro-veiculos.js.
  const veiculos = listaVeiculos;
  if (veiculos.length === 0) { vitrine.hidden = true; return; }
  const foto = vitrine.querySelector('.vitrine-foto');
  const nome = vitrine.querySelector('.vitrine-modelo');
  const marca = vitrine.querySelector('.vitrine-marca');
  const logo = vitrine.querySelector('.vitrine-logo');
  let atual = Math.floor(Math.random() * veiculos.length);
  for (const veiculo of veiculos) {
    const preload = new Image();
    preload.src = prefixo + veiculo.foto;
    const preloadLogo = new Image();
    preloadLogo.src = prefixo + veiculo.logo;
  }
  function mostrar() {
    const veiculo = veiculos[atual];
    foto.src = prefixo + veiculo.foto;
    foto.alt = veiculo.marca + ' ' + veiculo.nome;
    nome.textContent = veiculo.nome;
    marca.textContent = veiculo.marca;
    logo.src = prefixo + veiculo.logo;
    logo.alt = 'Logo ' + veiculo.marca;
    logo.classList.toggle('vitrine-logo-colorida', veiculo.logoColorida === true);
    vitrine.dataset.modelo = veiculo.foto.replace('.png', '');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && foto.animate) {
      foto.animate([{ opacity: .15, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 500, easing: 'ease-out' });
    }
  }
  mostrar();
  if (veiculos.length > 1) window.setInterval(() => {
    if (document.hidden) return;
    // Sorteia outro carro, sem repetir imediatamente o que está na tela.
    atual = (atual + 1 + Math.floor(Math.random() * (veiculos.length - 1))) % veiculos.length;
    mostrar();
  }, intervaloVeiculos);
})();
