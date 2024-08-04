"use client";

import Button from "@/components/button";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdArrowDropUp, MdCalendarMonth, MdClose } from "react-icons/md";

const Gallery = () => {
  const pathname = usePathname();

  const { theme, loading, activeLanguage } = useAppContext();

  const list =
    pathname.split("/")[2] === "corporations"
      ? corporations
      : pathname.split("/")[2] === "weddings"
      ? weddings
      : pathname.split("/")[2] === "presentations"
      ? presentations
      : pathname.split("/")[2] === "teambuildings"
      ? teambuildings
      : [];

  const handleBack = () => {
    window.history.back();
  };

  const [showButton, setShowButton] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))",
        }}
        className="fixed desktop:hidden bottom-0 left-0 py-6 z-50 bg-[] w-full mt-4 flex items-center justify-center px-4 desktop:mt-4"
      >
        <Link
          href="/contact"
          className=" h-12 w-full desktop:w-1/3 border-[1px] border-[rgba(255,255,255,0.2)] rounded-full"
        >
          <Button
            title={activeLanguage.startPlanning}
            background="rgba(255,255,255,1)"
            color={theme.background}
            onClick={() => undefined}
            icon={<MdCalendarMonth size={24} />}
          />
        </Link>
      </div>
      {showButton && (
        <div className="w-full fixed bottom-[84px] z-[100] desktop:bottom-8 right-0 right-6 flex items-center justify-end">
          <div
            style={{
              display: loading ? "none" : "flex",
              background: theme.background,
              width: "40px",
              height: "40px",
            }}
            className="rounded-full  cursor-pointer"
          >
            <MdArrowDropUp size={40} color={theme.text} onClick={scrollToTop} />
          </div>
        </div>
      )}
      <div
        style={{
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(100px)",
          transform: pathname?.length > 0 ? "scale(1)" : "scale(0)",
          transition: "ease-in 200ms",
          opacity: pathname?.length > 0 ? "1" : "0",
          overflowY: "auto",
          display: pathname.split("/")[3] ? "visible" : "none",
        }}
        className="w-full h-full min-h-[100vh] desktop:p-4 p-2"
      >
        <MdClose
          color={theme.text}
          className="ml-auto cursor-pointer mb-2 desktop:mb-4"
          size={40}
          onClick={handleBack}
        />

        <div className="w-full grid grid-cols-1 desktop:grid-cols-5 gap-2">
          {list
            ?.filter((i: any) => i.project === pathname.split("/")[3])
            .map((item: any, index: number) => {
              return (
                <div className="w-full overflow-hidden" key={index}>
                  <img
                    src={item.link}
                    alt="corporations"
                    className="desktop:h-[400px]"
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

const weddings = [
  {
    link: "/images/weddings/IMG_1654.PNG",
    project: "1",
  },
  {
    link: "/images/weddings/IMG_1655.PNG",
    project: "1",
  },
  {
    link: "/images/weddings/IMG_1656.PNG",
    project: "1",
  },
  {
    link: "/images/weddings/IMG_1657.PNG",
    project: "1",
  },
  {
    link: "/images/weddings/IMG_1658.PNG",
    project: "1",
  },
  {
    link: "/images/weddings/IMG_1659.PNG",
    project: "1",
  },
  {
    link: "/images/weddings/IMG_1660.PNG",
    project: "1",
  },
  {
    link: "/images/weddings/IMG_1661.PNG",
    project: "1",
  },
  {
    link: "/images/weddings/IMG_1662.PNG",
    project: "1",
  },
  {
    link: "/images/weddings/IMG_1697.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1698.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1700.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1701.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1702.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1704.JPG",
    project: "3",
  },

  {
    link: "/images/weddings/IMG_1714.JPG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1703.JPG",
    project: "3",
  },

  {
    link: "/images/weddings/IMG_1715.JPG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1716.JPG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1719.JPG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1717.JPG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1718.JPG",
    project: "3",
  },

  {
    link: "/images/weddings/IMG_1722.JPG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1723.JPG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1750.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_1752.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_1751.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_1754.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_1753.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_1771.PNG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_1776.PNG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_1775.PNG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_1777.PNG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_1780.PNG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_1779.PNG",
    project: "5",
  },

  {
    link: "/images/weddings/IMG_1786.PNG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_1782.PNG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_1788.PNG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_1787.PNG",
    project: "5",
  },

  {
    link: "/images/weddings/IMG_1791.PNG",
    project: "6",
  },
  {
    link: "/images/weddings/IMG_1794.PNG",
    project: "6",
  },

  {
    link: "/images/weddings/IMG_1793.PNG",
    project: "6",
  },
  {
    link: "/images/weddings/IMG_1795.PNG",
    project: "6",
  },
  {
    link: "/images/weddings/IMG_1796.PNG",
    project: "6",
  },
  {
    link: "/images/weddings/IMG_1798.PNG",
    project: "6",
  },
  {
    link: "/images/weddings/IMG_1797.PNG",
    project: "6",
  },
  {
    link: "/images/weddings/IMG_2050.PNG",
    project: "7",
  },
  {
    link: "/images/weddings/IMG_2051.PNG",
    project: "7",
  },

  {
    link: "/images/weddings/IMG_2053.PNG",
    project: "7",
  },
  {
    link: "/images/weddings/IMG_2054.PNG",
    project: "7",
  },
  {
    link: "/images/weddings/IMG_2052.PNG",
    project: "7",
  },
  {
    link: "/images/weddings/IMG_2055.PNG",
    project: "7",
  },
  {
    link: "/images/weddings/IMG_2056.PNG",
    project: "7",
  },
  {
    link: "/images/weddings/IMG_2057.PNG",
    project: "7",
  },
  {
    link: "/images/weddings/IMG_2058.PNG",
    project: "7",
  },
  {
    link: "/images/weddings/IMG_2102.JPG",
    project: "8",
  },
  {
    link: "/images/weddings/IMG_2104.jpg",
    project: "8",
  },
  {
    link: "/images/weddings/IMG_2105.JPG",
    project: "8",
  },
  {
    link: "/images/weddings/IMG_2094.JPG",
    project: "8",
  },
  {
    link: "/images/weddings/IMG_2099.JPG",
    project: "8",
  },
  {
    link: "/images/weddings/IMG_2101.JPG",
    project: "8",
  },
  {
    link: "/images/weddings/IMG_2088.JPG",
    project: "8",
  },
  {
    link: "/images/weddings/IMG_2086.JPG",
    project: "8",
  },
  {
    link: "/images/weddings/IMG_2089.JPG",
    project: "8",
  },
  {
    link: "/images/weddings/IMG_2082.JPG",
    project: "8",
  },
  {
    link: "/images/weddings/IMG_2084.JPG",
    project: "8",
  },

  {
    link: "/images/weddings/IMG_2087.JPG",
    project: "8",
  },

  {
    link: "/images/weddings/IMG_2090.JPG",
    project: "8",
  },
];
const corporations = [
  {
    link: "/images/corporates/IMG_0649 latest.jpg",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1016.jpg",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1011.jpg",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1019.jpg",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1033.jpg",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1018.jpg",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1013.jpg",
    project: "1",
  },

  {
    link: "/images/corporates/IMG_1023.jpg",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1030.jpg",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1026.jpg",
    project: "1",
  },

  {
    link: "/images/corporates/IMG_1031.jpg",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1027.jpg",
    project: "1",
  },

  {
    link: "/images/corporates/IMG_1624.png",
    project: "2",
  },

  {
    link: "/images/corporates/IMG_1626.png",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1625.png",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1633.png",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1627.png",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1628.png",
    project: "2",
  },

  {
    link: "/images/corporates/IMG_1630.png",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1629.png",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1631.png",
    project: "2",
  },

  {
    link: "/images/corporates/IMG_1634.png",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1635.png",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1636.png",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1638.png",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1639.png",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1640.png",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1641.png",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1642.png",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1643.png",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1740.png",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1741.png",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1742.png",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1743.png",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1745.png",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1759.png",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1757.png",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1758.png",
    project: "5",
  },

  {
    link: "/images/corporates/IMG_1760.png",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1761.png",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1763.png",
    project: "5",
  },

  {
    link: "/images/corporates/IMG_1766.png",
    project: "5",
  },

  {
    link: "/images/corporates/IMG_1767.png",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1768.png",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1769.png",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_2125.jpg",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2114.jpg",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2126.jpg",
    project: "6",
  },

  {
    link: "/images/corporates/IMG_2115.jpg",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2116.jpg",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2113.jpg",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2119.jpg",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2120.jpg",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2121.jpg",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2124.jpg",
    project: "6",
  },
];
const presentations = [
  {
    link: "/images/presentations/IMG_1617.PNG",
    project: "1",
  },
  {
    link: "/images/presentations/IMG_1612.PNG",
    project: "1",
  },
  {
    link: "/images/presentations/IMG_1613.PNG",
    project: "1",
  },
  {
    link: "/images/presentations/IMG_1615.PNG",
    project: "1",
  },
  {
    link: "/images/presentations/IMG_1616.PNG",
    project: "1",
  },

  {
    link: "/images/presentations/IMG_1664.PNG",
    project: "2",
  },
  {
    link: "/images/presentations/IMG_1665.PNG",
    project: "2",
  },
  {
    link: "/images/presentations/IMG_1666.PNG",
    project: "2",
  },
  {
    link: "/images/presentations/IMG_1667.PNG",
    project: "2",
  },
  {
    link: "/images/presentations/IMG_1668.PNG",
    project: "2",
  },
  {
    link: "/images/presentations/IMG_1669.PNG",
    project: "2",
  },
  {
    link: "/images/presentations/IMG_1670.PNG",
    project: "2",
  },
  {
    link: "/images/presentations/IMG_1671.PNG",
    project: "2",
  },
  {
    link: "/images/presentations/IMG_1672.PNG",
    project: "2",
  },
];
const teambuildings = [
  {
    link: "/images/teambuildings/IMG_2345.jpg",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2379.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2355.jpg",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2366.jpg",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2385.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2392.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2336.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2426.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2258.jpg",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2338.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2318.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2299.jpg",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2260.jpg",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2266.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2278.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2267.jpg",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2273.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2268.jpg",
    project: "1",
  },
];
