import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <>
    <div className="mb-3 text-xl font-semibold">
        About
    </div>
    <div className="m-0 text-sm opacity-50">
        <div className="m-1 text">
            Vision & Mission
        </div>
        <div className="m-1">
            Statement Of Faith
        </div>
        <div className="m-1">
            Apostle T & Pastor C
        </div>
        <div className="m-1">
            <Link href={`/leadershipStaff`}>Leadership</Link>
        </div>
        <div className="m-1">
        <Link href={`/locations`}> Locations</Link>
        </div>
    </div>
    </>
  )
}

export default About