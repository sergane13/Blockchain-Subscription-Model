import { allowedStatusCodes } from 'next/dist/lib/load-custom-routes';
import React from 'react'

import Image from 'next/image'
import mypic from '../public/close.jpg'
import metamask from '../public/metamask.svg'


export default function Modal({open, onClose, onConnect}) {
    if(!open) return null;
    
    return(
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">              
                        <div className="relative p-6 flex-auto">
                            <div className="absolute top-0 right-0">
                                <button onClick={onClose} className="hover:opacity-50 ">
                                    <div className="pr-1 pt-1">
                                        <Image
                                        src={mypic}
                                        alt="Picture of the author"
                                        width="50px"
                                        loading='eager'
                                        height="50px"
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='pt-4 px-8 py-8'> 
                            <div onClick={onConnect} className="flex justify-center pt-2 rounded-md border-solid border-2 divide-gray-400 hover:bg-slate-200 duration-100">
                                <button>
                                    <Image
                                        src={metamask}
                                        alt="Picture of the author"
                                        width="80px"
                                        loading='eager'
                                        height="80px"
                                    /> 
                                </button>
                            </div>
                            <div className="text-slate-400 pt-4">
                                Connect with MetaMask
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div className="animated fadeIn opacity-25 fixed inset-0 z-40 bg-black blur-lg"></div>   
        </>
    );
}