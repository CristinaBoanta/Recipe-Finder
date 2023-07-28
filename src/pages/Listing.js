import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecipeData from "../components/RecipeData";
import Search from "../components/Search";
import Button from "../components/Button";

const Listing = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [recipeImage, setRecipeImage] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageLink, setNextPageLink] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const randomKeywords = [
    "dessert",
    "chicken",
    "fish",
    "potato",
    "fruit",
    "vegetable",
  ];
  const lastItemIndex = randomKeywords.length - 1;
  const randomKeywordIndex = Math.floor(Math.random() * lastItemIndex);

  const fetchRecipes = (url) => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data.hits);
        setRecipeImage(data.hits);
        setIsLoading(false);
        setNextPageLink(data._links.next.href);
        console.log(data.hits);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
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

  useEffect(() => {
    const urlRandomized = `https://api.edamam.com/api/recipes/v2?type=public&q=${randomKeywords[randomKeywordIndex]}&app_id=56fb8644&app_key=168186d59b0ca334c075db612ed42b82&random=true`;
    fetchRecipes(urlRandomized);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="md:container md:mx-auto flex flex-col w-full px-12 h-screen overflow-auto">
        <div>
          <h1 className="title my-6">Find recipes</h1>
        </div>
        <Search
          dataFromInput={inputValue}
          inputChangeFunction={handleInputChange}
          responseFromApi={apiResponse}
          isLoading={isLoading}
        />
        <RecipeData itemData={recipeData} image={recipeImage} />

        {nextPageLink ? (
          <Button
            onClick={handleNextPage}
            disabled={isLoading}
            buttonText="Next page"
          ></Button>
        ) : (
          <div>No more items to show</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Listing;
