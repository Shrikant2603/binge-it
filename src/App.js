
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@mui/material';
import Trending from './pages/trending/Trending';
import Movies from './pages/movies/Movies';
import Series from './pages/series/Series';
import Search from './pages/search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="app">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
