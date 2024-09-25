const form = document.getElementById("recipe-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const instructions = document.getElementById("instructions").value;
  const ingredients = document.getElementById("ingredients").value;
  const recipe_img = document.getElementById("recipe_img").value;

  const recipe = {
    title: title,
    description: description,
    instructions: instructions,
    ingredients: ingredients,
    recipe_img: recipe_img,
  };

  fetch("https://66f03a03f2a8bce81be55c6c.mockapi.io/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  successMessage.style.display = "block";

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 3000);
  form.reset();
});
