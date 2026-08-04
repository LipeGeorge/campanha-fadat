import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, h as useRouter, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BEjftiZO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/campanha-fadat/assets/styles-CGmDZvrP.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var root_module_default = {
	actions: "cGEu2W_actions",
	box: "cGEu2W_box",
	btn: "cGEu2W_btn",
	btnGhost: "cGEu2W_btnGhost",
	center: "cGEu2W_center",
	code: "cGEu2W_code",
	text: "cGEu2W_text",
	title: "cGEu2W_title"
};
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "FADAT Educação Superior"
			},
			{
				name: "theme-color",
				content: "#070c1a"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: root_module_default.center,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: root_module_default.box,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: root_module_default.code,
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: root_module_default.title,
					children: "Missão não encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: root_module_default.text,
					children: "Esta página não existe ou foi movida."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: root_module_default.btn,
					children: "Voltar ao início"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: root_module_default.center,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: root_module_default.box,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: root_module_default.title,
					children: "Esta página não carregou"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: root_module_default.text,
					children: "Algo deu errado do nosso lado. Tente novamente ou volte ao início."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: root_module_default.actions,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: root_module_default.btn,
						onClick: () => {
							router.invalidate();
							reset();
						},
						children: "Tentar de novo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: root_module_default.btnGhost,
						children: "Ir para o início"
					})]
				})
			]
		})
	});
}
var $$splitComponentImporter = () => import("./routes-BIcoGyns.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "FADAT 2027.1 — Se torne quem você nasceu pra ser!" },
		{
			name: "description",
			content: "Experiência interativa e gamificada para descobrir sua vocação na FADAT. Pré-inscrição do Vestibular 2027.1."
		},
		{
			property: "og:title",
			content: "FADAT 2027.1 — Se torne quem você nasceu pra ser!"
		},
		{
			property: "og:description",
			content: "Sete missões para descobrir sua vocação. Pré-inscrição do Vestibular FADAT 2027.1."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
