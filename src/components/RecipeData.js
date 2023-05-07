const RecipeData = (props) => {
  const { itemData } = props;

  return (
    <div>
      {itemData &&
        itemData.map((item) => {
        //   console.log(item);
          return <div>Recipe name: {item.recipe.label}</div>;
        })}
    </div>
  );
};

export default RecipeData;
