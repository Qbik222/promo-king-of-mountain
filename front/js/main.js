(function() {
    // const apiURL = 'https://fav-prom.com/api_mountain_king'
    const apiURL = 'https://fav-prom.com/api_vip';

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
        updPopupClose = document.querySelector(".bonus__warning-close"),
        resultPopup = document.querySelector(".result__subtitle-popup"),
        resultPopupBtn = document.querySelector(".result__subtitle-btn"),
        resultPopupBtnClose = document.querySelector(".result__subtitle-popup-close"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.btn-join'),
        mainPage = document.querySelector(".fav-page"),
        resultsTable = document.querySelector(".table");

    let currentLvl = sessionStorage.getItem("currentLvl") ? Number(sessionStorage.getItem("currentLvl")) : 1

    let lvlStatus = checkStatus();
    let betWinCounter = sessionStorage.getItem("betWinCounter") ? Number(sessionStorage.getItem("betWinCounter")) : 0
    let locale = sessionStorage.getItem("locale") ? sessionStorage.getItem("locale") : "uk"


    // if (ukLeng) locale = 'uk';
    // if (enLeng) locale = 'en';

    let debug = true;
    let i18nData = {};
    const translateState = false;
    let userId;
    // userId = 100300268;

    function getData() {
        return Promise.all([
            request('/users?nocache=1'),
        ])
    }


    function init() {
        if (window.store) {
            var state = window.store.getState();
            userId = state.auth.isAuthorized && state.auth.id || '';
            checkUserAuth();
            checkStatus()
            refreshCases(currentLvl)
            getData().then(res =>{
                let users = res[0].sort((a, b) => b.points - a.points);
                // renderUsers(users);
            })
        } else {
            let c = 0;
            var i = setInterval(function () {
                if (c < 50) {
                    if (!!window.g_user_id) {
                        userId = window.g_user_id;
                        checkUserAuth();
                        clearInterval(i);
                    }
                } else {
                    clearInterval(i);
                }
            }, 200);
            checkUserAuth();
            checkStatus()
            refreshCases(currentLvl)
            getData().then(res =>{
                let users = res[0].sort((a, b) => b.points - a.points);
                // renderUsers(users);
            })
        }
    }

    function participate() {
        if (!userId) {
            return;
        }
        const params = {userid: userId};
        request('/user', {
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => {
            participateBtns.forEach(item => item.classList.add('hide'));
            redirectBtns.forEach(item => item.classList.remove('hide'));
        });
    }

    function loadTranslations() {
        return fetch(`${apiURL}/translates/${locale}`).then(res => res.json())
            .then(json => {
                i18nData = json;
                translate();
                var mutationObserver = new MutationObserver(function (mutations) {
                    translate();
                });

            });
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    elem.removeAttribute('data-translate');
                })
            }else{
                console.log("translation work!")
            }
        }
        if (locale === 'en') {
            mainPage.classList.add('en');
        }
        refreshLocalizedClass();
    }

    function translateKey(key, defaultVal) {
        if (!key) {
            return;
        }
        return i18nData[key] || defaultVal || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
    }

    function displayUserInfo(userInfo) {
        const bets = userInfo.bets.slice(0, 10);
        // let bets = [{betDate: new Date(), status: 'undefined'}]
        // refreshLastUpdatedDate(userInfo);
    }

    // function refreshLastUpdatedDate(userInfo) {
    //     const dateContainer = document.querySelector('.result__last-upd');
    //     const span = document.getElementById('lastUpd');
    //     if (userInfo.lastUpdate) {
    //         span.innerHTML = formatDate(userInfo.lastUpdate);
    //         dateContainer.classList.remove('hide');
    //     } else {
    //         dateContainer.classList.add('hide');
    //     }
    // }

    function formatDate(date) {
        const localDate = new Date(date);
        const day = String(localDate.getDate()).padStart(2, '0');
        const month = String(localDate.getMonth() + 1).padStart(2, '0');
        const hours = String(localDate.getHours()).padStart(2, '0');
        const minutes = String(localDate.getMinutes()).padStart(2, '0');
        return `${day}.${month} ${hours}:${minutes}`;
    }


    function refreshLocalizedClass(element, baseCssClass) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }


    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        }).then(res => res.json())
    }

    function checkUserAuth() {
        if (userId) {
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.add('hide');
                getBtn.classList.remove("hide")
            }
            return request(`/favuser/${userId}?nocache=1`)
                .then(res => {
                    if (res.userid) {

                        participateBtns.forEach(item => item.classList.add('hide'));
                        redirectBtns.forEach(item => item.classList.remove('hide'));
                        // displayUserInfo(res);
                    } else {
                        participateBtns.forEach(item => item.classList.remove('hide'));
                        redirectBtns.forEach(item => item.classList.remove('hide'));
                    }
                })
        } else {
            for (let participateBtn of participateBtns) {
                participateBtn.classList.add('hide');
            }
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.remove('hide');
            }
            return Promise.resolve(false);
        }
    }

    const renderUsers = (users) => {
        // resultsTableWrapper.classList.remove('hide');
        // resultsTableOther.classList.remove('hide');
        if (users && users.length) {
            let topUsers = users.slice(0, 2);


            const currentUser = userId && users.find(user => user.userid === userId);
            const currentUserIndex = currentUser && users.indexOf(currentUser);
            populateUsersTable(topUsers, userId, resultsTable, users, currentUser);
            // let otherUsers;

            // if (!currentUserIndex || currentUserIndex < 10) {
            //     otherUsers = users.slice(10, 13);
            // }  else {
            //     otherUsers = users.slice(Math.max(currentUserIndex - 1, 10), currentUserIndex + 2);
            // }
            //
            // if (otherUsers && otherUsers.length) {
            //     populateUsersTable(otherUsers, userId, resultsTableOther, users);
            // }
        }

    }


    function populateUsersTable(users, currentUserId, table, allUsers, currentUser) {
        table.innerHTML = '';
        if (users && users.length) {
            users.forEach((user) => {
                console.log(user)
                const checkCurrentUser = currentUserId && currentUserId === user.userid;
                const additionalUserRow = document.createElement('div');
                additionalUserRow.classList.add('table__row');
                if (checkCurrentUser) {
                    additionalUserRow.classList.add('_you');
                }
                // const place = allUsers.indexOf(user) + 1;
                // const prizePlaceCss = PRIZES_CSS[place - 1];
                // if (prizePlaceCss) {
                //     additionalUserRow.classList.add(prizePlaceCss);
                // }
                // const prizeKey = getPrizeTranslationKey(place)
                // additionalUserRow.innerHTML = `
                //         <div class="tableResults__body-col" ${checkCurrentUser}>${place}</div>
                //         <div class="tableResults__body-col">${user.userid}</div>
                //         <div class="tableResults__body-col">${user.points}</div>
                //         <div class="tableResults__body-col">${prizeKey ? translateKey(prizeKey) : ' - '}</div>
                //     `;
                // table.append(additionalUserRow);
            });
        }
    }

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




    function lvlUp(){
        currentLvl = currentLvl + 1
        sessionStorage.setItem("currentLvl", `${currentLvl}`)
        checkStatus()
        return lvlStatus
    }

    // checkStatus()

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


    function setPopup(btnOpen, btnClose, popup, hide){
        btnOpen.addEventListener("click", () =>{
            popup.classList.remove("hide")
            if(hide){
                btnOpen.parentNode.style.opacity = "0"
            }
        })
        if(btnClose){
            btnClose.addEventListener("click", () =>{
                popup.classList.add("hide")
                if(hide){
                    btnOpen.parentNode.style.opacity = "1"
                }
            })
            document.addEventListener("click", (e) =>{
                if(!popup.contains(e.target) && e.target !== btnOpen){
                    popup.classList.add("hide")
                }
            })
        }

    }

    setPopup(progressPopupBtn, progressPopupClose, progressPopup)
    setPopup(updPopupBtn, updPopupClose, updPopup, true)
    setPopup(resultPopupBtn, resultPopupBtnClose, resultPopup, true)

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


    loadTranslations()
        .then(init);

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
    const darkBtn = document.querySelector(".dark-btn")

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

    darkBtn.addEventListener("click", () =>{
        document.body.classList.toggle("dark")
    })

})()

