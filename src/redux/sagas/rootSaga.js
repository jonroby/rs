import { all, call } from "redux-saga/effects";

import properties from "./properties";

import details from "./details";

export default function* rootSaga() {
  yield all([call(properties), call(details)]);
}
