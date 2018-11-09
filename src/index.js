const ranks = "A 2 3 4 5 6 7 8 9 10 P KN Q K".split(" ");
const suits = "🗡 ♥ ⚚ ⛁ ♛".split(" ");
//Actually not sure this is needed
const majorRanks = "0 The Fool, 1 The Magician, 2 The High Priestess, 3 The Empress, 4 The Emporor, 5 The Hierophant, 6 The Lovers, 7  The Chariot, 8 Strength, 9 The Hermit, 10 Wheel of Fortune, 11 Justice, 12 The Hanged Man, 13 Death, 14 Temperance, 15 The Devil, 16 The Tower, 17 The Star, 18 The Moon, 19 The Sun, 20 Judgement, 21 The World".split(
  ","
);

//0=swords,1=cups,2=staffs,3=coins
var card;
const cards = new Array(79);
//Here's probably where you'd add the properties to each one, right? Make each card an object with a name and a blurb

//I'm not sure what's happening here, codeSandbox isn't liking me trying to do <= cards.length?
//It says potential infinite loop, but I can't quite figure out why.
for (let i = 0; i < cards.length; i++) {
  cards[i] = i % 79;
}

const getProperties = i => {
  const majorArcana = i > 55; //Was a gotcha here, it was registering the Fool as a part of the minor arcana, whoops
  //Hmm, little tricky. How do I properly set the rank to continue on past 14, and also not to lable a card as a King?
  //I tried using indexOf already
  const rank = majorArcana ? cards.indexOf(i - 56) : i % 14;
  const value = majorArcana ? i - 56 : rank + 1; //Because it needs to start at two
  const suit = majorArcana ? 4 : (i / 14) | 0;
  //const color = suit % 2 ? "red" : "black";
  return { rank, rank: ranks[rank], value, suit: suits[suit] };
  //return {rank, value, suit, majorArcana};
};

const single = document.createElement("single");
const pre = document.createElement("pre");

pre.textContent = JSON.stringify(cards.map(getProperties), null, 2);

document.body.appendChild(pre);

const sort = cards => {
  for (let i = 0; i < cards.length; i++) {}
};

const pickAcard = cards => {
  //Ok so this is returning a number instead of a value. Something about JSON.
  //var rand = cards[Math.floor(Math.random() * cards.length)];
  var rand = cards[8];
  var card = cards[rand];
  console.log(card);
  return card;
};

const shuffle = cards => {
  for (let i = 0; i < cards.length; i++) {
    const rnd = (Math.random() * i) | 0;
    const tmp = cards[i];
    cards[i] = cards[rnd];
    cards[rnd] = tmp;
  }
  return cards;
};

setTimeout(() => {
  console.log(cards);
  //single.textContent = JSON.stringify(card);
  // shuffle(cards);
  pickAcard(cards);
  pre.textContent = JSON.stringify(cards.map(getProperties), null, 2);
}, 1000);
