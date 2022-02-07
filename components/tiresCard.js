import Link from "next/link";
import { accessContractAddress, paymentContractAddress, accessAbi, paymentAbi } from "../scripts/contractsDetails";
import { useWeb3React } from "@web3-react/core";

import { useState, useEffect } from "react";

import { ethers } from "ethers"

export default function TiresDescription({title, description, way, id})
{   
    const {library, account} = useWeb3React();
    const [userAccess, setUserAccess] = useState(false);

    useEffect(() => {
        if(library !== undefined){
            getAccess(id)
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
    } 

    return(
        <div className="container bg-white mx-auto px-4 drop-shadow-md w-96 pt-4 pb-4 rounded-lg my-20">
            <div className="text-xl inline">
                {title}
            </div>
            {
                !userAccess ?
                <div className="inline absolute inset-y-3 right-4">
                    <div className="bg-red-600 text-white px-2 py-1 rounded-lg">
                        No Access
                    </div>
                </div> : 
                <div className="inline absolute inset-y-3 right-4">
                    <div className="bg-green-600 text-white px-2 py-1 rounded-lg">
                        Access
                    </div>
                </div>
            }
            
            <div className="pt-4 text-slate-500">
                {description}
            </div>
            <div className="pt-4">
                <button className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-100 ease-in-out hover:bg-blue-600 mr-6"> 
                <Link href={way}>
                    <a>See feature</a>
                </Link>
                </button>
            </div>
        </div>
    );
}