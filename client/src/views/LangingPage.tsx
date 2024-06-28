import { useNavigate } from "react-router-dom";
import {
  Button,
  HeroSection,
  NavBar,
  TechStack,
} from "../components";



const Logo = () => {
  return (
    <div className="flex items-center ">
      <img
        src="./logo.png"
        alt="ChessKing"
        className="lg:size-16 size-12 m-0"
        />
      <p className="text-white font-medium lg:text-[2rem] text-[1rem]">
        CHESS KING
      </p>
    </div>
  );
};



export const LandingPage = () => {
  const navigate = useNavigate();
  
  const handleLogin = () =>{
    navigate('/login');
  }

  return (
    <>
      <div className=" bg-[#1c1c1c] max-w-screen max-h-full min-h-screen">
        <NavBar>
          <Logo />
          <Button text="Login" styles="lg:h-12" onClick={handleLogin} />
        </NavBar>
        <HeroSection />
        <TechStack />
      </div>
    </>
  );
};
