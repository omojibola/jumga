import * as actions from '../actions/profileActions';

const initialState = {
  error: null,
  loading: false,
  data: {},
  update: {
    error: null,
    loading: false,
    data: {},
  },
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_PROFILE_START:
      return {
        ...state,
        loading: true,
      };

    case actions.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: { ...payload },
      };

    case actions.FETCH_PROFILE_FAIL:
      return {
        ...state,
        error: true,
        data: payload,
      };

    case actions.FETCH_PROFILE_END:
      return {
        ...state,
        loading: false,
      };

    case actions.UPDATE_STATUS_START:
      return {
        ...state,
        loading: true,
      };

    case actions.UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        update: {
          loading: false,
          error: false,
          data: { payload },
          message: '',
        },
      };
    case actions.UPDATE_STATUS_FAIL:
      return {
        ...state,
        update: {
          loading: false,
          error: true,
          data: payload,
        },
      };

    case actions.UPDATE_STATUS_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
