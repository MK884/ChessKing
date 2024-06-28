import { Button } from "../components";
import { FaGithub, FaGoogle } from "react-icons/fa";


export const Login = () =>{


    return (
        <>
        <div className="bg-[#1c1c1c] max-w-full max-h-full min-h-screen">
            <div
                className="flex justify-center items-center h-screen p-4 flex-col gap-8"
            >
                <p className="text-white/80 font-bold text-[2.5rem] text-center">Login To Chess King</p>
                <div className=" bg-[#0f172a] rounded-2xl flex flex-col lg:flex-row gap-2 justify-between lg:p-12 p-8 lg:w-[40rem]">
                    <div className="gap-4 flex flex-col items-center">
                        <Button text="Sign in with Google" bgColor="bg-[#374151]" icon={FaGoogle} styles="gap-4"/>
                        <Button text="Sign in with GitHub" bgColor="bg-[#374151]" icon={FaGithub} styles="gap-4"/>
                        <p className="text-white/50">--- OR ---</p>
                    </div>
                    <div className="gap-4 flex flex-col items-center">
                        <input type="text" className="p-3 w-64 rounded-lg bg-[#374151] text-white" placeholder="Username" />
                        <Button text="Enter as Guest" styles="max-w-36" />
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}