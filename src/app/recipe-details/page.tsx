import RecipeDetails from "@/components/pages/RecipeDetails"
import Footer from "@/components/ui/Footer"
import MobileNavBar from "@/components/ui/MobileNavBar"
import Navbar from "@/components/ui/Navbar"

const page = () => {
    return (
        <>
            <Navbar />
            <RecipeDetails />
            <MobileNavBar />
            <Footer />
        </>
    )
}

export default page
