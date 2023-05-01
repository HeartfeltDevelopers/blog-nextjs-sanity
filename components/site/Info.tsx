import Link from "next/link"

function Info() {
  return (
    <>
    <div className="mb-3 text-xl font-semibold">
        Resources 
    </div>
    <div className="m-0 text-sm opacity-50">
        <div className="m-1">
        <Link href={'/resources'}>Blog</Link>
        </div>
        <div className="m-1">
        <Link href={'/devotions'}> Daily Devotions</Link>
        </div>
        <div className="m-1">
        <Link href={'/worship'}> Heartfelt Worship</Link>
        </div>
        <div className="m-1">
        <Link href={'/institute'}> Heartfelt Institute Of Ministry</Link>
        </div>
    </div>
    </>
  )
}

export default Info