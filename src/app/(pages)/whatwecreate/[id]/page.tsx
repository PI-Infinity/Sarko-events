"use client";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Offers from "./offers";

const Page = () => {
  const pathname = usePathname();
  const { loading } = useAppContext();
  const [itemsToShow, setItemsToShow] = useState(10);
  const { ref, inView } = useInView();

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
      className="w-full flex-col items-center pt-[90px] desktop:pt-[100px] gap-2 slide-in-right desktop:overflow-hidden pb-8 px-0 desktop:px-[5%] "
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
const presentations = [
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964574/IMG_1672_jxsgxc.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964572/IMG_1671_nrpbv0.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964568/IMG_1670_fbz52i.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964566/IMG_1669_n3yfu7.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964561/IMG_1668_wj4n9p.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964561/IMG_1667_jgvlhd.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964559/IMG_1666_xs93vh.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964556/IMG_1665_qhsvrp.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964554/IMG_1664_w3i3yb.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964552/IMG_1617_tqawzl.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964547/IMG_1614_publp9.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964545/IMG_1613_bcb78e.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964544/IMG_1612_et5owr.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964550/IMG_1616_iqwun7.jpg",
    project: "2",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720964549/IMG_1615_avuvcr.jpg",
    project: "2",
  },
];
const teambuildings = [
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962305/IMG_2426_zntr9r.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962300/IMG_2425_hdkzzl.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962298/IMG_2424_j1w6sc.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962293/IMG_2423_fqxs40.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962291/IMG_2422_ou6u56.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962288/IMG_2420_hogyv5.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962284/IMG_2419_ytuedl.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962283/IMG_2414_n9pafz.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962284/IMG_2419_ytuedl.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962277/IMG_2411_b5wdiy.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962278/IMG_2413_vwyazm.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962269/IMG_2409_pmcyzg.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962264/IMG_2408_a5yoen.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962263/IMG_2406_p8sjtq.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962258/IMG_2405_hgtmyz.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962257/IMG_2398_vkdty4.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962252/IMG_2396_wfktjn.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962251/IMG_2392_ofnnzd.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962246/IMG_2390_gqmnl1.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962245/IMG_2389_fgekfx.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962241/IMG_2386_zqesel.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962240/IMG_2385_taa7ai.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962235/IMG_2384_dsqem0.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962234/IMG_2383_vgtscc.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962229/IMG_2382_gmflsd.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962228/IMG_2379_si0js0.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962224/IMG_2378_akbemc.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962222/IMG_2377_jbfmuu.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962218/IMG_2376_tlhqtv.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962217/IMG_2375_lc3y7i.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962212/IMG_2374_pxlzdd.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962211/IMG_2373_jgnpjr.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962207/IMG_2372_wxpqce.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962206/IMG_2370_udgaue.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962202/IMG_2366_t3h0z3.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962201/IMG_2364_vhxpig.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962196/IMG_2362_ibm1we.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962195/IMG_2361_eaucjc.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962191/IMG_2359_nwdc9a.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962190/IMG_2356_l4z5sq.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962179/IMG_2350_dorz1g.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962184/IMG_2351_tc0ede.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962184/IMG_2351_tc0ede.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962174/IMG_2347_russvy.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962172/IMG_2346_tmty5o.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962168/IMG_2345_snyqfy.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962167/IMG_2343_tkiyty.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962162/IMG_2341_rxehbn.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962157/IMG_2339_w4ikte.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962163/IMG_2342_aasdkd.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962156/IMG_2338_om7sn6.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962152/IMG_2336_oqbfwt.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962151/IMG_2334_cj9epe.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962146/IMG_2333_qiqqta.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962145/IMG_2332_decmf9.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962141/IMG_2331_wud3rn.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962140/IMG_2330_chtjus.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962136/IMG_2328_onj3yx.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962135/IMG_2326_siqujw.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962130/IMG_2322_rrzvf5.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962129/IMG_2320_ko0ows.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962125/IMG_2319_m8edat.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962124/IMG_2318_ieajlh.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962120/IMG_2317_uf8tv4.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962119/IMG_2314_l6veep.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962115/IMG_2312_dkteys.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962114/IMG_2311_h4pziv.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962110/IMG_2310_qm0zr9.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962109/IMG_2309_vo2wjw.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962106/IMG_2308_exldnq.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962105/IMG_2306_nekyno.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962100/IMG_2305_nlfo0v.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962099/IMG_2303_cu15qy.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962096/IMG_2302_t5itlr.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962094/IMG_2301_vd9mz5.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962090/IMG_2300_rwcnv6.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962090/IMG_2299_fgs0cb.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962085/IMG_2298_pbymmm.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962084/IMG_2297_l4bbwn.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962081/IMG_2295_eqsnzl.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962079/IMG_2294_tvgvgm.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962077/IMG_2293_n8q8sy.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962072/IMG_2292_mxscj1.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962071/IMG_2289_lmtbok.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962067/IMG_2288_pzymyx.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962066/IMG_2287_ysqwpr.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962061/IMG_2286_hzizck.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962060/IMG_2285_vkc4le.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962056/IMG_2284_csrjxq.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962055/IMG_2283_iu1se3.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962050/IMG_2282_yjv8uy.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962049/IMG_2281_smrtbb.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962045/IMG_2280_c6auk8.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962043/IMG_2278_dyzj3t.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962039/IMG_2277_kgdfdz.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962038/IMG_2276_as288d.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962035/IMG_2275_uuf0l5.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962034/IMG_2274_jjg2sy.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962030/IMG_2273_gdp2n0.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962029/IMG_2271_ygcmxz.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962027/IMG_2270_uczluf.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962025/IMG_2268_l9dgpr.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962023/IMG_2267_tpukly.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962022/IMG_2266_efciyk.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962020/IMG_2265_dwlqtm.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962018/IMG_2264_w6dtjw.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962016/IMG_2263_erkgaf.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962015/IMG_2262_nyuypk.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962013/IMG_2261_ddbtdo.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962013/IMG_2260_u5j6wb.jpg",
    project: "1",
  },
  {
    link: "https://res.cloudinary.com/djsadepig/image/upload/v1720962012/IMG_2258_muy9gt.jpg",
    project: "1",
  },
  {
    link: "hhttps://res.cloudinary.com/djsadepig/image/upload/v1720962012/IMG_2256_za9klp.jpg",
    project: "1",
  },
];
