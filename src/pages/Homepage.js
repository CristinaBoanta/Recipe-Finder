import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import hp_img from "../assets/img/hp.png";

const Homepage = () => {
  return (
    <div className="flex flex-col bg-darkGreen min-h-screen">
      <Header />

      <div className="flex items-center bg-gradient-to-r text-white h-full p-4 md:p-8 xl:p-20 lg:p-12">
        <div className="flex items-center flex-col-reverse xl:flex-row w-full h-full relative md:justify-between gap-6 md:gap-8 lg:gap-8">
          <div className="flex heroTitle flex-1 justify-center lg:justify-center">
            <div className="flex flex-col items-center md:items-start justify-center h-full gap-4 md:gap-8 px-4 md:px-8 lg:px-12 max-w-md md:max-w-[80%]">
              <h2 className="text-4xl lg:text-4xl xl:text-7xl text-center md:text-left text-white hp_heading">
                A world full of flavour awaits you...
              </h2>
              <p className="hp_description text-base md:text-lg lg:text-2xl">Welcome to RecipEase, where culinary inspiration meets innovation.
                Whether you're a seasoned chef or just starting your culinary journey, our recipe finding app is your gateway to a world of delicious possibilities. Browse a collection of carefully curated recipes, discover new flavors, and embark on a culinary adventure that will tantalize your taste buds. Get ready to elevate your cooking game.</p>
              <Link to="/listing">
                <Button
                  buttonText="Find recipes"
                  className="text-xl px-4 py-2"
                ></Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center md:ml-8 max-w-[60vw] lg:max-w-[20vw] xl:max-w-[30vw] md:max-w-[40vw]">
            <img src={hp_img} alt="Homepage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
