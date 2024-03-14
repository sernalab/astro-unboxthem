import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderSlot, h as addAttribute, i as renderComponent } from '../astro_PxanjNhH.mjs';
import 'kleur/colors';
import { f as $$Media, $ as $$DefaultLayout } from './404_BEmNMjNd.mjs';
import 'clsx';
/* empty css                          */
import { $ as $$Icon } from './accessible-components_CsfdFxGX.mjs';

const $$Astro$7 = createAstro();
const $$HeroLaunch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeroLaunch;
  const { src = "/astronaut-hero-img.webp" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero my-24" data-astro-cid-jseywsqh> <div class="container" data-astro-cid-jseywsqh> <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2" data-astro-cid-jseywsqh> <div class="flex flex-col items-center gap-8 md:items-start" data-astro-cid-jseywsqh> <h1 class="text-center text-6xl md:text-left lg:text-8xl" data-astro-cid-jseywsqh> ${renderSlot($$result, $$slots["default"], renderTemplate`
Be part of the <span class="text-gradient" data-astro-cid-jseywsqh>first 10 posts </span>delving into the world of porn.
`)} </h1> </div> <img class="hidden lg:block"${addAttribute(src, "src")} alt="" decoding="async" data-astro-cid-jseywsqh> </div> </div> </section> `;
}, "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/components/HeroLaunch.astro", void 0);

const $$Astro$6 = createAstro();
const $$Feature = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Feature;
  const { icon = "mdi:rocket", title = "Title" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="feature flex flex-col gap-4" data-astro-cid-ezsi7upz> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-ezsi7upz": true })} <div class="content" data-astro-cid-ezsi7upz> <h3 data-astro-cid-ezsi7upz>${title}</h3> <p data-astro-cid-ezsi7upz> ${renderSlot($$result, $$slots["default"], renderTemplate`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.`)} </p> </div> </div> `;
}, "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/components/Feature.astro", void 0);

const $$Astro$5 = createAstro();
const $$FeaturesSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FeaturesSection;
  return renderTemplate`${maybeRenderHead()}<section class="my-64"> <div class="container"> <h2 class="mb-16 text-6xl">Features</h2> <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"> ${renderComponent($$result, "Feature", $$Feature, { "icon": "mdi:tailwind", "title": "Tailwind CSS" }, { "default": ($$result2) => renderTemplate`
Use the power of Tailwind to greatly improve your productivity and enhance your developer workflow.
` })} ${renderComponent($$result, "Feature", $$Feature, { "icon": "mdi:wheelchair-accessibility", "title": "a11y Components" }, { "default": ($$result2) => renderTemplate`
17 components and counting, all tried and tested for the most optimal accessible experience for your visitors.
` })} ${renderComponent($$result, "Feature", $$Feature, { "icon": "mdi:looks", "title": "Prettier" }, { "default": ($$result2) => renderTemplate`
Less worry about formatting your code, let the Astro Prettier integration do the heavy lifting.
` })} ${renderComponent($$result, "Feature", $$Feature, { "icon": "mdi:eslint", "title": "ESLint" }, { "default": ($$result2) => renderTemplate`
Lint your code with strict a11y settings to ensure you stay on track with the WCAG standards.
` })} ${renderComponent($$result, "Feature", $$Feature, { "icon": "mdi:book-open-page-variant", "title": "Blog" }, { "default": ($$result2) => renderTemplate`
This theme comes with a fully integrated blog, dynamic pages and SEO optimization.
` })} ${renderComponent($$result, "Feature", $$Feature, { "icon": "mdi:language-markdown", "title": "Markdown & MDX" }, { "default": ($$result2) => renderTemplate`
Easily use .md and .mdx pages to build your websites or use it with Netlify CMS.
` })} ${renderComponent($$result, "Feature", $$Feature, { "icon": "mdi:theme-light-dark", "title": "Dark mode" }, { "default": ($$result2) => renderTemplate`
Fully integrated Dark mode gives your users the choice for their favorite viewing mode.
` })} ${renderComponent($$result, "Feature", $$Feature, { "icon": "mdi:cog", "title": "Design System" }, { "default": ($$result2) => renderTemplate`
The theme offers some very handy utilities to help you build your website faster.
` })} ${renderComponent($$result, "Feature", $$Feature, { "icon": "mdi:lighthouse", "title": "Lighthouse Scores" }, { "default": ($$result2) => renderTemplate`
Excellent lighthouse scores means your website will load faster and get better SEO rankings.
` })} </div> </div> </section>`;
}, "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/components/FeaturesSection.astro", void 0);

const $$Astro$4 = createAstro();
const $$ContentMedia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContentMedia;
  const { imgSrc, reverseImg = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-64"> <div class="container"> <div class="grid grid-cols-1 gap-24 md:grid-cols-2"> ${!reverseImg ? renderTemplate`${renderComponent($$result, "Media", $$Media, { "class": "rounded-lg", "src": imgSrc })}` : ""} <div class="space-content flex flex-col justify-center"> ${renderSlot($$result, $$slots["default"])} </div> ${reverseImg ? renderTemplate`${renderComponent($$result, "Media", $$Media, { "class": "rounded-lg", "src": imgSrc })}` : ""} </div> </div> </section>`;
}, "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/components/ContentMedia.astro", void 0);

const $$Astro$3 = createAstro();
const $$ContentSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContentSection;
  return renderTemplate`${renderComponent($$result, "ContentMedia", $$ContentMedia, { "imgSrc": "/accessible-components.webp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Accessible Components</h2> <p class="text-2xl">
This theme provides plenty of tried and tested Accessible Astro Components. Some are native to this theme and a
      lot of others are integrated using a <a href="https://github.com/markteekman/accessible-astro-components">separate package</a>. They'll get you up and running in building an accessible solution for your visitors.
</p> ` })} ${renderComponent($$result, "ContentMedia", $$ContentMedia, { "imgSrc": "/wcag-compliant.webp", "reverseImg": true }, { "default": ($$result2) => renderTemplate` <h2>WCAG 2.1 AA Compliant</h2> <p class="text-2xl">
Using semantic HTML, landmarks, skip links, screen reader friendly content, aria-labels, keyboard accessible
      navigation and components, clear outlines and tab indicators and the right color contrast, you're more certain of
      reaching WCAG AA compliance.
</p> ` })}`;
}, "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/components/ContentSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$Counter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Counter;
  const { count, title, sub } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="animate text-center" data-astro-cid-x63rdsgb> <p class="text-6xl font-bold" data-astro-cid-x63rdsgb>${count}</p> <p class="text-4xl font-semibold" data-astro-cid-x63rdsgb>${title}</p> <p class="text-2xl" data-astro-cid-x63rdsgb>${sub}</p> </div> `;
}, "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/components/Counter.astro", void 0);

const $$Astro$1 = createAstro();
const $$CounterSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CounterSection;
  return renderTemplate`${maybeRenderHead()}<section class="mb-32 mt-64"> <div class="container"> <h2 class="mb-16 text-6xl">Counters</h2> <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4"> ${renderComponent($$result, "Counter", $$Counter, { "count": "520", "title": "Stars", "sub": "On GitHub" })} ${renderComponent($$result, "Counter", $$Counter, { "count": "17", "title": "Accessible", "sub": "Components" })} ${renderComponent($$result, "Counter", $$Counter, { "count": "500", "title": "Commits", "sub": "Merged" })} ${renderComponent($$result, "Counter", $$Counter, { "count": "18+", "title": "Months", "sub": "Since launch" })} </div> </div> </section>`;
}, "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/components/CounterSection.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroLaunch", $$HeroLaunch, {})} ${renderComponent($$result2, "Features", $$FeaturesSection, {})} ${renderComponent($$result2, "Content", $$ContentSection, {})} ${renderComponent($$result2, "Counter", $$CounterSection, {})} ` })}`;
}, "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/index.astro", void 0);

const $$file = "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
