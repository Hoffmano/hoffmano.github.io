document.addEventListener('click', function (event) {
    if (event.target.matches('.list-group-item-action')) {
        const parentNode = event.target.parentElement;
        event.target.remove();
        console.log(parentNode);
        console.log(parentNode.childElementCount);
        if (parentNode.childElementCount == 0) {
            parentNode.insertAdjacentHTML("afterend", "<p id='habits_concluded'>Parabens, você concluio todos os seus objetivos!</p>");
        }
    }
}, false);