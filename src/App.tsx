import React, { FunctionComponent } from 'react';
import './style.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import configureStore from './store/configureStore';
import Routes from './Routes';
import theme from './themes/DefaultTheme';

const store = configureStore();

const App: FunctionComponent = props => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>

  );
};

export default App;
