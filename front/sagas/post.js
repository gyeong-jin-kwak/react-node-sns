import { all, fork, takeLatest, delay, put, throttle, call  } from "redux-saga/effects"
import shortid from "shortid";
import { 
  ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, 
  REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, 
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST,
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, generateDummyPost
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";

function loadPostsAPI(data) {
  return axios.get('/posts', data)
}

function addPostAPI(data) {
  return axios.post('/post', { content: data }, {
    withCredentials: true
  })
}

function removePostAPI(data) {
  return axios.post('/post', data)
}

function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data, {
    withCredentials: true
  }) //POST /post/1/comment
}

//...............................................................................

function* loadPosts(action) {
  try {
    // const result = yield call(loadPostsAPI, action.data);
    yield delay(1000);

    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: generateDummyPost(10)
      // data: result.data
    })
  }catch(e) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response.data
    })
  }
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    // yield delay(1000);
    // const id = shortid.generate()

    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data 
      // data: result.data
    })

    yield put({
      type: ADD_POST_TO_ME, 
      data: result.data.id,
    })
  }catch(e) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data
    })
  }
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield delay(1000);

    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
      // data: result.data
    })

    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    })
  } catch(e) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data
    })
  }
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    // yield delay(1000);

    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
      // data: result.data
    })
  }catch(e) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data
    })
  }
}

//...............................................................................

function* watchLoadPosts() {
  //throttle은 5초에 딱 한번만 함수를 실행할수 있게 하는것
  yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
  // yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
};

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
};

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
};

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
};
//...............................................................................

export default function* postSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchAddComment),
  ])
}
