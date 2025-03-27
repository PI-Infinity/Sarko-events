"use client";

import Button from "@/components/button";
import { useAppContext, offers } from "@/context/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdArrowDropUp, MdCalendarMonth, MdClose } from "react-icons/md";

const Gallery = () => {
  const pathname = usePathname();

  const { theme, loading, activeLanguage, language } = useAppContext();

  const list =
    pathname.split("/")[3] === "corporations"
      ? corporations
      : pathname.split("/")[3] === "weddings"
      ? weddings
      : pathname.split("/")[3] === "presentations"
      ? presentations
      : pathname.split("/")[3] === "teambuildings"
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
    <div style={{ display: loading ? "none" : "flex" }}>
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))",
        }}
        className="fixed desktop:hidden bottom-0 left-0 py-6 z-50 bg-[] w-full mt-4 flex items-center justify-center px-4 desktop:mt-4"
      >
        <Link
          href={`/${language}/contact`}
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
          display: pathname.split("/")[4] ? "visible" : "none",
        }}
        className="w-full h-full min-h-[100vh] desktop:p-4 desktop:mt-24 mt-[80px] p-2"
      >
        <MdClose
          color={theme.text}
          className="ml-auto cursor-pointer mb-2 desktop:mb-4"
          size={40}
          onClick={handleBack}
        />

        <div className="w-full grid grid-cols-1 desktop:grid-cols-5 gap-2">
          {list
            ?.filter((i: any) => i.project === pathname.split("/")[4])
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
    link: "/images/corporates/IMG_0649.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1016.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1011.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1019.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1033.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1018.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1013.JPG",
    project: "1",
  },

  {
    link: "/images/corporates/IMG_1023.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1030.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1026.JPG",
    project: "1",
  },

  {
    link: "/images/corporates/IMG_1031.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_1027.JPG",
    project: "1",
  },

  {
    link: "/images/corporates/IMG_1624.PNG",
    project: "2",
  },

  {
    link: "/images/corporates/IMG_1626.PNG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1625.PNG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1633.PNG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1627.PNG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1628.PNG",
    project: "2",
  },

  {
    link: "/images/corporates/IMG_1630.PNG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1629.PNG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1631.PNG",
    project: "2",
  },

  {
    link: "/images/corporates/IMG_1634.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1635.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1636.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1638.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1639.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1640.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1641.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1642.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1643.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1740.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1741.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1742.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1743.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1745.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1759.PNG",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1757.PNG",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1758.PNG",
    project: "5",
  },

  {
    link: "/images/corporates/IMG_1760.PNG",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1761.PNG",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1763.PNG",
    project: "5",
  },

  {
    link: "/images/corporates/IMG_1766.PNG",
    project: "5",
  },

  {
    link: "/images/corporates/IMG_1767.PNG",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1768.PNG",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_1769.PNG",
    project: "5",
  },
  {
    link: "/images/corporates/IMG_2125.JPG",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2114.JPG",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2126.JPG",
    project: "6",
  },

  {
    link: "/images/corporates/IMG_2115.JPG",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2116.JPG",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2113.JPG",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2119.JPG",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2120.JPG",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2121.JPG",
    project: "6",
  },
  {
    link: "/images/corporates/IMG_2124.JPG",
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
    link: "/images/teambuildings/IMG_2345.JPG",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2379.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2355.JPG",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2366.JPG",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2385.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2392.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2336.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2426.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2258.JPG",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2338.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2318.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2299.JPG",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2260.JPG",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2266.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2278.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2267.JPG",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2273.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2268.JPG",
    project: "1",
  },
];
