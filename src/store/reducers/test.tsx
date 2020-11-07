import * as actionTypes from "../actions/actionTypes";

const initialState: ITest = {
  value: true
};

const reducer = (
  state: ITest = initialState,
  action: TestAction
): ITest => {
  switch (action.type) {
    case actionTypes.TEST:
      const newTest: ITest = {
        value: !state.value
      };
      return {
        ...state,
        value: newTest.value
      };
  }
  return state;
};

export default reducer;