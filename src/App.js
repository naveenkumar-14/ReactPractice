import logo from './logo.svg';
import './App.css';

//importing Home Page
import Home from './Pages/Home'
import Mainlayout from './Layout/Mainlayout';
function App() {
  return (
    <div className="App">
      <Home/>
      <Mainlayout/>
    </div>
  );
}

export default App;
