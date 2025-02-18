"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
  // const apiURL = 'https://fav-prom.com/api_vip',
  var apiURL = 'https://fav-prom.com/api_mountain_king',
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
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = true;
  var i18nData = {};
  var translateState = false;
  var userId;
  // userId = 100300268;
  userId = 100856888;
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
        renderUsers(users);
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
    var groupedByDate = users.reduce(function (acc, user) {
      var date = user.date.split("T")[0];
      acc[date] = acc[date] || [];
      acc[date].push(user);
      return acc;
    }, {});
    var dates = Object.keys(groupedByDate).sort(function (a, b) {
      return new Date(b) - new Date(a);
    });
    var activeDate = dates[0];
    var updateActiveDate = function updateActiveDate(date) {
      activeDate = date;
      document.querySelectorAll(".result__table-nav-item").forEach(function (el) {
        el.classList.toggle("_active", el.dataset.date === date);
      });
      var currentUsers = groupedByDate[date] || [];
      var currentUser = userId && currentUsers.find(function (user) {
        return user.userid === userId;
      });
      var topUsers = currentUsers.slice(0, 4);
      if (currentUser) {
        var currentUserIndex = currentUsers.indexOf(currentUser);
        topUsers = [].concat(_toConsumableArray(topUsers), [currentUser]);
        populateUsersTable(topUsers, userId, resultsTable, currentUsers, currentUserIndex);
      } else {
        populateUsersTable(topUsers, userId, resultsTable, currentUsers, 4);
      }
    };
    var navContainer = document.querySelector(".result__table-nav");
    navContainer.innerHTML = dates.map(function (date, index) {
      return "\n        <div class=\"result__table-nav-item ".concat(index === 0 ? "_active" : "", "\" data-date=\"").concat(date, "\">\n            ").concat(new Date(date).toLocaleDateString("uk-UA", {
        day: "2-digit",
        month: "2-digit"
      }), "\n        </div>\n    ");
    }).join("");
    navContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("result__table-nav-item")) {
        updateActiveDate(event.target.dataset.date);
      }
    });
    updateActiveDate(activeDate);
  };
  function populateUsersTable(users, currentUserId, table, allUsers, userIndex) {
    table.innerHTML = '';
    var currentUser = users[users.length - 1];
    var createRow = function createRow(columns) {
      var row = document.createElement("div");
      row.classList.add("table__row");
      row.style.setProperty("--columns", columns);
      return row;
    };
    var createUserBlock = function createUserBlock(user) {
      var extraClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var place = arguments.length > 2 ? arguments[2] : undefined;
      var block = document.createElement("div");
      if (extraClass) {
        block.classList.add("table__block", extraClass);
      } else {
        block.classList.add("table__block");
      }
      var icon = document.createElement("div");
      icon.classList.add("table__block-icon");
      var img = document.createElement("img");
      img.src = "./img/table/icon.png";
      img.alt = "Favbet";
      icon.appendChild(img);
      block.appendChild(icon);
      if (user) {
        var info = document.createElement("div");
        info.classList.add("table__block-info");
        info.innerHTML = "\n                <div class=\"table__block-place\">".concat(place, "</div>\n                <div class=\"table__block-id\">id ").concat(user.userid, "</div>\n            ");
        block.appendChild(info);
        var bets = document.createElement("div");
        bets.classList.add("table__info-bets");
        bets.innerHTML = "\n                <div class=\"table__info-bets-counter\">".concat(user.bets, "</div>\n                <div class=\"table__info-bets-text\" data-translate=\"bonusBets\">\u0432\u0438\u0433\u0440\u0430\u0448\u043D\u0456 \u0441\u0442\u0430\u0432\u043A\u0438</div>\n            ");
        block.appendChild(bets);
      }
      return block;
    };
    if (users && users.length) {
      var row1 = createRow(1);
      row1.appendChild(createUserBlock(users[0], "_first", 1));
      table.appendChild(row1);
      var row2 = createRow(2);
      row2.appendChild(createUserBlock(users[1], "_second", 2));
      row2.appendChild(createUserBlock(users[2], "_second", 3));
      table.appendChild(row2);
      var row3 = createRow(3);
      if (userId) {
        row3.appendChild(createUserBlock(null));
        row3.appendChild(createUserBlock(currentUser, "you", userIndex));
        row3.appendChild(createUserBlock(null));
        table.appendChild(row3);
      } else {
        row3.appendChild(createUserBlock(null));
        row3.appendChild(createUserBlock(users[3], "you", userIndex));
        row3.appendChild(createUserBlock(null));
        table.appendChild(row3);
      }
      var row4 = createRow(4);
      for (var i = 0; i < 4; i++) {
        row4.appendChild(createUserBlock(null));
      }
      table.appendChild(row4);
      checkPlaceLength();
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

  // console.log(idArr)

  function checkPlaceLength() {
    var userPlace = document.querySelector(".you"),
      userTablePlace = userPlace.querySelector(".table__block-place");
    var idArr = userTablePlace.textContent.split("");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY2FzZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRCdG4iLCJxdWVyeVNlbGVjdG9yIiwibGV2ZWxzIiwicHJvZ3Jlc3NQb3B1cCIsInByb2dyZXNzUG9wdXBCdG4iLCJwcm9ncmVzc1BvcHVwQ2xvc2UiLCJ1cGRQb3B1cCIsInVwZFBvcHVwQnRuIiwidXBkUG9wdXBDbG9zZSIsInJlc3VsdFBvcHVwIiwicmVzdWx0UG9wdXBCdG4iLCJyZXN1bHRQb3B1cEJ0bkNsb3NlIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsIm1haW5QYWdlIiwicmVzdWx0c1RhYmxlIiwiY3VycmVudEx2bCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIk51bWJlciIsImx2bFN0YXR1cyIsImNoZWNrU3RhdHVzIiwiYmV0V2luQ291bnRlciIsImxvY2FsZSIsInVrTGVuZyIsImVuTGVuZyIsImRlYnVnIiwiaTE4bkRhdGEiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsImdldERhdGEiLCJQcm9taXNlIiwiYWxsIiwicmVxdWVzdCIsImluaXQiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJjaGVja1VzZXJBdXRoIiwicmVmcmVzaENhc2VzIiwidGhlbiIsInJlcyIsInVzZXJzIiwic29ydCIsImEiLCJiIiwicG9pbnRzIiwiYyIsImkiLCJzZXRJbnRlcnZhbCIsImdfdXNlcl9pZCIsImNsZWFySW50ZXJ2YWwiLCJyZW5kZXJVc2VycyIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwidXNlcmlkIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJ0cmFuc2xhdGVLZXkiLCJkZWZhdWx0VmFsIiwiZGlzcGxheVVzZXJJbmZvIiwidXNlckluZm8iLCJiZXRzIiwic2xpY2UiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImxvY2FsRGF0ZSIsIkRhdGUiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsInVuYXV0aE1lcyIsInBhcnRpY2lwYXRlQnRuIiwicmVzb2x2ZSIsImdyb3VwZWRCeURhdGUiLCJyZWR1Y2UiLCJhY2MiLCJ1c2VyIiwic3BsaXQiLCJwdXNoIiwiZGF0ZXMiLCJPYmplY3QiLCJrZXlzIiwiYWN0aXZlRGF0ZSIsInVwZGF0ZUFjdGl2ZURhdGUiLCJlbCIsInRvZ2dsZSIsImRhdGFzZXQiLCJjdXJyZW50VXNlcnMiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ0b3BVc2VycyIsImN1cnJlbnRVc2VySW5kZXgiLCJpbmRleE9mIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwibmF2Q29udGFpbmVyIiwibWFwIiwiaW5kZXgiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJqb2luIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJjdXJyZW50VXNlcklkIiwidGFibGUiLCJhbGxVc2VycyIsInVzZXJJbmRleCIsImNyZWF0ZVJvdyIsImNvbHVtbnMiLCJyb3ciLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNyZWF0ZVVzZXJCbG9jayIsImV4dHJhQ2xhc3MiLCJwbGFjZSIsImJsb2NrIiwiaWNvbiIsImltZyIsInNyYyIsImFsdCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJvdzEiLCJyb3cyIiwicm93MyIsInJvdzQiLCJjaGVja1BsYWNlTGVuZ3RoIiwiYWN0aXZlTHZsIiwiY29uZGl0aW9ucyIsImJldCIsImx2bCIsInJlZnJlc2hMdmwiLCJib3giLCJhY3RpdmVJbmRleCIsInByZXZJbmRleCIsIm5leHRJbmRleCIsImx2bFVwIiwic2V0SXRlbSIsInVzZXJQbGFjZSIsInVzZXJUYWJsZVBsYWNlIiwiaWRBcnIiLCJ0ZXh0Q29udGVudCIsIm9wZW5DYXNlQW5pbSIsInNldFRpbWVvdXQiLCJzZXRQb3B1cCIsImJ0bk9wZW4iLCJidG5DbG9zZSIsInBvcHVwIiwiaGlkZSIsInBhcmVudE5vZGUiLCJvcGFjaXR5IiwiZSIsInN0YXJ0Q291bnRkb3duIiwiZW5kVGltZSIsImhvdXJzRWxzIiwibWludXRlc0VscyIsInNlY29uZHNFbHMiLCJ1cGRhdGVUaW1lciIsIm5vdyIsImdldFRpbWUiLCJ0aW1lTGVmdCIsInRpbWVySW50ZXJ2YWwiLCJ1cGRhdGVEaWdpdHMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiZWxlbWVudHMiLCJ2YWx1ZSIsImVuZE9mRGF5IiwiZ2V0RnVsbFllYXIiLCJsdmwxIiwibHZsMiIsImx2bDMiLCJsdmxVcEJ0biIsImJldFdpbiIsImJldENsZWFyIiwiYnRuTG9jayIsImRhcmtCdG4iLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsWUFBVztFQUNSO0VBQ0E7RUFDQSxJQUFNQSxNQUFNLEdBQUcsd0NBQXdDO0lBQ25EQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7SUFDdkRDLE1BQU0sR0FB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T0FBTyxFQUFFLFlBQUs7SUFDaEM1SCxjQUFjLENBQUNtSyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQztJQUN6Q2pKLE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0VBQzVCLENBQUMsQ0FBQztFQUVGUCxRQUFRLENBQUMzRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNwQ3pILFNBQVMsR0FBRyxDQUFDQSxTQUFTO0lBQ3RCQyxXQUFXLEVBQUU7SUFDYkQsU0FBUyxHQUFHLENBQUNBLFNBQVM7RUFFMUIsQ0FBQyxDQUFDO0VBRUZ1TSxPQUFPLENBQUM5RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNuQ2hKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUNrRSxTQUFTLENBQUM2RCxNQUFNLENBQUMsT0FBTyxDQUFDO0VBQ3RFLENBQUMsQ0FBQztFQUVGNkYsT0FBTyxDQUFDL0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDbkNoSixRQUFRLENBQUNnRSxJQUFJLENBQUNLLFNBQVMsQ0FBQzZELE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDMUMsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgLy8gY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9tb3VudGFpbl9raW5nJ1xuICAgIC8vIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfdmlwJyxcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX21vdW50YWluX2tpbmcnLFxuICAgICAgICBjYXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9udXNfX2JveGVzLWl0ZW1cIiksXG4gICAgICAgIGdldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2V0LWJ0blwiKSxcbiAgICAgICAgbGV2ZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib251c19fcHJvZ3Jlc3MtbHZsXCIpLFxuICAgICAgICBwcm9ncmVzc1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3MtcG9wdXBcIiksXG4gICAgICAgIHByb2dyZXNzUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy10aXRsZS1idG5cIiksXG4gICAgICAgIHByb2dyZXNzUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXBvcHVwLWNsb3NlXCIpLFxuICAgICAgICB1cGRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3dhcm5pbmdcIiksXG4gICAgICAgIHVwZFBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fdXBkLWJ0blwiKSxcbiAgICAgICAgdXBkUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3dhcm5pbmctY2xvc2VcIiksXG4gICAgICAgIHJlc3VsdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3N1YnRpdGxlLXBvcHVwXCIpLFxuICAgICAgICByZXN1bHRQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19zdWJ0aXRsZS1idG5cIiksXG4gICAgICAgIHJlc3VsdFBvcHVwQnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fc3VidGl0bGUtcG9wdXAtY2xvc2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZVwiKTtcblxuICAgIGxldCBjdXJyZW50THZsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMdmxcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMdmxcIikpIDogMVxuXG4gICAgbGV0IGx2bFN0YXR1cyA9IGNoZWNrU3RhdHVzKCk7XG4gICAgbGV0IGJldFdpbkNvdW50ZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSkgOiAwXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIDogXCJ1a1wiXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZTtcbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IGZhbHNlO1xuICAgIGxldCB1c2VySWQ7XG4gICAgLy8gdXNlcklkID0gMTAwMzAwMjY4O1xuICAgIHVzZXJJZCA9IDEwMDg1Njg4ODtcblxuICAgIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICByZXF1ZXN0KCcvdXNlcnM/bm9jYWNoZT0xJyksXG4gICAgICAgIF0pXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgICAgICByZWZyZXNoQ2FzZXMoY3VycmVudEx2bClcbiAgICAgICAgICAgIGdldERhdGEoKS50aGVuKHJlcyA9PntcbiAgICAgICAgICAgICAgICBsZXQgdXNlcnMgPSByZXNbMF0uc29ydCgoYSwgYikgPT4gYi5wb2ludHMgLSBhLnBvaW50cyk7XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyVXNlcnModXNlcnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgICAgICByZWZyZXNoQ2FzZXMoY3VycmVudEx2bClcbiAgICAgICAgICAgIGdldERhdGEoKS50aGVuKHJlcyA9PntcbiAgICAgICAgICAgICAgICBsZXQgdXNlcnMgPSByZXNbMF0uc29ydCgoYSwgYikgPT4gYi5wb2ludHMgLSBhLnBvaW50cyk7XG4gICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModXNlcnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbCkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWwgfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VySW5mbyh1c2VySW5mbykge1xuICAgICAgICBjb25zdCBiZXRzID0gdXNlckluZm8uYmV0cy5zbGljZSgwLCAxMCk7XG4gICAgICAgIC8vIGxldCBiZXRzID0gW3tiZXREYXRlOiBuZXcgRGF0ZSgpLCBzdGF0dXM6ICd1bmRlZmluZWQnfV1cbiAgICAgICAgLy8gcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbyk7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbykge1xuICAgIC8vICAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdF9fbGFzdC11cGQnKTtcbiAgICAvLyAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0VXBkJyk7XG4gICAgLy8gICAgIGlmICh1c2VySW5mby5sYXN0VXBkYXRlKSB7XG4gICAgLy8gICAgICAgICBzcGFuLmlubmVySFRNTCA9IGZvcm1hdERhdGUodXNlckluZm8ubGFzdFVwZGF0ZSk7XG4gICAgLy8gICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjb25zdCBkYXkgPSBTdHJpbmcobG9jYWxEYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcobG9jYWxEYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBob3VycyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRofSAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGdldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVXNlcnMgPSAodXNlcnMpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBlZEJ5RGF0ZSA9IHVzZXJzLnJlZHVjZSgoYWNjLCB1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gdXNlci5kYXRlLnNwbGl0KFwiVFwiKVswXTtcbiAgICAgICAgICAgIGFjY1tkYXRlXSA9IGFjY1tkYXRlXSB8fCBbXTtcbiAgICAgICAgICAgIGFjY1tkYXRlXS5wdXNoKHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuICAgICAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5rZXlzKGdyb3VwZWRCeURhdGUpLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIpIC0gbmV3IERhdGUoYSkpO1xuICAgICAgICBsZXQgYWN0aXZlRGF0ZSA9IGRhdGVzWzBdO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgYWN0aXZlRGF0ZSA9IGRhdGU7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0X190YWJsZS1uYXYtaXRlbVwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJfYWN0aXZlXCIsIGVsLmRhdGFzZXQuZGF0ZSA9PT0gZGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VycyA9IGdyb3VwZWRCeURhdGVbZGF0ZV0gfHwgW107XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJJZCAmJiBjdXJyZW50VXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAgICAgbGV0IHRvcFVzZXJzID0gY3VycmVudFVzZXJzLnNsaWNlKDAsIDQpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJbmRleCA9IGN1cnJlbnRVc2Vycy5pbmRleE9mKGN1cnJlbnRVc2VyKTtcbiAgICAgICAgICAgICAgICB0b3BVc2VycyA9IFsuLi50b3BVc2VycywgY3VycmVudFVzZXJdO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGUsIGN1cnJlbnRVc2VycywgY3VycmVudFVzZXJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGUsIGN1cnJlbnRVc2VycywgNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3RhYmxlLW5hdlwiKTtcbiAgICAgICAgbmF2Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGVzLm1hcCgoZGF0ZSwgaW5kZXgpID0+IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdF9fdGFibGUtbmF2LWl0ZW0gJHtpbmRleCA9PT0gMCA/IFwiX2FjdGl2ZVwiIDogXCJcIn1cIiBkYXRhLWRhdGU9XCIke2RhdGV9XCI+XG4gICAgICAgICAgICAke25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcInVrLVVBXCIsIHsgZGF5OiBcIjItZGlnaXRcIiwgbW9udGg6IFwiMi1kaWdpdFwiIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICBgKS5qb2luKFwiXCIpO1xuXG4gICAgICAgIG5hdkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlc3VsdF9fdGFibGUtbmF2LWl0ZW1cIikpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVBY3RpdmVEYXRlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVBY3RpdmVEYXRlKGFjdGl2ZURhdGUpO1xuICAgIH07XG5cblxuXG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHRhYmxlLCBhbGxVc2VycywgdXNlckluZGV4KSB7XG4gICAgICAgIHRhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsZXQgY3VycmVudFVzZXIgPSB1c2Vyc1t1c2Vycy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zdCBjcmVhdGVSb3cgPSAoY29sdW1ucykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3Jvd1wiKTtcbiAgICAgICAgICAgIHJvdy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sdW1uc1wiLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBjcmVhdGVVc2VyQmxvY2sgPSAodXNlciwgZXh0cmFDbGFzcyA9IFwiXCIsIHBsYWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpZihleHRyYUNsYXNzKXtcbiAgICAgICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2Jsb2NrXCIsIGV4dHJhQ2xhc3MpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInRhYmxlX19ibG9ja1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYmxvY2staWNvblwiKTtcblxuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBcIi4vaW1nL3RhYmxlL2ljb24ucG5nXCI7XG4gICAgICAgICAgICBpbWcuYWx0ID0gXCJGYXZiZXRcIjtcbiAgICAgICAgICAgIGljb24uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZChcInRhYmxlX19ibG9jay1pbmZvXCIpO1xuICAgICAgICAgICAgICAgIGluZm8uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYmxvY2stcGxhY2VcIj4ke3BsYWNlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYmxvY2staWRcIj5pZCAke3VzZXIudXNlcmlkfTwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJldHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGJldHMuY2xhc3NMaXN0LmFkZChcInRhYmxlX19pbmZvLWJldHNcIik7XG4gICAgICAgICAgICAgICAgYmV0cy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19pbmZvLWJldHMtY291bnRlclwiPiR7dXNlci5iZXRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9faW5mby1iZXRzLXRleHRcIiBkYXRhLXRyYW5zbGF0ZT1cImJvbnVzQmV0c1wiPtCy0LjQs9GA0LDRiNC90ZYg0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKGJldHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh1c2VycyAmJiB1c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdzEgPSBjcmVhdGVSb3coMSk7XG4gICAgICAgICAgICByb3cxLmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJCbG9jayh1c2Vyc1swXSwgXCJfZmlyc3RcIiwgMSkpO1xuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93MSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvdzIgPSBjcmVhdGVSb3coMik7XG4gICAgICAgICAgICByb3cyLmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJCbG9jayh1c2Vyc1sxXSwgXCJfc2Vjb25kXCIsIDIpKTtcbiAgICAgICAgICAgIHJvdzIuYXBwZW5kQ2hpbGQoY3JlYXRlVXNlckJsb2NrKHVzZXJzWzJdLCBcIl9zZWNvbmRcIiwgMykpO1xuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93Mik7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvdzMgPSBjcmVhdGVSb3coMyk7XG4gICAgICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgICAgIHJvdzMuYXBwZW5kQ2hpbGQoY3JlYXRlVXNlckJsb2NrKG51bGwpKTtcbiAgICAgICAgICAgICAgICByb3czLmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJCbG9jayhjdXJyZW50VXNlciwgXCJ5b3VcIiwgdXNlckluZGV4KSk7XG4gICAgICAgICAgICAgICAgcm93My5hcHBlbmRDaGlsZChjcmVhdGVVc2VyQmxvY2sobnVsbCkpO1xuICAgICAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdzMpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcm93My5hcHBlbmRDaGlsZChjcmVhdGVVc2VyQmxvY2sobnVsbCkpO1xuICAgICAgICAgICAgICAgIHJvdzMuYXBwZW5kQ2hpbGQoY3JlYXRlVXNlckJsb2NrKHVzZXJzWzNdLCBcInlvdVwiLCB1c2VySW5kZXgpKTtcbiAgICAgICAgICAgICAgICByb3czLmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJCbG9jayhudWxsKSk7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93Myk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgY29uc3Qgcm93NCA9IGNyZWF0ZVJvdyg0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcm93NC5hcHBlbmRDaGlsZChjcmVhdGVVc2VyQmxvY2sobnVsbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93NCk7XG4gICAgICAgICAgICBjaGVja1BsYWNlTGVuZ3RoKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrU3RhdHVzKCkge1xuICAgICAgICBiZXRXaW5Db3VudGVyIDwgNiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X190YWJsZVwiKS5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIikgOiBudWxsXG4gICAgICAgIGNvbnN0IGFjdGl2ZUx2bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLWx2bC5fYWN0aXZlXCIpO1xuICAgICAgICBjb25zdCBjb25kaXRpb25zID0ge1xuICAgICAgICAgICAgYmV0OiB7XG4gICAgICAgICAgICAgICAgMTogYmV0V2luQ291bnRlciA+IDEsXG4gICAgICAgICAgICAgICAgMjogYmV0V2luQ291bnRlciA+IDMsXG4gICAgICAgICAgICAgICAgMzogYmV0V2luQ291bnRlciA+IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbHZsOiB7XG4gICAgICAgICAgICAgICAgMTogY3VycmVudEx2bCA9PT0gMSxcbiAgICAgICAgICAgICAgICAyOiBjdXJyZW50THZsID09PSAyLFxuICAgICAgICAgICAgICAgIDM6IGN1cnJlbnRMdmwgPT09IDMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgaWYgKGNvbmRpdGlvbnMuYmV0W2N1cnJlbnRMdmxdICYmIGNvbmRpdGlvbnMubHZsW2N1cnJlbnRMdmxdKSB7XG4gICAgICAgICAgICBsdmxTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpO1xuICAgICAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUx2bCkgYWN0aXZlTHZsLmNsYXNzTGlzdC5hZGQoXCJfdXBcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBsdmxTdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgbHZsU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpe1xuICAgICAgICBsZXZlbHMuZm9yRWFjaCgobHZsLCBpKSA9PntcbiAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfZG9uZVwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdXBcIilcbiAgICAgICAgICAgIGlmKCsraSA9PT0gY3VycmVudEx2bCkge1xuICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKVxuXG4gICAgICAgICAgICAgICAgaWYgKGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3VwXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDEgJiYgYmV0V2luQ291bnRlciA8PSAwICYmIGx2bFN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDEgJiYgYmV0V2luQ291bnRlciA8PSAwICYmIGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAyICYmIGJldFdpbkNvdW50ZXIgPD0gMiAmJiBsdmxTdGF0dXMgPT09IGZhbHNlICl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMiAmJiBiZXRXaW5Db3VudGVyIDw9IDIgJiYgbHZsU3RhdHVzID09PSB0cnVlICl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAzICYmIGJldFdpbkNvdW50ZXIgPD0gNCAmJiBsdmxTdGF0dXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAzICYmIGJldFdpbkNvdW50ZXIgPD0gNCAmJiBsdmxTdGF0dXMgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkgPCBjdXJyZW50THZsLCBpICwgY3VycmVudEx2bCwgbHZsKVxuICAgICAgICAgICAgaSA8IGN1cnJlbnRMdmwgPyBsdmwuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpIDogbnVsbFxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpIHtcbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIiwgXCJfbGVmdFwiLCBcIl9yaWdodFwiLCBcIl9sb2NrXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWN0aXZlSW5kZXggPSBjdXJyZW50THZsIC0gMTtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID49IGNhc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBjYXNlcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByZXZJbmRleCA9IGFjdGl2ZUluZGV4IC0gMSA8IDAgPyBjYXNlcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggKyAxID49IGNhc2VzLmxlbmd0aCA/IDAgOiBhY3RpdmVJbmRleCArIDE7XG5cbiAgICAgICAgY2FzZXNbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpO1xuICAgICAgICBjYXNlc1twcmV2SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfbGVmdFwiKTtcbiAgICAgICAgY2FzZXNbbmV4dEluZGV4XS5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpO1xuXG4gICAgICAgIGNhc2VzLmZvckVhY2goKGJveCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gbHZsVXAoKXtcbiAgICAgICAgY3VycmVudEx2bCA9IGN1cnJlbnRMdmwgKyAxXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIGAke2N1cnJlbnRMdmx9YClcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICByZXR1cm4gbHZsU3RhdHVzXG4gICAgfVxuXG4gICAgLy8gY2hlY2tTdGF0dXMoKVxuXG5cblxuLy8gY29uc29sZS5sb2coaWRBcnIpXG5cbiAgICBmdW5jdGlvbiBjaGVja1BsYWNlTGVuZ3RoKCl7XG4gICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueW91XCIpLFxuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UgPSB1c2VyUGxhY2UucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fYmxvY2stcGxhY2VcIik7XG5cbiAgICAgICAgbGV0IGlkQXJyID0gdXNlclRhYmxlUGxhY2UudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ19vbmUnKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gMil7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfdHdvJylcbiAgICAgICAgfVxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDMpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX3RocmVlJylcbiAgICAgICAgfVxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDQpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX2ZvdXInKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSA1KXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ19maXZlJylcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBvcGVuQ2FzZUFuaW0oYm94KXtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaGFrZVwiKVxuICAgICAgICBib3gucXVlcnlTZWxlY3RvcihcIi5ib3hfX2NhcFwiKS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKVxuICAgICAgICBnZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBib3gucXVlcnlTZWxlY3RvcihcIi5ib3hfX2NhcC1mcm9udFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICB9LCAzMDApXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9zaG93XCIpXG4gICAgICAgIH0sIDE1MClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGx2bFVwKClcbiAgICAgICAgICAgIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKVxuICAgICAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICB9LCA0MDAwKVxuICAgIH1cblxuXG5cblxuICAgIGdldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+e1xuICAgICAgICAgICAgaWYoYm94LmNsYXNzTGlzdC5jb250YWlucyhcIl9hY3RpdmVcIikpe1xuICAgICAgICAgICAgICAgIG9wZW5DYXNlQW5pbShib3gpXG4gICAgICAgICAgICAgICAgLy8gZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICAgICAgICAgIC8vIGNoZWNrU3RhdHVzKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfSlcblxuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXAoYnRuT3BlbiwgYnRuQ2xvc2UsIHBvcHVwLCBoaWRlKXtcbiAgICAgICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgaWYoaGlkZSl7XG4gICAgICAgICAgICAgICAgYnRuT3Blbi5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZihidG5DbG9zZSl7XG4gICAgICAgICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICBpZihoaWRlKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuT3Blbi5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgIGlmKCFwb3B1cC5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQgIT09IGJ0bk9wZW4pe1xuICAgICAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICBpZihoaWRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk9wZW4ucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldFBvcHVwKHByb2dyZXNzUG9wdXBCdG4sIHByb2dyZXNzUG9wdXBDbG9zZSwgcHJvZ3Jlc3NQb3B1cClcbiAgICBzZXRQb3B1cCh1cGRQb3B1cEJ0biwgdXBkUG9wdXBDbG9zZSwgdXBkUG9wdXAsIHRydWUpXG4gICAgc2V0UG9wdXAocmVzdWx0UG9wdXBCdG4sIHJlc3VsdFBvcHVwQnRuQ2xvc2UsIHJlc3VsdFBvcHVwLCB0cnVlKVxuXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oZW5kVGltZSkge1xuICAgICAgICBjb25zdCBob3Vyc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX2hvdXJzLWl0ZW1cIik7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyX19taW51dGVzLWl0ZW1cIik7XG4gICAgICAgIGNvbnN0IHNlY29uZHNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyX19zZWNvbmRzLWl0ZW1cIik7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVGltZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gZW5kVGltZSAtIG5vdztcblxuICAgICAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhob3Vyc0VscywgXCIwMFwiKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgXCIwMFwiKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoc2Vjb25kc0VscywgXCIwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjApKSAlIDYwKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvIDEwMDApICUgNjApO1xuXG4gICAgICAgICAgICB1cGRhdGVEaWdpdHMoaG91cnNFbHMsIFN0cmluZyhob3VycykucGFkU3RhcnQoMiwgXCIwXCIpKTtcbiAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhtaW51dGVzRWxzLCBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgXCIwXCIpKTtcbiAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhzZWNvbmRzRWxzLCBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURpZ2l0cyhlbGVtZW50cywgdmFsdWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzWzBdLnRleHRDb250ZW50ID0gdmFsdWVbMF07XG4gICAgICAgICAgICBlbGVtZW50c1sxXS50ZXh0Q29udGVudCA9IHZhbHVlWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGltZXIoKTtcbiAgICAgICAgY29uc3QgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGVuZE9mRGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpLCAyMywgNTksIDU5KS5nZXRUaW1lKCk7XG5cbiAgICBzdGFydENvdW50ZG93bihlbmRPZkRheSk7XG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1sdmxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC1tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcbiAgICB9KVxuXG4gICAgY29uc3QgbHZsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLTFcIilcbiAgICBjb25zdCBsdmwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtMlwiKVxuICAgIGNvbnN0IGx2bDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC0zXCIpXG4gICAgY29uc3QgbHZsVXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC11cFwiKVxuICAgIGNvbnN0IGJldFdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmV0LXdpblwiKVxuICAgIGNvbnN0IGJldENsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZXQtY2xlYXJcIilcbiAgICBjb25zdCBidG5Mb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbG9ja1wiKVxuICAgIGNvbnN0IGRhcmtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmstYnRuXCIpXG5cbiAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogJHtiZXRXaW5Db3VudGVyfWBcblxuICAgIGJldFdpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGJldFdpbkNvdW50ZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSkgOiAwXG4gICAgICAgIGJldFdpbkNvdW50ZXIgPSBiZXRXaW5Db3VudGVyICsgMVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmV0V2luQ291bnRlclwiLCBiZXRXaW5Db3VudGVyKVxuICAgICAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogJHtiZXRXaW5Db3VudGVyfWBcbiAgICAgICAgLy8gcmVmcmVzaEx2bChjdXJyZW50THZsKVxuICAgICAgICBjaGVja1N0YXR1cygpXG5cblxuICAgIH0pXG5cbiAgICBiZXRDbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpXG4gICAgICAgIGJldFdpbkNvdW50ZXIgPSAwXG4gICAgICAgIGJldFdpbi50ZXh0Q29udGVudCA9IGB3aW4gYmV0OiAwYFxuICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiMVwiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgLy8gcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpXG5cbiAgICB9KVxuXG4gICAgbHZsMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiMVwiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuICAgIGx2bDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjJcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcbiAgICBsdmwzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIzXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG5cbiAgICBsdmxVcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGx2bFN0YXR1cyA9ICFsdmxTdGF0dXNcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICBsdmxTdGF0dXMgPSAhbHZsU3RhdHVzXG5cbiAgICB9KVxuXG4gICAgYnRuTG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X190YWJsZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiX2xvY2tcIilcbiAgICB9KVxuXG4gICAgZGFya0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgICB9KVxuXG59KSgpXG5cbiJdfQ==
