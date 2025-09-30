let cards = [
  "😀",
  "😀",
  "🐱",
  "🐱",
  "🍕",
  "🍕",
  "🤖",
  "🤖",
  "🌈",
  "🌈",
  "🎵",
  "🎵",
];
// "לֹא כָּל הַנּוֹצֵץ זָהָב הוּא.",
// "לֹא כָּל הַנּוֹצֵץ זָהָב הוּא.",
// "אֵין חָדָשׁ תַּחַת הַשֶּׁמֶשׁ.",
// "אֵין חָדָשׁ תַּחַת הַשֶּׁמֶשׁ.",
// "מֵרֹב עֵצִים לֹא רוֹאִים אֶת הַיַּעַר.",
// "מֵרֹב עֵצִים לֹא רוֹאִים אֶת הַיַּעַר.",
// "אוֹר וְחֹשֶׁךְ מְשַׁמְּשִׁים בְּעִרְבּוּבְיָה.",
// "אוֹר וְחֹשֶׁךְ מְשַׁמְּשִׁים בְּעִרְבּוּבְיָה.",
// "חָבִיב אָדָם שֶׁנִּבְרָא בְצֶלֶם.",
// "חָבִיב אָדָם שֶׁנִּבְרָא בְצֶלֶם.",
// "הַכֹּל צָפוּי וְהָרְשׁוּת נְתוּנָה.",
// "הַכֹּל צָפוּי וְהָרְשׁוּת נְתוּנָה.",
// "מַיִם גְּנוּבִים יִמְתָּקוּ.",
// "מַיִם גְּנוּבִים יִמְתָּקוּ.",
// "כָּל הַפּוֹסֵל– בְּמוּמוֹ פּוֹסֵל.",
// "כָּל הַפּוֹסֵל– בְּמוּמוֹ פּוֹסֵל.",
// "עַל רֹאשׁ הַגַּנָּב בּוֹעֵר הַכּוֹבַע.",
// "עַל רֹאשׁ הַגַּנָּב בּוֹעֵר הַכּוֹבַע.",
// "נָתְנוּ לֶחָתוּל לִשְׁמֹר עַל הַשַּׁמֶּנֶת.",
// "נָתְנוּ לֶחָתוּל לִשְׁמֹר עַל הַשַּׁמֶּנֶת.",
// "הַכְּלָבִים נוֹבְחִים וְהַשַּׁיָּרָה עוֹבֶרֶת.",
// "הַכְּלָבִים נוֹבְחִים וְהַשַּׁיָּרָה עוֹבֶרֶת.",
// "הַכְּתֹבֶת הָיְתָה עַל הַקִּיר.",
// "הַכְּתֹבֶת הָיְתָה עַל הַקִּיר.",
// "מַיִם שְׁקֵטִים חוֹדְרִים עָמֹק.",
// "מַיִם שְׁקֵטִים חוֹדְרִים עָמֹק.",
// "הַקַּשׁ שֶׁשָּׁבַר אֶת גַּב הַגָּמָל.",
// "הַקַּשׁ שֶׁשָּׁבַר אֶת גַּב הַגָּמָל.",
// "נִכְנָס מֵאֹזֶן אַחַת וְיוֹצֵא מֵהַשְּׁנִיָּה.",
// "נִכְנָס מֵאֹזֶן אַחַת וְיוֹצֵא מֵהַשְּׁנִיָּה.",
// "צרת רבים חצי נחמה.",
// "צרת רבים חצי נחמה.",
// "כל ההתחלות קשות.",
// "כל ההתחלות קשות.",
// "תמונה אחת שווה אלף מילים.",
// "תמונה אחת שווה אלף מילים.",
// ];
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
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
  // "?",
];

//rules popup
const popup = document.getElementById("rulesPopup");
const closebtn = document.getElementById("closePopup");

popup.style.display = "flex";

closebtn.addEventListener("click", () => {
  popup.style.display = "none";
  const startGameSound = document.getElementById("startGameSound");
  startGameSound.currentTime = 0; // rewind in case it was played before
  startGameSound.play();
});
//end popup win
const winPopup = document.getElementById("win");
const closeWin = document.getElementById("closeWin");

closeWin.addEventListener("click", () => {
  winPopup.style.display = "none";
});

function showWinPopup() {
  winPopup.style.display = "flex";
  const winSound = document.getElementById("winSound");
  winSound.currentTime = 0; // rewind in case it was played before
  winSound.play();
}

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
    const winnerSound = document.getElementById("winnerSound");
    winnerSound.currentTime = 0; // rewind in case it was played before
    winnerSound.play();
    big(first, second);
    // After 1 second, shrink back to the original size
    setTimeout(() => {
      ogshape(first, second);
      checkGameOver();
    }, 1000);
  } else {
    const loseSound = document.getElementById("loseSound");
    loseSound.currentTime = 0; // rewind in case it was played before
    loseSound.play();
    // מחזיר ל? , לא התאמה
    setTimeout(() => {
      openCards[first] = "?";
      openCards[second] = "?";
      updatescreen();
    }, 100);
  }

  // מנקה את רשימת הכרטיסים ההפוכים
  flippedCards = [];
}

function checkGameOver() {
  //If all cards are flipped (no ? left),
  // the game is over → show the win popup. ✅
  if (!openCards.includes("?")) {
    showWinPopup();
  }
}

function updatescreen() {
  // מוצא את כל הכרטיסים בדף
  let cardElements = document.querySelectorAll(".card");

  // מעדכן כל כרטיס
  for (let i = 0; i < openCards.length; i++) {
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

const button = document.getElementById("button");
button.addEventListener("click", () => {
  shuffle(cards);
  shuffleAnimation();
});

function shuffle(cards) {
  //fisher-yates shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //gives a number between 0 and i
    [cards[i], cards[j]] = [cards[j], cards[i]];
    //its like this but shorter
    //let temp = array[i];   // save array[i] in a temporary variable
    // array[i] = array[j];   // overwrite array[i] with array[j]
    // array[j] = temp;       // put the saved value into array[j]
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
