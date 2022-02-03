import Footer from "../../components/footer.js";
import NavBar from "../../components/navbar.js"
import MetaMask from "../../components/metamaskConnection.js";
import Image from "next/image";

import meme from "../../public/ethMeme.jpg"
import meme2 from "../../public/bitcoin-meme.png"

export default function FreeTier()
{
    return(
        <>
            <NavBar>
                <MetaMask/>
            </NavBar>
            <div className="flex justify-center">
                <div className="w-xl container bg-white mx-auto px-4 drop-shadow-md max-w-3xl pt-4 pb-4 rounded-lg my-20">
                    <div className="pt-4 px-2 font-bold text-4xl">
                        Free meme
                    </div>  
                    <div className="pt-4 px-2">
                        Basic and boring memes =))
                    </div>
                    <Image
                        src={meme}
                        alt="eth meme incoming..."
                        width="800px"
                        height="800px"
                        className="rounded-sm"
                    />
                    <Image
                        src={meme2}
                        alt="eth meme incoming..."
                        width="800px"
                        height="800px"
                        className="rounded-sm"
                    />  
                </div>
            </div>

            <Footer/>
        </>
    );
}