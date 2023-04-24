import React from 'react'

import Children from './Children'
import Greeting from './Greeting'
import Welcome from './Welcome'

function InfoSec() {
  return (
    <>
    <div className="mt-10 pb-20">
        <div className="mb-10">
            <hr className="border-1 border-gray-600"/>
        </div>
        <div className="md:flex font-thin text-sm">
            <div className="flex pr-3">
                <Welcome />
            </div>
            <div className="flex pr-3">
                <Children />
            </div>
            <div className="flex">
                <Greeting />
            </div>
        </div>
       
    </div>
    </>
  )
}

export default InfoSec