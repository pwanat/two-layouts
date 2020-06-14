import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';


const AppRoute = ({
  component: Component,
  layout: Layout,
  theme,
  brand,
  brandKey,
  ...rest
}) => {

  const generateClassName = createGenerateClassName({
    seed: `${theme.name}`,
  });

  return (
    <Route
      {...rest}
    >
      {({ match }) => (
        <StylesProvider generateClassName={generateClassName}>
          <ThemeProvider theme={theme.theme}>
            <CssBaseline />
            <Layout brand={brand} brandKey={brandKey}>
              <Component brand={brand} />
            </Layout>
          </ThemeProvider>
        </StylesProvider>
      )}
    </Route>
  );
};

export default AppRoute;
