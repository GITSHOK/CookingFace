import chefClaude from './chef-claude-icon.png'

export default function Header(){
    return(
        <header>
            <img className='logo' src={chefClaude} alt="" />
            <h1>Cooking Face</h1>
            <p>Made using Mistralai LLM. Version 0.1</p>
        </header>
    )
}