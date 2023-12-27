
import Image from "next/image"
import loader_Gif from '../assets/eat-yummy.gif'

const foodFacts = [
    "Pound cake got its name from its recipe.",
    "Most supermarket wasabi is actually horseradish.",
    "The most expensive pizza in the world costs $12,000 dollars.",
    "Ranch dressing is dyed.",
    "One fast-food burger can have meat from 100 different cows.",
    "Fruit-flavored snacks shine because of car wax.",
    "Nutmeg is a hallucinogen.",
    "Crackers have holes in them for a reason.",
    "Ketchup used to be used as a medicine.",
    "White chocolate isn’t chocolate."
]

const PageLoader = () => {

    const selectFact = foodFacts[Math.floor(Math.random() * 10)]


    return (
        <>
            <div className="w-full min-h-screen bg-[#b5f64b] fixed top-0 z-40 " >
                <div className="flex justify-center items-center flex-col h-screen gap-5">
                    <div>
                        <h1 className="text-7xl [#222325]">Do You Khow..!?</h1>
                        <p className="mt-5 text-xl text-[#004200] text-center">{selectFact}</p>
                    </div>

                    <Image src={loader_Gif} alt="" width={80} height={80} />
                </div>
            </div >

        </>
    )
}

export default PageLoader
