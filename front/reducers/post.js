export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'gyeongjin',
      },
      content: '첫번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src:
            'https://cdn.crowdpic.net/list-thumb/thumb_l_85118A2DC37D9ED8A6BE5CC45A853BB2.jpeg',
        },
        {
          src:
            'https://cdn.pixabay.com/photo/2018/01/10/23/53/rabbit-3075088_960_720.png',
        },
        {
          src:
            'https://funshop.akamaized.net/products/0000045272/vs_image800.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'gyjin',
          },
          content: '저도 단식중입니다..',
        },
        {
          User: {
            nickname: 'slimmer',
          },
          content: '헐.. 할만하신가요?',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const addPost = {
  type: ADD_POST_REQUEST,
}

const dummyPost = {
  id: 2,
  content: '더미 데이터입니다..',
  User: {
    id: 1,
    nickname: 'gyeongjin',
  },
  Images: [],
  Contents: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state
  }
}

export default reducer
