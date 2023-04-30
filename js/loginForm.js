const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const hiddenClassName = "hidden";
const userNameKey = "username";

function yourName(event){
  event.preventDefault();
  loginForm.classList.add(hiddenClassName);
  const username = loginInput.value;
  localStorage.setItem(userNameKey,username);
  paintGreetings(username);
}

function paintGreetings(){
  const username = localStorage.getItem(userNameKey);
  greeting.innerHTML = `Hello ${username} !`;
  greeting.classList.remove(hiddenClassName);
}

const savedUsername = localStorage.getItem(userNameKey);

if(savedUsername === null){
  loginForm.classList.remove(hiddenClassName);
  loginForm.addEventListener("submit",yourName);
} else {
  paintGreetings();
}