import { useAppContext } from "@/context/app";
import React from "react";
import Select from "react-select";

export default function SelectComponent({ data, value, setValue }: any) {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      height: "56px", // 48px for h-12
      borderRadius: "0.75rem", // For rounded-xl
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // For shadow-xl
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "gray",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      // lineHeight: "3rem", // Center align text vertically
    }),
  };

  return (
    <div className="w-full h-14 rounded-xl bg-red-500">
      <Select
        options={data}
        styles={customStyles}
        defaultValue={value.id}
        value={value.id}
        onChange={setValue}
        placeholder={value.label}
      />
    </div>
  );
}
