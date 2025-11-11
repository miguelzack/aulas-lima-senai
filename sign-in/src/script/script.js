document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const pageTitle = document.title.toLowerCase();

    if (pageTitle.includes("login") || pageTitle.includes("sign in")) {
      alert("Login realizado com sucesso!");
    } else if (
      pageTitle.includes("cadastro") ||
      pageTitle.includes("sign up")
    ) {
      alert("Cadastro realizado com sucesso!");
    } else {
      alert("Formulário enviado!");
    }
  });
});
