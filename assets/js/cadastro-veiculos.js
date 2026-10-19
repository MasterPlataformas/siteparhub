// CADASTRO DOS CARROS DO BANNER — edite somente este arquivo.
// 1. Salve as fotos e logos PNG sem fundo em assets/imagens/veiculos/.
// 2. Copie um dos blocos abaixo e cole antes do ]; no fim da lista.
// 3. Preencha os campos e mantenha uma vírgula depois de cada bloco.
// Use apenas o nome do arquivo em foto e logo, sem o caminho da pasta.
// O nome, o texto e a logo trocam automaticamente junto com o carro.

const intervaloVeiculos = 5000; //  (3000 = 3 segundos).

const listaVeiculos = [
  {
    nome: 'COROLLA',             // Nome grande atrás do carro.
    marca: 'TOYOTA',             // Nome da fabricante, também usado na acessibilidade             // Texto abaixo do nome. Ex.: '0KM' ou 'HÍBRIDO'.
    foto: 'corolla.png',         // Imagem do carro sem fundo.
    logo: 'toyota-logo.png',     // Logo que acompanha este carro.
    logoColorida: false          // true = cores originais; false = logo branca.
  },
  {
    nome: 'HILUX',
    marca: 'TOYOTA',
    foto: 'hilux.png',
    logo: 'toyota-logo.png',
    logoColorida: false
  },
  {
    nome: 'DOLPHIN',
    marca: 'BYD',
    foto: 'byd-dolphin.png',
    logo: 'byd-logo.png',
    logoColorida: false
  },
  {
    nome: 'HAVAL H6',
    marca: 'GWM',
    foto: 'haval-h6.png',
    logo: 'gwm-logo-transparente.png',
    logoColorida: false
  },

  // EXEMPLO: copie este bloco, retire os // das linhas e preencha os dados.
  // {
  //   nome: 'NOME DO CARRO',
  //   marca: 'NOME DA MARCA',
  //   texto: '0KM',
  //   foto: 'meu-carro.png',
  //   logo: 'minha-logo.png',
  //   logoColorida: true
  // },
];
