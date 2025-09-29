const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");


for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (const list of lists) {
  list.addEventListener("dragover", dragOver)
  list.addEventListener("dragenter", dragEnter)
  list.addEventListener("dragLeave", dragLeave)
  list.addEventListener("drop", dragDrop)
}

function dragStart(e) {
  // This allows the drop location to know which element is begin moved when you release it
  e.dataTransfer.setData("text/plain", this.id);
}

function dragEnd(e) {
  console.log("Drag Ended");
}

function dragOver(e) {
  // This line is important because by default, browers don't allow you to drop elements onto other elements.
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave(e) {
  this.classList.remove("over");
}

function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);

  this.appendChild(card);
  this.classList.remove("over");
}

