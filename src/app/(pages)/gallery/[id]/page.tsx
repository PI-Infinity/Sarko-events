"use client";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const pathname = usePathname();
  const { theme, loading, gallery } = useAppContext();
  const [itemsToShow, setItemsToShow] = useState(10);
  const { ref, inView } = useInView();

  const list = pathname.split("/")[2] === "corporations" ? corporations : [];

  const loadMoreItems = useCallback(() => {
    if (inView) {
      setItemsToShow((prev) => Math.min(prev + 10, list.length));
    }
  }, [inView, list.length]);

  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems]);

  return (
    <div
      style={{ display: loading ? "none" : "flex" }}
      className="w-full flex-col items-center pt-[90px] desktop:pt-[100px] gap-2 slide-in-right desktop:overflow-hidden"
    >
      <div className="w-full px-[5%] flex">
        <h2
          className="text-[24px] my-2 desktop:my-6"
          style={{ color: theme.text }}
        >
          {gallery.find((i: any) => i.id === pathname.split("/")[2]).label}
        </h2>
      </div>
      <div className="w-full flex desktop:flex-row flex-col desktop:overflow-x-auto gap-2 px-2">
        {list?.slice(0, itemsToShow).map((item: any, index: number) => {
          return (
            <div
              className="w-[100%] text-red-500 desktop:w-[400px] desktop:min-w-[500px] h-[500px] desktop:h-[600px] overflow-hidden"
              key={index}
            >
              <Img
                src={item.link}
                alt="corporations"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
      {itemsToShow < list.length && (
        <div ref={ref} style={{ height: "20px", width: "100%" }}></div>
      )}
    </div>
  );
};

export default Page;
const corporations = [
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957693/IMG_2115_fmlzqd.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2125_vbli5b.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2124_l68ys6.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2123_i6bvzc.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2122_fxie2e.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957672/IMG_2126_oswf9q.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2121_xzgxbk.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2120_yyqmil.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2118_yntasz.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2119_dovze0.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2117_abgn35.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2116_nx0db8.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957691/IMG_2113_cjehsz.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957691/IMG_2114_q44dpq.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957691/IMG_1769_ex6bcw.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957691/IMG_1767_sl5gly.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957691/IMG_1765_slh0gj.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957691/IMG_1768_nncgqp.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957691/IMG_1764_mgb1eo.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957690/IMG_1761_uynto4.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957690/IMG_1760_e7mkqm.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957690/IMG_1757_m4956l.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957690/IMG_1758_msxek2.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957690/IMG_1759_fwfeha.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957690/IMG_1747_ywf2vq.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957690/IMG_1745_btdrfy.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957689/IMG_1740_uxcxfr.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957689/IMG_1743_jnarv0.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957689/IMG_1741_swxl8f.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957689/IMG_1643_y3k9sz.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957689/IMG_1636_nezd47.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957689/IMG_1742_xbuzbc.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957688/IMG_1635_wzssh1.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957688/IMG_1739_xrrdgl.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957688/IMG_1642_chro83.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957688/IMG_1640_sccb0k.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957688/IMG_1641_te739v.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957687/IMG_1634_i6yezr.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957687/IMG_1639_lqxkze.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957686/IMG_1638_drv7be.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957687/IMG_1625_hq2bsu.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957686/IMG_1633_rvfkdq.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957685/IMG_1631_u6d3kk.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957685/IMG_1031_d0oaoa.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957685/IMG_1624_fgig68.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957683/IMG_1627_eazkdj.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957683/IMG_1021_nrcwyu.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957682/IMG_1033_f1ncze.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957682/IMG_1030_ypklrx.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957681/IMG_1010_zwgba3.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957680/IMG_1019_tkqxmq.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957680/IMG_1013_bvz5lg.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957679/IMG_1027_aj4wr1.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957679/IMG_1012_pjfufd.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957678/IMG_1025_lzpig7.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957678/IMG_1028_wdexyb.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957678/IMG_1018_ymxqq6.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957676/IMG_1016_byrb6o.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957675/IMG_1023_shobua.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957674/IMG_1022_hymnp9.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957670/IMG_0649_uzetwb.heic",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957669/IMG_1026_h7akvi.jpg",
    project: "4",
  },
];
