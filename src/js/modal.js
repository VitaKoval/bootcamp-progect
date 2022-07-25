// form
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// mobile modal
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-mob-open]"),
    closeModalBtn: document.querySelector("[data-modal-mob-close]"),
    modal: document.querySelector("[data-modal-mob]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("data-modal-mob-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// learn more
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-header-open]"),
    closeModalBtn: document.querySelector("[data-header-close]"),
    modal: document.querySelector("[data-header]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// cream
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-product-cream-open]"),
    closeModalBtn: document.querySelector("[data-product-cream-close]"),
    modal: document.querySelector("[data-product]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("data-cream-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// coffee
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-product-coffee-open]"),
    closeModalBtn: document.querySelector("[data-product-coffee-close]"),
    modal: document.querySelector("[data-product]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("product-coffee-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// milkshake
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-product-milkshake-open]"),
    closeModalBtn: document.querySelector("[data-product-milkshake-close]"),
    modal: document.querySelector("[data-product-milkshake]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("data-product-milkshake-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// ABOUT. read more
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-about-open]"),
    closeModalBtn: document.querySelector("[data-about-close]"),
    modal: document.querySelector("[data-about]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("data-about-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();