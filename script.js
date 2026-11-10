const LOGIN_NIM = "2024140003";
const LOGIN_PASSWORD = "Panjaitan07";

const loginScreen = document.getElementById("loginScreen");
const cvScreen = document.getElementById("cvScreen");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const logoutButton = document.getElementById("logoutButton");

document.getElementById("loginYear").textContent = new Date().getFullYear();
document.getElementById("cvYear").textContent = new Date().getFullYear();

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Sembunyikan" : "Lihat";
  togglePassword.setAttribute("aria-label", isPassword ? "Sembunyikan password" : "Tampilkan password");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nim = document.getElementById("nim").value.trim();
  const password = passwordInput.value;
  const program = document.getElementById("program").value;

  if (!program) {
    loginError.textContent = "Silakan pilih jenjang program studi terlebih dahulu.";
    return;
  }

  if (nim === LOGIN_NIM && password === LOGIN_PASSWORD) {
    loginError.textContent = "";
    loginScreen.classList.add("hidden");
    cvScreen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "instant" });
  } else {
    loginError.textContent = "NIM atau password yang kamu masukkan belum sesuai.";
  }
});

logoutButton.addEventListener("click", () => {
  cvScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  loginForm.reset();
  passwordInput.type = "password";
  togglePassword.textContent = "Lihat";
  loginError.textContent = "";
  window.scrollTo({ top: 0, behavior: "instant" });
});
