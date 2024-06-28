import { FaGithub } from "react-icons/fa";
import { Card } from "./Card";
import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";



import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
  100% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(360deg) skew(0deg, 0deg);
  }
`;

const BackgroundBlur = styled.div`
  position: absolute;
  top: auto;
  right: 25%;
  left: auto;
  width: 30%;
  height: 50%;
  z-index: -1;
  opacity: 0.3;
  filter: blur(10px);
  background: linear-gradient(45deg, #ff9a9e, #6e4fe9); /* Your desired color combination */
  animation: ${rotate} 25s infinite linear;
  transform-style: preserve-3d;
  will-change: transform;
`;

export const TechStack = () => {
  return (
    <>
      <div className="flex items-center justify-center lg:flex-row flex-col gap-4 lg:py-64">
        <p className="text-white text-[2rem] w-60">Chess made with Tech-Stack</p>
        {/* <BackgroundBlur/> */}
        <Card title="ReactJs" description="Github is a good tool for contributing to codebase"  icon={FaReact} />
        <Card title="NodeJs" description="Github is a good tool for contributing to codebase"  icon={RiNodejsLine} />
        <Card title="Postgresql" description="Github is a good tool for contributing to codebase"  icon={BiLogoPostgresql} />
      </div>
    </>
  );
};

