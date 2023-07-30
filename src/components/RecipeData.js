import { useState } from "react";
import Modal from "./Modal";
import Ribbon from "./Ribbon";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";

const RecipeData = (props) => {
  const { itemData } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const keysToDisplay = ["FAT", "CHOLE", "NA", "CHOCDF", "PROCNT", "SUGAR"];

  

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        {itemData &&
          itemData.map((item) => {
            // const ingredients = item.recipe.ingredients;
            const image = item.recipe.image;
            return (
              <div
                key={item.recipe.label}
                onClick={() => handleOpenModal(item)}
                className="max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer min-h-[500px] relative recipe-card-wrapper"
              >
                {item.recipe.healthLabels.includes("Vegan") && (
                  <Ribbon label="Vegan" />
                )}

                <img className="w-full" src={image} alt="Recipe img" />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {item.recipe.label}
                  </div>
                  <div>Meal type: {item.recipe.mealType}</div>
                  <div>Cuisine type: {item.recipe.cuisineType}</div>
                  <p className="text-gray-700 text-base"></p>
                </div>
              </div>
            );
          })}

        {selectedItem && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="w-full h-full p-4 md:p-0 md:max-w4xl md:m-auto">
              <div className="modal-top bg-darkGreen p-4 md:p-6">
                <h1 className="text-2xl md:text-4xl text-white text-center">
                  {selectedItem.recipe.label}
                </h1>
              </div>
              <div className="modal-content flex flex-col md:flex-row gap-4 p-4 md:p-6">
                <div className="w-full h-64 md:w-1/2 md:h-full flex-shrink-0">
                  <img
                    src={selectedItem.recipe.image}
                    alt="recipe img"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="modal-text flex flex-col md:flex-1 md:ml-4">
                  <div className="pb-4">
                    <p className="flex items-center gap-2 pb-2">
                      <FaUtensils size={25} color="darkGreen" />{" "}
                      <p className="text-base md:text-lg">
                        {" "}
                        {selectedItem.recipe.yield} servings (serving size ={" "}
                        {(
                          selectedItem.recipe.totalWeight /
                          selectedItem.recipe.yield
                        ).toFixed(0)}{" "}
                        grams){" "}
                      </p>
                    </p>
                    <p className="text-lg md:text-2xl font-semibold mb-3">
                      Ingredients
                    </p>
                    {selectedItem.recipe.ingredients.map(
                      (ingredient, index) => (
                        <div key={index} className="py-1 border-b border-black">
                          <p className="text-base md:text-lg px-2 md:px-4">
                            {ingredient.text}
                          </p>
                        </div>
                      )
                    )}

                    <div className="mt-4">
                      <p className="text-base md:text-lg font-semibold">
                        Nutrition facts
                      </p>
                      <p className="py-1 border-b border-black md:text-lg px-2 md:px-4">
                        {selectedItem.recipe.calories.toFixed(0)} calories
                      </p>

                      {keysToDisplay.map((key) => {
                        const value = selectedItem.recipe.totalDaily[key];
                        if (!value) return null; 

                        return (
                          <div
                            className="flex gap-2 py-1 border-b border-black md:text-lg px-2 md:px-4"
                            key={key}
                          >
                            <p>{value.label} :</p>
                            <p>{value.quantity.toFixed(2)}</p>
                            <p>{value.unit}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-bottom p-4 md:p-6 bg-darkGreen text-white flex">
                <Link to={selectedItem.recipe.url} className="ml-auto">
                  <Button buttonText="Go to recipe website"></Button>
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default RecipeData;
