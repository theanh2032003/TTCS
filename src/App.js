import './App.css';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Widgets from './components/Widgets'
function App() {
  return (
    <div className="app">
      
      <SideBar/>
      <div className='mainContainer'>
      <Feed/>
      <Widgets/>        
      </div>

    </div>
  );
}

export default App;
