export default function validationInputs() {
  const inputEmail = document.querySelector('[data-input="email"]');
  const rgxEmail = /^\S+@\S+\.\S+$/;

  inputEmail.addEventListener("change", () => {
    if (rgxEmail.test(inputEmail.value)) {
      console.log("VALIDADO!!");
      inputEmail.classList.remove("inputInvalidateJs");
      inputEmail.classList.add("inputValidateJs");
    } else {
      inputEmail.classList.remove("inputValidateJs");
      inputEmail.classList.add("inputInvalidateJs");
    }
  });
}
