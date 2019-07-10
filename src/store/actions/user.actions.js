import { 
  LOGIN,
  LOGOUT
 } from '../../utils/constants/redux';

export const login = payload => ({
  type: LOGIN,
  payload
});

export const logout = payload => ({
  type: LOGOUT,
  payload
});