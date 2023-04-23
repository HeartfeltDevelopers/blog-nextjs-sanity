import Image from "next/image"
function Welcome() {
  return (
    <div className="h-20">
        <Image src="https://cf1.gatewaypeople.com/assets/static/Plan_a_Visit-card-d274fa9b885bb7c8f82ed45916a9668f23694b07c4f97ae06659084d6163abc6.jpg" 
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

export default Welcome