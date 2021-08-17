import './App.css';
import Navbar from './Components/Navbar';
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Navbar/>
      {routes}
    </div>
  );
}

export default App;
