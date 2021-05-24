import React,{useState,useEffect} from "react";
import "./App.css";
import Axios from "axios";
import RecipeBox from "./RecipeBox";
 
const App=()=>{

useEffect(
  ()=>{
    getRecipes();
  },[]
);
const [search,setSearch] = useState("");
const [recipes,setRecipes] = useState([]);
const [label,setLabel] = useState("vegan");
 
const YOUR_APP_ID = '31d17da5';
const YOUR_APP_KEY = '4fc0a8c2806c257074c0430e022c2634';
const url = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${label}`;


async function getRecipes(){

  const result = await Axios.get(url);

  console.log(result);
  setRecipes(result.data.hits);
  
  console.log(result.data.hits);

 }

 const submit=(e)=>{

  e.preventDefault();
  
  getRecipes();

 }
  
 console.log(recipes);

// const healthy = recipes["recipe"]["healthLabels"];
//  console.log(healthy);

return(

  <>
 
 <div className="recipe_app">
 <h1 className="recipe_heading">Food Recipe Plaza &#127828;</h1>
 
 <form className="form_search" onSubmit={submit}>
  
 <input 
 type="text" 
 className="search_input"
 placeholder="Enter Ingredient"
 value={search}
 onChange={(e)=>setSearch(e.target.value)}
 />

 <input type="submit"  value="Search"  className="form_button" />

 <select className="health_labels">

 <option onClick={(e)=>setLabel("vegan")}>Vegan</option>
 <option onClick={(e)=>setLabel("vegetarian")}>Vegetarian</option>
 <option onClick={(e)=>setLabel("paleo")}>Paleo</option>
 <option onClick={(e)=>setLabel("dairy-free")}>Dairy-free</option>
 <option onClick={(e)=>setLabel("gluten-free")}>Gluten-free</option>
 <option onClick={(e)=>setLabel("wheat-free")}>Wheat-free</option>
 <option onClick={(e)=>setLabel("low-sugar")}>Low Sugar</option>
 <option onClick={(e)=>setLabel("egg-free")}>Egg-free</option>
 <option onClick={(e)=>setLabel("peanut-free")}>Peanut-free</option>
 <option onClick={(e)=>setLabel("tree-nut-free")}>Tree-nut-free</option>
 <option onClick={(e)=>setLabel("fish-free")}>Fish-free</option>
 <option onClick={(e)=>setLabel("soy-free")}>Soy-free</option>
 <option onClick={(e)=>setLabel("shellfish-free")}>Shellfish-free</option>
 <option onClick={(e)=>setLabel("fish-free")}>Fish-free</option>
 <option onClick={(e)=>setLabel("low fat")}>Low fat</option> 
 
 </select>
 </form>

 <div className="RecipeBox">

 {
  
  recipes.map((recipe)=>{

   return <RecipeBox  recipe={recipe} />

  })

 }

 </div>

 </div>
  </>
);

}

export default App;