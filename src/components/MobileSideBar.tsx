import Image from "next/image"
import filterImg from '../assets/icons8-filter-48.png'
import Clock from '../assets/icons8-timer-48.png'
import ingredients from '../assets/icons8-ingredients-24.png'
import calories from '../assets/icons8-healthy-food-calories-calculator-25.png'
import diet from '../assets/icons8-healthy-food-30.png'
import health from '../assets/icons8-health-24.png'
import meal from '../assets/icons8-food-bar-30-whitw.png'
import dish from '../assets/icons8-ramen-30.png'
import cuisine from '../assets/icons8-globe-32-white.png'
import { Button } from "@/components/ui/button"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const MobileSideBar = () => {
    return (
        <>

            <div className="flex gap-3">
                <Image src={filterImg} alt="" width={100} height={100} className="w-7" />
                <h3>Filter</h3>
            </div>

            <input type="search" placeholder="Search" className="py-3 outline-none w-[95%] px-4 border mt-4 border-neutral-700" />
            <ul className="space-y-2 font-medium">
                <li className="mt-3">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex gap-4">
                                    <Image src={Clock} alt="" width={100} height={100} className="w-6" />

                                    <h3 className="text-base font-semibold">Cooking Time</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>

                                <div className="grid grid-cols-3 gap-1">
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
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
                                    <Image src={ingredients} alt="" width={100} height={100} className="w-6" />

                                    <h3 className="text-base font-semibold">Ingredients</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>

                                <div className="grid grid-cols-3 gap-1">
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
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

                                    <h3 className="text-base font-semibold">Calories</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>

                                <div className="grid grid-cols-3 gap-1">
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
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

                                    <h3 className="text-base font-semibold">Diet</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>

                                <div className="grid grid-cols-3 gap-1">
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
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

                                    <h3 className="text-base font-semibold">Health</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>

                                <div className="grid grid-cols-3 gap-1">
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
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

                                    <h3 className="text-base font-semibold">Meal</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>

                                <div className="grid grid-cols-3 gap-1">
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
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
                                    <Image src={dish} alt="" width={100} height={100} className="w-6" />

                                    <h3 className="text-base font-semibold">Dish</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>

                                <div className="grid grid-cols-3 gap-1">
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
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

                                    <h3 className="text-base font-semibold">Cuisine</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>

                                <div className="grid grid-cols-3 gap-1">
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                    <Button variant="outline" className="py-0 px-2 text-xs rounded-lg">Outline</Button>
                                </div>
                            </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                </li>

            </ul>

            <div className="mt-14 mb-10 flex gap-5 justify-center">
                <Button variant="default" className="rounded-lg">Apply Filter</Button>
                <Button variant="destructive" className="rounded-lg">Clear Filter</Button>

            </div>
        </>
    )
}

export default MobileSideBar
