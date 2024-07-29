"use client";

import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdArrowDropUp, MdClose } from "react-icons/md";

const Gallery = () => {
  const pathname = usePathname();

  const { theme, loading } = useAppContext();

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
    <>
      {showButton && (
        <div
          style={{
            display: loading ? "none" : "flex",
            background: theme.background,
          }}
          className="fixed bottom-4 right-4 desktop:right-6 rounded-full z-[100] cursor-pointer"
        >
          <MdArrowDropUp size={40} color={theme.text} onClick={scrollToTop} />
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
    </>
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
    link: "/images/weddings/IMG_1703.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1704.JPG",
    project: "2",
  },

  {
    link: "/images/weddings/IMG_1714.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1715.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1716.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1717.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1718.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1719.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1720.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1721.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1722.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1723.JPG",
    project: "2",
  },
  {
    link: "/images/weddings/IMG_1748.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1749.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1750.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1751.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1752.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1753.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1754.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1755.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1771.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1772.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1773.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1774.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1775.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1776.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1777.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1778.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1779.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1780.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1781.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1782.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1783.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1784.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1785.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1786.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1787.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1788.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1789.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1790.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1791.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1792.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1793.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1794.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1795.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1796.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1797.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_1798.PNG",
    project: "3",
  },
  {
    link: "/images/weddings/IMG_2050.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_2051.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_2052.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_2053.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_2054.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_2055.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_2056.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_2057.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_2058.PNG",
    project: "4",
  },
  {
    link: "/images/weddings/IMG_2081.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2082.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2083.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2084.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2086.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2087.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2088.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2089.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2090.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2094.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2099.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2101.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2102.JPG",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2104.jpg",
    project: "5",
  },
  {
    link: "/images/weddings/IMG_2102.JPG",
    project: "5",
  },
];
const corporations = [
  {
    link: "/images/corporates/IMG_2125.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_2126.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_2113.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_2114.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_2115.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_2116.JPG",
    project: "1",
  },

  {
    link: "/images/corporates/IMG_2119.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_2120.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_2121.JPG",
    project: "1",
  },

  {
    link: "/images/corporates/IMG_2124.JPG",
    project: "1",
  },
  {
    link: "/images/corporates/IMG_0649.HEIC",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1011.JPG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1012.JPG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1013.JPG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1016.JPG",
    project: "2",
  },

  {
    link: "/images/corporates/IMG_1019.JPG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1023.JPG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1026.JPG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1027.JPG",
    project: "2",
  },

  {
    link: "/images/corporates/IMG_1030.JPG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1031.JPG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1033.JPG",
    project: "2",
  },
  {
    link: "/images/corporates/IMG_1624.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1625.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1626.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1627.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1628.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1629.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1630.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1631.PNG",
    project: "3",
  },
  {
    link: "/images/corporates/IMG_1633.PNG",
    project: "3",
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
    link: "/images/corporates/IMG_1739.PNG",
    project: "4",
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
    link: "/images/corporates/IMG_1747.PNG",
    project: "4",
  },

  {
    link: "/images/corporates/IMG_1758.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1759.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1760.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1761.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1763.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1764.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1765.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1767.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1768.PNG",
    project: "4",
  },
  {
    link: "/images/corporates/IMG_1769.PNG",
    project: "4",
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
    link: "/images/teambuildings/IMG_2334.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2331.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2332.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2333.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2336.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2338.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2339.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2341.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2342.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2343.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2345.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2346.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2347.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2349.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2350.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2351.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2355.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2356.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2359.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2361.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2362.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2364.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2366.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2370.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2372.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2373.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2374.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2375.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2376.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2377.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2326.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2328.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2330.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2378.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2379.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2382.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2383.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2342.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2385.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2386.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2389.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2390.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2392.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2396.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2398.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2405.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2406.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2408.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2409.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2410.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2411.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2413.JPG",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2414.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2419.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2420.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2422.JPG",
    project: "1",
  },

  {
    link: "/images/teambuildings/IMG_2423.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2424.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2425.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2426.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2256.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2258.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2260.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2261.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2262.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2263.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2264.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2265.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2266.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2267.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2268.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2270.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2271.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2273.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2274.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2275.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2276.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2277.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2278.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2280.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2281.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2282.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2283.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2284.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2285.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2286.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2287.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2288.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2289.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2292.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2293.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2294.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2295.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2297.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2298.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2299.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2300.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2301.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2302.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2303.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2305.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2306.jpg",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2308.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2309.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2310.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2311.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2312.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2314.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2317.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2318.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2319.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2320.JPG",
    project: "1",
  },
  {
    link: "/images/teambuildings/IMG_2322.JPG",
    project: "1",
  },
];
