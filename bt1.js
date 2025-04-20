let nameInput = document.querySelector(".input");
let saveBtn = document.querySelector(".saveBtn");
let prompt = document.querySelector(".prompt");
let div2 = document.querySelector(".div2");
let div1 = document.querySelector(".div1");

let names = JSON.parse(localStorage.getItem("names")) || [];

document.addEventListener("DOMContentLoaded", () => {
    if (names.length > 0) {
      const lastName = names[names.length - 1];
      div1.style.display = "none";
      render(lastName);
    }
  });

saveBtn.addEventListener("click", function () {
    let name = nameInput.value.trim();
    if (check(name)) {
        names.push(name)
        localStorage.setItem("names", JSON.stringify(names))
        div1.style.display = "none";
        render(name)
    }
})
function check(name)  {
    if (!name) {
        prompt.style.display = "block";
        return false
    } else {
        prompt.style.display = "none";
        return true
    } 
}
function render(name) {
    div2.style.display = "block";
    div2.innerHTML = "";
    div2.innerHTML = `
        <h1 class="h1">👋 Chào bạn, ${name}</h1>
        <div class="centerBtn">
            <button class="changeBtn" onclick = "home()">Change Name</button>
        </div>
    `;

}

function home() {
    div2.style.display = "none";
    div1.style.display = "block";
    nameInput.value = "";
}