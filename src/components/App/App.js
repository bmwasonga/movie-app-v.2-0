import './App.css';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/styles';
import SearchAppBar from '../Searchbar/Searchbar';
import Navigation from '../Searchbar/navigation';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Navigation />
      </ThemeProvider>
    </>
  );
}

export default App;
