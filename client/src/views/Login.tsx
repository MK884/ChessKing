import { Button, Input } from "../components";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  return (
    <>
      <div className="bg-[#1c1c1c] max-w-full max-h-full min-h-screen">
        <div className="flex justify-center items-center h-screen p-4 flex-col gap-8">
          <p className="text-white/80 font-bold text-[2.5rem] text-center">
            Login To Chess King
          </p>
          <div className=" bg-[#0f172a] rounded-2xl flex flex-col lg:flex-row gap-2 justify-between lg:p-12 p-8 lg:w-[40rem] shadow-md shadow-[#24243a]">
            <div className="gap-4 flex flex-col items-center">
              <Button
                text="Sign in with Google"
                bgColor="bg-[#374151]"
                icon={FcGoogle}
                styles="gap-4"
                iconStyle="text-xl"
              />
              <Button
                text="Sign in with GitHub"
                bgColor="bg-[#374151]"
                icon={FaGithub}
                styles="gap-4"
                iconStyle="text-xl"
              />
              <p className="text-white/50">--- OR ---</p>
            </div>
            <div className="gap-4 flex flex-col items-center">
              <Input placeholder="Username" type="text" style="lg:w-64" />
              <Button text="Enter as Guest" styles="max-w-36" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
