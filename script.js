let gift = document.querySelector(".gift");
let giftCover = document.querySelector(".gift__cover");
let giftContainer = document.querySelector(".gift__container");
let card = document.querySelector(".card");
let confettiContainer = document.querySelector('.confetti');

let addGiftWobble = () => {
  gift.classList.add("animate__wobble");
  giftCover.classList.add("animate__wobble");
};

let removeGiftWobble = () => {
  gift.classList.remove("animate__wobble");
  giftCover.classList.remove("animate__wobble");
};

let addGiftOpen = () => {
  giftCover.classList.add("animate__open");
  giftContainer.classList.add("animate__open");
};

let addCardZoomIn = () => {
  card.classList.add("animate");
};

let createConfettiPiece = () => {
  let confettiPiece = document.createElement('div');
  confettiPiece.classList.add('confetti-piece');
  
  // Set random position and color
  confettiPiece.style.left = Math.random() * 100 + 'vw';
  confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // ألوان متنوعة وجميلة
  
  confettiPiece.style.animationDuration = Math.random() * 1 + 1.5 + 's'; // سرعة أعلى للقصاصات
  
  confettiContainer.appendChild(confettiPiece);

  setTimeout(() => {
    confettiPiece.remove();
  }, 3000); // إزالة بعد الانتهاء
};



let launchConfetti = () => {
  for (let i = 0; i < 150; i++) {
    setTimeout(createConfettiPiece, i * 20);
  }
};

gift.onclick = () => {
  addGiftWobble();
  setTimeout(() => {
    removeGiftWobble();
    addGiftOpen();
    addCardZoomIn();
    launchConfetti();
  }, 3000);
};
