const buttons = document.querySelectorAll('.btnInfoCard')

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const clickedCard = e.target.closest('.card');

        document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('move');
        });

        clickedCard.classList.add('move');
    });
});
