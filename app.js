const input = document.querySelector(".input");
const todoBtn = document.querySelector(".add-todo");
let ul = document.querySelector(".List");

let idToUpdate = "";

todoBtn.addEventListener("click", function (e) {
  if (idToUpdate) {
    let slectedLi = document.getElementById(idToUpdate);
    slectedLi.firstChild.textContent = input.value;
    todoBtn.textContent = "Add Todo";
    idToUpdate = "";
    input.value = "";
  } else {
    console.log("add logic");
    if (input.value !== "") {
      let span = document.createElement("span");
      let li = document.createElement("li");

      li.setAttribute("id", Math.ceil(Math.random() * 100));

      span.textContent = input.value;
      span.style.backgroundColor = "#ababab";
      li.appendChild(span);

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.style.marginLeft = "7px";
      li.appendChild(deleteBtn);

      let updateBtn = document.createElement("button");
      updateBtn.textContent = "Update todo";
      li.appendChild(updateBtn);
      ul.appendChild(li);

      input.value = "";

      updateBtn.addEventListener("click", () => {
        input.value = span.textContent;
        todoBtn.textContent = "Update Todo";
        idToUpdate = li.getAttribute("id");

        console.log("bhjhj", idToUpdate);
      });

      deleteBtn.addEventListener("click", function (e) {
        li.remove();
      });
    }
  }
});
