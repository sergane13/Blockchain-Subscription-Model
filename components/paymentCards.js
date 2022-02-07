import { accessContractAddress, paymentContractAddress, accessAbi, paymentAbi } from "../scripts/contractsDetails";
import { useWeb3React } from "@web3-react/core";

import { useState, useEffect } from "react";

import { ethers } from "ethers"
import { utils } from "ethers";

export default function AccessCard({type, free, standard, premium, id, price, children}){
    
    const {library, account} = useWeb3React();

    const [userAccess, setUserAccess] = useState(() => {
        if (typeof window !== 'undefined') {
            const temp = localStorage.getItem(id);
            const isTrueSet = (temp === 'true');
            return isTrueSet;
        } else {
            return false;
        }
        
    });
    const [userExpiration, setUserExpiration] = useState("");

    useEffect(() => {
        if(library !== undefined){
            getAccess(id)
            getExpirationDate(id)
        }
    }, [userAccess, library, account])

    // create services and set contracts
    // async function createServices(){
    //     const [contract1, signer1] = getContract(accessContractAddress, accessAbi, library.provider)

    //     await contract1.setPaymentContract(paymentContractAddress)

    //     const [contract, signer] = getContract(paymentContractAddress, paymentAbi, library.provider)
    //     await contract.createService(0, 0)
    //     await contract.createService(utils.parseEther("0.1"), 1)
    //     await contract.createService(utils.parseEther("0.2"), 1)
    // }

    // get the contract to interact with
    function getContract(addressContract, contractAbi, mainProvider) {
        const provider = new ethers.providers.Web3Provider(mainProvider);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(addressContract, contractAbi, signer);
        
        return [contract, signer];
    }

    // execute a payment for a service
    async function executePayment(serviceId)
    {
        const [contract, signer] = getContract(paymentContractAddress, paymentAbi, library.provider)

        const options = {value: ethers.utils.parseEther(`${price}`)}
        const paymentStatus = await contract.payService(serviceId, options)

        await paymentStatus.wait()

        if(paymentStatus){
            setUserAccess(true)
        }
    }

    // get user access to service
    async function getAccess(serviceId){
        const [contract, signer] = getContract(accessContractAddress, accessAbi, library.provider)
        const addressSigner = await signer.getAddress()
        const userAccess = await contract.callStatic.getAccess(serviceId, addressSigner)

        setUserAccess(userAccess)
        localStorage.setItem(serviceId, userAccess)

        return userAccess;
    }   

    // get user end of access for service
    async function getExpirationDate(serviceId){
        const [contract, signer] = getContract(accessContractAddress, accessAbi, library.provider)
        const addressSigner = await signer.getAddress()
        const userExp = await contract.callStatic.getExpirationDate(serviceId, addressSigner)

        const temp = parseInt(userExp, 10)
        console.log(temp)

        const time = new Date(temp * 1000).toLocaleDateString("en-US")
        console.log(time)

        setUserExpiration(time)
    }

    // make the payment if user has no access to it
    async function makePayment(serviceId){
        const temp = await getAccess(serviceId)

        if(!temp){
            executePayment(serviceId)
        }  
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
                    { userAccess ? 
                        <>
                            <button 
                            className="bg-blue-200 rounded-lg font-bold text-white text-center px-3 py-2 my-4"> 
                                Payed
                            </button>
                            <div>
                                Expiration date: {userExpiration}
                            </div> 
                        </>
                        
                        :
                        <button onClick={ () => {
                            makePayment(id)
                            //createServices()
                        } } className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 my-4 transition duration-100 ease-in-out hover:bg-blue-600 mr-6"> 
                            Pay now 
                        </button>      
                    }
                </div>
            </div>
        </>
    );
}