window.addEventListener("mousemove", function (e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const buttonEl = document.querySelector("button");
  const rect = buttonEl.getBoundingClientRect();
  const x1 = rect.x;
  const x2 = Math.ceil(x1 + rect.width);
  const y1 = rect.y;
  const y2 = Math.ceil(y1 + rect.height);
  buttonEl.style.position = "absolute";
  if (x1 < mouseX && mouseX < x2 && y1 < mouseY && mouseY < y2) {
    const moveX = mouseX + rect.width;
    const moveY = mouseY + rect.height;
    buttonEl.style.left = `${moveX}px`;
    buttonEl.style.top = `${moveY}px`;
  }
});

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", () => {
  buttonEl.textContent = "F**k off";
});
