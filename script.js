const wrapper = document.getElementById("card-wrapper");

const getAllRecipes = async () => {
  const response = await fetch(
    "https://66f03a03f2a8bce81be55c6c.mockapi.io/recipes"
  );
  const data = await response.json();
  return data;
};

const buildCards = async (recipes) => {
  recipes.forEach((recipe) => {
    const title = document.createElement("h4");
    const description = document.createElement("h4");
    const instructions = document.createElement("h4");
    const ingredients = document.createElement("h4");
    const img = document.createElement("img");
    const card = document.createElement("a");
    card.href = `./recipe/index.html?id=${recipe.id}`;

    card.setAttribute("class", "card");

    title.innerText = recipe.title;
    description.innerText = recipe.description;
    instructions.innerText = recipe.instructions;
    ingredients.innerText = recipe.ingredients;
    img.setAttribute("src", recipe.recipe_img);

    card.append(title, description, instructions, ingredients, img);
    wrapper.append(card);
  });
};

const startApp = async () => {
  const recipes = await getAllRecipes();
  console.log(recipes);
  buildCards(recipes);
};

startApp();
