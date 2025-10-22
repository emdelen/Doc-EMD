const buttons = document.querySelectorAll('.btnInfoCard')

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const clickedCard = e.target.closest('.card');
        const isActiveCard = clickedCard.classList.contains('move');
        const clickedText = clickedCard.querySelector('.cardInfo');

        document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('move');
        card.querySelector('.cardInfo').classList.remove('textAppear');
        });

        if (!isActiveCard){
        clickedCard.classList.add('move');
        clickedText.classList.add('textAppear');
        }

    });
});
