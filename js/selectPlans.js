export default function selectPlans() {
  const plansItems = document.querySelectorAll(".plans-items");
  plansItems.forEach((plan) => {
    plan.addEventListener("click", (e) => {
      for (let i = 0; i < plansItems.length; i++) {
        plansItems[i].classList.remove("labelStyleJs");
      }
      e.currentTarget.classList.add("labelStyleJs");
    });
  });
}
