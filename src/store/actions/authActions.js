import database, { firebase } from '../../firebase/fire';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_START = 'AUTH_START';
export const AUTH_END = 'AUTH_END';
export const AUTH_RESET = 'AUTH_RESET';

export const STEP_TWO_SUCCESS = 'STEP_TWO_SUCCESS';
export const STEP_TWO_FAIL = 'STEP_TWO_FAIL';
export const STEP_TWO_START = 'STEP_TWO_START';
export const STEP_TWO_END = 'STEP_TWO_END';

//sign up user
export const SignUp = (data) => async (dispatch) => {
  dispatch({ type: AUTH_START });
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    VerifyAuth();

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

//listen to auth verification
export const VerifyAuth = () => async (dispatch) => {
  try {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: AUTH_SUCCESS,
          payload: user,
        });
      } else {
        dispatch({
          type: AUTH_FAIL,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

//step 2 sign up
export const SignUpStepTwo = (data) => async (dispatch, state) => {
  dispatch({ type: STEP_TWO_START });

  try {
    const uid = state().auth.uid;
    await database.collection('users').doc(uid).update({
      bankName: data.bankName,
      accountName: data.accountName,
      accountNumber: data.accountNumber,
      country: data.country,
      dispatchRider: data.dispatchRider,
    });
    dispatch({
      type: STEP_TWO_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: STEP_TWO_FAIL, payload: error.message });
  }
  dispatch({ type: STEP_TWO_END });
};

//Log in User
export const SignIn = (data) => async (dispatch) => {
  dispatch({ type: AUTH_START });
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password);

    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        uid: res.user.uid,
        email: res.user.email,
        phoneNumber: res.user.phoneNumber,
      },
    });
  } catch (error) {
    dispatch({ type: AUTH_FAIL, payload: error.message });
  }
  dispatch({ type: AUTH_END });
};

//sign out user

export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAIL = 'SIGN_OUT_FAIL';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_END = 'SIGN_OUT_END';

export const SignOut = () => async (dispatch) => {
  dispatch({ type: SIGN_OUT_START });
  try {
    await firebase.auth().signOut();
    dispatch({ type: SIGN_OUT_SUCCESS });
  } catch (error) {
    dispatch({ type: SIGN_OUT_FAIL, payload: error.message });
    console.log(error);
  }
  dispatch({ type: SIGN_OUT_END });
};
