"use client"
import Image from "next/image"
import recipes_dark from '../../assets/icons8-recipe-30-white.png'
import Home from '../../assets/icons8-home-30.png'
import bookmarks from '../../assets/icons8-add-bookmark-30.png'
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { Context } from "vm"
import { GlobalContext } from "@/context/Context"
const MobileNavBar = () => {

    const router = useRouter()
    const { setOpenSaveLater } = useContext<Context>(GlobalContext)

    const handleSearchFabsBtn = () => {
        router.push("/recipes")
        setOpenSaveLater("hidden")
    }
    const handleHomeFabsBtn = () => {
        router.push("/")
        setOpenSaveLater("hidden")
    }
    return (
        <>
            <div className="fixed bottom-0 w-full h-[5vh] bg-white border-t border-gray-400 flex flex-col justify-center lg:hidden z-50">
                <nav>
                    <ul className="flex justify-around w-full h-full">
                        {/* Recipes Page Button */}
                        <button onClick={handleSearchFabsBtn}>  <Image src={recipes_dark} alt="" className="w-7 cursor-pointer hover:opacity-70 duration-75 ease-in" /></button>
                        {/* Home page Button */}

                        <button onClick={handleHomeFabsBtn}><Image src={Home} alt="" className="w-7 cursor-pointer hover:opacity-60 duration-75 ease-in" /></button>
                        <button onClick={() => setOpenSaveLater("opacity-100")}> <Image src={bookmarks} alt="" className="w-7 cursor-pointer hover:opacity-60 duration-75 ease-in" /> </button>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MobileNavBar