export default function plansItems() {
  const plansItems = document.querySelectorAll('[data-span="plan-time"]');
  const toggleElement = document.querySelector(".toggleElementJs");
  function plans(eventToggle) {
    if (!eventToggle.target.classList.contains("ativo")) {
      plansItems.forEach((plan) => {
        plan.classList.add("ativo");
        plansItems[2].innerHTML = "$90/yr";
        plansItems[1].innerHTML = "$120/yr";
        plansItems[0].innerHTML = "$150/yr";
      });
    } else {
      plansItems.forEach((plan) => {
        plan.classList.remove("ativo");
        plansItems[2].innerHTML = "$9/mo";
        plansItems[1].innerHTML = "$12/mo";
        plansItems[0].innerHTML = "$15/mo";
      });
    }
  }
  toggleElement.addEventListener("click", plans);
}
