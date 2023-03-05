// responsive menu

function mobileMenu() {
  const menu = document.querySelector(".header ul");
  const imagesPosition = document.querySelector(".slider-wrapper");

  menu.classList.toggle("toggle");

  if (menu.getAttribute("class") === "toggle") {
    imagesPosition.style.marginTop = "220px";
  } else {
    imagesPosition.style.marginTop = "50px";
      
  }
  //   if (btn.innerText === "MENU") {
  //     menu.style.display = "block";
  //       btn.innerText = "CLOSE";
  //   } else if (btn.innerText === "CLOSE") {
  //     menu.style.display = "none";
  //     btn.innerText = "MENU";
  //     imagesPosition.style.marginTop = "50px";
  //   }
}

//galery

const rightBtn = document.querySelector("#right-btn");
const leftBtn = document.querySelector("#left-btn");
const pictures = document.querySelectorAll(".slider-images img");
let img = 0;

// picture move to left
function moveLeft() {
  displayNone(pictures);

  img--;
  if (img === -1) {
    img = pictures.length - 1;
  }
  console.log(img);
  pictures[img].style.display = "block";
}
// picture move to right

function moveRight() {
  displayNone(pictures);
  img++;
  if (img > pictures.length - 1) {
    img = 0;
  }

  pictures[img].style.display = "block";
}
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

function displayNone(element) {
  element.forEach((img) => {
    img.style.display = "none";
  });
}

// Portfolio

const allCategory = document.querySelectorAll(".categoryAll");
allCategory.forEach((category) => {
  category.addEventListener("click", (e) => {
    let btn = e.target;
    let category = btn.getAttribute("data-category");
    const portfolioItems = document.querySelectorAll(".portfolio-single-item");

    portfolioItems.forEach((item) => {
      item.style.display = "none";
      if (category === "all") {
        item.style.display = "block";
      }
      let itemCategory = item.getAttribute("data-category");
      if (itemCategory.includes(category)) {
        item.style.display = "block";
      }
    });
  });
});

// open modal

const openModal = document.querySelector("#openModal");
const popupModal = document.querySelector(".popup-modal");
const overlay = document.querySelector(".overlay");
openModal.addEventListener("click", () => {
  popupModal.style.display = "block";
  overlay.style.display = "block";
});

//clos modal

const closeModal = document.querySelector("#closeModal");
closeModal.addEventListener("click", () => {
  popupModal.style.display = "none";
  overlay.style.display = "none";
});
