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
  //
  // function displayUserInfo(userInfo) {
  //     const bets = userInfo.bets.slice(0, 10);
  //     // let bets = [{betDate: new Date(), status: 'undefined'}]
  //     // refreshLastUpdatedDate(userInfo);
  // }
  //
  // // function refreshLastUpdatedDate(userInfo) {
  // //     const dateContainer = document.querySelector('.result__last-upd');
  // //     const span = document.getElementById('lastUpd');
  // //     if (userInfo.lastUpdate) {
  // //         span.innerHTML = formatDate(userInfo.lastUpdate);
  // //         dateContainer.classList.remove('hide');
  // //     } else {
  // //         dateContainer.classList.add('hide');
  // //     }
  // // }

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
  var drops = document.querySelectorAll(".dropdown");
  drops.forEach(function (drop) {
    drop.addEventListener("click", function (event) {
      // Перевірка на iOS
      var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

      // Перевірка на Safari
      var isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);

      // Якщо пристрій не iOS і браузер не Safari
      if (!isIOS && !isSafari) {
        // Якщо відкриваємо дроп
        var scrollY = window.scrollY; // Запам'ятовуємо поточну позицію скролу
        document.body.style.position = "fixed"; // Фіксуємо body
        document.body.style.top = "-".concat(scrollY, "px"); // Переміщаємо body, щоб зберегти поточну позицію
        document.body.style.width = "100vw"; // Щоб не зміщувалася ширина при фіксації
        setTimeout(function () {
          var scrollY = Math.abs(parseInt(document.body.style.top, 10)); // Отримуємо збережений скрол
          document.body.style.position = ""; // Відновлюємо normal стан для body
          document.body.style.top = ""; // Скидаємо top
          document.body.style.width = ""; // Відновлюємо ширину

          // Повертаємося на збережену позицію
          window.scrollTo(0, scrollY);
        }, 0);
        drop.classList.toggle("open"); // Перемикаємо стан дропдауну
      }
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY2FzZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRCdG4iLCJxdWVyeVNlbGVjdG9yIiwibGV2ZWxzIiwicHJvZ3Jlc3NQb3B1cCIsInByb2dyZXNzUG9wdXBCdG4iLCJwcm9ncmVzc1BvcHVwQ2xvc2UiLCJ1cGRQb3B1cCIsInVwZFBvcHVwQnRuIiwidXBkUG9wdXBDbG9zZSIsInJlc3VsdFBvcHVwIiwicmVzdWx0UG9wdXBCdG4iLCJyZXN1bHRQb3B1cEJ0bkNsb3NlIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsIm1haW5QYWdlIiwicmVzdWx0c1RhYmxlIiwibGV2ZWxCb3R0b21UZXh0IiwiY3VycmVudEx2bCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIk51bWJlciIsImx2bFN0YXR1cyIsImNoZWNrU3RhdHVzIiwiYmV0V2luQ291bnRlciIsImxvY2FsZSIsInVrTGVuZyIsImVuTGVuZyIsInRlc3RVc2VycyIsInVzZXJpZCIsImJldHMiLCJkYXRlIiwiZGVidWciLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiZ2V0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXF1ZXN0IiwiaW5pdCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImNoZWNrVXNlckF1dGgiLCJyZWZyZXNoQ2FzZXMiLCJ0aGVuIiwicmVzIiwidXNlcnMiLCJzb3J0IiwiYSIsImIiLCJwb2ludHMiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsInJlbmRlclVzZXJzIiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJpdGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibG9hZFRyYW5zbGF0aW9ucyIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRCb3R0b20iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsInRyYW5zbGF0ZUtleSIsImRlZmF1bHRWYWwiLCJmb3JtYXREYXRlIiwibG9jYWxEYXRlIiwiRGF0ZSIsImRheSIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJoZWFkZXJzIiwidW5hdXRoTWVzIiwicGFydGljaXBhdGVCdG4iLCJyZXNvbHZlIiwiZ3JvdXBlZEJ5RGF0ZSIsInJlZHVjZSIsImFjYyIsInVzZXIiLCJzcGxpdCIsInB1c2giLCJkYXRlcyIsIk9iamVjdCIsImtleXMiLCJhY3RpdmVEYXRlIiwidXBkYXRlQWN0aXZlRGF0ZSIsImVsIiwidG9nZ2xlIiwiZGF0YXNldCIsImN1cnJlbnRVc2VycyIsImN1cnJlbnRVc2VyIiwiZmluZCIsInRvcFVzZXJzIiwic2xpY2UiLCJjdXJyZW50VXNlckluZGV4IiwiaW5kZXhPZiIsInBvcHVsYXRlVXNlcnNUYWJsZSIsIm5hdkNvbnRhaW5lciIsIm1hcCIsImluZGV4IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiam9pbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwiY3VycmVudFVzZXJJZCIsInRhYmxlIiwiY3JlYXRlUm93IiwiY29sdW1ucyIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY3JlYXRlVXNlckJsb2NrIiwiZXh0cmFDbGFzcyIsInBsYWNlIiwiYmxvY2siLCJpY29uIiwiaW1nIiwic3JjIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJpbmZvIiwiaWRDb250ZW50IiwicGxhY2VDb250ZW50IiwiYWRkZWRVc2VySWRzIiwiU2V0IiwidW5pcXVlVXNlcnMiLCJmaWx0ZXIiLCJoYXMiLCJyb3dzIiwicm93Q29uZmlnIiwiZmluZEluZGV4IiwibmV4dFVzZXIiLCJjdXJyZW50VXNlclBsYWNlIiwidXNlclRvUmVuZGVyIiwicm93SW5kZXgiLCJjb2xJbmRleCIsImFjdGl2ZUx2bCIsImNvbmRpdGlvbnMiLCJiZXQiLCJsdmwiLCJyZWZyZXNoTHZsIiwiYm94IiwiYWN0aXZlSW5kZXgiLCJwcmV2SW5kZXgiLCJuZXh0SW5kZXgiLCJsdmxVcCIsInNldEl0ZW0iLCJjaGVja1BsYWNlTGVuZ3RoIiwidXNlclBsYWNlIiwidXNlclRhYmxlUGxhY2UiLCJpZEFyciIsInRleHRDb250ZW50Iiwib3BlbkNhc2VBbmltIiwic2V0VGltZW91dCIsInNldFBvcHVwIiwiYnRuT3BlbiIsImJ0bkNsb3NlIiwicG9wdXAiLCJoaWRlIiwicGFyZW50Tm9kZSIsImUiLCJzdGFydENvdW50ZG93biIsImVuZFRpbWUiLCJob3Vyc0VscyIsIm1pbnV0ZXNFbHMiLCJzZWNvbmRzRWxzIiwidXBkYXRlVGltZXIiLCJub3ciLCJnZXRUaW1lIiwidGltZUxlZnQiLCJ0aW1lckludGVydmFsIiwidXBkYXRlRGlnaXRzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsImVsZW1lbnRzIiwidmFsdWUiLCJlbmRPZkRheSIsImdldEZ1bGxZZWFyIiwibHZsMSIsImx2bDIiLCJsdmwzIiwibHZsVXBCdG4iLCJiZXRXaW4iLCJiZXRDbGVhciIsImJ0bkxvY2siLCJkYXJrQnRuIiwiYXV0aEJ0biIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsImRyb3BzIiwiZHJvcCIsImlzSU9TIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIk1TU3RyZWFtIiwiaXNTYWZhcmkiLCJzY3JvbGxZIiwicG9zaXRpb24iLCJ0b3AiLCJ3aWR0aCIsImFicyIsInBhcnNlSW50Iiwic2Nyb2xsVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsWUFBVztFQUFBO0VBQ1I7RUFDQTtFQUNBLElBQU1BLE1BQU0sR0FBRyx3Q0FBd0M7SUFDbkRDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztJQUN2REMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDM0NDLE1BQU0sR0FBR0osUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztJQUMxREksYUFBYSxHQUFHTCxRQUFRLENBQUNHLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztJQUNoRUcsZ0JBQWdCLEdBQUdOLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLDRCQUE0QixDQUFDO0lBQ3ZFSSxrQkFBa0IsR0FBR1AsUUFBUSxDQUFDRyxhQUFhLENBQUMsOEJBQThCLENBQUM7SUFDM0VLLFFBQVEsR0FBR1IsUUFBUSxDQUFDRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDcERNLFdBQVcsR0FBR1QsUUFBUSxDQUFDRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDdkRPLGFBQWEsR0FBR1YsUUFBUSxDQUFDRyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDL0RRLFdBQVcsR0FBR1gsUUFBUSxDQUFDRyxhQUFhLENBQUMseUJBQXlCLENBQUM7SUFDL0RTLGNBQWMsR0FBR1osUUFBUSxDQUFDRyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDaEVVLG1CQUFtQixHQUFHYixRQUFRLENBQUNHLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztJQUM3RVcsVUFBVSxHQUFHZCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyRGMsZUFBZSxHQUFHZixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUN4RGUsWUFBWSxHQUFHaEIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDckRnQixRQUFRLEdBQUdqQixRQUFRLENBQUNHLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDOUNlLFlBQVksR0FBR2xCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMvQ2dCLGVBQWUsR0FBR25CLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7RUFFMUUsSUFBSW1CLFVBQVUsR0FBR0MsY0FBYyxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0YsY0FBYyxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBRXhHLElBQUlFLFNBQVMsR0FBR0MsV0FBVyxFQUFFO0VBQzdCLElBQUlDLGFBQWEsR0FBR0wsY0FBYyxDQUFDQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0YsY0FBYyxDQUFDQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ2pILElBQUlLLE1BQU0sNEJBQUdOLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5RUFBSSxJQUFJO0VBRXJELElBQU1NLE1BQU0sR0FBRzVCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFNMEIsTUFBTSxHQUFHN0IsUUFBUSxDQUFDRyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBRWhELElBQUl5QixNQUFNLEVBQUVELE1BQU0sR0FBRyxJQUFJO0VBQ3pCLElBQUlFLE1BQU0sRUFBRUYsTUFBTSxHQUFHLElBQUk7RUFFekIsSUFBTUcsU0FBUyxHQUFHLENBQ2Q7SUFBRUMsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLEVBQUU7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDNUQ7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLEVBQUU7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDNUQ7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLEVBQUU7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDNUQ7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7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RSxDQUFDLENBQUM7VUFDbkN2UCxRQUFRLENBQUNvRSxJQUFJLENBQUN1RixLQUFLLENBQUM2RixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7VUFDOUJ4UCxRQUFRLENBQUNvRSxJQUFJLENBQUN1RixLQUFLLENBQUM4RixLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7O1VBRWhDO1VBQ0E5TSxNQUFNLENBQUNpTixRQUFRLENBQUMsQ0FBQyxFQUFFTixPQUFPLENBQUM7UUFDL0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVUUCxJQUFJLENBQUN0SyxTQUFTLENBQUN5RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUNuQztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQWVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfbW91bnRhaW5fa2luZydcbiAgICAvLyBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3ZpcCcsXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9tb3VudGFpbl9raW5nJyxcbiAgICAgICAgY2FzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvbnVzX19ib3hlcy1pdGVtXCIpLFxuICAgICAgICBnZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdldC1idG5cIiksXG4gICAgICAgIGxldmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9udXNfX3Byb2dyZXNzLWx2bFwiKSxcbiAgICAgICAgcHJvZ3Jlc3NQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXBvcHVwXCIpLFxuICAgICAgICBwcm9ncmVzc1BvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3MtdGl0bGUtYnRuXCIpLFxuICAgICAgICBwcm9ncmVzc1BvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgdXBkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX193YXJuaW5nXCIpLFxuICAgICAgICB1cGRQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3VwZC1idG5cIiksXG4gICAgICAgIHVwZFBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX193YXJuaW5nLWNsb3NlXCIpLFxuICAgICAgICByZXN1bHRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19zdWJ0aXRsZS1wb3B1cFwiKSxcbiAgICAgICAgcmVzdWx0UG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fc3VidGl0bGUtYnRuXCIpLFxuICAgICAgICByZXN1bHRQb3B1cEJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3N1YnRpdGxlLXBvcHVwLWNsb3NlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVcIiksXG4gICAgICAgIGxldmVsQm90dG9tVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9udXNfX3Byb2dyZXNzLWJvdHRvbVwiKTtcblxuICAgIGxldCBjdXJyZW50THZsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMdmxcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMdmxcIikpIDogMVxuXG4gICAgbGV0IGx2bFN0YXR1cyA9IGNoZWNrU3RhdHVzKCk7XG4gICAgbGV0IGJldFdpbkNvdW50ZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSkgOiAwXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPz8gXCJ1a1wiXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgY29uc3QgdGVzdFVzZXJzID0gW1xuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjU2LCBiZXRzOiAxMCwgZGF0ZTogXCIyMDI1LTAyLTE4VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1NywgYmV0czogOCwgZGF0ZTogXCIyMDI1LTAyLTE4VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1OCwgYmV0czogNywgZGF0ZTogXCIyMDI1LTAyLTE4VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1OSwgYmV0czogNSwgZGF0ZTogXCIyMDI1LTAyLTE4VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1MiwgYmV0czogMywgZGF0ZTogXCIyMDI1LTAyLTE4VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1MywgYmV0czogMTEsIGRhdGU6IFwiMjAyNS0wMi0xOVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNDUsIGJldHM6IDgsIGRhdGU6IFwiMjAyNS0wMi0xOVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNDYsIGJldHM6IDYsIGRhdGU6IFwiMjAyNS0wMi0xOVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNDcsIGJldHM6IDQsIGRhdGU6IFwiMjAyNS0wMi0xOVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyMzQsIGJldHM6IDIsIGRhdGU6IFwiMjAyNS0wMi0xOVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyMzIsIGJldHM6IDExLCBkYXRlOiBcIjIwMjUtMDItMjBUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjMxLCBiZXRzOiA4LCBkYXRlOiBcIjIwMjUtMDItMjBUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjIyLCBiZXRzOiA2LCBkYXRlOiBcIjIwMjUtMDItMjFUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjIzLCBiZXRzOiA0LCBkYXRlOiBcIjIwMjUtMDItMjJUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwODU2ODgyLCBiZXRzOiA1LCBkYXRlOiBcIjIwMjUtMDItMjNUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwODU2ODgzLCBiZXRzOiA0LCBkYXRlOiBcIjIwMjUtMDItMjNUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwODU2ODg0LCBiZXRzOiAzLCBkYXRlOiBcIjIwMjUtMDItMjNUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwODU2ODg4LCBiZXRzOiAyLCBkYXRlOiBcIjIwMjUtMDItMjNUMTI6MDA6MDBcIiB9LFxuICAgIF07XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlO1xuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA6IG51bGxcbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjg7XG4gICAgLy8gdXNlcklkID0gMTAwODU2ODg4O1xuXG4gICAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHJlcXVlc3QoJy91c2Vycz9ub2NhY2hlPTEnKSxcbiAgICAgICAgXSlcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgICAgIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKVxuICAgICAgICAgICAgZ2V0RGF0YSgpLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgICAgIGxldCB1c2VycyA9IHJlc1swXS5zb3J0KChhLCBiKSA9PiBiLnBvaW50cyAtIGEucG9pbnRzKTtcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJVc2Vycyh1c2Vycyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgICAgIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKVxuICAgICAgICAgICAgZ2V0RGF0YSgpLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgICAgIGxldCB1c2VycyA9IHJlc1swXS5zb3J0KChhLCBiKSA9PiBiLnBvaW50cyAtIGEucG9pbnRzKTtcbiAgICAgICAgICAgICAgICBpZighZGVidWcpe1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2Vycyh1c2Vycyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHRlc3RVc2VycylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uLnJlc3VsdEJvdHRvbSlcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29yayFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWwpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBkaXNwbGF5VXNlckluZm8odXNlckluZm8pIHtcbiAgICAvLyAgICAgY29uc3QgYmV0cyA9IHVzZXJJbmZvLmJldHMuc2xpY2UoMCwgMTApO1xuICAgIC8vICAgICAvLyBsZXQgYmV0cyA9IFt7YmV0RGF0ZTogbmV3IERhdGUoKSwgc3RhdHVzOiAndW5kZWZpbmVkJ31dXG4gICAgLy8gICAgIC8vIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8vIGZ1bmN0aW9uIHJlZnJlc2hMYXN0VXBkYXRlZERhdGUodXNlckluZm8pIHtcbiAgICAvLyAvLyAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2xhc3QtdXBkJyk7XG4gICAgLy8gLy8gICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdFVwZCcpO1xuICAgIC8vIC8vICAgICBpZiAodXNlckluZm8ubGFzdFVwZGF0ZSkge1xuICAgIC8vIC8vICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmb3JtYXREYXRlKHVzZXJJbmZvLmxhc3RVcGRhdGUpO1xuICAgIC8vIC8vICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgLy8gLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gLy8gICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAvLyAvLyAgICAgfVxuICAgIC8vIC8vIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcobG9jYWxEYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBnZXRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclVzZXJzID0gKHVzZXJzKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwZWRCeURhdGUgPSB1c2Vycy5yZWR1Y2UoKGFjYywgdXNlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHVzZXIuZGF0ZS5zcGxpdChcIlRcIilbMF07XG4gICAgICAgICAgICBhY2NbZGF0ZV0gPSBhY2NbZGF0ZV0gfHwgW107XG4gICAgICAgICAgICBhY2NbZGF0ZV0ucHVzaCh1c2VyKTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgY29uc3QgZGF0ZXMgPSBPYmplY3Qua2V5cyhncm91cGVkQnlEYXRlKS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiKSAtIG5ldyBEYXRlKGEpKTtcbiAgICAgICAgbGV0IGFjdGl2ZURhdGUgPSBkYXRlc1swXTtcblxuICAgICAgICBjb25zdCB1cGRhdGVBY3RpdmVEYXRlID0gKGRhdGUpID0+IHtcbiAgICAgICAgICAgIGFjdGl2ZURhdGUgPSBkYXRlO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdF9fdGFibGUtbmF2LWl0ZW1cIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwiX2FjdGl2ZVwiLCBlbC5kYXRhc2V0LmRhdGUgPT09IGRhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlcnMgPSBncm91cGVkQnlEYXRlW2RhdGVdIHx8IFtdO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VySWQgJiYgY3VycmVudFVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcbiAgICAgICAgICAgIGxldCB0b3BVc2VycyA9IGN1cnJlbnRVc2Vycy5zbGljZSgwLCA0KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySW5kZXggPSBjdXJyZW50VXNlcnMuaW5kZXhPZihjdXJyZW50VXNlcik7XG4gICAgICAgICAgICAgICAgdG9wVXNlcnMgPSBbLi4udG9wVXNlcnMsIGN1cnJlbnRVc2VyXTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodG9wVXNlcnMsIHVzZXJJZCwgcmVzdWx0c1RhYmxlLCBjdXJyZW50VXNlcnMsIGN1cnJlbnRVc2VySW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodG9wVXNlcnMsIHVzZXJJZCwgcmVzdWx0c1RhYmxlLCBjdXJyZW50VXNlcnMsIDQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X190YWJsZS1uYXZcIik7XG4gICAgICAgIG5hdkNvbnRhaW5lci5pbm5lckhUTUwgPSBkYXRlcy5tYXAoKGRhdGUsIGluZGV4KSA9PiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRfX3RhYmxlLW5hdi1pdGVtICR7aW5kZXggPT09IDAgPyBcIl9hY3RpdmVcIiA6IFwiXCJ9XCIgZGF0YS1kYXRlPVwiJHtkYXRlfVwiPlxuICAgICAgICAgICAgJHtuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJ1ay1VQVwiLCB7IGRheTogXCIyLWRpZ2l0XCIsIG1vbnRoOiBcIjItZGlnaXRcIiB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgYCkuam9pbihcIlwiKTtcblxuICAgICAgICBuYXZDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXN1bHRfX3RhYmxlLW5hdi1pdGVtXCIpKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQWN0aXZlRGF0ZShldmVudC50YXJnZXQuZGF0YXNldC5kYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlQWN0aXZlRGF0ZShhY3RpdmVEYXRlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB0YWJsZSkge1xuICAgICAgICB0YWJsZS5pbm5lckhUTUwgPSAnJzsgLy8g0J7Rh9C40YnQsNGU0LzQviDRgtCw0LHQu9C40YbRjiDQv9C10YDQtdC0INGA0LXQvdC00LXRgNC40L3Qs9C+0LxcblxuICAgICAgICBjb25zdCBjcmVhdGVSb3cgPSAoY29sdW1ucykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3Jvd1wiKTtcbiAgICAgICAgICAgIHJvdy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sdW1uc1wiLCBjb2x1bW5zKTsgLy8g0KHRgtC40LvRliDQtNC70Y8g0LrQvtC70L7QvdC+0LpcbiAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY3JlYXRlVXNlckJsb2NrID0gKHVzZXIsIGV4dHJhQ2xhc3MgPSBcIlwiLCBwbGFjZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInRhYmxlX19ibG9ja1wiKTtcbiAgICAgICAgICAgIGlmIChleHRyYUNsYXNzKSBibG9jay5jbGFzc0xpc3QuYWRkKGV4dHJhQ2xhc3MpO1xuXG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcInRhYmxlX19ibG9jay1pY29uXCIpO1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBcIi4vaW1nL3RhYmxlL2ljb24ucG5nXCI7XG4gICAgICAgICAgICBpbWcuYWx0ID0gXCJGYXZiZXRcIjtcbiAgICAgICAgICAgIGljb24uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZChcInRhYmxlX19ibG9jay1pbmZvXCIpO1xuXG4gICAgICAgICAgICBsZXQgaWRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgIGlkQ29udGVudCA9IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkXG4gICAgICAgICAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJ5b3VyLWlkXCIgZGF0YS10cmFuc2xhdGU9XCJ5b3VySWRcIj7QotCy0L7RlCBpZDwvZGl2PmBcbiAgICAgICAgICAgICAgICAgICAgOiBgaWQgJHt1c2VyLnVzZXJpZH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZENvbnRlbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQr9C60YnQviDQutC+0YDQuNGB0YLRg9Cy0LDRhyDRlCwg0YLQviDRgNC10L3QtNC10YDQuNC80L4g0LzRltGB0YbQtVxuICAgICAgICAgICAgY29uc3QgcGxhY2VDb250ZW50ID0gdXNlciA/IGA8ZGl2IGNsYXNzPVwidGFibGVfX2Jsb2NrLXBsYWNlXCI+JHtwbGFjZX08L2Rpdj5gIDogJyc7XG5cbiAgICAgICAgICAgIGluZm8uaW5uZXJIVE1MID0gYFxuICAgICAgICAke3BsYWNlQ29udGVudH0gIDwhLS0g0J/QvtC60LDQt9GD0ZTQvNC+INC80ZbRgdGG0LUg0LrQvtGA0LjRgdGC0YPQstCw0YfQsCDRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0ZQg0LrQvtGA0LjRgdGC0YPQstCw0YcgLS0+XG4gICAgICAgICR7aWRDb250ZW50ID8gYDxkaXYgY2xhc3M9XCJ0YWJsZV9fYmxvY2staWRcIj4ke2lkQ29udGVudH08L2Rpdj5gIDogXCJcIn1cbiAgICAgICAgYDtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJldHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGJldHMuY2xhc3NMaXN0LmFkZChcInRhYmxlX19pbmZvLWJldHNcIik7XG4gICAgICAgICAgICAgICAgYmV0cy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19pbmZvLWJldHMtY291bnRlclwiPiR7dXNlci5iZXRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9faW5mby1iZXRzLXRleHRcIiBkYXRhLXRyYW5zbGF0ZT1cImJvbnVzQmV0c1wiPtCy0LjQs9GA0LDRiNC90ZYg0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKGJldHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0KTRltC70YzRgtGA0YPRlNC80L4g0LrQvtGA0LjRgdGC0YPQstCw0YfRltCyLCDRidC+0LEg0LTQvtC00LDRgtC4INGX0YUg0YPQvdGW0LrQsNC70YzQvdC+XG4gICAgICAgIGxldCBhZGRlZFVzZXJJZHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IHVuaXF1ZVVzZXJzID0gdXNlcnMuZmlsdGVyKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKCFhZGRlZFVzZXJJZHMuaGFzKHVzZXIudXNlcmlkKSkge1xuICAgICAgICAgICAgICAgIGFkZGVkVXNlcklkcy5hZGQodXNlci51c2VyaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0YDRj9C00LrRltCyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbMSwgMiwgMywgNF07IC8vINCd0LDQu9Cw0YjRgtC+0LLRg9GU0LzQviA0INGA0Y/QtNC60LhcbiAgICAgICAgY29uc3Qgcm93Q29uZmlnID0gW1xuICAgICAgICAgICAgW3sgdXNlcjogdW5pcXVlVXNlcnNbMF0gfHwgbnVsbCwgY2xhc3M6IFwiX2ZpcnN0XCIgfV0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgeyB1c2VyOiB1bmlxdWVVc2Vyc1sxXSB8fCBudWxsLCBjbGFzczogXCJfc2Vjb25kXCIgfSxcbiAgICAgICAgICAgICAgICB7IHVzZXI6IHVuaXF1ZVVzZXJzWzJdIHx8IG51bGwsIGNsYXNzOiBcIl9zZWNvbmRcIiB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHsgdXNlcjogbnVsbCwgY2xhc3M6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICB7IHVzZXI6IHVuaXF1ZVVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCkgfHwgbnVsbCwgY2xhc3M6IFwieW91XCIgfSxcbiAgICAgICAgICAgICAgICB7IHVzZXI6IG51bGwsIGNsYXNzOiBcIlwiIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgeyB1c2VyOiBudWxsLCBjbGFzczogXCJcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogbnVsbCwgY2xhc3M6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICB7IHVzZXI6IG51bGwsIGNsYXNzOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiBudWxsLCBjbGFzczogXCJcIiB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC90LAg0L3QsNGP0LLQvdGW0YHRgtGMINC/0L7RgtC+0YfQvdC+0LPQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySW5kZXggPSB1bmlxdWVVc2Vycy5maW5kSW5kZXgodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IG5leHRVc2VyID0gY3VycmVudFVzZXJJbmRleCA9PT0gLTEgPyB1bmlxdWVVc2Vyc1swXSA6IHVuaXF1ZVVzZXJzW2N1cnJlbnRVc2VySW5kZXggKyAxXTtcblxuICAgICAgICAvLyDQr9C60YnQviDQv9C+0YLQvtGH0L3QvtCz0L4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsCDQvdC10LzQsNGUINGWINCy0ZbQvSDQvdC1INCyINC/0LXRgNGI0ZbQuSDRh9C10YLQstGW0YDRhtGWLCDRgtC+INGA0LXQvdC00LXRgNC40LzQviDQvdCw0YHRgtGD0L/QvdC+0LPQvlxuICAgICAgICBjb25zdCBjdXJyZW50VXNlclBsYWNlID0gY3VycmVudFVzZXJJbmRleCA8IDQgPyBjdXJyZW50VXNlckluZGV4ICsgMSA6IG51bGw7IC8vINCv0LrRidC+INC/0L7RgtC+0YfQvdC40Lkg0LrQvtGA0LjRgdGC0YPQstCw0Ycg0ZQg0YMg0L/QtdGA0YjRltC5INGH0LXRgtCy0ZbRgNGG0ZZcbiAgICAgICAgY29uc3QgdXNlclRvUmVuZGVyID0gY3VycmVudFVzZXJQbGFjZSA9PT0gbnVsbCA/IG5leHRVc2VyIDogbnVsbDtcblxuICAgICAgICAvLyDQoNC10L3QtNC10YDQuNC80L4g0LrQvtC20LXQvSDRgNGP0LTQvtC6XG4gICAgICAgIHJvd3MuZm9yRWFjaCgoY29sdW1ucywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGNyZWF0ZVJvdyhjb2x1bW5zKTtcbiAgICAgICAgICAgIHJvd0NvbmZpZ1tyb3dJbmRleF0uZm9yRWFjaCgoeyB1c2VyLCBjbGFzczogZXh0cmFDbGFzcyB9LCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwbGFjZSA9IHVuaXF1ZVVzZXJzLmluZGV4T2YodXNlcikgKyAxOyAgLy8g0JfQvdCw0YXQvtC00LjQvNC+INC/0L7Qt9C40YbRltGOINC60L7RgNC40YHRgtGD0LLQsNGH0LAg0LIg0YPQvdGW0LrQsNC70YzQvdC+0LzRgyDRgdC/0LjRgdC60YNcblxuICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INC/0L7RgtC+0YfQvdC+0LPQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINC90LXQvNCwINCyINGC0LDQsdC70LjRhtGWINGWINCy0ZbQvSDQvdC1INCyINC/0LXRgNGI0ZbQuSDRh9C10YLQstGW0YDRhtGWLCDRgNC10L3QtNC10YDQuNC80L4g0L3QsNGB0YLRg9C/0L3QvtCz0L5cbiAgICAgICAgICAgICAgICBpZiAoIXVzZXIgJiYgdXNlclRvUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIgPSB1c2VyVG9SZW5kZXI7IC8vINCv0LrRidC+INC/0L7RgtC+0YfQvdC+0LPQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINC90LXQvNCw0ZQsINGB0YLQsNCy0LjQvNC+INC90LDRgdGC0YPQv9C90L7Qs9C+XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlID0gdW5pcXVlVXNlcnMuaW5kZXhPZih1c2VyKSArIDE7IC8vINCe0L3QvtCy0LvRjtGU0LzQviDQvNGW0YHRhtC1XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJCbG9jayh1c2VyLCBleHRyYUNsYXNzLCB1c2VyID8gcGxhY2UgOiAnJykpOyAvLyDQr9C60YnQviDQutC+0YDQuNGB0YLRg9Cy0LDRhyDRlCwg0L/QtdGA0LXQtNCw0ZTQvNC+INC80ZbRgdGG0LUsINGW0L3QsNC60YjQtSDQv9C+0YDQvtC20L3RlCDQt9C90LDRh9C10L3QvdGPXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7IC8vINCU0L7QtNCw0ZTQvNC+INGA0Y/QtNC+0Log0LTQviDRgtCw0LHQu9C40YbRllxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tTdGF0dXMoKSB7XG4gICAgICAgIGJldFdpbkNvdW50ZXIgPCA2ID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3RhYmxlXCIpLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKSA6IG51bGxcbiAgICAgICAgY29uc3QgYWN0aXZlTHZsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3MtbHZsLl9hY3RpdmVcIik7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbnMgPSB7XG4gICAgICAgICAgICBiZXQ6IHtcbiAgICAgICAgICAgICAgICAxOiBiZXRXaW5Db3VudGVyID4gMSxcbiAgICAgICAgICAgICAgICAyOiBiZXRXaW5Db3VudGVyID4gMyxcbiAgICAgICAgICAgICAgICAzOiBiZXRXaW5Db3VudGVyID4gNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsdmw6IHtcbiAgICAgICAgICAgICAgICAxOiBjdXJyZW50THZsID09PSAxLFxuICAgICAgICAgICAgICAgIDI6IGN1cnJlbnRMdmwgPT09IDIsXG4gICAgICAgICAgICAgICAgMzogY3VycmVudEx2bCA9PT0gMyxcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuICAgICAgICBnZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpO1xuICAgICAgICBpZiAoY29uZGl0aW9ucy5iZXRbY3VycmVudEx2bF0gJiYgY29uZGl0aW9ucy5sdmxbY3VycmVudEx2bF0pIHtcbiAgICAgICAgICAgIGx2bFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICByZWZyZXNoTHZsKGN1cnJlbnRMdmwsIGx2bFN0YXR1cyk7XG4gICAgICAgICAgICBnZXRCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9sb2NrXCIpO1xuXG4gICAgICAgICAgICBpZiAoYWN0aXZlTHZsKSBhY3RpdmVMdmwuY2xhc3NMaXN0LmFkZChcIl91cFwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIGx2bFN0YXR1cztcbiAgICAgICAgfVxuICAgICAgICBsdmxTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTHZsKGN1cnJlbnRMdmwsIGx2bFN0YXR1cyl7XG4gICAgICAgIGlmKCF1c2VySWQpIHJldHVyblxuICAgICAgICBsZXZlbHMuZm9yRWFjaCgobHZsLCBpKSA9PntcbiAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfZG9uZVwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdXBcIilcbiAgICAgICAgICAgIGlmKCsraSA9PT0gY3VycmVudEx2bCkge1xuICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKVxuXG4gICAgICAgICAgICAgICAgaWYgKGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3VwXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDEgJiYgYmV0V2luQ291bnRlciA8PSAwICYmIGx2bFN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDEgJiYgYmV0V2luQ291bnRlciA8PSAwICYmIGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAyICYmIGJldFdpbkNvdW50ZXIgPD0gMiAmJiBsdmxTdGF0dXMgPT09IGZhbHNlICl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMiAmJiBiZXRXaW5Db3VudGVyIDw9IDIgJiYgbHZsU3RhdHVzID09PSB0cnVlICl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAzICYmIGJldFdpbkNvdW50ZXIgPD0gNCAmJiBsdmxTdGF0dXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAzICYmIGJldFdpbkNvdW50ZXIgPD0gNCAmJiBsdmxTdGF0dXMgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkgPCBjdXJyZW50THZsLCBpICwgY3VycmVudEx2bCwgbHZsKVxuICAgICAgICAgICAgaSA8IGN1cnJlbnRMdmwgPyBsdmwuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpIDogbnVsbFxuICAgICAgICAgICAgbGV2ZWxCb3R0b21UZXh0LmZvckVhY2goKGl0ZW0sIGkpID0+e1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPD0gMyl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoaSA9PT0gY3VycmVudEx2bCAtIDEpe1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKSB7XG4gICAgICAgIGNhc2VzLmZvckVhY2goKGJveCwgaSkgPT4ge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIsIFwiX2xlZnRcIiwgXCJfcmlnaHRcIiwgXCJfbG9ja1wiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmKCF1c2VySWQpe1xuICAgICAgICAvLyAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgYWN0aXZlSW5kZXggPSBjdXJyZW50THZsIC0gMTtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID49IGNhc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBjYXNlcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByZXZJbmRleCA9IGFjdGl2ZUluZGV4IC0gMSA8IDAgPyBjYXNlcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggKyAxID49IGNhc2VzLmxlbmd0aCA/IDAgOiBhY3RpdmVJbmRleCArIDE7XG5cbiAgICAgICAgY2FzZXNbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpO1xuICAgICAgICBjYXNlc1twcmV2SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfbGVmdFwiKTtcbiAgICAgICAgY2FzZXNbbmV4dEluZGV4XS5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpO1xuXG4gICAgICAgIGNhc2VzLmZvckVhY2goKGJveCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gbHZsVXAoKXtcbiAgICAgICAgY3VycmVudEx2bCA9IGN1cnJlbnRMdmwgKyAxXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIGAke2N1cnJlbnRMdmx9YClcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICByZXR1cm4gbHZsU3RhdHVzXG4gICAgfVxuXG4gICAgLy8gY2hlY2tTdGF0dXMoKVxuXG5cblxuLy8gY29uc29sZS5sb2coaWRBcnIpXG5cbiAgICBmdW5jdGlvbiBjaGVja1BsYWNlTGVuZ3RoKCl7XG4gICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueW91XCIpLFxuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UgPSB1c2VyUGxhY2UucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fYmxvY2stcGxhY2VcIik7XG5cbiAgICAgICAgbGV0IGlkQXJyID0gdXNlclRhYmxlUGxhY2UudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ19vbmUnKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gMil7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfdHdvJylcbiAgICAgICAgfVxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDMpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX3RocmVlJylcbiAgICAgICAgfVxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDQpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX2ZvdXInKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSA1KXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ19maXZlJylcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBvcGVuQ2FzZUFuaW0oYm94KXtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaGFrZVwiKVxuICAgICAgICBib3gucXVlcnlTZWxlY3RvcihcIi5ib3hfX2NhcFwiKS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKVxuICAgICAgICBnZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBib3gucXVlcnlTZWxlY3RvcihcIi5ib3hfX2NhcC1mcm9udFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICB9LCAzMDApXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9zaG93XCIpXG4gICAgICAgIH0sIDE1MClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGx2bFVwKClcbiAgICAgICAgICAgIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKVxuICAgICAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICB9LCA0MDAwKVxuICAgIH1cblxuXG5cblxuICAgIGdldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+e1xuICAgICAgICAgICAgaWYoYm94LmNsYXNzTGlzdC5jb250YWlucyhcIl9hY3RpdmVcIikpe1xuICAgICAgICAgICAgICAgIG9wZW5DYXNlQW5pbShib3gpXG4gICAgICAgICAgICAgICAgLy8gZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICAgICAgICAgIC8vIGNoZWNrU3RhdHVzKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfSlcblxuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXAoYnRuT3BlbiwgYnRuQ2xvc2UsIHBvcHVwLCBoaWRlKXtcbiAgICAgICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgaWYoaGlkZSl7XG4gICAgICAgICAgICAgICAgYnRuT3Blbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJfcG9wdXBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYoYnRuQ2xvc2Upe1xuICAgICAgICAgICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgIGJ0bk9wZW4ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAvLyBpZihoaWRlKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgYnRuT3Blbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCIuX3BvcHVwXCIpXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgaWYoIXBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPT0gYnRuT3Blbil7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgIGlmKGhpZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuT3Blbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldFBvcHVwKHByb2dyZXNzUG9wdXBCdG4sIHByb2dyZXNzUG9wdXBDbG9zZSwgcHJvZ3Jlc3NQb3B1cClcbiAgICBzZXRQb3B1cCh1cGRQb3B1cEJ0biwgdXBkUG9wdXBDbG9zZSwgdXBkUG9wdXAsIHRydWUpXG4gICAgc2V0UG9wdXAocmVzdWx0UG9wdXBCdG4sIHJlc3VsdFBvcHVwQnRuQ2xvc2UsIHJlc3VsdFBvcHVwLCB0cnVlKVxuXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oZW5kVGltZSkge1xuICAgICAgICBjb25zdCBob3Vyc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX2hvdXJzLWl0ZW1cIik7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyX19taW51dGVzLWl0ZW1cIik7XG4gICAgICAgIGNvbnN0IHNlY29uZHNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyX19zZWNvbmRzLWl0ZW1cIik7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVGltZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gZW5kVGltZSAtIG5vdztcblxuICAgICAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhob3Vyc0VscywgXCIwMFwiKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgXCIwMFwiKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoc2Vjb25kc0VscywgXCIwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjApKSAlIDYwKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvIDEwMDApICUgNjApO1xuXG4gICAgICAgICAgICB1cGRhdGVEaWdpdHMoaG91cnNFbHMsIFN0cmluZyhob3VycykucGFkU3RhcnQoMiwgXCIwXCIpKTtcbiAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhtaW51dGVzRWxzLCBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgXCIwXCIpKTtcbiAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhzZWNvbmRzRWxzLCBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURpZ2l0cyhlbGVtZW50cywgdmFsdWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzWzBdLnRleHRDb250ZW50ID0gdmFsdWVbMF07XG4gICAgICAgICAgICBlbGVtZW50c1sxXS50ZXh0Q29udGVudCA9IHZhbHVlWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGltZXIoKTtcbiAgICAgICAgY29uc3QgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGVuZE9mRGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpLCAyMywgNTksIDU5KS5nZXRUaW1lKCk7XG5cbiAgICBzdGFydENvdW50ZG93bihlbmRPZkRheSk7XG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1sdmxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC1tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcbiAgICB9KVxuXG4gICAgY29uc3QgbHZsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLTFcIilcbiAgICBjb25zdCBsdmwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtMlwiKVxuICAgIGNvbnN0IGx2bDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC0zXCIpXG4gICAgY29uc3QgbHZsVXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC11cFwiKVxuICAgIGNvbnN0IGJldFdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmV0LXdpblwiKVxuICAgIGNvbnN0IGJldENsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZXQtY2xlYXJcIilcbiAgICBjb25zdCBidG5Mb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbG9ja1wiKVxuICAgIGNvbnN0IGRhcmtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmstYnRuXCIpXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGJldFdpbi50ZXh0Q29udGVudCA9IGB3aW4gYmV0OiAke2JldFdpbkNvdW50ZXJ9YFxuXG4gICAgYmV0V2luLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgYmV0V2luQ291bnRlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpKSA6IDBcbiAgICAgICAgYmV0V2luQ291bnRlciA9IGJldFdpbkNvdW50ZXIgKyAxXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIsIGJldFdpbkNvdW50ZXIpXG4gICAgICAgIGJldFdpbi50ZXh0Q29udGVudCA9IGB3aW4gYmV0OiAke2JldFdpbkNvdW50ZXJ9YFxuICAgICAgICAvLyByZWZyZXNoTHZsKGN1cnJlbnRMdmwpXG4gICAgICAgIGNoZWNrU3RhdHVzKClcblxuXG4gICAgfSlcblxuICAgIGJldENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImJldFdpbkNvdW50ZXJcIilcbiAgICAgICAgYmV0V2luQ291bnRlciA9IDBcbiAgICAgICAgYmV0V2luLnRleHRDb250ZW50ID0gYHdpbiBiZXQ6IDBgXG4gICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIxXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAvLyByZWZyZXNoTHZsKGN1cnJlbnRMdmwsIGx2bFN0YXR1cylcblxuICAgIH0pXG5cbiAgICBsdmwxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIxXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG4gICAgbHZsMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiMlwiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuICAgIGx2bDMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjNcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcblxuICAgIGx2bFVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgbHZsU3RhdHVzID0gIWx2bFN0YXR1c1xuICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgIGx2bFN0YXR1cyA9ICFsdmxTdGF0dXNcblxuICAgIH0pXG5cbiAgICBidG5Mb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3RhYmxlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJfbG9ja1wiKVxuICAgIH0pXG5cbiAgICBkYXJrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKVxuICAgIH0pXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsICcxMDA4NTY4ODgnKVxuICAgICAgICB9XG4gICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBkcm9wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd25cIik7XG5cbiAgICBkcm9wcy5mb3JFYWNoKGRyb3AgPT4ge1xuICAgICAgICBkcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwIGlPU1xuICAgICAgICAgICAgY29uc3QgaXNJT1MgPSAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L3QsCBTYWZhcmlcbiAgICAgICAgICAgIGNvbnN0IGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWR8Y3Jpb3N8Znhpb3MpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgICAgICAgICAgLy8g0K/QutGJ0L4g0L/RgNC40YHRgtGA0ZbQuSDQvdC1IGlPUyDRliDQsdGA0LDRg9C30LXRgCDQvdC1IFNhZmFyaVxuICAgICAgICAgICAgaWYgKCFpc0lPUyAmJiAhaXNTYWZhcmkpIHtcbiAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDQstGW0LTQutGA0LjQstCw0ZTQvNC+INC00YDQvtC/XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTsgLy8g0JfQsNC/0LDQvCfRj9GC0L7QstGD0ZTQvNC+INC/0L7RgtC+0YfQvdGDINC/0L7Qt9C40YbRltGOINGB0LrRgNC+0LvRg1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiOyAvLyDQpNGW0LrRgdGD0ZTQvNC+IGJvZHlcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBgLSR7c2Nyb2xsWX1weGA7IC8vINCf0LXRgNC10LzRltGJ0LDRlNC80L4gYm9keSwg0YnQvtCxINC30LHQtdGA0LXQs9GC0Lgg0L/QvtGC0L7Rh9C90YMg0L/QvtC30LjRhtGW0Y5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjsgLy8g0KnQvtCxINC90LUg0LfQvNGW0YnRg9Cy0LDQu9Cw0YHRjyDRiNC40YDQuNC90LAg0L/RgNC4INGE0ZbQutGB0LDRhtGW0ZdcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxZID0gTWF0aC5hYnMocGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKSk7IC8vINCe0YLRgNC40LzRg9GU0LzQviDQt9Cx0LXRgNC10LbQtdC90LjQuSDRgdC60YDQvtC7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjsgLy8g0JLRltC00L3QvtCy0LvRjtGU0LzQviBub3JtYWwg0YHRgtCw0L0g0LTQu9GPIGJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gXCJcIjsgLy8g0KHQutC40LTQsNGU0LzQviB0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSBcIlwiOyAvLyDQktGW0LTQvdC+0LLQu9GO0ZTQvNC+INGI0LjRgNC40L3Rg1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LLQtdGA0YLQsNGU0LzQvtGB0Y8g0L3QsCDQt9Cx0LXRgNC10LbQtdC90YMg0L/QvtC30LjRhtGW0Y5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgICAgICAgICBkcm9wLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpOyAvLyDQn9C10YDQtdC80LjQutCw0ZTQvNC+INGB0YLQsNC9INC00YDQvtC/0LTQsNGD0L3Rg1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG59KSgpXG5cbiJdfQ==
