/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, e as addAttribute, j as renderScript } from '../chunks/astro/server_DzXfh8mT.mjs';
import 'kleur/colors';
import { b as $$SectionTitle, c as $$Section, d as companyLogo6, e as companyLogo2, f as companyLogo1, g as companyLogo3, h as companyLogo4, i as companyLogo5, $ as $$Sponsors, a as $$Services } from '../chunks/Services_CcM4Gv2U.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CztImdLr.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dy0MWAKa.mjs';
export { renderers } from '../renderers.mjs';

const e1 = new Proxy({"src":"/_astro/element1.IR0bTqGT.png","width":1697,"height":1326,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alessandro/dev/projet-GB/arts/src/assets/elements/element1.png";
							}
							
							return target[name];
						}
					});

const e2 = new Proxy({"src":"/_astro/element2.BADjzBXD.png","width":480,"height":364,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alessandro/dev/projet-GB/arts/src/assets/elements/element2.png";
							}
							
							return target[name];
						}
					});

const e3 = new Proxy({"src":"/_astro/element3.C9eWbYBM.png","width":480,"height":559,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alessandro/dev/projet-GB/arts/src/assets/elements/element3.png";
							}
							
							return target[name];
						}
					});

const StarShape = new Proxy({"src":"/_astro/StarShape.ClntorPI.svg","width":55,"height":58,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alessandro/dev/projet-GB/arts/src/assets/shapes/StarShape.svg";
							}
							
							return target[name];
						}
					});

const StarShape2 = new Proxy({"src":"/_astro/StarShape2.DooLA-Xt.svg","width":200,"height":200,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alessandro/dev/projet-GB/arts/src/assets/shapes/StarShape2.svg";
							}
							
							return target[name];
						}
					});

const StarShape3 = new Proxy({"src":"/_astro/StarShape3.qVC8K4_U.svg","width":200,"height":200,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alessandro/dev/projet-GB/arts/src/assets/shapes/StarShape3.svg";
							}
							
							return target[name];
						}
					});

const $$Cases = createComponent(($$result, $$props, $$slots) => {
  const successStories = [
    {
      title: "Veermer, la lumi\xE8re du silence",
      summary: "Pourquoi une simple femme affubl\xE9e d'une perle ou une laiti\xE8re peuvent-elles nous \xE9mouvoir si fortement trois si\xE8cles apr\xE8s leur r\xE9alisation ? Comment un tel g\xE9nie a-t-il pu \xEAtre oubli\xE9 pendant pr\xE8s de deux si\xE8cles ? Parcourez l\u2019\xE2ge d\u2019or hollandais, et d\xE9couvrez les secrets d\u2019un Vermeer dans l\u2019intimit\xE9 de ses peintures, qui n\u2019ont pas fini de nous \xE9merveiller.",
      image: e3,
      shape: StarShape
    },
    {
      title: "Les myst\xE9rieuses cit\xE9es d\u2019or\xA0: Les tr\xE9sors du P\xE9rou",
      summary: "Immenses glyphes dont les figures ne sont visibles que du ciel, divinit\xE9s \xE9tranges et color\xE9s sur des pots de terres, cit\xE9s d\xE9sertes, tombes comblent d\u2019or, tous ces vestiges sont autant de signes de la grandeur des civilisations P\xE9ruviennes. Venez d\xE9crypter ces indices magnifiques et myst\xE9rieux, plongez dans la cr\xE9ation des anc\xEAtres des Incas.",
      image: e2,
      shape: StarShape2
    },
    {
      title: "Eros et Psyche\u0301\xA0: la plus belle des histoires d\u2019amour",
      summary: "Eros, enfant d\u2019Aphrodite, embrase le c\u0153ur de ceux qu\u2019il touche avec ses fl\xE8ches. Les mythes grecs en font parfois un dieu fondamental de la cr\xE9ation, et d\u2019autres fois l\u2019initiateur du d\xE9sordre passionnel. Ce d\xE9mon ambigu du d\xE9sir n\u2019eut qu\u2019un amour et pas des moindres puisque c\u2019est avec Psych\xE9, la plus belle des humaines, dont le nom signifie en grec l\u2019\xE2me.",
      image: e1,
      shape: StarShape3
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "cases" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[80px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Les th\xE8mes \xE0 succ\xE8s", "description": "Nos th\xE8mes les plus populaires" })} <div class="flex flex-col justify-between rounded-[45px] p-1"> ${successStories.map((story, index) => renderTemplate`<div${addAttribute(`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center mb-8 justify-between section-hidden`, "class")}> <div class=""> <h3 class="text-3xl font-bold mb-2">${story.title}</h3> <p class="text-md">${story.summary}</p> </div> <div class="relative pt-6 lg:pt-0"> <div class="absolute z-[-1] bottom-0 animate-spin-slow"> ${renderComponent($$result2, "Image", $$Image, { "src": story.shape, "alt": "Star Shape", "class": "max-w-[10rem] w-[10rem] lg:max-w-[15rem] lg:w-[15rem]" })} </div> <div class="z-10"> ${renderComponent($$result2, "Image", $$Image, { "src": story.image, "alt": story.title, "class": "max-w-[10rem] w-[10rem] lg:max-w-[15rem] lg:w-[15rem] " })} </div> </div> </div>`)} </div> </div> ` })}`;
}, "/Users/alessandro/dev/projet-GB/arts/src/components/sections/Cases.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center" id="hero"> <div class="row items-center pb-10 md:pb-30 md:pt-10"> <div class="relative space-y-3 text-center"> <!--  <div class="absolute animate-spin-slow z-[-1]">
          <Image src={StarShape} alt="Star Shape" loading="eager" />
        </div>
        <div class="absolute animate-spin-slow z-[-1] right-0">
          <Image src={StarShape2} alt="Star Shape" loading="eager" />
        </div> --> <h1 class="text-5xl lg:text-6xl font-medium leading-none text-center">
Et si l’art devenait la clé de la cohésion et de l’engagement de vos
          équipes ?
</h1> <p class="text-md lg:pt-16 mb-8 lg:text-lg font-normal leading-7 sm:mb-12 text-center md:pr-12">
Nous transformons vos équipes grâce à des expériences artistiques
          immersives et interactives.<br> Ensemble, nous identifions leurs spécificités,
          sélectionnons un thème en résonance avec leur univers, puis donnons vie
          à une performance théâtralisée sur-mesure.<br>
Plus qu’un simple spectacle, c’est un moment de réflexion, de partage et
          de transformation.
</p> <h6 class="text-3xl lg:pt-10 lg:text-4xl font-medium leading-none md:text-4xl text-center">
Avec Gaëtan Bros, le musée vient à vous.
</h6> </div> </div> </div> ` })} <!-- <Section id="home">
  <div
    class="relative flex flex-col-reverse items-center md:flex-row"
    id="hero"
  >
    <div class="row items-center pb-10 md:w-7/12 md:pb-30 md:pt-10">
      <div class="text-left space-y-3">
        <h1
          class="text-2xl font-medium leading-none md:text-4xl text-center md:text-left"
        >
          Et si l’art devenait la clé de la cohésion <br />et de l’engagement de
          vos équipes ?
        </h1>
        <p
          class="mt-6 mb-8 text-lg font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12"
        >
          Chez <strong>Gaëtan Bros</strong>, nous transformons vos équipes grâce
          à des expériences artistiques immersives et interactives.<br /> Ensemble,
          nous identifions leurs spécificités, sélectionnons un thème en résonance
          avec leur univers, puis donnons vie à une performance théâtralisée sur-mesure.<br
          />
          Plus qu’un simple spectacle, c’est un moment de réflexion, de partage et
          de transformation.
        </p>
        <h6
          class="text-xl font-medium leading-none md:text-xl text-center md:text-left"
        >
          Avec Gaëtan Bros, le musée vient à vous.
        </h6>
      </div>
    </div>
    <div class="flex items-center pb-10 md:w-5/12 md:pb-30 md:pt-10">
      <Image src={HeroIlust} alt="Hero Ilustration" loading="eager" />
    </div>
  </div>
</Section> -->`;
}, "/Users/alessandro/dev/projet-GB/arts/src/components/sections/Hero.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const description = "Nous vous pr\xE9sentons notre mode op\xE9ratoire en 4 \xE9tapes simples : de l'identification de la cible \xE0 la pr\xE9sentation th\xE9\xE2trale.";
  const steps = [
    {
      title: "Identification de la cible",
      description: "Nous commen\xE7ons par d\xE9terminer pr\xE9cis\xE9ment le public concern\xE9 : quel service, quelle \xE9quipe, ou quel groupe sera au centre de la performance\u202F? Cette premi\xE8re \xE9tape permet de cadrer efficacement l\u2019intervention et de comprendre les enjeux sp\xE9cifiques \xE0 ce public.",
      circleColor: "grad-right-top"
    },
    {
      title: "Identification du besoin",
      description: "Une fois la cible d\xE9finie, nous identifions les probl\xE9matiques \xE0 adresser : coh\xE9sion, motivation, communication, etc. Cette phase est cruciale pour adapter la performance aux d\xE9fis r\xE9els que rencontrent vos collaborateurs.",
      circleColor: "grad-left-top"
    },
    {
      title: "S\xE9lection d'un th\xE8me",
      description: "Nous s\xE9lectionnons ensuite un th\xE8me parmi une liste vari\xE9e (ex : art contemporain, th\xE9\xE2tre, patrimoine culturel, etc.), en veillant \xE0 ce qu\u2019il r\xE9sonne avec les besoins identifi\xE9s. Ce choix d\xE9termine la tonalit\xE9 artistique de la prestation et garantit une exp\xE9rience immersive pertinente.",
      circleColor: "grad-left-bottom"
    },
    {
      title: "Planification des s\xE9ances",
      description: "Enfin, nous fixons les dates, la dur\xE9e et le format de(s) s\xE9ance(s). Selon vos contraintes et vos objectifs, nous d\xE9finissons ensemble le rythme et l\u2019ampleur de l\u2019intervention, pour optimiser l\u2019impact et l\u2019engagement de vos \xE9quipes.",
      circleColor: "grad-right-bottom"
    }
  ];
  return renderTemplate`${renderScript($$result, "/Users/alessandro/dev/projet-GB/arts/src/components/sections/Process.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "Section", $$Section, { "id": "process" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[80px] w-full"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Notre mode op\xE9ratoire", "description": description })} <div class="relative flex flex-col w-full items-center mt-[30px] lg:mt-[60px] mb-10"> <div class="flex flex-col w-full lg:w-2/3 lg:gap-0 gap-3"> ${steps.map((step, index) => renderTemplate`<div class="animate-fadein step-anim"> <div${addAttribute(`step  flex flex-col items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} justify-between w-full rounded-full  `, "class")}${addAttribute("step" + index, "id")}> <div${addAttribute(`p-4 animate-glow text-center content-center min-w-[10rem] min-h-[10rem] w-[10rem] h-[10rem] lg:min-w-[16rem] lg:min-h-[16rem] lg:w-[16rem] lg:h-[16rem] rounded-full ${step.circleColor}`, "class")}> <h3 class="text-xl lg:text-3xl font-bold mb-2 "> ${step.title} </h3> </div>${" "} <p class="text-md text-left px-5 pt-5 lg:pt-0"> ${step.description} </p> <div class="line hidden lg:block delay-1000 "${addAttribute(`"line-" + ${index}`, "id")}></div> </div> </div>`)} </div> </div> </div> ` })}`;
}, "/Users/alessandro/dev/projet-GB/arts/src/components/sections/Process.astro", void 0);

const HeroIlust = new Proxy({"src":"/_astro/perf2.BaULdocp.jpeg","width":1183,"height":1183,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alessandro/dev/projet-GB/arts/src/assets/business/perf2.jpeg";
							}
							
							return target[name];
						}
					});

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const description = "Rencontrez notre \xE9quipe qui vous accompagnera dans la transformation de vos \xE9quipes.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "team" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[80px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "\xC9quipe", "description": description })} <div class="mt-8 lg:mt-0 lg:pt-0 relative flex flex-col-reverse items-center md:flex-row section-hidden" id="hero"> <div class="row items-center pb-10 md:w-8/12 md:pb-30 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-2xl font-medium leading-none md:text-4xl text-center md:text-left">
Rencontrez Gaëtan Bros, Fondateur et CEO
</h1> <p class="mt-6 mb-8 text-sm lg:text-md font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12">
Gaëtan est convaincu que l’art est bien plus qu’un simple
            divertissement : c’est un levier puissant pour transformer nos modes
            de travail et renforcer la cohésion des équipes. <br>Avec un
            parcours mêlant performance artistique et conseil en entreprise, il
            a développé une approche unique qui allie créativité, interactivité
            et impact durable. Son ambition ? Aider les entreprises et leurs
            collaborateurs à se reconnecter à leur potentiel créatif, à partager
            de nouveaux savoirs et à vivre une expérience collective inédite. <br>
Pionnier dans l’univers du coaching culturel et artistique, Gaëtan s’engage
            à accompagner chaque client avec empathie et expertise. Son but est simple
            : faire de chaque intervention une rencontre marquante entre l’art et
            le monde du travail, pour inspirer, fédérer et innover.
</p> </div> </div> <div class="flex items-center pb-10 md:w-4/12 md:pb-30 md:pt-10 max-w-sm"> ${renderComponent($$result2, "Image", $$Image, { "src": HeroIlust, "alt": "Hero Ilustration", "loading": "eager" })} </div> </div> </div> ` })} <!-- 

<Section id="about">
  <div class="mt-[140px]">
    <SectionTitle sectionTitle="Team" description={description} />
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-10"
    >
      {
        team.map((member, index) => (
          <TeamCard
            key={index}
            pic={member.pic}
            name={member.name}
            role={member.role}
            description={member.description}
            link={member.link}
          />
        ))
      }
    </div>
    <div class="flex justify-end mt-10">
      <button class="btn-primary">See all team</button>
    </div>
  </div>
</Section>

 -->`;
}, "/Users/alessandro/dev/projet-GB/arts/src/components/sections/Team.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      company: "Suez",
      description: "L\u2019intervention de Ga\xEBtan Bros a boulevers\xE9 notre mani\xE8re de travailler. Gr\xE2ce \xE0 ses performances artistiques, nos \xE9quipes ont trouv\xE9 de nouvelles fa\xE7ons de collaborer et d\u2019innover.",
      logo: companyLogo6,
      employee: "Marc Lefevre",
      position: "Directeur des op\xE9rations"
    },
    {
      company: "Total",
      description: "Nous cherchions une activit\xE9 qui ait de l\u2019impact, et Ga\xEBtan Bros a d\xE9pass\xE9 nos attentes : au-del\xE0 du simple team building, c\u2019est une exp\xE9rience humaine et artistique m\xE9morable.",
      logo: companyLogo2,
      employee: "Pierre Durand",
      position: "Responsable des ressources humaines"
    },
    {
      company: "Novartis",
      description: "J\u2019ai \xE9t\xE9 impressionn\xE9 par la qualit\xE9 et la pertinence du coaching individuel propos\xE9. Les parall\xE8les avec l\u2019art m\u2019ont permis d\u2019aborder mes d\xE9fis manag\xE9riaux sous un angle compl\xE8tement neuf.",
      logo: companyLogo1,
      employee: "Julien Charrier",
      position: "Directeur financier"
    },
    {
      company: "Groupama",
      description: "Qui aurait cru qu\u2019une performance th\xE9\xE2tralis\xE9e pourrait autant motiver mes d\xE9veloppeurs\u202F? Aujourd\u2019hui, ils parlent encore des enseignements tir\xE9s de cette exp\xE9rience.",
      logo: companyLogo3,
      employee: "Sophie Bernard",
      position: "Directrice de la communication"
    },
    {
      company: "IBM",
      description: "Gr\xE2ce \xE0 Ga\xEBtan Bros, nous avons d\xE9couvert comment l\u2019art peut renforcer l\u2019esprit d\u2019\xE9quipe et la fiert\xE9 d\u2019appartenance \xE0 l\u2019entreprise. Un moment chaleureux et instructif.",
      logo: companyLogo4,
      employee: "\xC9milie Roux",
      position: "Responsable de la strat\xE9gie"
    },
    {
      company: "AXA",
      description: "La m\xE9thodologie en quatre \xE9tapes est limpide et efficace. Nous savions exactement \xE0 quoi nous attendre et le r\xE9sultat final a \xE9t\xE9 un v\xE9ritable catalyseur de coh\xE9sion.",
      logo: companyLogo5,
      employee: "Claire Martin",
      position: "Chef de projet innovation"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[80px]"> <!--  <SectionTitle
      sectionTitle="Témoignages"
      description="Découvrez ce que nos clients satisfaits disent de nous : lisez nos témoignages pour en savoir plus sur nos services"
    /> --> <div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center"> <div class="w-full bg-white px-5 text-gray-800"> <div class="w-full max-w-6xl mx-auto"> <div class="text-center max-w-xl mx-auto section-hidden"> <h1 class="text-4xl lg:text-6xl font-bold text-gray-600 mb-5">
Ce que nos clients <br>disent de nous.
</h1> <div class="text-center mb-10"> <span class="inline-block w-1 h-1 rounded-full bg-green ml-1"></span> <span class="inline-block w-3 h-1 rounded-full bg-green ml-1"></span> <span class="inline-block w-40 h-1 rounded-full bg-green"></span> <span class="inline-block w-3 h-1 rounded-full bg-green ml-1"></span> <span class="inline-block w-1 h-1 rounded-full bg-green ml-1"></span> </div> </div> <div class="-mx-3 md:flex items-start section-hidden"> ${Array.from(
    Array(testimonials.length / 2).keys(),
    (_, i) => i * 2
  ).map((i) => renderTemplate`<div class="px-3 md:w-1/3"> ${Array.from([i, i + 1]).map((j) => renderTemplate`<div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"> <div class="relative w-full flex mb-4 items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": testimonials[j].logo, "alt": "" })} </div> <div class="w-full"> <p class="text-sm leading-tight"> <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
"
</span> ${testimonials[j].description} <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
"
</span> </p> </div>${" "} <div class="flex-grow p-3 text-end"> <h6 class="text-dark">${testimonials[j].employee}</h6>${" "} <h6 class="font-bold text-sm text-gray-600"> ${testimonials[j].position} </h6> <h6 class="font-extrabold"> ${testimonials[j].company} </h6> </div> </div>`)} </div>`)} </div> </div> </div> </div> </div> ` })}`;
}, "/Users/alessandro/dev/projet-GB/arts/src/components/sections/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/alessandro/dev/projet-GB/arts/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Ga\xEBtan Bros", "description": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ${renderComponent($$result2, "Sponsors", $$Sponsors, { "isReversed": true })} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Cases", $$Cases, {})} ${renderComponent($$result2, "Process", $$Process, {})}  ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})}  ` })}`;
}, "/Users/alessandro/dev/projet-GB/arts/src/pages/index.astro", void 0);

const $$file = "/Users/alessandro/dev/projet-GB/arts/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
