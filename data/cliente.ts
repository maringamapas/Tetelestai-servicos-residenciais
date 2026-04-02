// Objeto centralizado com todas as informações variáveis do cliente
// Modifique este arquivo para adaptar o layout para diferentes clientes

export const dadosCliente = {
  // Cores do tema - Identidade Visual Premium
  cores: {
    primaryColor: "#DAA520", // Goldenrod/Bronze
    secondaryColor: "#080D21", // Midnight Navy Blue
    accentColor: "#10b981", // Verde para checkmarks e ícones
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5521970161801",
    whatsappLink: "https://wa.me/5521970161801?text=Olá, Preciso de um orçamento!!",
    instagram: "", // Instagram removido
    email: "",
    endereco: "R. Saquarema, 68 - Campo Grande - Rio de Janeiro - RJ, 23050-110",
    telefone: "(21) 97016-1801",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Tetelestai Serviços Residências",
    subtitulo: "| Limpeza e Dedetização Rio de Janeiro\n\nServiços Completos para sua Residência! 🏠✨\nDedetização, descupinização, desratização, limpeza de cisterna e caixa d'água. Atendimento profissional, técnicas especializadas e segurança garantida. Protegemos sua residência com soluções eficazes!",
    sobreNos:
      "Somos Tetelestai Serviços Residências, especialistas em serviços residenciais com atendimento profissional em Rio de Janeiro. Oferecemos dedetização, descupinização, desratização e limpeza de cisternas e caixas d'água com técnicas especializadas e produtos de qualidade. Nossa equipe experiente oferece soluções rápidas e confiáveis para residências e condomínios, com garantia de trabalho seguro e eficaz.",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Descupinização",
      descricao: "Tratamento técnico contra cupins de solo e madeira seca",
      icone: "🪵",
    },
    {
      id: 2,
      titulo: "Desratização",
      descricao: "Controle preventivo e corretivo de roedores com monitoramento",
      icone: "🐀",
    },
    {
      id: 3,
      titulo: "Limpeza de Cisterna",
      descricao: "Limpeza completa e higienização de cisternas",
      icone: "💧",
      destaque: true,
    },
    {
      id: 4,
      titulo: "Limpeza de Caixa d'Água",
      descricao: "Limpeza profissional e desinfecção de caixas d'água",
      icone: "🚰",
    },
  ],

  // Recursos principais (exibidos no hero)
  recursos: [
    {
      titulo: "Atendimento Profissional",
      descricao: "Equipe qualificada e experiente",
    },
    {
      titulo: "Técnicas Especializadas",
      descricao: "Soluções eficazes e seguras para residências",
    },
    {
      titulo: "Rio de Janeiro",
      descricao: "Serviços em Campo Grande e região",
    },
  ],

  // Testemunhos de clientes
  depoimentos: [
    {
      id: 1,
      nome: "Fernanda C.",
      profissao: "Moradora de Campo Grande",
      imagem: "/cliente-fernanda.jpg",
      texto: "Excelente atendimento! Chamei a Tetelestai para fazer a limpeza da caixa d'água e fizeram um trabalho impecável. Muito profissionais e pontuais.",
    },
    {
      id: 2,
      nome: "Marcos P.",
      profissao: "Síndico de Condomínio",
      imagem: "/cliente-marcos.jpg",
      texto: "Contratei para dedetização do prédio. Equipe muito competente, explicaram todo o processo e o resultado foi excelente. Super recomendo!",
    },
    {
      id: 3,
      nome: "Patrícia L.",
      profissao: "Proprietária de Residência",
      imagem: "/cliente-patricia.jpg",
      texto: "Fizeram a limpeza da cisterna e descupinização. Trabalho de qualidade, preço justo e equipe educada. Já chamei mais de uma vez e sempre voltarei!",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Tetelestai Serviços Residências | Dedetização e Limpeza Rio de Janeiro | (21) 97016-1801",
    description:
      "Tetelestai Serviços Residências em Rio de Janeiro. Dedetização, descupinização, desratização, limpeza de cisterna e caixa d'água. Atendimento profissional em Campo Grande.",
    url: "https://tetelestai-servicos.vercel.app",
    ogImage: "/og-image.jpg",
  },
}
