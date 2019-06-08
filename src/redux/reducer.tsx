import ActionTypes from "../actions/ActionTypes";

const initialState = {
  SIDEBAR_OPEN: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Type.SIDEBAR_OPEN:
      return {
        ...state,
        SIDEBAR_OPEN: !state.SIDEBAR_OPEN
      };
    default:
      return state;
  }
};
