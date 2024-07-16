import { useAppContext } from "../context/app";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerComponent = ({ date, setDate }: any) => {
  const { theme } = useAppContext();
  const { activeLanguage, isMobile } = useAppContext();

  return (
    <div className={`flex items-center gap-6 `}>
      <div className="flex items-center gap-4 text-sm font-semibold w-full italic">
        <div
          className="flex items-center justify-between gap-4 w-full "
          style={{
            border: `1px solid ${theme.line}`,
            borderRadius: "10px",
          }}
        >
          <span
            style={{
              color: theme.text,
            }}
          >
            Start:
          </span>
          <DatePicker
            selected={date}
            onChange={(dt: any) => setDate(dt)}
            dateFormat="dd/MMMM/yyyy"
            className="w-full h-14 py-2 px-3 rounded-xl focus:outline-none text-[16px]"
          />
        </div>
        <div
          className="flex items-center justify-between w-full gap-4"
          style={{
            border: `1px solid ${theme.line}`,
            borderRadius: "10px",
          }}
        >
          <span
            style={{
              color: theme.text,
            }}
          >
            End:
          </span>
          <DatePicker
            selected={date}
            onChange={(dt: any) => setDate(dt)}
            dateFormat="dd/MMMM/yyyy"
            className="w-full h-14 py-2 px-3 rounded-xl focus:outline-none text-[16px]"
          />
        </div>
      </div>
    </div>
  );
};
