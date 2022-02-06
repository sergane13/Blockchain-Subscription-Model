import { accessContractAddress, paymentContractAddress, accessAbi, paymentAbi } from "../scripts/contractsDetails";
import { useWeb3React } from "@web3-react/core";

import { useState } from "react";

import { ethers } from "ethers"
import { utils } from "ethers";

export default function AccessCard({type, free, standard, premium, id, children}){
    
    const {library} = useWeb3React();

    const [serviceExist, setServiceExist] = useState(false);
    const [user, setUser] = useState(false);

    function getContract(addressContract, contractAbi, mainProvider) {
        const provider = new ethers.providers.Web3Provider(mainProvider);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(addressContract, contractAbi, signer);
        return (contract, signer);
    }

    async function getStatus(serviceId){
        const [contractPayment, signerPayment] = getContract(paymentContractAddress, paymentAbi, library.provider)
        const [running, price, freq] = await contractPayment.callStatic.getService(serviceId);

        setServiceExist(running)

        const [contractAccess, signerAccess] = getContract(accessContractAddress, accessAbi, library.provider)
        const userAccess = await contractAccess.callStatic.getAccess(serviceId, signerAccess)

        setUser(userAccess)  
    }

    async function payService(serviceId)
    {
        const contract = getContract(paymentContractAddress, paymentAbi, library.provider)
        await contract.payService(serviceId)
    }
    
    return(
        <>
            <div className="container bg-white mx-auto px-4 drop-shadow-md w-96 pt-4 pb-4 rounded-lg my-20">
                <h1 className="text-gray-800 text-3xl font-semibold"> {type} </h1>
                <div>
                    <p className="mt-2 text-gray-600 my-4">
                        {children}
                    </p>
                    <ul className="list-disc mx-4"> 
                    <li> 
                        {
                            free ? 
                            <div>
                                Free tier exemple
                            </div> 
                            : 
                            <div className="text-slate-300">
                                Free tier exemple
                            </div> 
                        }
                        
                    </li>
                    <li> 
                        {
                            standard ? 
                            <div>
                                Standard tier exemple
                            </div> 
                            : 
                            <div className="text-slate-300">
                                Standard tier exemple
                            </div> 
                        } 
                    </li>
                    <li>
                        {
                            premium ? 
                            <div>
                                Premium tier exemple
                            </div> 
                            : 
                            <div className="text-slate-300">
                                Premium tier exemple
                            </div> 
                        } 
                    </li>
                </ul>
                </div>
                <div>
                    <button onClick={ () => {
                        getStatus(id)

                        if(serviceExist && user){
                            payService(id);
                        }
                    } } className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 my-4 transition duration-100 ease-in-out hover:bg-blue-600 mr-6"> 
                        Pay now 
                    </button>
                </div>
            </div>
        </>
    );
}