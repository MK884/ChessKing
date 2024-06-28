import { FaGithub } from "react-icons/fa";

export const TechStack = () => {
  return (
    <>
      <div className="flex items-center justify-center lg:flex-row flex-col gap-4 my-4">
        <p className="text-white text-[2rem] w-60">Chess made with Tech-Stack</p>
        <div className="bg-white/5 backdrop-blur w-72 flex items-center flex-col justify-center py-8 px-4 rounded-xl cursor-pointer">
            <FaGithub size={85} className=" text-white/50" />
            <p className="text-white/70 font-bold text-[1.5rem] pt-12 pb-8">GitHub</p>
            <p className="text-white/70 text-[1rem] text-center">Star the Open source to show support</p>
        </div>
        <div className="bg-white/5 backdrop-blur w-72 flex items-center flex-col justify-center py-8 px-4 rounded-xl cursor-pointer">
            <FaGithub size={85} className=" text-white/50" />
            <p className="text-white/70 font-bold text-[1.5rem] pt-12 pb-8">GitHub</p>
            <p className="text-white/70 text-[1rem] text-center">Star the Open source to show support</p>
        </div>
        <div className="bg-white/5 backdrop-blur w-72 flex items-center flex-col justify-center py-8 px-4 rounded-xl cursor-pointer">
            <FaGithub size={85} className=" text-white/50" />
            <p className="text-white/70 font-bold text-[1.5rem] pt-12 pb-8">GitHub</p>
            <p className="text-white/70 text-[1rem] text-center">Star the Open source to show support</p>
        </div>
      </div>
    </>
  );
};
