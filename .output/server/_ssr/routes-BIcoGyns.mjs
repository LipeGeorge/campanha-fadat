import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BIcoGyns.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GridBackdrop_module_default = {
	grid: "vTeWvG_grid",
	scan: "vTeWvG_scan",
	scanline: "vTeWvG_scanline"
};
function GridBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: GridBackdrop_module_default.grid
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: GridBackdrop_module_default.scan
	})] });
}
var CAMPANHA = "Se torne quem você nasceu pra ser!";
var initialProfile = {
	nome: "",
	whatsapp: "",
	cidade: "",
	depoimentosWhatsapp: null
};
/** As 7 missões vocacionais. Cada opção pontua para uma vocação. */
var MISSOES = [
	{
		id: "m1",
		titulo: "O primeiro desafio",
		pergunta: "Se você pudesse resolver apenas um problema da sociedade, qual seria?",
		options: [
			{
				id: "m1a",
				emoji: "🟢",
				label: "Melhorar a saúde das pessoas.",
				hint: "Ciências da Saúde",
				vocacao: "saude"
			},
			{
				id: "m1b",
				emoji: "🔵",
				label: "Criar empresas e gerar empregos.",
				hint: "Negócios e Gestão",
				vocacao: "negocios"
			},
			{
				id: "m1c",
				emoji: "🟣",
				label: "Ensinar e transformar vidas através da educação.",
				hint: "Educação e Humanas",
				vocacao: "educacao"
			},
			{
				id: "m1d",
				emoji: "🟠",
				label: "Desenvolver novas tecnologias e inovação.",
				hint: "Tecnologia e Engenharias",
				vocacao: "tecnologia"
			},
			{
				id: "m1e",
				emoji: "🟡",
				label: "Defender direitos e promover justiça.",
				hint: "Direito e Ciências Sociais",
				vocacao: "direito"
			}
		]
	},
	{
		id: "m2",
		titulo: "Sua habilidade principal",
		pergunta: "Em um grupo de trabalho, você costuma ser quem...",
		options: [
			{
				id: "m2a",
				emoji: "🟢",
				label: "Cuida das pessoas.",
				vocacao: "saude"
			},
			{
				id: "m2b",
				emoji: "🔵",
				label: "Organiza tudo.",
				vocacao: "negocios"
			},
			{
				id: "m2c",
				emoji: "🟣",
				label: "Explica e ensina.",
				vocacao: "educacao"
			},
			{
				id: "m2d",
				emoji: "🟠",
				label: "Resolve problemas técnicos.",
				vocacao: "tecnologia"
			},
			{
				id: "m2e",
				emoji: "🟡",
				label: "Lidera discussões e toma decisões.",
				vocacao: "direito"
			}
		]
	},
	{
		id: "m3",
		titulo: "Missão dos sonhos",
		pergunta: "Qual missão você aceitaria sem pensar duas vezes?",
		options: [
			{
				id: "m3a",
				emoji: "❤️",
				label: "Abrir uma clínica.",
				vocacao: "saude"
			},
			{
				id: "m3b",
				emoji: "💼",
				label: "Criar minha própria empresa.",
				vocacao: "negocios"
			},
			{
				id: "m3c",
				emoji: "📚",
				label: "Dar aula e inspirar pessoas.",
				vocacao: "educacao"
			},
			{
				id: "m3d",
				emoji: "💻",
				label: "Criar um aplicativo que facilite a vida das pessoas.",
				vocacao: "tecnologia"
			},
			{
				id: "m3e",
				emoji: "⚖️",
				label: "Defender alguém em um grande julgamento.",
				vocacao: "direito"
			}
		]
	},
	{
		id: "m4",
		titulo: "Seu ambiente favorito",
		pergunta: "Onde você se imagina trabalhando?",
		options: [
			{
				id: "m4a",
				emoji: "🏥",
				label: "Hospital ou clínica.",
				vocacao: "saude"
			},
			{
				id: "m4b",
				emoji: "🏢",
				label: "Escritório.",
				vocacao: "negocios"
			},
			{
				id: "m4c",
				emoji: "🏫",
				label: "Escola ou universidade.",
				vocacao: "educacao"
			},
			{
				id: "m4d",
				emoji: "💻",
				label: "Empresa de tecnologia.",
				vocacao: "tecnologia"
			},
			{
				id: "m4e",
				emoji: "🏛️",
				label: "Tribunal ou órgão público.",
				vocacao: "direito"
			}
		]
	},
	{
		id: "m5",
		titulo: "Curiosidade",
		pergunta: "O que mais desperta sua curiosidade?",
		options: [
			{
				id: "m5a",
				emoji: "🧠",
				label: "Como funciona o corpo humano.",
				vocacao: "saude"
			},
			{
				id: "m5b",
				emoji: "📈",
				label: "Como empresas crescem.",
				vocacao: "negocios"
			},
			{
				id: "m5c",
				emoji: "📖",
				label: "Como as pessoas aprendem.",
				vocacao: "educacao"
			},
			{
				id: "m5d",
				emoji: "🤖",
				label: "Como criar tecnologia.",
				vocacao: "tecnologia"
			},
			{
				id: "m5e",
				emoji: "⚖️",
				label: "Como funcionam as leis.",
				vocacao: "direito"
			}
		]
	},
	{
		id: "m6",
		titulo: "Poder especial",
		pergunta: "Se pudesse desbloquear uma habilidade agora, qual seria?",
		options: [
			{
				id: "m6a",
				emoji: "✨",
				label: "Curar pessoas.",
				vocacao: "saude"
			},
			{
				id: "m6b",
				emoji: "💰",
				label: "Construir negócios de sucesso.",
				vocacao: "negocios"
			},
			{
				id: "m6c",
				emoji: "🎓",
				label: "Ensinar qualquer pessoa.",
				vocacao: "educacao"
			},
			{
				id: "m6d",
				emoji: "🚀",
				label: "Criar soluções inovadoras.",
				vocacao: "tecnologia"
			},
			{
				id: "m6e",
				emoji: "⚖️",
				label: "Defender causas importantes.",
				vocacao: "direito"
			}
		]
	},
	{
		id: "m7",
		titulo: "Seu maior objetivo",
		pergunta: "Daqui a alguns anos, você quer ser reconhecido por...",
		options: [
			{
				id: "m7a",
				emoji: "❤️",
				label: "Salvar vidas.",
				vocacao: "saude"
			},
			{
				id: "m7b",
				emoji: "📊",
				label: "Liderar uma empresa.",
				vocacao: "negocios"
			},
			{
				id: "m7c",
				emoji: "📚",
				label: "Transformar pessoas através da educação.",
				vocacao: "educacao"
			},
			{
				id: "m7d",
				emoji: "💡",
				label: "Criar algo inovador.",
				vocacao: "tecnologia"
			},
			{
				id: "m7e",
				emoji: "⚖️",
				label: "Fazer justiça.",
				vocacao: "direito"
			}
		]
	}
];
var VOCACOES = {
	saude: {
		id: "saude",
		emoji: "🩺",
		label: "Ciências da Saúde",
		desc: "Você se realiza cuidando de gente. Sua vocação é transformar vidas de perto."
	},
	negocios: {
		id: "negocios",
		emoji: "📈",
		label: "Negócios e Gestão",
		desc: "Você enxerga oportunidade onde os outros veem problema. Sua vocação é construir e liderar."
	},
	educacao: {
		id: "educacao",
		emoji: "📚",
		label: "Educação e Humanas",
		desc: "Você transforma pessoas com conhecimento. Sua vocação é formar outras histórias."
	},
	tecnologia: {
		id: "tecnologia",
		emoji: "💻",
		label: "Tecnologia e Engenharias",
		desc: "Você quer resolver o que ainda não foi resolvido. Sua vocação é criar o futuro."
	},
	direito: {
		id: "direito",
		emoji: "⚖️",
		label: "Direito e Ciências Sociais",
		desc: "Você não passa batido por injustiça. Sua vocação é defender e decidir."
	}
};
function calcularVocacao(respostas) {
	const score = {};
	MISSOES.forEach((m) => {
		const chosen = m.options.find((o) => o.id === respostas[m.id]);
		if (chosen) score[chosen.vocacao] = (score[chosen.vocacao] ?? 0) + 1;
	});
	const ranked = Object.entries(score).sort((a, b) => b[1] - a[1]);
	if (!ranked.length) return null;
	return {
		...VOCACOES[ranked[0][0]],
		pontos: ranked[0][1],
		total: MISSOES.length
	};
}
var DESAFIOS = [
	{
		label: "Professores especialistas",
		xp: 100
	},
	{
		label: "Experiência prática",
		xp: 250
	},
	{
		label: "Conexão com empresas",
		xp: 500
	}
];
var CONQUISTAS = [
	{
		icon: "🎤",
		title: "Depoimentos",
		desc: "Histórias reais de quem já é FADAT."
	},
	{
		icon: "🚀",
		title: "Projetos",
		desc: "Do primeiro semestre ao mercado."
	},
	{
		icon: "🎓",
		title: "FADAT Experience",
		desc: "Imersão viva no campus."
	},
	{
		icon: "🔬",
		title: "Laboratórios",
		desc: "Estrutura pra colocar a mão na massa."
	},
	{
		icon: "🤝",
		title: "Empresas parceiras",
		desc: "Rede que abre portas de verdade."
	}
];
var LEVEL_LABELS = {
	cadastro: "LV.00 · Criar usuário",
	missoes: "LV.01 · Missões vocacionais",
	desafios: "LV.02 · Desafios",
	futuro: "LV.03 · Desbloqueie seu futuro",
	vocacao: "BOSS · Sua vocação",
	done: "COMPLETO"
};
var BASE_XP = {
	boot: 0,
	cadastro: 5,
	missoes: 20,
	desafios: 70,
	futuro: 82,
	vocacao: 94,
	done: 100
};
function maskPhone(value) {
	const d = String(value).replace(/\D/g, "").slice(0, 11);
	if (d.length <= 2) return d;
	if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
	if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
	return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
var ProgressHUD_module_default = {
	bar: "o7EFJG_bar",
	fill: "o7EFJG_fill",
	hud: "o7EFJG_hud",
	inner: "o7EFJG_inner",
	label: "o7EFJG_label",
	pct: "o7EFJG_pct",
	sound: "o7EFJG_sound"
};
function ProgressHUD({ xp, stage, sound, onToggleSound }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: ProgressHUD_module_default.hud,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: ProgressHUD_module_default.inner,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: ProgressHUD_module_default.label,
					children: LEVEL_LABELS[stage] ?? "FADAT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: ProgressHUD_module_default.bar,
					role: "progressbar",
					"aria-valuenow": xp,
					"aria-valuemin": 0,
					"aria-valuemax": 100,
					"aria-label": "Progresso da missão",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: ProgressHUD_module_default.fill,
						style: { width: `${xp}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: ProgressHUD_module_default.pct,
					children: [xp, "%"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: ProgressHUD_module_default.sound,
					onClick: onToggleSound,
					"aria-label": sound ? "Desligar som" : "Ligar som",
					children: sound ? "♪ ON" : "♪ OFF"
				})
			]
		})
	});
}
var GameUI_module_default = {
	accent: "_4GQNEq_accent",
	blink: "_4GQNEq_blink",
	btn: "_4GQNEq_btn",
	btnOutline: "_4GQNEq_btnOutline",
	btnSolid: "_4GQNEq_btnSolid",
	card: "_4GQNEq_card",
	cardTight: "_4GQNEq_cardTight",
	chip: "_4GQNEq_chip",
	chipDot: "_4GQNEq_chipDot",
	fadeUp: "_4GQNEq_fadeUp",
	field: "_4GQNEq_field",
	fieldLabel: "_4GQNEq_fieldLabel",
	gradientText: "_4GQNEq_gradientText",
	hint: "_4GQNEq_hint",
	hintCenter: "_4GQNEq_hintCenter _4GQNEq_hint",
	input: "_4GQNEq_input",
	levelHeader: "_4GQNEq_levelHeader",
	levelKicker: "_4GQNEq_levelKicker",
	levelTitle: "_4GQNEq_levelTitle",
	pulseGlow: "_4GQNEq_pulseGlow",
	section: "_4GQNEq_section"
};
function ChipLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: GameUI_module_default.chip,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: GameUI_module_default.chipDot }), children]
	});
}
function GameCard({ children, tight = false, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `${GameUI_module_default.card} ${tight ? GameUI_module_default.cardTight : ""} ${className}`.trim(),
		children
	});
}
function PrimaryBtn({ children, onClick, disabled, variant = "solid" }) {
	const variantClass = variant === "solid" ? GameUI_module_default.btnSolid : GameUI_module_default.btnOutline;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		disabled,
		className: `${GameUI_module_default.btn} ${variantClass}`,
		children
	});
}
function LevelHeader({ emoji, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: GameUI_module_default.levelHeader,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: GameUI_module_default.levelKicker,
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: GameUI_module_default.levelTitle,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: emoji
				}),
				" ",
				subtitle
			]
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: GameUI_module_default.field,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: GameUI_module_default.fieldLabel,
			children: label
		}), children]
	});
}
function Section({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: GameUI_module_default.section,
		children
	});
}
var BootScreen_module_default = {
	blink: "lmLo3a_blink",
	boot: "lmLo3a_boot",
	bottom: "lmLo3a_bottom",
	cursor: "lmLo3a_cursor",
	fadeUp: "lmLo3a_fadeUp",
	lead: "lmLo3a_lead",
	line: "lmLo3a_line",
	tap: "lmLo3a_tap",
	terminal: "lmLo3a_terminal",
	title: "lmLo3a_title",
	top: "lmLo3a_top"
};
var SCRIPT = [
	"> booting FADAT.STATION_2027.1",
	"> loading vestibular_module...",
	"> conectando com seu futuro...",
	"> pronto."
];
function BootScreen({ onStart }) {
	const [lines, setLines] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setLines([]);
		let i = 0;
		const t = setInterval(() => {
			i += 1;
			setLines(SCRIPT.slice(0, i));
			if (i >= SCRIPT.length) clearInterval(t);
		}, 450);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: BootScreen_module_default.boot,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: BootScreen_module_default.top,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipLabel, { children: CAMPANHA }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: BootScreen_module_default.title,
					children: [
						"Se torne quem",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: GameUI_module_default.gradientText,
							children: "você nasceu pra ser!"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: BootScreen_module_default.lead,
					children: "Sete missões pra descobrir sua vocação e o curso que combina com quem você é."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: BootScreen_module_default.terminal,
					children: [lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: BootScreen_module_default.line,
						children: line
					}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: BootScreen_module_default.cursor,
						children: "▊"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: BootScreen_module_default.bottom,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				onClick: onStart,
				children: "▶ Iniciar missão"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: BootScreen_module_default.tap,
				children: "Toque para começar"
			})]
		})]
	});
}
var LevelCadastro_module_default = {
	confirm: "bg95ja_confirm",
	fadeUp: "bg95ja_fadeUp",
	fields: "bg95ja_fields",
	optin: "bg95ja_optin",
	optinActive: "bg95ja_optinActive",
	optinBtn: "bg95ja_optinBtn",
	optinLabel: "bg95ja_optinLabel",
	optinRow: "bg95ja_optinRow"
};
function LevelCadastro({ profile, setProfile, onNext }) {
	const ok = profile.nome.trim().length >= 2 && profile.whatsapp.replace(/\D/g, "").length >= 10 && profile.cidade.trim().length >= 2 && profile.depoimentosWhatsapp !== null;
	const set = (key) => (e) => setProfile((p) => ({
		...p,
		[key]: e.target.value
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelHeader, {
			emoji: "🕹️",
			title: "Nível 0",
			subtitle: "Criar usuário"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: GameUI_module_default.hint,
			children: [
				"Antes de começar, monte seu ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: GameUI_module_default.accent,
					children: "perfil de jogador"
				}),
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GameCard, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: LevelCadastro_module_default.fields,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nome",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							value: profile.nome,
							onChange: set("nome"),
							placeholder: "Digite seu nome",
							maxLength: 80,
							className: GameUI_module_default.input
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "WhatsApp",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: profile.whatsapp,
							onChange: (e) => setProfile((p) => ({
								...p,
								whatsapp: maskPhone(e.target.value)
							})),
							inputMode: "tel",
							placeholder: "(00) 00000-0000",
							className: GameUI_module_default.input
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Cidade",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: profile.cidade,
							onChange: set("cidade"),
							placeholder: "Sua cidade",
							maxLength: 60,
							className: GameUI_module_default.input
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: LevelCadastro_module_default.optin,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: LevelCadastro_module_default.optinLabel,
					children: "Quer receber os depoimentos de quem já é FADAT no seu WhatsApp?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: LevelCadastro_module_default.optinRow,
					children: [{
						v: true,
						label: "Sim, quero receber"
					}, {
						v: false,
						label: "Agora não"
					}].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setProfile((p) => ({
							...p,
							depoimentosWhatsapp: o.v
						})),
						className: `${LevelCadastro_module_default.optinBtn} ${profile.depoimentosWhatsapp === o.v ? LevelCadastro_module_default.optinActive : ""}`,
						children: o.label
					}, String(o.v)))
				})]
			}),
			profile.nome.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: LevelCadastro_module_default.confirm,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Perfil criado com sucesso." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"Bem-vindo(a), ",
					profile.nome.trim().split(" ")[0],
					"."
				] })]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
			onClick: onNext,
			disabled: !ok,
			children: "Começar missões →"
		})
	] });
}
var LevelMissoes_module_default = {
	counter: "yF6t_G_counter",
	emoji: "yF6t_G_emoji",
	option: "yF6t_G_option",
	optionActive: "yF6t_G_optionActive",
	optionBody: "yF6t_G_optionBody",
	optionHint: "yF6t_G_optionHint",
	options: "yF6t_G_options",
	question: "yF6t_G_question",
	step: "yF6t_G_step",
	stepActive: "yF6t_G_stepActive",
	steps: "yF6t_G_steps",
	xp: "yF6t_G_xp"
};
function LevelMissoes({ respostas, setRespostas, onNext }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const missao = MISSOES[step];
	const pick = (optionId) => {
		setRespostas((r) => ({
			...r,
			[missao.id]: optionId
		}));
		setTimeout(() => {
			if (step === MISSOES.length - 1) onNext();
			else setStep((v) => v + 1);
		}, 220);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelHeader, {
			emoji: "🧩",
			title: `Missão ${step + 1}`,
			subtitle: missao.titulo
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: LevelMissoes_module_default.steps,
			children: MISSOES.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `${LevelMissoes_module_default.step} ${i <= step ? LevelMissoes_module_default.stepActive : ""}` }, m.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GameCard, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: LevelMissoes_module_default.counter,
				children: [
					"Missão ",
					step + 1,
					"/",
					MISSOES.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: LevelMissoes_module_default.question,
				children: missao.pergunta
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: LevelMissoes_module_default.options,
				children: missao.options.map((opt) => {
					const active = respostas[missao.id] === opt.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => pick(opt.id),
						className: `${LevelMissoes_module_default.option} ${active ? LevelMissoes_module_default.optionActive : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: LevelMissoes_module_default.emoji,
								"aria-hidden": "true",
								children: opt.emoji
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: LevelMissoes_module_default.optionBody,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: LevelMissoes_module_default.optionLabel,
									children: opt.label
								}), opt.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: LevelMissoes_module_default.optionHint,
									children: opt.hint
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: LevelMissoes_module_default.xp,
								children: "＋10 XP"
							})
						]
					}, opt.id);
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: GameUI_module_default.hintCenter,
			children: [
				"Cada resposta revela um pedaço da sua ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: GameUI_module_default.accent,
					children: "vocação"
				}),
				"."
			]
		})
	] });
}
var LevelDesafios_module_default = {
	gain: "E_I-8G_gain",
	gainDone: "E_I-8G_gainDone",
	left: "E_I-8G_left",
	list: "E_I-8G_list",
	mark: "E_I-8G_mark",
	markDone: "E_I-8G_markDone",
	row: "E_I-8G_row",
	rowDone: "E_I-8G_rowDone"
};
function LevelDesafios({ onNext }) {
	const [unlocked, setUnlocked] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (unlocked >= DESAFIOS.length) return void 0;
		const t = setTimeout(() => setUnlocked((u) => u + 1), 700);
		return () => clearTimeout(t);
	}, [unlocked]);
	const complete = unlocked >= DESAFIOS.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelHeader, {
			emoji: "🧩",
			title: "Nível 2",
			subtitle: "Desafios"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: GameUI_module_default.hint,
			children: [
				"Cada diferencial da FADAT aparece como uma ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: GameUI_module_default.accent,
					children: "missão concluída"
				}),
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: LevelDesafios_module_default.list,
			children: DESAFIOS.map((d, i) => {
				const done = i < unlocked;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `${LevelDesafios_module_default.row} ${done ? LevelDesafios_module_default.rowDone : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: LevelDesafios_module_default.left,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: done ? LevelDesafios_module_default.markDone : LevelDesafios_module_default.mark,
							children: done ? "✓" : "◌"
						}), d.label]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: done ? LevelDesafios_module_default.gainDone : LevelDesafios_module_default.gain,
						children: [
							"+",
							d.xp,
							" XP"
						]
					})]
				}, d.label);
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
			onClick: onNext,
			disabled: !complete,
			children: complete ? "Continuar →" : "Carregando conquistas..."
		})
	] });
}
var LevelFuturo_module_default = {
	badge: "oDiFYW_badge",
	body: "oDiFYW_body",
	desc: "oDiFYW_desc",
	grid: "oDiFYW_grid",
	icon: "oDiFYW_icon",
	index: "oDiFYW_index",
	item: "oDiFYW_item",
	name: "oDiFYW_name",
	top: "oDiFYW_top"
};
function LevelFuturo({ onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelHeader, {
			emoji: "🏆",
			title: "Nível 3",
			subtitle: "Desbloqueie seu futuro"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: GameUI_module_default.hint,
			children: [
				"Cada seção é uma ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: GameUI_module_default.accent,
					children: "conquista desbloqueada"
				}),
				" por quem já é FADAT."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: LevelFuturo_module_default.grid,
			children: CONQUISTAS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCard, {
				tight: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: LevelFuturo_module_default.item,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: LevelFuturo_module_default.icon,
							"aria-hidden": "true",
							children: c.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: LevelFuturo_module_default.body,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: LevelFuturo_module_default.top,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: LevelFuturo_module_default.name,
									children: c.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: LevelFuturo_module_default.badge,
									children: "· desbloqueado"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: LevelFuturo_module_default.desc,
								children: c.desc
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: LevelFuturo_module_default.index,
							children: ["0", i + 1]
						})
					]
				})
			}, c.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
			onClick: onNext,
			children: "Revelar minha vocação →"
		})
	] });
}
var LevelVocacao_module_default = {
	emoji: "Fawknq_emoji",
	kicker: "Fawknq_kicker",
	legal: "Fawknq_legal",
	match: "Fawknq_match",
	next: "Fawknq_next",
	sub: "Fawknq_sub",
	title: "Fawknq_title"
};
function LevelVocacao({ vocacao, profile, onFinish }) {
	const submitting = (0, import_react.useRef)(false);
	const submit = () => {
		if (submitting.current) return;
		submitting.current = true;
		onFinish();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelHeader, {
			emoji: "🎓",
			title: "Boss Final",
			subtitle: "Sua vocação"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GameCard, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: LevelVocacao_module_default.kicker,
				children: "Vocação revelada"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: LevelVocacao_module_default.emoji,
				"aria-hidden": "true",
				children: vocacao?.emoji ?? "🎯"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: LevelVocacao_module_default.title,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: GameUI_module_default.gradientText,
					children: vocacao?.label ?? "Sua área"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: LevelVocacao_module_default.sub,
				children: vocacao?.desc
			}),
			vocacao && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: LevelVocacao_module_default.match,
				children: [
					vocacao.pontos,
					"/",
					vocacao.total,
					" missões apontam para essa vocação"
				]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCard, {
			tight: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: LevelVocacao_module_default.next,
				children: [
					profile.nome.trim().split(" ")[0] || "Jogador",
					", o próximo passo é o Vestibular FADAT",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: GameUI_module_default.accent,
						children: "2027.1"
					}),
					"."
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
			onClick: submit,
			children: CAMPANHA
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: LevelVocacao_module_default.legal,
			children: "Ao enviar, você concorda com nossa Política de Privacidade."
		})
	] });
}
var Victory_module_default = {
	cardLabel: "hQwMMG_cardLabel",
	fadeUp: "hQwMMG_fadeUp",
	key: "hQwMMG_key",
	kicker: "hQwMMG_kicker",
	list: "hQwMMG_list",
	note: "hQwMMG_note",
	row: "hQwMMG_row",
	sign: "hQwMMG_sign",
	title: "hQwMMG_title",
	trophy: "hQwMMG_trophy",
	value: "hQwMMG_value",
	victory: "hQwMMG_victory"
};
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: Victory_module_default.row,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: Victory_module_default.key,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: Victory_module_default.value,
			children: value || "—"
		})]
	});
}
function Victory({ profile, vocacao, onRestart }) {
	const [count, setCount] = (0, import_react.useState)(30);
	(0, import_react.useEffect)(() => {
		if (!onRestart) return void 0;
		const t = setInterval(() => setCount((c) => c - 1), 1e3);
		return () => clearInterval(t);
	}, [onRestart]);
	(0, import_react.useEffect)(() => {
		if (onRestart && count <= 0) onRestart();
	}, [count, onRestart]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: Victory_module_default.victory,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: Victory_module_default.trophy,
				"aria-hidden": "true",
				children: "🏆"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: Victory_module_default.kicker,
				children: CAMPANHA
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: Victory_module_default.title,
				children: [
					"Bem-vindo(a) à FADAT,",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: GameUI_module_default.gradientText,
						children: [profile.nome.trim().split(" ")[0] || "jogador", "."]
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GameCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: Victory_module_default.cardLabel,
				children: "· Seu perfil FADAT"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: Victory_module_default.list,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Nome",
						value: profile.nome
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Vocação",
						value: vocacao ? `${vocacao.emoji} ${vocacao.label}` : ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Cidade",
						value: profile.cidade
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "WhatsApp",
						value: profile.whatsapp
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Depoimentos no WhatsApp",
						value: profile.depoimentosWhatsapp ? "Sim, quero receber" : "Agora não"
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: Victory_module_default.note,
				children: "Nosso time entrará em contato via WhatsApp para dar prosseguimento à sua jornada."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: Victory_module_default.sign,
				children: "Daqui pra frente, é FADAT."
			}),
			onRestart && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				variant: "outline",
				onClick: onRestart,
				children: "▶ Liberar totem para o próximo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: Victory_module_default.note,
				children: [
					"Reiniciando automaticamente em ",
					Math.max(count, 0),
					"s"
				]
			})] })
		]
	});
}
var index_module_default = {
	footer: "G7KSpG_footer",
	page: "G7KSpG_page",
	shell: "G7KSpG_shell"
};
function Index() {
	const [stage, setStage] = (0, import_react.useState)("boot");
	const [profile, setProfile] = (0, import_react.useState)(initialProfile);
	const [respostas, setRespostas] = (0, import_react.useState)({});
	const [sound, setSound] = (0, import_react.useState)(false);
	const resetGame = (0, import_react.useCallback)(() => {
		setStage("boot");
		setProfile(initialProfile);
		setRespostas({});
	}, []);
	(0, import_react.useEffect)(() => {
		if (stage === "boot") return void 0;
		let timer = window.setTimeout(resetGame, 12e4);
		const bump = () => {
			window.clearTimeout(timer);
			timer = window.setTimeout(resetGame, 12e4);
		};
		const events = [
			"pointerdown",
			"keydown",
			"touchstart"
		];
		events.forEach((e) => window.addEventListener(e, bump, { passive: true }));
		return () => {
			window.clearTimeout(timer);
			events.forEach((e) => window.removeEventListener(e, bump));
		};
	}, [stage, resetGame]);
	const vocacao = (0, import_react.useMemo)(() => calcularVocacao(respostas), [respostas]);
	const totalXP = (0, import_react.useMemo)(() => {
		const respondidas = Object.keys(respostas).length;
		return Math.min(100, (BASE_XP[stage] ?? 0) + respondidas * 7);
	}, [stage, respostas]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: index_module_default.page,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBackdrop, {}),
			stage !== "boot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressHUD, {
				xp: totalXP,
				stage,
				sound,
				onToggleSound: () => setSound((v) => !v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: index_module_default.shell,
				children: [
					stage === "boot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, { onStart: () => setStage("cadastro") }),
					stage === "cadastro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelCadastro, {
						profile,
						setProfile,
						onNext: () => setStage("missoes")
					}),
					stage === "missoes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelMissoes, {
						respostas,
						setRespostas,
						onNext: () => setStage("desafios")
					}),
					stage === "desafios" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelDesafios, { onNext: () => setStage("futuro") }),
					stage === "futuro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelFuturo, { onNext: () => setStage("vocacao") }),
					stage === "vocacao" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelVocacao, {
						vocacao,
						profile,
						onFinish: () => setStage("done")
					}),
					stage === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Victory, {
						profile,
						vocacao,
						onRestart: resetGame
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: index_module_default.footer,
				children: [CAMPANHA, " · FADAT 2027.1"]
			})
		]
	});
}
//#endregion
export { Index as component };
