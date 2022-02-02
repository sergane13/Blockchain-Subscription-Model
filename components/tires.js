import Link from "next/link";

export default function TiresDescription({title, description, way, access})
{
    return(
        <div className="container bg-white mx-auto px-4 drop-shadow-md w-96 pt-4 pb-4 rounded-lg my-20">
            <div className="text-xl inline">
                {title}
            </div>
            {
                access ?
                <div className="inline absolute inset-y-3 right-4">
                    <div className="bg-red-600 text-white px-2 py-1 rounded-lg">
                        No Access
                    </div>
                </div> : 
                <div className="inline absolute inset-y-3 right-4">
                    <div className="bg-green-600 text-white px-2 py-1 rounded-lg">
                        Access
                    </div>
                </div>
            }
            
            <div className="pt-4 text-slate-500">
                {description}
            </div>
            <div className="pt-4">
                <button className="bg-blue-500 rounded-lg font-bold text-white text-center px-3 py-2 transition duration-100 ease-in-out hover:bg-blue-600 mr-6"> 
                <Link href={way}>
                    <a>See feature</a>
                </Link>
                </button>
            </div>
        </div>
    );
}