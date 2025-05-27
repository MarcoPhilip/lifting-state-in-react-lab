// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ingredients, addToBurger}) => {
  return (
    <main>
        <h2>Ingredients</h2>
        <ul>
        {ingredients.map((ing, i) => (
            <li key={i} style={{backgroundColor: ing.color}}>
                {ing.name}
                <button onClick={() => addToBurger(ing)}>+</button>
            </li>
        ))}
        </ul>
    </main>
  );
};

export default IngredientList;
