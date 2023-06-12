import "./LandingSunny.css";
import Header from "../componets/Header";
import Showcase from "../componets/Showcase";
import Transform from "../componets/Transform";
import StandOut from "../componets/StandOut";
import GraphicMobile from "../componets/GraphicMobile";
import GraphicDesktop from "../componets/GraphicDesktop";
import Testimonials from "../componets/Testimonials";
import GridDesktop from "../componets/GridDesktop";
import GridMobile from "../componets/GridMobile";
import Footer from "../componets/Footer";

const LandingSunny = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Transform />
      <StandOut />
      <div className="block md:hidden">
        <GraphicMobile />
      </div>

      <div className="hidden md:block">
        <GraphicDesktop />
      </div>
      <Testimonials />
      <div className="block md:hidden">
        <GridMobile />
      </div>
      <div className="hidden md:block">
        <GridDesktop />
      </div>
      <Footer />
    </>
  );
};

export default LandingSunny;
