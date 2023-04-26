import { Web3Button } from '@web3modal/react'
import Link from 'next/link'

function BlogMenu() {
  return (
            <div className='flex  text-lg '>
                <div className='p-2'><Link href={'/'}>Home</Link></div>
                <div className='p-2'>About</div>
                <div className='p-2'>Locations</div>
                <div className='p-2'>Ministries</div>
                <div className='p-2'>Events</div>
            </div>
  )
}

export default BlogMenu