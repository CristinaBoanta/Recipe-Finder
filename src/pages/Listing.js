import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecipeData from "../components/RecipeData";
import Search from "../components/Search";

const Listing = () => {

  // state for storing the recipe list 
  const [recipeData, setRecipeData] = useState(null);

  //state for storing input value
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const apiResponse = (keyword) => {
    fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=56fb8644&app_key=168186d59b0ca334c075db612ed42b82`
      )
        .then((res) => res.json())
        .then((data) => {
          setRecipeData(data.hits);
        });
  }

  return (
    <div className="flex flex-col">
      <Header />
        <RecipeData itemData={recipeData}/>

        <Search dataFromInput={inputValue} inputChangeFunction={handleInputChange} responseFromApi={apiResponse} />
      <Footer />
    </div>
  );
};

export default Listing;
