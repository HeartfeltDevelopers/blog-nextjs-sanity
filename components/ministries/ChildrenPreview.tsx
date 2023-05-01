import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function ChildrenPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div className='bg-white mb-5'>
      <div className="mb-1 rounded-full">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <div className=''>
      <div className=" text-sm leading-snug font-semibold p-3 bg-white ">
        <Link href={`/posts/${slug}`} className=" line-clamp-1">
          {title}
        </Link>
      </div>
      </div>
    </div>
  )
}
