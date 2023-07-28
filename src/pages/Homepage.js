import Header from "../components/Header";
import Footer from "../components/Footer";
import HomepageImg from "../assets/img/hp.jpg";
import { Link } from "react-router-dom";
import Button from "../components/Button";


const Homepage = () => {
  return (
    <div className="homepage flex flex-col bg-darkGreen">

      <div className="homepage flex items-center bg-gradient-to-r text-white">
        <div className="flex items-center w-full justify-center h-full gap-[50px]">
          <div className="flex flex-1 pl-8 heroTitle flex-col items-center gap-8">
            <h1 className="text-6xl text-center text-white">
              Making cooking a little easier
            </h1>
            <Link to="/listing">
              <Button buttonText="Find recipes"></Button>
            </Link>
          </div>
          <div className="h-full hp-img">
            <img
              src={HomepageImg}
              className="h-full w-full object-cover max-w-[50rem]"
              alt="homepage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
