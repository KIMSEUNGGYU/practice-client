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
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

const user = getCookie("userId");
console.log(user);
if (user) {
  const loginSection = document.querySelector(".main--login");
  loginSection.innerHTML = `
    <p><b>${user}</b> 님 안녕하세요</p>
    <button class="logout">로그아웃</button>
  `;

  const logoutBtn = document.querySelector(".logout");
  logoutBtn.addEventListener("click", () => {
    console.log("dd");
    setCookie("userId", "", "");
    // eraseCookie("userId");
    history.go(0);
  });
}
