const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const ingredientsBtn = document.getElementById('ingredientsBtn');
const showIngredients = document.getElementById('showIngredients');
searchBtn.addEventListener('click', getMealList);


function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value;
    if (searchInputTxt === "") {
        const alerts = document.getElementById('alert');
         alerts.innerHTML =`
                      <h1> Please Type Proper Keyword And Search Again <h1>
         `

        
      
    }
    else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
            .then(res => res.json())
            .then(data => {
                let allMeals = ""
                if (data.meals) {
                    data.meals.forEach(meals => {

                        allMeals += `<div class = "meal-item" data-id = "${meals.idMeal}">
                 <div id="showIngredients" onclick="getMealRecipe('${meals.strMeal}')" class = "meal-img">
                   <img src = "${meals.strMealThumb}" alt = "food">
                    </div>
                <div class = "meal-name">
                      <h3>${meals.strMeal}</h3>
                </div>
            </div> `
                    });
                }      
                else {
                    allMeals = `Please use a Proper Keyword`;
                    mealList.classList.add('notFound');
                }
                mealList.innerHTML = allMeals;
            });
    }

};

const getMealRecipe = ingredients => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredients}`

    fetch(url)
        .then(res => res.json())
        .then(data => renderIngredientsInfo(data.meals[0]))
}

const renderIngredientsInfo = meals =>{

    const ingDiv = document.getElementById('showIngredients')
    ingDiv.innerHTML = ` <img id="ingredientsImg" src = "${meals.strMealThumb}" alt = "food">
      
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
     <li>${meals.strIngredient11}<li>
    
    `
};


