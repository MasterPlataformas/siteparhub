# Minhas anotações do site

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
