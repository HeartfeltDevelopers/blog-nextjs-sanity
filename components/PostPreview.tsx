import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div className='bg-white mb-5'>
      <div className="mb-1">
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
      <div className='p-3 bg-white'>
        {excerpt && <p className="mb-4 text-sm leading-relaxed line-clamp-3">{excerpt}</p>}
      </div>
      <div className='flex justify-between bg-slate-100 p-3'>
        <div className='text-xs'>
          <div>{author.name}</div>
          <div><Date dateString={date} /></div>
        </div>
        <div>{author && <Avatar picture={author.picture} />} </div>
      </div>
      </div>
    </div>
  )
}
