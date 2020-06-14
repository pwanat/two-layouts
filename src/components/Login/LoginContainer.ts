import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../reducers/rootReducer';
import { login } from '../../actionCreators/brandActionCreators';
import * as actionTypes from '../../actionTypes/brandActionTypes';
import LoginComponent from './LoginComponent';
import { getActiveBrandById } from '../../helpers';

const mapStateToProps = (state: AppState) => {
  const activeBrand = getActiveBrandById(state.brands.brands, state.brands.activeBrandId);
  return {
    isLoading: state.isLoading.loader[actionTypes.LOGIN],
    loginError: state.error[actionTypes.LOGIN],
    brand: activeBrand,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.brandAction>) => ({
  doLogin: (email: string, password: string, brandId: number) => {
    dispatch(login(email, password, brandId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
