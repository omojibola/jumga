import * as actions from '../actions/productActions';

const initialState = {
  addProduct: {
    error: null,
    loading: false,
    data: {},
  },
  fetchProduct: {
    error: null,
    loading: false,
    data: [],
  },
  fetchAllProduct: {
    error: null,
    loading: false,
    products: [],
  },
  successful: false,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_PRODUCT_START:
      return {
        ...state,
        addProduct: {
          ...state.addProduct,
          loading: true,
        },
      };

    case actions.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProduct: {
          ...state.addProduct,
          loading: false,
          error: false,
          data: payload,
        },
      };

    case actions.ADD_PRODUCT_FAIL:
      return {
        ...state,
        addProduct: {
          ...state.addProduct,
          loading: false,
          error: payload,
        },
      };

    case actions.FETCH_PRODUCT_START:
      return {
        ...state,
        fetchProduct: {
          error: false,
          loading: true,
          data: [],
        },
      };

    case actions.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        fetchProduct: {
          loading: false,
          error: false,
          data: payload,
        },
      };

    case actions.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        fetchProduct: {
          loading: false,
          error: payload,
        },
      };

    case actions.FETCH_ALL_PRODUCT_START:
      return {
        ...state,
        fetchAllProduct: {
          ...state.fetchAllProduct,
          loading: true,
        },
      };
    case actions.FETCH_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        fetchAllProduct: {
          ...state.fetchAllProduct,
          loading: false,
          error: false,
          products: payload,
        },
      };
    case actions.FETCH_ALL_PRODUCT_FAIL:
      return {
        ...state,
        fetchAllProduct: {
          ...state.fetchAllProduct,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default productReducer;
