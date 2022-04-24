import { apiUrl } from "../../utils/constants";

export const GET_FACTS_REQUEST = "ARTICLES::GET_FACTS_REQUEST";
export const GET_FACTS_SUCCESS = "ARTICLES::GET_FACTS_SUCCESS";
export const GET_FACTS_FALURE = "ARTICLES::GET_FACTS_FALURE";

export const getFactsRequest = () => ({
  type: GET_FACTS_REQUEST,
});

export const getFactsSuccess = (data) => ({
  type: GET_FACTS_SUCCESS,
  payload: data,
});

export const getFactsFalure = (error) => ({
  type: GET_FACTS_FALURE,
  payload: error,
});

export const getFacts = () => async (dispatch) => {
  try {
    dispatch(getFactsRequest());

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`failed with ${response.status}`);
    }
    const result = await response.json();
    const data = result.text;
    dispatch(getFactsSuccess(data));
  } catch (e) {
    dispatch(getFactsFalure(e.message));
  }
};
