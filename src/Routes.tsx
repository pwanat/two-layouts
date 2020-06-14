import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';
import React from 'react';
import { AppState } from './reducers/rootReducer';
import AppRoute from './AppRoute';
import DefaultLayout from './layouts/DefaultLayoutContainer';
import BrandComponent from './components/Brand/BrandComponent';
import LoginContainer from './components/Login/LoginContainer';
import { getThemeByName } from './helpers';
import WithTransition from './components/WithTransition/WithTransition';

const Routes = (props) => {
  const { brands, location } = props;
  // In case brands have different routes this would need some additional login

  const isAnimated = location.query && location.query.isAnimated ? location.query.isAnimated : false;
  const activeBrand = brands.brands.find(x => x.id === brands.activeBrandId);
  return (
    <>
      <WithTransition
        routeLocation={location}
        switchDirection={activeBrand.switchDirection}
        isAnimated={isAnimated}
      >
        <section className="route-section">
          {
            brands.brands.map((item, index) => {
              return (
                <Switch key={`switch-${item.id}`} location={location}>
                  <AppRoute
                    exact
                    path={`${item.route}`}
                    component={BrandComponent}
                    layout={DefaultLayout}
                    theme={getThemeByName(item.themeName)}
                    brand={item}
                    brandKey={index}
                    key={`${location.key}`}
                  />
                  <AppRoute
                    path={`${item.route}login`}
                    component={LoginContainer}
                    layout={DefaultLayout}
                    theme={getThemeByName(item.themeName)}
                    brand={item}
                    brandKey={index}
                    key={`${location.key}-login`}
                  />
                </Switch>
              );
            })
          }
        </section>
      </WithTransition>
    </>
  );

};

const mapStateToProps = (state: AppState, props) => {
  return {
    brands: state.brands,
  };
};

export default connect(
  mapStateToProps,
  null,
)(withRouter(Routes));
