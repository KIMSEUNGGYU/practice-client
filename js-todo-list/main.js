const items = document.querySelector(".items");
const createBtn = document.querySelector(".circle-btn");
const insertForm = document.querySelector(".insertForm");
const inputEle = document.querySelector("#todo-input");
const itemCount = document.querySelector(".item-count");
let isCreate = !!insertForm;
let count = 1;
function changeBtnUI() {
  createBtn.classList.add("cancle-btn");

  if (isCreate) {
    insertForm.classList.remove("hidden");
    createBtn.classList.add("cancle-btn");
  } else {
    insertForm.classList.add("hidden");
    createBtn.classList.remove("cancle-btn");
  }
  isCreate = !isCreate;
}

function createTodoItem(value) {
  const item = document.createElement("li");
  item.setAttribute("class", "item");
  item.setAttribute("id", `item-${count}`);

  item.innerHTML = `
    <div class="item--checkbox">
      <div class="check-circle" data-id=item-${count}>
          <i class="fas fa-check" data-id=item-${count}></i>
      </div>
      <span class="item-text"></span>
    </div>
    <i class="fas fa-trash" data-id=item-${count}></i>
  `;
  items.appendChild(item);
  const textEle = item.querySelector(".item-text");
  textEle.textContent = value;
  count++;
  updateToDoCount();
}

createBtn.addEventListener("click", changeBtnUI);
inputEle.addEventListener("change", (event) => {
  const value = event.target.value;
  event.target.value = "";
  createTodoItem(value);
});

items.addEventListener("click", (event) => {
  const target = event.target;
  const style = target.classList.value;
  const id = target.dataset.id;

  if (!id) {
    return;
  }

  if (style.includes("fa-trash")) {
    // 삭제 기능
    removeItem(`${id}`);
  } else if (style.includes("check-circle") || style.includes("fa-check")) {
    // 수정 기능
    updateItme(id);
  } else {
    return;
  }
});

function updateItme(id) {
  const item = items.querySelector(`#${id}`);
  const checkCircle = item.querySelector(".check-circle");
  const check = item.querySelector(".fa-check");
  const itemText = item.querySelector(".item-text");
  if (check.classList.value.includes("checked")) {
    checkCircle.classList.remove("checked");
    check.classList.remove("checked");
    itemText.classList.remove("checked");
  } else {
    checkCircle.classList.add("checked");
    check.classList.add("checked");
    itemText.classList.add("checked");
  }

  updateToDoCount();
}

function removeItem(id) {
  const element = items.querySelector(`#${id}`);
  element.remove();
  updateToDoCount();
}

function updateToDoCount() {
  const totalItem = items.querySelectorAll(".item").length;
  const checked = items.querySelectorAll(".item .check-circle.checked").length;
  itemCount.textContent = `할 일 ${totalItem - checked}개 남음`;
}

// test Item
createTodoItem("프로그래밍 공부");
createTodoItem("Vanila Javascirpt");
createTodoItem("Vanila Javascirpt2");
createTodoItem("Vanila Javascirpt3");
updateToDoCount();
