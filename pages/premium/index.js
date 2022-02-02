import Footer from "../../components/footer.js";
import NavBar from "../../components/navbar.js"
import MetaMask from "../../components/metamaskConnection.js";
import Image from "next/image";

import meme from "../../public/leoBoy.jpg"

export default function StandardTier()
{
    return(
        <>
            <NavBar>
                <MetaMask/>
            </NavBar>
            <div className="flex justify-center">
                <div className="w-xl container bg-white mx-auto px-4 drop-shadow-md max-w-3xl pt-4 pb-4 rounded-lg my-20">
                    <div className="pt-4 px-2 font-bold text-4xl">
                        Premium meme
                    </div>  
                    <div className="pt-4 px-2">
                        A gold one ...
                    </div>
                    <Image
                        src={meme}
                        alt="elon boy incoming..."
                        width="800px"
                        height="800px"
                        className="rounded-lg"
                    /> 
                </div>
            </div>
            <Footer/>
        </>
    );
}