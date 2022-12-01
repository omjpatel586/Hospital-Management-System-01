import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Facilities from './Facilities';
import Services from './Services';
import AboutUs from './AboutUs';
import ContactUs from './contactus';
import Header from './Header';
import Footer from './Footer';
import Blog from './blog';
import Gallery from './gallery';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/facilities" element={ <Facilities/> }></Route>
        <Route path="/services" element={ <Services/> }></Route>
        <Route path="/aboutus" element={ <AboutUs/> }></Route>
        <Route path="/contactus" element={ <ContactUs/> }></Route>
        <Route path="/blog" element={ <Blog/> }></Route>
        <Route path="/gallery" element={ <Gallery/> }></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
