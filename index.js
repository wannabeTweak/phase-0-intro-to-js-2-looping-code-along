// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
 for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
  }
  
wrapGifts(gifts);

const namesOnCard = ["Charlie", "Samip", "Patryk", "Ali"];
const eventOnCard = ["Birthday"];

function writeCards(namesOnCard, eventOnCard){
    let messageHolder = [];
    for (let i = 0; i < namesOnCard.length; i++) {
        const message = (`Thank you, ${namesOnCard[i]}, for the wonderful ${eventOnCard} gift!`);
        messageHolder.push(message)
        }
    return messageHolder;
}


function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
}