export const parseIngredientsData = (drink) => {
  const drinkArray = Object.entries(drink);

  const drinkIngredients = drinkArray.filter(
    ([key, value]) => key.includes("strIngredient") && value
  );
  const drinkMeasure = drinkArray.filter(
    ([key, value]) => key.includes("strMeasure") && value
  );

  const ingredients = drinkIngredients.map(([key, value], index) => value);
  const measures = drinkMeasure.map(([key, value], index) => value);

  const ingredientsAndMeasures = ingredients.map((x, i) => {
    return {
      ingredient: x,
      measure: measures[i],
    };
  });

  return ingredientsAndMeasures;
};
