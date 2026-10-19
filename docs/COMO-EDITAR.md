# Minhas anotações do site

## Calendário de assembleias

O tópico Assembleias em `paginas/duvidas.html` mostra o calendário compartilhado do portal
As regras ficam em `.integracoes/masterprime-portal/calendario.js`, não no JavaScript do site
Para publicar e manter essa integração, sigo `docs/CALENDARIO-COMPARTILHADO.md`

## Páginas das gavetas

Os itens principais abrem os arquivos da pasta `paginas/` em novas abas
Cada página tem só título e `------------escrita` para eu preencher depois
O visual delas fica em `assets/css/paginas.css`, usando as cores de `assets/css/personalizar.css`

As chamadas menores vão para `paginas/duvidas.html`, cada uma no seu tópico
O `#` no final do link indica o `id` do tópico dentro dessa mesma página

Na `index.html` deixei só os resumos, sem repetir todos os detalhes

## Visual

As cores e os tamanhos principais ficam em `assets/css/personalizar.css`. As duas páginas usam esse arquivo.

- Letras do menu: `--fonte-menu` (computador) e `--fonte-menu-celular`.
- Cor amarela dos botões: `--cor-destaque`.
- Fundo preto dos botões: `--cor-preto`.
- Tamanho do botão Prime/HUB: `--fonte-botao-pagina` e os dois `--espaco-botao-*`.
- Fotos: `--largura-foto` e `--altura-foto`. Se aumentar a altura, ajusto também `--altura-carrossel`.
- Nome e descrição: `--fonte-nome` e `--fonte-descricao`.
- Logo no fundo: `--tamanho-logo-fundo`, `--desfoque-logo-fundo` e `--opacidade-logo-fundo`.

Exemplo: para aumentar as letras do menu, troco `--fonte-menu: 22px;` por `--fonte-menu: 26px;`.

As regras no final do arquivo ajustam as fotos para tablet e celular. Se quiser mudar só no celular, edito os valores dentro de `max-width: 600px`.

`clamp(mínimo, tamanho flexível, máximo)` faz o texto acompanhar a tela sem ficar pequeno ou grande demais.

## Pessoas e textos

Os cadastros ficam em `assets/js/consultores.js`, na lista `listaConsultores`

Para adicionar alguém, copio um bloco completo entre `{ }`, coloco uma vírgula entre os blocos e preencho:

- `nome`: nome da pessoa
- `cargo`: especialidade
- `foto`: caminho da foto, como `assets/imagens/consultores/allan.png`
- `descricao`: texto de apresentação
- `whatsapp`: 55 + DDD + número, só dígitos, ou vazio para esconder o contato

A foto, o texto, a busca e a contagem são atualizados automaticamente

O comentário `o allan é lindo` fica só no código, não aparece na descrição do site

Os nomes e as apresentações atuais ainda são exemplos de teste

## Páginas e vídeos

`index.html` é a página principal e `masterhub.html` é a página do HUB. Os botões são links entre esses arquivos.

Os vídeos `masterprime.mp4` e `apresentacao-master.mp4` ainda precisam ser colocados em `assets/videos/`, ou substituídos no `src` pelos nomes dos meus vídeos.

Alguns links do menu ainda apontam para trechos provisórios. Vou ajustar quando criar essas seções.

Depois de salvar, atualizo o navegador com Ctrl + F5.

## Adicionar carros ao banner

Edite somente `assets/js/cadastro-veiculos.js`. Ele contém um exemplo comentado pronto para copiar.

1. Salve a foto do carro e a logo, em PNG sem fundo, em `assets/imagens/veiculos/`.
2. Copie um cadastro dentro de `listaVeiculos`, antes do `];` final.
3. Preencha `nome`, `marca`, `texto`, `foto`, `logo` e `logoColorida`.
4. Em `foto` e `logo`, informe apenas o nome do arquivo, incluindo `.png`.
5. Mantenha uma vírgula depois de cada bloco, salve e atualize com Ctrl + F5.

`texto` é a frase abaixo do nome: por exemplo, `0KM`, `HÍBRIDO` ou `ELÉTRICO`.
`logoColorida: true` preserva as cores da logo. `false` deixa a logo branca sobre o banner preto.
`intervaloVeiculos = 3000` controla a troca a cada 3 segundos.
Não é necessário alterar HTML, CSS ou a lógica do sorteio para cadastrar outro carro.
