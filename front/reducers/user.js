export const initialState = {
  isLoggingIn: false, // 로그인 시도중
  isLoggedIn: false,
  isLoggingOut: false, // 로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {},
};

// action creator
export const loginRequestAction = () => {
  return {
    type: 'LOG_IN_REQUEST',
  };
};

export const logoutRequestAction = () => {
  return {
    type: 'LOG_OUT_REQUEST',
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'LOG_IN_REQUEST':
      console.log('reducer login')
      return {
        ...state,
        isLoggingIn: true,
      };

    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: {...action.data, nickname: 'gyeongjin'},
      };

    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };

    case 'LOG_OUT_REQUEST':
      return {
        ...state,
        isLoggingOut: true,
      };

    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };

    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
      };
  }
};

export default reducer;
