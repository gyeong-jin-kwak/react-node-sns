import { all, fork, delay, put, takeLatest } from "redux-saga/effects"

function logInAPI(data) {
  // 3 실제로 서버에 요청을 보냄
  return axios.post('/api/login', data)
}

function logOutAPI() {
  return axios.post('/api/logout')
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
      type: 'LOG_IN_SUCCESS',
      data: action.data,
    })
  } catch(e) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    })
  }
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);

    yield put({
      type: 'LOG_OUT_SUCCESS',
      // data: result.data
    })
  } catch(e) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data
    })
  }
}

//...............................................................................

// 0 eventListener 를 만들어서 all을 사용해서 등록해줌
function* watchLogIn() {
  // 1 LOG_IN 함수가 실행되면 logIn함수 호출
  // take 함수를 실행할때까지 기다림 - 일회용 때문에 while(true) 사용 = takeEvery = takeLatest 중복 클릭인식시 마지막 것만 인식 (동시에 로딩중인것만 취소처리 front에서만 그렇게 처리 readme 참고) 해서 서버에서 연달아 오는 요청 검증필요
  yield takeLatest('LOG_IN_REQUEST', logIn);
};

function* watchLogout() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
};

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogout),
  ])
}
