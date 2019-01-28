import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDetailsSuccess, fetchDetailsFailure } from "../actions/creators";
import { FETCH_DETAILS } from "../actions/constants";
import request, { transform } from "./requests/details";

export function* detailsRequest(action) {
  try {
    const response = yield call(...request);

    if (response.status >= 200 && response.status < 300) {
      const data = yield response.json();
      yield put(
        fetchDetailsSuccess(transform(action.payload)(data.properties))
      );
    } else {
      throw response;
    }
  } catch (error) {
    yield put(fetchDetailsFailure(error));
  }
}

function* details() {
  yield takeEvery(FETCH_DETAILS, detailsRequest);
}

export default details;
