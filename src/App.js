import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {routes}
      <Footer/>
    </div>
  );
}

export default App;
