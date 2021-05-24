import React from "react";
import "./RecipeBox.css";

const RecipeBox=({recipe})=>{

return(
    

recipe["recipe"]["image"].match(/\.(jpeg|jpg|png|gif)$/) != null &&
( <div >

<img className="RecipeBox_img" src={recipe["recipe"]["image"]}/>
<p className="RecipeBox_head">{recipe["recipe"]["label"]}</p>

</div> )

    
);

}

export default RecipeBox;