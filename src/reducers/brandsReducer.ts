import * as actions from '../actionTypes/brandActionTypes';
import { Brand } from '../interfaces/Brand';

export interface BrandsState {
  activeBrandId: number,
  brands: Array<Brand>,
}

const initialState: BrandsState = {
  activeBrandId: 1,
  brands: [
    {
      id: 1,
      name: 'Brand A',
      route: '/',
      themeName: 'ThemeA',
      switchDirection: 'left',
      username: '',
      loginError: '',
    },
    {
      id: 2,
      name: 'Brand B',
      route: '/BrandB/',
      themeName: 'ThemeB',
      switchDirection: 'right',
      username: '',
      loginError: '',
    }
  ],

};

export default function brandReducer(
  state: BrandsState = initialState,
  action: actions.brandAction
): BrandsState {
  switch (action.type) {
    case actions.SET_ACTIVE_BRAND:
      return {
        ...state,
        activeBrandId: action.brand.id
      };
    case actions.LOGIN:
      return {
        ...state,
        brands: state.brands.map((item, index) => {
          if (item.id !== action.brandId) {
            return item;
          }
          return {
            ...item,
            username: '',
            loginError: '',
          };
        })
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        brands: state.brands.map((item, index) => {
          if (item.id !== action.brandId) {
            return item;
          }
          return {
            ...item,
            username: action.username,
            loginError: '',
          };
        })
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        brands: state.brands.map((item, index) => {
          if (item.id !== action.brandId) {
            return item;
          }
          return {
            ...item,
            username: '',
            loginError: action.error,
          };
        })
      };
    default:
      return state;
  }
}
