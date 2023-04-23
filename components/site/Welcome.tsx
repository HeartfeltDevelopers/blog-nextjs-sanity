import Image from "next/image"
function Welcome() {
  return (
    <div>
        <Image src="/pastorC.jpeg" 
        alt="Picture of the author"
        width={450}
        height={80} />
        <div>
<p className="text-xl font-semibold mt-5 mb-5">Let{`'`}s Connect! </p>

<p>Are you looking for meaningful ways to connect with others in the Gateway family? There are</p>


        </div>
    </div>
  )
}

export default Welcome