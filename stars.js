document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('#rating-stars .star');
    const ratingMessage = document.getElementById('rating-message');
    
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const value = star.getAttribute('data-value');
            highlightStars(value);
        });

        star.addEventListener('mouseout', () => {
            removeHighlight();
        });

        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            setRating(value);
        });
    });

    function highlightStars(value) {
        stars.forEach(star => {
            star.classList[value >= star.getAttribute('data-value') ? 'add' : 'remove']('selected');
        });
    }

    function removeHighlight() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    }

    function setRating(value) {
        localStorage.setItem('recipeRating', value); // Store rating in local storage (for demo purposes)
        ratingMessage.textContent = `You rated this recipe ${value} out of 5 stars.`;
    }

    function loadRating() {
        const storedRating = localStorage.getItem('recipeRating');
        if (storedRating) {
            highlightStars(storedRating);
            ratingMessage.textContent = `Previous rating: ${storedRating} out of 5 stars.`;
        }
    }

    loadRating();
});
