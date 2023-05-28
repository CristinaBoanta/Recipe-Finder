const RecipeData = (props) => {
  const { itemData, image } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {itemData &&
        itemData.map((item) => {
          const ingredients = item.recipe.ingredients;
          const image = item.recipe.image;
          return (
            <div className="h-full min-h-[500px] flex flex-col text p-8 bg-white rounded shadow">
              <div className="w-full min-h-[200px] object-cover mb-4 rounded">
                <img src={image} />
              </div>
              <div className="min-h-[50px] font-bold text-4xl">{item.recipe.label}</div>
              <div>{ingredients.map((ingredient) => {
                return (
                  <div className="ingredient text-xl">
                    {ingredient.text}
                  </div>
                )
              })}</div>
            </div>
          );
        })}
    </div>
  );
};

export default RecipeData;
