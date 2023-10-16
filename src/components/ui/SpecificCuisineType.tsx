import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import clock from '../assets/icons8-timer-48.png'
import saveLater from '../assets/icons8-save-40.png'
import test from '../assets/pexels-rdne-stock-project-6645920.jpg'

const SpecificCuisineType = () => {
    return (
        <> <div className="w-full h-full flex justify-end mb-14">
            <div className="flex flex-row px-2 overflow-x-scroll  gap-1 mt-2">
                <div className="flex-row flex gap-2">
                    <div className="w-[55vw] h-[30vh] mobileScreen:w-[45vw]">

                        <Card className="w-full h-full">
                            <div className="w-full h-2/3 ">
                                < Image src={test} alt="" width={100} height={100}
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle>Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-sm">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-[55vw] h-[30vh] mobileScreen:w-[45vw]">

                        <Card className="w-full h-full">
                            <div className="w-full h-2/3 ">
                                < Image src={test} alt="" width={100} height={100}
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle>Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-sm">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer" />

                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="w-[55vw] h-[30vh] mobileScreen:w-[45vw]">

                        <Card className="w-full h-full">
                            <div className="w-full h-2/3 ">
                                < Image src={test} alt="" width={100} height={100}
                                    className="object-cover object-center w-full h-full rounded-lg cursor-pointer" />
                            </div>

                            <div className="flex flex-col justify-between h-[30%]">
                                <CardHeader className="mt-2 ml-3">
                                    <CardTitle>Card Title</CardTitle>
                                </CardHeader>

                                <div className="w-full flex justify-between">
                                    <div className="flex gap-1 items-center ml-2">
                                        <Image src={clock} alt="" className="w-7" />
                                        <h3 className="text-sm">1 minutes</h3>
                                    </div>

                                    <Image src={saveLater} alt="" className="w-7 mr-2 cursor-pointer" />

                                </div>
                            </div>

                        </Card>

                    </div>

                </div>

            </div>
        </div>

        </>
    )
}

export default SpecificCuisineType