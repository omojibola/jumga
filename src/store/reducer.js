import * as actionTypes from './actions';

const initialState = {
    basket: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case actionTypes.REMOVE_ITEM:
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
            }
            return {
                ...state,
                basket: newBasket
            };
        case actionTypes.EMPTY_BASKET:
            return {
                ...state,
                basket: []
            };
        default:
            return state;

    }
};

export default reducer;