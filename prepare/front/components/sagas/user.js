import { all, fork } from "redux-saga/effects";

function logInAPI(data) {
  return axios.post("/api/login", data);
}
function* logIn(action) {
  try {
    // call은 동기 처리(블러킹), fork는 비동기 처리(논블러킹)
    // const result = yield call(logInAPI);
    yield delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logOut");
}
function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  //   while (true) {
  //     yield take("LOG_IN_REQUEST", logIn);
  //   }
  //   yield takeEvery("LOG_IN_REQUEST", logIn);
  // takeLatest는 실수로 여러 차례 클릭했을때 하나만 실행(서버의 응답을 취소)
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeEvery("LOG_OUT_REQUEST", logOut);
}

function* watchAddPost() {
  yield takeEvery("ADD_POST_REQUEST", addPost);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
