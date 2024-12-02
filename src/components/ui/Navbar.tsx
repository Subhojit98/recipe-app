'use client'
import Image from "next/image"
import logo from '../../assets/logo.png'
import saved from '../../assets/icons8-save-40.png'
import { Poppins, Roboto_Mono } from "next/font/google"
import { useRouter } from 'next/navigation'
import { GlobalContext } from "@/context/Context"
import { Context } from "vm"
import { useContext } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./button"

const popins = Poppins({
    subsets: ['latin'],
    weight: ['400']
})
const roboto = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400']
})

const Navbar = () => {


    const router = useRouter()
    const { setTheme } = useTheme()

    const changeFabsBtnToHome = () => {
        router.push('/')
        setOpenSaveLater('hidden')
    }
    const changeFabsBtnToRecipes = () => {
        router.push('recipes')
        setOpenSaveLater('hidden')
    }
    const { setOpenSaveLater } = useContext<Context>(GlobalContext)

    return (
        <>
            <nav className="h-[8%] w-full border-b-2 border-neutral-300" style={popins.style}>
                <ul className="flex items-center justify-between px-6">
                    <div className="flex gap-8 items-center cursor-pointer" onClick={changeFabsBtnToHome}>
                        <Image src={logo} alt="" width={100} height={100} className="w-9 object-cover" />
                        <span className="text-xl font-extrabold text-[#020e22] dark:text-[#be094b]" style={roboto.style} >WISK</span>
                    </div>

                    <div className="lg:flex gap-3 md:gap-4 lg:gap-8 text-base hidden text-[#020e22] dark:text-[#0cdeed]" >
                        <li className="cursor-pointer relative py-5 px-5 after:content-[''] hover:after:bg-[#be094b] after:w-0 hover:after:w-full after:h-[2.5px] dark:after:h-[4px] after:absolute after:bottom-0 after:left-0 after:ease-out after:duration-200 hover:text-neutral-500 dark:hover:text-white hover:bg-gray-100 hover:dark:bg-[#72b309]" onClick={changeFabsBtnToHome}>
                            Home
                        </li>
                        <li className="cursor-pointer py-5 px-5 relative after:content-[''] hover:after:bg-[#be094b]  after:w-0 hover:after:w-full after:h-[2.5px] dark:after:h-[4px] after:absolute after:bottom-0 after:left-0 after:ease-out after:duration-200 hover:text-neutral-500 dark:hover:text-white hover:bg-gray-100 hover:dark:bg-[#72b309]" onClick={changeFabsBtnToRecipes}>
                            Recipes
                        </li>
                    </div>

                    <div className="flex items-center gap-8">

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* For Going to SaveLater Tab -> */}

                        <button className="relative hidden lg:inline-flex items-center justify-start px-2 py-2 overflow-hidden font-medium transition-all bg-[#be094b] dark:bg-[#72b309] rounded-xl group" onClick={() => setOpenSaveLater("opacity-100")}>
                            <span className="absolute top-0 right-0 inline-block w-3  h-4 transition-all duration-500 ease-in-out bg-[#a2c3fb] rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <Image src={saved} alt="" className="w-6 z-10" />
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#a2c3fb] dark:bg-[#be094b] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-sm">
                                saved
                            </span>
                        </button>
                    </div>
                </ul>

            </nav>
        </>
    )
}

export default Navbar