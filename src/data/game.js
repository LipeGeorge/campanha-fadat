export const initialProfile = {
  nome: "",
  whatsapp: "",
  cidade: "",
  interesse: "",
  momento: "",
  formato: "",
  motivacao: "",
};

export const AREAS = [
  { id: "saude", label: "Saúde & Bem-estar", emoji: "🩺" },
  { id: "negocios", label: "Negócios & Gestão", emoji: "📈" },
  { id: "tech", label: "Tecnologia & Dados", emoji: "💻" },
  { id: "direito", label: "Direito & Sociedade", emoji: "⚖️" },
  { id: "educacao", label: "Educação & Humanas", emoji: "📚" },
  { id: "eng", label: "Engenharias", emoji: "🛠️" },
];

export const MOMENTOS = [
  { id: "3ano", label: "Estou no 3º ano do Ensino Médio" },
  { id: "concluido", label: "Já concluí o Ensino Médio" },
  { id: "trabalho", label: "Trabalho e quero crescer" },
  { id: "retorno", label: "Vou retomar os estudos" },
];

export const FORMATOS = [
  { id: "presencial", label: "Presencial", emoji: "🏫" },
  { id: "noturno", label: "Noturno", emoji: "🌙" },
  { id: "hibrido", label: "Híbrido", emoji: "🔀" },
];

export const MOTIVACOES = [
  { id: "carreira", label: "Crescer na carreira" },
  { id: "renda", label: "Aumentar minha renda" },
  { id: "proposito", label: "Encontrar propósito" },
  { id: "familia", label: "Orgulho da família" },
];

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
  level1: "LV.01 · Criar usuário",
  level2: "LV.02 · Escolha seu destino",
  level3: "LV.03 · Desafios",
  level4: "LV.04 · Desbloqueie seu futuro",
  boss: "BOSS · Missão final",
  done: "COMPLETO",
};

export const BASE_XP = {
  boot: 0,
  level1: 10,
  level2: 30,
  level3: 55,
  level4: 80,
  boss: 95,
  done: 100,
};

export function maskPhone(value) {
  const d = String(value).replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
