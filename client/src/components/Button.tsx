import { customeButtonProps } from "./props";

export const Button = ({
  text,
  icon: Icon,
  padding = "py-2 px-4",
  fontSize = "text-base",
  bgColor = "bg-blue-700",
  textColor = "text-white",
  borderRadius = "rounded",
  hoverBgColor = "hover:bg-blue-500",
  styles,
  iconToLeft = true,
  onClick,
}: customeButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center ${padding} ${fontSize} ${bgColor} ${textColor} ${borderRadius} ${hoverBgColor} transition duration-300 ease-in-out ${styles} `}
      onClick={onClick}
    >
      {iconToLeft ? (
        <>
          {Icon && <Icon className="" />}
          {text}
        </>
      ) : (
        <>
          {text}
          {Icon && <Icon className="" />}
        </>
      )}
    </button>
  );
};
