import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Footer from './Footer';
import FilmPresentation from './components/FilmPresentation';
import DetailFilm from './Pages/DetailFilm';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<FilmPresentation />} />
        <Route path='/detail/:idFilm' element={<DetailFilm />} />
        <Route path='/contact' element={<FilmPresentation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
