const emailFieldAdmin = document.getElementById("admin-email");

const passwordFieldAdmin = document.getElementById("admin-password");

const accessButton = document.getElementById("access-button");

// Take access info from the backend
let accessEmail;
let accessPassword;

const adminAccess = () => {
  const result = fetch("http://localhost:3001/admin")
    .then((res) => res.json())
    .then((data) => {
      accessEmail = data[0].admin_email;
      accessPassword = data[0].admin_password;
      return data;
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });

  return result;
};

adminAccess();

// Add click event to the button
accessButton.addEventListener("click", (button) => {
  button.preventDefault();

  checkEmailField();
  checkPasswordField();

  if (emailFieldAdmin.value != "" && passwordFieldAdmin.value != "") {
    if (emailFieldAdmin.value != accessEmail) {
      document.querySelector(".mensagem-erro-acesso").textContent =
        "Os dados de acesso não estão corretos.";
      return;
    } else {
      window.location.href = `/pages/admin-orders.html`;
    }
  }
});

// check if the fields are empty
// email
function checkEmailField() {
  if (emailFieldAdmin.value == "") {
    document.querySelector(".mensagem-erro-email").textContent =
      "Informe seu e-mail de acesso";
  } else {
    document.querySelector(".mensagem-erro-email").textContent = "";
  }
}

if (emailFieldAdmin) {
  emailFieldAdmin.addEventListener("blur", checkEmailField);
}
// password
function checkPasswordField() {
  if (passwordFieldAdmin.value == "") {
    document.querySelector(".mensagem-erro-senha").textContent =
      "Informe sua senha de acesso";
  } else {
    document.querySelector(".mensagem-erro-senha").textContent = "";
  }
}

if (passwordFieldAdmin) {
  passwordFieldAdmin.addEventListener("blur", checkPasswordField);
}
