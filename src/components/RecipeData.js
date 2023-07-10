import { useState } from "react";
import Modal from "./Modal";
import Ribbon from "./Ribbon";

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

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        {itemData &&
          itemData.map((item) => {
            const ingredients = item.recipe.ingredients;
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
            <div className="modal-content">
              <div>
                <img src={selectedItem.recipe.image} alt="recipe img" />
              </div>

              <h1>{selectedItem.recipe.label}</h1>

              <div>
                {selectedItem.recipe.ingredients.map((ingredient, index) => (
                  <div key={index}>
                    <p>{ingredient.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default RecipeData;
