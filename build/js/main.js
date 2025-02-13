"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  // const apiURL = 'https://fav-prom.com/api_mountain_king'
  var apiURL = 'https://fav-prom.com/api_vip';
  var userPlace = document.querySelector(".you"),
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
  var currentLvl = sessionStorage.getItem("currentLvl") ? Number(sessionStorage.getItem("currentLvl")) : 1;
  var lvlStatus = checkStatus();
  var betWinCounter = sessionStorage.getItem("betWinCounter") ? Number(sessionStorage.getItem("betWinCounter")) : 0;
  var locale = sessionStorage.getItem("locale") ? sessionStorage.getItem("locale") : "uk";

  // if (ukLeng) locale = 'uk';
  // if (enLeng) locale = 'en';

  var debug = true;
  var i18nData = {};
  var translateState = false;
  var userId;
  userId = 100300268;
  function getData() {
    return Promise.all([request('/users?nocache=1')]);
  }
  function init() {
    if (window.store) {
      var state = window.store.getState();
      userId = state.auth.isAuthorized && state.auth.id || '';
      checkUserAuth();
      checkStatus();
      refreshCases(currentLvl);
      getData().then(function (res) {
        var users = res[0].sort(function (a, b) {
          return b.points - a.points;
        });
        // renderUsers(users);
      });
    } else {
      var c = 0;
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
      checkStatus();
      refreshCases(currentLvl);
      getData().then(function (res) {
        var users = res[0].sort(function (a, b) {
          return b.points - a.points;
        });
        // renderUsers(users);
      });
    }
  }

  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    request('/user', {
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      participateBtns.forEach(function (item) {
        return item.classList.add('hide');
      });
      redirectBtns.forEach(function (item) {
        return item.classList.remove('hide');
      });
    });
  }
  function loadTranslations() {
    return fetch("".concat(apiURL, "/translates/").concat(locale)).then(function (res) {
      return res.json();
    }).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        translate();
      });
    });
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          elem.removeAttribute('data-translate');
        });
      } else {
        console.log("translation work!");
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
    var bets = userInfo.bets.slice(0, 10);
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
    var localDate = new Date(date);
    var day = String(localDate.getDate()).padStart(2, '0');
    var month = String(localDate.getMonth() + 1).padStart(2, '0');
    var hours = String(localDate.getHours()).padStart(2, '0');
    var minutes = String(localDate.getMinutes()).padStart(2, '0');
    return "".concat(day, ".").concat(month, " ").concat(hours, ":").concat(minutes);
  }
  function refreshLocalizedClass(element, baseCssClass) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      return res.json();
    });
  };
  function checkUserAuth() {
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
          getBtn.classList.remove("hide");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          // displayUserInfo(res);
        } else {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
        }
      });
    } else {
      var _iterator2 = _createForOfIteratorHelper(participateBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var participateBtn = _step2.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(unauthMsgs),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _unauthMes = _step3.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return Promise.resolve(false);
    }
  }
  var renderUsers = function renderUsers(users) {
    // resultsTableWrapper.classList.remove('hide');
    // resultsTableOther.classList.remove('hide');
    if (users && users.length) {
      var topUsers = users.slice(0, 2);
      var currentUser = userId && users.find(function (user) {
        return user.userid === userId;
      });
      var currentUserIndex = currentUser && users.indexOf(currentUser);
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
  };

  function populateUsersTable(users, currentUserId, table, allUsers, currentUser) {
    table.innerHTML = '';
    if (users && users.length) {
      users.forEach(function (user) {
        console.log(user);
        var checkCurrentUser = currentUserId && currentUserId === user.userid;
        var additionalUserRow = document.createElement('div');
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
    betWinCounter < 6 ? document.querySelector(".result__table").classList.add("_lock") : null;
    var activeLvl = document.querySelector(".bonus__progress-lvl._active");
    var conditions = {
      bet: {
        1: betWinCounter > 1,
        2: betWinCounter > 3,
        3: betWinCounter > 5
      },
      lvl: {
        1: currentLvl === 1,
        2: currentLvl === 2,
        3: currentLvl === 3
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
    refreshLvl(currentLvl, lvlStatus);
    return false;
  }
  function refreshLvl(currentLvl, lvlStatus) {
    levels.forEach(function (lvl, i) {
      lvl.classList.remove("_active");
      lvl.classList.remove("_done");
      lvl.classList.remove("_void");
      lvl.classList.remove("_up");
      if (++i === currentLvl) {
        lvl.classList.add("_active");
        if (lvlStatus === true) {
          lvl.classList.add("_up");
        }
        if (currentLvl === 1 && betWinCounter <= 0 && lvlStatus === false) {
          lvl.classList.add("_void");
        }
        if (currentLvl === 1 && betWinCounter <= 0 && lvlStatus === true) {
          lvl.classList.remove("_void");
        }
        if (currentLvl === 2 && betWinCounter <= 2 && lvlStatus === false) {
          lvl.classList.add("_void");
        }
        if (currentLvl === 2 && betWinCounter <= 2 && lvlStatus === true) {
          lvl.classList.remove("_void");
        }
        if (currentLvl === 3 && betWinCounter <= 4 && lvlStatus === false) {
          lvl.classList.add("_void");
        }
        if (currentLvl === 3 && betWinCounter <= 4 && lvlStatus === true) {
          lvl.classList.remove("_void");
        }
      } else {
        lvl.classList.remove("_active");
      }
      // console.log(i < currentLvl, i , currentLvl, lvl)
      i < currentLvl ? lvl.classList.add("_done") : null;
    });
  }
  function refreshCases(currentLvl) {
    cases.forEach(function (box, i) {
      box.classList.remove("_active", "_left", "_right", "_lock");
    });
    var activeIndex = currentLvl - 1;
    if (activeIndex >= cases.length) {
      activeIndex = cases.length - 1;
    }
    var prevIndex = activeIndex - 1 < 0 ? cases.length - 1 : activeIndex - 1;
    var nextIndex = activeIndex + 1 >= cases.length ? 0 : activeIndex + 1;
    cases[activeIndex].classList.add("_active");
    cases[prevIndex].classList.add("_left");
    cases[nextIndex].classList.add("_right");
    cases.forEach(function (box, i) {
      if (i !== activeIndex) {
        box.classList.add("_lock");
      }
    });
  }
  function lvlUp() {
    currentLvl = currentLvl + 1;
    sessionStorage.setItem("currentLvl", "".concat(currentLvl));
    checkStatus();
    return lvlStatus;
  }

  // checkStatus()

  var idArr = userTablePlace.textContent.split("");

  // console.log(idArr)

  if (idArr.length === 1) {
    userTablePlace.classList.add('_one');
  }
  if (idArr.length === 2) {
    userTablePlace.classList.add('_two');
  }
  if (idArr.length === 3) {
    userTablePlace.classList.add('_three');
  }
  if (idArr.length === 4) {
    userTablePlace.classList.add('_four');
  }
  if (idArr.length === 5) {
    userTablePlace.classList.add('_five');
  }
  function openCaseAnim(box) {
    box.classList.add("shake");
    box.querySelector(".box__cap").classList.add("open");
    getBtn.classList.add("_lock");
    setTimeout(function () {
      box.querySelector(".box__cap-front").classList.add("hide");
    }, 300);
    setTimeout(function () {
      box.classList.add("_show");
    }, 150);
    setTimeout(function () {
      lvlUp();
      refreshCases(currentLvl);
      checkStatus();
    }, 4000);
  }
  getBtn.addEventListener('click', function () {
    cases.forEach(function (box, i) {
      if (box.classList.contains("_active")) {
        openCaseAnim(box);
        // getBtn.classList.add("_lock")
        // checkStatus()
      }
    });
  });

  function setPopup(btnOpen, btnClose, popup, hide) {
    btnOpen.addEventListener("click", function () {
      popup.classList.remove("hide");
      if (hide) {
        btnOpen.parentNode.style.opacity = "0";
      }
    });
    if (btnClose) {
      btnClose.addEventListener("click", function () {
        popup.classList.add("hide");
        if (hide) {
          btnOpen.parentNode.style.opacity = "1";
        }
      });
      document.addEventListener("click", function (e) {
        if (!popup.contains(e.target) && e.target !== btnOpen) {
          popup.classList.add("hide");
          if (hide) {
            btnOpen.parentNode.style.opacity = "1";
          }
        }
      });
    }
  }
  setPopup(progressPopupBtn, progressPopupClose, progressPopup);
  setPopup(updPopupBtn, updPopupClose, updPopup, true);
  setPopup(resultPopupBtn, resultPopupBtnClose, resultPopup, true);
  function startCountdown(endTime) {
    var hoursEls = document.querySelectorAll(".timer__hours-item");
    var minutesEls = document.querySelectorAll(".timer__minutes-item");
    var secondsEls = document.querySelectorAll(".timer__seconds-item");
    function updateTimer() {
      var now = new Date().getTime();
      var timeLeft = endTime - now;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        updateDigits(hoursEls, "00");
        updateDigits(minutesEls, "00");
        updateDigits(secondsEls, "00");
        return;
      }
      var hours = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
      var minutes = Math.floor(timeLeft / (1000 * 60) % 60);
      var seconds = Math.floor(timeLeft / 1000 % 60);
      updateDigits(hoursEls, String(hours).padStart(2, "0"));
      updateDigits(minutesEls, String(minutes).padStart(2, "0"));
      updateDigits(secondsEls, String(seconds).padStart(2, "0"));
    }
    function updateDigits(elements, value) {
      elements[0].textContent = value[0];
      elements[1].textContent = value[1];
    }
    updateTimer();
    var timerInterval = setInterval(updateTimer, 1000);
  }
  var now = new Date();
  var endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).getTime();
  startCountdown(endOfDay);
  loadTranslations().then(init);
  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".menu-test").classList.toggle("hidden");
  });
  document.querySelector(".btn-lvl").addEventListener("click", function () {
    document.querySelector(".lvl-menu").classList.toggle("hidden");
  });
  var lvl1 = document.querySelector(".lvl-1");
  var lvl2 = document.querySelector(".lvl-2");
  var lvl3 = document.querySelector(".lvl-3");
  var lvlUpBtn = document.querySelector(".lvl-up");
  var betWin = document.querySelector(".bet-win");
  var betClear = document.querySelector(".bet-clear");
  var btnLock = document.querySelector(".btn-lock");
  var darkBtn = document.querySelector(".dark-btn");
  betWin.textContent = "win bet: ".concat(betWinCounter);
  betWin.addEventListener("click", function () {
    betWinCounter = sessionStorage.getItem("betWinCounter") ? Number(sessionStorage.getItem("betWinCounter")) : 0;
    betWinCounter = betWinCounter + 1;
    sessionStorage.setItem("betWinCounter", betWinCounter);
    betWin.textContent = "win bet: ".concat(betWinCounter);
    // refreshLvl(currentLvl)
    checkStatus();
  });
  betClear.addEventListener("click", function () {
    sessionStorage.removeItem("betWinCounter");
    betWinCounter = 0;
    betWin.textContent = "win bet: 0";
    checkStatus();
    sessionStorage.setItem("currentLvl", "1");
    window.location.reload();
    // refreshLvl(currentLvl, lvlStatus)
  });

  lvl1.addEventListener("click", function () {
    sessionStorage.setItem("currentLvl", "1");
    window.location.reload();
  });
  lvl2.addEventListener("click", function () {
    sessionStorage.setItem("currentLvl", "2");
    window.location.reload();
  });
  lvl3.addEventListener("click", function () {
    sessionStorage.setItem("currentLvl", "3");
    window.location.reload();
  });
  lvlUpBtn.addEventListener("click", function () {
    lvlStatus = !lvlStatus;
    checkStatus();
    lvlStatus = !lvlStatus;
  });
  btnLock.addEventListener("click", function () {
    document.querySelector(".result__table").classList.toggle("_lock");
  });
  darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidXNlclBsYWNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidXNlclRhYmxlUGxhY2UiLCJjYXNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRCdG4iLCJsZXZlbHMiLCJwcm9ncmVzc1BvcHVwIiwicHJvZ3Jlc3NQb3B1cEJ0biIsInByb2dyZXNzUG9wdXBDbG9zZSIsInVwZFBvcHVwIiwidXBkUG9wdXBCdG4iLCJ1cGRQb3B1cENsb3NlIiwicmVzdWx0UG9wdXAiLCJyZXN1bHRQb3B1cEJ0biIsInJlc3VsdFBvcHVwQnRuQ2xvc2UiLCJ1bmF1dGhNc2dzIiwicGFydGljaXBhdGVCdG5zIiwicmVkaXJlY3RCdG5zIiwibWFpblBhZ2UiLCJyZXN1bHRzVGFibGUiLCJjdXJyZW50THZsIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiTnVtYmVyIiwibHZsU3RhdHVzIiwiY2hlY2tTdGF0dXMiLCJiZXRXaW5Db3VudGVyIiwibG9jYWxlIiwiZGVidWciLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiZ2V0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXF1ZXN0IiwiaW5pdCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImNoZWNrVXNlckF1dGgiLCJyZWZyZXNoQ2FzZXMiLCJ0aGVuIiwicmVzIiwidXNlcnMiLCJzb3J0IiwiYSIsImIiLCJwb2ludHMiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwidXNlcmlkIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJ0cmFuc2xhdGVLZXkiLCJkZWZhdWx0VmFsIiwiZGlzcGxheVVzZXJJbmZvIiwidXNlckluZm8iLCJiZXRzIiwic2xpY2UiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImxvY2FsRGF0ZSIsIkRhdGUiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsInVuYXV0aE1lcyIsInBhcnRpY2lwYXRlQnRuIiwicmVzb2x2ZSIsInJlbmRlclVzZXJzIiwidG9wVXNlcnMiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ1c2VyIiwiY3VycmVudFVzZXJJbmRleCIsImluZGV4T2YiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwidGFibGUiLCJhbGxVc2VycyIsImNoZWNrQ3VycmVudFVzZXIiLCJhZGRpdGlvbmFsVXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJhY3RpdmVMdmwiLCJjb25kaXRpb25zIiwiYmV0IiwibHZsIiwicmVmcmVzaEx2bCIsImJveCIsImFjdGl2ZUluZGV4IiwicHJldkluZGV4IiwibmV4dEluZGV4IiwibHZsVXAiLCJzZXRJdGVtIiwiaWRBcnIiLCJ0ZXh0Q29udGVudCIsInNwbGl0Iiwib3BlbkNhc2VBbmltIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsInNldFBvcHVwIiwiYnRuT3BlbiIsImJ0bkNsb3NlIiwicG9wdXAiLCJoaWRlIiwicGFyZW50Tm9kZSIsInN0eWxlIiwib3BhY2l0eSIsImUiLCJ0YXJnZXQiLCJzdGFydENvdW50ZG93biIsImVuZFRpbWUiLCJob3Vyc0VscyIsIm1pbnV0ZXNFbHMiLCJzZWNvbmRzRWxzIiwidXBkYXRlVGltZXIiLCJub3ciLCJnZXRUaW1lIiwidGltZUxlZnQiLCJ0aW1lckludGVydmFsIiwidXBkYXRlRGlnaXRzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsImVsZW1lbnRzIiwidmFsdWUiLCJlbmRPZkRheSIsImdldEZ1bGxZZWFyIiwidG9nZ2xlIiwibHZsMSIsImx2bDIiLCJsdmwzIiwibHZsVXBCdG4iLCJiZXRXaW4iLCJiZXRDbGVhciIsImJ0bkxvY2siLCJkYXJrQnRuIiwicmVtb3ZlSXRlbSIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLENBQUMsWUFBVztFQUNSO0VBQ0EsSUFBTUEsTUFBTSxHQUFHLDhCQUE4QjtFQUU3QyxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUM1Q0MsY0FBYyxHQUFHSCxTQUFTLENBQUNFLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztJQUMvREUsS0FBSyxHQUFHSCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0lBQ3ZEQyxNQUFNLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzQ0ssTUFBTSxHQUFHTixRQUFRLENBQUNJLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO0lBQzFERyxhQUFhLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0lBQ2hFTyxnQkFBZ0IsR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsNEJBQTRCLENBQUM7SUFDdkVRLGtCQUFrQixHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQztJQUMzRVMsUUFBUSxHQUFHVixRQUFR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SztJQUNoQzdILGNBQWMsQ0FBQ3VILE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDO0lBQ3pDdkcsTUFBTSxDQUFDcUosUUFBUSxDQUFDQyxNQUFNLEVBQUU7RUFDNUIsQ0FBQyxDQUFDO0VBQ0ZSLElBQUksQ0FBQ2pDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ2hDN0gsY0FBYyxDQUFDdUgsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUM7SUFDekN2RyxNQUFNLENBQUNxSixRQUFRLENBQUNDLE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7RUFFRlAsUUFBUSxDQUFDbEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDcEMxSCxTQUFTLEdBQUcsQ0FBQ0EsU0FBUztJQUN0QkMsV0FBVyxFQUFFO0lBQ2JELFNBQVMsR0FBRyxDQUFDQSxTQUFTO0VBRTFCLENBQUMsQ0FBQztFQUVGK0osT0FBTyxDQUFDckMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDbkNuSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDbUUsU0FBUyxDQUFDNkcsTUFBTSxDQUFDLE9BQU8sQ0FBQztFQUN0RSxDQUFDLENBQUM7RUFFRlEsT0FBTyxDQUFDdEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDbkNuSixRQUFRLENBQUMrRCxJQUFJLENBQUNLLFNBQVMsQ0FBQzZHLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDMUMsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgLy8gY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9tb3VudGFpbl9raW5nJ1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfdmlwJztcblxuICAgIGNvbnN0IHVzZXJQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueW91XCIpLFxuICAgICAgICB1c2VyVGFibGVQbGFjZSA9IHVzZXJQbGFjZS5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19ibG9jay1wbGFjZVwiKSxcbiAgICAgICAgY2FzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvbnVzX19ib3hlcy1pdGVtXCIpLFxuICAgICAgICBnZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdldC1idG5cIiksXG4gICAgICAgIGxldmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9udXNfX3Byb2dyZXNzLWx2bFwiKSxcbiAgICAgICAgcHJvZ3Jlc3NQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXBvcHVwXCIpLFxuICAgICAgICBwcm9ncmVzc1BvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3MtdGl0bGUtYnRuXCIpLFxuICAgICAgICBwcm9ncmVzc1BvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgdXBkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX193YXJuaW5nXCIpLFxuICAgICAgICB1cGRQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3VwZC1idG5cIiksXG4gICAgICAgIHVwZFBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX193YXJuaW5nLWNsb3NlXCIpLFxuICAgICAgICByZXN1bHRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19zdWJ0aXRsZS1wb3B1cFwiKSxcbiAgICAgICAgcmVzdWx0UG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fc3VidGl0bGUtYnRuXCIpLFxuICAgICAgICByZXN1bHRQb3B1cEJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3N1YnRpdGxlLXBvcHVwLWNsb3NlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVcIik7XG5cbiAgICBsZXQgY3VycmVudEx2bCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50THZsXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50THZsXCIpKSA6IDFcblxuICAgIGxldCBsdmxTdGF0dXMgPSBjaGVja1N0YXR1cygpO1xuICAgIGxldCBiZXRXaW5Db3VudGVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikpIDogMFxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA6IFwidWtcIlxuXG5cbiAgICAvLyBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIC8vIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlO1xuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gZmFsc2U7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB1c2VySWQgPSAxMDAzMDAyNjg7XG5cbiAgICBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgcmVxdWVzdCgnL3VzZXJzP25vY2FjaGU9MScpLFxuICAgICAgICBdKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICAgICAgcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpXG4gICAgICAgICAgICBnZXREYXRhKCkudGhlbihyZXMgPT57XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzWzBdLnNvcnQoKGEsIGIpID0+IGIucG9pbnRzIC0gYS5wb2ludHMpO1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlclVzZXJzKHVzZXJzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYyA9IDA7XG4gICAgICAgICAgICB2YXIgaSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICAgICAgcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpXG4gICAgICAgICAgICBnZXREYXRhKCkudGhlbihyZXMgPT57XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzWzBdLnNvcnQoKGEsIGIpID0+IGIucG9pbnRzIC0gYS5wb2ludHMpO1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlclVzZXJzKHVzZXJzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29yayFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWwpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlckluZm8odXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgYmV0cyA9IHVzZXJJbmZvLmJldHMuc2xpY2UoMCwgMTApO1xuICAgICAgICAvLyBsZXQgYmV0cyA9IFt7YmV0RGF0ZTogbmV3IERhdGUoKSwgc3RhdHVzOiAndW5kZWZpbmVkJ31dXG4gICAgICAgIC8vIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pIHtcbiAgICAvLyAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2xhc3QtdXBkJyk7XG4gICAgLy8gICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdFVwZCcpO1xuICAgIC8vICAgICBpZiAodXNlckluZm8ubGFzdFVwZGF0ZSkge1xuICAgIC8vICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmb3JtYXREYXRlKHVzZXJJbmZvLmxhc3RVcGRhdGUpO1xuICAgIC8vICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcobG9jYWxEYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBnZXRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheVVzZXJJbmZvKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJVc2VycyA9ICh1c2VycykgPT4ge1xuICAgICAgICAvLyByZXN1bHRzVGFibGVXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgLy8gcmVzdWx0c1RhYmxlT3RoZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBpZiAodXNlcnMgJiYgdXNlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCAyKTtcblxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJJZCAmJiB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlckluZGV4ID0gY3VycmVudFVzZXIgJiYgdXNlcnMuaW5kZXhPZihjdXJyZW50VXNlcik7XG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodG9wVXNlcnMsIHVzZXJJZCwgcmVzdWx0c1RhYmxlLCB1c2VycywgY3VycmVudFVzZXIpO1xuICAgICAgICAgICAgLy8gbGV0IG90aGVyVXNlcnM7XG5cbiAgICAgICAgICAgIC8vIGlmICghY3VycmVudFVzZXJJbmRleCB8fCBjdXJyZW50VXNlckluZGV4IDwgMTApIHtcbiAgICAgICAgICAgIC8vICAgICBvdGhlclVzZXJzID0gdXNlcnMuc2xpY2UoMTAsIDEzKTtcbiAgICAgICAgICAgIC8vIH0gIGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgIG90aGVyVXNlcnMgPSB1c2Vycy5zbGljZShNYXRoLm1heChjdXJyZW50VXNlckluZGV4IC0gMSwgMTApLCBjdXJyZW50VXNlckluZGV4ICsgMik7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gaWYgKG90aGVyVXNlcnMgJiYgb3RoZXJVc2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vICAgICBwb3B1bGF0ZVVzZXJzVGFibGUob3RoZXJVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgdGFibGUsIGFsbFVzZXJzLCBjdXJyZW50VXNlcikge1xuICAgICAgICB0YWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKHVzZXJzICYmIHVzZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VySWQgJiYgY3VycmVudFVzZXJJZCA9PT0gdXNlci51c2VyaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkaXRpb25hbFVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX3lvdScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwbGFjZSA9IGFsbFVzZXJzLmluZGV4T2YodXNlcikgKyAxO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByaXplUGxhY2VDc3MgPSBQUklaRVNfQ1NTW3BsYWNlIC0gMV07XG4gICAgICAgICAgICAgICAgLy8gaWYgKHByaXplUGxhY2VDc3MpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgYWRkaXRpb25hbFVzZXJSb3cuY2xhc3NMaXN0LmFkZChwcml6ZVBsYWNlQ3NzKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcHJpemVLZXkgPSBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlKVxuICAgICAgICAgICAgICAgIC8vIGFkZGl0aW9uYWxVc2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVJlc3VsdHNfX2JvZHktY29sXCIgJHtjaGVja0N1cnJlbnRVc2VyfT4ke3BsYWNlfTwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlUmVzdWx0c19fYm9keS1jb2xcIj4ke3VzZXIudXNlcmlkfTwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlUmVzdWx0c19fYm9keS1jb2xcIj4ke3VzZXIucG9pbnRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlUmVzdWx0c19fYm9keS1jb2xcIj4ke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfTwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICBgO1xuICAgICAgICAgICAgICAgIC8vIHRhYmxlLmFwcGVuZChhZGRpdGlvbmFsVXNlclJvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrU3RhdHVzKCkge1xuICAgICAgICBiZXRXaW5Db3VudGVyIDwgNiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X190YWJsZVwiKS5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIikgOiBudWxsXG4gICAgICAgIGNvbnN0IGFjdGl2ZUx2bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLWx2bC5fYWN0aXZlXCIpO1xuICAgICAgICBjb25zdCBjb25kaXRpb25zID0ge1xuICAgICAgICAgICAgYmV0OiB7XG4gICAgICAgICAgICAgICAgMTogYmV0V2luQ291bnRlciA+IDEsXG4gICAgICAgICAgICAgICAgMjogYmV0V2luQ291bnRlciA+IDMsXG4gICAgICAgICAgICAgICAgMzogYmV0V2luQ291bnRlciA+IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbHZsOiB7XG4gICAgICAgICAgICAgICAgMTogY3VycmVudEx2bCA9PT0gMSxcbiAgICAgICAgICAgICAgICAyOiBjdXJyZW50THZsID09PSAyLFxuICAgICAgICAgICAgICAgIDM6IGN1cnJlbnRMdmwgPT09IDMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgaWYgKGNvbmRpdGlvbnMuYmV0W2N1cnJlbnRMdmxdICYmIGNvbmRpdGlvbnMubHZsW2N1cnJlbnRMdmxdKSB7XG4gICAgICAgICAgICBsdmxTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpO1xuICAgICAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUx2bCkgYWN0aXZlTHZsLmNsYXNzTGlzdC5hZGQoXCJfdXBcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBsdmxTdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgbHZsU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpe1xuICAgICAgICBsZXZlbHMuZm9yRWFjaCgobHZsLCBpKSA9PntcbiAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfZG9uZVwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdXBcIilcbiAgICAgICAgICAgIGlmKCsraSA9PT0gY3VycmVudEx2bCkge1xuICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKVxuXG4gICAgICAgICAgICAgICAgaWYgKGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3VwXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDEgJiYgYmV0V2luQ291bnRlciA8PSAwICYmIGx2bFN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDEgJiYgYmV0V2luQ291bnRlciA8PSAwICYmIGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAyICYmIGJldFdpbkNvdW50ZXIgPD0gMiAmJiBsdmxTdGF0dXMgPT09IGZhbHNlICl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMiAmJiBiZXRXaW5Db3VudGVyIDw9IDIgJiYgbHZsU3RhdHVzID09PSB0cnVlICl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAzICYmIGJldFdpbkNvdW50ZXIgPD0gNCAmJiBsdmxTdGF0dXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAzICYmIGJldFdpbkNvdW50ZXIgPD0gNCAmJiBsdmxTdGF0dXMgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkgPCBjdXJyZW50THZsLCBpICwgY3VycmVudEx2bCwgbHZsKVxuICAgICAgICAgICAgaSA8IGN1cnJlbnRMdmwgPyBsdmwuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpIDogbnVsbFxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpIHtcbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIiwgXCJfbGVmdFwiLCBcIl9yaWdodFwiLCBcIl9sb2NrXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWN0aXZlSW5kZXggPSBjdXJyZW50THZsIC0gMTtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID49IGNhc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBjYXNlcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByZXZJbmRleCA9IGFjdGl2ZUluZGV4IC0gMSA8IDAgPyBjYXNlcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggKyAxID49IGNhc2VzLmxlbmd0aCA/IDAgOiBhY3RpdmVJbmRleCArIDE7XG5cbiAgICAgICAgY2FzZXNbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpO1xuICAgICAgICBjYXNlc1twcmV2SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfbGVmdFwiKTtcbiAgICAgICAgY2FzZXNbbmV4dEluZGV4XS5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpO1xuXG4gICAgICAgIGNhc2VzLmZvckVhY2goKGJveCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gbHZsVXAoKXtcbiAgICAgICAgY3VycmVudEx2bCA9IGN1cnJlbnRMdmwgKyAxXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIGAke2N1cnJlbnRMdmx9YClcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICByZXR1cm4gbHZsU3RhdHVzXG4gICAgfVxuXG4gICAgLy8gY2hlY2tTdGF0dXMoKVxuXG4gICAgbGV0IGlkQXJyID0gdXNlclRhYmxlUGxhY2UudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcblxuLy8gY29uc29sZS5sb2coaWRBcnIpXG5cbiAgICBpZihpZEFyci5sZW5ndGggPT09IDEpe1xuICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfb25lJylcbiAgICB9XG4gICAgaWYoaWRBcnIubGVuZ3RoID09PSAyKXtcbiAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX3R3bycpXG4gICAgfVxuICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gMyl7XG4gICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ190aHJlZScpXG4gICAgfVxuICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gNCl7XG4gICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ19mb3VyJylcbiAgICB9XG5cbiAgICBpZihpZEFyci5sZW5ndGggPT09IDUpe1xuICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfZml2ZScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlbkNhc2VBbmltKGJveCl7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hha2VcIilcbiAgICAgICAgYm94LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19jYXBcIikuY2xhc3NMaXN0LmFkZChcIm9wZW5cIilcbiAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgYm94LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19jYXAtZnJvbnRcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgfSwgMzAwKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hvd1wiKVxuICAgICAgICB9LCAxNTApXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBsdmxVcCgpXG4gICAgICAgICAgICByZWZyZXNoQ2FzZXMoY3VycmVudEx2bClcbiAgICAgICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgfSwgNDAwMClcbiAgICB9XG5cblxuXG5cbiAgICBnZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PntcbiAgICAgICAgICAgIGlmKGJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJfYWN0aXZlXCIpKXtcbiAgICAgICAgICAgICAgICBvcGVuQ2FzZUFuaW0oYm94KVxuICAgICAgICAgICAgICAgIC8vIGdldEJ0bi5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIilcbiAgICAgICAgICAgICAgICAvLyBjaGVja1N0YXR1cygpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH0pXG5cblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwKGJ0bk9wZW4sIGJ0bkNsb3NlLCBwb3B1cCwgaGlkZSl7XG4gICAgICAgIGJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgIGlmKGhpZGUpe1xuICAgICAgICAgICAgICAgIGJ0bk9wZW4ucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYoYnRuQ2xvc2Upe1xuICAgICAgICAgICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgaWYoaGlkZSl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bk9wZW4ucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICBpZighcG9wdXAuY29udGFpbnMoZS50YXJnZXQpICYmIGUudGFyZ2V0ICE9PSBidG5PcGVuKXtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgaWYoaGlkZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5PcGVuLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXRQb3B1cChwcm9ncmVzc1BvcHVwQnRuLCBwcm9ncmVzc1BvcHVwQ2xvc2UsIHByb2dyZXNzUG9wdXApXG4gICAgc2V0UG9wdXAodXBkUG9wdXBCdG4sIHVwZFBvcHVwQ2xvc2UsIHVwZFBvcHVwLCB0cnVlKVxuICAgIHNldFBvcHVwKHJlc3VsdFBvcHVwQnRuLCByZXN1bHRQb3B1cEJ0bkNsb3NlLCByZXN1bHRQb3B1cCwgdHJ1ZSlcblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKGVuZFRpbWUpIHtcbiAgICAgICAgY29uc3QgaG91cnNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyX19ob3Vycy1pdGVtXCIpO1xuICAgICAgICBjb25zdCBtaW51dGVzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aW1lcl9fbWludXRlcy1pdGVtXCIpO1xuICAgICAgICBjb25zdCBzZWNvbmRzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aW1lcl9fc2Vjb25kcy1pdGVtXCIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IGVuZFRpbWUgLSBub3c7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoaG91cnNFbHMsIFwiMDBcIik7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKG1pbnV0ZXNFbHMsIFwiMDBcIik7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKHNlY29uZHNFbHMsIFwiMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAoMTAwMCAqIDYwKSkgJSA2MCk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAxMDAwKSAlIDYwKTtcblxuICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCBTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4gICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4gICAgICAgICAgICB1cGRhdGVEaWdpdHMoc2Vjb25kc0VscywgU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVEaWdpdHMoZWxlbWVudHMsIHZhbHVlKSB7XG4gICAgICAgICAgICBlbGVtZW50c1swXS50ZXh0Q29udGVudCA9IHZhbHVlWzBdO1xuICAgICAgICAgICAgZWxlbWVudHNbMV0udGV4dENvbnRlbnQgPSB2YWx1ZVsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgIGNvbnN0IHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBlbmRPZkRheSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSwgMjMsIDU5LCA1OSkuZ2V0VGltZSgpO1xuXG4gICAgc3RhcnRDb3VudGRvd24oZW5kT2ZEYXkpO1xuXG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbHZsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtbWVudVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4gICAgfSlcblxuICAgIGNvbnN0IGx2bDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC0xXCIpXG4gICAgY29uc3QgbHZsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLTJcIilcbiAgICBjb25zdCBsdmwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtM1wiKVxuICAgIGNvbnN0IGx2bFVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtdXBcIilcbiAgICBjb25zdCBiZXRXaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJldC13aW5cIilcbiAgICBjb25zdCBiZXRDbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmV0LWNsZWFyXCIpXG4gICAgY29uc3QgYnRuTG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWxvY2tcIilcbiAgICBjb25zdCBkYXJrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKVxuXG4gICAgYmV0V2luLnRleHRDb250ZW50ID0gYHdpbiBiZXQ6ICR7YmV0V2luQ291bnRlcn1gXG5cbiAgICBiZXRXaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBiZXRXaW5Db3VudGVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikpIDogMFxuICAgICAgICBiZXRXaW5Db3VudGVyID0gYmV0V2luQ291bnRlciArIDFcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJldFdpbkNvdW50ZXJcIiwgYmV0V2luQ291bnRlcilcbiAgICAgICAgYmV0V2luLnRleHRDb250ZW50ID0gYHdpbiBiZXQ6ICR7YmV0V2luQ291bnRlcn1gXG4gICAgICAgIC8vIHJlZnJlc2hMdmwoY3VycmVudEx2bClcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuXG5cbiAgICB9KVxuXG4gICAgYmV0Q2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmV0V2luQ291bnRlclwiKVxuICAgICAgICBiZXRXaW5Db3VudGVyID0gMFxuICAgICAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogMGBcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjFcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIC8vIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKVxuXG4gICAgfSlcblxuICAgIGx2bDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjFcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcbiAgICBsdmwyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIyXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG4gICAgbHZsMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiM1wiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuXG4gICAgbHZsVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBsdmxTdGF0dXMgPSAhbHZsU3RhdHVzXG4gICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgbHZsU3RhdHVzID0gIWx2bFN0YXR1c1xuXG4gICAgfSlcblxuICAgIGJ0bkxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fdGFibGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcIl9sb2NrXCIpXG4gICAgfSlcblxuICAgIGRhcmtCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgfSlcblxufSkoKVxuXG4iXX0=
