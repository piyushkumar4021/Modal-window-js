const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let idx = 0; idx < btnsOpenModal.length; idx++) {
  btnsOpenModal[idx].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key == "Escape" && !modal.classList.contains("hidden")) closeModal();
});
