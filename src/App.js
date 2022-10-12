import './App.css';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
 return(
  <Router>
    <nav>
      <Link to='/' className='link'>Main page</Link>
      <Link to='/about' className='link'>About us</Link>
      <Link to='/contacts' className='link'>Contact us</Link>
    </nav>
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />

    </Routes>
  </Router>
 )
}

export default App;
