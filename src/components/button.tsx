import CircularProgress from "@mui/material/CircularProgress";
import { IoMdArrowDropright } from "react-icons/io";

interface PropsType {
  title: any;
  onClick: () => void;
  background: string;
  color: string;
  disabled?: any;
  loading?: boolean;
  id?: string;
  icon?: any;
}

const Button: React.FC<PropsType> = ({
  title,
  onClick,
  background,
  color,
  disabled,
  loading,
  id,
  icon,
}) => {
  return (
    <>
      <div
        id={id}
        style={{
          background: disabled ? "inherit" : background,
          color: disabled ? "white" : color,
        }}
        onClick={!loading ? onClick : undefined}
        className={`relative w-full h-full rounded-full flex items-center justify-center gap-2 bg-gray-300  cursor-${
          disabled ? "default" : "pointer"
        } hover:${disabled ? "none" : "brightness-105"} font-semibold`}
      >
        {loading && <CircularProgress sx={{ color: "white" }} size={20} />}
        {title}
        <div className="absolute right-4">{icon}</div>
      </div>
    </>
  );
};

export default Button;
