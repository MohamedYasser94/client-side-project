const mealsResult = document.getElementById("mealsResult");

const params = new URLSearchParams(window.location.search);
const ingName = params.get("ingName");

async function getMeals(ingName) {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingName}`,
  );
  let data = await res.json();
  displayMeals(data.meals);
}

function displayMeals(meals) {
  let str = "";

  meals.forEach((meal) => {
    str += `
     <a href="meal.html?id=${meal.idMeal}">
        <div class="col">
          <div class="ingredient-card rounded-3">
            <div class="ingredient-img-box">
             <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            </div>
            <div class="ingredient-info">
              <h5>${meal.strMeal}</h5>
            </div>
          </div>
        </div>
      </a>
    `;
  });

  mealsResult.innerHTML = str;
}

if (ingName) getMeals(ingName);
