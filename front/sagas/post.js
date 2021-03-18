import { all, fork, takeLatest, delay, put } from "redux-saga/effects"
import { 
  ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, 
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, 
} from "../reducers/post";

function addPostAPI(data) {
  return axios.post('/api/post', data)
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data)
}

//...............................................................................

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);

    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
      // data: result.data
    })
  }catch(e) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data
    })
  }
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(1000);

    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
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

function* watchAddPost() {
  //throttle은 2초에 딱 한번만 함수를 실행할수 있게 하는것
  yield takeLatest(ADD_POST_REQUEST, addPost);
};

function* watchAddComment() {
  //throttle은 2초에 딱 한번만 함수를 실행할수 있게 하는것
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
};
//...............................................................................

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
  ])
}
