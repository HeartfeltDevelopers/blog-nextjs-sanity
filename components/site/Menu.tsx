import { Web3Button } from '@web3modal/react'
import Link from 'next/link'

function Menu() {
  return (
    <div className='max-w-6xl mx-auto'>
         <div className='flex justify-between pt-5'>
            <Link href={'/'}>
              <div className='p-0'>
                <p className='text-red-600 font-semibold text-xl'>HEARTFELT</p>  
                <p className='text-sm font-thin'>International Ministries</p>
              </div>
            </Link>
        <div className=''>
            <div className="text-right p-0"><Web3Button /></div>
            <div className='hidden md:flex justify-between text-lg md:visible'>
                <div className='p-2'>About</div>
                <div className='p-2'>Locations</div>
                <div className='p-2'>Ministries</div>
                <div className='p-2'>Events</div>
                <div className='p-2'><Link href={'/resources'} >Resources</Link></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Menu