export default function AccessCard({type, free, standard, premium, children}){
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
                    <button className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 my-4 transition duration-100 ease-in-out hover:bg-blue-600 mr-6"> 
                        Pay now 
                    </button>
                </div>
            </div>
        </>
    );
}