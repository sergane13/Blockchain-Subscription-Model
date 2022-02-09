import AccessCard from "./paymentCards.js";
import Image from "next/image";
import access from "../public/access.jpg";
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
                    <img className="w-full md:w-4/5 z-50" src="blockchain.png" />
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
                            AUTOMATIC
                        </p>
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            PAYMENT AND ACCESS MANAGEMENT
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            The payment and access contract works together for a fluent and fast workflow that can be implemented in minutes by any business.
                        </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-start">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Action
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                            <br/>
                            SAFE
                        </p>
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            KEEPING USERS PERSONAL DATA
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Access is given based on users addresses, the only information we need to manage permissions on different applications.
                        </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-center">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Action
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                            <br/>
                            SECURE
                        </p>
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            ECOSYSTEM
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Using the power of blockchain to maintain the manipulation of contracts in hands of the businesses.
                        </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-end">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Action
                        </button>
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
                            src={access}
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
                            src={access}
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
                            src={access}
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
                            src={access}
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

                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-6">            
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark">CONNECT</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">First step</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">User connects his/her wallet to the application so you can retrieve his/her data such as an address, balance, chainld,</p>
                            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg> Connect</a>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text">CHOOSE TIER</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Second step</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">User decides which tier to choose and press the pay button</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text">CONFIRM TRANSACTION</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Third step</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">User confirms the transaction with the required value and also pays the gas fees.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text">PAYMENT IS MADE</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Fourth step</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">The tokens are sent to the payment contract and stored there until you decide to withdraw them</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text">ACCESS GRANTED</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Fifth step</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Access is given for the address that initiated the payment until a specified date</p>
                        </li>
                    </ol>
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