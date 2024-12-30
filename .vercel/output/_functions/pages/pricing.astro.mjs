/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DzXfh8mT.mjs';
import 'kleur/colors';
import { $ as $$Card } from '../chunks/Card_BCP8l60y.mjs';
import { p as priceData } from '../chunks/priceDats_DipILeVW.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dy0MWAKa.mjs';
export { renderers } from '../renderers.mjs';

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Our Pricing" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Designed for business teams like yours</h2> <p class="mb-5 font-light text-gray-500 sm:text-xl">Here at Positivus we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> </div> <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"> <!-- Pricing Card --> ${priceData.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "isUnderline": true }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col p-6 mx-auto max-w-lg text-center"> <h3 class="mb-4 text-2xl font-semibold">${item.title}</h3> <p class="font-light text-gray-500 sm:text-md pb-5">${item.description}</p> <!-- List --> <ul role="list" class="mb-8 space-y-4 text-left"> ${item.link && renderTemplate`<li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>${item.link}</span> </li>`} <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>${item.action}</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span><span class="font-semibold">${item.devCount}</span></span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span><span class="font-semibold">${item.support}</span></span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span><span class="font-semibold">${item.update}</span></span> </li> </ul> </div> ` })}`)} </div> </div> </main> ` })}`;
}, "/Users/alessandro/dev/projet-GB/arts/src/pages/pricing.astro", void 0);

const $$file = "/Users/alessandro/dev/projet-GB/arts/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Pricing,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
