import { PiHouseThin } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { PiPlusSquareThin } from "react-icons/pi";
import { ImCompass2 } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa6";

function NavBar(){

    return(
        <nav className="flex w-screen justify-between px-10 py-5 items-center shadow-md">
        <div>
            <img src="https://th.bing.com/th/id/OIP.gl5Ne0D6qPnFHaDHPWJU2AHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""
            className="h-14"></img>
        </div>
        <div>
            <input type="text" placeholder="search" className="border-2 border-slate-800 text-center "></input>
        </div>
        <div className="flex *:text-3xl gap-5 items-center w-80 ">
            <PiHouseThin className="hover:text-5xl"/>
            <IoPaperPlaneOutline className="hover:text-5xl"/>
            <PiPlusSquareThin className="hover:text-5xl"/>
            <ImCompass2 className="hover:text-5xl"/>
            <FaRegHeart className="hover:text-5xl"/>
            <img src="https://th.bing.com/th/id/OIP.7_K20cMJ0FMf7-gC-6b8AgHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""
            className="h-10 rounde rounded-3xl"></img>
        </div>

        </nav>
    )
}

export default NavBar;