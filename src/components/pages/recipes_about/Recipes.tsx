
import SideBar from "../../SideBar"
import Navbar from "../../ui/Navbar"
import SearchedRecipes from "../../SearchedRecipes"
import Footer from "../../ui/Footer"
import MobileNavBar from "../../ui/MobileNavBar"
import RecipeDetails from "./RecipeDetails"
import SavedRecipes from "../Saved Recipes/SavedRecipes"

const RecipesToshow = () => {


    return (
        <>
            <Navbar />
            <div className="w-full h-full flex text-[#020e22]">
                {/* for filtersm -> */}
                <SideBar />
                <SearchedRecipes />
            </div>
            <MobileNavBar />
            <Footer />
            <RecipeDetails />
            <SavedRecipes />

        </>
    )
}

export default RecipesToshow