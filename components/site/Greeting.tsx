import Image from "next/image"

function Greeting() {
  return (
    <div>
        <Image src="/d1.jpeg" 
        alt="Picture of the author"
        width={450}
        height={100} className="rounded-sm" />
        <div>
        <p className="text-xl font-semibold mt-5 mb-5">Worship Time </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
        </div>
    </div>
  )
}

export default Greeting