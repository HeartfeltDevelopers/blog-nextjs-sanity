import Image from "next/image"

function Greeting() {
  return (
    <div className="">
        <Image src="https://cf1.gatewaypeople.com/assets/static/Connect-card-e5a3d99e40894019ff67d276566d25751f542120a321d3d860831cc5a4d98340.jpg" 
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