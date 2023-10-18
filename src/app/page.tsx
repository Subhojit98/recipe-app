import Hero from "@/components/Hero";
import ShowCaseRecipes from "@/components/ShowCaseRecipes";
import FoodNavigation from "@/components/ui/FoodNavigation";
import Footer from "@/components/ui/Footer";
import MobileNavBar from "@/components/ui/MobileNavBar";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FoodNavigation />
      <ShowCaseRecipes />
      <MobileNavBar />
      <Footer />
    </>
  )
}
