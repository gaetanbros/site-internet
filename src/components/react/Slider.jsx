import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

/* import landscape from "../../assets/paintings/landscapes/landscape1.jpg";
 */

export function Slider({ themes }) {
  //get only the first 5 themes

  const [activeItem, setActiveItem] = useState(0);
  const wrapperRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div className="flex h-full w-full items-center justify-center pb-20">
      <div className="snap-mandatory snap-x w-screen max-w-[100%] overflow-scroll   p-5 rounded-xl">
        <ul
          ref={wrapperRef}
          className="relative group flex  gap-3 h-[22rem] md:h-[640px] flex-row md:gap-[1.5%] "
        >
          {themes.map((theme, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "snap-center",
                "relative cursor-pointer w-[35%] md:w-[8%]  [&[aria-current='true']]:w-[100%] [&[aria-current='true']]:max-w-[1280px]",
                "[transition:width_var(--transition,200ms_ease-in)]",
                "before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white",
                " md:hover:w-[15%]"
              )}
              key={theme.data.title}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#c9c6c7]">
                <img
                  aria-current={activeItem === index}
                  style={{ transition: "transform 0.15s ease-in" }}
                  className="translate-x-[-35%] [&[aria-current='true']]:translate-x-[0%] max-w-none object-scale-down lg:object-cover h-[22rem]  md:h-[640px] w-auto"
                  src={"/projet-gb/themes-full/" + theme.data.authImage}
                  alt={theme.data.title}
                  loading="eager"
                  height="300px"
                  width="300px"
                />
                <div
                  className={classNames(
                    "inset-0 opacity-25 duration-300 before:absolute lg:before:bottom-0 lg:before:left-[-546px] lg:before:right-0 lg:before:top-[-148px] before:z-10 before:bg-texture  lg:after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture absolute transition-opacity",
                    activeItem === index ? "opacity-25" : "opacity-0"
                  )}
                />
                <div
                  className={classNames(
                    "max-h-[10rem] bottom-8 w-full p-4 transition-[opacity] absolute  bg-dark bg-opacity-50 backdrop-blur-xl",
                    activeItem === index
                      ? "opacity-100 motion-preset-fade-lg motion-duration-2000"
                      : " opacity-0"
                  )}
                >
                  <div className="p-1 lg:p-4">
                    <p className="text-xs uppercase text-purple-flash md:text-lg">
                      {theme.data.title}
                    </p>
                    <p className="text-xs font-bold md:text-sm text-white ">
                      {theme.data.summary}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
