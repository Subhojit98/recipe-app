import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image"
import clock from '../assets/icons8-timer-48.png'
import saveLater from '../assets/icons8-save-40.png'
import test from '../assets/pexels-rdne-stock-project-6645920.jpg'
import filterImg from '../assets/icons8-filter-48.png'
import MobileSideBar from "./MobileSideBar"
const SearchedRecipes = () => {

    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center mt-1 p-4 lg:p-1 border-l border-neutral-300">

                <div className="fixed right-7 top-[85%]">

                    <Sheet>
                        <SheetTrigger>
                            <div className="flex gap-3 bg-slate-300 text-black px-4 py-3 rounded-xl hover:bg-slate-200 duration-150 ease-out lg:hidden">
                                <Image src={filterImg} alt="" width={100} height={100} className="w-7" />
                            </div>
                        </SheetTrigger>

                        <SheetContent>
                            <MobileSideBar />
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="flex justify-between w-full  px-4 py-2 ">
                    <h1 className="text-xl font-semibold">All Recipes</h1>
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <div className="flex gap-3">
                                    <Image src={filterImg} alt="" width={100} height={100} className="w-7" />
                                    <h3>Filter</h3>
                                </div>
                            </SheetTrigger>

                            <SheetContent>
                                <MobileSideBar />
                            </SheetContent>
                        </Sheet>

                    </div>

                </div>
                <div className="w-full h-full grid grid-cols-2 mobileScreen:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-1 px-1 gap-y-2">
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg">
                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>
                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>
                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg ">

                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3 ">
                                <Image src={test} alt=""
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle className="text-base">Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-xs">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer hover:opacity-70" />

                                </div>
                            </div>

                        </Card>

                    </div>

                </div>



            </div>

        </>
    )
}

export default SearchedRecipes
