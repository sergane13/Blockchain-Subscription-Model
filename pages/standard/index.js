import Footer from "../../components/footer.js";
import NavBar from "../../components/navbar.js"
import MetaMask from "../../components/metamaskConnection.js";
import Image from "next/image";

import meme from "../../public/elonBoy.jpg"

export default function PremiumTier()
{
    return(
        <>
            <NavBar>
                <MetaMask/>
            </NavBar>
            <div className="flex justify-center">
                <div className="w-xl container bg-white mx-auto px-4 drop-shadow-md max-w-3xl pt-4 pb-4 rounded-lg my-20">
                    <div className="pt-4 px-2 font-bold text-4xl">
                        Standard meme
                    </div>  
                    <div className="pt-4 px-2">
                        A gold one ...
                    </div>
                    <Image
                        src={meme}
                        alt="crash incoming..."
                        width="800px"
                        height="600px"
                        className="rounded-lg"
                    /> 
                </div>
            </div>
            <Footer/>
        </>
    );
}