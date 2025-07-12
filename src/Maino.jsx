import React from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientsList from "./components/IngredientsList"

// In Maino.jsx
import { getRecipeFromChefClaude } from "./ai.js";

export default function Maino() {
    const [newingredients, setnewingredients] = React.useState([])
    const [recipe, setrecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkeddown = await getRecipeFromChefClaude(newingredients)
        setrecipe(recipeMarkeddown)
    }
    console.log("just checking for updates. made by NISHOK GANAPATHY BTW!!");
    function handleSubmit(event) {
        event.preventDefault()
        const formdata = new FormData(event.currentTarget)
        const newIngredient = formdata.get("ingredient")
        
        if (newIngredient.trim()) {
            setnewingredients(prev => [...prev, newIngredient])

        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    name="ingredient" 
                    placeholder="eg Oregano or flour" 
                    aria-label="Add ingredients"
                />
                <button>Add ingredients</button>
            </form>
            {newingredients.length > 0 && (
                <IngredientsList 
                    newingredients={newingredients} 
                    getRecipe={getRecipe}
                />
            )}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}