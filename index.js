const incrementBtn = document.getElementById("increment-btn")
let countEl = document.getElementById("count-el")
const saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")

let count = 0
let saveElArray = []
incrementBtn.addEventListener("click", function() {
    count += 1
    countEl.textContent = count
})


saveBtn.addEventListener("click", function() {
    if ( count !== 0) {
        saveElArray.push(count)
        let save = "Previous entries: " + saveElArray.join(" - ")
        saveEl.textContent = save
        countEl.textContent = 0
        count = 0
    }
})
