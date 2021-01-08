import * as actionTypes from '../actions/shopActions';
import * as actions from '../../store/actions/productActions';

const initialState = {
  basket: [],
  fetchProduct: {
    error: null,
    loading: false,
    products: []
  }
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case actionTypes.REMOVE_ITEM:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case actionTypes.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    case actions.FETCH_ALL_PRODUCT_START:
      return {
        ...state,
        fetchProduct: {
         ...state.fetchProduct,
          loading: true
        },
      };

    case actions.FETCH_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        fetchProduct: {
          ...state.fetchProduct,
          loading: false,
          products: action.payload,
        },
      };
    case actions.FETCH_ALL_PRODUCT_FAIL:
      return {
        ...state,
        fetchProduct: {
          ...state.fetchProduct,
          loading: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
};

export default shopReducer;
