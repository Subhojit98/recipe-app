import { Raleway } from "next/font/google"

const raleway = Raleway({
    subsets: ['latin'],
    weight: '400'
})
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ShowCaseRecipes from "../ShowCaseRecipes"


const FoodTab = () => {



    return (
        <>
            <div className="w-full h-full flex justify-center mt-4" style={raleway.style}>
                <nav className="w-11/12">
                    <ul>

                        <Tabs defaultValue="breakfast-data" className="flex justify-center flex-col items-center">

                            <TabsList className="w-full border-b border-black flex justify-around text-[#020e22] dark:text-[#72b309]">

                                <TabsTrigger value="breakfast-data" className="hover:bg-[#a2c3fb] dark:hover:bg-[#03383b] rounded-md text-xs mobileScreen:text-base font-bold">Breakfast</TabsTrigger>
                                <TabsTrigger value="lunch-data" className="hover:bg-[#a2c3fb] dark:hover:bg-[#03383b] rounded-md text-xs mobileScreen:text-base font-bold">Lunch</TabsTrigger>
                                <TabsTrigger value="snacks-data" className="hover:bg-[#a2c3fb] dark:hover:bg-[#03383b] rounded-md text-xs mobileScreen:text-base font-bold">Snacks</TabsTrigger>
                                <TabsTrigger value="dinner-data" className="hover:bg-[#a2c3fb] dark:hover:bg-[#03383b] rounded-md text-xs mobileScreen:text-base font-bold">Dinner</TabsTrigger>
                                <TabsTrigger value="teatime-data" className="hover:bg-[#a2c3fb] dark:hover:bg-[#03383b] rounded-md text-xs mobileScreen:text-base font-bold">Teatime</TabsTrigger>
                            </TabsList>

                            <TabsContent value="breakfast-data" >
                                <ShowCaseRecipes foodTabData={'breakfast'} />
                            </TabsContent>

                            <TabsContent value="lunch-data">
                                <ShowCaseRecipes foodTabData={'lunch'} />
                            </TabsContent>

                            <TabsContent value="snacks-data">
                                <ShowCaseRecipes foodTabData={'snacks'} />

                            </TabsContent>

                            <TabsContent value="dinner-data">
                                <ShowCaseRecipes foodTabData={'dinner'} />

                            </TabsContent>

                            <TabsContent value="teatime-data">
                                <ShowCaseRecipes foodTabData={'teatime'} />

                            </TabsContent>

                        </Tabs>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default FoodTab