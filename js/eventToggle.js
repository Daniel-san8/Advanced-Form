export default function eventToggle() {
  const elementToggle = document.querySelector(".toggleElement");
  const elementToggleLabel = document.querySelector(".toggleElementJs");
  elementToggle.addEventListener("click", () => {
    if (elementToggleLabel.classList.contains("ativo")) {
      elementToggleLabel.classList.remove("ativo");
    } else {
      elementToggleLabel.classList.add("ativo");
    }
  });
}
