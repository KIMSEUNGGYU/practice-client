const DATABASE = "naver";
const DB_VERSION = 1;
const DB_STORE_NAME = "user";
let db = undefined;

openDB = () => {
  let req = indexedDB.open(DATABASE, DB_VERSION);
  //   console.log(req);
  // DB 생성 오류
  req.onerror = function (evt) {
    console.error("indexedDB : ", evt.target.errorCode);
  };

  req.onsuccess = function (evt) {
    db = this.result;
  };

  req.onupgradeneeded = function (event) {
    const store = event.currentTarget.result.createObjectStore(DB_STORE_NAME, {
      keyPath: "id",
      autoIncrement: true,
    });
    store.createIndex("userId", "userId");
    store.createIndex("password", "password");
    store.createIndex("name", "name");
  };
};

getObjectStore = (store_name, mode) => {
  return db.transaction(store_name, mode).objectStore(store_name);
};

const idInput = document.querySelector("#id");
const passworInput = document.querySelector("#password");
const rePassworInput = document.querySelector("#re-password");
const nameInput = document.querySelector("#name");
const signupBtn = document.querySelector(".signup-btn");

signupBtn.addEventListener("click", () => {
  const id = idInput.value;
  const password = passworInput.value;
  const rePassword = rePassworInput.value;
  const name = nameInput.value;

  if (password !== rePassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (!(id && password && name)) {
    alert("모든 데이터를 입력 바랍니다.");
    return;
  }

  let store = getObjectStore(DB_STORE_NAME, "readwrite");
  let req = undefined;
  const user = {
    id,
    password,
    name,
  };

  try {
    req = store.add(user);
  } catch (err) {
    console.log(`error: ${error}`);
  }

  req.onsuccess = function (evt) {
    alert("회원가입이 정상적으로 수행되었습니다.");
    window.location.href = "./signin.html";
  };
  req.onerror = function (evt) {
    alert("회원가입 과정에서 오류가 발생했습니다.");
  };
});
openDB();
