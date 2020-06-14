import * as actions from '../actionTypes/brandActionTypes';
import { Brand } from '../interfaces/Brand';


export interface BrandsState {
  activeBrandId: number,
  brands: Array<Brand>,
  username: string,
}

const initialState: BrandsState = {
  activeBrandId: 1,
  brands: [
    {
      id: 1,
      name: 'Brand A',
      route: '/',
      themeName: 'ThemeA',
      switchDirection: 'left'
    },
    {
      id: 2,
      name: 'Brand B',
      route: '/BrandB/',
      themeName: 'ThemeB',
      switchDirection: 'right'
    }
  ],
  username: '',
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
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        username: ''
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
}
