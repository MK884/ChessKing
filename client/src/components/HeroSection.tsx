import { FaGithub } from "react-icons/fa";
import { Button } from "./Button";

export const HeroSection = () =>{
    return (
        <div className="py-28 flex items-center justify-center flex-col gap-12 ">
          <h1 className="text-white lg:text-[5rem] text-[3rem] font-bold lg:w-[65rem] text-center leading-tight">
            Think Ahead, Outplay, and Checkmate All
          </h1>
          <Button
            text="GitHub 1k Stars"
            icon={FaGithub}
            styles="bg-white/5 backdrop-blur-lg gap-6 rounded-xl"
          />
          <img src="./ChessCube.png" alt="ChessKing" className="rounded-2xl overflow-hidden px-2 " />
        </div>
    )
}