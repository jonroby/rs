import {
  FETCH_DETAILS,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE,
} from "../actions/constants";

const initialState = {
  id: null,
  address: {},
  images: [],
};

const details = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return state;
    case FETCH_DETAILS_SUCCESS:
      return action.payload;
    case FETCH_DETAILS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default details;
