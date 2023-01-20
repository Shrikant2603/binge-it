
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleBottomNavigation from './components/MainNav';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="app">
        <SimpleBottomNavigation/>
      </div>
    </BrowserRouter>
  );
}

export default App;
