import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import SharedLayout from './pages/SharedLayout';
import AboutPage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage'
import Helppage from './pages/Helppage'
import Pricingpage from './pages/Pricingpage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}> 
          <Route index element={<Homepage />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/contact' element={<Contactpage/>} />
          <Route path='/help' element={<Helppage/>} />
          <Route path='/pricing' element={<Pricingpage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
