"use client";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Offers from "./offers";

const Page = () => {
  const pathname = usePathname();
  const { theme, loading, gallery } = useAppContext();
  const [itemsToShow, setItemsToShow] = useState(10);
  const { ref, inView } = useInView();

  const list =
    pathname.split("/")[2] === "corporations"
      ? corporations
      : pathname.split("/")[2] === "weddings"
      ? weddings
      : [];

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
      className="w-full flex-col items-center pt-[90px] desktop:pt-[100px] gap-2 slide-in-right desktop:overflow-hidden pb-8 px-[5%]"
    >
      <Offers type={pathname.split("/")[2]} />
      <div className="w-full grid grid-cols-1 desktop:grid-cols-5 gap-2 px-2">
        {list?.slice(0, itemsToShow).map((item: any, index: number) => {
          return (
            <div
              className="w-[100%] text-red-500 w-full h-[600px] desktop:h-[450px] overflow-hidden"
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

const weddings = [
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964542/IMG_2105_sbilsc.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964541/IMG_2104_g2ntwy.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964540/IMG_2102_dasnd2.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964539/IMG_2101_xjz46j.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964538/IMG_2099_opbafs.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964537/IMG_2094_lidhfu.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964535/IMG_2090_blhdhy.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964534/IMG_2089_rfoqkq.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964533/IMG_2088_l80frl.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964532/IMG_2087_tiytm3.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964531/IMG_2086_l0wy5i.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964530/IMG_2084_k72sjo.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964529/IMG_2083_ukgudu.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964528/IMG_2082_t3qj16.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964527/IMG_2081_wjuyeb.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964526/IMG_2057_rohwig.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964526/IMG_2058_oo3oko.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964524/IMG_2053_s7re8i.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964524/IMG_2056_e57nay.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964524/IMG_2055_i1ejmg.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964522/IMG_2054_gb8qey.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964475/IMG_2052_bhmwyu.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964474/IMG_2051_j3cu76.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964473/IMG_2050_r5dws6.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964474/IMG_1798_ojwy9k.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964471/IMG_1797_yytngu.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964470/IMG_1796_tjaeul.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964469/IMG_1795_hqxjxq.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964468/IMG_1794_jnfuoc.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964467/IMG_1793_lwldwh.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964466/IMG_1792_rxqnmh.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964464/IMG_1791_pxd4hw.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964463/IMG_1790_iexvrh.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964462/IMG_1789_hfaggh.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964461/IMG_1788_psdtcj.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964460/IMG_1787_ddezqo.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964459/IMG_1786_jwftva.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964457/IMG_1785_zx3y4w.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964456/IMG_1784_fcw3m2.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964455/IMG_1783_zdvfzp.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964454/IMG_1782_evhpfo.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964451/IMG_1781_b8by5e.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964451/IMG_1780_sfnqf8.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964450/IMG_1779_exypc7.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964037/IMG_1778_r3oyte.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964035/IMG_1777_agbdqz.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964028/IMG_1776_gv9k18.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964025/IMG_1775_evfmsa.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964016/IMG_1774_uz4juy.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964015/IMG_1773_zepqsh.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964007/IMG_1772_h8do9s.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964005/IMG_1771_ui8aot.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964000/IMG_1755_okc7db.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963995/IMG_1754_c1op44.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963992/IMG_1753_mij7ox.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963986/IMG_1752_zkdcrf.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963983/IMG_1751_tqck3v.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963978/IMG_1750_mpr4br.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963975/IMG_1749_fwjguu.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963968/IMG_1748_txoede.jpg",
    project: "3",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963966/IMG_1723_o8fqfx.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963959/IMG_1722_ds8uam.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963957/IMG_1721_xvpl1w.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963951/IMG_1720_i9lmvb.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963950/IMG_1719_fqikjg.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963945/IMG_1718_khlcwj.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963942/IMG_1717_odfmwr.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963936/IMG_1716_v4upvo.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963933/IMG_1715_h15acc.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963928/IMG_1714_lleok8.jpg",
    project: "4",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963924/IMG_1713_u4tzxi.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963918/IMG_1712_vcmlgs.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963917/IMG_1711_yqxcq0.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963912/IMG_1710_kzqqxe.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963911/IMG_1709_xin44o.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963906/IMG_1708_bbxpfw.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963903/IMG_1707_pflknc.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963898/IMG_1706_e4wnrr.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963896/IMG_1705_k93mm9.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963891/IMG_1704_ehgyum.jpg",
    project: "6",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963890/IMG_1703_vf0pun.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963887/IMG_1702_fibhxv.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963884/IMG_1701_xlkjvm.jpg",
    project: "6",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963881/IMG_1700_gyjc4d.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963879/IMG_1697_m5k2jk.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963876/IMG_1662_q5bgsj.jpg",
    project: "6",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963873/IMG_1661_eursxu.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963870/IMG_1660_yka2or.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963869/IMG_1659_uskhbz.jpg",
    project: "6",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963866/IMG_1658_semeru.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963865/IMG_1657_gelba0.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963863/IMG_1656_sgaupz.jpg",
    project: "6",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963862/IMG_1655_iv1jvy.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963861/IMG_1654_chgydk.jpg",
    project: "5",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720963860/IMG_1698_ox7qgu.jpg",
    project: "6",
  },
];
const corporations = [
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2125_vbli5b.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957693/IMG_2115_fmlzqd.jpg",
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
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720957692/IMG_2119_dovze0.jpg",
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
