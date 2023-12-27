"use client"
import Image from "next/image"
import recipes_dark from '../../assets/icons8-recipe-30-white.png'
import Home from '../../assets/icons8-home-30.png'
import bookmarks from '../../assets/icons8-add-bookmark-30.png'
import { useRouter } from "next/navigation"
const MobileNavBar = () => {

    const router = useRouter()
    return (
        <>
            <div className="fixed bottom-0 w-full h-[5vh] bg-white border-t border-gray-400 flex flex-col justify-center lg:hidden z-40">
                <nav>
                    <ul className="flex justify-around w-full h-full">
                        {/* Recipes Page Button */}
                        <button onClick={() => router.push("/recipes")}>  <Image src={recipes_dark} alt="" className="w-7 cursor-pointer hover:opacity-70 duration-75 ease-in" /></button>
                        {/* Home page Button */}

                        <button onClick={() => router.push("/")}><Image src={Home} alt="" className="w-7 cursor-pointer hover:opacity-60 duration-75 ease-in" /></button>
                        <button onClick={() => console.log("hi")}> <Image src={bookmarks} alt="" className="w-7 cursor-pointer hover:opacity-60 duration-75 ease-in" /> </button>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MobileNavBar