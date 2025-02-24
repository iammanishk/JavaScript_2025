const showTimer = document.querySelector('#showTimer');

counter = 10;

let intervalID = setInterval(() => {
    counter--;
    showTimer.innerHTML = counter;

    if(counter === 0){
        clearInterval(intervalID);
        alert('Time is up! Game Over!');
    }
}, 1000)