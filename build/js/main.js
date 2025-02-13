// (function() {
//     // const apiURL = 'https://fav-prom.com/api_mountain_king'
//     const apiURL = 'https://fav-prom.com/api_vip';
//
//     const userPlace = document.querySelector(".you"),
//         userTablePlace = userPlace.querySelector(".table__block-place"),
//         cases = document.querySelectorAll(".bonus__boxes-item"),
//         getBtn = document.querySelector(".get-btn"),
//         levels = document.querySelectorAll(".bonus__progress-lvl"),
//         progressPopup = document.querySelector(".bonus__progress-popup"),
//         progressPopupBtn = document.querySelector(".bonus__progress-title-btn"),
//         progressPopupClose = document.querySelector(".bonus__progress-popup-close"),
//         updPopup = document.querySelector(".bonus__warning"),
//         updPopupBtn = document.querySelector(".bonus__upd-btn"),
//         updPopupClose = document.querySelector(".bonus__warning-close"),
//         resultPopup = document.querySelector(".result__subtitle-popup"),
//         resultPopupBtn = document.querySelector(".result__subtitle-btn"),
//         resultPopupBtnClose = document.querySelector(".result__subtitle-popup-close"),
//         unauthMsgs = document.querySelectorAll('.unauth-msg'),
//         participateBtns = document.querySelectorAll('.part-btn'),
//         redirectBtns = document.querySelectorAll('.btn-join'),
//         mainPage = document.querySelector(".fav-page"),
//         resultsTable = document.querySelector(".table");
//
//     let currentLvl = sessionStorage.getItem("currentLvl") ? Number(sessionStorage.getItem("currentLvl")) : 1
//
//     let lvlStatus = checkStatus();
//     let betWinCounter = sessionStorage.getItem("betWinCounter") ? Number(sessionStorage.getItem("betWinCounter")) : 0
//     let locale = sessionStorage.getItem("locale") ? sessionStorage.getItem("locale") : "uk"
//
//
//     // if (ukLeng) locale = 'uk';
//     // if (enLeng) locale = 'en';
//
//     let debug = true;
//     let i18nData = {};
//     const translateState = false;
//     let userId;
//     // userId = 100300268;
//
//     function getData() {
//         return Promise.all([
//             request('/users?nocache=1'),
//         ])
//     }
//
//
//     function init() {
//         if (window.store) {
//             var state = window.store.getState();
//             userId = state.auth.isAuthorized && state.auth.id || '';
//             checkUserAuth();
//             checkStatus()
//             refreshCases(currentLvl)
//             getData().then(res =>{
//                 let users = res[0].sort((a, b) => b.points - a.points);
//                 // renderUsers(users);
//             })
//         } else {
//             let c = 0;
//             var i = setInterval(function () {
//                 if (c < 50) {
//                     if (!!window.g_user_id) {
//                         userId = window.g_user_id;
//                         checkUserAuth();
//                         clearInterval(i);
//                     }
//                 } else {
//                     clearInterval(i);
//                 }
//             }, 200);
//             checkUserAuth();
//             checkStatus()
//             refreshCases(currentLvl)
//             getData().then(res =>{
//                 let users = res[0].sort((a, b) => b.points - a.points);
//                 // renderUsers(users);
//             })
//         }
//     }
//
//     function participate() {
//         if (!userId) {
//             return;
//         }
//         const params = {userid: userId};
//         request('/user', {
//             method: 'POST',
//             body: JSON.stringify(params)
//         }).then(res => {
//             participateBtns.forEach(item => item.classList.add('hide'));
//             redirectBtns.forEach(item => item.classList.remove('hide'));
//         });
//     }
//
//     function loadTranslations() {
//         return fetch(`${apiURL}/translates/${locale}`).then(res => res.json())
//             .then(json => {
//                 i18nData = json;
//                 translate();
//                 var mutationObserver = new MutationObserver(function (mutations) {
//                     translate();
//                 });
//
//             });
//     }
//
//     function translate() {
//         const elems = document.querySelectorAll('[data-translate]')
//         if (elems && elems.length) {
//             if(translateState){
//                 elems.forEach(elem => {
//                     const key = elem.getAttribute('data-translate');
//                     elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
//                     elem.removeAttribute('data-translate');
//                 })
//             }else{
//                 console.log("translation work!")
//             }
//         }
//         if (locale === 'en') {
//             mainPage.classList.add('en');
//         }
//         refreshLocalizedClass();
//     }
//
//     function translateKey(key, defaultVal) {
//         if (!key) {
//             return;
//         }
//         return i18nData[key] || defaultVal || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
//     }
//
//     function displayUserInfo(userInfo) {
//         const bets = userInfo.bets.slice(0, 10);
//         // let bets = [{betDate: new Date(), status: 'undefined'}]
//         // refreshLastUpdatedDate(userInfo);
//     }
//
//     // function refreshLastUpdatedDate(userInfo) {
//     //     const dateContainer = document.querySelector('.result__last-upd');
//     //     const span = document.getElementById('lastUpd');
//     //     if (userInfo.lastUpdate) {
//     //         span.innerHTML = formatDate(userInfo.lastUpdate);
//     //         dateContainer.classList.remove('hide');
//     //     } else {
//     //         dateContainer.classList.add('hide');
//     //     }
//     // }
//
//     function formatDate(date) {
//         const localDate = new Date(date);
//         const day = String(localDate.getDate()).padStart(2, '0');
//         const month = String(localDate.getMonth() + 1).padStart(2, '0');
//         const hours = String(localDate.getHours()).padStart(2, '0');
//         const minutes = String(localDate.getMinutes()).padStart(2, '0');
//         return `${day}.${month} ${hours}:${minutes}`;
//     }
//
//
//     function refreshLocalizedClass(element, baseCssClass) {
//         if (!element) {
//             return;
//         }
//         for (const lang of ['uk', 'en']) {
//             element.classList.remove(baseCssClass + lang);
//         }
//         element.classList.add(baseCssClass + locale);
//     }
//
//
//     const request = function (link, extraOptions) {
//         return fetch(apiURL + link, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             ...(extraOptions || {})
//         }).then(res => res.json())
//     }
//
//     function checkUserAuth() {
//         if (userId) {
//             for (const unauthMes of unauthMsgs) {
//                 unauthMes.classList.add('hide');
//                 getBtn.classList.remove("hide")
//             }
//             return request(`/favuser/${userId}?nocache=1`)
//                 .then(res => {
//                     if (res.userid) {
//
//                         participateBtns.forEach(item => item.classList.add('hide'));
//                         redirectBtns.forEach(item => item.classList.remove('hide'));
//                         // displayUserInfo(res);
//                     } else {
//                         participateBtns.forEach(item => item.classList.remove('hide'));
//                         redirectBtns.forEach(item => item.classList.remove('hide'));
//                     }
//                 })
//         } else {
//             for (let participateBtn of participateBtns) {
//                 participateBtn.classList.add('hide');
//             }
//             for (const unauthMes of unauthMsgs) {
//                 unauthMes.classList.remove('hide');
//             }
//             return Promise.resolve(false);
//         }
//     }
//
//     const renderUsers = (users) => {
//         // resultsTableWrapper.classList.remove('hide');
//         // resultsTableOther.classList.remove('hide');
//         if (users && users.length) {
//             let topUsers = users.slice(0, 2);
//
//
//             const currentUser = userId && users.find(user => user.userid === userId);
//             const currentUserIndex = currentUser && users.indexOf(currentUser);
//             populateUsersTable(topUsers, userId, resultsTable, users, currentUser);
//             // let otherUsers;
//
//             // if (!currentUserIndex || currentUserIndex < 10) {
//             //     otherUsers = users.slice(10, 13);
//             // }  else {
//             //     otherUsers = users.slice(Math.max(currentUserIndex - 1, 10), currentUserIndex + 2);
//             // }
//             //
//             // if (otherUsers && otherUsers.length) {
//             //     populateUsersTable(otherUsers, userId, resultsTableOther, users);
//             // }
//         }
//
//     }
//
//
//     function populateUsersTable(users, currentUserId, table, allUsers, currentUser) {
//         table.innerHTML = '';
//         if (users && users.length) {
//             users.forEach((user) => {
//                 console.log(user)
//                 const checkCurrentUser = currentUserId && currentUserId === user.userid;
//                 const additionalUserRow = document.createElement('div');
//                 additionalUserRow.classList.add('table__row');
//                 if (checkCurrentUser) {
//                     additionalUserRow.classList.add('_you');
//                 }
//                 // const place = allUsers.indexOf(user) + 1;
//                 // const prizePlaceCss = PRIZES_CSS[place - 1];
//                 // if (prizePlaceCss) {
//                 //     additionalUserRow.classList.add(prizePlaceCss);
//                 // }
//                 // const prizeKey = getPrizeTranslationKey(place)
//                 // additionalUserRow.innerHTML = `
//                 //         <div class="tableResults__body-col" ${checkCurrentUser}>${place}</div>
//                 //         <div class="tableResults__body-col">${user.userid}</div>
//                 //         <div class="tableResults__body-col">${user.points}</div>
//                 //         <div class="tableResults__body-col">${prizeKey ? translateKey(prizeKey) : ' - '}</div>
//                 //     `;
//                 // table.append(additionalUserRow);
//             });
//         }
//     }
//
//     function checkStatus() {
//         betWinCounter < 6 ? document.querySelector(".result__table").classList.add("_lock") : null
//         const activeLvl = document.querySelector(".bonus__progress-lvl._active");
//         const conditions = {
//             bet: {
//                 1: betWinCounter > 1,
//                 2: betWinCounter > 3,
//                 3: betWinCounter > 5,
//             },
//             lvl: {
//                 1: currentLvl === 1,
//                 2: currentLvl === 2,
//                 3: currentLvl === 3,
//             }
//
//         };
//         getBtn.classList.add("_lock");
//         if (conditions.bet[currentLvl] && conditions.lvl[currentLvl]) {
//             lvlStatus = true;
//             refreshLvl(currentLvl, lvlStatus);
//             getBtn.classList.remove("_lock");
//
//             if (activeLvl) activeLvl.classList.add("_up");
//
//             return lvlStatus;
//         }
//         lvlStatus = false;
//         refreshLvl(currentLvl, lvlStatus)
//         return false;
//     }
//
//     function refreshLvl(currentLvl, lvlStatus){
//         levels.forEach((lvl, i) =>{
//             lvl.classList.remove("_active")
//             lvl.classList.remove("_done")
//             lvl.classList.remove("_void")
//             lvl.classList.remove("_up")
//             if(++i === currentLvl) {
//                 lvl.classList.add("_active")
//
//                 if (lvlStatus === true){
//                     lvl.classList.add("_up")
//                 }
//                 if(currentLvl === 1 && betWinCounter <= 0 && lvlStatus === false){
//                     lvl.classList.add("_void")
//                 }
//                 if(currentLvl === 1 && betWinCounter <= 0 && lvlStatus === true){
//                     lvl.classList.remove("_void")
//                 }
//
//                 if(currentLvl === 2 && betWinCounter <= 2 && lvlStatus === false ){
//                     lvl.classList.add("_void")
//                 }
//                 if(currentLvl === 2 && betWinCounter <= 2 && lvlStatus === true ){
//                     lvl.classList.remove("_void")
//                 }
//
//                 if(currentLvl === 3 && betWinCounter <= 4 && lvlStatus === false){
//                     lvl.classList.add("_void")
//                 }
//                 if(currentLvl === 3 && betWinCounter <= 4 && lvlStatus === true){
//                     lvl.classList.remove("_void")
//                 }
//
//             }else{
//                 lvl.classList.remove("_active")
//             }
//             // console.log(i < currentLvl, i , currentLvl, lvl)
//             i < currentLvl ? lvl.classList.add("_done") : null
//         })
//
//     }
//
//     function refreshCases(currentLvl) {
//         cases.forEach((box, i) => {
//             box.classList.remove("_active", "_left", "_right", "_lock");
//         });
//
//         let activeIndex = currentLvl - 1;
//         if (activeIndex >= cases.length) {
//             activeIndex = cases.length - 1;
//         }
//
//         let prevIndex = activeIndex - 1 < 0 ? cases.length - 1 : activeIndex - 1;
//         let nextIndex = activeIndex + 1 >= cases.length ? 0 : activeIndex + 1;
//
//         cases[activeIndex].classList.add("_active");
//         cases[prevIndex].classList.add("_left");
//         cases[nextIndex].classList.add("_right");
//
//         cases.forEach((box, i) => {
//             if (i !== activeIndex) {
//                 box.classList.add("_lock");
//             }
//         });
//     }
//
//
//
//
//     function lvlUp(){
//         currentLvl = currentLvl + 1
//         sessionStorage.setItem("currentLvl", `${currentLvl}`)
//         checkStatus()
//         return lvlStatus
//     }
//
//     // checkStatus()
//
//     let idArr = userTablePlace.textContent.split("")
//
// // console.log(idArr)
//
//     if(idArr.length === 1){
//         userTablePlace.classList.add('_one')
//     }
//     if(idArr.length === 2){
//         userTablePlace.classList.add('_two')
//     }
//     if(idArr.length === 3){
//         userTablePlace.classList.add('_three')
//     }
//     if(idArr.length === 4){
//         userTablePlace.classList.add('_four')
//     }
//
//     if(idArr.length === 5){
//         userTablePlace.classList.add('_five')
//     }
//
//     function openCaseAnim(box){
//         box.classList.add("shake")
//         box.querySelector(".box__cap").classList.add("open")
//         getBtn.classList.add("_lock")
//         setTimeout(() =>{
//             box.querySelector(".box__cap-front").classList.add("hide")
//         }, 300)
//         setTimeout(() =>{
//             box.classList.add("_show")
//         }, 450)
//         setTimeout(() =>{
//             lvlUp()
//             refreshCases(currentLvl)
//             checkStatus()
//         }, 4000)
//     }
//
//
//
//
//     getBtn.addEventListener('click', () =>{
//         cases.forEach((box, i) =>{
//             if(box.classList.contains("_active")){
//                 openCaseAnim(box)
//                 // getBtn.classList.add("_lock")
//                 // checkStatus()
//             }
//
//         })
//
//     })
//
//
//     function setPopup(btnOpen, btnClose, popup, hide){
//         btnOpen.addEventListener("click", () =>{
//             popup.classList.remove("hide")
//             if(hide){
//                 btnOpen.parentNode.style.opacity = "0"
//             }
//         })
//         if(btnClose){
//             btnClose.addEventListener("click", () =>{
//                 popup.classList.add("hide")
//                 if(hide){
//                     btnOpen.parentNode.style.opacity = "1"
//                 }
//             })
//             document.addEventListener("click", (e) =>{
//                 if(!popup.contains(e.target) && e.target !== btnOpen){
//                     popup.classList.add("hide")
//                     if(hide){
//                         btnOpen.parentNode.style.opacity = "1"
//                     }
//                 }
//             })
//         }
//
//     }
//
//     setPopup(progressPopupBtn, progressPopupClose, progressPopup)
//     setPopup(updPopupBtn, updPopupClose, updPopup, true)
//     setPopup(resultPopupBtn, resultPopupBtnClose, resultPopup, true)
//
//     function startCountdown(endTime) {
//         const hoursEls = document.querySelectorAll(".timer__hours-item");
//         const minutesEls = document.querySelectorAll(".timer__minutes-item");
//         const secondsEls = document.querySelectorAll(".timer__seconds-item");
//
//         function updateTimer() {
//             const now = new Date().getTime();
//             const timeLeft = endTime - now;
//
//             if (timeLeft <= 0) {
//                 clearInterval(timerInterval);
//                 updateDigits(hoursEls, "00");
//                 updateDigits(minutesEls, "00");
//                 updateDigits(secondsEls, "00");
//                 return;
//             }
//
//             const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
//             const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
//             const seconds = Math.floor((timeLeft / 1000) % 60);
//
//             updateDigits(hoursEls, String(hours).padStart(2, "0"));
//             updateDigits(minutesEls, String(minutes).padStart(2, "0"));
//             updateDigits(secondsEls, String(seconds).padStart(2, "0"));
//         }
//
//         function updateDigits(elements, value) {
//             elements[0].textContent = value[0];
//             elements[1].textContent = value[1];
//         }
//
//         updateTimer();
//         const timerInterval = setInterval(updateTimer, 1000);
//     }
//
//     const now = new Date();
//     const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).getTime();
//
//     startCountdown(endOfDay);
//
//
//     loadTranslations()
//         .then(init);
//
//     document.querySelector(".menu-btn").addEventListener("click", () =>{
//         document.querySelector(".menu-test").classList.toggle("hidden")
//     })
//     document.querySelector(".btn-lvl").addEventListener("click", () =>{
//         document.querySelector(".lvl-menu").classList.toggle("hidden")
//     })
//
//     const lvl1 = document.querySelector(".lvl-1")
//     const lvl2 = document.querySelector(".lvl-2")
//     const lvl3 = document.querySelector(".lvl-3")
//     const lvlUpBtn = document.querySelector(".lvl-up")
//     const betWin = document.querySelector(".bet-win")
//     const betClear = document.querySelector(".bet-clear")
//     const btnLock = document.querySelector(".btn-lock")
//     const darkBtn = document.querySelector(".dark-btn")
//
//     betWin.textContent = `win bet: ${betWinCounter}`
//
//     betWin.addEventListener("click", () =>{
//         betWinCounter = sessionStorage.getItem("betWinCounter") ? Number(sessionStorage.getItem("betWinCounter")) : 0
//         betWinCounter = betWinCounter + 1
//         sessionStorage.setItem("betWinCounter", betWinCounter)
//         betWin.textContent = `win bet: ${betWinCounter}`
//         // refreshLvl(currentLvl)
//         checkStatus()
//
//
//     })
//
//     betClear.addEventListener("click", () =>{
//         sessionStorage.removeItem("betWinCounter")
//         betWinCounter = 0
//         betWin.textContent = `win bet: 0`
//         checkStatus()
//         sessionStorage.setItem("currentLvl", "1")
//         window.location.reload()
//         // refreshLvl(currentLvl, lvlStatus)
//
//     })
//
//     lvl1.addEventListener("click", () =>{
//         sessionStorage.setItem("currentLvl", "1")
//         window.location.reload()
//     })
//     lvl2.addEventListener("click", () =>{
//         sessionStorage.setItem("currentLvl", "2")
//         window.location.reload()
//     })
//     lvl3.addEventListener("click", () =>{
//         sessionStorage.setItem("currentLvl", "3")
//         window.location.reload()
//     })
//
//     lvlUpBtn.addEventListener("click", () =>{
//         lvlStatus = !lvlStatus
//         checkStatus()
//         lvlStatus = !lvlStatus
//
//     })
//
//     btnLock.addEventListener("click", () =>{
//         document.querySelector(".result__table").classList.toggle("_lock")
//     })
//
//     darkBtn.addEventListener("click", () =>{
//         document.body.classList.toggle("dark")
//     })
//
// })()
//
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKGZ1bmN0aW9uKCkge1xuLy8gICAgIC8vIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfbW91bnRhaW5fa2luZydcbi8vICAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3ZpcCc7XG4vL1xuLy8gICAgIGNvbnN0IHVzZXJQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueW91XCIpLFxuLy8gICAgICAgICB1c2VyVGFibGVQbGFjZSA9IHVzZXJQbGFjZS5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19ibG9jay1wbGFjZVwiKSxcbi8vICAgICAgICAgY2FzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvbnVzX19ib3hlcy1pdGVtXCIpLFxuLy8gICAgICAgICBnZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdldC1idG5cIiksXG4vLyAgICAgICAgIGxldmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9udXNfX3Byb2dyZXNzLWx2bFwiKSxcbi8vICAgICAgICAgcHJvZ3Jlc3NQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXBvcHVwXCIpLFxuLy8gICAgICAgICBwcm9ncmVzc1BvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3MtdGl0bGUtYnRuXCIpLFxuLy8gICAgICAgICBwcm9ncmVzc1BvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy1wb3B1cC1jbG9zZVwiKSxcbi8vICAgICAgICAgdXBkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX193YXJuaW5nXCIpLFxuLy8gICAgICAgICB1cGRQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3VwZC1idG5cIiksXG4vLyAgICAgICAgIHVwZFBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX193YXJuaW5nLWNsb3NlXCIpLFxuLy8gICAgICAgICByZXN1bHRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19zdWJ0aXRsZS1wb3B1cFwiKSxcbi8vICAgICAgICAgcmVzdWx0UG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fc3VidGl0bGUtYnRuXCIpLFxuLy8gICAgICAgICByZXN1bHRQb3B1cEJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3N1YnRpdGxlLXBvcHVwLWNsb3NlXCIpLFxuLy8gICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbi8vICAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4vLyAgICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuLy8gICAgICAgICBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4vLyAgICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVcIik7XG4vL1xuLy8gICAgIGxldCBjdXJyZW50THZsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMdmxcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMdmxcIikpIDogMVxuLy9cbi8vICAgICBsZXQgbHZsU3RhdHVzID0gY2hlY2tTdGF0dXMoKTtcbi8vICAgICBsZXQgYmV0V2luQ291bnRlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpKSA6IDBcbi8vICAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgOiBcInVrXCJcbi8vXG4vL1xuLy8gICAgIC8vIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4vLyAgICAgLy8gaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcbi8vXG4vLyAgICAgbGV0IGRlYnVnID0gdHJ1ZTtcbi8vICAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbi8vICAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IGZhbHNlO1xuLy8gICAgIGxldCB1c2VySWQ7XG4vLyAgICAgLy8gdXNlcklkID0gMTAwMzAwMjY4O1xuLy9cbi8vICAgICBmdW5jdGlvbiBnZXREYXRhKCkge1xuLy8gICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuLy8gICAgICAgICAgICAgcmVxdWVzdCgnL3VzZXJzP25vY2FjaGU9MScpLFxuLy8gICAgICAgICBdKVxuLy8gICAgIH1cbi8vXG4vL1xuLy8gICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbi8vICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuLy8gICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbi8vICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbi8vICAgICAgICAgICAgIGNoZWNrU3RhdHVzKClcbi8vICAgICAgICAgICAgIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKVxuLy8gICAgICAgICAgICAgZ2V0RGF0YSgpLnRoZW4ocmVzID0+e1xuLy8gICAgICAgICAgICAgICAgIGxldCB1c2VycyA9IHJlc1swXS5zb3J0KChhLCBiKSA9PiBiLnBvaW50cyAtIGEucG9pbnRzKTtcbi8vICAgICAgICAgICAgICAgICAvLyByZW5kZXJVc2Vycyh1c2Vycyk7XG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgbGV0IGMgPSAwO1xuLy8gICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSwgMjAwKTtcbi8vICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbi8vICAgICAgICAgICAgIGNoZWNrU3RhdHVzKClcbi8vICAgICAgICAgICAgIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKVxuLy8gICAgICAgICAgICAgZ2V0RGF0YSgpLnRoZW4ocmVzID0+e1xuLy8gICAgICAgICAgICAgICAgIGxldCB1c2VycyA9IHJlc1swXS5zb3J0KChhLCBiKSA9PiBiLnBvaW50cyAtIGEucG9pbnRzKTtcbi8vICAgICAgICAgICAgICAgICAvLyByZW5kZXJVc2Vycyh1c2Vycyk7XG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy9cbi8vICAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbi8vICAgICAgICAgaWYgKCF1c2VySWQpIHtcbi8vICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuLy8gICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbi8vICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuLy8gICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4vLyAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbi8vICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4vLyAgICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbi8vICAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuLy8gICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbi8vICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4vLyAgICAgICAgICAgICAgICAgfSk7XG4vL1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy9cbi8vICAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4vLyAgICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4vLyAgICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbi8vICAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbi8vICAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4vLyAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29yayFcIilcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4vLyAgICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbCkge1xuLy8gICAgICAgICBpZiAoIWtleSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWwgfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuLy8gICAgIH1cbi8vXG4vLyAgICAgZnVuY3Rpb24gZGlzcGxheVVzZXJJbmZvKHVzZXJJbmZvKSB7XG4vLyAgICAgICAgIGNvbnN0IGJldHMgPSB1c2VySW5mby5iZXRzLnNsaWNlKDAsIDEwKTtcbi8vICAgICAgICAgLy8gbGV0IGJldHMgPSBbe2JldERhdGU6IG5ldyBEYXRlKCksIHN0YXR1czogJ3VuZGVmaW5lZCd9XVxuLy8gICAgICAgICAvLyByZWZyZXNoTGFzdFVwZGF0ZWREYXRlKHVzZXJJbmZvKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIC8vIGZ1bmN0aW9uIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pIHtcbi8vICAgICAvLyAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2xhc3QtdXBkJyk7XG4vLyAgICAgLy8gICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdFVwZCcpO1xuLy8gICAgIC8vICAgICBpZiAodXNlckluZm8ubGFzdFVwZGF0ZSkge1xuLy8gICAgIC8vICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmb3JtYXREYXRlKHVzZXJJbmZvLmxhc3RVcGRhdGUpO1xuLy8gICAgIC8vICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4vLyAgICAgLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgLy8gICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vIH1cbi8vXG4vLyAgICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4vLyAgICAgICAgIGNvbnN0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuLy8gICAgICAgICBjb25zdCBkYXkgPSBTdHJpbmcobG9jYWxEYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbi8vICAgICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcobG9jYWxEYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuLy8gICAgICAgICBjb25zdCBob3VycyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbi8vICAgICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuLy8gICAgICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRofSAke2hvdXJzfToke21pbnV0ZXN9YDtcbi8vICAgICB9XG4vL1xuLy9cbi8vICAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4vLyAgICAgICAgIGlmICghZWxlbWVudCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbi8vICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbi8vICAgICB9XG4vL1xuLy9cbi8vICAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuLy8gICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuLy8gICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4vLyAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4vLyAgICAgfVxuLy9cbi8vICAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuLy8gICAgICAgICBpZiAodXNlcklkKSB7XG4vLyAgICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4vLyAgICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbi8vICAgICAgICAgICAgICAgICBnZXRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbi8vICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5VXNlckluZm8ocmVzKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4vLyAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuLy8gICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vXG4vLyAgICAgY29uc3QgcmVuZGVyVXNlcnMgPSAodXNlcnMpID0+IHtcbi8vICAgICAgICAgLy8gcmVzdWx0c1RhYmxlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4vLyAgICAgICAgIC8vIHJlc3VsdHNUYWJsZU90aGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbi8vICAgICAgICAgaWYgKHVzZXJzICYmIHVzZXJzLmxlbmd0aCkge1xuLy8gICAgICAgICAgICAgbGV0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgMik7XG4vL1xuLy9cbi8vICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcklkICYmIHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcbi8vICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySW5kZXggPSBjdXJyZW50VXNlciAmJiB1c2Vycy5pbmRleE9mKGN1cnJlbnRVc2VyKTtcbi8vICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGUsIHVzZXJzLCBjdXJyZW50VXNlcik7XG4vLyAgICAgICAgICAgICAvLyBsZXQgb3RoZXJVc2Vycztcbi8vXG4vLyAgICAgICAgICAgICAvLyBpZiAoIWN1cnJlbnRVc2VySW5kZXggfHwgY3VycmVudFVzZXJJbmRleCA8IDEwKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgb3RoZXJVc2VycyA9IHVzZXJzLnNsaWNlKDEwLCAxMyk7XG4vLyAgICAgICAgICAgICAvLyB9ICBlbHNlIHtcbi8vICAgICAgICAgICAgIC8vICAgICBvdGhlclVzZXJzID0gdXNlcnMuc2xpY2UoTWF0aC5tYXgoY3VycmVudFVzZXJJbmRleCAtIDEsIDEwKSwgY3VycmVudFVzZXJJbmRleCArIDIpO1xuLy8gICAgICAgICAgICAgLy8gfVxuLy8gICAgICAgICAgICAgLy9cbi8vICAgICAgICAgICAgIC8vIGlmIChvdGhlclVzZXJzICYmIG90aGVyVXNlcnMubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKG90aGVyVXNlcnMsIHVzZXJJZCwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzKTtcbi8vICAgICAgICAgICAgIC8vIH1cbi8vICAgICAgICAgfVxuLy9cbi8vICAgICB9XG4vL1xuLy9cbi8vICAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHRhYmxlLCBhbGxVc2VycywgY3VycmVudFVzZXIpIHtcbi8vICAgICAgICAgdGFibGUuaW5uZXJIVE1MID0gJyc7XG4vLyAgICAgICAgIGlmICh1c2VycyAmJiB1c2Vycy5sZW5ndGgpIHtcbi8vICAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlcklkICYmIGN1cnJlbnRVc2VySWQgPT09IHVzZXIudXNlcmlkO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxVc2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuLy8gICAgICAgICAgICAgICAgIGlmIChjaGVja0N1cnJlbnRVc2VyKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQoJ195b3UnKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgLy8gY29uc3QgcGxhY2UgPSBhbGxVc2Vycy5pbmRleE9mKHVzZXIpICsgMTtcbi8vICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcml6ZVBsYWNlQ3NzID0gUFJJWkVTX0NTU1twbGFjZSAtIDFdO1xuLy8gICAgICAgICAgICAgICAgIC8vIGlmIChwcml6ZVBsYWNlQ3NzKSB7XG4vLyAgICAgICAgICAgICAgICAgLy8gICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQocHJpemVQbGFjZUNzcyk7XG4vLyAgICAgICAgICAgICAgICAgLy8gfVxuLy8gICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByaXplS2V5ID0gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSlcbi8vICAgICAgICAgICAgICAgICAvLyBhZGRpdGlvbmFsVXNlclJvdy5pbm5lckhUTUwgPSBgXG4vLyAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVSZXN1bHRzX19ib2R5LWNvbFwiICR7Y2hlY2tDdXJyZW50VXNlcn0+JHtwbGFjZX08L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVJlc3VsdHNfX2JvZHktY29sXCI+JHt1c2VyLnVzZXJpZH08L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVJlc3VsdHNfX2JvZHktY29sXCI+JHt1c2VyLnBvaW50c308L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVJlc3VsdHNfX2JvZHktY29sXCI+JHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ308L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAvLyAgICAgYDtcbi8vICAgICAgICAgICAgICAgICAvLyB0YWJsZS5hcHBlbmQoYWRkaXRpb25hbFVzZXJSb3cpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vL1xuLy8gICAgIGZ1bmN0aW9uIGNoZWNrU3RhdHVzKCkge1xuLy8gICAgICAgICBiZXRXaW5Db3VudGVyIDwgNiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X190YWJsZVwiKS5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIikgOiBudWxsXG4vLyAgICAgICAgIGNvbnN0IGFjdGl2ZUx2bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLWx2bC5fYWN0aXZlXCIpO1xuLy8gICAgICAgICBjb25zdCBjb25kaXRpb25zID0ge1xuLy8gICAgICAgICAgICAgYmV0OiB7XG4vLyAgICAgICAgICAgICAgICAgMTogYmV0V2luQ291bnRlciA+IDEsXG4vLyAgICAgICAgICAgICAgICAgMjogYmV0V2luQ291bnRlciA+IDMsXG4vLyAgICAgICAgICAgICAgICAgMzogYmV0V2luQ291bnRlciA+IDUsXG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgbHZsOiB7XG4vLyAgICAgICAgICAgICAgICAgMTogY3VycmVudEx2bCA9PT0gMSxcbi8vICAgICAgICAgICAgICAgICAyOiBjdXJyZW50THZsID09PSAyLFxuLy8gICAgICAgICAgICAgICAgIDM6IGN1cnJlbnRMdmwgPT09IDMsXG4vLyAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICB9O1xuLy8gICAgICAgICBnZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpO1xuLy8gICAgICAgICBpZiAoY29uZGl0aW9ucy5iZXRbY3VycmVudEx2bF0gJiYgY29uZGl0aW9ucy5sdmxbY3VycmVudEx2bF0pIHtcbi8vICAgICAgICAgICAgIGx2bFN0YXR1cyA9IHRydWU7XG4vLyAgICAgICAgICAgICByZWZyZXNoTHZsKGN1cnJlbnRMdmwsIGx2bFN0YXR1cyk7XG4vLyAgICAgICAgICAgICBnZXRCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9sb2NrXCIpO1xuLy9cbi8vICAgICAgICAgICAgIGlmIChhY3RpdmVMdmwpIGFjdGl2ZUx2bC5jbGFzc0xpc3QuYWRkKFwiX3VwXCIpO1xuLy9cbi8vICAgICAgICAgICAgIHJldHVybiBsdmxTdGF0dXM7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgbHZsU3RhdHVzID0gZmFsc2U7XG4vLyAgICAgICAgIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKVxuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgfVxuLy9cbi8vICAgICBmdW5jdGlvbiByZWZyZXNoTHZsKGN1cnJlbnRMdmwsIGx2bFN0YXR1cyl7XG4vLyAgICAgICAgIGxldmVscy5mb3JFYWNoKChsdmwsIGkpID0+e1xuLy8gICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4vLyAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl9kb25lXCIpXG4vLyAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4vLyAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl91cFwiKVxuLy8gICAgICAgICAgICAgaWYoKytpID09PSBjdXJyZW50THZsKSB7XG4vLyAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG4vL1xuLy8gICAgICAgICAgICAgICAgIGlmIChsdmxTdGF0dXMgPT09IHRydWUpe1xuLy8gICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl91cFwiKVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAxICYmIGJldFdpbkNvdW50ZXIgPD0gMCAmJiBsdmxTdGF0dXMgPT09IGZhbHNlKXtcbi8vICAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdm9pZFwiKVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAxICYmIGJldFdpbkNvdW50ZXIgPD0gMCAmJiBsdmxTdGF0dXMgPT09IHRydWUpe1xuLy8gICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4vLyAgICAgICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAyICYmIGJldFdpbkNvdW50ZXIgPD0gMiAmJiBsdmxTdGF0dXMgPT09IGZhbHNlICl7XG4vLyAgICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3ZvaWRcIilcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMiAmJiBiZXRXaW5Db3VudGVyIDw9IDIgJiYgbHZsU3RhdHVzID09PSB0cnVlICl7XG4vLyAgICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbi8vICAgICAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDMgJiYgYmV0V2luQ291bnRlciA8PSA0ICYmIGx2bFN0YXR1cyA9PT0gZmFsc2Upe1xuLy8gICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl92b2lkXCIpXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDMgJiYgYmV0V2luQ291bnRlciA8PSA0ICYmIGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4vLyAgICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbi8vICAgICAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgfWVsc2V7XG4vLyAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpIDwgY3VycmVudEx2bCwgaSAsIGN1cnJlbnRMdmwsIGx2bClcbi8vICAgICAgICAgICAgIGkgPCBjdXJyZW50THZsID8gbHZsLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKSA6IG51bGxcbi8vICAgICAgICAgfSlcbi8vXG4vLyAgICAgfVxuLy9cbi8vICAgICBmdW5jdGlvbiByZWZyZXNoQ2FzZXMoY3VycmVudEx2bCkge1xuLy8gICAgICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+IHtcbi8vICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiLCBcIl9sZWZ0XCIsIFwiX3JpZ2h0XCIsIFwiX2xvY2tcIik7XG4vLyAgICAgICAgIH0pO1xuLy9cbi8vICAgICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gY3VycmVudEx2bCAtIDE7XG4vLyAgICAgICAgIGlmIChhY3RpdmVJbmRleCA+PSBjYXNlcy5sZW5ndGgpIHtcbi8vICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gY2FzZXMubGVuZ3RoIC0gMTtcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgbGV0IHByZXZJbmRleCA9IGFjdGl2ZUluZGV4IC0gMSA8IDAgPyBjYXNlcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xuLy8gICAgICAgICBsZXQgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggKyAxID49IGNhc2VzLmxlbmd0aCA/IDAgOiBhY3RpdmVJbmRleCArIDE7XG4vL1xuLy8gICAgICAgICBjYXNlc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIik7XG4vLyAgICAgICAgIGNhc2VzW3ByZXZJbmRleF0uY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpO1xuLy8gICAgICAgICBjYXNlc1tuZXh0SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfcmlnaHRcIik7XG4vL1xuLy8gICAgICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+IHtcbi8vICAgICAgICAgICAgIGlmIChpICE9PSBhY3RpdmVJbmRleCkge1xuLy8gICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIik7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vXG4vL1xuLy9cbi8vXG4vLyAgICAgZnVuY3Rpb24gbHZsVXAoKXtcbi8vICAgICAgICAgY3VycmVudEx2bCA9IGN1cnJlbnRMdmwgKyAxXG4vLyAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIGAke2N1cnJlbnRMdmx9YClcbi8vICAgICAgICAgY2hlY2tTdGF0dXMoKVxuLy8gICAgICAgICByZXR1cm4gbHZsU3RhdHVzXG4vLyAgICAgfVxuLy9cbi8vICAgICAvLyBjaGVja1N0YXR1cygpXG4vL1xuLy8gICAgIGxldCBpZEFyciA9IHVzZXJUYWJsZVBsYWNlLnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4vL1xuLy8gLy8gY29uc29sZS5sb2coaWRBcnIpXG4vL1xuLy8gICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gMSl7XG4vLyAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ19vbmUnKVxuLy8gICAgIH1cbi8vICAgICBpZihpZEFyci5sZW5ndGggPT09IDIpe1xuLy8gICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfdHdvJylcbi8vICAgICB9XG4vLyAgICAgaWYoaWRBcnIubGVuZ3RoID09PSAzKXtcbi8vICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX3RocmVlJylcbi8vICAgICB9XG4vLyAgICAgaWYoaWRBcnIubGVuZ3RoID09PSA0KXtcbi8vICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX2ZvdXInKVxuLy8gICAgIH1cbi8vXG4vLyAgICAgaWYoaWRBcnIubGVuZ3RoID09PSA1KXtcbi8vICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX2ZpdmUnKVxuLy8gICAgIH1cbi8vXG4vLyAgICAgZnVuY3Rpb24gb3BlbkNhc2VBbmltKGJveCl7XG4vLyAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hha2VcIilcbi8vICAgICAgICAgYm94LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19jYXBcIikuY2xhc3NMaXN0LmFkZChcIm9wZW5cIilcbi8vICAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuLy8gICAgICAgICAgICAgYm94LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19jYXAtZnJvbnRcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbi8vICAgICAgICAgfSwgMzAwKVxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuLy8gICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hvd1wiKVxuLy8gICAgICAgICB9LCA0NTApXG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4vLyAgICAgICAgICAgICBsdmxVcCgpXG4vLyAgICAgICAgICAgICByZWZyZXNoQ2FzZXMoY3VycmVudEx2bClcbi8vICAgICAgICAgICAgIGNoZWNrU3RhdHVzKClcbi8vICAgICAgICAgfSwgNDAwMClcbi8vICAgICB9XG4vL1xuLy9cbi8vXG4vL1xuLy8gICAgIGdldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuLy8gICAgICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+e1xuLy8gICAgICAgICAgICAgaWYoYm94LmNsYXNzTGlzdC5jb250YWlucyhcIl9hY3RpdmVcIikpe1xuLy8gICAgICAgICAgICAgICAgIG9wZW5DYXNlQW5pbShib3gpXG4vLyAgICAgICAgICAgICAgICAgLy8gZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuLy8gICAgICAgICAgICAgICAgIC8vIGNoZWNrU3RhdHVzKClcbi8vICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIH0pXG4vL1xuLy8gICAgIH0pXG4vL1xuLy9cbi8vICAgICBmdW5jdGlvbiBzZXRQb3B1cChidG5PcGVuLCBidG5DbG9zZSwgcG9wdXAsIGhpZGUpe1xuLy8gICAgICAgICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9Pntcbi8vICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4vLyAgICAgICAgICAgICBpZihoaWRlKXtcbi8vICAgICAgICAgICAgICAgICBidG5PcGVuLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IFwiMFwiXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIGlmKGJ0bkNsb3NlKXtcbi8vICAgICAgICAgICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9Pntcbi8vICAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuLy8gICAgICAgICAgICAgICAgIGlmKGhpZGUpe1xuLy8gICAgICAgICAgICAgICAgICAgICBidG5PcGVuLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IFwiMVwiXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4vLyAgICAgICAgICAgICAgICAgaWYoIXBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPT0gYnRuT3Blbil7XG4vLyAgICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmKGhpZGUpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnRuT3Blbi5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICB9XG4vL1xuLy8gICAgIHNldFBvcHVwKHByb2dyZXNzUG9wdXBCdG4sIHByb2dyZXNzUG9wdXBDbG9zZSwgcHJvZ3Jlc3NQb3B1cClcbi8vICAgICBzZXRQb3B1cCh1cGRQb3B1cEJ0biwgdXBkUG9wdXBDbG9zZSwgdXBkUG9wdXAsIHRydWUpXG4vLyAgICAgc2V0UG9wdXAocmVzdWx0UG9wdXBCdG4sIHJlc3VsdFBvcHVwQnRuQ2xvc2UsIHJlc3VsdFBvcHVwLCB0cnVlKVxuLy9cbi8vICAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bihlbmRUaW1lKSB7XG4vLyAgICAgICAgIGNvbnN0IGhvdXJzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aW1lcl9faG91cnMtaXRlbVwiKTtcbi8vICAgICAgICAgY29uc3QgbWludXRlc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX21pbnV0ZXMtaXRlbVwiKTtcbi8vICAgICAgICAgY29uc3Qgc2Vjb25kc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX3NlY29uZHMtaXRlbVwiKTtcbi8vXG4vLyAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuLy8gICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4vLyAgICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IGVuZFRpbWUgLSBub3c7XG4vL1xuLy8gICAgICAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbi8vICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xuLy8gICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhob3Vyc0VscywgXCIwMFwiKTtcbi8vICAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgXCIwMFwiKTtcbi8vICAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoc2Vjb25kc0VscywgXCIwMFwiKTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpO1xuLy8gICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCkpICUgNjApO1xuLy8gICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gMTAwMCkgJSA2MCk7XG4vL1xuLy8gICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCBTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4vLyAgICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4vLyAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoc2Vjb25kc0VscywgU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURpZ2l0cyhlbGVtZW50cywgdmFsdWUpIHtcbi8vICAgICAgICAgICAgIGVsZW1lbnRzWzBdLnRleHRDb250ZW50ID0gdmFsdWVbMF07XG4vLyAgICAgICAgICAgICBlbGVtZW50c1sxXS50ZXh0Q29udGVudCA9IHZhbHVlWzFdO1xuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICB1cGRhdGVUaW1lcigpO1xuLy8gICAgICAgICBjb25zdCB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbi8vICAgICBjb25zdCBlbmRPZkRheSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSwgMjMsIDU5LCA1OSkuZ2V0VGltZSgpO1xuLy9cbi8vICAgICBzdGFydENvdW50ZG93bihlbmRPZkRheSk7XG4vL1xuLy9cbi8vICAgICBsb2FkVHJhbnNsYXRpb25zKClcbi8vICAgICAgICAgLnRoZW4oaW5pdCk7XG4vL1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4vLyAgICAgfSlcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1sdmxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC1tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcbi8vICAgICB9KVxuLy9cbi8vICAgICBjb25zdCBsdmwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtMVwiKVxuLy8gICAgIGNvbnN0IGx2bDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC0yXCIpXG4vLyAgICAgY29uc3QgbHZsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLTNcIilcbi8vICAgICBjb25zdCBsdmxVcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLXVwXCIpXG4vLyAgICAgY29uc3QgYmV0V2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZXQtd2luXCIpXG4vLyAgICAgY29uc3QgYmV0Q2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJldC1jbGVhclwiKVxuLy8gICAgIGNvbnN0IGJ0bkxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1sb2NrXCIpXG4vLyAgICAgY29uc3QgZGFya0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIilcbi8vXG4vLyAgICAgYmV0V2luLnRleHRDb250ZW50ID0gYHdpbiBiZXQ6ICR7YmV0V2luQ291bnRlcn1gXG4vL1xuLy8gICAgIGJldFdpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4vLyAgICAgICAgIGJldFdpbkNvdW50ZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSkgOiAwXG4vLyAgICAgICAgIGJldFdpbkNvdW50ZXIgPSBiZXRXaW5Db3VudGVyICsgMVxuLy8gICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmV0V2luQ291bnRlclwiLCBiZXRXaW5Db3VudGVyKVxuLy8gICAgICAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogJHtiZXRXaW5Db3VudGVyfWBcbi8vICAgICAgICAgLy8gcmVmcmVzaEx2bChjdXJyZW50THZsKVxuLy8gICAgICAgICBjaGVja1N0YXR1cygpXG4vL1xuLy9cbi8vICAgICB9KVxuLy9cbi8vICAgICBiZXRDbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4vLyAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpXG4vLyAgICAgICAgIGJldFdpbkNvdW50ZXIgPSAwXG4vLyAgICAgICAgIGJldFdpbi50ZXh0Q29udGVudCA9IGB3aW4gYmV0OiAwYFxuLy8gICAgICAgICBjaGVja1N0YXR1cygpXG4vLyAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiMVwiKVxuLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbi8vICAgICAgICAgLy8gcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpXG4vL1xuLy8gICAgIH0pXG4vL1xuLy8gICAgIGx2bDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuLy8gICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjFcIilcbi8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4vLyAgICAgfSlcbi8vICAgICBsdmwyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9Pntcbi8vICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIyXCIpXG4vLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuLy8gICAgIH0pXG4vLyAgICAgbHZsMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4vLyAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiM1wiKVxuLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbi8vICAgICB9KVxuLy9cbi8vICAgICBsdmxVcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4vLyAgICAgICAgIGx2bFN0YXR1cyA9ICFsdmxTdGF0dXNcbi8vICAgICAgICAgY2hlY2tTdGF0dXMoKVxuLy8gICAgICAgICBsdmxTdGF0dXMgPSAhbHZsU3RhdHVzXG4vL1xuLy8gICAgIH0pXG4vL1xuLy8gICAgIGJ0bkxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fdGFibGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcIl9sb2NrXCIpXG4vLyAgICAgfSlcbi8vXG4vLyAgICAgZGFya0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4vLyAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbi8vICAgICB9KVxuLy9cbi8vIH0pKClcbi8vXG4iXX0=
