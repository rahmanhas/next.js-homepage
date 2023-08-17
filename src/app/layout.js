import Image from 'next/image';

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Homepage',
  description: 'Homepage',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">

      <body className={inter.className } >
        <div className='flex flex-row justify-between items-center max-w-7xl mx-auto'>
          <div>
            <Image
              src="/calendly.jpg"
              alt="calendly Image"
              width={300}
              height={200}
            />
          </div>
          <div>
            <ul className='flex flex-row justify-center items-center gap-5 font-bold '>
              <li>Product</li>
              <li className='inline-flex justify-center items-center'>Solutions <FaAngleDown className='text-[#046dec]'></FaAngleDown></li>
              <li>Team & Companies</li>
              <li>Pricing</li>
              <li className='inline-flex justify-center items-center'>Resources <FaAngleDown className='text-[#046dec]'></FaAngleDown></li>
            </ul>
          </div>
          <div>
            <button
            className='bg-[#046dec] text-white py-2 px-3 rounded-md'
            >My Account</button>
          </div>
        </div>
        {children}

      </body>
    </html>
  )
}

export default RootLayout;