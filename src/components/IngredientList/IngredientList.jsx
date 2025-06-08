// src/components/IngredientList/IngredientList.jsx
import Ingredient from '../Ingredient/Ingredient'

const IngredientList = ({ingredients, addToBurger}) => {
  return (
    <main>
        <h2>Ingredients</h2>
        <ul>
        {ingredients.map((ing, i) => (
            <Ingredient 
            key={i}
            ing={ing}
            onClick={() => addToBurger(ing)}
            buttonLabel="+"
            />
        ))}
        </ul>
    </main>
  );
};

export default IngredientList;
