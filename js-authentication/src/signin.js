const DATABASE = "naver";
const DB_VERSION = 1;
const DB_STORE_NAME = "user";
let db = undefined;

const idInput = document.querySelector("#id");
const passworInput = document.querySelector("#password");
const loginBtn = document.querySelector(".login-btn");

getObjectStore = (store_name, mode) => {
  return db.transaction(store_name, mode).objectStore(store_name);
};

openDB = () => {
  let req = indexedDB.open(DATABASE, DB_VERSION);
  // DB 생성 오류
  req.onerror = function (evt) {
    console.error("indexedDB : ", evt.target.errorCode);
  };
  // DB 생성 성공
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

getAllData = () => {
  // get
  store = getObjectStore(DB_STORE_NAME, "readonly");
  let req = store.openCursor();
  let users = [];

  req.onsuccess = function (evt) {
    const cursor = evt.target.result;
    if (cursor) {
      req = store.get(cursor.key);
      req.onsuccess = function (evt) {
        const value = evt.target.result;
        // console.log(value);
        users.push(value);
      };
      cursor.continue();
    }

    console.log(users);

    return users;
  };
};

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

loginBtn.addEventListener("click", () => {
  const id = idInput.value;
  const password = passworInput.value;
  if (!(id && password)) {
    alert("모든 데이터를 입력 바랍니다.");
    return;
  }

  console.log(id, password);
  store = getObjectStore(DB_STORE_NAME, "readonly");
  const user = store.get([id, password]);

  user.onerror = function () {
    console.log("일치하지 않습니다.");
  };
  user.onsuccess = () => {
    const getData = store.getAll();
    getData.onsuccess = function () {
      const users = getData.result;
      const login = users.some(
        (user) => user.id === id && user.password === password
      );
      if (login) {
        setCookie("userId", id, 7);
        alert("로그인 성공");
        window.location.href = "./index.html";
      } else {
        alert("로그인 실패");
      }
    };
  };
});

openDB();
