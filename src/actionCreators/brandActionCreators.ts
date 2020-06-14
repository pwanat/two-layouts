import * as actions from '../actionTypes/brandActionTypes';
import { Brand } from '../interfaces/Brand';

export function setActiveBrand(
  brand: Brand
): actions.SetActiveBrand {
  return {
    type: actions.SET_ACTIVE_BRAND,
    brand
  };
}

export function login(
  email: string,
  password: string,
  brandId: number,
): actions.LoginAction {
  return {
    type: actions.LOGIN,
    email,
    password,
    brandId,
  };
}

export function loginRequest(): actions.LoginRequestAction {
  return {
    type: actions.LOGIN_REQUEST
  };
}

export function loginSuccess(
  username: string,
  brandId: number
): actions.LoginSuccessAction {
  return {
    type: actions.LOGIN_SUCCESS,
    username,
    brandId
  };
}

export function loginFailure(
  error: Error | string,
  brandId: number,
): actions.LoginFailureAction {
  return {
    type: actions.LOGIN_FAILURE,
    error,
    brandId,
  };
}
