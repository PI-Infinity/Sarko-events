"use client";
import { useEffect } from "react";
import * as React from "react";
import { useAppContext } from "../context/app";

const SimpleSnackbar: React.FC = () => {
  const { alert, setAlert } = useAppContext();

  useEffect(() => {
    if (alert.active) {
      const timer = setTimeout(() => {
        setAlert({ active: false, type: "", text: "" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);

  return (
    <>
      {alert.active && (
        <div
          onClick={() => setAlert({ active: false, type: "", text: "" })}
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center overflow-hidden z-[999999] backdrop-blur-sm transition ease-in-out duration-200"
        >
          <div className="fixed bottom-6 left-6 space-y-2">
            <div
              className={`w-auto px-4 py-3 rounded-md text-white ${
                alert.type === "success"
                  ? "bg-green-600"
                  : alert.type === "error"
                  ? "bg-red-600"
                  : alert.type === "warning"
                  ? "bg-yellow-600"
                  : "bg-blue-600"
              }`}
            >
              {alert.text}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleSnackbar;
