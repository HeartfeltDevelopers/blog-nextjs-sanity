import Image from "next/image"
import About from "./About"
import Conferences from "./Conferences"
import Info from "./Info"
import Ministries from "./Ministries"


function Footer() {
  return (
    <>
    <div className="items-center justify-between p-10 bg-[#f2f2f2] mt-15">
      <div className="md:flex mx-auto md:w-4/6">
        <div className='flex-1'>
            <About />
        </div>
        <div className='flex-1'>
            <Ministries />
        </div>
        <div className='flex-1'>
            <Conferences />
        </div>
        <div className='flex-1'>
           <Info />
        </div>
      </div>
      <div className="grid grid-flow-row auto-rows-max  mx-auto md:w-4/6 pt-10">
        <div className="text-xs opacity-50 flex items-center ">
          <Image src={`/logo.png`} width={40} height={40} alt=""/>
          <div className="p-3">
              Copyright © 2023 Heartfelt International Ministries
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer