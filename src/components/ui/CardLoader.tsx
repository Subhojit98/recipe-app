import { Card } from "./card"
import { Skeleton } from "./skeleton"


const CardLoader = () => {
    return (
        <>
            <div className="w-[97%] h-full grid grid-cols-2 mobileScreen:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh]">

                    <Card className="w-full h-full rounded-lg bg-neutral-200">
                        <div className="flex-col flex items-center justify-center h-full gap-10 space-x-4">
                            <Skeleton className="h-1/2 w-11/12 rounded-full" />
                            <div className="space-y-2 ">
                                <Skeleton className="h-4 w-[120px] xl:w-[100px] lg:w-[190px]" />
                                <Skeleton className="h-4 w-[110px] xl:w-[180px] lg:w-[170px]" />
                                <Skeleton className="h-4 w-[105px] xl:w-[170px] lg:w-[160px]" />
                            </div>
                        </div>

                    </Card>

                </div>
                <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh]">

                    <Card className="w-full h-full rounded-lg bg-neutral-200">
                        <div className="flex-col flex items-center justify-center h-full gap-10 space-x-4">
                            <Skeleton className="h-1/2 w-11/12 rounded-full" />
                            <div className="space-y-2 ">
                                <Skeleton className="h-4 w-[120px] xl:w-[100px] lg:w-[190px]" />
                                <Skeleton className="h-4 w-[110px] xl:w-[180px] lg:w-[170px]" />
                                <Skeleton className="h-4 w-[105px] xl:w-[170px] lg:w-[160px]" />
                            </div>
                        </div>

                    </Card>

                </div>
                <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh]">

                    <Card className="w-full h-full rounded-lg bg-neutral-200">
                        <div className="flex-col flex items-center justify-center h-full gap-10 space-x-4">
                            <Skeleton className="h-1/2 w-11/12 rounded-full" />
                            <div className="space-y-2 ">
                                <Skeleton className="h-4 w-[120px] xl:w-[100px] md:w-[190px]" />
                                <Skeleton className="h-4 w-[110px] xl:w-[180px] md:w-[170px]" />
                                <Skeleton className="h-4 w-[105px] xl:w-[170px] md:w-[160px]" />
                            </div>
                        </div>

                    </Card>

                </div>
                <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh]">

                    <Card className="w-full h-full rounded-lg bg-neutral-200">
                        <div className="flex-col flex items-center justify-center h-full gap-10 space-x-4">
                            <Skeleton className="h-1/2 w-11/12 rounded-full" />
                            <div className="space-y-2 ">
                                <Skeleton className="h-4 w-[120px] xl:w-[100px] lg:w-[190px]" />
                                <Skeleton className="h-4 w-[110px] xl:w-[150px] lg:w-[170px]" />
                                <Skeleton className="h-4 w-[105px] xl:w-[120px] lg:w-[160px]" />
                            </div>
                        </div>

                    </Card>

                </div>
                <div className="w-full h-[30vh] lg:h-[33vh] xl:h-[40vh]  overflow-hidden">

                    <Card className="w-full h-full rounded-lg bg-neutral-200">
                        <div className="flex-col flex items-center justify-center h-full gap-10 space-x-4">
                            <Skeleton className="h-1/2 w-11/12 rounded-full" />
                            <div className="space-y-2 ">
                                <Skeleton className="h-4 w-[120px] xl:w-[100px] lg:w-[190px]" />
                                <Skeleton className="h-4 w-[110px] xl:w-[150px] lg:w-[170px]" />
                                <Skeleton className="h-4 w-[105px] xl:w-[120px] lg:w-[160px]" />
                            </div>
                        </div>

                    </Card>

                </div>

            </div>
        </>
    )
}

export default CardLoader
