"use client"
import Image from "next/image"
import cancelBtn from '@/assets/icons8-cutlery-24.png'
import bookmark from '@/assets/icons8-add-bookmark-30-whitw.png'
import { Button } from "@/components/ui/button"
import { Raleway, Rubik, Chakra_Petch } from "next/font/google"
import { useContext, useEffect } from "react"
import { GlobalContext } from "@/context/Context"
import { Context } from "vm"
import test from '@/assets/pexels-rdne-stock-project-6645920.jpg'
import { useSessionStorage } from "@/hooks/useSessionStorage"
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
    const { openFoodTab, setOpenFoodTab, setSavedFoods, savedFoods } = useContext<Context>(GlobalContext)
    const { foodCardDetails } = useContext<Context>(GlobalContext)
    const { getItem, setItem } = useSessionStorage("savedRecipes")



    const handleSaveLater = (recipe: object) => {

        setSavedFoods((prevSavedFoods: any) => {
            const updatedFoods = [...prevSavedFoods, recipe];
            return updatedFoods;
        });
    }


    useEffect(() => {

        savedFoods.length !== 0 && setItem(savedFoods, "savedRecipes")

    }, [savedFoods])


    useEffect(() => {
        setSavedFoods(getItem("savedRecipes"))

    }, [])

    return (
        <>
            <div className={`w-full h-full ${openFoodTab} top-0 z-50 fixed bg-[#edeff3] dark:bg-[#1c1b22] overflow-y-auto`}>

                {/* Cancel button --> */}

                <Image className="absolute top-2 left-12 lg:left-10 lg:top-5  rounded-full hover:opacity-80 hover:bg-gray-300 transition-all ease-linear" src={cancelBtn} alt="" width={35} height={35} onClick={() => setOpenFoodTab('hidden')} />

                <div className="w-full h-full md:flex md:justify-center md:p-3" style={rubik.style}>
                    <div className="flex items-center flex-col md:flex-row md:items-start lg:w-[75%] md:gap-7">
                        <div className="w-[85%] h-[40vh] md:h-[55vh] lg:h-[67vh] bg-black mt-4 rounded-lg">
                            <Image src={foodCardDetails?.recipe.image || test} alt="hi" width={100} height={100} className="object-cover object-center w-full h-full rounded-lg" />
                        </div>

                        <div className="place-self-start mt-5 md:mt-10 w-full px-5">
                            <div className="flex justify-between">
                                <h1 className="text-2xl font-bold md:text-4xl text-[#020e22] dark:text-[#0cdeed]">{foodCardDetails?.recipe.label}</h1>
                                {/* Save later Button */}

                                <Button variant={"ghost"} className="bg-[#a2c3fb]" onClick={() => handleSaveLater(foodCardDetails)}>
                                    <Image src={bookmark} alt="" width={100} height={100} className="w-5 mr-2"></Image>
                                    <span>Save</span>
                                </Button>
                            </div>
                            <h5 className="text-sm mt-5 text-gray-500 dark:text-[#72b309]">by {foodCardDetails?.recipe.source}</h5>

                            <div className="flex justify-around mt-5 md:mt-10">
                                <div className="text-center border-r border-neutral-300 w-full rounded-md bg-[#be094b] mx-2 py-2">
                                    <h2 className="text-2xl md:text-5xl font-semibold text-white">{foodCardDetails?.recipe.ingredients.length}</h2>
                                    <p className="text-xs md:text-sm text-[#4fc809]" style={chakra.style}>Ingredients</p>
                                </div>

                                <div className="text-center w-full border-r border-neutral-300 rounded-md bg-[#020e22] text-[#4fc809] mx-2 py-2">
                                    <h2 className="text-2xl md:text-5xl font-semibold ">{
                                        foodCardDetails?.recipe.totalTime == 0 ? '5' : foodCardDetails?.recipe.totalTime
                                    }</h2>
                                    <p className="text-xs md:text-sm text-white" style={chakra.style}>Minutes</p>
                                </div>
                                <div className="text-center w-full  border-neutral-300  rounded-md bg-[#4fc809] mx-2 py-2">
                                    <h2 className="text-2xl md:text-5xl font-semibold text-[#be094b]">{`${Math.round(foodCardDetails?.recipe.calories)}`}</h2>
                                    <p className="text-xs md:text-sm" style={chakra.style}>Calories</p>
                                </div>

                            </div>
                            <div className="flex gap-2 mt-5 md:mt-10 px-4" style={chakra.style}>
                                {
                                    foodCardDetails?.recipe.dietLabels.length != 0 && <Button variant={'outline'} className="text-sm px-1 border-neutral-300 rounded-lg bg-[#a2c3fb] dark:bg-[#e7fcfe] dark:text-black">{foodCardDetails?.recipe.dietLabels}</Button>
                                }

                                {foodCardDetails?.recipe.cuisineType && <Button variant={'outline'} className="text-sm px-1 border-neutral-300 rounded-lg bg-[#a2c3fb] dark:bg-[#e7fcfe] dark:text-black">{foodCardDetails?.recipe.cuisineType}</Button>}
                                {foodCardDetails?.recipe.dishType && <Button variant={'outline'} className="text-sm px-1 border-neutral-300 rounded-lg bg-[#a2c3fb] dark:bg-[#e7fcfe] dark:text-black">{foodCardDetails?.recipe.dishType}</Button>}

                            </div>
                            <div className="mt-5 md:mt-10 px-2 border-b pb-4 border-neutral-300">
                                <h3 className="text-base md:text-xl  font-semibold dark:text-[#f64183]">Ingredients</h3>
                            </div>

                            <div className="mt-5 md:mt-10 px-8 w-full text-sm md:text-base " style={raleway.style}>
                                <div className="my-5">
                                    {
                                        foodCardDetails?.recipe.ingredients.map((items: any, i: number) => {
                                            return <li key={i}>{items.text}</li>
                                        })
                                    }
                                </div>

                                <span className="dark:text-[#0cdeed] text-sm font-bold">Find More on: </span>
                                <a href={foodCardDetails?.recipe.shareAs || ""} target="_blank" rel="noopener noreferrer" className="dark:text-[#4fc809] hover:underline text-xs">{foodCardDetails?.recipe.shareAs}</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeDetails
