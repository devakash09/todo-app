const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        console.log(li);
        console.log(listContainer);
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    savedata();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();



    }
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();