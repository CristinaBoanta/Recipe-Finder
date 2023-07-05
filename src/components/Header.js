import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-darkGreen text-white py-4">
      <div className="md:container md:mx-auto px-12 flex justify-between items-center">
      <Link to="/"><h1 className="text-3xl font-bold text">Recipease</h1></Link>
        <nav>
          <ul className="flex space-x-4">
            <li className="text text-xl"><Link to="/">Home</Link></li>
            <li className="text text-xl"><Link to="/">Recipes</Link></li>
            <li className="text text-xl"><Link to="/">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
