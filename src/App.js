import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import AllRouting from './Routes/AllRouting';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideNav/>
      <AllRouting/>
    
    </div>
  );
}

export default App;
