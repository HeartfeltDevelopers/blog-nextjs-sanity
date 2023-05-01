import { Web3Button } from '@web3modal/react'
import Link from 'next/link'

function BlogMenu() {
  return (
            <div className='flex text-white  text-lg '>
                <div className='p-2'><Link href={'/'}>Home</Link></div>
                <div className='p-2'>About</div>
                <div className='p-2'><Link href={'/locations'}>Locations</Link></div>
                <div className='p-2'><Link href={'/events'}>Events</Link></div>
                <div className='p-2'><Link href={'/resources'}>Blog</Link></div>
            </div>
  )
}

export default BlogMenu