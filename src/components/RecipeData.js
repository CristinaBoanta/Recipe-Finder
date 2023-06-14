import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {itemData &&
        itemData.map((item) => {
          const ingredients = item.recipe.ingredients;
          const image = item.recipe.image;
          return (
            <div
              key={item.recipe.label}
              className="h-full min-h-[500px] flex flex-col text bg-white rounded shadow-xl p-4"
            >
              <a href="#" onClick={() => handleOpenModal(item)}>
                <div className="w-full min-h-[200px] object-cover mb-4 rounded">
                  <img src={image} alt="Recipe img" />
                </div>
                <div className="min-h-[50px] font-bold text-4xl">
                  {item.recipe.label}
                </div>
              </a>
            </div>
          );
        })}
      {selectedItem && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="modal-content">
            <h1>{selectedItem.recipe.label}</h1>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RecipeData;