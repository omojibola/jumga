import database, { firebase, storage } from '../../firebase/fire';

// Add product
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL';
export const ADD_PRODUCT_START = 'ADD_PRODUCT_START';
export const ADD_PRODUCT_END = 'ADD_PRODUCT_END';

export const addProduct = (data) => async (dispatch, getState) => {
  dispatch({ type: ADD_PRODUCT_START });

  const imageRef = storage.ref(`images/${data.productImage.name}`);
  await imageRef.put(data.productImage);

  const url = await imageRef.getDownloadURL();

  try {
    const uid = getState().firebase.auth.uid;
    await database.collection('products').add({
      productName: data.productName,
      price: data.price,
      description: data.description,
      productImage: url || '',
      createdBy: uid,
      createdAt: firebase.firestore.Timestamp.now(),
    });

    dispatch({ type: ADD_PRODUCT_SUCCESS });
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error });
  }
  dispatch({ type: ADD_PRODUCT_END });
};

//fetch shop owner's products
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAIL = 'FETCH_PRODUCT_FAIL';
export const FETCH_PRODUCT_START = 'FETCH_PRODUCT_START';
export const FETCH_PRODUCT_END = 'FETCH_PRODUCT_END';

export const fetchProduct = () => async (dispatch, state) => {
  const uid = state().auth.uid;
  dispatch({ type: FETCH_PRODUCT_START });
  let data = [];
  try {
    const productsRef = await database
      .collection('products')
      .where('createdBy', '==', uid)
      .get();

    productsRef.forEach((doc) => {
      if (doc.id !== '' || doc.id !== null) {
        data.push({
          id: doc.id,
          ...doc.data({ serverTimestamps: 'estimate' }),
        });
      }
    });
    data = data.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
    dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_FAIL, payload: error });
  }
  dispatch({ type: FETCH_PRODUCT_END });
};

//fetch all products
export const FETCH_ALL_PRODUCT_SUCCESS = 'FETCH_ALL_PRODUCT_SUCCESS';
export const FETCH_ALL_PRODUCT_FAIL = 'FETCH_ALL_PRODUCT_FAIL';
export const FETCH_ALL_PRODUCT_START = 'FETCH_ALL_PRODUCT_START';
export const FETCH_ALL_PRODUCT_END = 'FETCH_ALL_PRODUCT_END';

export const fetchAllProducts = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_ALL_PRODUCT_START });
  console.log('fetching all products');
  let allProducts = [];
  try {
    const res = await database.collection('products').get();
    const products = res.data();

    products.forEach((doc) => {
        allProducts.push({
          id: doc.id,
          ...doc.data()
        });
    });
    dispatch({ type: FETCH_ALL_PRODUCT_SUCCESS, payload: allProducts });
  } catch (error) {
    dispatch({ type: FETCH_ALL_PRODUCT_FAIL, payload: error });
  }
  dispatch({ type: FETCH_ALL_PRODUCT_END });
};
