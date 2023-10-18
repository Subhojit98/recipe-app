
import SideBar from "../ui/sideBar"
import Navbar from "../ui/Navbar"
import SearchedRecipes from "../SearchedRecipes"
import Footer from "../ui/Footer"
import MobileNavBar from "../ui/MobileNavBar"

const RecipesToshow = () => {


    return (
        <>
            <Navbar />
            <div className="w-full h-full flex text-[#280117]">
                <SideBar />
                <SearchedRecipes />
            </div>
            <MobileNavBar />
            <Footer />

        </>
    )
}

export default RecipesToshow