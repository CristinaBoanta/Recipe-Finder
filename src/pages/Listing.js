import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecipeData from "../components/RecipeData";
import Search from "../components/Search";

const Listing = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [recipeImage, setRecipeImage] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageLink, setNextPageLink] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchRecipes = (url) => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data.hits);
        setRecipeImage(data.hits);
        setIsLoading(false);
        setNextPageLink(data._links.next.href);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setIsLoading(false);
      });
  };

  const apiResponse = (keyword) => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=56fb8644&app_key=168186d59b0ca334c075db612ed42b82`;
    fetchRecipes(url);
  };

  const handleNextPage = () => {
    if (nextPageLink) {
      fetchRecipes(nextPageLink);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col w-full px-12 h-screen overflow-auto">
        <div>
          <h1 className="title">Find recipes</h1>
        </div>
        <Search
          dataFromInput={inputValue}
          inputChangeFunction={handleInputChange}
          responseFromApi={apiResponse}
          isLoading={isLoading}
        />
        <RecipeData itemData={recipeData} image={recipeImage} />
        {nextPageLink && (
          <button onClick={handleNextPage} disabled={isLoading}>
            Next Page
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Listing;