import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Dashboard from './Container/Dashboard';
import Admin from './Container/Admin';
import Header from './Component/Header';
import Footer from './Component/Footer'
import View from './Container/View';
import Login from './Container/Login';
import Register from './Container/Register';
import Add from './Container/Add'; 
 
function App() {
  let sessionData = sessionStorage.getItem('username');

  return (
    <div className="App">
      {sessionData !== null?<Header />:""}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      {sessionData !== null?<Footer />:""}
    </div>
  );
}

export default App;
