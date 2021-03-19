import { all, fork, takeLatest, delay, put } from "redux-saga/effects"
import shortid from "shortid";
import { 
  ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, 
  REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, 
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, 
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";

function addPostAPI(data) {
  return axios.post('/api/post', data)
}

function removePostAPI(data) {
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
    const id = shortid.generate()

    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data
      }
      // data: result.data
    })

    yield put({
      type: ADD_POST_TO_ME,
      data: id,
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

function* watchRemovePost() {
  //throttle은 2초에 딱 한번만 함수를 실행할수 있게 하는것
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
};

function* watchAddComment() {
  //throttle은 2초에 딱 한번만 함수를 실행할수 있게 하는것
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
};
//...............................................................................

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchAddComment),
  ])
}
