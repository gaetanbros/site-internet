import e2 from "../../assets/elements/element2.png";
import e3 from "../../assets/elements/element3.png";
import e1 from "/src/assets/elements/element1.png";
/* import landscape from "../../assets/paintings/landscapes/landscape1.jpg";
 */
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const successStories = [
  {
    title: "Veermer, la lumière du silence",
    summary:
      "Pourquoi une simple femme affublée d'une perle ou une laitière peuvent-elles nous émouvoir si fortement trois siècles après leur réalisation ? Comment un tel génie a-t-il pu être oublié pendant près de deux siècles ? Parcourez l’âge d’or hollandais, et découvrez les secrets d’un Vermeer dans l’intimité de ses peintures, qui n’ont pas fini de nous émerveiller.",
    image: e3,
  },
  {
    title: "Les mystérieuses citées d’or : Les trésors du Pérou",
    summary:
      "Immenses glyphes dont les figures ne sont visibles que du ciel, divinités étranges et colorés sur des pots de terres, cités désertes, tombes comblent d’or, tous ces vestiges sont autant de signes de la grandeur des civilisations Péruviennes. Venez décrypter ces indices magnifiques et mystérieux, plongez dans la création des ancêtres des Incas.",
    image: e2,
  },
  {
    title: "Eros et Psyché : la plus belle des histoires d’amour",
    summary:
      "Eros, enfant d’Aphrodite, embrase le cœur de ceux qu’il touche avec ses flèches. Les mythes grecs en font parfois un dieu fondamental de la création, et d’autres fois l’initiateur du désordre passionnel. Ce démon ambigu du désir n’eut qu’un amour et pas des moindres puisque c’est avec Psyché, la plus belle des humaines, dont le nom signifie en grec l’âme.",
    image: e1,
  },
];
const Image = ({ activeIndex }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={activeIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <img
        src={successStories[activeIndex]?.image.src}
        alt="Star Shape"
        className="motion-scale-y-loop-105 motion-scale-x-loop-105 motion-duration-2000 max-w-[10rem] w-[10rem] lg:max-w-[20rem] lg:w-[20rem]"
      />
    </motion.div>
  </AnimatePresence>
);
export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row justify-between rounded-[45px] lg:py-10 bg-white">
      <div className="lg:hidden flex flex-row  justify-center items-center rounded-[45px] ">
        <Image activeIndex={activeIndex} />
      </div>
      <div className="pt-4 lg:pt-0 flex-row lg:flex-col lg:w-1/2 lg:pr-10 relative">
        {successStories.map((story, index) => (
          <div
            key={index + "tes"}
            className={`mb-4 border-b pb-1 ${activeIndex === index ? "border-black" : "border-gray"}`}
          >
            <h1
              className={`uppercase font-bold cursor-pointer pb-2  text-xl md:text-2xl ${activeIndex === index ? "text-black" : "text-slate-400"}`}
              onClick={() => setActiveIndex(index)}
            >
              {story.title}
            </h1>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                height: activeIndex === index ? "auto" : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-md pb-2 text-slate-700">{story.summary}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="hidden flex-row lg:flex-col lg:w-1/2 lg:flex justify-center items-center bg-purple  shadow-2xl rounded-l-[45px]">
        <Image activeIndex={activeIndex} />
      </div>
    </div>
  );
}
