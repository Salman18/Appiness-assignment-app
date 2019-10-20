import * as actions from '../actions/user.action';

const INITIAL_STATE = {
  loading: false,
  data: '',
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.DATA_LOADING:
      return {...state, loading: true};
    case actions.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    case actions.DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
