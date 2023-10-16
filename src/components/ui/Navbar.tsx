'use client'
import Image from "next/image"
import logo from '../../assets/logo.png'
import toggleBtn from '../../assets/icons8-dark-mode-31.png'
import saved from '../../assets/icons8-save-40.png'
import { Poppins } from "next/font/google"
import { useRouter } from 'next/navigation'
const robotoMono = Poppins({
    subsets: ['latin'],
    weight: ['400']
})


const Navbar = () => {

    const router = useRouter()

    return (
        <>
            <nav className="h-[8%]" style={robotoMono.style}>
                <ul className="flex items-center justify-between px-6">
                    <div className="flex gap-2 items-center">
                        <Image src={logo} alt="" width={100} height={100} className="w-9 object-cover" />
                    </div>

                    <div className="lg:flex gap-2 md:gap-4 lg:gap-8 text-lg hidden" >
                        <li className="cursor-pointer py-4 px-4 hover:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:bg-slate-50">
                            Home
                        </li>
                        <li className="cursor-pointer py-4 px-4 hover:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:bg-slate-50" onClick={() => router.push('recipes')}>
                            Recipes
                        </li>
                    </div>

                    <div className="flex items-center gap-3">
                        <button>
                            <Image src={toggleBtn} alt="" width={100} height={100} className="w-5" />
                        </button>
                        <button className="relative hidden lg:inline-flex items-center justify-start px-2 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                            <span className="absolute top-0 right-0 inline-block w-3  h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <Image src={saved} alt="" className="w-6 z-10" />
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-sm">

                                recipes
                            </span>
                        </button>
                    </div>
                </ul>

            </nav>
        </>
    )
}

export default Navbar