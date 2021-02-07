const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const ingredientsBtn = document.getElementById('ingredientsBtn')
// ingredientsBtn.addEventListener('click', getMealRecipe)




searchBtn.addEventListener('click', getMealList)
// ingredientsBtn.addEventListener('click', getMealRecipe)


// mealList.addEventListener('click', getMealRecipe)


function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
        .then(res => res.json())
        .then(data => {
            let allMeals = ""
            if (data.meals) {
                data.meals.forEach(meals => {
                    allMeals += `<div class = "meal-item" data-id = "${meals.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meals.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meals.strMeal}</h3>
                            
                 <button id="ingredientsBtn" onclick="getMealRecipe('${meals.strMeal}')"> Show Ingredients </button>
                            </div>                         
                    </div> `

                });


            }
            // if(data.meals==""){
            //     allMeals = `Please type a Keyword`;
            //     mealList.classList.add('notFounds');
            // }
            else {
                allMeals = `Please use a Proper Keyword`;
                mealList.classList.add('notFound');
            }
            mealList.innerHTML = allMeals;
        })

}

const getMealRecipe = ingredients => {

    // console.log(ingredients);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredients}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => renderIngredientsInfo(data.meals[0]))
}

const renderIngredientsInfo = meals => {
    // console.log(meals);
    const ingDiv = document.getElementById('showIngredients')
    ingDiv.innerHTML = `

    <img id="ingredientsImg" src = "${meals.strMealThumb}" alt = "food">
      
     <li>${meals.strIngredient1}<li>
     <li>${meals.strIngredient2}<li>
     <li>${meals.strIngredient3}<li>
     <li>${meals.strIngredient4}<li>
     <li>${meals.strIngredient5}<li>
     <li>${meals.strIngredient6}<li>
     <li>${meals.strIngredient7}<li>
     <li>${meals.strIngredient8}<li>
     <li>${meals.strIngredient9}<li>
     <li>${meals.strIngredient10}<li>
    
    `

}


