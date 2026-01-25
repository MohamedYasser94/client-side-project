fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
fetch("../meals.json")
.then((response) => response.json())
.then((data)=>{
    meals = data.meals;
    console.log(meals);

    for(let meal of meals){
    const row = document.getElementById('row');
    // const card = document.getElementById('card');
    // row.appendChild(card)

    row.innerHTML += `<div id="card">
        <img src=${meal.flag} alt="img">
        <p class="p">${meal.strArea}</p>
        
    
    
    </div>`
    
    document.body.append(row);
    }   
})



