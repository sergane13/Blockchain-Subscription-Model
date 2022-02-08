import Footer from "../../components/footer.js";
import NavBar from "../../components/navbar.js"
import MetaMask from "../../components/metamaskConnection.js";
import Image from "next/image";
import Link from 'next/link'

import infoGraphic from "../../public/infographics.png"

import { accessContractAddress, accessAbi } from "../../scripts/contractsDetails.js";
import { useWeb3React } from "@web3-react/core";

import { useState, useEffect } from "react";

import { ethers } from "ethers"

export default function FreeTier()
{
    const {library, account} = useWeb3React();
    const [userAccess, setUserAccess] = useState(() => {
        localStorage.setItem(0, false)
        if (typeof window !== 'undefined') {
            const temp = localStorage.getItem(0);
            const isTrueSet = (temp === 'true');
            return isTrueSet;
        } else {
            return false;
        }
    });
    

    useEffect(() => {
        if(library !== undefined){
            getAccess(0)
        }
            
    }, [library, account])

    function getContract(addressContract, contractAbi, mainProvider) {
        const provider = new ethers.providers.Web3Provider(mainProvider);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(addressContract, contractAbi, signer);

        return [contract, signer];
    }

    async function getAccess(serviceId){
        const [contract, signer] = getContract(accessContractAddress, accessAbi, library.provider)
        const addressSigner = await signer.getAddress()
        
        const userAccess = await contract.callStatic.getAccess(serviceId, addressSigner)

        setUserAccess(userAccess)
        localStorage.setItem(serviceId, userAccess)
    } 

    return(
        <>
            <NavBar>
                <MetaMask/>
            </NavBar>
            <div className="flex justify-center">
                {
                    userAccess 
                    ?
                    <div className="w-xl container bg-white mx-auto px-4 drop-shadow-md max-w-3xl pt-4 pb-4 rounded-lg my-20">
                        <Image
                            src={infoGraphic}
                            alt="eth meme incoming..."
                            width="880px"
                            height="1124px"
                            className="rounded-sm"
                        />
                    </div> 
                    :
                    <div>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">              
                                    <div className="px-12 pt-6 font-bold text-xl flex justify-center">
                                        NO ACCESS! 
                                    </div>
                                    <div className="px-12 py-6 text-slate-400">
                                        Make a transaction to get access to free tire.
                                    </div>
                                    <div className="flex justify-center pb-4 ">
                                        <Link href="/">
                                            <a className="bg-blue-500 px-4 py-2 rounded text-white font-bold hover:bg-blue-600">
                                                Go back
                                            </a>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="animated fadeIn opacity-25 fixed inset-0 z-10 bg-black blur-lg"></div>
                    </div>
                }
            </div>
            <Footer/>
        </>
    );
}