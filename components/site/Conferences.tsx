import Link from "next/link"

function Conferences() {
  return (
    <>
    <div className="mb-3 text-xl font-semibold">
        Conferences
    </div>
    <div className="m-0 text-sm opacity-50">
        <div className="m-1">
           <Link href={"/ctf"}>Catch The Fire Conference</Link> 
        </div>
        <div className="m-1">
        <Link href={"/wof"}>Women on Fire </Link>
        </div>
        <div className="m-1">
        <Link href={"/mof"}> Men{`'`}s Conference</Link>
        </div>
        <div className="m-1">
        <Link href={"/pioneersconference"}>  Pioneers Conference</Link>
        </div>
    </div>
    </>
  )
}

export default Conferences