const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
    const body = document.body;
    body.style.backgroundColor = getRandomColor();
});

function getRandomColor(){
  const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return newColor;
};