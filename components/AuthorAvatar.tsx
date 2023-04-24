import { urlForImage } from 'lib/sanity.image'
import type { Author } from 'lib/sanity.queries'
import Image from 'next/image'

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props
  return (
    <div className="flex items-center">
      <div className=" mr-4 h-12 w-12">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(76).width(76).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={76}
          width={76}
          // @TODO add alternative text to avatar image schema
          alt=""
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
