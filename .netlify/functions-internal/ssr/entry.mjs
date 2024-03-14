import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Cj0e1tnz.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_-e0UeDeA.mjs');
const _page1 = () => import('./chunks/404_C3reMzJq.mjs');
const _page2 = () => import('./chunks/accessible-components_CgBm9-7-.mjs');
const _page3 = () => import('./chunks/_post__C-V09Lft.mjs');
const _page4 = () => import('./chunks/_.._B-twM1rU.mjs');
const _page5 = () => import('./chunks/markdown-page_D7BzoD8B.mjs');
const _page6 = () => import('./chunks/mdx-page_BMGD4fJ_.mjs');
const _page7 = () => import('./chunks/index_9ZF9EO6x.mjs');
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
    "middlewareSecret": "ae5374a4-3617-46e7-916b-bfb0285f68a2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
