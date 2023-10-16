import Image from 'next/image'
import edamanLogo from '../../assets/Edamam_logo_full_RGB.png'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <>

            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mb-10 lg:mb-0">
                <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Wisk</a>. All Rights Reserved.
                    </span>

                    <Image src={logo} alt='' width={100} height={100} className='w-12 hidden md:block' />

                    <div className="flex gap-3">
                        Powered by
                        <Image src={edamanLogo} alt='' width={100} height={100} />
                    </div>
                </div>


            </footer>

        </>
    )
}

export default Footer