import { PortableText } from '@portabletext/react'
import { Web3Button } from '@web3modal/react'
import Link from 'next/link';

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <div className='flex justify-between pt-5'>
        <div className='pt-5'>
            <p className='text-red-600 font-semibold text-xl'>HEARTFELT</p>  
            <p className='text-sm font-thin'>International Ministries</p></div>
        <div className=''>
            <div className="text-xs font-thin text-right p-2"><Web3Button /></div>
            <div className='flex justify-between text-lg'>
                <div className='p-2'>About</div>
                <div className='p-2 text-red-600'>LIVE</div>
                <div className='p-2'>Locations</div>
                <div className='p-2'>Ministries</div>
                <div className='p-2'>Events</div>
                <div className='p-2'>Resources</div>
            </div>
        </div>
    </div>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
