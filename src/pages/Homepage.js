import Header from "../components/Header";
import HomepageImg from "../assets/img/hp_img.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Homepage = () => {
  return (
    <div className="homepage flex flex-col bg-darkGreen">
      <Header />

      <div className="homepage flex items-center bg-gradient-to-r text-white">
        <div className="flex items-center w-full justify-center h-full gap-[50px] relative">
          <div className="flex flex-1 pl-8 heroTitle">
            <div className="relative h-full w-full">
              <svg
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full max-h-[75vh]"
              >
                <defs>
                  <radialGradient id="b" r="100%" cx="50%" cy="50%">
                    <stop offset="0%" stop-color="#458a4f" />
                    <stop offset="100%" stop-color="#1085ad" />
                  </radialGradient>
                  <clipPath id="a">
                    <path
                      fill="currentColor"
                      d="M901 613q-90 113-176.5 212.5t-199 21.5q-112.5-78-251-80.5T80.5 632Q25 500 157 423.5T350 287q61-60 164.5-106T662 242.5Q706 350 848.5 425T901 613Z"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#a)">
                  <path
                    fill="url(#b)"
                    d="M901 613q-90 113-176.5 212.5t-199 21.5q-112.5-78-251-80.5T80.5 632Q25 500 157 423.5T350 287q61-60 164.5-106T662 242.5Q706 350 848.5 425T901 613Z"
                  />
                </g>
                <foreignObject x="25%" y="30%" width="50%" height="50%">
                  <div className="flex flex-col items-center justify-center h-full gap-8">
                    <h1 className="text-6xl text-center text-white flex flex-col gap-4">
                      <div>Making cooking</div>
                      <div>a little easier</div>
                    </h1>
                    <Link to="/listing">
                      <Button
                        buttonText="Find recipes"
                        className="text-2xl px-8 py-4"
                      ></Button>
                    </Link>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>

          <div className="hp-img absolute right-0 bottom-0 md:h-[30vw] lg:h-[25vw] 2xl:h-[25vw]">
            <img src={HomepageImg} className="h-full" alt="homepage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
