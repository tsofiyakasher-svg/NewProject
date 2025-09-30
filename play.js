let cards = [
  "♥️ לב",
  " ♥️ לב",
  "🎂 עוגה",
  "🎂 עוגה",
  "🎁מתנה",
  "🎁מתנה",
  "👑כתר",
  "👑כתר",
  " 🪛 מברג",
  " 🪛 מברג",
  " 🧢 כובע ",
  " 🧢 כובע ",
  " 🦁 אריהּ",
  " 🦁 אריהּ",
  " 🚢 סירה",
  " 🚢 סירה",
  " 🐒 קוף",
  " 🐒 קוף",
  "🐠 דג",
  "🐠 דג",
  " 🌷 פרח",
  " 🌷 פרח",
  " 🌟 כוכב",
  " 🌟 כוכב",
  "  📏 סרגל",
  "  📏 סרגל",
  " 🥕 גזר",
  " 🥕 גזר",
  " 🍕פיצה",
  " 🍕פיצה",
  " 🥄 כפית",
  " 🥄 כפית",
  "🎈 בלון",
  "🎈 בלון",
  " 🔦 פנס",
  " 🔦 פנס",
];
let openCards = [
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
];

let flippedCards = [];

function flipCard(cardNumber) {
  // אם הכרטיס כבר פתוח אל תעשה כלום
  if (openCards[cardNumber] !== "?") {
    return;
  }
  // מראה את הסמל במקום ?
  // הופך את הכרטיס
  openCards[cardNumber] = cards[cardNumber];
  flippedCards.push(cardNumber);
  // מעדכן את המסך
  updatescreen();

  // אם הפכנו 2 כרטיסים בודקים התאמה

  if (flippedCards.length == 2) {
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  let first = flippedCards[0];
  let second = flippedCards[1];

  // בודק אם שני הכרטיסים זהים

  if (cards[first] == cards[second]) {
    big(first, second);
    // After 1 second, shrink back to the original size
    setTimeout(() => {
      ogshape(first, second);
    }, 1000);
  } else {
    // מחזיר ל? , לא התאמה
    openCards[first] = "?";
    openCards[second] = "?";
    updatescreen();
  }

  // מנקה את רשימת הכרטיסים ההפוכים
  flippedCards = [];
}

// מוצאת את אלמנטים ה-DOM של הכרטיסים ומעדכנת את הטקסט שלהם בהתאם מערך openCards.

function updatescreen() {
  // מוצא את כל הכרטיסים בדף
  let cardElements = document.querySelectorAll(".card");

  // מעדכן כל כרטיס
  for (let i = 0; i < 36; i++) {
    cardElements[i].textContent = openCards[i];
  }
}

function big(first, second) {
  // מוצא את כל הכרטיסים
  let cardElements = document.querySelectorAll(".card");

  // לוקח את האינדקסים של הכרטיסים שהופכו

  cardElements[first].style.transition = "transform 0.5s ease";
  cardElements[second].style.transition = "transform 0.5s ease";
  // מגדיל את הכרטיסים שהתאימו
  cardElements[first].style.transform = "scale(1.5)";
  cardElements[second].style.transform = "scale(1.5)";
}

function ogshape(first, second) {
  let cardElements = document.querySelectorAll(".card");

  cardElements[first].style.transition = "transform 0.5s ease";
  cardElements[second].style.transition = "transform 0.5s ease";
  // Scale down the matched cards back to the original size
  cardElements[first].style.transform = "scale(1)";
  cardElements[second].style.transform = "scale(1)";
}

button.addEventListener("click", () => {
  shuffle(cards);
  shuffleAnimation();
});

function shuffle(cards) {
  let arr2 = [];
  while (cards.length !== 0) {
    const random = Math.floor(Math.random() * (cards.length - 1));

    let w = cards[random];
    arr2.push(w);

    cards.splice(random, 1);
  }

  for (let j = 0; j < arr2.length; j++) {
    cards[j] = arr2[j];
  }
}

shuffle(cards);
// shuffle animation
function shuffleAnimation() {
  let cardElements = document.querySelectorAll(".card");
  cardElements.forEach((card) => {
    card.classList.add("shuffle");

    card.addEventListener(
      "animationend",
      () => {
        card.classList.remove("shuffle");
      },
      { once: true }
    );
  });
}

const popup = document.getElementById("rulesPopup");
const closebtn = document.getElementById("closePopup");
console.log(closebtn);

closebtn.addEventListener("click", () => {
  popup.style.display = "none";
});
