import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../reducers/rootReducer';
import { login } from '../../actionCreators/brandActionCreators';
import * as actionTypes from '../../actionTypes/brandActionTypes';
import LoginComponent from './LoginComponent';

const mapStateToProps = (state: AppState) => {
  return {
    isLoading: state.isLoading.loader[actionTypes.LOGIN],
    loginError: state.error[actionTypes.LOGIN],
    username: state.brands.username,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.brandAction>) => ({
  doLogin: (email: string, password: string) => {
    dispatch(login(email, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
