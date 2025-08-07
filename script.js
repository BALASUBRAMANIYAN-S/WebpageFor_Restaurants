const orderButtons = document.querySelectorAll(".section-two__order");

orderButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const dish = button.previousElementSibling.textContent;
    alert(`Your order for "${dish}" has been received!\nWe’ll prepare it right away! 🍽️`);
  });
});


const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert(" Please enter both your name and email.");
    return;
  }

 
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert(`Thank you, ${name}! We'll reach out to you at ${email}.`);

  nameInput.value = "";
  emailInput.value = "";
});

const navTexts = document.querySelectorAll(".section-one p");

navTexts.forEach((tab) => {
  tab.addEventListener("mouseover", () => {
    tab.style.color = "gold";
    tab.style.fontWeight = "bold";
  });

  tab.addEventListener("mouseout", () => {
    tab.style.color = "white";
    tab.style.fontWeight = "normal";
  });
});
