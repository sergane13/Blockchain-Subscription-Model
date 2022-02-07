import Link from 'next/link'


export default function NavBar({children})
{
    return(
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between z-40 py-4 bg-gray-100 text-gray-500 focus:text-gray-700 shadow-lg">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div className="container-fluid">
                        <Link href="/">
                            <a className="text-xl text-black font-semibold" href="/">Runus</a>
                        </Link>
                        <div className="absolute inset-y-0 right-0">
                            {children}
                        </div>
                        <div className="inline ml-20 hover:text-blue-600">
                            <Link href="/free">
                                <a>Free</a>
                            </Link>
                        </div>
                        <div className="inline ml-4 hover:text-blue-600">
                            <Link href="/standard">
                                <a>Standard</a>
                            </Link>
                        </div>
                        <div className="inline ml-4 hover:text-blue-600">
                            <Link href="/premium">
                                <a>Premium</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>  
    );
}