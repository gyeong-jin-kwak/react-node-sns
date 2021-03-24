import { useDispatch, useSelector } from 'react-redux'
import AppLayout from '../components/AppLayout'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import Head from 'next/head'
import { useEffect } from 'react'
import { LOAD_POSTS_REQUEST } from '../reducers/post'

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user)
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post)

  useEffect(()=>{
    dispatch({
      type: LOAD_POSTS_REQUEST,
    })
  }, []);

  // 무한스크롤
  useEffect(()=>{
    const onScroll = () => {
      // scrollY : 얼마나 내렸는지, 기준점 화면 가장 윗부분 - 유동
      // clientHeight : 화면에 보이는 길이 - 고정
      // scrollHeight : 총 길이 - 고정
      // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)

      if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if(hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
          })
        }
      }
    };

    window.addEventListener('scroll', onScroll);

    // 메모리에 쌓여 있으므로 이벤트를 헤지해주어야 함.
    return () => {
      window.removeEventListener('scroll', onScroll);
    };

  }, [hasMorePosts, loadPostsLoading]);

  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        {me && <PostForm />}
        {mainPosts.map((post, index) => (
          <PostCard key={post.id} post={post} />
        ))}
      </AppLayout>
    </>
  )
}

export default Home
