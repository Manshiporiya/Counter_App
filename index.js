const add1 = document.getElementById('add')
const zero = document.getElementById('zero')
const sub = document.getElementById('sub')
let count = 0
add1.addEventListener('click', function () {
    if (count < 20) {
        count++
    }
    counter()
})
sub.addEventListener('click', function () {

    if (count > 0) {
        count--
    }
    counter()
})

function counter() {
   console.log(count)
   zero.innerHTML = count
}


