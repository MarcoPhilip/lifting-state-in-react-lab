// src/components/BurgerStack/BurgerStack.jsx

import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({stack, removeFromBurger}) => {
  return (
    <main>
        <h2>Stack</h2>
        {stack.length == 0 ? (
            <p>No Ingredients</p>
        ) : (
            <ul>
                {stack.map((ing, i) => (
                    <Ingredient
                        key={i}
                        ing={ing}
                        onClick={() => removeFromBurger(i)}
                        buttonLabel="x"
                    />
        ))}
        </ul>
        )}
    </main>
  );
};

export default BurgerStack;
