import Image from 'next/image'
import mypic from '../public/close.jpg'

export default function UserInfo({open, onClose, account, chainId, disconnect})
{
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
                        <div className="pt-4 px-8 py-8 ">
                            <div>
                                Connected Account: {account}
                            </div>
                            <div>
                                Chain Id: {chainId}
                            </div>
                        </div>
                        <div className="flex ml-8 mb-4">
                            <button onClick={disconnect} className="bg-red-500 rounded-lg font-bold text-white text-center px-3 py-2 my-4 transition duration-100 ease-in-out hover:bg-red-600 mr-6">
                                Disconnect
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          <div className="animated fadeIn opacity-25 fixed inset-0 z-40 bg-black blur-lg"></div>
        </>
    );
}