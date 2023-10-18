import Image from "next/image"
import mobileHeroImg from '../assets/pexels-yasser-mohamed-4378160.jpg'
import desktopHeroImg from '../assets/pexels-ella-olsson-1640774.jpg'
import SearchBox from "./SearchBox"
import { Poppins } from "next/font/google"

const charka = Poppins({ subsets: ['latin'], weight: '400' })
const Hero = () => {
    return (
        <>
            <div className=" w-full h-[60vh]">
                <div className=" h-full relative mx-1">
                    <Image src={mobileHeroImg} alt="" className="rounded-lg w-full h-full object-cover absolute z-10 md:hidden" />
                    <Image src={desktopHeroImg} alt="" className="rounded-lg w-full h-full object-cover  absolute z-10 hidden md:block" />

                    <div className="relative z-20 flex justify-center items-center h-full" style={charka.style}>
                        <div className="text-center">
                            <h1 className="text-3xl text-white mb-2 lg:mb-4 md:text-[#a06076] md:text-4xl xl:text-5xl">Your Desired Dish ..</h1>
                            <SearchBox />
                            <p className="text-xs text-white mt-2 md:text-[#2f3a3c] md:text-sm">Search any recipe e.g: burger, pizza, sandwich, tost</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero