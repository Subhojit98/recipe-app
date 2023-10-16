import Image from "next/image"
import recipes from '../../assets/icons8-recipe-30.png'
import Home from '../../assets/icons8-home-30.png'
import bookmarks from '../../assets/icons8-add-bookmark-30.png'
const MobileNavBar = () => {
    return (
        <>
            <div className="fixed bottom-0 w-full h-[5vh] bg-white border-t border-gray-400 flex flex-col justify-center lg:hidden z-40">
                <nav>
                    <ul className="flex justify-around w-full h-full">
                        <Image src={recipes} alt="" className="w-7 cursor-pointer hover:opacity-70 duration-75 ease-in" />
                        <Image src={Home} alt="" className="w-7 cursor-pointer hover:opacity-60 duration-75 ease-in" />
                        <Image src={bookmarks} alt="" className="w-7 cursor-pointer hover:opacity-60 duration-75 ease-in" />
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MobileNavBar