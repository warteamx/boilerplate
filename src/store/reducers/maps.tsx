import * as actionTypes from "../actions/actionTypes";

const initialState: any = {
  savedPlaces: []
};

const reducer = (
  state: any  = initialState,
  action: any
): any => {
  switch (action.type) {
    case actionTypes.ADD_MAP:
        
      return {
        ...state,
        savedPlaces: state.savedPlaces.concat(action.Map)
      };
  }
  return state;
};

export default reducer;