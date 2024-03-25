import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
function App() {
  return (
    <div className='app'>
    <Login/>     
    </div>
 
    //   <Router>
    //   <div className="app">
    //     <Routes>
    //       <Route exact path="/" component={Home} />
    //       <Route path="/login" component={Login} />
    //     </Routes>
    //   </div>
    // </Router>
  
  );
}

export default App;
