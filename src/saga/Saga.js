import { call, takeLatest, put } from "redux-saga/effects";

function* fetchNewsSaga(action) {
  console.log(action);
  const result = yield call(() =>
    fetch(
      `https://newsapi.org/v2/top-headlines?source=google-news&country=${
        action.countryCode
      }&apiKey=api_key`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      })
  );
  yield put({ type: "FETCH_NEWS_SUCCESS", payload: result });

  if (action.payload.callback) {
    action.payload.callback();
  }
}

export function* watchNewsAction() {
  yield takeLatest("FETCH_NEWS", fetchNewsSaga);
}
