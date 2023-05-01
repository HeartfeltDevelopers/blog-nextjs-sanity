import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'

import WorshipPreview from './WorshipPreview'

export default function WorshipList({ posts }: { posts: Post[] }) {
  

  return (
    <section>
      <div className=" mb-32 grid grid-cols-1  md:grid-cols-5 md:gap-x-5">
        {posts.filter(post => post.category === 'sermon').map((post) => (
            <WorshipPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
