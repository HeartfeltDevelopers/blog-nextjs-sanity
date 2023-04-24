import Image from "next/image"

function BannerSection() {
  return (<>
  <div className="mx-auto max-w-fit">
    <div className='md:flex'>
        <div className="flex m-5"> <Image src="/dogs.jpeg" 
        alt="Picture of the author"
        width={850}
        height={100} /></div>

        <div className="flex m-5">
        <Image src="/prayerAltar.jpeg" 
        alt="Picture of the author"
        width={850}
        height={100} />
        </div>
    </div>

    <div className='md:flex w-full'>
    <div className="flex m-5">
        <Image src="/mo.jpeg" 
        alt="Picture of the author"
        width={850}
        height={100} />
    </div>
    <div className="flex m-5"> 
        <Image src="/youtube.jpeg" 
        alt="Picture of the author"
        width={850}
        height={100} />
    </div>
</div>
</div>
</>
  )
}

export default BannerSection