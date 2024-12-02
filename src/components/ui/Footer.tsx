import Image from 'next/image'
import edamanLogo from '../../assets/Edamam_logo_full_RGB.png'

const Footer = () => {
    return (
        <>

            <footer className="m-4 p-3 mb-10 mt-5 border-t border-gray-500 lg:mb-0">
                <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="_" className="hover:underline">Wisk</a>. All Rights Reserved.
                    </span>

                    <div className="flex gap-3 text-sm mobileScreen:text-xs lg:text-sm">
                        Powered by
                        <Image src={edamanLogo} alt='' width={100} height={100} className='w-2/5 object-contain' />
                    </div>
                </div>


            </footer>

        </>
    )
}

export default Footer