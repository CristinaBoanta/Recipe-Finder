const RecipeData = (props) => {
  const { itemData } = props;

  return (
    <div>
      {itemData &&
        itemData.map((item) => {
          const ingredients = item.recipe.ingredients;
          return (
            <div>
              <div>Recipe name: {item.recipe.label}</div>
              <div>{ingredients.map((ingredient) => {
                return (
                  <div className="ingredient">
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
