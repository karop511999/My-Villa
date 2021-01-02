import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import {SliderData} from './data/SliderData';

function App() {
  return (
    <>
      < GlobalStyle/>
     <Navbar />
     <Hero slides={SliderData}/>
    </>
  );
}

export default App;
