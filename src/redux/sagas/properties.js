import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchPropertiesSuccess,
  fetchPropertiesFailure,
} from "../actions/creators";
import { FETCH_PROPERTIES } from "../actions/constants";
import request, { transform } from "./requests/properties";

export function* propertiesRequest() {
  try {
    const response = yield call(...request);

    if (response.status >= 200 && response.status < 300) {
      const data = yield response.json();
      yield put(fetchPropertiesSuccess(transform(data.properties)));
    } else {
      throw response;
    }
  } catch (error) {
    yield put(fetchPropertiesFailure(error));
  }
}

function* properties() {
  yield takeEvery(FETCH_PROPERTIES, propertiesRequest);
}

export default properties;
