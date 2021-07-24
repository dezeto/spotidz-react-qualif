import logo from './logo.svg';
import './App.scss';
import SamplePage from './pages/SamplePage/SamplePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistPage from './pages/ArtistPage/ArtistPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchPage from './pages/SearchPage/SearchPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

function App() {
  return ( 
    <Router>
      {/* <Header/> */}
        <Switch>
          <Route path="/album/:id">
            <AlbumPage/>
          </Route>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/favorite">
            <FavoritePage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;