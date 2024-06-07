'use client'
import Image from "next/image"
import filterImg from '../assets/icons8-filter-48.png'
import Clock from '../assets/icons8-timer-48.png'
import calories from '../assets/icons8-healthy-food-calories-calculator-25.png'
import diet from '../assets/icons8-healthy-food-30.png'
import health from '../assets/icons8-health-24.png'
import meal from '../assets/icons8-food-bar-30-whitw.png'
import cuisine from '../assets/icons8-globe-32-white.png'
import { Button } from "@/components/ui/button"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { caloriesTags, cookingTimeTags, cuisineTags, dietsTags, helthChoiceTags, mealTags } from "@/app/Data/Tags/Tags"
import { useContext } from "react"
import { Context } from "vm"
import { GlobalContext } from "@/context/Context"
import { Raleway } from "next/font/google"
const raleway = Raleway({
    subsets: ['latin'],
    weight: '400'
})
const MobileSideBar = () => {
    const { setFilterType, setFilterData, filterText, setFilterText } = useContext<Context>(GlobalContext)

    const handleFilter = (data: string | number, catagory: string) => {

        catagory == 'totalTime' ? setFilterText(`${data} minutes`) : setFilterText(data)

        setFilterType(catagory)
        setFilterData(data)

    }

    return (
        <>

            <div className="flex gap-3">
                <Image src={filterImg} alt="" width={100} height={100} className="w-7" />
                <h3 className="dark:text-white">Filter</h3>
            </div>

            <input type="search" placeholder="Filter by" className="py-3 default-none px-4 border mt-4 border-neutral-700 dark:text-[#0cdeed] outline-none" value={filterText} />

            <ul className="space-y-2 font-medium" style={raleway.style}>
                <li className="mt-3">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex gap-4">
                                    <Image src={Clock} alt="" width={100} height={100} className="w-6" />

                                    <h3 className="text-base font-semibold dark:text-[#e7fcfe]">Cooking Time</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {/*  Cooking time tags -->  */}

                                <div className="grid grid-cols-3 gap-1">
                                    {
                                        cookingTimeTags.map((cookTime, i) => {
                                            return <Button key={i} variant="default" className=" text-xs rounded-lg  bg-[#a2c3fb] dark:bg-[#fc1a6c] active:bg-black" onClick={
                                                () => handleFilter(cookTime, 'totalTime')
                                            }>{cookTime} minutes</Button>

                                        })
                                    }
                                </div>
                            </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                </li>
                <li >
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex gap-4">
                                    <Image src={calories} alt="" width={100} height={100} className="w-6" />

                                    <h3 className="text-base font-semibold dark:text-[#e7fcfe]">Calories</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {/*  Calories  tags -->  */}

                                <div className="grid grid-cols-3 gap-1 justify-center">
                                    {
                                        caloriesTags.map((calories, i) => {
                                            return <div key={i}>
                                                <Button variant="default" className=" text-xs rounded-lg bg-[#a2c3fb] dark:bg-[#fc1a6c] active:bg-black" onClick={() => handleFilter(calories, 'calories')}>{calories}</Button>

                                            </div>
                                        })
                                    }
                                </div>
                            </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                </li>
                <li>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex gap-4">
                                    <Image src={diet} alt="" width={100} height={100} className="w-6" />

                                    <h3 className="text-base font-semibold dark:text-[#e7fcfe]">Diet</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {/*  Diet  tags -->  */}

                                <div className="grid grid-cols-3 gap-1">
                                    {
                                        dietsTags.map((diet, i) => {
                                            return <div key={i}>
                                                <Button variant="default" className=" text-xs rounded-lg bg-[#a2c3fb] dark:bg-[#fc1a6c] active:bg-black" onClick={() => handleFilter(diet, 'dietLables')}>{diet.split('').splice(0, 8)}..</Button>

                                            </div>
                                        })
                                    }
                                </div>
                            </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                </li>
                <li>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex gap-4">
                                    <Image src={health} alt="" width={100} height={100} className="w-6" />

                                    <h3 className="text-base font-semibold dark:text-[#e7fcfe]">Health</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {/*  Health  tags -->  */}

                                <div className="grid grid-cols-3 gap-1">
                                    {
                                        helthChoiceTags.slice(12, 18).map((health, i) => {
                                            return <div key={i}>
                                                <Button variant="default" className=" text-xs rounded-lg bg-[#a2c3fb] dark:bg-[#fc1a6c] active:bg-black" onClick={() => handleFilter(health, 'healthLabels')}>{health.split('').splice(0, 8)}..</Button>

                                            </div>
                                        })
                                    }
                                </div>
                            </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                </li>
                <li>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex gap-4">
                                    <Image src={meal} alt="" width={100} height={100} className="w-6" />

                                    <h3 className="text-base font-semibold dark:text-[#e7fcfe]">Meal</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {/*  Meal  tags -->  */}

                                <div className="grid grid-cols-3 gap-1">
                                    {
                                        mealTags.map((meals, i) => {
                                            return <div key={i}>
                                                <Button variant="default" className=" text-xs rounded-lg bg-[#a2c3fb] dark:bg-[#fc1a6c] active:bg-black" onClick={() => handleFilter(meals, 'mealType')}>{meals}</Button>

                                            </div>
                                        })
                                    }
                                </div>
                            </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                </li>
                <li>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex gap-4">
                                    <Image src={cuisine} alt="" width={100} height={100} className="w-6" />

                                    <h3 className="text-base font-semibold dark:text-[#e7fcfe]">Cuisine</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {/*  Cuisine  tags -->  */}

                                <div className="grid grid-cols-3 gap-1">
                                    {
                                        cuisineTags.map((cuisine, i) => {
                                            return <div key={i}>
                                                <Button variant="default" className=" text-xs rounded-lg bg-[#a2c3fb] dark:bg-[#fc1a6c] active:bg-black" onClick={() => handleFilter(cuisine, 'cuisineType')}>{cuisine}</Button>

                                            </div>
                                        })
                                    }
                                </div>
                            </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                </li>

            </ul>

            <div className="mt-14 mb-10 flex gap-5 justify-center">
                <Button variant="default" className="rounded-lg bg-[#be094b] hover:bg-[#dd6a94] dark:text-white" onClick={() => setFilterText("")}>Clear </Button>

            </div>
        </>
    )
}

export default MobileSideBar
