import AnimatedButton from "./AnimatedButton";    //for button only

export default function IngredientsList(props) {
    return (
        <section className="ingredients-section">
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {props.newingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            
            {props.newingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    
                    <AnimatedButton onClick={props.getRecipe}/>
                </div>
            )}
        </section>
    )
}