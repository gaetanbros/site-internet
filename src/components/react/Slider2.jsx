import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

/* import landscape from "../../assets/paintings/landscapes/landscape1.jpg";
 */

export function Slider({ themes }) {
  console.info(themes);
  //get only the first 5 themes

  const [activeItem, setActiveItem] = useState(5);
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
      <div className="w-screen max-w-[100%] overflow-scroll   p-5 rounded-xl">
        <ul
          ref={wrapperRef}
          className="group flex flex-col gap-3 md:h-[640px] md:flex-row md:gap-[1.5%] "
        >
          {themes.map((theme, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "relative cursor-pointer md:w-[8%]  md:[&[aria-current='true']]:w-[100%] md:[&[aria-current='true']]:max-w-[1280px]",
                "md:[transition:width_var(--transition,200ms_ease-in)]",
                "md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white",
                " md:hover:w-[15%]"
              )}
              key={theme.data.title}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#c9c6c7]">
                <img
                  className=" h-auto w-24 max-w-none object-cover   md:h-[640px] md:w-auto"
                  src={"/projet-gb/themes-full/" + theme.data.authImage}
                  alt={theme.data.title}
                  width="590px"
                  height="640px"
                />
                <div
                  className={classNames(
                    "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
                    activeItem === index ? "md:opacity-25" : "md:opacity-0"
                  )}
                />
                <div
                  className={classNames(
                    " bottom-8 w-full p-4 transition-[transform,opacity] md:absolute md:p-0 bg-dark bg-opacity-50 backdrop-blur-xl",
                    activeItem === index
                      ? "md:translate-x-0 md:opacity-100"
                      : "md:translate-x-4 md:opacity-0"
                  )}
                >
                  <div class="p-4">
                    <p className="text-sm uppercase text-purple-flash md:text-lg">
                      {theme.data.title}
                    </p>
                    <p className="text-sm font-bold md:text-sm text-white">
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
