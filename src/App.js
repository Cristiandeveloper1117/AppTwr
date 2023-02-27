import './App.css';
import Aside from './Components/Aside';
import NavBar from './Components/NavBar';
import Seccion from './Components/Seccion';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Seccion/> 
     <Aside/> 
    </div>
  );
}

export default App;
