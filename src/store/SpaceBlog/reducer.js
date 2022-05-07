import { FETCH_STATUSES } from "../../utils/constants";
import {
  GET_FACTS_FALURE,
  GET_FACTS_REQUEST,
  GET_FACTS_SUCCESS,
} from "./actions";

export const initialState = {
  data: [],
  status: FETCH_STATUSES.IDLE,
  error: null,
};

export const factsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FACTS_REQUEST: {
      return { ...state, status: FETCH_STATUSES.REQUEST, error: null };
    }
    case GET_FACTS_FALURE: {
      return { ...state, status: FETCH_STATUSES.FAILURE, error: payload };
    }
    case GET_FACTS_SUCCESS: {
      return { ...state, status: FETCH_STATUSES.SUCCESS, data: payload };
    }
    default:
      return state;
  }
};
