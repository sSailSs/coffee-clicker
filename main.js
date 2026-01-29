class Coffee {
  constructor(container) {
    this.container = container;
    this.sugarAmount = 0;

    this.coffeeElement = this.container.querySelector(".coffee");
    this.coffeeInitialLevel =
      Number(this.coffeeElement.style.height.replace("%", "")) || 50;

    this.cupElement = this.container.querySelector(".cup");
    this.cupElement.addEventListener("click", () => {
      this.addSugar();
    });

    this.renderCoffee();
  }

  addSugar() {
    console.log("Sugar added to the coffee.");
    this.renderSugar();
    setTimeout(() => {
      this.sugarAmount += 1;
      this.renderCoffee();
    }, 1000);
  }

  renderSugar() {
    const sugar = document.createElement("div");
    sugar.classList.add("sugar");
    sugar.textContent = `Sugar: ${this.sugarAmount}`;
    this.coffeeElement.appendChild(sugar);
    this.coffeeElement.style.left = 10 + Math.random() * 80 + "%";
  }

  renderCoffee() {
    this.coffeeElement.style.height =
      Math.min(this.coffeeInitialLevel + this.sugarAmount * 10, 100) + "%";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const coffeeContainer = document.querySelector(".coffee-container");
  new Coffee(coffeeContainer);
});
