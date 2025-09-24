// const listItems = document.querySelectorAll("li");
// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", toggleDone);
//   listItem.classList.toggle("pointer", true);
// });
// function toggleDone(event) {
//   event.target.classList.toggle("done");
// }

const imageElement = document.querySelector("img");
imageElement.addEventListener("click", toggleSrcAttr);
function toggleSrcAttr(event) {
  console.log(event.target.getAttribute("src"));
  console.log(event.target.src);

  let src = event.target.getAttribute("src");
  if (src === "images/firefox-icon.png") {
    event.target.setAttribute("src", "images/firefox-icon-2.png");
  } else {
    event.target.setAttribute("src", "images/firefox-icon.png");
  }
}

const heading = document.querySelector("h1");
function setUserName() {
  const userName = prompt("Please enter your name.");
  if (!userName) {
    setUserName();
  } else {
    localStorage.setItem("name", userName);
    heading.textContent = `Welcome to Mozilla dear ${userName}!`;
    console.log(`The name is: ${localStorage.getItem("name")}`);
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
  console.log(
    `In the if block and the value of name is: ${localStorage.getItem("name")}`
  );
} else {
  console.log(
    `In the else block and the value of name is: ${localStorage.getItem(
      "name"
    )}`
  );
  heading.textContent = `Welcome to Mozilla dear ${localStorage.getItem(
    "name"
  )}`;
}
const myButton = document.querySelector("button");
myButton.addEventListener("click", setUserName);
