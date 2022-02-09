import AccessCard from "./paymentCards.js";
import Image from "next/image";
import saas_access from "../public/saas_access.png";
import community_access from "../public/community_access.png";
import newsletter_access from "../public/newsletter_access.png";
import TiresDescription from "./tiresCard.js";


export default function MainPage()
{
    return(
        <>  
            <div className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <h1 className="my-4 text-5xl font-bold leading-tight">
                        RUNUS
                    </h1>
                    <p className="leading-normal text-2xl mb-8">
                    Blockchain-based user access and payment for web applications
                    </p>
                    <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Subscribe
                    </button>
                    </div>
                    <div className="w-full md:w-3/5 py-6 text-center">
                    <img className="w-full md:w-4/5 z-50" src="blockchain.svg" />
                    </div>
                </div>
            </div>
            <div className="relative -mt-12 lg:-mt-24">
                <img src="/bg.svg" alt="" />
            </div>

            <section className="bg-white border-b py-8">
                <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Benefits
                    </h1>
                    <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                <br/>
                                Automatic
                            </p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">
                                Payment and access
                            </div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                The payment and access contract works together for a fluent and fast workflow that can be implemented in minutes by any business.
                            </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-center">
                                <img className="w-full md:w-3/5 z-30" src="automatic.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                <br/>
                                Easy
                            </p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">
                                To use
                            </div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                Access is given based on users addresses, the only information we need to manage permissions on different applications.
                            </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-center">
                                <img className="w-full md:w-3/5 z-30" src="easy_to_use.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                <br/>
                                Secure
                            </p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">
                                Ecosystem
                            </div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                Using the power of blockchain to maintain the manipulation of contracts in hands of the businesses.
                            </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-center">
                                <img className="w-full md:w-3/5 z-30" src="secure.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Use cases
                    </h1>
                    <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap">
                    <div className="w-5/6 sm:w-1/2 p-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            SAAS BUSINESSES
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Managing different tiers like free, standard, and premium.
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 p-6">
                        <Image
                            src={saas_access}
                            alt="Picture of the author"
                            width="1760px"
                            loading="eager"
                            height="1100px"
                        />     
                    </div>
                    </div>
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <Image
                            src={community_access}
                            alt="Picture of the author"
                            width="1760px"
                            loading="eager"
                            height="1100px"
                        />      
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <div className="align-middle">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            COMMUNITY MEMBERSHIP
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Users pay for premium content monthly.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-wrap">
                    <div className="w-5/6 sm:w-1/2 p-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            NEWSLETTER SUBSCRIPTION
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Users pay and get access to the latest news.
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 p-6">
                        <Image
                            src={newsletter_access}
                            alt="Picture of the author"
                            width="1760px"
                            loading="eager"
                            height="1100px"
                        />       
                    </div>
                    </div>
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <Image
                            src={game_access}
                            alt="Picture of the author"
                            width="1760px"
                            loading="eager"
                            height="1100px"
                        />      
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <div className="align-middle">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            GAMES ACCESS
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Forget about keys and get access to your favorite game.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="bg-white border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Workflow
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <h1 className="text-4xl text-center font-semibold mb-6">Package status</h1>
                    <div className="container">
                    <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

                        <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-indigo-500/75 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow text-center">
                            <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-indigo-500/75 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1">Connect to Metamask</h3>
                            <p className="leading-tight text-justify w-full">
                            User connects his/her wallet to the application so you can retrieve his/her data such as an address, balance, chainld, ...
                            </p>
                        </div>
                        </div>

                        <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-indigo-500/75 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow text-center">
                            <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-indigo-500/75 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1">Choose tier</h3>
                            <p className="leading-tight text-justify w-full">
                            User decides which tier to choose and press the pay button.
                            </p>
                        </div>
                        </div>

                        <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-indigo-500/75 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow text-center">
                            <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-indigo-500/75 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1">Confirm transaction</h3>
                            <p className="leading-tight text-justify w-full">
                            User confirms the transaction with the required value and also pays the gas fees.
                            </p>
                        </div>
                        </div>

                        <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-indigo-500/75 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow text-center">
                            <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-indigo-500/75 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1">Payment transaction</h3>
                            <p className="leading-tight text-justify w-full">
                            The tokens are sent to the payment contract and stored there until you decide to withdraw them.
                            </p>
                        </div>
                        </div>

                        <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-indigo-500/75 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow text-center">
                            <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-indigo-500/75 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1">Access granted</h3>
                            <p className="leading-tight text-justify w-full">
                            Access is given for the address that initiated the payment until a specified date.
                            </p>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-8">
                <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Demo
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                        <AccessCard 
                            type="Free"
                            free={true}
                            standard={false}
                            premium={false}
                            id={0}
                            price={0}
                            centerCard={false}
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
                            centerCard={true}
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
                            centerCard={false}
                        >
                            Get access to the premium features of this application.
                        </AccessCard>
                    </div>
                </div>
            </section>
        </>
    );
}

/*
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
*/