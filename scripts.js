const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip')
    if (!hasFlippedCard) {
        //first click on a card
        hasFlippedCard = true
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;
        // console.log(secondCard, firstCard)

        //do cards match
        console.log(firstCard.dataset.framework)
        console.log(secondCard.dataset.framework)
    }
}
cards.forEach(card => card.addEventListener('click', flipCard))