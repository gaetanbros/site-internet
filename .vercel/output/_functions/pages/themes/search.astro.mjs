/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DzXfh8mT.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_gFKI_F-_.mjs';
import { $ as $$SearchForm, a as $$ThemeCard } from '../../chunks/ThemeCard_Cq6Aj1zE.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Dy0MWAKa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://gaetan-bros.github.io");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allThemes = await getCollection("blog");
  const searchResults = allThemes.filter((theme) => {
    const titleMatch = theme.data.title.toLowerCase().includes(query.toLowerCase());
    const summaryMatch = theme.data.summary.toLowerCase().includes(query.toLowerCase());
    return titleMatch || summaryMatch;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Results" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20 bg-transparent"> <div class="bg-transparent py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <a href="/themes" class="inline-flex items-center font-medium text-black hover:text-green my-4"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path> </svg> <span class="ml-1 font-bold text-lg">All Articles</span> </a> <br> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <h2 class="text-2xl pb-3 mt-6">Results For <strong>${query}</strong></h2> <div class="grid gap-8 lg:grid-cols-2"> ${searchResults.map((theme) => renderTemplate`${renderComponent($$result2, "ThemeCard", $$ThemeCard, { "theme": theme })}`)} </div> </div> </main> ` })}`;
}, "/Users/alessandro/dev/projet-GB/arts/src/pages/themes/search.astro", void 0);

const $$file = "/Users/alessandro/dev/projet-GB/arts/src/pages/themes/search.astro";
const $$url = "/themes/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
