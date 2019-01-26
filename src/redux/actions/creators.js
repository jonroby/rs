import * as types from "./constants";

export const fetchProperties = payload => ({
  type: types.FETCH_PROPERTIES,
  payload
});

export const fetchPropertiesSuccess = payload => ({
  type: types.FETCH_PROPERTIES_SUCCESS,
  payload
});

export const fetchPropertiesFailure = payload => ({
  type: types.FETCH_PROPERTIES_FAILURE,
  payload
});
