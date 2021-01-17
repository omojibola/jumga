import * as actionTypes from '../actions/userActions';

const initialState = {
  userDetails: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_DETAIL:
      return {
        ...state,
        basket: [...state.userDetails, action.item],
      };

    default:
      return state;
  }
};

export default userReducer;
