import Img from "@/components/image";
import React from "react";

export const OpenedImage = ({ openedImage, setOpenedImage }: any) => {
  return (
    <div
      style={{
        WebkitBackdropFilter: "blur(20px)",
        backdropFilter: "blur(20px)",
      }}
      onClick={() => setOpenedImage(null)}
      className="p-4 desktop:p-24 w-full h-full fixed top-0 left-0 flex items-center justify-center"
    >
      <img
        src={openedImage}
        alt="img"
        className="animate-slideUp2 max-w-full rounded-xl max-h-full object-contain"
      />
    </div>
  );
};
