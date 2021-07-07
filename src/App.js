import logo from './logo.svg';
import './App.css';

function App() {

  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
