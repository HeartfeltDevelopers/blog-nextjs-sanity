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
      <div className="mb-20 md:mb-10 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
        <CoverImage slug={slug} title={title} image={coverImage} priority />
        </div>
        <div>
        <h3 className="text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 text-sm md:mb-0">
            <Date dateString={date} />
          </div>
          <div className='mt-5'>
            {excerpt && <p className="mb-4 text-lg leading-relaxed line-clamp-3">{excerpt}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
