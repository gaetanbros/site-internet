import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DhOL3hOj.mjs';
import { manifest } from './manifest_ucqIuaMY.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/pricing.astro.mjs');
const _page4 = () => import('./pages/themes/api/search.json.astro.mjs');
const _page5 = () => import('./pages/themes/search.astro.mjs');
const _page6 = () => import('./pages/themes.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/pricing.astro", _page3],
    ["src/pages/themes/api/search.json.ts", _page4],
    ["src/pages/themes/search.astro", _page5],
    ["src/pages/themes/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b76f438a-8a98-406e-b9e0-52f02d003085",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
