export default function validationInputs() {
  const inputEmail = document.querySelector('[data-input="email"]');
  const inputTel = document.querySelector('[data-input="tel"]');
  const labelEmail = document.querySelector("[data-label='email']");
  const labelTel = document.querySelector("[data-label='tel']");
  const buttonElementNext = document.querySelectorAll("[data-button]");
  const rgxEmail = /^\S+@\S+\.\S+$/;
  const rgxTel = /^\d{9}$/;
  inputEmail.addEventListener("input", () => {
    if (rgxEmail.test(inputEmail.value)) {
      labelEmail.classList.remove("labelRequired");
      inputEmail.classList.remove("inputInvalidateJs");
      inputEmail.classList.add("inputValidateJs");
      buttonElementNext.forEach((button) => {
        button.removeAttribute("disabled");
      });
    } else {
      inputEmail.classList.remove("inputValidateJs");
      inputEmail.classList.add("inputInvalidateJs");
      labelEmail.classList.add("labelRequired");
      buttonElementNext.forEach((button) => {
        button.setAttribute("disabled", "");
      });
    }
  });

  inputTel.addEventListener("input", () => {
    if (rgxTel.test(inputTel.value)) {
      labelTel.classList.remove("labelRequired");
      inputTel.classList.remove("inputInvalidateJs");
      inputTel.classList.add("inputValidateJs");
      buttonElementNext.forEach((button) => {
        button.removeAttribute("disabled");
      });
    } else {
      inputTel.classList.remove("inputValidateJs");
      labelTel.classList.add("labelRequired");
      inputTel.classList.add("inputInvalidateJs");
      buttonElementNext.forEach((button) => {
        button.setAttribute("disabled", "");
      });
    }
  });
}
