import React from 'react';

const Recipe = ({recipe}) => {
    return (<div>
            <a href='http://localhost:3000/detail'>
                <img src={require("../images/" + recipe.imageUrl)} alt="Da Recipe" height={200} width={200}/>
                <h3>{recipe.name}</h3>
            </a>
    </div>);
}
 
export default Recipe;

// return ( <div>
    //     <h3>Mashed Potatoes</h3><br/>
    //     <img src={require('../images/mashed_potatoes.webp')} 
    //     height={300} width={350} alt='mashed potatoes'/><br/><br/>
    //     <h4>Ingredients:</h4><br/>
    //     <span>
    //         <ul>2 pounds baking potatoes, peeled and quartered</ul>
    //         <ul>3 cloves garlic, peeled, or to taste (Optional)</ul>
    //         <ul>1 cup milk</ul>
    //         <ul>2 tablespoons butter</ul>
    //         <ul>salt and ground black pepper to taste</ul>  
    //     </span><br/>
    //     <h4>Directions:</h4><br/>
    //     <ol>
    //         <li>Gather all ingredients.</li><br/>
    //         <li>Bring a large pot of salted water to a boil. 
    //             Add potatoes and garlic, lower heat to medium, 
    //             and simmer until potatoes are tender, 15 to 
    //             20 minutes.</li><br/>
    //         <li>When the potatoes are almost finished, 
    //             heat milk and butter in a small saucepan over 
    //             low heat until butter is melted.</li><br/>
    //         <li>Drain potatoes and return to the pot. 
    //             Slowly add warm milk mixture, blending it in with 
    //             a potato masher or electric mixer until potatoes are 
    //             smooth and creamy.</li><br/>
    //         <li>Season with salt and pepper. Serve and enjoy!</li>
    //     </ol>
    // </div> );
    