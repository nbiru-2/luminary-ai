const form = document.querySelector(".input-area");
const input = form.querySelector("input");
const messages = document.querySelector("#message-history");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  const newMessage = document.createElement("div");
  newMessage.classList.add("messages"); // match your existing class
  newMessage.textContent = text;

  messages.appendChild(newMessage);

  input.value = "";
});
