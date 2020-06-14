import { createMuiTheme } from '@material-ui/core';
import { BrandTheme } from '../../interfaces/BrandTheme';

const theme: BrandTheme = {
  name: 'ThemeA',
  theme: createMuiTheme({
    palette: {
      primary: { main: '#673AB7' },
      secondary: { main: '#2196F3' },
    },
  })
};

export default theme;
