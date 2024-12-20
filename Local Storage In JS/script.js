const button = document.getElementById("btn");
const input = document.getElementById("name");
const username = document.getElementById("username");

button.addEventListener("click", () => {
  localStorage.setItem("name", input.value);
  location.reload();
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  username.innerText = value;
});
