import { a as createComponent, r as renderTemplate, m as maybeRenderHead, c as createAstro, d as renderComponent, e as addAttribute } from './astro/server_DzXfh8mT.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Card } from './Card_BCP8l60y.mjs';

const $$SearchForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="search-form" class="flex items-center" action="/themes/search"> <label for="search-input" class="sr-only">Search</label> <div class="relative w-full"> <input type="text" id="query" name="query" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="Search themes..." required> </div> <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-black rounded-lg border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <span class="sr-only">Search</span> </button> </form>`;
}, "/Users/alessandro/dev/projet-GB/arts/src/components/ui/SearchForm.astro", void 0);

const $$Astro = createAstro("https://gaetan-bros.github.io");
const $$ThemeCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThemeCard;
  const { theme } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="p-6 relative"> <div class="flex justify-between items-center mb-5 text-gray-500"> <h2 class="bg-green text-black text-xl font-medium inline-flex items-center px-2.5 py-0.5 rounded"> ${theme.data.title} </h2> </div> <p class="px-2.5 mb-5 font-light text-sm text-gray-500 w-4/5" style="white-space:pre-line"> ${theme.data.summary} </p> <div class="absolute bottom-3 right-3 flex items-center"> <img class="w-24 h-auto"${addAttribute("/themes/" + theme.data.authImage + ".png", "src")}${addAttribute(theme.data.author + " cover", "alt")}> </div> </article> ` })}`;
}, "/Users/alessandro/dev/projet-GB/arts/src/components/ui/ThemeCard.astro", void 0);

export { $$SearchForm as $, $$ThemeCard as a };
