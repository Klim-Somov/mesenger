import {
  getFacts,
    getFactsRequest,
    getFactsSuccess,
    GET_FACTS_REQUEST,
    GET_FACTS_SUCCESS,
  } from "../actions";
  
  describe("getArticlesReq", () => {
    it("returns obj with predefined type", () => {
      const expected = {
        type: GET_FACTS_REQUEST,
      };
  
      const received = getFactsRequest();
  
      expect(received).toEqual(expected);
    });
  });
  

  // describe("getFacts", () => {
  //   it("dispatches getArticlesReq", () => {
  //     const mockDispatch = jest.fn();
  //     fetch.mockResponse(JSON.stringify([]));
  
  //     getFacts()(mockDispatch);
  
  //     expect(mockDispatch).toHaveBeenCalledWith(getFactsRequest());
  //   });
  
  //   it("dispatches getFactsSuc with fetch result", async () => {
  //     const data = [{ name: "test" }];
  //     fetch.mockResponse(JSON.stringify(data));
  //     const mockDispatch = jest.fn();
  
  //     await getFacts()(mockDispatch);
  //     expect(mockDispatch).toHaveBeenLastCalledWith(getFactsSuccess(data));
  //   });
  // });
  