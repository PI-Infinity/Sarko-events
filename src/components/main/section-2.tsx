import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useAppContext } from "@/context/app";

export const Section2 = () => {
  const { scrollY } = useScroll();

  const { isMobile } = useAppContext();

  // ძირითადი მოძრაობის მაპირება — ზუსტად შენს ფორმულებზე დაყრდნობით
  const yMain1 = useTransform(scrollY, [25, 2425], [0, -1525], {
    ease: easeInOut,
  });
  const yYellow = useTransform(scrollY, [25, 2425], [50, -812], {
    ease: easeInOut,
  });
  const yPink = useTransform(scrollY, [25, 2425], [200, -550], {
    ease: easeInOut,
  });
  const yRed1 = useTransform(scrollY, [25, 2425], [225, 325], {
    ease: easeInOut,
  });
  const yRed2 = useTransform(
    scrollY,
    [25, 2425],
    [isMobile ? 1000 : 1150, -250]
  );
  const yRed3 = useTransform(
    scrollY,
    [25, 2425],
    [isMobile ? 350 : 650, -450],
    {
      ease: easeInOut,
    }
  );

  return (
    <div
      className=" w-full flex items-center justify-center"
      style={{ position: "absolute", top: isMobile ? "800px" : "850px" }}
    >
      {/* მთავარი წრე + blur */}
      <motion.div
        className="w-[350px] h-[350px] desktop:w-[500px] desktop:h-[500px]"
        style={{
          position: "absolute",
          right: isMobile ? "10%" : "30%",
          zIndex: 0,
          top: yMain1,
          transform: "rotate(360deg)",
        }}
      >
        <img
          src="/images/ys.png"
          alt="Sarko"
          style={{ width: "100%", height: "100%", position: "absolute" }}
        />
        {/* <div
          className="w-full h-full absolute z-10"
          style={{
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        ></div> */}
      </motion.div>

      {/* ყვითელი მარჯვენა */}
      <motion.div
        className="w-[450px] h-[450px] desktop:h-[850px] desktop:w-[850px] rounded-full overflow-hidden"
        style={{
          position: "absolute",
          right: "-220px",
          zIndex: 20,
          top: yYellow,
          transform: "rotate(-30deg)",
        }}
      >
        <img
          src="/images/smk1.png"
          alt="Sarko"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* ვარდისფერი მარცხენა */}
      <motion.div
        className="w-[400px] h-[400px] desktop:w-[770px] desktop:h-[750px]  rounded-full"
        style={{
          position: "absolute",
          left: "-25%",
          zIndex: 20,
          top: yPink,
          transform: "rotate(30deg)",
        }}
      >
        <img
          src="/images/s.png"
          alt="Sarko"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* წითელი blur მარცხენა */}
      <motion.div
        className="w-[450px] h-[450px] desktop:w-[700px] desktop:h-[700px] rounded-full overflow-hidden"
        style={{
          position: "absolute",
          left: isMobile ? "-15%" : "-5%",
          zIndex: 0,
          top: yRed1,
        }}
      >
        <img
          src="/images/sg.png"
          alt="Sarko"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            transform: "rotate(50deg)",
          }}
        />
        <div
          className="w-full h-full rounded-full absolute z-10"
          style={{
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        ></div>
      </motion.div>

      {/* ქვედა მარცხენა წითელი */}
      <motion.div
        className="w-[400px] h-[400px] desktop:w-[600px] desktop:h-[600px] "
        style={{
          position: "absolute",
          left: "20%",
          zIndex: 20,
          top: yRed2,
        }}
      >
        <img
          src="/images/sb.png"
          alt="Sarko"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* მარჯვენა წრე */}
      <motion.div
        className="w-[450px] h-[450px] desktop:w-[750px] desktop:h-[750px] rounded-full"
        style={{
          position: "absolute",
          right: isMobile ? "-10%" : "-5%",
          zIndex: 20,
          top: yRed3,
          transform: "rotate(40deg)",
        }}
      >
        <img
          src="/images/lbs.png"
          alt="Sarko"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
    </div>
  );
};
