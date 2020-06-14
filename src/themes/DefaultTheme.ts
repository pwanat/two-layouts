import { createMuiTheme, Theme } from '@material-ui/core';

const theme: Theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: '#FFF'
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        }
      },
    },

  },
});

export default theme;
