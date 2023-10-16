import React from 'react'
import Search from '../assets/icons8-search-50.png'
import cutlery from '../assets/icons8-cutlery-24.png'
import Image from 'next/image'
import { Raleway } from "next/font/google"

const roboto = Raleway({ subsets: ['latin'], weight: ['400'] })

const SearchBox = () => {
    return (
        <>
            <div className="flex w-full h-full">
                <button className='bg-slate-100 rounded-l-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] opacity-60'>
                    <Image src={cutlery} alt='cutlery icon for decoration' width={100} className='ml-2 hover:opacity-80 w-6' />
                </button>

                <input type="search" placeholder="What shall i serve today.. "
                    className="text-start outline-none border-none py-3 px-3 mobileScreen:px-10 md:px-20 lg:px-36 tracking-wider bg-slate-100 text-[#2f3a3c] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={roboto.style}
                />
                <button className='bg-slate-100 rounded-r-lg'>
                    <Image src={Search} alt='search button icon' width={100} className='w-10 hover:opacity-80' />
                </button>
            </div>
        </>
    )
}

export default SearchBox