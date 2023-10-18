import { Raleway, Rubik } from "next/font/google"

const raleway = Raleway({
    subsets: ['latin'],
    weight: '400'
})

const FoodNavigation = () => {
    return (
        <>
            <div className="w-full h-[7vh] lg:h-[9vh] flex items-center justify-center" style={raleway.style}>
                <nav>
                    <ul className="flex gap-5 mobileScreen:gap-14 md:gap-20 lg:gap-32 text-sm md:text-base text-[#4f826a] font-semibold relative border-b-[1px] border-neutral-400">

                        <li className="cursor-pointer py-3 border-b-[1.5px] border-transparent hover:text-black hover:border-b-[1.5px]  hover:border-black duration-100 ease-in-out transition-all ml-3">
                            Breakfast
                        </li>
                        <li className="cursor-pointer py-3 hover:border-b-[1.5px] hover:text-black  border-bl border-black duration-100 ease-in-out transition-all">
                            Lunch
                        </li>
                        <li className="cursor-pointer py-3 hover:border-b-[1.5px] hover:text-black  border-bl border-black duration-100 ease-in-out transition-all">
                            Snacks
                        </li>
                        <li className="cursor-pointer py-3 hover:border-b-[1.5px] hover:text-black  border-bl border-black duration-100 ease-in-out transition-all">
                            Dinner
                        </li>
                        <li className="cursor-pointer py-3 hover:border-b-[1.5px] hover:text-black  border-bl border-black duration-100 ease-in-out transition-all mr-3">
                            Teatime
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default FoodNavigation