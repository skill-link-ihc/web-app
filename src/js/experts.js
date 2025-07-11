document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.experts-filters button');
    const cards = document.querySelectorAll('.expert-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle active state on buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-cat');
            // Show/hide cards based on category
            cards.forEach(card => {
                if (category === 'all' || card.classList.contains(category)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
