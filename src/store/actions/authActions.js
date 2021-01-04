import database, { firebase } from '../../firebase/fire';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_START = 'AUTH_START';
export const AUTH_END = 'AUTH_END';

export const STEP_TWO_SUCCESS = 'STEP_TWO_SUCCESS';
export const STEP_TWO_FAIL = 'STEP_TWO_FAIL';
export const STEP_TWO_START = 'STEP_TWO_START';
export const STEP_TWO_END = 'STEP_TWO_END';

export const SignUp = (data) => async (dispatch) => {
  dispatch({ type: AUTH_START });
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    const user = firebase.auth().onAuthStateChanged();
    console.log(user.email);

    await database.collection('users').doc(res.user.uid).set({
      shopName: data.shopName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      createdAt: firebase.firestore.Timestamp.now(),
      userId: res.user.uid,
      status: 'Pending',
    });
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        uid: res.user.uid,
        shopName: res.user.shopName,
        email: res.user.email,
        phoneNumber: res.user.phoneNumber,
      },
    });
  } catch (error) {
    dispatch({ type: AUTH_FAIL, payload: error.message });
  }
  dispatch({ type: AUTH_END });
};

export const SignUpStepTwo = (data) => async (dispatch, state) => {
  dispatch({ type: STEP_TWO_START });

  try {
    const { uid } = state().auth.uid;
    console.log(uid);
    await database.collection('users').doc(uid).update({
      bankName: data.bankName,
      accountNumber: data.accountNumber,
      country: data.country,
    });
    dispatch({
      type: STEP_TWO_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: STEP_TWO_FAIL, payload: error.message });
  }
  dispatch({ type: STEP_TWO_END });
};
