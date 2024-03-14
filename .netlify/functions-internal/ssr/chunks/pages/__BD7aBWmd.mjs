import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_PxanjNhH.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from './404_BEmNMjNd.mjs';
import 'clsx';
import contentful from 'contentful';
/* empty css                           */

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, slug, body, heroImageUrl, description, publishDate, tags, author } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark"> <a href="#!"> <img class="rounded-t-lg"${addAttribute(heroImageUrl, "src")}${addAttribute(`Imagen de ${title}`, "alt")}> </a> <div class="p-6 text-surface dark:text-black"> <h5 class="mb-2 text-xl font-medium leading-tight">${title}</h5> <p class="mb-4 text-base"></p><p>${author}</p> <p>${description}</p>
SLUG${slug}  <button type="button" class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" data-twe-ripple-init data-twe-ripple-color="light">
Button
</button> </div> </div>`;
}, "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/components/Card.astro", void 0);

const contentfulClient = contentful.createClient({
  space: "r2ivqj9agsai",
  accessToken: "nWioXx69T6lZnfOSyoRhc_eSZ_10jka94C0so1P7MlM",
  host: "cdn.contentful.com"
});

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const entries = await contentfulClient.getEntries({
    content_type: "post"
  });
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Blog", "description": "An example of a blog with dynamic content fetched from JSONPlaceholder using the title, body and userId.", "data-astro-cid-a7wiyce3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-12" data-astro-cid-a7wiyce3> <div class="space-content container" data-astro-cid-a7wiyce3> <h1 data-astro-cid-a7wiyce3>Authors</h1> <p class="text-2xl" data-astro-cid-a7wiyce3>
An example of a blog with dynamic content fetched from <a href="https://jsonplaceholder.typicode.com/posts" data-astro-cid-a7wiyce3>JSONPlaceholder</a> using the title, body and userId. The Accessible Astro Card Component is used here to display al the posts.
</p> <ul data-astro-cid-a7wiyce3></ul> </div> </section> <section class="my-12" data-astro-cid-a7wiyce3> <div class="container" data-astro-cid-a7wiyce3> <ul class="my-3" data-astro-cid-a7wiyce3> ${entries.items.map((item) => renderTemplate`<li data-astro-cid-a7wiyce3> ${renderComponent($$result2, "Card", $$Card, { "url": `/blog/${item.fields.slug}`, "title": item.fields.title, "slug": item.fields.slug, "body": item.fields.body, "heroImageUrl": item.fields.heroImage?.fields.file.url, "description": item.fields.description, "publishDate": item.fields.publishDate, "tags": item.fields.tags, "author": item.fields.author?.fields.name, "data-astro-cid-a7wiyce3": true })} </li>`)} </ul> </div> </section> ` })} `;
}, "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/blog/[...page].astro", void 0);

const $$file = "/Users/carles/Documents/Code/Proyectos/accessible-astro-starter/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

export { $$ as default, $$file as file, $$url as url };
