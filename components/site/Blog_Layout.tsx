import Link from "next/link"

import BlogMenu from "./BlogMenu"
import Footer from "./Footer"


function Blog_Layout({...props}) {
  return (
    <>
    <div className="bg-gray-50">
        <div className="fixed w-full">
            <div className="p-5 bg-gray-100 w-full">
               <BlogMenu />
            </div>
            <div className="flex p-5 bg-white w-full">
              
              <div className=" text-center w-full">ALL BLOGS |
LEADERSHIP |
DEVOTIONALS |
STORIES</div>
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