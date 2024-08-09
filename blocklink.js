const card = document.querySelector(".articlepreview");
const mainLink = document.querySelector(".articlename");
const clickableElements = Array.from(card.querySelectorAll("a"));
clickableElements.forEach((ele) =>
  ele.addEventListener("click", (e) => e.stopPropagation())
  );
function handleClick(event) {
const noTextSelected = !window.getSelection().toString();
if (noTextSelected) {
mainLink.click();}
}
card.addEventListener("click", handleClick);