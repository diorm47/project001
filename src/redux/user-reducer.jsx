const LOGIN_USER = "LOGIN_USER";

const initialState = {
  user: {
    username: "",
    password: "",
    is_logged: false,
    email: "",
    picture: "",
    email_verified: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    default:
      return state;
  }
};

export const loginUserAction = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export default userReducer;
