# Calendário compartilhado

## Estrutura

O tópico Assembleias de `paginas/duvidas.html` mostra o calendário por iframe
As regras ficam só no projeto do portal, sem copiar o cálculo para o site

Preparei um checkout separado em `.integracoes/masterprime-portal/`
Essa pasta está no `.gitignore` do site porque pertence a outro repositório
O remoto é `https://github.com/grupomasterprime/masterprime-portal.git`
O ponto de partida foi o commit `60cb67b0f14970c7e03c984516cda3661088b7d6`

## Arquivos do portal

- `calendario.html`: página independente com a tabela
- `calendario.js`: cálculos e consulta da Loteria Federal, extraídos do portal
- `calendario.css`: aparência e rolagem horizontal das tabelas no celular
- `calendario-altura.js`: informa a altura da tabela para o iframe
- `calendario-embed.js`: ajusta o iframe e mostra aviso se não carregar
- `calendario-site.js`: monta os cartões do tema do site usando as mesmas datas
- `calendario-site.css`: cores, letras e espaçamentos exclusivos do site
- `index.html`: mostra o iframe, removendo o cálculo duplicado

Os avisos de suplência em teste foram preservados
Os cálculos existentes não foram revisados nem certificados nesta integração
As regras usam a data local do dispositivo, como no portal original

## Testar

Abra `paginas/duvidas.html` e procure Assembleias
Com arquivo local ou localhost, o iframe usa o checkout em `.integracoes/`
Essa prévia depende desse checkout, que não é enviado junto com o site
Prefiro Live Server para evitar as restrições do navegador com arquivos locais

Em uma hospedagem, o site usa:

https://grupomasterprime.github.io/masterprime-portal/calendario.html

Esse endereço e o link para abrir em outra aba só funcionam depois de publicar os arquivos novos no portal

## Publicar primeiro o portal

Os arquivos estão preparados, mas ainda não criei commits nem enviei para o GitHub
Na raiz do site, entro no checkout do portal:

```powershell
Set-Location .integracoes/masterprime-portal
git status
git pull --ff-only origin main
```

Se o pull avisar sobre conflito ou alterações incompatíveis, paro para revisar
Se estiver tudo certo:

```powershell
git add index.html calendario.html calendario.js calendario.css calendario-altura.js calendario-embed.js calendario-site.js calendario-site.css
git commit -m "Extrai calendario compartilhado do portal"
git push origin main
```

Esse envio precisa de permissão de escrita no repositório do grupo
Depois aguardo o GitHub Pages publicar e abro o endereço do calendário para conferir

## Publicar o site depois

Volto para a raiz do site:

```powershell
Set-Location ../..
git status
```

Confiro as alterações que quero enviar, faço o commit e o push do site normalmente
O envio do site não envia o portal, pois são dois repositórios separados

## Manutenção

Para mudar regras ou aparência da tabela, edito `calendario.js` ou `calendario.css` no portal
Depois do commit, push e publicação do portal, os dois carregam a nova versão ao abrir ou atualizar a página
Não preciso publicar o site de novo só porque o calendário mudou

As datas mudam automaticamente ao abrir e quando o dia vira com a página aberta
Mudanças de código publicadas chegam ao atualizar a página, não em tempo real numa aba que ficou aberta

Somente o calendário público foi separado, sem login, dados de clientes ou chaves de IA

## Exemplo de layout exclusivo do site

`calendario.html` sem parâmetros mantém a tabela do portal
`calendario.html?tema=site` mostra o exemplo com cartões por administradora e mês
O site já está configurado para pedir `?tema=site`

Para mudar o visual, edito as variáveis no início de `.integracoes/masterprime-portal/calendario-site.css`

- `--site-itau`, `--site-porto` e `--site-bradesco`: cores das administradoras
- `--site-fonte-titulo`: tamanho do título
- `--site-fonte-data`: tamanho das datas
- `--site-espaco`: espaçamento dos cartões
- `--site-borda-cartao`: arredondamento
- `--site-fundo`, `--site-suave`, `--site-texto` e `--site-borda`: cores gerais

Exemplo: `--site-fonte-data: 24px;` aumenta as datas no site sem mudar a tabela do portal
Os filtros mostram Todas, Itaú, Porto ou Bradesco
Regras e observações continuam disponíveis em cada cartão, e as suplências em teste ficam sinalizadas
O tema reapresenta as células produzidas por `calendario.js`, sem calcular datas em outro lugar
