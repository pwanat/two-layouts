import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../reducers/rootReducer';
import DefaultLayout from './DefaultLayout';
import { findNextBrand } from '../helpers';
import { Brand } from '../interfaces/Brand';
import * as actionTypes from '../actionTypes/brandActionTypes';
import { setActiveBrand } from '../actionCreators/brandActionCreators';

const mapStateToProps = (state: AppState, props) => {
  return {
    brand: props.brand,
    nextBrand: findNextBrand(state.brands.brands, props.brandKey)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.brandAction>) => ({
  handleLayoutSwitch: (brand: Brand) => {
    dispatch(setActiveBrand(brand));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultLayout);
