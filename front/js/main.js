const userPlace = document.querySelector(".you"),
    userTablePlace = userPlace.querySelector(".table__block-place"),
    cases = document.querySelectorAll(".bonus__boxes-item"),
    getBtn = document.querySelector(".get-btn"),
    levels = document.querySelectorAll(".bonus__progress-lvl"),
    progressPopup = document.querySelector(".bonus__progress-popup"),
    progressPopupBtn = document.querySelector(".bonus__progress-title-btn"),
    progressPopupClose = document.querySelector(".bonus__progress-popup-close"),
    updPopup = document.querySelector(".bonus__warning"),
    updPopupBtn = document.querySelector(".bonus__upd-btn"),
    resultPopup = document.querySelector(".result__subtitle-popup"),
    resultPopupBtn = document.querySelector(".result__subtitle-btn"),
    resultPopupBtnClose = document.querySelector(".result__subtitle-popup-close");

let currentLvl = sessionStorage.getItem("currentLvl") ? Number(sessionStorage.getItem("currentLvl")) : 1

let lvlStatus = checkStatus();
let betWinCounter = sessionStorage.getItem("betWinCounter") ? Number(sessionStorage.getItem("betWinCounter")) : 0


function checkStatus() {
    betWinCounter < 6 ? document.querySelector(".result__table").classList.add("_lock") : null
    const activeLvl = document.querySelector(".bonus__progress-lvl._active");
    const conditions = {
        bet: {
            1: betWinCounter > 1,
            2: betWinCounter > 3,
            3: betWinCounter > 5,
        },
        lvl: {
            1: currentLvl === 1,
            2: currentLvl === 2,
            3: currentLvl === 3,
        }

    };
    getBtn.classList.add("_lock");
    if (conditions.bet[currentLvl] && conditions.lvl[currentLvl]) {
        lvlStatus = true;
        refreshLvl(currentLvl, lvlStatus);
        getBtn.classList.remove("_lock");

        if (activeLvl) activeLvl.classList.add("_up");

        return lvlStatus;
    }
    lvlStatus = false;
    refreshLvl(currentLvl, lvlStatus)
    return false;
}

function refreshLvl(currentLvl, lvlStatus){
    levels.forEach((lvl, i) =>{
        lvl.classList.remove("_active")
        lvl.classList.remove("_done")
        lvl.classList.remove("_void")
        lvl.classList.remove("_up")
        if(++i === currentLvl) {
            lvl.classList.add("_active")

            if (lvlStatus === true){
                lvl.classList.add("_up")
            }
            if(currentLvl === 1 && betWinCounter <= 0 && lvlStatus === false){
                lvl.classList.add("_void")
            }
            if(currentLvl === 1 && betWinCounter <= 0 && lvlStatus === true){
                lvl.classList.remove("_void")
            }

            if(currentLvl === 2 && betWinCounter <= 2 && lvlStatus === false ){
                lvl.classList.add("_void")
            }
            if(currentLvl === 2 && betWinCounter <= 2 && lvlStatus === true ){
                lvl.classList.remove("_void")
            }

            if(currentLvl === 3 && betWinCounter <= 4 && lvlStatus === false){
                lvl.classList.add("_void")
            }
            if(currentLvl === 3 && betWinCounter <= 4 && lvlStatus === true){
                lvl.classList.remove("_void")
            }

        }else{
            lvl.classList.remove("_active")
        }
        // console.log(i < currentLvl, i , currentLvl, lvl)
        i < currentLvl ? lvl.classList.add("_done") : null
    })

}

function refreshCases(currentLvl) {
    cases.forEach((box, i) => {
        box.classList.remove("_active", "_left", "_right", "_lock");
    });

    let activeIndex = currentLvl - 1;
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

function lvlUp(){
    currentLvl = currentLvl + 1
    sessionStorage.setItem("currentLvl", `${currentLvl}`)
    checkStatus()
    return lvlStatus
}

checkStatus()

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
    getBtn.classList.add("_lock")
    setTimeout(() =>{
        box.querySelector(".box__cap-front").classList.add("hide")
    }, 300)
    setTimeout(() =>{
        box.classList.add("_show")
    }, 450)
    setTimeout(() =>{
        lvlUp()
        refreshCases(currentLvl)
        checkStatus()
    }, 4000)
}




getBtn.addEventListener('click', () =>{
    cases.forEach((box, i) =>{
        if(box.classList.contains("_active")){
            openCaseAnim(box)
            // getBtn.classList.add("_lock")
            // checkStatus()
        }

    })

})


function setPopup(btnOpen, btnClose, popup){
    btnOpen.addEventListener("click", () =>{
        popup.classList.remove("hide")
    })
    if(btnClose){
        btnClose.addEventListener("click", () =>{
            popup.classList.add("hide")
        })
        document.addEventListener("click", (e) =>{
            if(!popup.contains(e.target) && e.target !== btnOpen){
                popup.classList.add("hide")
            }
        })
    }

}

setPopup(progressPopupBtn, progressPopupClose, progressPopup)
setPopup(updPopupBtn, null, updPopup)
setPopup(resultPopupBtn, resultPopupBtnClose, resultPopup)

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
const betWin = document.querySelector(".bet-win")
const betClear = document.querySelector(".bet-clear")
const btnLock = document.querySelector(".btn-lock")

betWin.textContent = `win bet: ${betWinCounter}`

betWin.addEventListener("click", () =>{
    betWinCounter = sessionStorage.getItem("betWinCounter") ? Number(sessionStorage.getItem("betWinCounter")) : 0
    betWinCounter = betWinCounter + 1
    sessionStorage.setItem("betWinCounter", betWinCounter)
    betWin.textContent = `win bet: ${betWinCounter}`
    // refreshLvl(currentLvl)
    checkStatus()


})

betClear.addEventListener("click", () =>{
    sessionStorage.removeItem("betWinCounter")
    betWinCounter = 0
    betWin.textContent = `win bet: 0`
    checkStatus()
    sessionStorage.setItem("currentLvl", "1")
    window.location.reload()
    // refreshLvl(currentLvl, lvlStatus)

})

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

btnLock.addEventListener("click", () =>{
    document.querySelector(".result__table").classList.toggle("_lock")
})