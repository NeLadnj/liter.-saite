document.addEventListener("DOMContentLoaded", () => {
  console.log("🎸 Jelgava 94 mājaslapa ir ielādēta!");

  document.querySelectorAll(".card").forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 150);
  });
});