import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
  return (
    // <div className='app'>
    // {/* <Login/>      */}
    // <Home/>
    // </div>
 
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/login' element={<Login />} />
 {/* <Route path='/products' element={<Products />} />
 <Route path='/customers' element={<Customers />} /> */}
</Routes>
  
  );
}

export default App;
