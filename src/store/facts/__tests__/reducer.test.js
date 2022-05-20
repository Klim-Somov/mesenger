import { FETCH_STATUSES } from "../../../utils/constants";
import { getFactsRequest } from "../actions";
import { factsReducer } from "../reducer";

describe("facts reducer", () => {
  it("sets error to null if called with request action", () => {
    const result = factsReducer(
      {
        data: [],
        status: FETCH_STATUSES.IDLE,
        error: "some error",
      },
      getFactsRequest()
    );

    expect(result.error).toBeNull();
  });
});
