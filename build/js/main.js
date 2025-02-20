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
      var scrollPosition = window.scrollY;
      setTimeout(function () {
        window.scrollTo({
          top: scrollPosition,
          behavior: "instant"
        });
      }, 0);
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY2FzZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRCdG4iLCJxdWVyeVNlbGVjdG9yIiwibGV2ZWxzIiwicHJvZ3Jlc3NQb3B1cCIsInByb2dyZXNzUG9wdXBCdG4iLCJwcm9ncmVzc1BvcHVwQ2xvc2UiLCJ1cGRQb3B1cCIsInVwZFBvcHVwQnRuIiwidXBkUG9wdXBDbG9zZSIsInJlc3VsdFBvcHVwIiwicmVzdWx0UG9wdXBCdG4iLCJyZXN1bHRQb3B1cEJ0bkNsb3NlIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsIm1haW5QYWdlIiwicmVzdWx0c1RhYmxlIiwibGV2ZWxCb3R0b21UZXh0IiwiY3VycmVudEx2bCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIk51bWJlciIsImx2bFN0YXR1cyIsImNoZWNrU3RhdHVzIiwiYmV0V2luQ291bnRlciIsImxvY2FsZSIsInVrTGVuZyIsImVuTGVuZyIsInRlc3RVc2VycyIsInVzZXJpZCIsImJldHMiLCJkYXRlIiwiZGVidWciLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiZ2V0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXF1ZXN0IiwiaW5pdCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImNoZWNrVXNlckF1dGgiLCJyZWZyZXNoQ2FzZXMiLCJ0aGVuIiwicmVzIiwidXNlcnMiLCJzb3J0IiwiYSIsImIiLCJwb2ludHMiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsInJlbmRlclVzZXJzIiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJpdGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibG9hZFRyYW5zbGF0aW9ucyIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRCb3R0b20iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsInRyYW5zbGF0ZUtleSIsImRlZmF1bHRWYWwiLCJmb3JtYXREYXRlIiwibG9jYWxEYXRlIiwiRGF0ZSIsImRheSIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJoZWFkZXJzIiwidW5hdXRoTWVzIiwicGFydGljaXBhdGVCdG4iLCJyZXNvbHZlIiwiZ3JvdXBlZEJ5RGF0ZSIsInJlZHVjZSIsImFjYyIsInVzZXIiLCJzcGxpdCIsInB1c2giLCJkYXRlcyIsIk9iamVjdCIsImtleXMiLCJhY3RpdmVEYXRlIiwidXBkYXRlQWN0aXZlRGF0ZSIsImVsIiwidG9nZ2xlIiwiZGF0YXNldCIsImN1cnJlbnRVc2VycyIsImN1cnJlbnRVc2VyIiwiZmluZCIsInRvcFVzZXJzIiwic2xpY2UiLCJjdXJyZW50VXNlckluZGV4IiwiaW5kZXhPZiIsInBvcHVsYXRlVXNlcnNUYWJsZSIsIm5hdkNvbnRhaW5lciIsIm1hcCIsImluZGV4IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiam9pbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwiY3VycmVudFVzZXJJZCIsInRhYmxlIiwiY3JlYXRlUm93IiwiY29sdW1ucyIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY3JlYXRlVXNlckJsb2NrIiwiZXh0cmFDbGFzcyIsInBsYWNlIiwiYmxvY2siLCJpY29uIiwiaW1nIiwic3JjIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJpbmZvIiwiaWRDb250ZW50IiwicGxhY2VDb250ZW50IiwiYWRkZWRVc2VySWRzIiwiU2V0IiwidW5pcXVlVXNlcnMiLCJmaWx0ZXIiLCJoYXMiLCJyb3dzIiwicm93Q29uZmlnIiwiZmluZEluZGV4IiwibmV4dFVzZXIiLCJjdXJyZW50VXNlclBsYWNlIiwidXNlclRvUmVuZGVyIiwicm93SW5kZXgiLCJjb2xJbmRleCIsImFjdGl2ZUx2bCIsImNvbmRpdGlvbnMiLCJiZXQiLCJsdmwiLCJyZWZyZXNoTHZsIiwiYm94IiwiYWN0aXZlSW5kZXgiLCJwcmV2SW5kZXgiLCJuZXh0SW5kZXgiLCJsdmxVcCIsInNldEl0ZW0iLCJjaGVja1BsYWNlTGVuZ3RoIiwidXNlclBsYWNlIiwidXNlclRhYmxlUGxhY2UiLCJpZEFyciIsInRleHRDb250ZW50Iiwib3BlbkNhc2VBbmltIiwic2V0VGltZW91dCIsInNldFBvcHVwIiwiYnRuT3BlbiIsImJ0bkNsb3NlIiwicG9wdXAiLCJoaWRlIiwicGFyZW50Tm9kZSIsImUiLCJzdGFydENvdW50ZG93biIsImVuZFRpbWUiLCJob3Vyc0VscyIsIm1pbnV0ZXNFbHMiLCJzZWNvbmRzRWxzIiwidXBkYXRlVGltZXIiLCJub3ciLCJnZXRUaW1lIiwidGltZUxlZnQiLCJ0aW1lckludGVydmFsIiwidXBkYXRlRGlnaXRzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsImVsZW1lbnRzIiwidmFsdWUiLCJlbmRPZkRheSIsImdldEZ1bGxZZWFyIiwibHZsMSIsImx2bDIiLCJsdmwzIiwibHZsVXBCdG4iLCJiZXRXaW4iLCJiZXRDbGVhciIsImJ0bkxvY2siLCJkYXJrQnRuIiwiYXV0aEJ0biIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsImRyb3BzIiwiZHJvcCIsInNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsWSIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsWUFBVztFQUFBO0VBQ1I7RUFDQTtFQUNBLElBQU1BLE1BQU0sR0FBRyx3Q0FBd0M7SUFDbkRDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztJQUN2REMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDM0NDLE1BQU0sR0FBR0osUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztJQUMxREksYUFBYSxHQUFHTCxRQUFRLENBQUNHLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztJQUNoRUcsZ0JBQWdCLEdBQUdOLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLDRCQUE0QixDQUFDO0lBQ3ZFSSxrQkFBa0IsR0FBR1AsUUFBUSxDQUFDRyxhQUFhLENBQUMsOEJBQThCLENBQUM7SUFDM0VLLFFBQVEsR0FBR1IsUUFBUSxDQUFDRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDcERNLFdBQVcsR0FBR1QsUUFBUSxDQUFDRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDdkRPLGFBQWEsR0FBR1YsUUFBUSxDQUFDRyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDL0RRLFdBQVcsR0FBR1gsUUFBUSxDQUFDRyxhQUFhLENBQUMseUJBQXlCLENBQUM7SUFDL0RTLGNBQWMsR0FBR1osUUFBUSxDQUFDRyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDaEVVLG1CQUFtQixHQUFHYixRQUFRLENBQUNHLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztJQUM3RVcsVUFBVSxHQUFHZCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyRGMsZUFBZSxHQUFHZixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUN4RGUsWUFBWSxHQUFHaEIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDckRnQixRQUFRLEdBQUdqQixRQUFRLENBQUNHLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDOUNlLFlBQVksR0FBR2xCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMvQ2dCLGVBQWUsR0FBR25CLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7RUFFMUUsSUFBSW1CLFVBQVUsR0FBR0MsY0FBYyxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0YsY0FBYyxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBRXhHLElBQUlFLFNBQVMsR0FBR0MsV0FBVyxFQUFFO0VBQzdCLElBQUlDLGFBQWEsR0FBR0wsY0FBYyxDQUFDQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0YsY0FBYyxDQUFDQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ2pILElBQUlLLE1BQU0sNEJBQUdOLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5RUFBSSxJQUFJO0VBRXJELElBQU1NLE1BQU0sR0FBRzVCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFNMEIsTUFBTSxHQUFHN0IsUUFBUSxDQUFDRyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBRWhELElBQUl5QixNQUFNLEVBQUVELE1BQU0sR0FBRyxJQUFJO0VBQ3pCLElBQUlFLE1BQU0sRUFBRUYsTUFBTSxHQUFHLElBQUk7RUFFekIsSUFBTUcsU0FBUyxHQUFHLENBQ2Q7SUFBRUMsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLEVBQUU7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDNUQ7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLEVBQUU7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDNUQ7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLEVBQUU7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDNUQ7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFFLFNBQVM7SUFBRUMsSUFBSSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQXNCLENBQUMsRUFDM0Q7SUFBRUYsTUFBTSxFQUFF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QyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7RUFFaEQ2TyxLQUFLLENBQUN2SyxPQUFPLENBQUMsVUFBQXdLLElBQUksRUFBRztJQUNqQkEsSUFBSSxDQUFDOUYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztNQUN0QyxJQUFNOEYsY0FBYyxHQUFHck0sTUFBTSxDQUFDc00sT0FBTztNQUNyQzFDLFVBQVUsQ0FBQyxZQUFNO1FBQ2I1SixNQUFNLENBQUN1TSxRQUFRLENBQUM7VUFBRUMsR0FBRyxFQUFFSCxjQUFjO1VBQUVJLFFBQVEsRUFBRTtRQUFVLENBQUMsQ0FBQztNQUNqRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBS1YsQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgLy8gY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9tb3VudGFpbl9raW5nJ1xuICAgIC8vIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfdmlwJyxcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX21vdW50YWluX2tpbmcnLFxuICAgICAgICBjYXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9udXNfX2JveGVzLWl0ZW1cIiksXG4gICAgICAgIGdldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2V0LWJ0blwiKSxcbiAgICAgICAgbGV2ZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib251c19fcHJvZ3Jlc3MtbHZsXCIpLFxuICAgICAgICBwcm9ncmVzc1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3MtcG9wdXBcIiksXG4gICAgICAgIHByb2dyZXNzUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy10aXRsZS1idG5cIiksXG4gICAgICAgIHByb2dyZXNzUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXBvcHVwLWNsb3NlXCIpLFxuICAgICAgICB1cGRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3dhcm5pbmdcIiksXG4gICAgICAgIHVwZFBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fdXBkLWJ0blwiKSxcbiAgICAgICAgdXBkUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3dhcm5pbmctY2xvc2VcIiksXG4gICAgICAgIHJlc3VsdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3N1YnRpdGxlLXBvcHVwXCIpLFxuICAgICAgICByZXN1bHRQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19zdWJ0aXRsZS1idG5cIiksXG4gICAgICAgIHJlc3VsdFBvcHVwQnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fc3VidGl0bGUtcG9wdXAtY2xvc2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZVwiKSxcbiAgICAgICAgbGV2ZWxCb3R0b21UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib251c19fcHJvZ3Jlc3MtYm90dG9tXCIpO1xuXG4gICAgbGV0IGN1cnJlbnRMdmwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEx2bFwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEx2bFwiKSkgOiAxXG5cbiAgICBsZXQgbHZsU3RhdHVzID0gY2hlY2tTdGF0dXMoKTtcbiAgICBsZXQgYmV0V2luQ291bnRlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpKSA6IDBcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/PyBcInVrXCJcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBjb25zdCB0ZXN0VXNlcnMgPSBbXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNTYsIGJldHM6IDEwLCBkYXRlOiBcIjIwMjUtMDItMThUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjU3LCBiZXRzOiA4LCBkYXRlOiBcIjIwMjUtMDItMThUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjU4LCBiZXRzOiA3LCBkYXRlOiBcIjIwMjUtMDItMThUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjU5LCBiZXRzOiA1LCBkYXRlOiBcIjIwMjUtMDItMThUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjUyLCBiZXRzOiAzLCBkYXRlOiBcIjIwMjUtMDItMThUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjUzLCBiZXRzOiAxMSwgZGF0ZTogXCIyMDI1LTAyLTE5VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI0NSwgYmV0czogOCwgZGF0ZTogXCIyMDI1LTAyLTE5VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI0NiwgYmV0czogNiwgZGF0ZTogXCIyMDI1LTAyLTE5VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI0NywgYmV0czogNCwgZGF0ZTogXCIyMDI1LTAyLTE5VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDIzNCwgYmV0czogMiwgZGF0ZTogXCIyMDI1LTAyLTE5VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDIzMiwgYmV0czogMTEsIGRhdGU6IFwiMjAyNS0wMi0yMFQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyMzEsIGJldHM6IDgsIGRhdGU6IFwiMjAyNS0wMi0yMFQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyMjIsIGJldHM6IDYsIGRhdGU6IFwiMjAyNS0wMi0yMVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyMjMsIGJldHM6IDQsIGRhdGU6IFwiMjAyNS0wMi0yMlQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDA4NTY4ODIsIGJldHM6IDUsIGRhdGU6IFwiMjAyNS0wMi0yM1QxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDA4NTY4ODMsIGJldHM6IDQsIGRhdGU6IFwiMjAyNS0wMi0yM1QxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDA4NTY4ODQsIGJldHM6IDMsIGRhdGU6IFwiMjAyNS0wMi0yM1QxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDA4NTY4ODgsIGJldHM6IDIsIGRhdGU6IFwiMjAyNS0wMi0yM1QxMjowMDowMFwiIH0sXG4gICAgXTtcblxuICAgIGxldCBkZWJ1ZyA9IHRydWU7XG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpIDogbnVsbFxuICAgIC8vIHVzZXJJZCA9IDEwMDMwMDI2ODtcbiAgICAvLyB1c2VySWQgPSAxMDA4NTY4ODg7XG5cbiAgICBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgcmVxdWVzdCgnL3VzZXJzP25vY2FjaGU9MScpLFxuICAgICAgICBdKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICAgICAgcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpXG4gICAgICAgICAgICBnZXREYXRhKCkudGhlbihyZXMgPT57XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzWzBdLnNvcnQoKGEsIGIpID0+IGIucG9pbnRzIC0gYS5wb2ludHMpO1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlclVzZXJzKHVzZXJzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYyA9IDA7XG4gICAgICAgICAgICB2YXIgaSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICAgICAgcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpXG4gICAgICAgICAgICBnZXREYXRhKCkudGhlbihyZXMgPT57XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzWzBdLnNvcnQoKGEsIGIpID0+IGIucG9pbnRzIC0gYS5wb2ludHMpO1xuICAgICAgICAgICAgICAgIGlmKCFkZWJ1Zyl7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHVzZXJzKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGVzdFVzZXJzKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24ucmVzdWx0Qm90dG9tKVxuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbCkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWwgfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIGRpc3BsYXlVc2VySW5mbyh1c2VySW5mbykge1xuICAgIC8vICAgICBjb25zdCBiZXRzID0gdXNlckluZm8uYmV0cy5zbGljZSgwLCAxMCk7XG4gICAgLy8gICAgIC8vIGxldCBiZXRzID0gW3tiZXREYXRlOiBuZXcgRGF0ZSgpLCBzdGF0dXM6ICd1bmRlZmluZWQnfV1cbiAgICAvLyAgICAgLy8gcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbyk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLy8gZnVuY3Rpb24gcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbykge1xuICAgIC8vIC8vICAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdF9fbGFzdC11cGQnKTtcbiAgICAvLyAvLyAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0VXBkJyk7XG4gICAgLy8gLy8gICAgIGlmICh1c2VySW5mby5sYXN0VXBkYXRlKSB7XG4gICAgLy8gLy8gICAgICAgICBzcGFuLmlubmVySFRNTCA9IGZvcm1hdERhdGUodXNlckluZm8ubGFzdFVwZGF0ZSk7XG4gICAgLy8gLy8gICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAvLyAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAvLyAgICAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vIC8vICAgICB9XG4gICAgLy8gLy8gfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjb25zdCBkYXkgPSBTdHJpbmcobG9jYWxEYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcobG9jYWxEYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBob3VycyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRofSAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGdldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVXNlcnMgPSAodXNlcnMpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBlZEJ5RGF0ZSA9IHVzZXJzLnJlZHVjZSgoYWNjLCB1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gdXNlci5kYXRlLnNwbGl0KFwiVFwiKVswXTtcbiAgICAgICAgICAgIGFjY1tkYXRlXSA9IGFjY1tkYXRlXSB8fCBbXTtcbiAgICAgICAgICAgIGFjY1tkYXRlXS5wdXNoKHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuICAgICAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5rZXlzKGdyb3VwZWRCeURhdGUpLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIpIC0gbmV3IERhdGUoYSkpO1xuICAgICAgICBsZXQgYWN0aXZlRGF0ZSA9IGRhdGVzWzBdO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgYWN0aXZlRGF0ZSA9IGRhdGU7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0X190YWJsZS1uYXYtaXRlbVwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJfYWN0aXZlXCIsIGVsLmRhdGFzZXQuZGF0ZSA9PT0gZGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VycyA9IGdyb3VwZWRCeURhdGVbZGF0ZV0gfHwgW107XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJJZCAmJiBjdXJyZW50VXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAgICAgbGV0IHRvcFVzZXJzID0gY3VycmVudFVzZXJzLnNsaWNlKDAsIDQpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJbmRleCA9IGN1cnJlbnRVc2Vycy5pbmRleE9mKGN1cnJlbnRVc2VyKTtcbiAgICAgICAgICAgICAgICB0b3BVc2VycyA9IFsuLi50b3BVc2VycywgY3VycmVudFVzZXJdO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGUsIGN1cnJlbnRVc2VycywgY3VycmVudFVzZXJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGUsIGN1cnJlbnRVc2VycywgNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3RhYmxlLW5hdlwiKTtcbiAgICAgICAgbmF2Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGVzLm1hcCgoZGF0ZSwgaW5kZXgpID0+IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdF9fdGFibGUtbmF2LWl0ZW0gJHtpbmRleCA9PT0gMCA/IFwiX2FjdGl2ZVwiIDogXCJcIn1cIiBkYXRhLWRhdGU9XCIke2RhdGV9XCI+XG4gICAgICAgICAgICAke25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcInVrLVVBXCIsIHsgZGF5OiBcIjItZGlnaXRcIiwgbW9udGg6IFwiMi1kaWdpdFwiIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICBgKS5qb2luKFwiXCIpO1xuXG4gICAgICAgIG5hdkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlc3VsdF9fdGFibGUtbmF2LWl0ZW1cIikpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVBY3RpdmVEYXRlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVBY3RpdmVEYXRlKGFjdGl2ZURhdGUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHRhYmxlKSB7XG4gICAgICAgIHRhYmxlLmlubmVySFRNTCA9ICcnOyAvLyDQntGH0LjRidCw0ZTQvNC+INGC0LDQsdC70LjRhtGOINC/0LXRgNC10LQg0YDQtdC90LTQtdGA0LjQvdCz0L7QvFxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVJvdyA9IChjb2x1bW5zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fcm93XCIpO1xuICAgICAgICAgICAgcm93LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2x1bW5zXCIsIGNvbHVtbnMpOyAvLyDQodGC0LjQu9GWINC00LvRjyDQutC+0LvQvtC90L7QulxuICAgICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjcmVhdGVVc2VyQmxvY2sgPSAodXNlciwgZXh0cmFDbGFzcyA9IFwiXCIsIHBsYWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2Jsb2NrXCIpO1xuICAgICAgICAgICAgaWYgKGV4dHJhQ2xhc3MpIGJsb2NrLmNsYXNzTGlzdC5hZGQoZXh0cmFDbGFzcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2Jsb2NrLWljb25cIik7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IFwiLi9pbWcvdGFibGUvaWNvbi5wbmdcIjtcbiAgICAgICAgICAgIGltZy5hbHQgPSBcIkZhdmJldFwiO1xuICAgICAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaW5mby5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2Jsb2NrLWluZm9cIik7XG5cbiAgICAgICAgICAgIGxldCBpZENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgaWRDb250ZW50ID0gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWRcbiAgICAgICAgICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cInlvdXItaWRcIiBkYXRhLXRyYW5zbGF0ZT1cInlvdXJJZFwiPtCi0LLQvtGUIGlkPC9kaXY+YFxuICAgICAgICAgICAgICAgICAgICA6IGBpZCAke3VzZXIudXNlcmlkfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkQ29udGVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCv0LrRidC+INC60L7RgNC40YHRgtGD0LLQsNGHINGULCDRgtC+INGA0LXQvdC00LXRgNC40LzQviDQvNGW0YHRhtC1XG4gICAgICAgICAgICBjb25zdCBwbGFjZUNvbnRlbnQgPSB1c2VyID8gYDxkaXYgY2xhc3M9XCJ0YWJsZV9fYmxvY2stcGxhY2VcIj4ke3BsYWNlfTwvZGl2PmAgOiAnJztcblxuICAgICAgICAgICAgaW5mby5pbm5lckhUTUwgPSBgXG4gICAgICAgICR7cGxhY2VDb250ZW50fSAgPCEtLSDQn9C+0LrQsNC30YPRlNC80L4g0LzRltGB0YbQtSDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINGC0ZbQu9GM0LrQuCDRj9C60YnQviDRlCDQutC+0YDQuNGB0YLRg9Cy0LDRhyAtLT5cbiAgICAgICAgJHtpZENvbnRlbnQgPyBgPGRpdiBjbGFzcz1cInRhYmxlX19ibG9jay1pZFwiPiR7aWRDb250ZW50fTwvZGl2PmAgOiBcIlwifVxuICAgICAgICBgO1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgYmV0cy5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2luZm8tYmV0c1wiKTtcbiAgICAgICAgICAgICAgICBiZXRzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2luZm8tYmV0cy1jb3VudGVyXCI+JHt1c2VyLmJldHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19pbmZvLWJldHMtdGV4dFwiIGRhdGEtdHJhbnNsYXRlPVwiYm9udXNCZXRzXCI+0LLQuNCz0YDQsNGI0L3RliDRgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQoYmV0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQpNGW0LvRjNGC0YDRg9GU0LzQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9GW0LIsINGJ0L7QsSDQtNC+0LTQsNGC0Lgg0ZfRhSDRg9C90ZbQutCw0LvRjNC90L5cbiAgICAgICAgbGV0IGFkZGVkVXNlcklkcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgdW5pcXVlVXNlcnMgPSB1c2Vycy5maWx0ZXIodXNlciA9PiB7XG4gICAgICAgICAgICBpZiAoIWFkZGVkVXNlcklkcy5oYXModXNlci51c2VyaWQpKSB7XG4gICAgICAgICAgICAgICAgYWRkZWRVc2VySWRzLmFkZCh1c2VyLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDRgNGP0LTQutGW0LJcbiAgICAgICAgY29uc3Qgcm93cyA9IFsxLCAyLCAzLCA0XTsgLy8g0J3QsNC70LDRiNGC0L7QstGD0ZTQvNC+IDQg0YDRj9C00LrQuFxuICAgICAgICBjb25zdCByb3dDb25maWcgPSBbXG4gICAgICAgICAgICBbeyB1c2VyOiB1bmlxdWVVc2Vyc1swXSB8fCBudWxsLCBjbGFzczogXCJfZmlyc3RcIiB9XSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IHVzZXI6IHVuaXF1ZVVzZXJzWzFdIHx8IG51bGwsIGNsYXNzOiBcIl9zZWNvbmRcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogdW5pcXVlVXNlcnNbMl0gfHwgbnVsbCwgY2xhc3M6IFwiX3NlY29uZFwiIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgeyB1c2VyOiBudWxsLCBjbGFzczogXCJcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogdW5pcXVlVXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKSB8fCBudWxsLCBjbGFzczogXCJ5b3VcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogbnVsbCwgY2xhc3M6IFwiXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IHVzZXI6IG51bGwsIGNsYXNzOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiBudWxsLCBjbGFzczogXCJcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogbnVsbCwgY2xhc3M6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICB7IHVzZXI6IG51bGwsIGNsYXNzOiBcIlwiIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXTtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L3QsCDQvdCw0Y/QstC90ZbRgdGC0Ywg0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LBcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJbmRleCA9IHVuaXF1ZVVzZXJzLmZpbmRJbmRleCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgbmV4dFVzZXIgPSBjdXJyZW50VXNlckluZGV4ID09PSAtMSA/IHVuaXF1ZVVzZXJzWzBdIDogdW5pcXVlVXNlcnNbY3VycmVudFVzZXJJbmRleCArIDFdO1xuXG4gICAgICAgIC8vINCv0LrRidC+INC/0L7RgtC+0YfQvdC+0LPQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINC90LXQvNCw0ZQg0ZYg0LLRltC9INC90LUg0LIg0L/QtdGA0YjRltC5INGH0LXRgtCy0ZbRgNGG0ZYsINGC0L4g0YDQtdC90LTQtdGA0LjQvNC+INC90LDRgdGC0YPQv9C90L7Qs9C+XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyUGxhY2UgPSBjdXJyZW50VXNlckluZGV4IDwgNCA/IGN1cnJlbnRVc2VySW5kZXggKyAxIDogbnVsbDsgLy8g0K/QutGJ0L4g0L/QvtGC0L7Rh9C90LjQuSDQutC+0YDQuNGB0YLRg9Cy0LDRhyDRlCDRgyDQv9C10YDRiNGW0Lkg0YfQtdGC0LLRltGA0YbRllxuICAgICAgICBjb25zdCB1c2VyVG9SZW5kZXIgPSBjdXJyZW50VXNlclBsYWNlID09PSBudWxsID8gbmV4dFVzZXIgOiBudWxsO1xuXG4gICAgICAgIC8vINCg0LXQvdC00LXRgNC40LzQviDQutC+0LbQtdC9INGA0Y/QtNC+0LpcbiAgICAgICAgcm93cy5mb3JFYWNoKChjb2x1bW5zLCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gY3JlYXRlUm93KGNvbHVtbnMpO1xuICAgICAgICAgICAgcm93Q29uZmlnW3Jvd0luZGV4XS5mb3JFYWNoKCh7IHVzZXIsIGNsYXNzOiBleHRyYUNsYXNzIH0sIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlID0gdW5pcXVlVXNlcnMuaW5kZXhPZih1c2VyKSArIDE7ICAvLyDQl9C90LDRhdC+0LTQuNC80L4g0L/QvtC30LjRhtGW0Y4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsCDQsiDRg9C90ZbQutCw0LvRjNC90L7QvNGDINGB0L/QuNGB0LrRg1xuXG4gICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LAg0L3QtdC80LAg0LIg0YLQsNCx0LvQuNGG0ZYg0ZYg0LLRltC9INC90LUg0LIg0L/QtdGA0YjRltC5INGH0LXRgtCy0ZbRgNGG0ZYsINGA0LXQvdC00LXRgNC40LzQviDQvdCw0YHRgtGD0L/QvdC+0LPQvlxuICAgICAgICAgICAgICAgIGlmICghdXNlciAmJiB1c2VyVG9SZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IHVzZXJUb1JlbmRlcjsgLy8g0K/QutGJ0L4g0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LAg0L3QtdC80LDRlCwg0YHRgtCw0LLQuNC80L4g0L3QsNGB0YLRg9C/0L3QvtCz0L5cbiAgICAgICAgICAgICAgICAgICAgcGxhY2UgPSB1bmlxdWVVc2Vycy5pbmRleE9mKHVzZXIpICsgMTsgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC80ZbRgdGG0LVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY3JlYXRlVXNlckJsb2NrKHVzZXIsIGV4dHJhQ2xhc3MsIHVzZXIgPyBwbGFjZSA6ICcnKSk7IC8vINCv0LrRidC+INC60L7RgNC40YHRgtGD0LLQsNGHINGULCDQv9C10YDQtdC00LDRlNC80L4g0LzRltGB0YbQtSwg0ZbQvdCw0LrRiNC1INC/0L7RgNC+0LbQvdGUINC30L3QsNGH0LXQvdC90Y9cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTsgLy8g0JTQvtC00LDRlNC80L4g0YDRj9C00L7QuiDQtNC+INGC0LDQsdC70LjRhtGWXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBjaGVja1N0YXR1cygpIHtcbiAgICAgICAgYmV0V2luQ291bnRlciA8IDYgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fdGFibGVcIikuY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpIDogbnVsbFxuICAgICAgICBjb25zdCBhY3RpdmVMdmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy1sdmwuX2FjdGl2ZVwiKTtcbiAgICAgICAgY29uc3QgY29uZGl0aW9ucyA9IHtcbiAgICAgICAgICAgIGJldDoge1xuICAgICAgICAgICAgICAgIDE6IGJldFdpbkNvdW50ZXIgPiAxLFxuICAgICAgICAgICAgICAgIDI6IGJldFdpbkNvdW50ZXIgPiAzLFxuICAgICAgICAgICAgICAgIDM6IGJldFdpbkNvdW50ZXIgPiA1LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGx2bDoge1xuICAgICAgICAgICAgICAgIDE6IGN1cnJlbnRMdmwgPT09IDEsXG4gICAgICAgICAgICAgICAgMjogY3VycmVudEx2bCA9PT0gMixcbiAgICAgICAgICAgICAgICAzOiBjdXJyZW50THZsID09PSAzLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIGdldEJ0bi5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIik7XG4gICAgICAgIGlmIChjb25kaXRpb25zLmJldFtjdXJyZW50THZsXSAmJiBjb25kaXRpb25zLmx2bFtjdXJyZW50THZsXSkge1xuICAgICAgICAgICAgbHZsU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKTtcbiAgICAgICAgICAgIGdldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvY2tcIik7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVMdmwpIGFjdGl2ZUx2bC5jbGFzc0xpc3QuYWRkKFwiX3VwXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gbHZsU3RhdHVzO1xuICAgICAgICB9XG4gICAgICAgIGx2bFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICByZWZyZXNoTHZsKGN1cnJlbnRMdmwsIGx2bFN0YXR1cylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKXtcbiAgICAgICAgaWYoIXVzZXJJZCkgcmV0dXJuXG4gICAgICAgIGxldmVscy5mb3JFYWNoKChsdmwsIGkpID0+e1xuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl9kb25lXCIpXG4gICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4gICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl91cFwiKVxuICAgICAgICAgICAgaWYoKytpID09PSBjdXJyZW50THZsKSB7XG4gICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG5cbiAgICAgICAgICAgICAgICBpZiAobHZsU3RhdHVzID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdXBcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMSAmJiBiZXRXaW5Db3VudGVyIDw9IDAgJiYgbHZsU3RhdHVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMSAmJiBiZXRXaW5Db3VudGVyIDw9IDAgJiYgbHZsU3RhdHVzID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDIgJiYgYmV0V2luQ291bnRlciA8PSAyICYmIGx2bFN0YXR1cyA9PT0gZmFsc2UgKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAyICYmIGJldFdpbkNvdW50ZXIgPD0gMiAmJiBsdmxTdGF0dXMgPT09IHRydWUgKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDMgJiYgYmV0V2luQ291bnRlciA8PSA0ICYmIGx2bFN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDMgJiYgYmV0V2luQ291bnRlciA8PSA0ICYmIGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSA8IGN1cnJlbnRMdmwsIGkgLCBjdXJyZW50THZsLCBsdmwpXG4gICAgICAgICAgICBpIDwgY3VycmVudEx2bCA/IGx2bC5jbGFzc0xpc3QuYWRkKFwiX2RvbmVcIikgOiBudWxsXG4gICAgICAgICAgICBsZXZlbEJvdHRvbVRleHQuZm9yRWFjaCgoaXRlbSwgaSkgPT57XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA8PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpID09PSBjdXJyZW50THZsIC0gMSl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpIHtcbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIiwgXCJfbGVmdFwiLCBcIl9yaWdodFwiLCBcIl9sb2NrXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYoIXVzZXJJZCl7XG4gICAgICAgIC8vICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBhY3RpdmVJbmRleCA9IGN1cnJlbnRMdmwgLSAxO1xuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPj0gY2FzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IGNhc2VzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJldkluZGV4ID0gYWN0aXZlSW5kZXggLSAxIDwgMCA/IGNhc2VzLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCArIDEgPj0gY2FzZXMubGVuZ3RoID8gMCA6IGFjdGl2ZUluZGV4ICsgMTtcblxuICAgICAgICBjYXNlc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIik7XG4gICAgICAgIGNhc2VzW3ByZXZJbmRleF0uY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpO1xuICAgICAgICBjYXNlc1tuZXh0SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfcmlnaHRcIik7XG5cbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiBsdmxVcCgpe1xuICAgICAgICBjdXJyZW50THZsID0gY3VycmVudEx2bCArIDFcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgYCR7Y3VycmVudEx2bH1gKVxuICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgIHJldHVybiBsdmxTdGF0dXNcbiAgICB9XG5cbiAgICAvLyBjaGVja1N0YXR1cygpXG5cblxuXG4vLyBjb25zb2xlLmxvZyhpZEFycilcblxuICAgIGZ1bmN0aW9uIGNoZWNrUGxhY2VMZW5ndGgoKXtcbiAgICAgICAgY29uc3QgdXNlclBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55b3VcIiksXG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZSA9IHVzZXJQbGFjZS5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19ibG9jay1wbGFjZVwiKTtcblxuICAgICAgICBsZXQgaWRBcnIgPSB1c2VyVGFibGVQbGFjZS50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX29uZScpXG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSAyKXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ190d28nKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gMyl7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfdGhyZWUnKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gNCl7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfZm91cicpXG4gICAgICAgIH1cblxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDUpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX2ZpdmUnKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIG9wZW5DYXNlQW5pbShib3gpe1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpXG4gICAgICAgIGJveC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fY2FwXCIpLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpXG4gICAgICAgIGdldEJ0bi5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGJveC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fY2FwLWZyb250XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIH0sIDMwMClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX3Nob3dcIilcbiAgICAgICAgfSwgMTUwKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgbHZsVXAoKVxuICAgICAgICAgICAgcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpXG4gICAgICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgIH0sIDQwMDApXG4gICAgfVxuXG5cblxuXG4gICAgZ2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIGNhc2VzLmZvckVhY2goKGJveCwgaSkgPT57XG4gICAgICAgICAgICBpZihib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2FjdGl2ZVwiKSl7XG4gICAgICAgICAgICAgICAgb3BlbkNhc2VBbmltKGJveClcbiAgICAgICAgICAgICAgICAvLyBnZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgICAgICAgICAgLy8gY2hlY2tTdGF0dXMoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9KVxuXG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cChidG5PcGVuLCBidG5DbG9zZSwgcG9wdXAsIGhpZGUpe1xuICAgICAgICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICBpZihoaWRlKXtcbiAgICAgICAgICAgICAgICBidG5PcGVuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcIl9wb3B1cFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZihidG5DbG9zZSl7XG4gICAgICAgICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgYnRuT3Blbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIC8vIGlmKGhpZGUpe1xuICAgICAgICAgICAgICAgIC8vICAgICBidG5PcGVuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcIi5fcG9wdXBcIilcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICBpZighcG9wdXAuY29udGFpbnMoZS50YXJnZXQpICYmIGUudGFyZ2V0ICE9PSBidG5PcGVuKXtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgaWYoaGlkZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5PcGVuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0UG9wdXAocHJvZ3Jlc3NQb3B1cEJ0biwgcHJvZ3Jlc3NQb3B1cENsb3NlLCBwcm9ncmVzc1BvcHVwKVxuICAgIHNldFBvcHVwKHVwZFBvcHVwQnRuLCB1cGRQb3B1cENsb3NlLCB1cGRQb3B1cCwgdHJ1ZSlcbiAgICBzZXRQb3B1cChyZXN1bHRQb3B1cEJ0biwgcmVzdWx0UG9wdXBCdG5DbG9zZSwgcmVzdWx0UG9wdXAsIHRydWUpXG5cbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bihlbmRUaW1lKSB7XG4gICAgICAgIGNvbnN0IGhvdXJzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aW1lcl9faG91cnMtaXRlbVwiKTtcbiAgICAgICAgY29uc3QgbWludXRlc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX21pbnV0ZXMtaXRlbVwiKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX3NlY29uZHMtaXRlbVwiKTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgdGltZUxlZnQgPSBlbmRUaW1lIC0gbm93O1xuXG4gICAgICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCBcIjAwXCIpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhtaW51dGVzRWxzLCBcIjAwXCIpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhzZWNvbmRzRWxzLCBcIjAwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCkpICUgNjApO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gMTAwMCkgJSA2MCk7XG5cbiAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhob3Vyc0VscywgU3RyaW5nKGhvdXJzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgICAgICAgICAgdXBkYXRlRGlnaXRzKG1pbnV0ZXNFbHMsIFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgICAgICAgICAgdXBkYXRlRGlnaXRzKHNlY29uZHNFbHMsIFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGlnaXRzKGVsZW1lbnRzLCB2YWx1ZSkge1xuICAgICAgICAgICAgZWxlbWVudHNbMF0udGV4dENvbnRlbnQgPSB2YWx1ZVswXTtcbiAgICAgICAgICAgIGVsZW1lbnRzWzFdLnRleHRDb250ZW50ID0gdmFsdWVbMV07XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUaW1lcigpO1xuICAgICAgICBjb25zdCB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZW5kT2ZEYXkgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCksIDIzLCA1OSwgNTkpLmdldFRpbWUoKTtcblxuICAgIHN0YXJ0Q291bnRkb3duKGVuZE9mRGF5KTtcblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWx2bFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLW1lbnVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuICAgIH0pXG5cbiAgICBjb25zdCBsdmwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtMVwiKVxuICAgIGNvbnN0IGx2bDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC0yXCIpXG4gICAgY29uc3QgbHZsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLTNcIilcbiAgICBjb25zdCBsdmxVcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLXVwXCIpXG4gICAgY29uc3QgYmV0V2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZXQtd2luXCIpXG4gICAgY29uc3QgYmV0Q2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJldC1jbGVhclwiKVxuICAgIGNvbnN0IGJ0bkxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1sb2NrXCIpXG4gICAgY29uc3QgZGFya0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIilcbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgYmV0V2luLnRleHRDb250ZW50ID0gYHdpbiBiZXQ6ICR7YmV0V2luQ291bnRlcn1gXG5cbiAgICBiZXRXaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBiZXRXaW5Db3VudGVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikpIDogMFxuICAgICAgICBiZXRXaW5Db3VudGVyID0gYmV0V2luQ291bnRlciArIDFcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJldFdpbkNvdW50ZXJcIiwgYmV0V2luQ291bnRlcilcbiAgICAgICAgYmV0V2luLnRleHRDb250ZW50ID0gYHdpbiBiZXQ6ICR7YmV0V2luQ291bnRlcn1gXG4gICAgICAgIC8vIHJlZnJlc2hMdmwoY3VycmVudEx2bClcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuXG5cbiAgICB9KVxuXG4gICAgYmV0Q2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmV0V2luQ291bnRlclwiKVxuICAgICAgICBiZXRXaW5Db3VudGVyID0gMFxuICAgICAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogMGBcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjFcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIC8vIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKVxuXG4gICAgfSlcblxuICAgIGx2bDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjFcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcbiAgICBsdmwyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIyXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG4gICAgbHZsMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiM1wiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuXG4gICAgbHZsVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBsdmxTdGF0dXMgPSAhbHZsU3RhdHVzXG4gICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgbHZsU3RhdHVzID0gIWx2bFN0YXR1c1xuXG4gICAgfSlcblxuICAgIGJ0bkxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fdGFibGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcIl9sb2NrXCIpXG4gICAgfSlcblxuICAgIGRhcmtCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgfSlcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgJzEwMDg1Njg4OCcpXG4gICAgICAgIH1cbiAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGRyb3BzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93blwiKVxuXG4gICAgICAgIGRyb3BzLmZvckVhY2goZHJvcCA9PntcbiAgICAgICAgICAgIGRyb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogc2Nyb2xsUG9zaXRpb24sIGJlaGF2aW9yOiBcImluc3RhbnRcIiB9KTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG5cblxuXG59KSgpXG5cbiJdfQ==
