import Link from "next/link"

import Footer from "./Footer"


function Blog_Layout({...props}) {
  return (
    <>
    <div className="bg-gray-50">
        <div className="fixed w-full">
            <div className="p-5 bg-gray-100 w-full">
               
            </div>
            <div className="p-5 h-20 bg-white w-full">
                <Link href={"/"} >Heartfelt</Link>
            </div>
        </div>
        <div className='max-w-6xl mx-auto pt-40 p-5'>
            {props.children}
        </div>
            <Footer />
    </div>
    </>
  )
}

export default Blog_Layout