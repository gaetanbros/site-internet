/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DzXfh8mT.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_gFKI_F-_.mjs';
import { $ as $$SearchForm, a as $$ThemeCard } from '../chunks/ThemeCard_Cq6Aj1zE.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dy0MWAKa.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allThemes = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Ga\xEBtan Bros | Th\xE8mes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=""> <div class="mt-[80px] px-4 mx-auto max-w-screen-xl lg:px-3"> <div class="text-center max-w-xl mx-auto"> <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
Nos thèmes
</h1> <p class="font-light sm:text-xl">
Vous trouverez ici les thèmes sur lesquels nos performances peuvent
          porter.
</p> <div class="text-center mb-10"> <span class="inline-block w-1 h-1 rounded-full bg-green ml-1"></span> <span class="inline-block w-3 h-1 rounded-full bg-green ml-1"></span> <span class="inline-block w-40 h-1 rounded-full bg-green"></span> <span class="inline-block w-3 h-1 rounded-full bg-green ml-1"></span> <span class="inline-block w-1 h-1 rounded-full bg-green ml-1"></span> </div> </div> <br> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <div class="grid gap-8 lg:grid-cols-2"> ${allThemes.map((theme) => renderTemplate`${renderComponent($$result2, "ThemeCard", $$ThemeCard, { "theme": theme })}`)} </div> </div> </main> ` })}`;
}, "/Users/alessandro/dev/projet-GB/arts/src/pages/themes/index.astro", void 0);

const $$file = "/Users/alessandro/dev/projet-GB/arts/src/pages/themes/index.astro";
const $$url = "/themes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
