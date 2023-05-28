import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecipeData from "../components/RecipeData";
import Search from "../components/Search";


const Listing = () => {
  const [recipeData, setRecipeData] = useState(null);
  
  const [recipeImage, setRecipeImage] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const apiResponse = (keyword) => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=56fb8644&app_key=168186d59b0ca334c075db612ed42b82`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data.hits);
        setRecipeImage(data.hits);
        console.log(data.hits);
      });
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col w-full h-screen px-12">
        <RecipeData itemData={recipeData} image={recipeImage} />
        <div>
          <h1 className="title">Find recipes</h1>
        </div>
        <Search
          dataFromInput={inputValue}
          inputChangeFunction={handleInputChange}
          responseFromApi={apiResponse}
        />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Listing;
