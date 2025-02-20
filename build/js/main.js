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
  var _sessionStorage$getIt;
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
    resultsTable = document.querySelector(".table"),
    levelBottomText = document.querySelectorAll(".bonus__progress-bottom");
  var currentLvl = sessionStorage.getItem("currentLvl") ? Number(sessionStorage.getItem("currentLvl")) : 1;
  var lvlStatus = checkStatus();
  var betWinCounter = sessionStorage.getItem("betWinCounter") ? Number(sessionStorage.getItem("betWinCounter")) : 0;
  var locale = (_sessionStorage$getIt = sessionStorage.getItem("locale")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "uk";
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var testUsers = [{
    userid: 100300256,
    bets: 10,
    date: "2025-02-18T12:00:00"
  }, {
    userid: 100300257,
    bets: 8,
    date: "2025-02-18T12:00:00"
  }, {
    userid: 100300258,
    bets: 7,
    date: "2025-02-18T12:00:00"
  }, {
    userid: 100300259,
    bets: 5,
    date: "2025-02-18T12:00:00"
  }, {
    userid: 100300252,
    bets: 3,
    date: "2025-02-18T12:00:00"
  }, {
    userid: 100300253,
    bets: 11,
    date: "2025-02-19T12:00:00"
  }, {
    userid: 100300245,
    bets: 8,
    date: "2025-02-19T12:00:00"
  }, {
    userid: 100300246,
    bets: 6,
    date: "2025-02-19T12:00:00"
  }, {
    userid: 100300247,
    bets: 4,
    date: "2025-02-19T12:00:00"
  }, {
    userid: 100300234,
    bets: 2,
    date: "2025-02-19T12:00:00"
  }, {
    userid: 100300232,
    bets: 11,
    date: "2025-02-20T12:00:00"
  }, {
    userid: 100300231,
    bets: 8,
    date: "2025-02-20T12:00:00"
  }, {
    userid: 100300222,
    bets: 6,
    date: "2025-02-21T12:00:00"
  }, {
    userid: 100300223,
    bets: 4,
    date: "2025-02-22T12:00:00"
  }, {
    userid: 100856882,
    bets: 5,
    date: "2025-02-23T12:00:00"
  }, {
    userid: 100856883,
    bets: 4,
    date: "2025-02-23T12:00:00"
  }, {
    userid: 100856884,
    bets: 3,
    date: "2025-02-23T12:00:00"
  }, {
    userid: 100856888,
    bets: 2,
    date: "2025-02-23T12:00:00"
  }];
  var debug = true;
  var i18nData = {};
  var translateState = true;
  var userId = sessionStorage.getItem("userId") ? Number(sessionStorage.getItem("userId")) : null;
  // userId = 100300268;
  // userId = 100856888;

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
        if (!debug) {
          renderUsers(users);
        } else {
          renderUsers(testUsers);
        }
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
      console.log(json.resultBottom);
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
  function populateUsersTable(users, currentUserId, table) {
    table.innerHTML = ''; // Очищаємо таблицю перед рендерингом

    var createRow = function createRow(columns) {
      var row = document.createElement("div");
      row.classList.add("table__row");
      row.style.setProperty("--columns", columns); // Стилі для колонок
      return row;
    };
    var createUserBlock = function createUserBlock(user) {
      var extraClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var place = arguments.length > 2 ? arguments[2] : undefined;
      var block = document.createElement("div");
      block.classList.add("table__block");
      if (extraClass) block.classList.add(extraClass);
      var icon = document.createElement("div");
      icon.classList.add("table__block-icon");
      var img = document.createElement("img");
      img.src = "./img/table/icon.png";
      img.alt = "Favbet";
      icon.appendChild(img);
      block.appendChild(icon);
      var info = document.createElement("div");
      info.classList.add("table__block-info");
      var idContent = '';
      if (user && user.userid) {
        idContent = user.userid === currentUserId ? "<div class=\"your-id\" data-translate=\"yourId\">\u0422\u0432\u043E\u0454 id</div>" : "id ".concat(user.userid);
      } else {
        idContent = null;
      }

      // Якщо користувач є, то рендеримо місце
      var placeContent = user ? "<div class=\"table__block-place\">".concat(place, "</div>") : '';
      info.innerHTML = "\n        ".concat(placeContent, "  <!-- \u041F\u043E\u043A\u0430\u0437\u0443\u0454\u043C\u043E \u043C\u0456\u0441\u0446\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0442\u0456\u043B\u044C\u043A\u0438 \u044F\u043A\u0449\u043E \u0454 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 -->\n        ").concat(idContent ? "<div class=\"table__block-id\">".concat(idContent, "</div>") : "", "\n        ");
      block.appendChild(info);
      if (user) {
        var bets = document.createElement("div");
        bets.classList.add("table__info-bets");
        bets.innerHTML = "\n                <div class=\"table__info-bets-counter\">".concat(user.bets, "</div>\n                <div class=\"table__info-bets-text\" data-translate=\"bonusBets\">\u0432\u0438\u0433\u0440\u0430\u0448\u043D\u0456 \u0441\u0442\u0430\u0432\u043A\u0438</div>\n            ");
        block.appendChild(bets);
      }
      var elems = table.querySelectorAll('[data-translate]');
      elems.forEach(function (elem) {
        var key = elem.getAttribute('data-translate');
        elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
        elem.removeAttribute('data-translate');
      });
      return block;
    };

    // Фільтруємо користувачів, щоб додати їх унікально
    var addedUserIds = new Set();
    var uniqueUsers = users.filter(function (user) {
      if (!addedUserIds.has(user.userid)) {
        addedUserIds.add(user.userid);
        return true;
      }
      return false;
    });

    // Налаштування рядків
    var rows = [1, 2, 3, 4]; // Налаштовуємо 4 рядки
    var rowConfig = [[{
      user: uniqueUsers[0] || null,
      "class": "_first"
    }], [{
      user: uniqueUsers[1] || null,
      "class": "_second"
    }, {
      user: uniqueUsers[2] || null,
      "class": "_second"
    }], [{
      user: null,
      "class": ""
    }, {
      user: uniqueUsers.find(function (user) {
        return user.userid === currentUserId;
      }) || null,
      "class": "you"
    }, {
      user: null,
      "class": ""
    }], [{
      user: null,
      "class": ""
    }, {
      user: null,
      "class": ""
    }, {
      user: null,
      "class": ""
    }, {
      user: null,
      "class": ""
    }]];

    // Перевірка на наявність поточного користувача
    var currentUserIndex = uniqueUsers.findIndex(function (user) {
      return user.userid === currentUserId;
    });
    var nextUser = currentUserIndex === -1 ? uniqueUsers[0] : uniqueUsers[currentUserIndex + 1];

    // Якщо поточного користувача немає і він не в першій четвірці, то рендеримо наступного
    var currentUserPlace = currentUserIndex < 4 ? currentUserIndex + 1 : null; // Якщо поточний користувач є у першій четвірці
    var userToRender = currentUserPlace === null ? nextUser : null;

    // Рендеримо кожен рядок
    rows.forEach(function (columns, rowIndex) {
      var row = createRow(columns);
      rowConfig[rowIndex].forEach(function (_ref, colIndex) {
        var user = _ref.user,
          extraClass = _ref["class"];
        var place = uniqueUsers.indexOf(user) + 1; // Знаходимо позицію користувача в унікальному списку

        // Якщо поточного користувача нема в таблиці і він не в першій четвірці, рендеримо наступного
        if (!user && userToRender) {
          user = userToRender; // Якщо поточного користувача немає, ставимо наступного
          place = uniqueUsers.indexOf(user) + 1; // Оновлюємо місце
        }

        row.appendChild(createUserBlock(user, extraClass, user ? place : '')); // Якщо користувач є, передаємо місце, інакше порожнє значення
      });

      table.appendChild(row); // Додаємо рядок до таблиці
    });
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
    if (userId === null) {
      document.querySelector(".bonus__progress").style.margin = "0";
      document.querySelector(".bonus__progress-wrap").style.opacity = "0";
      return;
    }
    if (!userId) return;
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
      levelBottomText.forEach(function (item, i) {
        if (currentLvl <= 3) {
          item.classList.add("hide");
        }
        if (i === currentLvl - 1) {
          item.classList.remove("hide");
        }
      });
    });
  }
  function refreshCases(currentLvl) {
    cases.forEach(function (box, i) {
      box.classList.remove("_active", "_left", "_right", "_lock");
    });
    // if(!userId){
    //     cases.forEach((box, i) => {
    //         box.classList.add("_lock");
    //     });
    //     return
    // }

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
        btnOpen.parentNode.classList.add("_popup");
      }
    });
    if (btnClose) {
      btnClose.addEventListener("click", function () {
        btnOpen.parentNode.classList.remove("_popup");
        popup.classList.add("hide");
        // if(hide){
        //     btnOpen.parentNode.classList.add("._popup")
        // }
      });

      document.addEventListener("click", function (e) {
        if (!popup.contains(e.target) && e.target !== btnOpen) {
          popup.classList.add("hide");
          if (hide) {
            btnOpen.parentNode.classList.remove("_popup");
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
  var authBtn = document.querySelector(".auth-btn");
  var lngBtn = document.querySelector(".lng-btn");
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
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", '100856888');
    }
    window.location.reload();
  });
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var details = document.querySelector(".dropdown"); // Батьківський details
  var dropdown = document.querySelector(".drop-txt");
  details.addEventListener("toggle", function () {
    if (details.open) {
      // Спрацьовує тільки при відкритті
      setTimeout(function () {
        var rect = dropdown.getBoundingClientRect();
        var viewportHeight = window.innerHeight;

        // Якщо дропдаун виходить за межі екрану вниз
        if (rect.bottom > viewportHeight) {
          window.scrollBy({
            top: rect.bottom - viewportHeight + 80,
            // 10px — запас
            behavior: "smooth"
          });
        }

        // Якщо дропдаун виходить за верхню межу екрану
        if (rect.top < 0) {
          window.scrollBy({
            top: rect.top - 80,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  });

  // const drops = document.querySelectorAll(".dropdown");
  //
  // drops.forEach(drop => {
  //     drop.addEventListener("click", (event) => {
  //         const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  //         const isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
  //
  //         const isMobileSafari = isIOS && isSafari;
  //
  //         if (!isMobileSafari) {
  //             // Блокуємо прокрутку сторінки без дергання
  //             const scrollY = window.scrollY;
  //             document.body.style.position = "fixed";
  //             document.body.style.top = `-${scrollY}px`;
  //             document.body.style.width = "100%";
  //
  //             // Додаємо корекцію для ширини, щоб уникнути стрибків сторінки
  //             const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  //             if (scrollbarWidth > 0) {
  //                 document.body.style.paddingRight = `${scrollbarWidth}px`;
  //             }
  //
  //             setTimeout(() => {
  //                 const savedScrollY = Math.abs(parseInt(document.body.style.top, 10));
  //                 document.body.style.position = "";
  //                 document.body.style.top = "";
  //                 document.body.style.width = "";
  //                 document.body.style.paddingRight = "";
  //
  //                 window.scrollTo(0, savedScrollY);
  //             }, 0);
  //         } else {
  //             // Для iOS використовуємо alternative спосіб
  //             setTimeout(() => {
  //                 drop.scrollIntoView({ block: "nearest", behavior: "smooth" });
  //             }, 100);
  //         }
  //
  //         drop.classList.toggle("open");
  //     });
  // });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY2FzZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRCdG4iLCJxdWVyeVNlbGVjdG9yIiwibGV2ZWxzIiwicHJvZ3Jlc3NQb3B1cCIsInByb2dyZXNzUG9wdXBCdG4iLCJwcm9ncmVzc1BvcHVwQ2xvc2UiLCJ1cGRQb3B1cCIsInVwZFBvcHVwQnRuIiwidXBkUG9wdXBDbG9zZSIsInJlc3VsdFBvcHVwIiwicmVzdWx0UG9wdXBCdG4iLCJyZXN1bHRQb3B1cEJ0bkNsb3NlIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsIm1haW5QYWdlIiwicmVzdWx0c1RhYmxlIiwibGV2ZWxCb3R0b21UZXh0IiwiY3VycmVudEx2bCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIk51bWJlciIsImx2bFN0YXR1cyIsImNoZWNrU3RhdHVzIiwiYmV0V2luQ291bnRlciIsImxvY2FsZSIsInVrTGVuZyIsImVuTGVuZyIsInRlc3RVc2VycyIsInVzZXJpZCIsImJldHMiLCJkYXRlIiwiZGVidWciLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiZ2V0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXF1ZXN0IiwiaW5pdCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImNoZWNrVXNlckF1dGgiLCJyZWZyZXNoQ2FzZXMiLCJ0aGVuIiwicmVzIiwidXNlcnMiLCJzb3J0IiwiYSIsImIiLCJwb2ludHMiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsInJlbmRlclVzZXJzIiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJpdGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibG9hZFRyYW5zbGF0aW9ucyIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRCb3R0b20iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsInRyYW5zbGF0ZUtleSIsImRlZmF1bHRWYWwiLCJmb3JtYXREYXRlIiwibG9jYWxEYXRlIiwiRGF0ZSIsImRheSIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJoZWFkZXJzIiwidW5hdXRoTWVzIiwicGFydGljaXBhdGVCdG4iLCJyZXNvbHZlIiwiZ3JvdXBlZEJ5RGF0ZSIsInJlZHVjZSIsImFjYyIsInVzZXIiLCJzcGxpdCIsInB1c2giLCJkYXRlcyIsIk9iamVjdCIsImtleXMiLCJhY3RpdmVEYXRlIiwidXBkYXRlQWN0aXZlRGF0ZSIsImVsIiwidG9nZ2xlIiwiZGF0YXNldCIsImN1cnJlbnRVc2VycyIsImN1cnJlbnRVc2VyIiwiZmluZCIsInRvcFVzZXJzIiwic2xpY2UiLCJjdXJyZW50VXNlckluZGV4IiwiaW5kZXhPZiIsInBvcHVsYXRlVXNlcnNUYWJsZSIsIm5hdkNvbnRhaW5lciIsIm1hcCIsImluZGV4IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiam9pbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwiY3VycmVudFVzZXJJZCIsInRhYmxlIiwiY3JlYXRlUm93IiwiY29sdW1ucyIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY3JlYXRlVXNlckJsb2NrIiwiZXh0cmFDbGFzcyIsInBsYWNlIiwiYmxvY2siLCJpY29uIiwiaW1nIiwic3JjIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJpbmZvIiwiaWRDb250ZW50IiwicGxhY2VDb250ZW50IiwiYWRkZWRVc2VySWRzIiwiU2V0IiwidW5pcXVlVXNlcnMiLCJmaWx0ZXIiLCJoYXMiLCJyb3dzIiwicm93Q29uZmlnIiwiZmluZEluZGV4IiwibmV4dFVzZXIiLCJjdXJyZW50VXNlclBsYWNlIiwidXNlclRvUmVuZGVyIiwicm93SW5kZXgiLCJjb2xJbmRleCIsImFjdGl2ZUx2bCIsImNvbmRpdGlvbnMiLCJiZXQiLCJsdmwiLCJyZWZyZXNoTHZsIiwibWFyZ2luIiwib3BhY2l0eSIsImJveCIsImFjdGl2ZUluZGV4IiwicHJldkluZGV4IiwibmV4dEluZGV4IiwibHZsVXAiLCJzZXRJdGVtIiwiY2hlY2tQbGFjZUxlbmd0aCIsInVzZXJQbGFjZSIsInVzZXJUYWJsZVBsYWNlIiwiaWRBcnIiLCJ0ZXh0Q29udGVudCIsIm9wZW5DYXNlQW5pbSIsInNldFRpbWVvdXQiLCJzZXRQb3B1cCIsImJ0bk9wZW4iLCJidG5DbG9zZSIsInBvcHVwIiwiaGlkZSIsInBhcmVudE5vZGUiLCJlIiwic3RhcnRDb3VudGRvd24iLCJlbmRUaW1lIiwiaG91cnNFbHMiLCJtaW51dGVzRWxzIiwic2Vjb25kc0VscyIsInVwZGF0ZVRpbWVyIiwibm93IiwiZ2V0VGltZSIsInRpbWVMZWZ0IiwidGltZXJJbnRlcnZhbCIsInVwZGF0ZURpZ2l0cyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJlbGVtZW50cyIsInZhbHVlIiwiZW5kT2ZEYXkiLCJnZXRGdWxsWWVhciIsImx2bDEiLCJsdmwyIiwibHZsMyIsImx2bFVwQnRuIiwiYmV0V2luIiwiYmV0Q2xlYXIiLCJidG5Mb2NrIiwiZGFya0J0biIsImF1dGhCdG4iLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJkZXRhaWxzIiwiZHJvcGRvd24iLCJvcGVuIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdwb3J0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJzY3JvbGxCeSIsInRvcCIsImJlaGF2aW9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFlBQVc7RUFBQTtFQUNSO0VBQ0E7RUFDQSxJQUFNQSxNQUFNLEdBQUcsd0NBQXdDO0lBQ25EQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7SUFDdkRDLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQzNDQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7SUFDMURJLGFBQWEsR0FBR0wsUUFBUSxDQUFDRyxhQUFhLENBQUMsd0JBQXdCLENBQUM7SUFDaEVHLGdCQUFnQixHQUFHTixRQUFRLENBQUNHLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUN2RUksa0JBQWtCLEdBQUdQLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLDhCQUE4QixDQUFDO0lBQzNFSyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQ3BETSxXQUFXLEdBQUdULFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQ3ZETyxhQUFhLEdBQUdWLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQy9EUSxXQUFXLEdBQUdYLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBQy9EUyxjQUFjLEdBQUdaLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQ2hFVSxtQkFBbUIsR0FBR2IsUUFBUSxDQUFDRyxhQUFhLENBQUMsK0JBQStCLENBQUM7SUFDN0VXLFVBQVUsR0FBR2QsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDckRjLGVBQWUsR0FBR2YsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDeERlLFlBQVksR0FBR2hCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3JEZ0IsUUFBUSxHQUFHakIsUUFBUSxDQUFDRyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzlDZSxZQUFZLEdBQUdsQixRQUFRLENBQUNHLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0NnQixlQUFlLEdBQUduQixRQUFRLENBQUNDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDO0VBRTFFLElBQUltQixVQUFVLEdBQUdDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHQyxNQUFNLENBQUNGLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUV4RyxJQUFJRSxTQUFTLEdBQUdDLFdBQVcsRUFBRTtFQUM3QixJQUFJQyxhQUFhLEdBQUdMLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHQyxNQUFNLENBQUNGLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUNqSCxJQUFJSyxNQUFNLDRCQUFHTixjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUVBQUksSUFBSTtFQUVyRCxJQUFNTSxNQUFNLEdBQUc1QixRQUFRLENBQUNHLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDaEQsSUFBTTBCLE1BQU0sR0FBRzdCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUVoRCxJQUFJeUIsTUFBTSxFQUFFRCxNQUFNLEdBQUcsSUFBSTtFQUN6QixJQUFJRSxNQUFNLEVBQUVGLE1BQU0sR0FBRyxJQUFJO0VBRXpCLElBQU1HLFNBQVMsR0FBRyxDQUNkO0lBQUVDLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxFQUFFO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzVEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxFQUFFO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzVEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxFQUFFO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzVEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFB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O0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBZ0JKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfbW91bnRhaW5fa2luZydcbiAgICAvLyBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3ZpcCcsXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9tb3VudGFpbl9raW5nJyxcbiAgICAgICAgY2FzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvbnVzX19ib3hlcy1pdGVtXCIpLFxuICAgICAgICBnZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdldC1idG5cIiksXG4gICAgICAgIGxldmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9udXNfX3Byb2dyZXNzLWx2bFwiKSxcbiAgICAgICAgcHJvZ3Jlc3NQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXBvcHVwXCIpLFxuICAgICAgICBwcm9ncmVzc1BvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3MtdGl0bGUtYnRuXCIpLFxuICAgICAgICBwcm9ncmVzc1BvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgdXBkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX193YXJuaW5nXCIpLFxuICAgICAgICB1cGRQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3VwZC1idG5cIiksXG4gICAgICAgIHVwZFBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX193YXJuaW5nLWNsb3NlXCIpLFxuICAgICAgICByZXN1bHRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19zdWJ0aXRsZS1wb3B1cFwiKSxcbiAgICAgICAgcmVzdWx0UG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fc3VidGl0bGUtYnRuXCIpLFxuICAgICAgICByZXN1bHRQb3B1cEJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3N1YnRpdGxlLXBvcHVwLWNsb3NlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVcIiksXG4gICAgICAgIGxldmVsQm90dG9tVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9udXNfX3Byb2dyZXNzLWJvdHRvbVwiKTtcblxuICAgIGxldCBjdXJyZW50THZsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMdmxcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMdmxcIikpIDogMVxuXG4gICAgbGV0IGx2bFN0YXR1cyA9IGNoZWNrU3RhdHVzKCk7XG4gICAgbGV0IGJldFdpbkNvdW50ZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSkgOiAwXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPz8gXCJ1a1wiXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgY29uc3QgdGVzdFVzZXJzID0gW1xuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjU2LCBiZXRzOiAxMCwgZGF0ZTogXCIyMDI1LTAyLTE4VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1NywgYmV0czogOCwgZGF0ZTogXCIyMDI1LTAyLTE4VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1OCwgYmV0czogNywgZGF0ZTogXCIyMDI1LTAyLTE4VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1OSwgYmV0czogNSwgZGF0ZTogXCIyMDI1LTAyLTE4VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1MiwgYmV0czogMywgZGF0ZTogXCIyMDI1LTAyLTE4VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1MywgYmV0czogMTEsIGRhdGU6IFwiMjAyNS0wMi0xOVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNDUsIGJldHM6IDgsIGRhdGU6IFwiMjAyNS0wMi0xOVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNDYsIGJldHM6IDYsIGRhdGU6IFwiMjAyNS0wMi0xOVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNDcsIGJldHM6IDQsIGRhdGU6IFwiMjAyNS0wMi0xOVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyMzQsIGJldHM6IDIsIGRhdGU6IFwiMjAyNS0wMi0xOVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyMzIsIGJldHM6IDExLCBkYXRlOiBcIjIwMjUtMDItMjBUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjMxLCBiZXRzOiA4LCBkYXRlOiBcIjIwMjUtMDItMjBUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjIyLCBiZXRzOiA2LCBkYXRlOiBcIjIwMjUtMDItMjFUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjIzLCBiZXRzOiA0LCBkYXRlOiBcIjIwMjUtMDItMjJUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwODU2ODgyLCBiZXRzOiA1LCBkYXRlOiBcIjIwMjUtMDItMjNUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwODU2ODgzLCBiZXRzOiA0LCBkYXRlOiBcIjIwMjUtMDItMjNUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwODU2ODg0LCBiZXRzOiAzLCBkYXRlOiBcIjIwMjUtMDItMjNUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwODU2ODg4LCBiZXRzOiAyLCBkYXRlOiBcIjIwMjUtMDItMjNUMTI6MDA6MDBcIiB9LFxuICAgIF07XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlO1xuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA6IG51bGxcbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjg7XG4gICAgLy8gdXNlcklkID0gMTAwODU2ODg4O1xuXG4gICAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHJlcXVlc3QoJy91c2Vycz9ub2NhY2hlPTEnKSxcbiAgICAgICAgXSlcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgICAgIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKVxuICAgICAgICAgICAgZ2V0RGF0YSgpLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgICAgIGxldCB1c2VycyA9IHJlc1swXS5zb3J0KChhLCBiKSA9PiBiLnBvaW50cyAtIGEucG9pbnRzKTtcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJVc2Vycyh1c2Vycyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgICAgIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKVxuICAgICAgICAgICAgZ2V0RGF0YSgpLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgICAgIGxldCB1c2VycyA9IHJlc1swXS5zb3J0KChhLCBiKSA9PiBiLnBvaW50cyAtIGEucG9pbnRzKTtcbiAgICAgICAgICAgICAgICBpZighZGVidWcpe1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2Vycyh1c2Vycyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHRlc3RVc2VycylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uLnJlc3VsdEJvdHRvbSlcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29yayFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWwpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgICAgY29uc3QgbG9jYWxEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRheSA9IFN0cmluZyhsb2NhbERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtb250aCA9IFN0cmluZyhsb2NhbERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9ICR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJVc2VycyA9ICh1c2VycykgPT4ge1xuICAgICAgICBjb25zdCBncm91cGVkQnlEYXRlID0gdXNlcnMucmVkdWNlKChhY2MsIHVzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSB1c2VyLmRhdGUuc3BsaXQoXCJUXCIpWzBdO1xuICAgICAgICAgICAgYWNjW2RhdGVdID0gYWNjW2RhdGVdIHx8IFtdO1xuICAgICAgICAgICAgYWNjW2RhdGVdLnB1c2godXNlcik7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIGNvbnN0IGRhdGVzID0gT2JqZWN0LmtleXMoZ3JvdXBlZEJ5RGF0ZSkuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYikgLSBuZXcgRGF0ZShhKSk7XG4gICAgICAgIGxldCBhY3RpdmVEYXRlID0gZGF0ZXNbMF07XG5cbiAgICAgICAgY29uc3QgdXBkYXRlQWN0aXZlRGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgICAgICAgICBhY3RpdmVEYXRlID0gZGF0ZTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX3RhYmxlLW5hdi1pdGVtXCIpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcIl9hY3RpdmVcIiwgZWwuZGF0YXNldC5kYXRlID09PSBkYXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJzID0gZ3JvdXBlZEJ5RGF0ZVtkYXRlXSB8fCBbXTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcklkICYmIGN1cnJlbnRVc2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG4gICAgICAgICAgICBsZXQgdG9wVXNlcnMgPSBjdXJyZW50VXNlcnMuc2xpY2UoMCwgNCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlckluZGV4ID0gY3VycmVudFVzZXJzLmluZGV4T2YoY3VycmVudFVzZXIpO1xuICAgICAgICAgICAgICAgIHRvcFVzZXJzID0gWy4uLnRvcFVzZXJzLCBjdXJyZW50VXNlcl07XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHRvcFVzZXJzLCB1c2VySWQsIHJlc3VsdHNUYWJsZSwgY3VycmVudFVzZXJzLCBjdXJyZW50VXNlckluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHRvcFVzZXJzLCB1c2VySWQsIHJlc3VsdHNUYWJsZSwgY3VycmVudFVzZXJzLCA0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fdGFibGUtbmF2XCIpO1xuICAgICAgICBuYXZDb250YWluZXIuaW5uZXJIVE1MID0gZGF0ZXMubWFwKChkYXRlLCBpbmRleCkgPT4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0X190YWJsZS1uYXYtaXRlbSAke2luZGV4ID09PSAwID8gXCJfYWN0aXZlXCIgOiBcIlwifVwiIGRhdGEtZGF0ZT1cIiR7ZGF0ZX1cIj5cbiAgICAgICAgICAgICR7bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwidWstVUFcIiwgeyBkYXk6IFwiMi1kaWdpdFwiLCBtb250aDogXCIyLWRpZ2l0XCIgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIGApLmpvaW4oXCJcIik7XG5cbiAgICAgICAgbmF2Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVzdWx0X190YWJsZS1uYXYtaXRlbVwiKSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUFjdGl2ZURhdGUoZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZUFjdGl2ZURhdGUoYWN0aXZlRGF0ZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgdGFibGUpIHtcbiAgICAgICAgdGFibGUuaW5uZXJIVE1MID0gJyc7IC8vINCe0YfQuNGJ0LDRlNC80L4g0YLQsNCx0LvQuNGG0Y4g0L/QtdGA0LXQtCDRgNC10L3QtNC10YDQuNC90LPQvtC8XG5cbiAgICAgICAgY29uc3QgY3JlYXRlUm93ID0gKGNvbHVtbnMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlX19yb3dcIik7XG4gICAgICAgICAgICByb3cuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbHVtbnNcIiwgY29sdW1ucyk7IC8vINCh0YLQuNC70ZYg0LTQu9GPINC60L7Qu9C+0L3QvtC6XG4gICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVVzZXJCbG9jayA9ICh1c2VyLCBleHRyYUNsYXNzID0gXCJcIiwgcGxhY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYmxvY2tcIik7XG4gICAgICAgICAgICBpZiAoZXh0cmFDbGFzcykgYmxvY2suY2xhc3NMaXN0LmFkZChleHRyYUNsYXNzKTtcblxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYmxvY2staWNvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpbWcuc3JjID0gXCIuL2ltZy90YWJsZS9pY29uLnBuZ1wiO1xuICAgICAgICAgICAgaW1nLmFsdCA9IFwiRmF2YmV0XCI7XG4gICAgICAgICAgICBpY29uLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYmxvY2staW5mb1wiKTtcblxuICAgICAgICAgICAgbGV0IGlkQ29udGVudCA9ICcnO1xuICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICBpZENvbnRlbnQgPSB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZFxuICAgICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwieW91ci1pZFwiIGRhdGEtdHJhbnNsYXRlPVwieW91cklkXCI+0KLQstC+0ZQgaWQ8L2Rpdj5gXG4gICAgICAgICAgICAgICAgICAgIDogYGlkICR7dXNlci51c2VyaWR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWRDb250ZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LrQvtGA0LjRgdGC0YPQstCw0Ycg0ZQsINGC0L4g0YDQtdC90LTQtdGA0LjQvNC+INC80ZbRgdGG0LVcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlQ29udGVudCA9IHVzZXIgPyBgPGRpdiBjbGFzcz1cInRhYmxlX19ibG9jay1wbGFjZVwiPiR7cGxhY2V9PC9kaXY+YCA6ICcnO1xuXG4gICAgICAgICAgICBpbmZvLmlubmVySFRNTCA9IGBcbiAgICAgICAgJHtwbGFjZUNvbnRlbnR9ICA8IS0tINCf0L7QutCw0LfRg9GU0LzQviDQvNGW0YHRhtC1INC60L7RgNC40YHRgtGD0LLQsNGH0LAg0YLRltC70YzQutC4INGP0LrRidC+INGUINC60L7RgNC40YHRgtGD0LLQsNGHIC0tPlxuICAgICAgICAke2lkQ29udGVudCA/IGA8ZGl2IGNsYXNzPVwidGFibGVfX2Jsb2NrLWlkXCI+JHtpZENvbnRlbnR9PC9kaXY+YCA6IFwiXCJ9XG4gICAgICAgIGA7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiZXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBiZXRzLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9faW5mby1iZXRzXCIpO1xuICAgICAgICAgICAgICAgIGJldHMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9faW5mby1iZXRzLWNvdW50ZXJcIj4ke3VzZXIuYmV0c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2luZm8tYmV0cy10ZXh0XCIgZGF0YS10cmFuc2xhdGU9XCJib251c0JldHNcIj7QstC40LPRgNCw0YjQvdGWINGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChiZXRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCk0ZbQu9GM0YLRgNGD0ZTQvNC+INC60L7RgNC40YHRgtGD0LLQsNGH0ZbQsiwg0YnQvtCxINC00L7QtNCw0YLQuCDRl9GFINGD0L3RltC60LDQu9GM0L3QvlxuICAgICAgICBsZXQgYWRkZWRVc2VySWRzID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCB1bmlxdWVVc2VycyA9IHVzZXJzLmZpbHRlcih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICghYWRkZWRVc2VySWRzLmhhcyh1c2VyLnVzZXJpZCkpIHtcbiAgICAgICAgICAgICAgICBhZGRlZFVzZXJJZHMuYWRkKHVzZXIudXNlcmlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINGA0Y/QtNC60ZbQslxuICAgICAgICBjb25zdCByb3dzID0gWzEsIDIsIDMsIDRdOyAvLyDQndCw0LvQsNGI0YLQvtCy0YPRlNC80L4gNCDRgNGP0LTQutC4XG4gICAgICAgIGNvbnN0IHJvd0NvbmZpZyA9IFtcbiAgICAgICAgICAgIFt7IHVzZXI6IHVuaXF1ZVVzZXJzWzBdIHx8IG51bGwsIGNsYXNzOiBcIl9maXJzdFwiIH1dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHsgdXNlcjogdW5pcXVlVXNlcnNbMV0gfHwgbnVsbCwgY2xhc3M6IFwiX3NlY29uZFwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiB1bmlxdWVVc2Vyc1syXSB8fCBudWxsLCBjbGFzczogXCJfc2Vjb25kXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IHVzZXI6IG51bGwsIGNsYXNzOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiB1bmlxdWVVc2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpIHx8IG51bGwsIGNsYXNzOiBcInlvdVwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiBudWxsLCBjbGFzczogXCJcIiB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHsgdXNlcjogbnVsbCwgY2xhc3M6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICB7IHVzZXI6IG51bGwsIGNsYXNzOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiBudWxsLCBjbGFzczogXCJcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogbnVsbCwgY2xhc3M6IFwiXCIgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINC90LDRj9Cy0L3RltGB0YLRjCDQv9C+0YLQvtGH0L3QvtCz0L4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsFxuICAgICAgICBjb25zdCBjdXJyZW50VXNlckluZGV4ID0gdW5pcXVlVXNlcnMuZmluZEluZGV4KHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBuZXh0VXNlciA9IGN1cnJlbnRVc2VySW5kZXggPT09IC0xID8gdW5pcXVlVXNlcnNbMF0gOiB1bmlxdWVVc2Vyc1tjdXJyZW50VXNlckluZGV4ICsgMV07XG5cbiAgICAgICAgLy8g0K/QutGJ0L4g0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LAg0L3QtdC80LDRlCDRliDQstGW0L0g0L3QtSDQsiDQv9C10YDRiNGW0Lkg0YfQtdGC0LLRltGA0YbRliwg0YLQviDRgNC10L3QtNC10YDQuNC80L4g0L3QsNGB0YLRg9C/0L3QvtCz0L5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJQbGFjZSA9IGN1cnJlbnRVc2VySW5kZXggPCA0ID8gY3VycmVudFVzZXJJbmRleCArIDEgOiBudWxsOyAvLyDQr9C60YnQviDQv9C+0YLQvtGH0L3QuNC5INC60L7RgNC40YHRgtGD0LLQsNGHINGUINGDINC/0LXRgNGI0ZbQuSDRh9C10YLQstGW0YDRhtGWXG4gICAgICAgIGNvbnN0IHVzZXJUb1JlbmRlciA9IGN1cnJlbnRVc2VyUGxhY2UgPT09IG51bGwgPyBuZXh0VXNlciA6IG51bGw7XG5cbiAgICAgICAgLy8g0KDQtdC90LTQtdGA0LjQvNC+INC60L7QttC10L0g0YDRj9C00L7QulxuICAgICAgICByb3dzLmZvckVhY2goKGNvbHVtbnMsIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVSb3coY29sdW1ucyk7XG4gICAgICAgICAgICByb3dDb25maWdbcm93SW5kZXhdLmZvckVhY2goKHsgdXNlciwgY2xhc3M6IGV4dHJhQ2xhc3MgfSwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2UgPSB1bmlxdWVVc2Vycy5pbmRleE9mKHVzZXIpICsgMTsgIC8vINCX0L3QsNGF0L7QtNC40LzQviDQv9C+0LfQuNGG0ZbRjiDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINCyINGD0L3RltC60LDQu9GM0L3QvtC80YMg0YHQv9C40YHQutGDXG5cbiAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDQv9C+0YLQvtGH0L3QvtCz0L4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsCDQvdC10LzQsCDQsiDRgtCw0LHQu9C40YbRliDRliDQstGW0L0g0L3QtSDQsiDQv9C10YDRiNGW0Lkg0YfQtdGC0LLRltGA0YbRliwg0YDQtdC90LTQtdGA0LjQvNC+INC90LDRgdGC0YPQv9C90L7Qs9C+XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyICYmIHVzZXJUb1JlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICB1c2VyID0gdXNlclRvUmVuZGVyOyAvLyDQr9C60YnQviDQv9C+0YLQvtGH0L3QvtCz0L4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsCDQvdC10LzQsNGULCDRgdGC0LDQstC40LzQviDQvdCw0YHRgtGD0L/QvdC+0LPQvlxuICAgICAgICAgICAgICAgICAgICBwbGFjZSA9IHVuaXF1ZVVzZXJzLmluZGV4T2YodXNlcikgKyAxOyAvLyDQntC90L7QstC70Y7RlNC80L4g0LzRltGB0YbQtVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjcmVhdGVVc2VyQmxvY2sodXNlciwgZXh0cmFDbGFzcywgdXNlciA/IHBsYWNlIDogJycpKTsgLy8g0K/QutGJ0L4g0LrQvtGA0LjRgdGC0YPQstCw0Ycg0ZQsINC/0LXRgNC10LTQsNGU0LzQviDQvNGW0YHRhtC1LCDRltC90LDQutGI0LUg0L/QvtGA0L7QttC90ZQg0LfQvdCw0YfQtdC90L3Rj1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpOyAvLyDQlNC+0LTQsNGU0LzQviDRgNGP0LTQvtC6INC00L4g0YLQsNCx0LvQuNGG0ZZcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrU3RhdHVzKCkge1xuICAgICAgICBiZXRXaW5Db3VudGVyIDwgNiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X190YWJsZVwiKS5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIikgOiBudWxsXG4gICAgICAgIGNvbnN0IGFjdGl2ZUx2bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLWx2bC5fYWN0aXZlXCIpO1xuICAgICAgICBjb25zdCBjb25kaXRpb25zID0ge1xuICAgICAgICAgICAgYmV0OiB7XG4gICAgICAgICAgICAgICAgMTogYmV0V2luQ291bnRlciA+IDEsXG4gICAgICAgICAgICAgICAgMjogYmV0V2luQ291bnRlciA+IDMsXG4gICAgICAgICAgICAgICAgMzogYmV0V2luQ291bnRlciA+IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbHZsOiB7XG4gICAgICAgICAgICAgICAgMTogY3VycmVudEx2bCA9PT0gMSxcbiAgICAgICAgICAgICAgICAyOiBjdXJyZW50THZsID09PSAyLFxuICAgICAgICAgICAgICAgIDM6IGN1cnJlbnRMdmwgPT09IDMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgaWYgKGNvbmRpdGlvbnMuYmV0W2N1cnJlbnRMdmxdICYmIGNvbmRpdGlvbnMubHZsW2N1cnJlbnRMdmxdKSB7XG4gICAgICAgICAgICBsdmxTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpO1xuICAgICAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUx2bCkgYWN0aXZlTHZsLmNsYXNzTGlzdC5hZGQoXCJfdXBcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBsdmxTdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgbHZsU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpe1xuICAgICAgICBpZih1c2VySWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzXCIpLnN0eWxlLm1hcmdpbiA9IFwiMFwiXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy13cmFwXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYoIXVzZXJJZCkgcmV0dXJuXG4gICAgICAgIGxldmVscy5mb3JFYWNoKChsdmwsIGkpID0+e1xuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl9kb25lXCIpXG4gICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4gICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl91cFwiKVxuICAgICAgICAgICAgaWYoKytpID09PSBjdXJyZW50THZsKSB7XG4gICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG5cbiAgICAgICAgICAgICAgICBpZiAobHZsU3RhdHVzID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdXBcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMSAmJiBiZXRXaW5Db3VudGVyIDw9IDAgJiYgbHZsU3RhdHVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMSAmJiBiZXRXaW5Db3VudGVyIDw9IDAgJiYgbHZsU3RhdHVzID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDIgJiYgYmV0V2luQ291bnRlciA8PSAyICYmIGx2bFN0YXR1cyA9PT0gZmFsc2UgKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAyICYmIGJldFdpbkNvdW50ZXIgPD0gMiAmJiBsdmxTdGF0dXMgPT09IHRydWUgKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDMgJiYgYmV0V2luQ291bnRlciA8PSA0ICYmIGx2bFN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDMgJiYgYmV0V2luQ291bnRlciA8PSA0ICYmIGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSA8IGN1cnJlbnRMdmwsIGkgLCBjdXJyZW50THZsLCBsdmwpXG4gICAgICAgICAgICBpIDwgY3VycmVudEx2bCA/IGx2bC5jbGFzc0xpc3QuYWRkKFwiX2RvbmVcIikgOiBudWxsXG4gICAgICAgICAgICBsZXZlbEJvdHRvbVRleHQuZm9yRWFjaCgoaXRlbSwgaSkgPT57XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA8PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpID09PSBjdXJyZW50THZsIC0gMSl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpIHtcbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIiwgXCJfbGVmdFwiLCBcIl9yaWdodFwiLCBcIl9sb2NrXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYoIXVzZXJJZCl7XG4gICAgICAgIC8vICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBhY3RpdmVJbmRleCA9IGN1cnJlbnRMdmwgLSAxO1xuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPj0gY2FzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IGNhc2VzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJldkluZGV4ID0gYWN0aXZlSW5kZXggLSAxIDwgMCA/IGNhc2VzLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCArIDEgPj0gY2FzZXMubGVuZ3RoID8gMCA6IGFjdGl2ZUluZGV4ICsgMTtcblxuICAgICAgICBjYXNlc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIik7XG4gICAgICAgIGNhc2VzW3ByZXZJbmRleF0uY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpO1xuICAgICAgICBjYXNlc1tuZXh0SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfcmlnaHRcIik7XG5cbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiBsdmxVcCgpe1xuICAgICAgICBjdXJyZW50THZsID0gY3VycmVudEx2bCArIDFcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgYCR7Y3VycmVudEx2bH1gKVxuICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgIHJldHVybiBsdmxTdGF0dXNcbiAgICB9XG5cbiAgICAvLyBjaGVja1N0YXR1cygpXG5cblxuXG4vLyBjb25zb2xlLmxvZyhpZEFycilcblxuICAgIGZ1bmN0aW9uIGNoZWNrUGxhY2VMZW5ndGgoKXtcbiAgICAgICAgY29uc3QgdXNlclBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55b3VcIiksXG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZSA9IHVzZXJQbGFjZS5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19ibG9jay1wbGFjZVwiKTtcblxuICAgICAgICBsZXQgaWRBcnIgPSB1c2VyVGFibGVQbGFjZS50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX29uZScpXG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSAyKXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ190d28nKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gMyl7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfdGhyZWUnKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gNCl7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfZm91cicpXG4gICAgICAgIH1cblxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDUpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX2ZpdmUnKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIG9wZW5DYXNlQW5pbShib3gpe1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpXG4gICAgICAgIGJveC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fY2FwXCIpLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpXG4gICAgICAgIGdldEJ0bi5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGJveC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fY2FwLWZyb250XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIH0sIDMwMClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX3Nob3dcIilcbiAgICAgICAgfSwgMTUwKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgbHZsVXAoKVxuICAgICAgICAgICAgcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpXG4gICAgICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgIH0sIDQwMDApXG4gICAgfVxuXG5cblxuXG4gICAgZ2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIGNhc2VzLmZvckVhY2goKGJveCwgaSkgPT57XG4gICAgICAgICAgICBpZihib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2FjdGl2ZVwiKSl7XG4gICAgICAgICAgICAgICAgb3BlbkNhc2VBbmltKGJveClcbiAgICAgICAgICAgICAgICAvLyBnZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgICAgICAgICAgLy8gY2hlY2tTdGF0dXMoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9KVxuXG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cChidG5PcGVuLCBidG5DbG9zZSwgcG9wdXAsIGhpZGUpe1xuICAgICAgICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICBpZihoaWRlKXtcbiAgICAgICAgICAgICAgICBidG5PcGVuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcIl9wb3B1cFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZihidG5DbG9zZSl7XG4gICAgICAgICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgYnRuT3Blbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIC8vIGlmKGhpZGUpe1xuICAgICAgICAgICAgICAgIC8vICAgICBidG5PcGVuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcIi5fcG9wdXBcIilcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICBpZighcG9wdXAuY29udGFpbnMoZS50YXJnZXQpICYmIGUudGFyZ2V0ICE9PSBidG5PcGVuKXtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgaWYoaGlkZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5PcGVuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0UG9wdXAocHJvZ3Jlc3NQb3B1cEJ0biwgcHJvZ3Jlc3NQb3B1cENsb3NlLCBwcm9ncmVzc1BvcHVwKVxuICAgIHNldFBvcHVwKHVwZFBvcHVwQnRuLCB1cGRQb3B1cENsb3NlLCB1cGRQb3B1cCwgdHJ1ZSlcbiAgICBzZXRQb3B1cChyZXN1bHRQb3B1cEJ0biwgcmVzdWx0UG9wdXBCdG5DbG9zZSwgcmVzdWx0UG9wdXAsIHRydWUpXG5cbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bihlbmRUaW1lKSB7XG4gICAgICAgIGNvbnN0IGhvdXJzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aW1lcl9faG91cnMtaXRlbVwiKTtcbiAgICAgICAgY29uc3QgbWludXRlc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX21pbnV0ZXMtaXRlbVwiKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX3NlY29uZHMtaXRlbVwiKTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgdGltZUxlZnQgPSBlbmRUaW1lIC0gbm93O1xuXG4gICAgICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCBcIjAwXCIpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhtaW51dGVzRWxzLCBcIjAwXCIpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhzZWNvbmRzRWxzLCBcIjAwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCkpICUgNjApO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gMTAwMCkgJSA2MCk7XG5cbiAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhob3Vyc0VscywgU3RyaW5nKGhvdXJzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgICAgICAgICAgdXBkYXRlRGlnaXRzKG1pbnV0ZXNFbHMsIFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgICAgICAgICAgdXBkYXRlRGlnaXRzKHNlY29uZHNFbHMsIFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGlnaXRzKGVsZW1lbnRzLCB2YWx1ZSkge1xuICAgICAgICAgICAgZWxlbWVudHNbMF0udGV4dENvbnRlbnQgPSB2YWx1ZVswXTtcbiAgICAgICAgICAgIGVsZW1lbnRzWzFdLnRleHRDb250ZW50ID0gdmFsdWVbMV07XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUaW1lcigpO1xuICAgICAgICBjb25zdCB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZW5kT2ZEYXkgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCksIDIzLCA1OSwgNTkpLmdldFRpbWUoKTtcblxuICAgIHN0YXJ0Q291bnRkb3duKGVuZE9mRGF5KTtcblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWx2bFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLW1lbnVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuICAgIH0pXG5cbiAgICBjb25zdCBsdmwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtMVwiKVxuICAgIGNvbnN0IGx2bDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC0yXCIpXG4gICAgY29uc3QgbHZsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLTNcIilcbiAgICBjb25zdCBsdmxVcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLXVwXCIpXG4gICAgY29uc3QgYmV0V2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZXQtd2luXCIpXG4gICAgY29uc3QgYmV0Q2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJldC1jbGVhclwiKVxuICAgIGNvbnN0IGJ0bkxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1sb2NrXCIpXG4gICAgY29uc3QgZGFya0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIilcbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgYmV0V2luLnRleHRDb250ZW50ID0gYHdpbiBiZXQ6ICR7YmV0V2luQ291bnRlcn1gXG5cbiAgICBiZXRXaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBiZXRXaW5Db3VudGVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikpIDogMFxuICAgICAgICBiZXRXaW5Db3VudGVyID0gYmV0V2luQ291bnRlciArIDFcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJldFdpbkNvdW50ZXJcIiwgYmV0V2luQ291bnRlcilcbiAgICAgICAgYmV0V2luLnRleHRDb250ZW50ID0gYHdpbiBiZXQ6ICR7YmV0V2luQ291bnRlcn1gXG4gICAgICAgIC8vIHJlZnJlc2hMdmwoY3VycmVudEx2bClcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuXG5cbiAgICB9KVxuXG4gICAgYmV0Q2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmV0V2luQ291bnRlclwiKVxuICAgICAgICBiZXRXaW5Db3VudGVyID0gMFxuICAgICAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogMGBcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjFcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIC8vIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKVxuXG4gICAgfSlcblxuICAgIGx2bDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjFcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcbiAgICBsdmwyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIyXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG4gICAgbHZsMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiM1wiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuXG4gICAgbHZsVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBsdmxTdGF0dXMgPSAhbHZsU3RhdHVzXG4gICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgbHZsU3RhdHVzID0gIWx2bFN0YXR1c1xuXG4gICAgfSlcblxuICAgIGJ0bkxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fdGFibGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcIl9sb2NrXCIpXG4gICAgfSlcblxuICAgIGRhcmtCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgfSlcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgJzEwMDg1Njg4OCcpXG4gICAgICAgIH1cbiAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duXCIpOyAvLyDQkdCw0YLRjNC60ZbQstGB0YzQutC40LkgZGV0YWlsc1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wLXR4dFwiKTtcblxuICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcihcInRvZ2dsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkZXRhaWxzLm9wZW4pIHsgLy8g0KHQv9GA0LDRhtGM0L7QstGD0ZQg0YLRltC70YzQutC4INC/0YDQuCDQstGW0LTQutGA0LjRgtGC0ZZcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBkcm9wZG93bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INC00YDQvtC/0LTQsNGD0L0g0LLQuNGF0L7QtNC40YLRjCDQt9CwINC80LXQttGWINC10LrRgNCw0L3RgyDQstC90LjQt1xuICAgICAgICAgICAgICAgIGlmIChyZWN0LmJvdHRvbSA+IHZpZXdwb3J0SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHJlY3QuYm90dG9tIC0gdmlld3BvcnRIZWlnaHQgKyA4MCwgLy8gMTBweCDigJQg0LfQsNC/0LDRgVxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LTRgNC+0L/QtNCw0YPQvSDQstC40YXQvtC00LjRgtGMINC30LAg0LLQtdGA0YXQvdGOINC80LXQttGDINC10LrRgNCw0L3Rg1xuICAgICAgICAgICAgICAgIGlmIChyZWN0LnRvcCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcmVjdC50b3AgLSA4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy8gY29uc3QgZHJvcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duXCIpO1xuICAgIC8vXG4gICAgLy8gZHJvcHMuZm9yRWFjaChkcm9wID0+IHtcbiAgICAvLyAgICAgZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBpc0lPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW07XG4gICAgLy8gICAgICAgICBjb25zdCBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkfGNyaW9zfGZ4aW9zKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnN0IGlzTW9iaWxlU2FmYXJpID0gaXNJT1MgJiYgaXNTYWZhcmk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmICghaXNNb2JpbGVTYWZhcmkpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyDQkdC70L7QutGD0ZTQvNC+INC/0YDQvtC60YDRg9GC0LrRgyDRgdGC0L7RgNGW0L3QutC4INCx0LXQtyDQtNC10YDQs9Cw0L3QvdGPXG4gICAgLy8gICAgICAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBgLSR7c2Nyb2xsWX1weGA7XG4gICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0LrQvtGA0LXQutGG0ZbRjiDQtNC70Y8g0YjQuNGA0LjQvdC4LCDRidC+0LEg0YPQvdC40LrQvdGD0YLQuCDRgdGC0YDQuNCx0LrRltCyINGB0YLQvtGA0ZbQvdC60LhcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIC8vICAgICAgICAgICAgIGlmIChzY3JvbGxiYXJXaWR0aCA+IDApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkU2Nyb2xsWSA9IE1hdGguYWJzKHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCkpO1xuICAgIC8vICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICAvLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBcIlwiO1xuICAgIC8vICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gXCJcIjtcbiAgICAvLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzYXZlZFNjcm9sbFkpO1xuICAgIC8vICAgICAgICAgICAgIH0sIDApO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAvLyDQlNC70Y8gaU9TINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gYWx0ZXJuYXRpdmUg0YHQv9C+0YHRltCxXG4gICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGRyb3Auc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJuZWFyZXN0XCIsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgIC8vICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGRyb3AuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxufSkoKVxuXG4iXX0=
