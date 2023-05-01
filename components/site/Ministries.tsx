import Link from "next/link"

function Ministries() {
  return (
    <>
    <div className="mb-3 text-xl font-semibold">
        Ministries
    </div>
    <div className="m-0 text-sm opacity-50">
        <div className="m-1">
           <Link href={"/children"}>Children</Link>
        </div>
        <div className="m-1">
            <Link href={"/couples"}>Couples</Link>
        </div>
        
        <div className="m-1">
            <Link href={"/men"}>Men</Link>
        </div>
        <div className="m-1">
            <Link href={"/women"}>Women</Link>
        </div>
        <div className="m-1">
            <Link href={"/pioneers"}>Pioneers</Link>
        </div>
        <div className="m-1">
            <Link href={"/heartlife"}>HeartLife Care</Link>
        </div>
    </div>
    </>
  )
}

export default Ministries