globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
// #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
// node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
// #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/avatar-agent-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"13632-0tQPPyQWaWokx3im6yQUPQuAPmA\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 79410,
		"path": "../public/avatar-agent-2.jpg"
	},
	"/avatar-agent-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"111af-t+46r4gMqoWR9YIo1IAU9RckPrs\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 70063,
		"path": "../public/avatar-agent-1.jpg"
	},
	"/avatar-agent-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1497b-ntjzrycV9wmEG7ual40ba/ELO7I\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 84347,
		"path": "../public/avatar-agent-3.jpg"
	},
	"/avatar-agent-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"157cd-zOUiCPfbD2fmKuUFvL7eZz1Cuuc\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 88013,
		"path": "../public/avatar-agent-4.jpg"
	},
	"/avatar-hero-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"10ef1-bgHBnj4miRg7cOdOJ8DQMf2FUJM\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 69361,
		"path": "../public/avatar-hero-1.jpg"
	},
	"/avatar-hero-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"12caa-1ni7ZxXCIO4zKTG1NnhsFWoZ7Hc\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 76970,
		"path": "../public/avatar-hero-2.jpg"
	},
	"/avatar-hero-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"13bf3-phrco6x3ZBsHOnrm2KgRVHzu6dg\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 80883,
		"path": "../public/avatar-hero-3.jpg"
	},
	"/avatar-hero-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"1290b-qcrXN31YDmD+uDvOs/jVuX1yl3U\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 76043,
		"path": "../public/avatar-hero-4.jpg"
	},
	"/avatar-hero-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"15a3c-/LUHefYJENv94vZ10unt9u1cg28\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 88636,
		"path": "../public/avatar-hero-5.jpg"
	},
	"/callcenter.jpg": {
		"type": "image/jpeg",
		"etag": "\"28584-2s6hzuRGSJjuKLbHe7JgtKJqA1Q\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 165252,
		"path": "../public/callcenter.jpg"
	},
	"/hero-agent.jpg": {
		"type": "image/jpeg",
		"etag": "\"29da5-XS+7/2us1vNyXkLrp+NFS+OjAUk\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 171429,
		"path": "../public/hero-agent.jpg"
	},
	"/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"21572-ryhchUTHTUzRaZ+aqGdEz7Pna+w\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 136562,
		"path": "../public/hero.jpg"
	},
	"/sekretariat-service-logo.png": {
		"type": "image/png",
		"etag": "\"5e46c-zG3zSZFsUduovVnlOMMa8TAs6I8\"",
		"mtime": "2026-11-09T15:48:58.587Z",
		"size": 386156,
		"path": "../public/sekretariat-service-logo.png"
	},
	"/testimonial-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"6962-o3vTnX1JZ8+9A/bzovoYzevK8hc\"",
		"mtime": "2026-11-09T15:48:58.587Z",
		"size": 26978,
		"path": "../public/testimonial-1.jpg"
	},
	"/testimonial-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"587b-hq2Q754MbPjOA2VPVmhaMKR+3h8\"",
		"mtime": "2026-11-09T15:48:58.587Z",
		"size": 22651,
		"path": "../public/testimonial-2.jpg"
	},
	"/testimonial-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"91a7-2KjWz4UbUfqexe6ZEBKxekG5s4M\"",
		"mtime": "2026-11-09T15:48:58.587Z",
		"size": 37287,
		"path": "../public/testimonial-3.jpg"
	},
	"/assets/Footer-CtX9OG6r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20b38-vzkxeYBzrQ/rbzWQhtLMNXZks3Q\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 133944,
		"path": "../public/assets/Footer-CtX9OG6r.js"
	},
	"/assets/JobPage-B_mLH6sX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c7f-86B8C+iNeL8BPVhMhyg7RRKxTj0\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 40063,
		"path": "../public/assets/JobPage-B_mLH6sX.js"
	},
	"/assets/LegalLayout--Yury8xU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"846-lix5YPrCz9TR6vTwJcJu0fIzkKQ\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 2118,
		"path": "../public/assets/LegalLayout--Yury8xU.js"
	},
	"/assets/agb-D73UsqTe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11f8-S9nUB3nhaBan3ySFTAhXLRBJUZI\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 4600,
		"path": "../public/assets/agb-D73UsqTe.js"
	},
	"/assets/branchen._slug-B9N1c8L4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b1f-a40Z2uOZZxWowJPBlucGSSrpJ3o\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 2847,
		"path": "../public/assets/branchen._slug-B9N1c8L4.js"
	},
	"/assets/branchen._slug-BWyJiP1a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b7-1rocK9G/yA3mjTaDEX7zM12r5J0\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 695,
		"path": "../public/assets/branchen._slug-BWyJiP1a.js"
	},
	"/assets/calendar-check-B61_lt4e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12b-uiYRcx4K0YUjn9IeWl1YK8cMFCM\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 299,
		"path": "../public/assets/calendar-check-B61_lt4e.js"
	},
	"/assets/callcenter-c6-d7-PG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d87-2nzq4isDJ1Zuokeo8/Q1B+u929Q\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 15751,
		"path": "../public/assets/callcenter-c6-d7-PG.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"c7a40-1wNsFRVyj68AuqdVEOLkPEr4wsM\"",
		"mtime": "2026-11-09T15:48:58.586Z",
		"size": 817728,
		"path": "../public/favicon.png"
	},
	"/assets/chart-column-CebnOu63.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5-V8otfFBq+p58jYusdIIWLbM6KJE\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 245,
		"path": "../public/assets/chart-column-CebnOu63.js"
	},
	"/assets/cookie-einstellungen-CPMxEBGT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"213f-uR8mJXlKYmwlVU5bmVW9DtO4enc\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 8511,
		"path": "../public/assets/cookie-einstellungen-CPMxEBGT.js"
	},
	"/assets/clock-B_zP5TRa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-cPEgYCVIpKQL/Cdo9NVR1XshoMk\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 163,
		"path": "../public/assets/clock-B_zP5TRa.js"
	},
	"/assets/dist-D8Wfxh48.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-jFZvDM3G/vRQzi+d6tOFFCbMspo\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 156,
		"path": "../public/assets/dist-D8Wfxh48.js"
	},
	"/assets/datenschutz-KnD68W1G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1494-NUhvHXnWfiZVYXV+AmC+2w54FFU\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 5268,
		"path": "../public/assets/datenschutz-KnD68W1G.js"
	},
	"/assets/euro-BjwX954N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-1RKRmPMJHS5l5utwLWh8RkzO34U\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 254,
		"path": "../public/assets/euro-BjwX954N.js"
	},
	"/assets/file-text-X4cy48Fs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17b-66XZ94K1MGnz4eLnCqSSSxoMBus\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 379,
		"path": "../public/assets/file-text-X4cy48Fs.js"
	},
	"/assets/impressum-w9k3FTbw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e73-mpVQP1DtFBzDU05gLdvf/pAmUsA\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 3699,
		"path": "../public/assets/impressum-w9k3FTbw.js"
	},
	"/assets/industries-D-QPeMxY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5469-0d6IcHCVZ5r+QK8keS6bpG2evU0\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 21609,
		"path": "../public/assets/industries-D-QPeMxY.js"
	},
	"/assets/index-CbaOB2_f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59a83-Sjb0Lx1yxNmKTa2HVj8DMF+6vk8\"",
		"mtime": "2026-11-09T15:48:58.137Z",
		"size": 367235,
		"path": "../public/assets/index-CbaOB2_f.js"
	},
	"/assets/karriere.index-9sqXk21T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10ea-mJinmeahCsGOWBMvJM9T3bQ1NJw\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 4330,
		"path": "../public/assets/karriere.index-9sqXk21T.js"
	},
	"/assets/karriere.recruiting-CgeTErUW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b7-cLLeG2ulfkn0vrl1Z3PkFNONsK4\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 183,
		"path": "../public/assets/karriere.recruiting-CgeTErUW.js"
	},
	"/assets/karriere.sekretariat-BE2ICkGG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b7-R7tEvbJCVbbcALy7FIxaHuzhwHs\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 183,
		"path": "../public/assets/karriere.sekretariat-BE2ICkGG.js"
	},
	"/assets/kontakt-BXKbtjb7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e04-t1XTY4jgYGGBGcziC/NvKre8JWw\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 11780,
		"path": "../public/assets/kontakt-BXKbtjb7.js"
	},
	"/assets/karriere-B9BfXXhy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-GHEpUeysVbskaFQEQssepBNMXTo\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 141,
		"path": "../public/assets/karriere-B9BfXXhy.js"
	},
	"/assets/label-D_n1iLOG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e282-FBKMt5vjO4AYHWDXvKUiwNwryLc\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 57986,
		"path": "../public/assets/label-D_n1iLOG.js"
	},
	"/assets/preise-Da8k8fhE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6548-u2fkL8XwolSDcOGo9Uo2nWl/xd8\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 25928,
		"path": "../public/assets/preise-Da8k8fhE.js"
	},
	"/assets/primitives-BLOwQCKZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d92a-shNjWGB/kAWU9BaHYqSBaPAnl+s\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 121130,
		"path": "../public/assets/primitives-BLOwQCKZ.js"
	},
	"/assets/star-CZ1TRPBA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d2-0HsQj38Ck4fW4vXsi9ChmzviG80\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 466,
		"path": "../public/assets/star-CZ1TRPBA.js"
	},
	"/assets/routes-B0ER2O-q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ecf-SUDeOEONtTYI/etGxmMPuLWSTm8\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 20175,
		"path": "../public/assets/routes-B0ER2O-q.js"
	},
	"/assets/styles-CLZV7gMV.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1667a-NhFI5NoshPIarMQV8JZCZpAWaLk\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 91770,
		"path": "../public/assets/styles-CLZV7gMV.css"
	},
	"/assets/useSelector-DVnrlu_j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bbc-+YModFNen+7a6o0LQJ4DMiNpolM\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 11196,
		"path": "../public/assets/useSelector-DVnrlu_j.js"
	},
	"/assets/users-Dwqh3QFf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"243-ux6/eKpjwe9rx8CAyyDDtlGUzJw\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 579,
		"path": "../public/assets/users-Dwqh3QFf.js"
	},
	"/assets/vorteile-CllMiTZR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"204e-AaFQ4bl2UrvZz2o/eqLSyS4z8vk\"",
		"mtime": "2026-11-09T15:48:58.139Z",
		"size": 8270,
		"path": "../public/assets/vorteile-CllMiTZR.js"
	}
};
// #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
// #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
// node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
// #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_0Ykzce = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_0Ykzce
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
// node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
// #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
// #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
// node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
// node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
// #nitro/virtual/tracing
var tracingSrvxPlugins = [];
// node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
export { node_server_default as default };
