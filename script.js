document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    const query = document.getElementById('search').value.toLowerCase();
    const recipes = document.querySelectorAll('#recipes .recipe');

    recipes.forEach(recipe => {
        const title = recipe.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            recipe.style.display = '';
        } else {
            recipe.style.display = 'none';
        }
    });
});

