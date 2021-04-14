import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D3DEDB',
    },
    secondary: {
      main: '#E3E8E8',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#D0CED6',
    },
  },
});

export default theme;
