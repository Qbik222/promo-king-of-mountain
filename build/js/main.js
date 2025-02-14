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
  var apiURL = 'https://fav-prom.com/api_champ_ro',
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
  var locale = sessionStorage.getItem("locale") ? sessionStorage.getItem("locale") : "ro";

  // if (ukLeng) locale = 'uk';
  // if (enLeng) locale = 'en';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY2FzZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRCdG4iLCJxdWVyeVNlbGVjdG9yIiwibGV2ZWxzIiwicHJvZ3Jlc3NQb3B1cCIsInByb2dyZXNzUG9wdXBCdG4iLCJwcm9ncmVzc1BvcHVwQ2xvc2UiLCJ1cGRQb3B1cCIsInVwZFBvcHVwQnRuIiwidXBkUG9wdXBDbG9zZSIsInJlc3VsdFBvcHVwIiwicmVzdWx0UG9wdXBCdG4iLCJyZXN1bHRQb3B1cEJ0bkNsb3NlIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsIm1haW5QYWdlIiwicmVzdWx0c1RhYmxlIiwiY3VycmVudEx2bCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIk51bWJlciIsImx2bFN0YXR1cyIsImNoZWNrU3RhdHVzIiwiYmV0V2luQ291bnRlciIsImxvY2FsZSIsImRlYnVnIiwiaTE4bkRhdGEiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsImdldERhdGEiLCJQcm9taXNlIiwiYWxsIiwicmVxdWVzdCIsImluaXQiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJjaGVja1VzZXJBdXRoIiwicmVmcmVzaENhc2VzIiwidGhlbiIsInJlcyIsInVzZXJzIiwic29ydCIsImEiLCJiIiwicG9pbnRzIiwiYyIsImkiLCJzZXRJbnRlcnZhbCIsImdfdXNlcl9pZCIsImNsZWFySW50ZXJ2YWwiLCJyZW5kZXJVc2VycyIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwidXNlcmlkIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJ0cmFuc2xhdGVLZXkiLCJkZWZhdWx0VmFsIiwiZGlzcGxheVVzZXJJbmZvIiwidXNlckluZm8iLCJiZXRzIiwic2xpY2UiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImxvY2FsRGF0ZSIsIkRhdGUiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsInVuYXV0aE1lcyIsInBhcnRpY2lwYXRlQnRuIiwicmVzb2x2ZSIsImdyb3VwZWRCeURhdGUiLCJyZWR1Y2UiLCJhY2MiLCJ1c2VyIiwic3BsaXQiLCJwdXNoIiwiZGF0ZXMiLCJPYmplY3QiLCJrZXlzIiwiYWN0aXZlRGF0ZSIsInVwZGF0ZUFjdGl2ZURhdGUiLCJlbCIsInRvZ2dsZSIsImRhdGFzZXQiLCJjdXJyZW50VXNlcnMiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ0b3BVc2VycyIsImN1cnJlbnRVc2VySW5kZXgiLCJpbmRleE9mIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwibmF2Q29udGFpbmVyIiwibWFwIiwiaW5kZXgiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJqb2luIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJjdXJyZW50VXNlcklkIiwidGFibGUiLCJhbGxVc2VycyIsInVzZXJJbmRleCIsImNyZWF0ZVJvdyIsImNvbHVtbnMiLCJyb3ciLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNyZWF0ZVVzZXJCbG9jayIsImV4dHJhQ2xhc3MiLCJwbGFjZSIsImJsb2NrIiwiaWNvbiIsImltZyIsInNyYyIsImFsdCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJvdzEiLCJyb3cyIiwicm93MyIsInJvdzQiLCJjaGVja1BsYWNlTGVuZ3RoIiwiYWN0aXZlTHZsIiwiY29uZGl0aW9ucyIsImJldCIsImx2bCIsInJlZnJlc2hMdmwiLCJib3giLCJhY3RpdmVJbmRleCIsInByZXZJbmRleCIsIm5leHRJbmRleCIsImx2bFVwIiwic2V0SXRlbSIsInVzZXJQbGFjZSIsInVzZXJUYWJsZVBsYWNlIiwiaWRBcnIiLCJ0ZXh0Q29udGVudCIsIm9wZW5DYXNlQW5pbSIsInNldFRpbWVvdXQiLCJzZXRQb3B1cCIsImJ0bk9wZW4iLCJidG5DbG9zZSIsInBvcHVwIiwiaGlkZSIsInBhcmVudE5vZGUiLCJvcGFjaXR5IiwiZSIsInN0YXJ0Q291bnRkb3duIiwiZW5kVGltZSIsImhvdXJzRWxzIiwibWludXRlc0VscyIsInNlY29uZHNFbHMiLCJ1cGRhdGVUaW1lciIsIm5vdyIsImdldFRpbWUiLCJ0aW1lTGVmdCIsInRpbWVySW50ZXJ2YWwiLCJ1cGRhdGVEaWdpdHMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiZWxlbWVudHMiLCJ2YWx1ZSIsImVuZE9mRGF5IiwiZ2V0RnVsbFllYXIiLCJsdmwxIiwibHZsMiIsImx2bDMiLCJsdmxVcEJ0biIsImJldFdpbiIsImJldENsZWFyIiwiYnRuTG9jayIsImRhcmtCdG4iLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsWUFBVztFQUNSO0VBQ0E7RUFDQSxJQUFNQSxNQUFNLEdBQUcsbUNBQW1DO0lBQzlDQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7SUFDdkRDLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFh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UztJQUN0QkMsV0FBVyxFQUFFO0lBQ2JELFNBQVMsR0FBRyxDQUFDQSxTQUFTO0VBRTFCLENBQUMsQ0FBQztFQUVGcU0sT0FBTyxDQUFDOUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDbkM5SSxRQUFRLENBQUNHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDZ0UsU0FBUyxDQUFDNkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztFQUN0RSxDQUFDLENBQUM7RUFFRjZGLE9BQU8sQ0FBQy9FLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ25DOUksUUFBUSxDQUFDOEQsSUFBSSxDQUFDSyxTQUFTLENBQUM2RCxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQzFDLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfbW91bnRhaW5fa2luZydcbiAgICAvLyBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3ZpcCcsXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jaGFtcF9ybycsXG4gICAgICAgIGNhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib251c19fYm94ZXMtaXRlbVwiKSxcbiAgICAgICAgZ2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZXQtYnRuXCIpLFxuICAgICAgICBsZXZlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvbnVzX19wcm9ncmVzcy1sdmxcIiksXG4gICAgICAgIHByb2dyZXNzUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy1wb3B1cFwiKSxcbiAgICAgICAgcHJvZ3Jlc3NQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXRpdGxlLWJ0blwiKSxcbiAgICAgICAgcHJvZ3Jlc3NQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3MtcG9wdXAtY2xvc2VcIiksXG4gICAgICAgIHVwZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fd2FybmluZ1wiKSxcbiAgICAgICAgdXBkUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX191cGQtYnRuXCIpLFxuICAgICAgICB1cGRQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fd2FybmluZy1jbG9zZVwiKSxcbiAgICAgICAgcmVzdWx0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fc3VidGl0bGUtcG9wdXBcIiksXG4gICAgICAgIHJlc3VsdFBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3N1YnRpdGxlLWJ0blwiKSxcbiAgICAgICAgcmVzdWx0UG9wdXBCdG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19zdWJ0aXRsZS1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlXCIpO1xuXG4gICAgbGV0IGN1cnJlbnRMdmwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEx2bFwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEx2bFwiKSkgOiAxXG5cbiAgICBsZXQgbHZsU3RhdHVzID0gY2hlY2tTdGF0dXMoKTtcbiAgICBsZXQgYmV0V2luQ291bnRlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpKSA6IDBcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgOiBcInJvXCJcblxuXG4gICAgLy8gaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICAvLyBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZTtcbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IGZhbHNlO1xuICAgIGxldCB1c2VySWQ7XG4gICAgLy8gdXNlcklkID0gMTAwMzAwMjY4O1xuICAgIHVzZXJJZCA9IDEwMDg1Njg4ODtcblxuICAgIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICByZXF1ZXN0KCcvdXNlcnM/bm9jYWNoZT0xJyksXG4gICAgICAgIF0pXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgICAgICByZWZyZXNoQ2FzZXMoY3VycmVudEx2bClcbiAgICAgICAgICAgIGdldERhdGEoKS50aGVuKHJlcyA9PntcbiAgICAgICAgICAgICAgICBsZXQgdXNlcnMgPSByZXNbMF0uc29ydCgoYSwgYikgPT4gYi5wb2ludHMgLSBhLnBvaW50cyk7XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyVXNlcnModXNlcnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgICAgICByZWZyZXNoQ2FzZXMoY3VycmVudEx2bClcbiAgICAgICAgICAgIGdldERhdGEoKS50aGVuKHJlcyA9PntcbiAgICAgICAgICAgICAgICBsZXQgdXNlcnMgPSByZXNbMF0uc29ydCgoYSwgYikgPT4gYi5wb2ludHMgLSBhLnBvaW50cyk7XG4gICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModXNlcnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbCkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWwgfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VySW5mbyh1c2VySW5mbykge1xuICAgICAgICBjb25zdCBiZXRzID0gdXNlckluZm8uYmV0cy5zbGljZSgwLCAxMCk7XG4gICAgICAgIC8vIGxldCBiZXRzID0gW3tiZXREYXRlOiBuZXcgRGF0ZSgpLCBzdGF0dXM6ICd1bmRlZmluZWQnfV1cbiAgICAgICAgLy8gcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbyk7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbykge1xuICAgIC8vICAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdF9fbGFzdC11cGQnKTtcbiAgICAvLyAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0VXBkJyk7XG4gICAgLy8gICAgIGlmICh1c2VySW5mby5sYXN0VXBkYXRlKSB7XG4gICAgLy8gICAgICAgICBzcGFuLmlubmVySFRNTCA9IGZvcm1hdERhdGUodXNlckluZm8ubGFzdFVwZGF0ZSk7XG4gICAgLy8gICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjb25zdCBkYXkgPSBTdHJpbmcobG9jYWxEYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcobG9jYWxEYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBob3VycyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRofSAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGdldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVXNlcnMgPSAodXNlcnMpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBlZEJ5RGF0ZSA9IHVzZXJzLnJlZHVjZSgoYWNjLCB1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gdXNlci5kYXRlLnNwbGl0KFwiVFwiKVswXTtcbiAgICAgICAgICAgIGFjY1tkYXRlXSA9IGFjY1tkYXRlXSB8fCBbXTtcbiAgICAgICAgICAgIGFjY1tkYXRlXS5wdXNoKHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuICAgICAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5rZXlzKGdyb3VwZWRCeURhdGUpLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIpIC0gbmV3IERhdGUoYSkpO1xuICAgICAgICBsZXQgYWN0aXZlRGF0ZSA9IGRhdGVzWzBdO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgYWN0aXZlRGF0ZSA9IGRhdGU7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0X190YWJsZS1uYXYtaXRlbVwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJfYWN0aXZlXCIsIGVsLmRhdGFzZXQuZGF0ZSA9PT0gZGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VycyA9IGdyb3VwZWRCeURhdGVbZGF0ZV0gfHwgW107XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJJZCAmJiBjdXJyZW50VXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAgICAgbGV0IHRvcFVzZXJzID0gY3VycmVudFVzZXJzLnNsaWNlKDAsIDQpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJbmRleCA9IGN1cnJlbnRVc2Vycy5pbmRleE9mKGN1cnJlbnRVc2VyKTtcbiAgICAgICAgICAgICAgICB0b3BVc2VycyA9IFsuLi50b3BVc2VycywgY3VycmVudFVzZXJdO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGUsIGN1cnJlbnRVc2VycywgY3VycmVudFVzZXJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGUsIGN1cnJlbnRVc2VycywgNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3RhYmxlLW5hdlwiKTtcbiAgICAgICAgbmF2Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGVzLm1hcCgoZGF0ZSwgaW5kZXgpID0+IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdF9fdGFibGUtbmF2LWl0ZW0gJHtpbmRleCA9PT0gMCA/IFwiX2FjdGl2ZVwiIDogXCJcIn1cIiBkYXRhLWRhdGU9XCIke2RhdGV9XCI+XG4gICAgICAgICAgICAke25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcInVrLVVBXCIsIHsgZGF5OiBcIjItZGlnaXRcIiwgbW9udGg6IFwiMi1kaWdpdFwiIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICBgKS5qb2luKFwiXCIpO1xuXG4gICAgICAgIG5hdkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlc3VsdF9fdGFibGUtbmF2LWl0ZW1cIikpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVBY3RpdmVEYXRlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVBY3RpdmVEYXRlKGFjdGl2ZURhdGUpO1xuICAgIH07XG5cblxuXG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHRhYmxlLCBhbGxVc2VycywgdXNlckluZGV4KSB7XG4gICAgICAgIHRhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsZXQgY3VycmVudFVzZXIgPSB1c2Vyc1t1c2Vycy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zdCBjcmVhdGVSb3cgPSAoY29sdW1ucykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3Jvd1wiKTtcbiAgICAgICAgICAgIHJvdy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sdW1uc1wiLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBjcmVhdGVVc2VyQmxvY2sgPSAodXNlciwgZXh0cmFDbGFzcyA9IFwiXCIsIHBsYWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpZihleHRyYUNsYXNzKXtcbiAgICAgICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2Jsb2NrXCIsIGV4dHJhQ2xhc3MpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInRhYmxlX19ibG9ja1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYmxvY2staWNvblwiKTtcblxuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBcIi4vaW1nL3RhYmxlL2ljb24ucG5nXCI7XG4gICAgICAgICAgICBpbWcuYWx0ID0gXCJGYXZiZXRcIjtcbiAgICAgICAgICAgIGljb24uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZChcInRhYmxlX19ibG9jay1pbmZvXCIpO1xuICAgICAgICAgICAgICAgIGluZm8uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYmxvY2stcGxhY2VcIj4ke3BsYWNlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYmxvY2staWRcIj5pZCAke3VzZXIudXNlcmlkfTwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJldHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGJldHMuY2xhc3NMaXN0LmFkZChcInRhYmxlX19pbmZvLWJldHNcIik7XG4gICAgICAgICAgICAgICAgYmV0cy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19pbmZvLWJldHMtY291bnRlclwiPiR7dXNlci5iZXRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9faW5mby1iZXRzLXRleHRcIiBkYXRhLXRyYW5zbGF0ZT1cImJvbnVzQmV0c1wiPtCy0LjQs9GA0LDRiNC90ZYg0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKGJldHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh1c2VycyAmJiB1c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdzEgPSBjcmVhdGVSb3coMSk7XG4gICAgICAgICAgICByb3cxLmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJCbG9jayh1c2Vyc1swXSwgXCJfZmlyc3RcIiwgMSkpO1xuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93MSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvdzIgPSBjcmVhdGVSb3coMik7XG4gICAgICAgICAgICByb3cyLmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJCbG9jayh1c2Vyc1sxXSwgXCJfc2Vjb25kXCIsIDIpKTtcbiAgICAgICAgICAgIHJvdzIuYXBwZW5kQ2hpbGQoY3JlYXRlVXNlckJsb2NrKHVzZXJzWzJdLCBcIl9zZWNvbmRcIiwgMykpO1xuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93Mik7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvdzMgPSBjcmVhdGVSb3coMyk7XG4gICAgICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgICAgIHJvdzMuYXBwZW5kQ2hpbGQoY3JlYXRlVXNlckJsb2NrKG51bGwpKTtcbiAgICAgICAgICAgICAgICByb3czLmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJCbG9jayhjdXJyZW50VXNlciwgXCJ5b3VcIiwgdXNlckluZGV4KSk7XG4gICAgICAgICAgICAgICAgcm93My5hcHBlbmRDaGlsZChjcmVhdGVVc2VyQmxvY2sobnVsbCkpO1xuICAgICAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdzMpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcm93My5hcHBlbmRDaGlsZChjcmVhdGVVc2VyQmxvY2sobnVsbCkpO1xuICAgICAgICAgICAgICAgIHJvdzMuYXBwZW5kQ2hpbGQoY3JlYXRlVXNlckJsb2NrKHVzZXJzWzNdLCBcInlvdVwiLCB1c2VySW5kZXgpKTtcbiAgICAgICAgICAgICAgICByb3czLmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJCbG9jayhudWxsKSk7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93Myk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgY29uc3Qgcm93NCA9IGNyZWF0ZVJvdyg0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcm93NC5hcHBlbmRDaGlsZChjcmVhdGVVc2VyQmxvY2sobnVsbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93NCk7XG4gICAgICAgICAgICBjaGVja1BsYWNlTGVuZ3RoKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrU3RhdHVzKCkge1xuICAgICAgICBiZXRXaW5Db3VudGVyIDwgNiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X190YWJsZVwiKS5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIikgOiBudWxsXG4gICAgICAgIGNvbnN0IGFjdGl2ZUx2bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLWx2bC5fYWN0aXZlXCIpO1xuICAgICAgICBjb25zdCBjb25kaXRpb25zID0ge1xuICAgICAgICAgICAgYmV0OiB7XG4gICAgICAgICAgICAgICAgMTogYmV0V2luQ291bnRlciA+IDEsXG4gICAgICAgICAgICAgICAgMjogYmV0V2luQ291bnRlciA+IDMsXG4gICAgICAgICAgICAgICAgMzogYmV0V2luQ291bnRlciA+IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbHZsOiB7XG4gICAgICAgICAgICAgICAgMTogY3VycmVudEx2bCA9PT0gMSxcbiAgICAgICAgICAgICAgICAyOiBjdXJyZW50THZsID09PSAyLFxuICAgICAgICAgICAgICAgIDM6IGN1cnJlbnRMdmwgPT09IDMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgaWYgKGNvbmRpdGlvbnMuYmV0W2N1cnJlbnRMdmxdICYmIGNvbmRpdGlvbnMubHZsW2N1cnJlbnRMdmxdKSB7XG4gICAgICAgICAgICBsdmxTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpO1xuICAgICAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUx2bCkgYWN0aXZlTHZsLmNsYXNzTGlzdC5hZGQoXCJfdXBcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBsdmxTdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgbHZsU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpe1xuICAgICAgICBsZXZlbHMuZm9yRWFjaCgobHZsLCBpKSA9PntcbiAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfZG9uZVwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdXBcIilcbiAgICAgICAgICAgIGlmKCsraSA9PT0gY3VycmVudEx2bCkge1xuICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKVxuXG4gICAgICAgICAgICAgICAgaWYgKGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3VwXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDEgJiYgYmV0V2luQ291bnRlciA8PSAwICYmIGx2bFN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDEgJiYgYmV0V2luQ291bnRlciA8PSAwICYmIGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAyICYmIGJldFdpbkNvdW50ZXIgPD0gMiAmJiBsdmxTdGF0dXMgPT09IGZhbHNlICl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMiAmJiBiZXRXaW5Db3VudGVyIDw9IDIgJiYgbHZsU3RhdHVzID09PSB0cnVlICl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAzICYmIGJldFdpbkNvdW50ZXIgPD0gNCAmJiBsdmxTdGF0dXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAzICYmIGJldFdpbkNvdW50ZXIgPD0gNCAmJiBsdmxTdGF0dXMgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkgPCBjdXJyZW50THZsLCBpICwgY3VycmVudEx2bCwgbHZsKVxuICAgICAgICAgICAgaSA8IGN1cnJlbnRMdmwgPyBsdmwuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpIDogbnVsbFxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpIHtcbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIiwgXCJfbGVmdFwiLCBcIl9yaWdodFwiLCBcIl9sb2NrXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWN0aXZlSW5kZXggPSBjdXJyZW50THZsIC0gMTtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID49IGNhc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBjYXNlcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByZXZJbmRleCA9IGFjdGl2ZUluZGV4IC0gMSA8IDAgPyBjYXNlcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggKyAxID49IGNhc2VzLmxlbmd0aCA/IDAgOiBhY3RpdmVJbmRleCArIDE7XG5cbiAgICAgICAgY2FzZXNbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpO1xuICAgICAgICBjYXNlc1twcmV2SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfbGVmdFwiKTtcbiAgICAgICAgY2FzZXNbbmV4dEluZGV4XS5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpO1xuXG4gICAgICAgIGNhc2VzLmZvckVhY2goKGJveCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gbHZsVXAoKXtcbiAgICAgICAgY3VycmVudEx2bCA9IGN1cnJlbnRMdmwgKyAxXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIGAke2N1cnJlbnRMdmx9YClcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICByZXR1cm4gbHZsU3RhdHVzXG4gICAgfVxuXG4gICAgLy8gY2hlY2tTdGF0dXMoKVxuXG5cblxuLy8gY29uc29sZS5sb2coaWRBcnIpXG5cbiAgICBmdW5jdGlvbiBjaGVja1BsYWNlTGVuZ3RoKCl7XG4gICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueW91XCIpLFxuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UgPSB1c2VyUGxhY2UucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fYmxvY2stcGxhY2VcIik7XG5cbiAgICAgICAgbGV0IGlkQXJyID0gdXNlclRhYmxlUGxhY2UudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ19vbmUnKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gMil7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfdHdvJylcbiAgICAgICAgfVxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDMpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX3RocmVlJylcbiAgICAgICAgfVxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDQpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX2ZvdXInKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSA1KXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ19maXZlJylcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBvcGVuQ2FzZUFuaW0oYm94KXtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaGFrZVwiKVxuICAgICAgICBib3gucXVlcnlTZWxlY3RvcihcIi5ib3hfX2NhcFwiKS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKVxuICAgICAgICBnZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBib3gucXVlcnlTZWxlY3RvcihcIi5ib3hfX2NhcC1mcm9udFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICB9LCAzMDApXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9zaG93XCIpXG4gICAgICAgIH0sIDE1MClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGx2bFVwKClcbiAgICAgICAgICAgIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKVxuICAgICAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICB9LCA0MDAwKVxuICAgIH1cblxuXG5cblxuICAgIGdldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+e1xuICAgICAgICAgICAgaWYoYm94LmNsYXNzTGlzdC5jb250YWlucyhcIl9hY3RpdmVcIikpe1xuICAgICAgICAgICAgICAgIG9wZW5DYXNlQW5pbShib3gpXG4gICAgICAgICAgICAgICAgLy8gZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICAgICAgICAgIC8vIGNoZWNrU3RhdHVzKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfSlcblxuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXAoYnRuT3BlbiwgYnRuQ2xvc2UsIHBvcHVwLCBoaWRlKXtcbiAgICAgICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgaWYoaGlkZSl7XG4gICAgICAgICAgICAgICAgYnRuT3Blbi5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZihidG5DbG9zZSl7XG4gICAgICAgICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICBpZihoaWRlKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuT3Blbi5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgIGlmKCFwb3B1cC5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQgIT09IGJ0bk9wZW4pe1xuICAgICAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICBpZihoaWRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk9wZW4ucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldFBvcHVwKHByb2dyZXNzUG9wdXBCdG4sIHByb2dyZXNzUG9wdXBDbG9zZSwgcHJvZ3Jlc3NQb3B1cClcbiAgICBzZXRQb3B1cCh1cGRQb3B1cEJ0biwgdXBkUG9wdXBDbG9zZSwgdXBkUG9wdXAsIHRydWUpXG4gICAgc2V0UG9wdXAocmVzdWx0UG9wdXBCdG4sIHJlc3VsdFBvcHVwQnRuQ2xvc2UsIHJlc3VsdFBvcHVwLCB0cnVlKVxuXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oZW5kVGltZSkge1xuICAgICAgICBjb25zdCBob3Vyc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX2hvdXJzLWl0ZW1cIik7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyX19taW51dGVzLWl0ZW1cIik7XG4gICAgICAgIGNvbnN0IHNlY29uZHNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyX19zZWNvbmRzLWl0ZW1cIik7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVGltZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gZW5kVGltZSAtIG5vdztcblxuICAgICAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhob3Vyc0VscywgXCIwMFwiKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgXCIwMFwiKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoc2Vjb25kc0VscywgXCIwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjApKSAlIDYwKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvIDEwMDApICUgNjApO1xuXG4gICAgICAgICAgICB1cGRhdGVEaWdpdHMoaG91cnNFbHMsIFN0cmluZyhob3VycykucGFkU3RhcnQoMiwgXCIwXCIpKTtcbiAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhtaW51dGVzRWxzLCBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgXCIwXCIpKTtcbiAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhzZWNvbmRzRWxzLCBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURpZ2l0cyhlbGVtZW50cywgdmFsdWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzWzBdLnRleHRDb250ZW50ID0gdmFsdWVbMF07XG4gICAgICAgICAgICBlbGVtZW50c1sxXS50ZXh0Q29udGVudCA9IHZhbHVlWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGltZXIoKTtcbiAgICAgICAgY29uc3QgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGVuZE9mRGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpLCAyMywgNTksIDU5KS5nZXRUaW1lKCk7XG5cbiAgICBzdGFydENvdW50ZG93bihlbmRPZkRheSk7XG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1sdmxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC1tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcbiAgICB9KVxuXG4gICAgY29uc3QgbHZsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLTFcIilcbiAgICBjb25zdCBsdmwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtMlwiKVxuICAgIGNvbnN0IGx2bDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC0zXCIpXG4gICAgY29uc3QgbHZsVXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC11cFwiKVxuICAgIGNvbnN0IGJldFdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmV0LXdpblwiKVxuICAgIGNvbnN0IGJldENsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZXQtY2xlYXJcIilcbiAgICBjb25zdCBidG5Mb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbG9ja1wiKVxuICAgIGNvbnN0IGRhcmtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmstYnRuXCIpXG5cbiAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogJHtiZXRXaW5Db3VudGVyfWBcblxuICAgIGJldFdpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGJldFdpbkNvdW50ZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSkgOiAwXG4gICAgICAgIGJldFdpbkNvdW50ZXIgPSBiZXRXaW5Db3VudGVyICsgMVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmV0V2luQ291bnRlclwiLCBiZXRXaW5Db3VudGVyKVxuICAgICAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogJHtiZXRXaW5Db3VudGVyfWBcbiAgICAgICAgLy8gcmVmcmVzaEx2bChjdXJyZW50THZsKVxuICAgICAgICBjaGVja1N0YXR1cygpXG5cblxuICAgIH0pXG5cbiAgICBiZXRDbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpXG4gICAgICAgIGJldFdpbkNvdW50ZXIgPSAwXG4gICAgICAgIGJldFdpbi50ZXh0Q29udGVudCA9IGB3aW4gYmV0OiAwYFxuICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiMVwiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgLy8gcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpXG5cbiAgICB9KVxuXG4gICAgbHZsMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiMVwiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuICAgIGx2bDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjJcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcbiAgICBsdmwzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIzXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG5cbiAgICBsdmxVcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGx2bFN0YXR1cyA9ICFsdmxTdGF0dXNcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICBsdmxTdGF0dXMgPSAhbHZsU3RhdHVzXG5cbiAgICB9KVxuXG4gICAgYnRuTG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X190YWJsZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiX2xvY2tcIilcbiAgICB9KVxuXG4gICAgZGFya0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgICB9KVxuXG59KSgpXG5cbiJdfQ==
