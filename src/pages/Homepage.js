import Header from "../components/Header";
import Footer from "../components/Footer";
import HomepageBackground from "../assets/img/hp_bg.jpg";
import { Link } from "react-router-dom";
import Button from '../components/Button';
import tw, { styled } from 'twin.macro';

const LightButton = tw(Button)`border-white text-white px-4 py-2 p-8`;

const Homepage = (props) => {

  return (
    <div className="homepage flex flex-col svg_bg">

      <Header />

      <div className="homepage flex items-center bg-gradient-to-r text-white">
        <div className="flex items-center w-full gap-8 justify-center">
          {/* <div className="w-full max-w-3xl flex-1 pr-8">
          </div> */}
          <div className="flex flex-1 pl-8 heroTitle flex-col items-center gap-8">
            <h1 className="text-6xl font-bold text-center text-white">
              Making cooking easier
            </h1>
            <Link to="/listing">
              <LightButton>Find recipes</LightButton>
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
