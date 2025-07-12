import ReactMarkedown from "react-markdown"
export default function ClaudeRecipe(props){
    return(
        <section className="suggested-recipe-container">
            <h1>Hugging face recommends:</h1>
            <ReactMarkedown>{props.recipe}</ReactMarkedown>
        </section>
    )
}