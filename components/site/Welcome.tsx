import Image from "next/image"
function Welcome() {
  return (
    <div>
        <Image src="/pastorC.jpeg" 
        alt="Picture of the author"
        width={450}
        height={80} />
        <div>
<p className="text-xl font-semibold mt-5 mb-5">Sunday Service </p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>


        </div>
    </div>
  )
}

export default Welcome