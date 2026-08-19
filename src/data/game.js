export const CAMPANHA = "FADAT STATION";

export const STATIONS = [
  "Embarque",
  "Escolha sua rota",
  "Explore os cursos",
  "Experimente a prática",
  "Conecte-se ao mercado",
  "Conquiste seu futuro",
  "Faça sua matrícula",
];

export const initialProfile = {
  nome: "",
  whatsapp: "",
  cidade: "",
  depoimentosWhatsapp: null,
};

/** As 7 missões vocacionais. Cada opção pontua para uma vocação. */
export const MISSOES = [
  {
    id: "m1",
    titulo: "O primeiro desafio",
    pergunta: "Se você pudesse resolver apenas um problema da sociedade, qual seria?",
    options: [
      { id: "m1a", emoji: "🟢", label: "Melhorar a saúde das pessoas.", hint: "Ciências da Saúde", vocacao: "saude" },
      { id: "m1b", emoji: "🔵", label: "Criar empresas e gerar empregos.", hint: "Negócios e Gestão", vocacao: "negocios" },
      { id: "m1c", emoji: "🟣", label: "Ensinar e transformar vidas através da educação.", hint: "Educação e Humanas", vocacao: "educacao" },
      { id: "m1d", emoji: "🟠", label: "Desenvolver novas tecnologias e inovação.", hint: "Tecnologia e Engenharias", vocacao: "tecnologia" },
      { id: "m1e", emoji: "🟡", label: "Defender direitos e promover justiça.", hint: "Direito e Ciências Sociais", vocacao: "direito" },
    ],
  },
  {
    id: "m2",
    titulo: "Sua habilidade principal",
    pergunta: "Em um grupo de trabalho, você costuma ser quem...",
    options: [
      { id: "m2a", emoji: "🟢", label: "Cuida das pessoas.", vocacao: "saude" },
      { id: "m2b", emoji: "🔵", label: "Organiza tudo.", vocacao: "negocios" },
      { id: "m2c", emoji: "🟣", label: "Explica e ensina.", vocacao: "educacao" },
      { id: "m2d", emoji: "🟠", label: "Resolve problemas técnicos.", vocacao: "tecnologia" },
      { id: "m2e", emoji: "🟡", label: "Lidera discussões e toma decisões.", vocacao: "direito" },
    ],
  },
  {
    id: "m3",
    titulo: "Missão dos sonhos",
    pergunta: "Qual missão você aceitaria sem pensar duas vezes?",
    options: [
      { id: "m3a", emoji: "❤️", label: "Abrir uma clínica.", vocacao: "saude" },
      { id: "m3b", emoji: "💼", label: "Criar minha própria empresa.", vocacao: "negocios" },
      { id: "m3c", emoji: "📚", label: "Dar aula e inspirar pessoas.", vocacao: "educacao" },
      { id: "m3d", emoji: "💻", label: "Criar um aplicativo que facilite a vida das pessoas.", vocacao: "tecnologia" },
      { id: "m3e", emoji: "⚖️", label: "Defender alguém em um grande julgamento.", vocacao: "direito" },
    ],
  },
  {
    id: "m4",
    titulo: "Seu ambiente favorito",
    pergunta: "Onde você se imagina trabalhando?",
    options: [
      { id: "m4a", emoji: "🏥", label: "Hospital ou clínica.", vocacao: "saude" },
      { id: "m4b", emoji: "🏢", label: "Escritório.", vocacao: "negocios" },
      { id: "m4c", emoji: "🏫", label: "Escola ou universidade.", vocacao: "educacao" },
      { id: "m4d", emoji: "💻", label: "Empresa de tecnologia.", vocacao: "tecnologia" },
      { id: "m4e", emoji: "🏛️", label: "Tribunal ou órgão público.", vocacao: "direito" },
    ],
  },
  {
    id: "m5",
    titulo: "Curiosidade",
    pergunta: "O que mais desperta sua curiosidade?",
    options: [
      { id: "m5a", emoji: "🧠", label: "Como funciona o corpo humano.", vocacao: "saude" },
      { id: "m5b", emoji: "📈", label: "Como empresas crescem.", vocacao: "negocios" },
      { id: "m5c", emoji: "📖", label: "Como as pessoas aprendem.", vocacao: "educacao" },
      { id: "m5d", emoji: "🤖", label: "Como criar tecnologia.", vocacao: "tecnologia" },
      { id: "m5e", emoji: "⚖️", label: "Como funcionam as leis.", vocacao: "direito" },
    ],
  },
  {
    id: "m6",
    titulo: "Poder especial",
    pergunta: "Se pudesse desbloquear uma habilidade agora, qual seria?",
    options: [
      { id: "m6a", emoji: "✨", label: "Curar pessoas.", vocacao: "saude" },
      { id: "m6b", emoji: "💰", label: "Construir negócios de sucesso.", vocacao: "negocios" },
      { id: "m6c", emoji: "🎓", label: "Ensinar qualquer pessoa.", vocacao: "educacao" },
      { id: "m6d", emoji: "🚀", label: "Criar soluções inovadoras.", vocacao: "tecnologia" },
      { id: "m6e", emoji: "⚖️", label: "Defender causas importantes.", vocacao: "direito" },
    ],
  },
  {
    id: "m7",
    titulo: "Seu maior objetivo",
    pergunta: "Daqui a alguns anos, você quer ser reconhecido por...",
    options: [
      { id: "m7a", emoji: "❤️", label: "Salvar vidas.", vocacao: "saude" },
      { id: "m7b", emoji: "📊", label: "Liderar uma empresa.", vocacao: "negocios" },
      { id: "m7c", emoji: "📚", label: "Transformar pessoas através da educação.", vocacao: "educacao" },
      { id: "m7d", emoji: "💡", label: "Criar algo inovador.", vocacao: "tecnologia" },
      { id: "m7e", emoji: "⚖️", label: "Fazer justiça.", vocacao: "direito" },
    ],
  },
];

export const VOCACOES = {
  saude: {
    id: "saude",
    emoji: "🩺",
    label: "Ciências da Saúde",
    desc: "Você se realiza cuidando de gente. Sua vocação é transformar vidas de perto.",
  },
  negocios: {
    id: "negocios",
    emoji: "📈",
    label: "Negócios e Gestão",
    desc: "Você enxerga oportunidade onde os outros veem problema. Sua vocação é construir e liderar.",
  },
  educacao: {
    id: "educacao",
    emoji: "📚",
    label: "Educação e Humanas",
    desc: "Você transforma pessoas com conhecimento. Sua vocação é formar outras histórias.",
  },
  tecnologia: {
    id: "tecnologia",
    emoji: "💻",
    label: "Tecnologia e Engenharias",
    desc: "Você quer resolver o que ainda não foi resolvido. Sua vocação é criar o futuro.",
  },
  direito: {
    id: "direito",
    emoji: "⚖️",
    label: "Direito e Ciências Sociais",
    desc: "Você não passa batido por injustiça. Sua vocação é defender e decidir.",
  },
};

export function calcularVocacao(respostas) {
  const score = {};
  MISSOES.forEach((m) => {
    const chosen = m.options.find((o) => o.id === respostas[m.id]);
    if (chosen) score[chosen.vocacao] = (score[chosen.vocacao] ?? 0) + 1;
  });
  const ranked = Object.entries(score).sort((a, b) => b[1] - a[1]);
  if (!ranked.length) return null;
  return { ...VOCACOES[ranked[0][0]], pontos: ranked[0][1], total: MISSOES.length };
}

export const DESAFIOS = [
  { label: "Professores especialistas", xp: 100 },
  { label: "Experiência prática", xp: 250 },
  { label: "Conexão com empresas", xp: 500 },
];

export const CONQUISTAS = [
  { icon: "🎤", title: "Depoimentos", desc: "Histórias reais de quem já é FADAT." },
  { icon: "🚀", title: "Projetos", desc: "Do primeiro semestre ao mercado." },
  { icon: "🎓", title: "FADAT Experience", desc: "Imersão viva no campus." },
  { icon: "🔬", title: "Laboratórios", desc: "Estrutura pra colocar a mão na massa." },
  { icon: "🤝", title: "Empresas parceiras", desc: "Rede que abre portas de verdade." },
];

export const LEVEL_LABELS = {
  cadastro: "ROTA 01 · Crie seu usuário",
  missoes: "ROTA 02 · Escolha sua rota",
  desafios: "ROTA 03 · Explore os cursos",
  futuro: "ROTA 04 · Conecte-se ao mercado",
  vocacao: "ROTA FINAL · Sua vocação",
  done: "MISSÃO CONCLUÍDA",
};

export const BASE_XP = {
  boot: 0,
  cadastro: 5,
  missoes: 20,
  desafios: 70,
  futuro: 82,
  vocacao: 94,
  done: 100,
};

export function maskPhone(value) {
  const d = String(value).replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
