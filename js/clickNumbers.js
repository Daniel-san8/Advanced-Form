export default function clickNumbers() {
  const numbers = Array.from(
    document.querySelectorAll('[data-numbers="number"]')
  );
  const options = Array.from(
    document.querySelectorAll('[data-options="option"]')
  );

  const selections = [options, numbers];

  selections[0].forEach((item) => {
    item.addEventListener("click", () => {});
  });
  selections[1].forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("numberClickJs")) {
        item.classList.remove("numberClickJs");
      }
      item.classList.add("numberClickJs");
    });
  });
}
