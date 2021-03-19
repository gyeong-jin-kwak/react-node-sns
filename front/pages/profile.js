import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import NicknameEditForm from '../components/NicknameEditForm';
import FollowingList from '../components/FollowingList';
import FollowerList from '../components/FollowerList';

const Profile = () => {

  const { me } = useSelector((state)=>state.user)
  // const followingList = [{name: '아뜰리'}, {name: '럭키'}, {name: '몽실이'}, {name: '해피'},  {name: '영구'}];
  // const followerList = [{name: '릿쮸'}, {name: '몽자'}, {name: '해수어tv'}, {name: '햇님'}, {name: '샒의삶'}]

  return (
    <>
      <Head>
        <title>프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowingList header="팔로잉" data = { me.Followings } />
        <FollowerList header="팔로워" data = { me.Followers } />
      </AppLayout>
    </>
  )
}

export default Profile;
