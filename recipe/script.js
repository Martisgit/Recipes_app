const title = document.getElementById("title");
const instructions = document.getElementById("instructions");
const description = document.getElementById("description");
const recipeImg = document.getElementById("recipe-img");
const deleteBtn = document.getElementById("delete-btn");
const warningMessage = document.getElementById("warning-message");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const getRecipe = async () => {
  const response = await fetch(
    `https://66f03a03f2a8bce81be55c6c.mockapi.io/recipes/${id}`
  );

  const data = await response.json();

  return data;
};

const deleteRecipe = async () => {
  const response = await fetch(
    `https://66f03a03f2a8bce81be55c6c.mockapi.io/recipes/${id}`,
    {
      method: "DELETE",
    }
  );

  return response;
};

const buildScreen = (data) => {
  title.innerText = data.title;
  description.innerText = `description: ${data.description}`;
  instructions.innerText = `instructions: ${data.instructions}`;
  recipeImg.src = data.recipe_img;
};

const initPage = async () => {
  const recipe = await getRecipe();
  buildScreen(recipe);
};

initPage();

deleteBtn.addEventListener("click", async () => {
  const response = await deleteRecipe();
  warningMessage.innerText = "Deleted succesfully";
  if (response.status === 200) {
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 3000);
  }
});
