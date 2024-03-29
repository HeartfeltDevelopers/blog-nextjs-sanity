import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <section>
      <div className="flex justify-between text-6xl pt-20 md:pt-32 pb-10 md:pb-20">
        <div>
        <p className=' capitalize font-thin text-5xl md:text-7xl'>Let your kingdom come  </p>
        <p className='text-lg md:text-2xl font-semibold pt-10'>
         This Sunday come experience His presence.
        </p>
          <div className='pt-3 md:pt-10'>
            <button className="rounded-full p-2 md:p-3 text-white text-lg md:text-3xl bg-sky-500">Online Connect </button>
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-10 mb-20 md:mb-10 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <div>
            <CoverImage slug={slug} title={title} image={coverImage} priority />
          </div>
        
        </div>
        <div>
          <div className='text-2xl font-thin pb-5'>Latest Sermon</div>
        <h3 className="text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="line-clamp-2">
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 font-thin text-xs md:mb-0 pt-4 pb-2">
            <Date dateString={date} />
          </div>
          <div className='mt-5'>
            {excerpt && <p className="mb-4 text-lg font-thin leading-relaxed line-clamp-2">{excerpt}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
