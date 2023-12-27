import HelthChoice from "@/components/HelthChoice";
import Hero from "@/components/Hero";
import RecipeDetails from "@/components/pages/recipes_about/RecipeDetails";
import SavedRecipes from "@/components/pages/Saved Recipes/SavedRecipes";
import FoodTab from "@/components/ui/FoodTab";
import Footer from "@/components/ui/Footer";
import MobileNavBar from "@/components/ui/MobileNavBar";
import Navbar from "@/components/ui/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FoodTab />
      <MobileNavBar />
      <HelthChoice />
      <RecipeDetails />
      <SavedRecipes />
      <Footer />
    </>
  )
}
