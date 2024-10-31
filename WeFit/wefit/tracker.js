const mealForm = document.getElementById("mealForm");
const mealList = document.getElementById("mealList");

function addMeal() {
    // Get form values
    const mealName = document.getElementById("mealName").value;
    const ingredients = document.getElementById("ingredients").value;
    const calories = document.getElementById("calories").value;

    // Create a new meal item element
    const mealItem = document.createElement("div");
    mealItem.classList.add("meal-item");
    mealItem.innerHTML = `
        <h3>${mealName}</h3>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Total Calories:</strong> ${calories}</p>
    `;

    // Append the new meal item to the meal list
    mealList.appendChild(mealItem);

    // Clear form fields
    document.getElementById("mealName").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("calories").value = "";
}