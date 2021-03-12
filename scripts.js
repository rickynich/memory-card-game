const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
	this.classList.add('flip');

	if (!hasFlippedCard) {
		//first click on a card
		hasFlippedCard = true;
		firstCard = this;
		return;
	}
	
	hasFlippedCard = false;
	secondCard = this;

	checkForMatch();

	function checkForMatch() {
		let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

		isMatch ? disableCards() : unflipCards();

	}
}

function disableCards() {
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
	setTimeout(() => {
		firstCard.classList.remove("flip");
		secondCard.classList.remove("flip");
	}, 1100);
}

cards.forEach((card) => card.addEventListener("click", flipCard));
