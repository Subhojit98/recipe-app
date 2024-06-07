"use client"
import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export const GlobalContextProvider = ({ children }: any) => {
    const [openFoodTab, setOpenFoodTab] = useState('hidden');
    const [openSaveLater, setOpenSaveLater] = useState("hidden");
    const [foodCardDetails, setFoodCardDetails] = useState(null)
    const [searchedFood, setSearchedFood] = useState('')
    const [filterType, setFilterType] = useState(null)
    const [filterData, setFilterData] = useState(null)
    const [filterText, setFilterText] = useState("")
    const [savedFoods, setSavedFoods] = useState([])


    return (
        <GlobalContext.Provider value={{
            openFoodTab, setOpenFoodTab,
            openSaveLater, setOpenSaveLater,
            foodCardDetails, setFoodCardDetails,
            searchedFood, setSearchedFood,
            filterType, setFilterType,
            filterData, setFilterData,
            filterText, setFilterText,
            savedFoods, setSavedFoods
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
