import { accessContractAddress, paymentContractAddress, accessAbi, paymentAbi } from "../scripts/contractsDetails";
import { useWeb3React } from "@web3-react/core";

import { useState, useEffect } from "react";

import { ethers } from "ethers"
import { utils } from "ethers";

export default function AccessCard({type, free, standard, premium, id, price, centerCard, children}){
    
    const {library, account} = useWeb3React();

    const [userAccess, setUserAccess] = useState(() => {
        if (typeof window !== "undefined") {
            const temp = localStorage.getItem(id);
            const isTrueSet = (temp === "true");
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

    //create services and set contracts
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
        const time = new Date(temp * 1000).toLocaleDateString("en-US")

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
        <div className={centerCard ? "flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10" : "flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"}>
            <div className={centerCard ? "flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow" : "flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"}>
              <div className={centerCard ? "w-full p-8 text-3xl font-bold text-center" : "p-8 text-3xl font-bold text-center border-b-4"}>
                {type}
              </div>
              {centerCard ? <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div> : ''}
              <ul className={centerCard ? "w-full text-center text-base font-bold" : "w-full text-center text-sm"}>
                <li className="border-b py-4"> 
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
                <li className="border-b py-4"> 
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
                <li className="border-b py-4">
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
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className={centerCard ? "w-full pt-6 text-4xl font-bold text-center": "w-full pt-6 text-3xl text-gray-600 font-bold text-center"}>
                {price}
                <span className="text-base"> ETH</span>
              </div>
              <div className="flex items-center justify-center">             
                { userAccess ? 
                    <>
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
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
                    } } className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"> 
                        Pay now 
                    </button>      
                }
              </div>
            </div>
        </div>
    );
}