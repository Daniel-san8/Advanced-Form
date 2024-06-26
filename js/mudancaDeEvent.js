export default function mudancaDeEvent() {
  const buttonElement = document.querySelectorAll("[data-button]");
  const elementForm1 = document.querySelector('[data-form="1"');
  const elementForm2 = document.querySelector('[data-form="2"]');
  const numbers = document.querySelectorAll('[data-numbers="number"]');
  const options = document.querySelectorAll('[data-options="option"]');
  let count = 0;
  window.addEventListener("load", () => {
    buttonElement.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        switch (count) {
          case 0:
            count++;
            elementForm1.classList.add("noneJs");
            elementForm2.classList.remove("noneJs");
            break;
          case 1:
            count++;
            elementForm2.classList.add("noneJs");
        }
      });
    });
  });

  function captaNumbers(e) {
    let number = Number(e.target.innerHTML);
    if (number === 1) {
      elementForm1.classList.remove("noneJs");
      elementForm2.classList.add("noneJs");
    } else if (number === 2) {
      elementForm1.classList.add("noneJs");
      elementForm2.classList.remove("noneJs");
    }
  }

  function captaOptions(e) {
    let option = e.target.innerHTML.toLowerCase();
    switch (option) {
      case "your info":
        elementForm1.classList.remove("noneJs");
        elementForm2.classList.add("noneJs");
        break;
      case "select plan":
        elementForm1.classList.add("noneJs");
        elementForm2.classList.remove("noneJs");
        break;
      case "add-ons":
        console.log(option);
        break;
      case "summary":
        console.log(option);
        break;
    }
  }

  numbers.forEach((number) => {
    number.addEventListener("click", captaNumbers);
  });
  options.forEach((option) => {
    option.addEventListener("click", captaOptions);
  });
}

// } else if (number === 3) {
//   elementForm1.classList.add("noneJs");
//   elementForm2.classList.add("noneJs");
//   elementForm3.classList.remove("noneJs");
//   elementForm4.classList.add("noneJs");
// } else if (number === 4) {
//   elementForm1.classList.add("noneJs");
//   elementForm2.classList.add("noneJs");
//   elementForm3.classList.add("noneJs");
//   elementForm4.classList.remove("noneJs");
// }
