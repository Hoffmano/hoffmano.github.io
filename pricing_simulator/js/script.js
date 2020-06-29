let buttons = [
    b3={
        id:'b3',
        value:100
    },
    b1={
        id: 'b1',
        value: 200
    }
]

function select() {
    const target = event.target
    const id = target.id
    console.log('Clicked on:' + target.id)

    determine_selection(target);
}

function determine_selection(target) {
    if (is_selected(target)) {
        console.log('Target deselected')
        target.classList.remove('selected')
        change_value(target, false)
    } else {
        console.log('Target selected')
        target.classList.toggle('selected');
        change_value(target,true)
    }
}

function change_value(target, select) {
    const value = document.getElementById('value')
    console.log(Object.values(b1))
    
    if (select) {
        value.innerHTML = (Number(value.innerHTML) + 1.52).toFixed(2)
    } else {
        value.innerHTML = (Number(value.innerHTML) - 1.52).toFixed(2)
    }
}

function is_selected(target) {
    return target.classList.contains('selected')
}