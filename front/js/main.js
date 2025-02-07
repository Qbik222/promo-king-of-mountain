const userPlace = document.querySelector(".you")
const userTablePlace = userPlace.querySelector(".table__block-place")

let idArr = userTablePlace.textContent.split("")

console.log(idArr)

if(idArr.length === 1){
    userTablePlace.classList.add('_one')
}
if(idArr.length === 2){
    userTablePlace.classList.add('_two')
}
if(idArr.length === 3){
    userTablePlace.classList.add('_three')
}
if(idArr.length === 4){
    userTablePlace.classList.add('_four')
}

if(idArr.length === 5){
    userTablePlace.classList.add('_five')
}

document.querySelector(".open-btn").addEventListener("click", () =>{
    document.querySelector(".box").classList.toggle("shake")
    // setTimeout(() =>{
    //
    // }, 1000)
    document.querySelector(".box__cap").classList.toggle('open')
    setTimeout(() =>{
        document.querySelector(".box__cap-front").classList.toggle("hide")
    }, 450)


})
function startCountdown(endTime) {
    const hoursEls = document.querySelectorAll(".timer__hours-item");
    const minutesEls = document.querySelectorAll(".timer__minutes-item");
    const secondsEls = document.querySelectorAll(".timer__seconds-item");

    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            updateDigits(hoursEls, "00");
            updateDigits(minutesEls, "00");
            updateDigits(secondsEls, "00");
            return;
        }

        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        updateDigits(hoursEls, String(hours).padStart(2, "0"));
        updateDigits(minutesEls, String(minutes).padStart(2, "0"));
        updateDigits(secondsEls, String(seconds).padStart(2, "0"));
    }

    function updateDigits(elements, value) {
        elements[0].textContent = value[0];
        elements[1].textContent = value[1];
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

const now = new Date();
const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).getTime();

startCountdown(endOfDay);


