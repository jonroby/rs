import * as types from "./constants";

export const fetchProperties = payload => ({
  type: types.FETCH_PROPERTIES,
  payload,
});

export const fetchPropertiesSuccess = payload => ({
  type: types.FETCH_PROPERTIES_SUCCESS,
  payload,
});

export const fetchPropertiesFailure = payload => ({
  type: types.FETCH_PROPERTIES_FAILURE,
  payload,
});

export const fetchDetails = payload => ({
  type: types.FETCH_DETAILS,
  payload,
});

export const fetchDetailsSuccess = payload => ({
  type: types.FETCH_DETAILS_SUCCESS,
  payload,
});

export const fetchDetailsFailure = payload => ({
  type: types.FETCH_DETAILS_FAILURE,
  payload,
});
