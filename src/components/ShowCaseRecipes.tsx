"use client"
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import Image from "next/image"
import clock from '@/assets/icons8-timer-48.png'
import saveLater from '@/assets/icons8-add-bookmark-30.png'
import { Roboto } from "next/font/google"
import { GlobalContext } from "@/context/Context"
import { useContext, useEffect } from "react"
import { Context } from "vm"
import CardLoader from "./ui/CardLoader"
import useFoodData from "@/utils/FoodApiService"
import { useSessionStorage } from "@/hooks/useSessionStorage"
const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
})
const ShowCaseRecipes = ({ foodTabData }: any) => {
    //  Context Providers
    const { setOpenFoodTab, setFoodCardDetails, setSavedFoods, savedFoods } = useContext<Context>(GlobalContext)


    //  fetching Data ->
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } = useFoodData(foodTabData)

    // Filling Food Card Details Page ->

    const handleFoodCard = (data: string[]) => {
        setOpenFoodTab('fixed')
        setFoodCardDetails(data)
    }
    // Seting Save-Later Logic -> 
    const { setItem, getItem } = useSessionStorage("savedRecipes")
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
            <div className="w-full h-full flex flex-col items-center justify-center mt-1">
                {
                    !data && <CardLoader />
                }
                <div className="w-full h-full grid grid-cols-2 mobileScreen:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-1 gap-y-3" style={roboto.style}>
                    {

                        data?.pages.flatMap((foodData) => foodData?.hits).map((recipes, i) => {


                            return <div key={i} className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ease-linear">

                                <Card className="w-full h-full rounded-lg">
                                    <div className="w-full h-2/3 " onClick={() => handleFoodCard(recipes)}>
                                        <Image src={recipes.recipe.image} alt="food image" width={100} height={100} placeholder="blur" blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDB1DVdQj1C4RL+6VVkYBRMwAGfrRRRQhvc/9k='
                                            className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                                    </div>

                                    <div className="flex flex-col justify-between h-[30%]">
                                        <CardHeader className="mt-2 ml-3">
                                            <CardTitle className="text-sm md:text-base">{
                                                // sorting the text which is too big.. ->
                                                recipes.recipe.label.length >= 25 ? recipes.recipe.label.split('').splice(0, 25).join("") + '...'
                                                    :
                                                    recipes.recipe.label
                                            }</CardTitle>
                                        </CardHeader>

                                        <div className="w-full flex justify-between">
                                            <div className="flex gap-1 items-center ml-2">
                                                <Image src={clock} alt="" className="w-7" />
                                                <h3 className="text-xs font-mono dark:text-blue-600">{

                                                    recipes.recipe.totalTime == 0 ? '< 5 Minutes' :
                                                        recipes.recipe.totalTime <= 59 ? recipes.recipe.totalTime + " Minutes" :
                                                            Math.floor(recipes.recipe.totalTime / 60) + " Hours"
                                                }
                                                </h3>
                                            </div>

                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <button onClick={() => handleSaveLater(recipes)}><Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" /></button></HoverCardTrigger>
                                                <HoverCardContent>
                                                    Save Later
                                                </HoverCardContent>
                                            </HoverCard>


                                        </div>
                                    </div>

                                </Card>

                            </div>
                        })
                    }

                </div>
                <button className="relative cursor-pointer lg:mb-0 mt-5 inline-flex items-center justify-center w-auto px-3 py-2 md:px-6 md:py-3 lg:px-8 overflow-hidden font-bold text-white text-sm mobileScreen:text-base transition-all duration-500  rounded-md ease bg-[#be094b] hover:from-gray-50 hover:opacity-80" onClick={() => fetchNextPage()}>
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </button>
            </div >

        </>
    )
}

export default ShowCaseRecipes

