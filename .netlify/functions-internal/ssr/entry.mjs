import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DnAzrJNO.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Dm4MbiLS.mjs');
const _page1 = () => import('./chunks/404_7Ezh970J.mjs');
const _page2 = () => import('./chunks/accessible-components_CEIeAjkd.mjs');
const _page3 = () => import('./chunks/_post__Bj1o1l9r.mjs');
const _page4 = () => import('./chunks/_.._Dbol3Pq_.mjs');
const _page5 = () => import('./chunks/markdown-page_Cm9mfdOQ.mjs');
const _page6 = () => import('./chunks/mdx-page_idDIwzcM.mjs');
const _page7 = () => import('./chunks/index_BB8eLx24.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/accessible-components.astro", _page2],
    ["src/pages/blog/[post].astro", _page3],
    ["src/pages/blog/[...page].astro", _page4],
    ["src/pages/markdown-page.md", _page5],
    ["src/pages/mdx-page.mdx", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0c25a013-7731-432c-a395-31d200e389b1"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
