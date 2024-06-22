export default function validationInputs() {
  const inputEmail = document.querySelector('[data-input="email"]');
  const inputTel = document.querySelector('[data-input="tel"]');
  const labelEmail = document.querySelector("[data-label='email']");
  const labelTel = document.querySelector("[data-label='tel']");
  const rgxEmail = /^\S+@\S+\.\S+$/;
  const rgxTel = /^\d{9}$/;
  inputEmail.addEventListener("change", () => {
    if (rgxEmail.test(inputEmail.value)) {
      labelEmail.classList.remove("labelRequired");
      inputEmail.classList.remove("inputInvalidateJs");
      inputEmail.classList.add("inputValidateJs");
    } else {
      inputEmail.classList.remove("inputValidateJs");
      inputEmail.classList.add("inputInvalidateJs");
      labelEmail.classList.add("labelRequired");
    }
  });

  inputTel.addEventListener("change", () => {
    if (rgxTel.test(inputTel.value)) {
      labelTel.classList.remove("labelRequired");
      inputTel.classList.remove("inputInvalidateJs");
      inputTel.classList.add("inputValidateJs");
    } else {
      inputTel.classList.remove("inputValidateJs");
      labelTel.classList.add("labelRequired");
      inputTel.classList.add("inputInvalidateJs");
    }
  });
}
