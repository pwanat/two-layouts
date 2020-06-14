import { Brand } from '../interfaces/Brand';

export const SET_ACTIVE_BRAND = 'brandActionTypes/SET_ACTIVE_BRAND';
export interface SetActiveBrand {
  type: typeof SET_ACTIVE_BRAND;
  brand: Brand;
}

export const LOGIN = 'brandActionTypes/LOGIN';
export interface LoginAction {
  type: typeof LOGIN;
  email: string,
  password: string,
  brandId: number,
}

export const LOGIN_REQUEST = 'brandActionTypes/LOGIN_REQUEST';
export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

export const LOGIN_SUCCESS = 'brandActionTypes/LOGIN_SUCCESS';
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  username: string;
  brandId: number;
}

export const LOGIN_FAILURE = 'brandActionTypes/LOGIN_FAILURE';
export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: Error | string;
  brandId: number;
}

export type brandAction =
  | SetActiveBrand
  | LoginAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
