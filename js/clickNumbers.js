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
        numbers[i].classList.remove("numberClickJs");
      }
      if (e.target == options[0]) {
        numbers[0].classList.add("numberClickJs");
      } else if (e.target == options[1]) {
        numbers[1].classList.add("numberClickJs");
      } else if (e.target == options[2]) {
        numbers[2].classList.add("numberClickJs");
      } else {
        numbers[3].classList.add("numberClickJs");
      }
    });
  });
}
