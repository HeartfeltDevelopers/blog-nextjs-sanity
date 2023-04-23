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
        <div className="flex font-thin text-sm">
            <div className="p-2">
                <Welcome />
            </div>
            <div className="p-2">
                <Children />
            </div>
            <div className="p-2">
                <Greeting />
            </div>
        </div>
       
    </div>
    </>
  )
}

export default InfoSec