

import { HfInference } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
 You don't need to use every ingredient they mention in your recipe. 
 The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
 Format your response in markdown to make it easier to render to a web page
`;

// Initialize with your API key (temporary for testing)
const not_api_key = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(not_api_key);

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have these ingredients: ${ingredientsString}. Suggest a detailed recipe.` },
            ],
            max_tokens: 1024,
        });
        
        console.log("AI Response:", response);
        return response.choices[0].message.content;
        
    } catch (err) {
        console.error("API Error:", err);
        return "Failed to generate recipe. Please try again.";
    }
}