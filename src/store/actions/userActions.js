import { 
  LOGIN,
  LOGOUT
 } from './../../utils/constants';

export const login = payload => ({
  type: LOGIN,
  payload
});

export const logout = payload => ({
  type: LOGOUT,
  payload
});