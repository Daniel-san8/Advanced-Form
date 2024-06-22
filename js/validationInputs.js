export default function validationInputs() {
  const inputEmail = document.querySelector('[data-input="email"]');
  const inputTel = document.querySelector('[data-input="tel"]');
  const rgxEmail = /^\S+@\S+\.\S+$/;
  const rgxTel = /^\d{10}$/;
  inputEmail.addEventListener("change", () => {
    if (rgxEmail.test(inputEmail.value)) {
      inputEmail.classList.remove("inputInvalidateJs");
      inputEmail.classList.add("inputValidateJs");
    } else {
      inputEmail.classList.remove("inputValidateJs");
      inputEmail.classList.add("inputInvalidateJs");
    }
  });

  inputTel.addEventListener("change", () => {
    if (rgxTel.test(inputTel.value)) {
      console.log("VALIDADO!!");
      inputTel.classList.remove("inputInvalidateJs");
      inputTel.classList.add("inputValidateJs");
    } else {
      inputTel.classList.remove("inputValidateJs");
      inputTel.classList.add("inputInvalidateJs");
    }
  });
}
