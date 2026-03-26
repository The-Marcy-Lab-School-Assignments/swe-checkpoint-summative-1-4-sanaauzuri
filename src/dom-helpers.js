// DOM Helpers
//
// Functions for reading from and writing to the DOM.
// These functions should NOT make any fetch() calls.

// renderRecipes(recipes) — clears the recipe list and renders a card for
// each recipe showing its image, name, cuisine + difficulty, and rating.
// Also updates the recipe count display.
//
// After this function runs, #recipes-list should contain one <li> per recipe:
//
//   <ul id="recipes-list">
//     <li>
//       <img src="https://..." alt="Margherita Pizza">
//       <h3>Margherita Pizza</h3>
//       <p>Italian · Easy</p>
//       <p>★ 4.6</p>
//     </li>
//     <!-- one <li> per recipe -->
//   </ul>
//
// What you'll need: document.querySelector, element.innerHTML, element.textContent,
// document.createElement, element.setAttribute, element.append, array iteration.
export const renderRecipes = (recipes) => {
  // TODO 1
  const recipesList = document.querySelector('#recipes-list');
  const recipeCount = document.querySelector('#recipe-count');

  recipesList.innerHTML = '';
  recipeCount.textContent = recipes.length;

  recipes.forEach((recipe) => {
    const li = document.createElement('li');
    li.dataset.recipeId = recipe.id;

    const img = document.createElement('img');
    img.src = recipe.image;
    img.alt = recipe.name;

    const name = document.createElement('name');
    h3.textContent = recipe.name;

    const info = document.createElement('p');
    info.textContent = `${recipe.cuisine} · ${recipe.difficulty}`;

    const rating = document.createElement('p');
    h3.textContent = `★ ${recipe.rating}`;

    li.append(img, name, info, rating);
    recipesList.append(li);
  });
};

// renderError(message) — shows an error message on the page when something
// goes wrong, or hides it when the message is cleared.
//
// The #error-message element starts with the .hidden class in index.html.
// A truthy message should make it visible; a falsy message should hide it again.
//
// What you'll need: document.querySelector, element.textContent,
// element.classList.add, element.classList.remove.
export const renderError = (message) => {
  // TODO 2
  const errorMessage = document.querySelector('#error-message');
  
  export const renderError = (msg) => {
  errorMessage.classList.remove('hidden');
  errorMessage.textContent = msg;
};

  export const hideError = () => {
  errorMessage.textContent = '';
  errorMessage.classList.add('hidden');
};
};
