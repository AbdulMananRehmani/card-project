import './App.css';
import { Routes,Route } from 'react-router-dom';

import Header from './components/Header';
import Cards from './components/Cards';
import Test from './components/Test';

import CardsDetails from './components/CardsDetails';


function App() {
  return (
    <>
        <Header/>

    <Routes >
      <Route path='/' element={<Cards/>}/>
    
      <Route path='/card/:id' element={<CardsDetails/>}/>

      <Route path='/test' element={<Test/>}/>\

    </Routes>
    </>
  );
}

export default App;
