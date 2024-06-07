import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import Axios from 'axios'

const APP_ID = '70be257f'
const API_KEY = 'dac1429344bb6dd5f31c3228d15e0607'

  export const fetchFoodData = async (URL: string, pageParam : number) => {

        try {

            const response = await Axios.get(`https://api.edamam.com/search?q=${URL}&app_id=${APP_ID}&app_key=${API_KEY}&from=${(pageParam - 1) * 10}&to=${pageParam * 10}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }


 const useFoodData = (food:string)=>{
 return useInfiniteQuery({
        queryKey: ['food-tab-data', food],
        getNextPageParam: (_lastPage, pages) => pages.length + 1,
        queryFn: ({ pageParam = 1 }: any) => fetchFoodData(food, pageParam) ,
        staleTime: 5000,
        initialPageParam: 1

    })
}

export default useFoodData
