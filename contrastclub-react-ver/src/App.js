import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import ProductData from './ProductData'

function App() {
  return (
    <div className="App">
      <Header />
      <Home products={ProductData}/>
    </div>
  );
}

export default App;
