import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import {SliderData} from './data/SliderData';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Rental from './pages/Rental';
import Aboutinfo from './data/Aboutinfo';

function App() {
  return (
    <>
      < GlobalStyle/>
     <Navbar />
     <Hero slides={SliderData}/>
     <Router>
     <Switch>
     <Route  exact path='/Contact' component={Contact} />
     <Route  exact path='/About' component={About}/>
     <Route  exact path='/Home' component={Home} />
     <Route  exact path='/Rental' component={Rental} />
     </Switch>
     </Router>
    </>
  );
}

export default App;
