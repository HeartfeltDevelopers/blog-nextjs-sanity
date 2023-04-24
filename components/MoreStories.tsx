import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold leading-tight tracking-tighter md:text-xl">
        More Sermons
      </h2>
      <div className="mb-32 grid grid-cols-1  md:grid-cols-2 md:gap-x-5 ">
        {posts.map((post) => (
          <PostPreview
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
