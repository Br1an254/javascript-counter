const display = document.getElementById('display')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
const reset = document.getElementById('reset')

let defaultVal = display.innerText = 0


function updateIncrement(e, r) {

    increment.addEventListener('click', () => {
        ++e
        display.innerText = e
    })

    decrement.addEventListener('click', () => {
        --e
        display.innerText = e
    })

    reset.addEventListener('click', () => {
        e = r
        display.innerText = e
    })


}

updateIncrement(defaultVal, 0)