import shortId from 'shortid';
import produce from 'immer';

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
          id: shortId.generate(),
          src:
            'https://cdn.crowdpic.net/list-thumb/thumb_l_85118A2DC37D9ED8A6BE5CC45A853BB2.jpeg',
        },
        {
          id: shortId.generate(),
          src:
            'https://cdn.pixabay.com/photo/2018/01/10/23/53/rabbit-3075088_960_720.png',
        },
        {
          id: shortId.generate(),
          src:
            'https://funshop.akamaized.net/products/0000045272/vs_image800.jpg',
        },
      ],
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: 'gyjin',
          },
          content: '저도 단식중입니다..',
        },
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: 'slimmer',
          },
          content: '헐.. 할만하신가요?',
        },
      ],
    },
  ],
  imagePaths: [],
  // postAdded: false,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  removePostLoading: false,
  removePostDone: false,
  removePostError: null,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// export const addPost = {
//   type: ADD_POST_REQUEST,
// }

export const addPostRequestAction = (data) => ({
  type: ADD_POST_REQUEST,
  data
});

export const addCommentRequestAction = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'gyeongjin',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'gyeongjin',
  }
})

const reducer = (state = initialState, action) => {
  return produce(state, (draft)=>{
    switch (action.type) {
      case ADD_POST_REQUEST:
        // console.log('add-post-request')
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
        // return {
        //   ...state,
        //   addPostLoading: true,
        //   addPostDone: false,
        //   addPostError: null
        // }
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
        // return {
        //   ...state,
        //   addPostLoading: false,
        //   addPostDone: true,

        //   //
        //   mainPosts: [dummyPost(action.data), ...state.mainPosts],
        // }
      case ADD_POST_FAILURE: 
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
        // return {
        // ...state,
        // addPostLoading: false,
        // addPostError: action.error
        // }
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
        // return {
        //   ...state,
        //   addCommentLoading: true,
        //   addCommentDone: false,
        //   addCommentError: null
        // }
      case ADD_COMMENT_SUCCESS: 
        const post = draft.mainPosts.find((v)=> v.id === acrtion.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
        // action.content, action.postId, action.userId
        // const postIndex = state.mainPosts.findIndex((v)=> v.id === action.data.postId);
        // const post = {...state.mainPosts[postIndex]};
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;

        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // }
      case ADD_COMMENT_FAILURE: 
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
        // return {
        // ...state,
        // addCommentLoading: false,
        // addCommentError: action.error
        // }

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
        // console.log('add-post-request')
        // return {
        //   ...state,
        //   removePostLoading: true,
        //   removePostDone: false,
        //   removePostError: null
        // }
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        // splice를 사용해도 되지만, index를 찾기위해 코드가 늘어나기에 삭제는 filter 사용
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        break;
        // return {
        //   ...state,
        //   removePostLoading: false,
        //   removePostDone: true,

        //   //
        //   mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
        // }
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
        // return {
        // ...state,
        // removePostLoading: false,
        // removePostError: action.error
        // }
      default:
        break;
    }
  });
}

export default reducer
