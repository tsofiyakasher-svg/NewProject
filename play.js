let cards = [
  "לֹא כָּל הַנּוֹצֵץ זָהָב הוּא.",
  "לֹא כָּל הַנּוֹצֵץ זָהָב הוּא.",
  "אֵין חָדָשׁ תַּחַת הַשֶּׁמֶשׁ.",
  "אֵין חָדָשׁ תַּחַת הַשֶּׁמֶשׁ.",
  "מֵרֹב עֵצִים לֹא רוֹאִים אֶת הַיַּעַר.",
  "מֵרֹב עֵצִים לֹא רוֹאִים אֶת הַיַּעַר.",
  "אוֹר וְחֹשֶׁךְ מְשַׁמְּשִׁים בְּעִרְבּוּבְיָה.",
  "אוֹר וְחֹשֶׁךְ מְשַׁמְּשִׁים בְּעִרְבּוּבְיָה.",
  "חָבִיב אָדָם שֶׁנִּבְרָא בְצֶלֶם.",
  "חָבִיב אָדָם שֶׁנִּבְרָא בְצֶלֶם.",
  "הַכֹּל צָפוּי וְהָרְשׁוּת נְתוּנָה.",
  "הַכֹּל צָפוּי וְהָרְשׁוּת נְתוּנָה.",
  "מַיִם גְּנוּבִים יִמְתָּקוּ.",
  "מַיִם גְּנוּבִים יִמְתָּקוּ.",
  "כָּל הַפּוֹסֵל– בְּמוּמוֹ פּוֹסֵל.",
  "כָּל הַפּוֹסֵל– בְּמוּמוֹ פּוֹסֵל.",
  "עַל רֹאשׁ הַגַּנָּב בּוֹעֵר הַכּוֹבַע.",
  "עַל רֹאשׁ הַגַּנָּב בּוֹעֵר הַכּוֹבַע.",
  "נָתְנוּ לֶחָתוּל לִשְׁמֹר עַל הַשַּׁמֶּנֶת.",
  "נָתְנוּ לֶחָתוּל לִשְׁמֹר עַל הַשַּׁמֶּנֶת.",
  "הַכְּלָבִים נוֹבְחִים וְהַשַּׁיָּרָה עוֹבֶרֶת.",
  "הַכְּלָבִים נוֹבְחִים וְהַשַּׁיָּרָה עוֹבֶרֶת.",
  "הַכְּתֹבֶת הָיְתָה עַל הַקִּיר.",
  "הַכְּתֹבֶת הָיְתָה עַל הַקִּיר.",
  "מַיִם שְׁקֵטִים חוֹדְרִים עָמֹק.",
  "מַיִם שְׁקֵטִים חוֹדְרִים עָמֹק.",
  "הַקַּשׁ שֶׁשָּׁבַר אֶת גַּב הַגָּמָל.",
  "הַקַּשׁ שֶׁשָּׁבַר אֶת גַּב הַגָּמָל.",
  "נִכְנָס מֵאֹזֶן אַחַת וְיוֹצֵא מֵהַשְּׁנִיָּה.",
  "נִכְנָס מֵאֹזֶן אַחַת וְיוֹצֵא מֵהַשְּׁנִיָּה.",
  "צרת רבים חצי נחמה.",
  "צרת רבים חצי נחמה.",
  "כל ההתחלות קשות.",
  "כל ההתחלות קשות.",
  "תמונה אחת שווה אלף מילים.",
  "תמונה אחת שווה אלף מילים.",
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

const popup = document.getElementById("rulesPopup");
const closebtn = document.getElementById("closePopup");
console.log(closebtn);

closebtn.addEventListener("click", () => {
  popup.style.display = "none";
});

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

const button = document.getElementById("button");
button.addEventListener("click", () => shuffle(cards));

function shuffle(cards) {
  let arr2 = [];
  for (let i = 0; i < cards.length; i++) {
    const random = Math.floor(Math.random() * (cards.length - 1));

    let w = cards[random];
    arr2.push(w);
  }

  for (let j = 0; j < cards.length; j++) {
    cards[j] = arr2[j];
  }
}

shuffle(cards);
