import { useEffect, useState } from "react";
import Modal from "./modalConnection.js";
import { injectedProvider} from "./connectors.js";
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import user from "../public/user.png";
import UserInfo from "./userDetails.js";

export default function MetaMask() {

    const [showModal, setShowModal] = useState(false);
    
    const [walletConnected, setWalletConnected] = useState(() => {
        requestConnection()
    });

    const {activate, active, account, chainId, deactivate, balance} = useWeb3React();

    useEffect(() => { 
        requestConnection();
    }, [])

    useEffect(() => {
        requestConnection();
    }, [account])

    function requestConnection()
    {
        injectedProvider.isAuthorized()
        .then((isAuth) => {
            let temp = (localStorage.getItem("isWalletConnected") === "true");
            setWalletConnected(temp)

            if(isAuth && temp){
                activate(injectedProvider)
            } 
        })
    }

    // connect wallet
    async function connect()
    {
        try{
            await activate(injectedProvider)
            localStorage.setItem("isWalletConnected", true)
            setWalletConnected(true)
        } catch(e) {
            console.log(e)
        }
    }

    // disconnect wallet
    function disconnect()
    {
        try{
            deactivate() // deactivate 
            localStorage.setItem("isWalletConnected", false)
            setWalletConnected(false)
            localStorage.setItem(0, false)
            localStorage.setItem(1, false)
            localStorage.setItem(2, false)
        } catch(e) {
            console.log(e)
        }   
    }

    return(
        <>
        { !walletConnected ?
            <div>
                <div className="pt-2">
                    <button onClick={() => setShowModal(true)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-400 rounded-lg group bg-gradient-to-br from-blue-300 to-blue-500 group-hover:from-blue-400 group-hover:to-blue-600 hover:text-white dark:text-white">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Connect Wallet
                        </span>
                    </button>
                </div>

                <Modal 
                open={showModal} 
                onClose={() => setShowModal(false)}
                onConnect={() => {
                    connect()
                    setShowModal(false)
                }}
                />
            </div> 
            :
            <div className="pt-3 flex flex-row "> 
                <div className="relative">
                    <Image
                        src={user}
                        alt="Picture of the author"
                        width="30px"
                        loading="eager"
                        height="30px"
                        className="rounded-full"
                    /> 
                </div>
                <div className="rounded-lg py-1 px-2 lex items-center">             
                    <div className="pl-2 pr-2 text-md">
                        <button onClick={() => setShowModal(true)} className="hover:text-blue-600">
                            {account?.substring(0, 12).concat("...")}
                        </button>       
                    </div>
                </div> 
                <UserInfo 
                    open={showModal} 
                    onClose={() => setShowModal(false)}
                    account={account}
                    chainId={chainId}
                    balance={balance}
                    disconnect={() => {
                        disconnect()
                        setShowModal(false)
                    }}
                />
            </div>   
        }
        </>
    );
}