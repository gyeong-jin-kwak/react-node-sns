import { useSelector } from 'react-redux'
import AppLayout from '../components/AppLayout'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import Head from 'next/head'

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user)
  const { mainPosts } = useSelector((state) => state.post)

  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        {isLoggedIn && <PostForm />}
        {mainPosts.map((post, index) => (
          <PostCard key={post.id} post={post} />
        ))}
      </AppLayout>
    </>
  )
}

export default Home
