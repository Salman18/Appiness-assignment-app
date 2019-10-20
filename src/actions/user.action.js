import users from '../reducers/userList.json';

export const DATA_LOADING = 'DATA_LOADING';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';

export const userListRequest = () => ({
  type: DATA_LOADING,
});

export const userListSuccess = data => ({
  type: DATA_SUCCESS,
  data,
});

export const userListFailure = err => ({
  type: DATA_FAILURE,
  err,
});

export const getData = () => {
  return async dispatch => {
    dispatch(userListRequest());
    try {
      dispatch(userListSuccess(users));
      return;
    } catch (error) {
      dispatch(userListFailure(error));
    }
  };
};
