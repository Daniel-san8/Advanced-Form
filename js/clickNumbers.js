export default function clickNumbers() {
  const numbers = document.querySelectorAll('[data-numbers="number"]');

  const options = document.querySelectorAll('[data-options="option"]');

  numbers.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < numbers.length; i++) {
        numbers[i].classList.remove("numberClickJs");
      }
      if (true) {
        e.target.classList.add("numberClickJs");
      }
    });
  });

  options.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("numberClickJs");
        console.log(options[i]);
      }
    });
  });
}
