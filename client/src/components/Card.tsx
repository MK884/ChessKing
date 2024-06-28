import { CardProps } from "./props";

export const Card = ({
  title,
  description,
  icon: Icon,
  onClick,
  styles,
}: CardProps) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`bg-white/5 backdrop-blur w-64 flex items-center flex-col justify-center py-8 px-4 rounded-xl cursor-pointer hover:-translate-y-2 transition-all hover:brightness-110  ${styles}`}
      >
        {Icon && <Icon size={85} className=" text-white/50" />}
        <p className="text-white/70 font-bold text-[1.5rem] pt-12 pb-8">
          {title}
        </p>
        <p className="text-white/70 text-[1rem] text-center">{description}</p>
      </div>
    </>
  );
};
