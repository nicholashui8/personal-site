import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Home = () => {
    return (
        <div className="h-screen w-screen bg-zinc-900 text-white">
            <div className="h-1/6">
            </div>
            <div className="mx-auto h-1/5 w-1/2 flex items-center justify-center rounded-lg border-none border-white">
                <h1 className="font-extrabold text-4xl px-10"> Hi, I'm Nick! I'm a software engineer 👋</h1>
            </div>
            {/* <div className="mt-20 grid grid-cols-3 bg-zinc-700">
                <div>
                    <a href="mailto:nicholashui8@gmail.com">
                        <IoMailOutline size={60}/>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/nicholas-hui-01/">
                        <FaLinkedin size={60}/>
                    </a>
                </div>
                <div className="bg-red-100">
                    <a href="https://github.com/nicholashui8">
                        <FaGithub size={60}/>
                    </a>   
                </div>
            </div> */}
            <div className="flex flex-row justify-around pt-20">
                <div className="bg-zinc-800">
                    <a href="mailto:nicholashui8@gmail.com">
                        <IoMailOutline size={40}/>
                    </a>
                </div>
                <div className="bg-zinc-800">
                    <a href="https://www.linkedin.com/in/nicholas-hui-01/">
                        <FaLinkedin size={40}/>
                    </a>
                </div>
                <div className="bg-zinc-800">
                    <a href="https://github.com/nicholashui8">
                        <FaGithub size={40}/>
                    </a>                   
                </div>
            </div>
        </div>
    );
}