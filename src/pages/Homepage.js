import Header from "../components/Header";
import Footer from "../components/Footer";
import HomepageBackground from "../assets/img/homepageVector.png";
import { Link } from "react-router-dom";
import Button from '../components/Button';

const Homepage = () => {

  return (
    <div className="homepage flex flex-col">

      <Header />

      <div className="homepage flex items-center bg-gradient-to-r to-rosewood from-coral text-white py-6 pr-20 pl-20">
        <div className="flex items-center justify-between w-full gap-8">
          <div className="w-full max-w-3xl flex-1 pr-8">
            <img src={HomepageBackground} alt="ceva" />
          </div>
          <div className="flex flex-1 pl-8 heroTitle flex-col items-center gap-8">
            <h1 className="text-6xl font-bold text-center text-white">
              Making cooking easier
            </h1>
            <Link to="/listing">
              <Button />
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
