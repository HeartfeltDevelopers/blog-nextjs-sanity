import Image from "next/image"

function Greeting() {
  return (
    <div className="">
        <Image src="/d1.jpeg" 
        alt="Picture of the author"
        width={450}
        height={100} />
        <div>
        <p className="text-xl font-semibold mt-5 mb-5">Let{`'`}s Connect! </p>
        <p>Are you looking for meaningful ways to connect with others in the Gateway family? There are</p>
        </div>
    </div>
  )
}

export default Greeting