import database from '../../firebase/fire';

export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAIL = 'FETCH_PROFILE_FAIL';
export const FETCH_PROFILE_START = 'FETCH_PROFILE_START';
export const FETCH_PROFILE_END = 'FETCH_PROFILE_END';

export const UPDATE_STATUS_SUCCESS = 'UPDATE_STATUS_SUCCESS';
export const UPDATE_STATUS_FAIL = 'UPDATE_STATUS_FAIL';
export const UPDATE_STATUS_START = 'UPDATE_STATUS_START';
export const UPDATE_STATUS_END = 'UPDATE_STATUS_END';

//fetch profile
export const fetchProfile = () => async (dispatch, state) => {
  dispatch({ type: FETCH_PROFILE_START });
  try {
    const uid = state().auth.uid;
    const res = await database.collection('users').doc(uid).get();
    const userProfile = res.data();
    dispatch({ type: FETCH_PROFILE_SUCCESS, payload: userProfile });
  } catch (error) {
    dispatch({ type: FETCH_PROFILE_FAIL, payload: error });
  }
  dispatch({ type: FETCH_PROFILE_END });
};

//update profile status
export const updateProfileStatus = (user) => async (dispatch, state) => {
  const uid = state().auth.uid;

  dispatch({ type: UPDATE_STATUS_START });
  try {
    await database
      .collection('users')
      .doc(uid)
      .update({
        ...user,
        status: 'Approved',
      });

    dispatch({
      type: UPDATE_STATUS_SUCCESS,
      message: 'Updated Successfully',
    });
  } catch (error) {
    dispatch({ type: UPDATE_STATUS_FAIL, payload: error.message });
  }
  dispatch({ type: UPDATE_STATUS_END });
};
