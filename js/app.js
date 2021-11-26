// Id Selection

const inputTask = document.getElementById("input-task");

document.getElementById("submit-task").addEventListener("click", () => {
  if (inputTask.value.length > 0) {
    let todos = document.getElementById("todos");
    let div = document.createElement("div");
    const classes = [
      "todo",
      "flex",
      "items-center",
      "bg-gray-100",
      "border",
      "border-gray-100",
      "rounded-lg",
      "my-2",
    ];
    div.classList.add(...classes);
    let todo = `
        <div class="details w-3/4 flex items-center p-6">
            <div class="icon p-2">
              <img src="./images/check.png" alt="" />
            </div>
            <div class="text p-2 w-10/12">
              <h2 class="text-2xl md:text-3xl">
                ${inputTask.value}
              </h2>
              <p class="text-md">Created On: ${new Date().toLocaleString()}</p>
            </div>
          </div>

          <div class="w1/4 ml-auto pr-4 p-2">
            <img src="./images/delete.png" alt="Delete Icon" class="del ${Date.now()}"></img>
          </div>
    
    `;
    div.innerHTML = todo;

    todos.appendChild(div);

    inputTask.value = "";
  } else {
    alert("Hey Put Your Task On The Text Box!");
  }
});
