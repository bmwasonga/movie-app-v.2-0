import './App.css';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/styles';
import SearchAppBar from '../Searchbar/Searchbar';
import Navigation from '../Searchbar/navigation';
import Moviecontainer from '../container/MovieContainer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Navigation />
        <Moviecontainer />
        <Moviecontainer />
        <Moviecontainer />
        <Moviecontainer />
      </ThemeProvider>
    </>
  );
}

export default App;
