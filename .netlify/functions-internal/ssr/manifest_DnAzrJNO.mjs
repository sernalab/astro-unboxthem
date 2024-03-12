import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_PxanjNhH.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.GpTEu1Ls.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.DUj5WD7G.css"},{"type":"external","src":"/_astro/index.DE03_eDQ.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.GpTEu1Ls.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.DUj5WD7G.css"},{"type":"external","src":"/_astro/index.DE03_eDQ.css"}],"routeData":{"route":"/accessible-components","isIndex":false,"type":"page","pattern":"^\\/accessible-components\\/?$","segments":[[{"content":"accessible-components","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/accessible-components.astro","pathname":"/accessible-components","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.GpTEu1Ls.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.DUj5WD7G.css"},{"type":"inline","content":"ul[data-astro-cid-relfimn4]{display:grid;grid-template-columns:1fr;grid-gap:4rem}@media (min-width: 550px){ul[data-astro-cid-relfimn4]{grid-template-columns:repeat(2,1fr);grid-gap:2rem}}@media (min-width: 950px){ul[data-astro-cid-relfimn4]{grid-template-columns:repeat(3,1fr)}}\n"},{"type":"external","src":"/_astro/index.DE03_eDQ.css"}],"routeData":{"route":"/blog/[post]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post","dynamic":true,"spread":false}]],"params":["post"],"component":"src/pages/blog/[post].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.GpTEu1Ls.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.DUj5WD7G.css"},{"type":"inline","content":"ul[data-astro-cid-a7wiyce3]{display:grid;grid-template-columns:1fr;grid-gap:4rem}@media (min-width: 550px){ul[data-astro-cid-a7wiyce3]{grid-template-columns:repeat(2,1fr);grid-gap:2rem}}@media (min-width: 950px){ul[data-astro-cid-a7wiyce3]{grid-template-columns:repeat(3,1fr)}}\n"},{"type":"external","src":"/_astro/index.DE03_eDQ.css"}],"routeData":{"route":"/blog/[...page]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/blog/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.GpTEu1Ls.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.DUj5WD7G.css"},{"type":"external","src":"/_astro/index.DE03_eDQ.css"}],"routeData":{"route":"/markdown-page","isIndex":false,"type":"page","pattern":"^\\/markdown-page\\/?$","segments":[[{"content":"markdown-page","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/markdown-page.md","pathname":"/markdown-page","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.GpTEu1Ls.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.DUj5WD7G.css"},{"type":"external","src":"/_astro/index.DE03_eDQ.css"}],"routeData":{"route":"/mdx-page","isIndex":false,"type":"page","pattern":"^\\/mdx-page\\/?$","segments":[[{"content":"mdx-page","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mdx-page.mdx","pathname":"/mdx-page","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.GpTEu1Ls.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.DUj5WD7G.css"},{"type":"inline","content":".text-gradient[data-astro-cid-jseywsqh]{background:linear-gradient(315deg,var(--primary-200) 25%,var(--secondary-500));background-clip:border-box;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.darkmode .text-gradient{background:linear-gradient(315deg,var(--primary-200) 25%,var(--secondary-400));background-clip:border-box;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.feature[data-astro-cid-ezsi7upz]{position:relative;width:calc(100% - .5rem);padding:2rem}.feature[data-astro-cid-ezsi7upz]>[data-astro-cid-ezsi7upz]{position:relative;z-index:2}@media (min-width: 75em){.feature[data-astro-cid-ezsi7upz]{width:100%}}.feature[data-astro-cid-ezsi7upz]:before,.feature[data-astro-cid-ezsi7upz]:after{content:\"\";position:absolute}.feature[data-astro-cid-ezsi7upz]:before{inset:0;background-color:var(--neutral-100);border:3px solid var(--neutral-700);border-radius:1rem;box-shadow:0 0 0 6px var(--neutral-100);z-index:1}.feature[data-astro-cid-ezsi7upz]:after{background-color:var(--action-color);inset:1rem -.85rem -.85rem 1rem;border-radius:1rem;z-index:0}.feature [data-icon]{height:auto;width:4rem;color:var(--action-color)}.darkmode .feature:before{background-color:var(--dark-100);box-shadow:0 0 0 6px var(--dark-100)}div[data-astro-cid-x63rdsgb]>p[data-astro-cid-x63rdsgb]:first-child{color:var(--action-color)}\n"},{"type":"external","src":"/_astro/index.DE03_eDQ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/node_modules/accessible-astro-components/DarkMode.astro",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/node_modules/accessible-astro-components/index.js",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/components/ContentMedia.astro",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/layouts/DefaultLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/layouts/MarkdownLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/markdown-page.md",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/markdown-page@_@md",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/mdx-page.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/mdx-page@_@mdx",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/accessible-components.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/accessible-components@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/blog/[post].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[post]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/blog/[...page].astro":"chunks/pages/__CeIHBCaI.mjs","/src/pages/blog/[post].astro":"chunks/pages/_post__D_FBjfz-.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_TosYxKXX.mjs","/src/pages/index.astro":"chunks/pages/index_BCd2-dZd.mjs","/src/pages/mdx-page.mdx":"chunks/pages/mdx-page_Ce_PB1rh.mjs","\u0000@astrojs-manifest":"manifest_DnAzrJNO.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Dm4MbiLS.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_7Ezh970J.mjs","\u0000@astro-page:src/pages/accessible-components@_@astro":"chunks/accessible-components_CEIeAjkd.mjs","\u0000@astro-page:src/pages/blog/[post]@_@astro":"chunks/_post__Bj1o1l9r.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"chunks/_.._Dbol3Pq_.mjs","\u0000@astro-page:src/pages/markdown-page@_@md":"chunks/markdown-page_Cm9mfdOQ.mjs","\u0000@astro-page:src/pages/mdx-page@_@mdx":"chunks/mdx-page_idDIwzcM.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BB8eLx24.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.GpTEu1Ls.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logo.C7kMFyKe.png","/_astro/index.DE03_eDQ.css","/_astro/markdown-page.DUj5WD7G.css","/accessible-components.webp","/astronaut-hero-img.webp","/logo-ut.svg","/social-preview-image.png","/wcag-compliant.webp","/_astro/hoisted.GpTEu1Ls.js","/fonts/OpenSans-Bold.woff","/fonts/OpenSans-Bold.woff2","/fonts/OpenSans-ExtraBold.woff","/fonts/OpenSans-ExtraBold.woff2","/fonts/OpenSans-Italic.woff","/fonts/OpenSans-Italic.woff2","/fonts/OpenSans-Regular.woff","/fonts/OpenSans-Regular.woff2"],"buildFormat":"directory"});

export { manifest };
