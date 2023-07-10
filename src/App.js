import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Cards from './components/Cards';

import CardsDetails from './components/CardsDetails';


function App() {
  return (
    <>
      <Header />

      <Routes >
        <Route path='/' element={<Cards />} />

        <Route path='/card/:id' element={<CardsDetails />} />


      </Routes>
    </>
  );
}

export default App;
