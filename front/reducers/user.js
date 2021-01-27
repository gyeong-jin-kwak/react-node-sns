export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

// action creator
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };

    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
  }
};

export default reducer;
