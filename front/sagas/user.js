import { all, fork, delay, put, takeLatest, call } from "redux-saga/effects"
import { 
  LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST,
  LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST,
  SIGN_UP_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_FAILURE,
  FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE
} from '../reducers/user';
import axios from 'axios';

function logInAPI(data) {
  // 3 실제로 서버에 요청을 보냄
  return axios.post('/api/login', data)
}

function logOutAPI() {
  return axios.post('/api/logout')
}

function followAPI() {
  return axios.post('/api/follow')
}

function unfollowAPI() {
  return axios.post('/api/unfollow')
}
//...............................................................................

function* logIn(action) {
  try {
    console.log('saga Login')
    // 2 action이 실행되면 불러져오는 generator 함수
    // yield는 await와 비슷한 역할을 하고 fork는 await를 쓰지 않은 효과
    // 아래 예제에서 fork를 사용하게 되면 result.data에서 result가 없는 꼴이 되기 때문에 안됨

    // const result = yield call(logInAPI, action.data);
    yield delay(1000);

    //logInAPI(action.data)
    //call(logInAPI, arction.data)
    //첫번쨰 자리가 함수고 그다음부터는 매개변수

    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    })
  } catch(err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    })
  }
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);

    yield put({
      type: LOG_OUT_SUCCESS,
      // data: result.data
    })
  } catch(err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data // back route-user send errMessage
    })
  }
}

function signUpAPI(data) {
  return axios.post('http://localhost:3065/user', data)
}

function* signUp(action) {
  try {
    // console.log(action.data);
    const result = yield call(signUpAPI, action.data);
    console.log(result);

    // yield delay(1000);

    yield put({
      type: SIGN_UP_SUCCESS,
    })
  } catch(err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data
    })
  }
}

function* follow(action) {
  try {

    // const result = yield call(followAPI, action.data);
    yield delay(1000);

    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    })
  } catch(err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    })
  }
}

function* unfollow(action) {
  try {

    // const result = yield call(followAPI, action.data);
    yield delay(1000);

    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    })
  } catch(err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    })
  }
}

//...............................................................................

// 0 eventListener 를 만들어서 all을 사용해서 등록해줌
function* watchLogIn() {
  // 1 LOG_IN 함수가 실행되면 logIn함수 호출
  // take 함수를 실행할때까지 기다림 - 일회용 때문에 while(true) 사용 = takeEvery = takeLatest 중복 클릭인식시 마지막 것만 인식 (동시에 로딩중인것만 취소처리 front에서만 그렇게 처리 readme 참고) 해서 서버에서 연달아 오는 요청 검증필요
  yield takeLatest(LOG_IN_REQUEST, logIn);
};

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
};

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow)
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow)
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogout),
    fork(watchSignup),
    fork(watchFollow),
    fork(watchUnfollow),
  ])
}
