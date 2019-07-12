import { LOGIN, LOGOUT } from '../../utils/constants/redux';

const InitialState = {
  user: {},
  isAuthenticated: false,
  token: null
};

const User = (state = InitialState, action) => {
  switch (action.type) {

    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token
      };

    case LOGOUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        token: null
      }

    default:
      return state
  }
}

export default User;