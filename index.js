document.addEventListener('click', function (event) {
    console.log(event.target);

    if (event.target.matches('.list-group-item-action')) {
        event.target.remove();
    }
}, false);