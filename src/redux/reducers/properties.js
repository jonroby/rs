import {
  FETCH_PROPERTIES,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
} from "../actions/constants";

const initialState = {
  properties: [],
};

const properties = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return state;
    case FETCH_PROPERTIES_SUCCESS:
      return { ...state, properties: action.payload };
    case FETCH_PROPERTIES_FAILURE:
      return state;
    default:
      return state;
  }
};

export default properties;
