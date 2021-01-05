import * as actions from '../actions/authActions';

const initialState = {
  uid: '',
  email: '',
  shopName: '',
  authenticated: false,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_START:
      return { ...state, uid: null, loading: true, authenticated: false };

    case actions.AUTH_END:
      return { ...state, loading: false };

    case actions.AUTH_FAIL:
      return { ...state, error: payload, loading: false };

    case actions.AUTH_SUCCESS:
      return {
        ...state,
        uid: payload.uid,
        email: payload.email,
        shopName: payload.shopName,
        authenticated: true,
        loading: false,
        error: false,
      };

    case actions.AUTH_RESET:
      return { ...state, authenticated: false, uid: '' };

    case actions.STEP_TWO_START:
      return { ...state, loading: true, authenticated: false };

    case actions.STEP_TWO_END:
      return { ...state, loading: false };

    case actions.STEP_TWO_FAIL:
      return { ...state, error: payload, loading: false };

    case actions.STEP_TWO_SUCCESS:
      return {
        ...state,

        authenticated: true,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default authReducer;
