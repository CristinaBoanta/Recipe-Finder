import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r to-rosewood from-coral text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/"><h1 className="text-xl font-bold">Recipease</h1></Link>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
