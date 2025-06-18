document.addEventListener("DOMContentLoaded", () => {
  // Select all necessary elements
  const cards = document.querySelectorAll(".card-body");
  const totalPriceElement = document.querySelector(".total");

  // Function to update total price
  function updateTotalPrice() {
    let total = 0;
    cards.forEach((card) => {
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      const price = parseFloat(
        card.querySelector(".unit-price").textContent.replace("$", "")
      );
      total += quantity * price;
    });
    totalPriceElement.textContent = `${total.toFixed(2)} $`;
  }

  // Event listeners for each card
  cards.forEach((card) => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const quantityElement = card.querySelector(".quantity");
    const deleteBtn = card.querySelector(".fa-trash-alt");
    const heartBtn = card.querySelector(".fa-heart");

    // Increase quantity
    plusBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = quantity + 1;
      updateTotalPrice();
    });

    // Decrease quantity
    minusBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantityElement.textContent = quantity - 1;
        updateTotalPrice();
      }
    });

    // Delete item
    deleteBtn.addEventListener("click", () => {
      card.parentElement.remove();
      updateTotalPrice();
    });

    // Toggle like
    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("fas");
      heartBtn.classList.toggle("far");
      heartBtn.style.color = heartBtn.classList.contains("fas")
        ? "#ff0000"
        : "#000000";
    });
  });

  // Initial total price calculation
  updateTotalPrice();
});
