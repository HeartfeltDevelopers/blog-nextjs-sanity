import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

import BannerSection from './site/BannerSection'
import Footer from './site/Footer'
import InfoSec from './site/InfoSec'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />
      <div className='bg-white fixed w-full'>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
        </Container>
      </div>
      <Layout preview={preview} loading={loading}>
      <div className="justify-between text-white bg-gradient-to-b from-gray-800 to-black pt-10">
        <Container>
          <div className='md:max-w-6xl mx-auto'>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          <InfoSec />
          </div>
        </Container>
        </div>
        <BannerSection />
        <Footer />
      </Layout>
    </>
  )
}
