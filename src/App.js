import './App.css';
import Hero from './components/hero';
import Navbar from './components/navBar';
import NftGrid from "./components/nftGrid"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <NftGrid/>
    </div>
  );
}

export default App;
