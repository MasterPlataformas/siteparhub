

// Copiar botão na mão tava um saco, agora a lista monta as fotos
const carrossel = document.getElementById("carrossel");
const consultores = listaConsultores.map(pessoa => {
  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "consultor";
  botao.dataset.nome = pessoa.nome;
  botao.dataset.cargo = pessoa.cargo || "";
  botao.dataset.descricao = pessoa.descricao || "";
  botao.dataset.whatsapp = pessoa.whatsapp || "";

  const foto = document.createElement("img");
  foto.src = pessoa.foto;
  foto.alt = pessoa.nome;
  botao.appendChild(foto);
  carrossel.appendChild(botao);
  return botao;
});

let consultorAtual = 0;

// Quando troco a foto, atualizo o nome, o texto e o contato juntos
function atualizarCarrossel() {

  const total = consultores.length;
  document.querySelectorAll(".controles .seta").forEach(seta => {
    seta.disabled = total < 2;
  });
  if (total === 0) {
    document.getElementById("nomeConsultor").textContent = "Nossa equipe";
    document.getElementById("cargoConsultor").textContent = "";
    document.getElementById("textoConsultor").textContent = "Em breve, conheça nossos consultores";
    document.getElementById("indicador").textContent = "0 / 0";
    document.getElementById("whatsappConsultor").hidden = true;
    return;
  }

  consultores.forEach((consultor, indice) => {

    const distancia = (indice - consultorAtual + total) % total;

    consultor.classList.remove("ativo", "esquerda", "direita");

    if (distancia === 0) consultor.classList.add("ativo");

    if (total > 1 && distancia === total - 1) consultor.classList.add("esquerda");

    const visivel = distancia === 0 || distancia === total - 1;

    consultor.tabIndex = visivel ? 0 : -1;

    consultor.setAttribute("aria-pressed", String(distancia === 0));

  });

  const selecionado = consultores[consultorAtual];

  document.getElementById("nomeConsultor").textContent = selecionado.dataset.nome;

  document.getElementById("cargoConsultor").textContent = selecionado.dataset.cargo;

  document.getElementById("textoConsultor").textContent = selecionado.dataset.descricao || "";

  document.getElementById("indicador").textContent = `${consultorAtual + 1} / ${total}`;

  const botao = document.getElementById("whatsappConsultor");

  const numero = (selecionado.dataset.whatsapp || "").replace(/\D/g, "");

  botao.hidden = !numero;

  if (numero) {

    const mensagem = encodeURIComponent(`Olá! Gostaria de falar com ${selecionado.dataset.nome} sobre consórcios.`);

    botao.href = `https\://wa.me/${numero}?text=${mensagem}`;

  } else {

    botao.removeAttribute("href");

  }

}

// Ao chegar na última foto, volto para a primeira
function mudarConsultor(direcao) {
  if (consultores.length === 0) return;

  consultorAtual = (consultorAtual + direcao + consultores.length) % consultores.length;

  atualizarCarrossel();

}

consultores.forEach((consultor, indice) => {

  consultor.addEventListener("click", () => {

    consultorAtual = indice;

    atualizarCarrossel();

  });

});

document.getElementById("carrossel").addEventListener("keydown", event => {

  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {

    event.preventDefault();

    mudarConsultor(event.key === "ArrowRight" ? 1 : -1);

    consultores[consultorAtual]?.focus();

  }

});

// Caralho, um menu aberto por vez pra não virar bagunça
const barra = document.querySelector(".barra-superior");
const menus = Array.from(barra.querySelectorAll("details"));
const fundoMenu = document.querySelector(".fundo-menu");
const conteudos = [document.querySelector("main"), document.querySelector("footer")];

function atualizarFundoMenu() {
  const aberto = menus.some(menu => menu.open);
  if (fundoMenu) fundoMenu.hidden = !aberto;
  conteudos.forEach(conteudo => { conteudo.inert = aberto; });
}

function fecharMenus() {
  menus.forEach(menu => { menu.open = false; });
  atualizarFundoMenu();
}

menus.forEach(menu => {
  const resumo = menu.querySelector("summary");
  resumo.addEventListener("click", event => {
    event.preventDefault();
    const abrir = !menu.open;
    fecharMenus();
    menu.open = abrir;
    atualizarFundoMenu();
  });
  menu.addEventListener("toggle", () => {
    atualizarFundoMenu();
  });
  menu.addEventListener("click", event => {
    if (event.target.closest("a")) fecharMenus();
  });
});

document.addEventListener("click", event => {
  if (!barra.contains(event.target)) fecharMenus();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    const aberto = menus.find(menu => menu.open);
    fecharMenus();
    aberto?.querySelector("summary").focus();
  }
});
barra.addEventListener("focusout", () => {
  setTimeout(() => {
    if (!barra.contains(document.activeElement)) fecharMenus();
  }, 0);
});

// A barra muda de altura no celular, o painel precisa acompanhar
function atualizarTopoGaveta() {
  document.documentElement.style.setProperty("--topo-gaveta", barra.getBoundingClientRect().bottom + "px");
}
new ResizeObserver(atualizarTopoGaveta).observe(barra);
window.addEventListener("resize", atualizarTopoGaveta);
atualizarTopoGaveta();

// A busca usa os nomes que cadastrei nas fotos
document.getElementById("busca-consultor").addEventListener("submit", event => {
  event.preventDefault();
  const termo = document.getElementById("termo-busca").value.trim().toLocaleLowerCase("pt-BR");
  const indice = termo ? consultores.findIndex(consultor => consultor.dataset.nome.toLocaleLowerCase("pt-BR").includes(termo)) : -1;
  document.getElementById("resultado-busca").textContent = indice < 0 ? "Nenhum consultor encontrado." : "";
  if (indice >= 0) {
    consultorAtual = indice;
    atualizarCarrossel();
    fecharMenus();
    document.getElementById("consultores").scrollIntoView();
    consultores[indice].focus({ preventScroll: true });
  }
});

atualizarCarrossel();
