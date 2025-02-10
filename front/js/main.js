const userPlace = document.querySelector(".you"),
      userTablePlace = userPlace.querySelector(".table__block-place"),
      cases = document.querySelectorAll(".bonus__boxes-item"),
      getBtn = document.querySelector(".get-btn"),
      levels = document.querySelectorAll(".bonus__progress-lvl"),
      progressPopup = document.querySelector(".bonus__progress-popup"),
      progressPopupBtn = document.querySelector(".bonus__progress-title-btn"),
      progressPopupClose = document.querySelector(".bonus__progress-popup-close"),
      updPopup = document.querySelector(".bonus__upd-popup"),
      updPopupBtn = document.querySelector(".bonus__upd-btn"),
      updPopupClose = document.querySelector(".bonus__upd-popup-close");

let currentLvl = sessionStorage.getItem("currentLvl") ? Number(sessionStorage.getItem("currentLvl")) : 1

        function refreshLvl(currentLvl){
    cases.forEach((box, i) =>{
        if(++i === currentLvl) {
            box.classList.add("_active")
            setOpenCase(getBtn, box.querySelector(".box"))
        }

        i > currentLvl ? box.classList.add("_lock") : null
    })

    levels.forEach((box, i) =>{
        if(++i === currentLvl) {
            box.classList.add("_active")
            setOpenCase(getBtn, box.querySelector(".box"))
        }

        i < currentLvl ? box.classList.add("_done") : null
    })
}

refreshLvl(currentLvl)



let idArr = userTablePlace.textContent.split("")

// console.log(idArr)

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

function setOpenCase (btn, box){
    btn.addEventListener("click", () =>{
        box.classList.add("shake")
        box.querySelector(".box__cap").classList.add("open")
        setTimeout(() =>{
            box.querySelector(".box__cap-front").classList.add("hide")
        }, 300)
        setTimeout(() =>{
            box.classList.add("_show")
        }, 450)

    })
}



function setPopup(btnOpen, btnClose, popup){
    btnOpen.addEventListener("click", () =>{
        popup.classList.remove("hide")
    })
    btnClose.addEventListener("click", () =>{
        popup.classList.add("hide")
    })
    document.addEventListener("click", (e) =>{
        if(!popup.contains(e.target) && e.target !== btnOpen){
            popup.classList.add("hide")
        }
    })
}

setPopup(progressPopupBtn, progressPopupClose, progressPopup)
setPopup(updPopupBtn, updPopupClose, updPopup)

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


document.querySelector(".menu-btn").addEventListener("click", () =>{
    document.querySelector(".menu-test").classList.toggle("hidden")
})
document.querySelector(".btn-lvl").addEventListener("click", () =>{
    document.querySelector(".lvl-menu").classList.toggle("hidden")
})

const lvl1 = document.querySelector(".lvl-1")
const lvl2 = document.querySelector(".lvl-2")
const lvl3 = document.querySelector(".lvl-3")

lvl1.addEventListener("click", () =>{
    sessionStorage.setItem("currentLvl", "1")
    window.location.reload()
})
lvl2.addEventListener("click", () =>{
    sessionStorage.setItem("currentLvl", "2")
    window.location.reload()
})
lvl3.addEventListener("click", () =>{
    sessionStorage.setItem("currentLvl", "3")
    window.location.reload()
})

