# Site Master Prime e Master HUB

Site em HTML, CSS e JavaScript puro, sem instalação de dependências

## Abrir o projeto

Abra `index.html` no navegador ou use a extensão Live Server do VS Code

## Pastas

```text
index.html                      página principal
masterhub.html                  página do HUB
assets/
  css/
    personalizar.css            cores e tamanhos compartilhados
    prime.css                   visual da página principal
    hub.css                     visual do HUB
  js/
    consultores.js              cadastro dos consultores
    principal.js                carrossel, busca e menus
  imagens/
    consultores/                fotos usadas no carrossel
    originais/                  imagens de referência preservadas
  fontes/
  videos/
docs/
  COMO-EDITAR.md                 minhas anotações para editar
referencias/
  masterprime_consultores.html   versão antiga, não é a página principal
```

## Cadastrar um consultor

Em `assets/js/consultores.js`, copie um cadastro e preencha nome, cargo, foto, descrição e WhatsApp
O caminho da foto parte da página HTML, por exemplo `assets/imagens/consultores/allan.png`
Separe os cadastros com vírgula

## Personalizar

Edite `assets/css/personalizar.css` para mudar as cores e os tamanhos
Os detalhes estão em [docs/COMO-EDITAR.md](docs/COMO-EDITAR.md)

## O que ainda falta

- Adicionar `masterprime.mp4` e `apresentacao-master.mp4` em `assets/videos/`
- Preencher os textos e cadastros de teste
- Completar as seções provisórias e o conteúdo do HUB
- A versão antiga em `referencias/` ainda contém fotos e vídeo de exemplo ausentes

## Colocar no Git

Execute estes comandos na pasta do projeto quando quiser criar o primeiro commit:

```sh
git init
git add .
git status
git commit -m "Organiza estrutura inicial do site"
```

Depois de criar um repositório vazio no GitHub, substitua a URL abaixo pela URL dele:

```sh
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin HEAD
```

As fotos e a fonte fazem parte dos arquivos enviados ao repositório, escolha um repositório privado se ainda não quiser disponibilizar esses arquivos
