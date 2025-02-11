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

let lvlStatus = false

function refreshLvl(currentLvl){
    levels.forEach((lvl, i) =>{
        lvl.classList.remove("_active")
        lvl.classList.remove("_done")
        if(++i === currentLvl) {
            lvl.classList.add("_active")
        }else{
            lvl.classList.remove("_active")
        }
        console.log(i < currentLvl, i , currentLvl, lvl)
        i < currentLvl ? lvl.classList.add("_done") : null
    })

}

// function refreshCases(currentLvl) {
//     cases.forEach((box, i) => {
//         box.classList.remove("_active", "_left", "_right")
//         if (++i === currentLvl) {
//             box.classList.add("_active");
//         } else {
//             box.classList.remove("_active");
//         }
//
//
//         i !== currentLvl ? box.classList.add("_lock") : box.classList.remove("_lock");
//
//         currentLvl > cases.length ? cases[cases.length - 1].classList.remove("_lock") : null;
//         currentLvl > cases.length ? cases[cases.length - 1].classList.add("_active") : null;
//     });
//
// }


function refreshCases(currentLvl) {
    cases.forEach((box, i) => {
        box.classList.remove("_active", "_left", "_right", "_lock");
    });

    let activeIndex = currentLvl - 1; // Перетворюємо рівень у індекс масиву
    if (activeIndex >= cases.length) {
        activeIndex = cases.length - 1;
    }

    let prevIndex = activeIndex - 1 < 0 ? cases.length - 1 : activeIndex - 1;
    let nextIndex = activeIndex + 1 >= cases.length ? 0 : activeIndex + 1;

    cases[activeIndex].classList.add("_active");
    cases[prevIndex].classList.add("_left");
    cases[nextIndex].classList.add("_right");

    cases.forEach((box, i) => {
        if (i !== activeIndex) {
            box.classList.add("_lock");
        }
    });
}


refreshCases(currentLvl)
refreshLvl(currentLvl)

function lvlUp(){
    currentLvl = currentLvl + 1
    sessionStorage.setItem("currentLvl", `${currentLvl}`)
    refreshLvl(currentLvl)
}

function checkStatus(){
    if(lvlStatus){
        getBtn.classList.remove("_lock")
        document.querySelector(".bonus__progress-lvl._active").classList.add("_up")
    }
}
checkStatus()
// getBtn.addEventListener("click", () =>{
//     if(lvlStatus){
//         lvlUp()
//     }
// })

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

function openCaseAnim(box){
    box.classList.add("shake")
    box.querySelector(".box__cap").classList.add("open")
    setTimeout(() =>{
        box.querySelector(".box__cap-front").classList.add("hide")
    }, 300)
    setTimeout(() =>{
        box.classList.add("_show")
    }, 450)
    setTimeout(() =>{
        lvlUp()
        refreshCases(currentLvl)
    }, 2000)
}




getBtn.addEventListener('click', () =>{
    cases.forEach((box, i) =>{
        if(box.classList.contains("_active")){
            openCaseAnim(box)
            getBtn.classList.add("_lock")
        }

    })

})


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
const lvlUpBtn = document.querySelector(".lvl-up")

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

lvlUpBtn.addEventListener("click", () =>{
    lvlStatus = !lvlStatus
    checkStatus()
    lvlStatus = !lvlStatus

})

