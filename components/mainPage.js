import AccessCard from "./paymentCards.js";
import Image from "next/image";
import access from "../public/access.jpg";
import TiresDescription from "./tiresCard.js";

export default function MainPage()
{
    return(
        <>  
            <div className="flex justify-center">
                <div className="max-w-7xl pt-16">
                    <div className="flex flex-row">
                        <div className="pt-16">
                            <div className="inline font-sans text-6xl font-extrabold text-blue-500"> Runus </div>
                            <p className="font-sans text-4xl pt-12"> 
                                Fast and secure blockchain sollution 
                                for users payment and access on your 
                                application
                            </p>  
                            <div className="max-w-lg">
                                <p className="font-sans text-xl pt-12 text-slate-400">
                                    This interface has the sole purpose to show 
                                    an implementation example of our solution for a 
                                    simple SaaS that manages users access to different 
                                    services that he offers.
                                </p>
                            </div>
                        </div>

                        <div>
                            <Image
                                src={access}
                                alt="Picture of the author"
                                width="1760px"
                                loading="eager"
                                height="1100px"
                            />        
                        </div> 
                    </div>
                </div>
            </div>
            <div className="pt-16"></div>
            <hr/>
            <div className="flex justify-center bg-gradient-to-r from-cyan-50 to-blue-500">
                <div className="max-w-2xl pt-16">
                    <TiresDescription
                     title={"Free tire"}
                     description={
                        "User has to simply send a transaction and pay the gas fees for it at the moment which are extremly low on polygon."
                     }
                     way={"/free"}
                     id={0}
                    />
                    <TiresDescription
                     title={"Standard tire"}
                     description={
                        "User has to pay by sending tokens to contract address. Access status displayed with icon. After user pays, he will get access to standard infographic"
                     }
                     way={"/standard"}
                     id={1}
                    />
                    <TiresDescription
                     title={"Premium tire"}
                     description={
                        "User has to pay by sending tokens to contract address. Access status displayed with icon. After user pays, he will get access to premium infographic"
                     }
                     way={"/premium"}
                     id={2}
                    />
                    
                </div>  
            </div>
            <hr/>
            <div className="flex justify-center">
                <div className="max-w-7xl">
                    <div className="grid grid-cols-3 gap-4">
                        <AccessCard 
                            type="Free"
                            free={true}
                            standard={false}
                            premium={false}
                            id={0}
                            price={0}
                        >
                            Get access to the free features of this application without paying.
                        </AccessCard>

                        <AccessCard 
                            type="Standard"
                            free={true}
                            standard={true}
                            premium={false}
                            id={1}
                            price={0.1}
                        >
                            Get access to the standard features of this application.
                        </AccessCard>

                        <AccessCard 
                            type="Premium"
                            free={true}
                            standard={true}
                            premium={true}
                            id={2}
                            price={0.2}
                        >
                            Get access to the premium features of this application.
                        </AccessCard>
                    </div>
                </div>
            </div>
        </>
    );
}