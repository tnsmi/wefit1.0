const mealForm = document.getElementById("mealForm");
const mealList = document.getElementById("mealList");

// Function to add a meal to the list and local storage
function addMeal() {
    const mealName = document.getElementById("mealName").value;
    const ingredients = document.getElementById("ingredients").value;
    const calories = document.getElementById("calories").value;

    const meal = {
        id: Date.now(), // Unique ID for each meal
        name: mealName,
        ingredients: ingredients,
        calories: calories
    };

    let meals = JSON.parse(localStorage.getItem("meals")) || [];
    meals.push(meal);
    localStorage.setItem("meals", JSON.stringify(meals));

    displayMeal(meal);

    document.getElementById("mealName").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("calories").value = "";
}

// Function to display a meal in the meal list
function displayMeal(meal) {
    const mealItem = document.createElement("div");
    mealItem.classList.add("meal-item");
    mealItem.style.color = "#FFFFFF";
    mealItem.dataset.id = meal.id; // Store the meal's unique ID in the element

    mealItem.innerHTML = `
        <h3>${meal.name}</h3>
        <p><strong>Ingredients:</strong> ${meal.ingredients}</p>
        <p><strong>Total Calories:</strong> ${meal.calories}</p>
        <button onclick="editMeal(${meal.id})">Edit</button>
        <button onclick="deleteMeal(${meal.id})">Delete</button>
    `;

    mealList.appendChild(mealItem);
}

// Load meals from local storage when the page loads
function loadMeals() {
    const meals = JSON.parse(localStorage.getItem("meals")) || [];
    meals.forEach(displayMeal);
}

// Function to delete a meal
function deleteMeal(id) {
    let meals = JSON.parse(localStorage.getItem("meals")) || [];
    meals = meals.filter(meal => meal.id !== id); // Remove meal with matching ID
    localStorage.setItem("meals", JSON.stringify(meals)); // Update local storage

    // Remove the meal item from the display
    const mealItem = document.querySelector(`.meal-item[data-id='${id}']`);
    if (mealItem) {
        mealList.removeChild(mealItem);
    }
}

// Function to edit a meal
function editMeal(id) {
    let meals = JSON.parse(localStorage.getItem("meals")) || [];
    const meal = meals.find(meal => meal.id === id);

    if (meal) {
        // Populate the form with the meal's existing data for editing
        document.getElementById("mealName").value = meal.name;
        document.getElementById("ingredients").value = meal.ingredients;
        document.getElementById("calories").value = meal.calories;

        // Remove the meal temporarily so it can be replaced upon resubmission
        deleteMeal(id);

        // Update the `addMeal` function to save the edited meal back with the same ID
        mealForm.onsubmit = function (event) {
            event.preventDefault();

            // Create an updated meal object
            const updatedMeal = {
                id: id, // Preserve the original ID
                name: document.getElementById("mealName").value,
                ingredients: document.getElementById("ingredients").value,
                calories: document.getElementById("calories").value
            };

            meals.push(updatedMeal);
            localStorage.setItem("meals", JSON.stringify(meals));

            // Reset the form submission function and display the updated meal
            mealForm.onsubmit = function (e) {
                e.preventDefault();
                addMeal();
            };

            displayMeal(updatedMeal);

            // Clear form fields
            document.getElementById("mealName").value = "";
            document.getElementById("ingredients").value = "";
            document.getElementById("calories").value = "";
        };
    }
}

// Initialize the app
loadMeals();