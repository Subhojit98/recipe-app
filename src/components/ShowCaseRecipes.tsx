import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import clock from '../assets/icons8-timer-48.png'
import saveLater from '../assets/icons8-save-40.png'
import test from '../assets/pexels-rdne-stock-project-6645920.jpg'
import HelthChoice from "./HelthChoice"

const ShowCaseRecipes = () => {

    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center mt-1 ">
                <div className="w-full md:w-[95%] lg:w-[85%] xl:w-[88%] h-full grid grid-cols-2 mobileScreen:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 px-1 gap-y-2">
                    <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg">
                        <Card className="w-full h-full rounded-lg">
                            <div className="w-full h-2/3">
                                <Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                                < Image src={test} alt="" width={100} height={100}
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
                <button className="relative cursor-pointer lg:mb-0 mt-2 inline-flex items-center justify-center w-auto px-4 py-2 md:px-6 md:py-3 lg:px-8 overflow-hidden font-bold text-gray-500 text-base transition-all duration-500 border border-gray-200 rounded-md group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white hover:opacity-80">
                    <span className="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-300"></span>
                    <span className="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-300"></span>
                    Show more
                </button>
                <HelthChoice />

            </div>

        </>
    )
}

export default ShowCaseRecipes

