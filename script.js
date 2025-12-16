const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

function openModal(image) {
  modal.style.display = "flex";
  modalImage.src = image.src;
}

function closeModal() {
  modal.style.display = "none";
}
