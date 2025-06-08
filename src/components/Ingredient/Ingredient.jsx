
const Ingredient = ({ ing, onClick, buttonLabel }) => {
    return (
        <li style={{ backgroundColor: ing.color }}>
            {ing.name}
            <button onClick={onClick} style={{color: 'white'}}>{buttonLabel}</button>
        </li>
    );
};

export default Ingredient;