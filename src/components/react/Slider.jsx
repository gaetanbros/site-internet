import e2 from "../../assets/elements/element2.png";
import e3 from "../../assets/elements/element3.png";
import e1 from "/src/assets/elements/element1.png";
/* import landscape from "../../assets/paintings/landscapes/landscape1.jpg";
 */
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
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
  return (
    <div className="flex flex-row justify-between rounded-[45px] py-10 bg-white">
      <div className="w-1/2 pr-10 relative">
        <div class="bg-green w-full h-full absolute z-[-1]" />
        {successStories.map((story, index) => (
          <div
            key={index + "tes"}
            className={`mb-4 border-b pb-1 ${activeIndex === index ? "border-black" : "border-gray"}`}
          >
            <h1
              className={`uppercase cursor-pointer pb-2 font-light text-xl md:text-2xl ${activeIndex === index ? "text-black" : "text-slate-400"}`}
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

            {/*  */}

            {/*  <div class="absolute z-[-1] bottom-0 animate-spin-slow">
                <Image
                  src={story.shape}
                  alt="Star Shape"
                  class="max-w-[10rem] w-[10rem] lg:max-w-[15rem] lg:w-[15rem]"
                />
              </div> */}
          </div>
        ))}
      </div>
      <div className="w-1/2 flex justify-center items-center bg-purple  shadow-2xl rounded-l-[45px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {" "}
            <img
              src={successStories[activeIndex].image.src}
              alt="Star Shape"
              className="motion-scale-y-loop-105 motion-scale-x-loop-105 motion-duration-2000 max-w-[15rem] w-[15rem] lg:max-w-[20rem] lg:w-[20rem]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
