import { Web3Button } from '@web3modal/react'
import BlogHeader from 'components/BlogHeader'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Link from 'next/link'

import Footer from './Footer'
import Menu from './Menu'


function Layout({...props}) {
  return (
    <>
    <div>
        <div className='max-w-6xl mx-auto'>
            <Menu />
            {props.children}
        </div>
            <Footer />
    </div>
    </>
  )
}

export default Layout