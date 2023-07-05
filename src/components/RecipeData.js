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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
      {/* {itemData &&
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
        })} */}

      {itemData &&
        itemData.map((item) => {
          const ingredients = item.recipe.ingredients;
          const image = item.recipe.image;
          return (
            <div
              key={item.recipe.label}
              onClick={() => handleOpenModal(item)}
              class="max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img class="w-full" src={image} alt="Recipe img" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{item.recipe.label}</div>
                <p class="text-gray-700 text-base"></p>
              </div>
              {/* <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
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
