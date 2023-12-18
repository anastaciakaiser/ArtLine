import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Genres from './pages/Genres';
import Asian from './pages/Asian';
import European from './pages/European';
import Popular from './pages/Popular';
import New from './pages/New';
import Arts from './pages/Arts';
import Support from './pages/Support';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return( 
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>  
          <Route path='/genres' element={<Genres />}/> 
          <Route path='/asian' element={<Asian />}/> 
          <Route path='/european' element={<European />}/> 
          <Route path='/popular' element={<Popular />}/> 
          <Route path='/new' element={<New />}/> 
          <Route path='/arts' element={<Arts />}/> 
          <Route path='/support' element={<Support />}/> 
          <Route path='/about' element={<About />}/>
        </Routes> 
      </div>
    </>
  )
}

export default App;
