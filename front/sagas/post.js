import { all, fork, takeLatest, delay, put } from "redux-saga/effects"

function addPostAPI(data) {
  return axios.post('/api/post', data)
}

//...............................................................................

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);

    yield put({
      type: 'ADD_POST_SUCCESS',
      // data: result.data
    })
  }catch(e) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data
    })
  }

}

//...............................................................................

function* watchAddPost() {
  //throttle은 2초에 딱 한번만 함수를 실행할수 있게 하는것
  yield takeLatest('ADD_POST_REQUEST', addPost, 2000);
};

//...............................................................................

export default function* postSaga() {
  yield all([
    fork(watchAddPost)
  ])
}
