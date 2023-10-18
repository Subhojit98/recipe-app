import Image from "next/image"
import test from '../../assets/pexels-rdne-stock-project-6645920.jpg'
import bookmark from '../../assets/icons8-add-bookmark-30.png'
import { Button } from "../ui/button"
import { Raleway, Rubik, Chakra_Petch } from "next/font/google"

const raleway = Raleway({
    subsets: ['latin'],
    weight: '400'
})
const rubik = Rubik({
    subsets: ['latin'],
    weight: '400'
})

const chakra = Chakra_Petch({
    subsets: ['latin'],
    weight: '400'
})
const RecipeDetails = () => {
    return (
        <>
            <div className="w-full h-full md:flex md:justify-center md:p-3" style={rubik.style}>
                <div className="flex items-center flex-col md:flex-row md:items-start lg:w-[75%] md:gap-7">
                    <div className="w-11/12 xl:w-[80%] h-[40vh] md:h-[55vh] lg:h-[67vh] bg-black mt-4 rounded-lg">
                        <Image src={test} alt="" width={0} height={0} className="object-cover object-center w-full h-full rounded-lg" />
                    </div>

                    <div className="place-self-start mt-5 md:mt-10 w-full px-5">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold md:text-4xl">Buger careb</h1>

                            <Button variant={'secondary'}>
                                <Image src={bookmark} alt="" width={100} height={100} className="w-5 mr-2"></Image>
                                <span>Save</span>
                            </Button>
                        </div>
                        <h5 className="text-sm mt-5 text-gray-500">by me and you</h5>

                        <div className="flex justify-around mt-5 md:mt-10">
                            <div className="text-center border-r border-neutral-300 w-full">
                                <h2 className="text-2xl md:text-5xl font-semibold">100</h2>
                                <p className="text-xs md:text-sm" style={chakra.style}>cdss</p>
                            </div>

                            <div className="text-center w-full border-r border-neutral-300">
                                <h2 className="text-2xl md:text-5xl font-semibold">1000</h2>
                                <p className="text-xs md:text-sm" style={chakra.style}>cdss</p>
                            </div>
                            <div className="text-center w-full">
                                <h2 className="text-2xl md:text-5xl font-semibold">1050</h2>
                                <p className="text-xs md:text-sm" style={chakra.style}>cdss</p>
                            </div>

                        </div>
                        <div className="flex gap-2 mt-5 md:mt-10 px-4" style={chakra.style}>
                            <Button variant={'outline'} className="text-sm px-1 border-neutral-300 rounded-lg">cdsbhg</Button>
                            <Button variant={'outline'} className="text-sm px-1 border-neutral-300 rounded-lg">cdsbhgdfsfcsd</Button>
                            <Button variant={'outline'} className="text-sm px-1 border-neutral-300 rounded-lg">cdsbhg</Button>

                        </div>
                        <div className="mt-5 md:mt-10 flex justify-between px-2 border-b pb-4 border-neutral-300">
                            <h3 className="text-base md:text-xl  font-semibold">Ingredience</h3>
                            <p className="text-sm text-gray-700">Serving for 2</p>

                        </div>

                        <div className="mt-5 md:mt-10 px-8 w-full text-sm md:text-base" style={raleway.style}>
                            <div className="my-5">
                                <li>hjbwj</li>
                                <li>hjbwj</li>
                                <li>hjbwj</li>
                                <li>hjbwj</li>
                                <li>hjbwj</li>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default RecipeDetails
