const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
	if (lockBoard) return; //will stop more cards from being flipped while in the setTimeout
	if (this === firstCard) return;

	this.classList.add("flip");

	if (!hasFlippedCard) {
		//first click on a card
		hasFlippedCard = true;
		firstCard = this;
		return;
	}
	//second click
	hasFlippedCard = false;
	secondCard = this;

	checkForMatch();
}
function checkForMatch() {
	let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

	isMatch ? disableCards() : unflipCards();
}

function disableCards() {
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
	lockBoard = true;
	
	setTimeout(() => {
		firstCard.classList.remove("flip");
		secondCard.classList.remove("flip");
		lockBoard = false; // only unlock after cards have been flipped
	}, 1100);
}

function resetBoard() {
	[hasFlippedCard, lockBoard] = [false, false]
	[firstCard, secondCard] = [null, null]
}

(function shuffle() {
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random() * 12)
		card.style.order = randomPos
	})
})()

cards.forEach((card) => card.addEventListener("click", flipCard));
