"use client"
import { helthChoiceTags } from "@/app/Data/Tags/Tags"
import { Badge } from "./ui/badge"
import { Rubik, Poppins } from "next/font/google"
import { useContext } from "react"
import { Context } from "vm"
import { GlobalContext } from "@/context/Context"
import { useRouter } from "next/navigation"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const rubik = Rubik({
    subsets: ['latin'],
    weight: '400'
})
const popins = Poppins({
    subsets: ['latin'],
    weight: '400'
})


const HelthChoice = () => {
    const router = useRouter()
    const { setSearchedFood } = useContext<Context>(GlobalContext)

    const handleSearch = (heltvhSearch: string) => {
        router.push("/recipes")
        setSearchedFood(heltvhSearch)
    }
    return (
        <>

            <div className="hidden h-full w-full md:flex justify-center flex-col items-center mt-10 gap-2 text-[#020e22] dark:text-white" style={rubik.style}>
                <h1 className="text-3xl font-semibold dark:text-[#f64183]">Choose Your Health Preference.</h1>
                <p className="text-sm w-2/6 text-center font-light text-neutral-600 dark:text-white">Choosing your helth preference is an importent step towards achiving a helthier lifestyle.</p>

                <div className="w-full flex flex-col gap-2 justify-center items-center mt-5 mb-10" style={popins.style}>
                    <div className="w-[60%] flex gap-1 ml-10 xl: justify-center">


                    </div>
                    <div className="flex gap-1 justify-center ml-10">

                        {
                            helthChoiceTags.slice(0, 10).map((row1Data, i) => {
                                return <div key={i}>
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <Badge variant={'secondary'} className="text-xs px-2 py-2  xl:py-3 xl:px-3 bg-[#a2c3fb] dark:bg-[#72b309] dark:hover:bg-transparent  cursor-pointer" onClick={() => handleSearch(row1Data)}> {
                                                row1Data.length >= 7 ? row1Data.split('').splice(0, 7).join("") + ".."
                                                    :
                                                    row1Data

                                            }</Badge>
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            {row1Data}
                                        </HoverCardContent>
                                    </HoverCard>

                                </div>
                            })
                        }
                    </div>
                    <div className="w-[60%] flex gap-1 ml-12 justify-center">

                        {
                            helthChoiceTags.slice(11, 19).map((row2Data, i) => {
                                return <div key={i}>
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <Badge variant={'secondary'} className="text-xs px-2 py-2  xl:py-3 xl:px-3 bg-[#a2c3fb] dark:bg-[#72b309] dark:hover:bg-transparent   cursor-pointer" onClick={() => handleSearch(row2Data)}> {
                                                row2Data.length >= 7 ? row2Data.split('').splice(0, 7).join("") + ".."
                                                    :
                                                    row2Data

                                            }</Badge>

                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            {row2Data}
                                        </HoverCardContent>
                                    </HoverCard>


                                </div>
                            })
                        }
                    </div>
                    <div className="w-[60%] flex gap-1 ml-4 xl:ml-10 justify-center">

                        {
                            helthChoiceTags.slice(20, 26).map((row3Data, i) => {
                                return <div key={i}>
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <Badge variant={'secondary'} className="text-xs px-2 py-2  xl:py-3 xl:px-3 bg-[#a2c3fb] dark:bg-[#72b309] dark:hover:bg-transparent   cursor-pointer" onClick={() => handleSearch(row3Data)}> {
                                                row3Data.length >= 7 ? row3Data.split('').splice(0, 7).join("") + ".."
                                                    :
                                                    row3Data

                                            }</Badge>
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            {row3Data}
                                        </HoverCardContent>
                                    </HoverCard>


                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default HelthChoice