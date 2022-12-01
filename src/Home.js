import Facilities from './Facilities';
import Services from './Services';
import Modules from './Modules';
import AboutUs from './AboutUs';
import Location from './Location';
import Slider from './Slider';

const Home = () => {
  return (
    <>
      <Slider/>
      <Services/>
      <Facilities/>
      <Modules/>
      <AboutUs/>
      <Location/>
    </>
  );
};

export default Home;
