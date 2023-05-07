import Header from "../components/Header";
import Footer from "../components/Footer";
import HomepageBackground from "../assets/img/homepageVector.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage flex flex-col">
      <Header />

      <div className="homepage flex items-center bg-gradient-to-r to-rosewood from-coral text-white py-6 pr-20 pl-20">
        <div className="flex items-center justify-between w-full gap-8">
          <div className="w-full max-w-3xl flex-1 pr-8">
            <img src={HomepageBackground} alt="ceva" />
          </div>
          <div className="flex-1 pl-8 heroTitle">
            <h1 className="text-6xl font-bold text-center text-white">
              Placeholder text about cooking
            </h1>
            <Link to="/listing">Button that leads to recipes</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
