// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({stack, removeFromBurger}) => {
  return (
    <main>
        <h2>Stack</h2>
        <ul>
        {stack.map((ing, index) => (
            <li key={index} style={{backgroundColor: ing.color}}>
                {ing.name}
                <button onClick={() => removeFromBurger(index)}>X</button>
            </li>
        ))}
        </ul>
    </main>
  );
};

export default BurgerStack;
