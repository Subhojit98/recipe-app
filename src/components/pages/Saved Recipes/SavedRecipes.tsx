"use client"
import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import clock from '../../../assets/icons8-timer-48.png'
import saveLater from '../../../assets/icons8-add-bookmark-30.png'
import { useContext, useEffect, useState } from 'react'
import { Context } from 'vm'
import { GlobalContext } from '@/context/Context'
import RecipeDetails from '../recipes_about/RecipeDetails'
import { useSessionStorage } from '@/hooks/useSessionStorage'
const SavedRecipes = () => {
    const { openSaveLater, setOpenFoodTab, setFoodCardDetails } = useContext<Context>(GlobalContext)
    const { getItem, setItem } = useSessionStorage("savedRecipes")
    const [isStoredData, setIsStoreData] = useState(false)

    const handleFoodCard = (data: string[]) => {
        setOpenFoodTab('fixed')
        setFoodCardDetails(data)
    }

    useEffect(() => {
        if (getItem("savedRecipes").length > 0) {
            setIsStoreData(true)
        }
    }, [setItem])
    return (
        <>
            <div className={`w-full min-h-screen ${openSaveLater} top-0 fixed z-40 bg-white dark:bg-[#1c1b22] overflow-y-auto`}>
                <Navbar />

                <div className='flex justify-center w-full h-full mt-10'>
                    <div className="w-[85%] h-full grid grid-cols-2 mobileScreen:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-3">
                        {
                            isStoredData && getItem("savedRecipes").map((data: any, i: number) => {
                                return <div key={i} className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg">
                                    <Card className="w-full h-full rounded-lg">
                                        <div className="w-full h-2/3" onClick={() => handleFoodCard(data)}>
                                            <Image src={data?.recipe.image} alt="" width={100} height={100}
                                                className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                                        </div>
                                        <div className="flex flex-col justify-between h-[30%]">
                                            <CardHeader className="mt-2 ml-3">
                                                <CardTitle className="text-sm md:text-base">{data?.recipe.label.length > 30 ? `${data?.recipe.label.substring(0, 30)} ..` : data?.recipe.label}</CardTitle>
                                            </CardHeader>
                                            <div className="w-full flex justify-between">
                                                <div className="flex gap-1 items-center ml-2">
                                                    <Image src={clock} alt="" className="w-7" />
                                                    <h3 className="text-xs font-mono dark:text-blue-600">{data?.recipe.totalTime == 0 ? '< 5 Minutes' :
                                                        data?.recipe.totalTime <= 59 ? data?.recipe.totalTime + " Minutes" :
                                                            Math.floor(data?.recipe.totalTime / 60) + " Hours"}</h3>
                                                </div>

                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            })



                        }
                        {
                            !isStoredData && <div className="w-full">
                                <h1 className="text-2xl font-bold text-white">No Saved Recipes</h1>
                            </div>
                        }
                    </div>
                </div>
            </div>

            {/* Saved Recipe details */}
            <RecipeDetails />
        </>
    )
}

export default SavedRecipes
