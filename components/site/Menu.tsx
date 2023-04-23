import { Web3Button } from '@web3modal/react'
import Link from 'next/link'

function Menu() {
  return (
    <div>
         <div className='flex justify-between pt-5'>
            <Link href={'/'}>
        <div className='pt-5'>
            <p className='text-red-600 font-semibold text-xl'>HEARTFELT</p>  
            <p className='text-sm font-thin'>International Ministries</p>
            </div>
            </Link>
        <div className=''>
            <div className="text-xs font-thin text-right p-2"><Web3Button /></div>
            <div className='flex justify-between text-lg'>
                <div className='p-2'>About</div>
                <div className='p-2 text-red-600'>LIVE</div>
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