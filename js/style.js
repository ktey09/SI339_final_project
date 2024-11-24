// Select all cards
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    const front = card.querySelector('.card-front');
    const back = card.querySelector('.card-back');

    // Click event to flip card
    card.addEventListener('click', () => {
        toggleFlip(card, front, back);
    });

    // to flip card on Enter key
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            toggleFlip(card, front, back);
        }
    });

    // First set it so that card back is hidden
    front.style.display = 'block';
    back.style.display = 'none';

    // Make the card focusable for keyboard interaction
    card.tabIndex = 0;
});

// Function to toggle card flip
function toggleFlip(card, front, back) {
    if (card.classList.contains('flipped')) {
        // If already flipped, flip back
        card.classList.remove('flipped');
        front.style.display = 'block';
        back.style.display = 'none';
    } else {
        // If not flipped, flip
        card.classList.add('flipped');
        front.style.display = 'none';
        back.style.display = 'block';
    }
}
