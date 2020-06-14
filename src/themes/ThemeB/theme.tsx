import { createMuiTheme } from '@material-ui/core';
import { BrandTheme } from '../../interfaces/BrandTheme';

const theme: BrandTheme = {
  name: 'ThemeB',
  theme: createMuiTheme({
    palette: {
      primary: { main: '#235A27' },
      secondary: { main: '#994499' },
    },
  })
};

export default theme;
