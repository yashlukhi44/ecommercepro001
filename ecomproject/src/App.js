import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Container/Home';
import Productlist from './Container/Productlist';
import Cart from './Container/Cart';
import Cheakout from './Container/Cheakout';


function App() {
  return (
    <div className="App">
      <Header/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Productlist/>}/>
          <Route path='/cart/:id' element={<Cart/>}/>
          <Route path='/cheakout/:id' element={<Cheakout/>}/>
        </Routes>
    
      <Footer/>
    </div>
  );
}

export default App;
