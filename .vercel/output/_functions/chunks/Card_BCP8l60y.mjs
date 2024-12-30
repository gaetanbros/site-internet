import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot } from './astro/server_DzXfh8mT.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://gaetan-bros.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { isUnderline } = Astro2.props;
  return renderTemplate`${isUnderline ? renderTemplate`${maybeRenderHead()}<div class=" border border-green shadow-md   overflow-hidden rounded-[10px]   transform transition duration-500 hover:scale-105">${renderSlot($$result, $$slots["default"])}</div>` : renderTemplate`<div class="rounded-[45px]">${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "/Users/alessandro/dev/projet-GB/arts/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
