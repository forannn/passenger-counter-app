const incrementBtn = document.getElementById("increment-btn");
let countEl = document.getElementById("count-el");
const saveBtn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");

let count = 0;
let saveElArray = [];
incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", function () {
  if (count !== 0) {
    saveElArray.push(count);
    if (saveElArray.length - 1 === 0) {
      saveEl.textContent += count;
    } else {
      saveEl.textContent += " - " + count;
    }
  }
  countEl.textContent = 0;
  count = 0;
});
