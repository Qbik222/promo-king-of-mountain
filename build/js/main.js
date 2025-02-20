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
      var isOpen = drop.classList.contains("open"); // Перевіряємо, чи дроп вже відкритий

      // Якщо відкриваємо дроп

      var scrollY = window.scrollY; // Запам'ятовуємо поточну позицію скролу
      document.body.style.position = "fixed"; // Фіксуємо body
      document.body.style.top = "-".concat(scrollY, "px"); // Переміщаємо body, щоб зберегти поточну позицію
      document.body.style.width = "100%"; // Щоб не зміщувалася ширина при фіксації
      setTimeout(function () {
        var scrollY = Math.abs(parseInt(document.body.style.top, 10)); // Отримуємо збережений скрол
        document.body.style.position = ""; // Відновлюємо normal стан для body
        document.body.style.top = ""; // Скидаємо top
        document.body.style.width = ""; // Відновлюємо ширину

        // Повертаємося на збережену позицію
        window.scrollTo(0, scrollY);
      }, 0);
      drop.classList.toggle("open"); // Перемикаємо стан дропдауну
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY2FzZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRCdG4iLCJxdWVyeVNlbGVjdG9yIiwibGV2ZWxzIiwicHJvZ3Jlc3NQb3B1cCIsInByb2dyZXNzUG9wdXBCdG4iLCJwcm9ncmVzc1BvcHVwQ2xvc2UiLCJ1cGRQb3B1cCIsInVwZFBvcHVwQnRuIiwidXBkUG9wdXBDbG9zZSIsInJlc3VsdFBvcHVwIiwicmVzdWx0UG9wdXBCdG4iLCJyZXN1bHRQb3B1cEJ0bkNsb3NlIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsIm1haW5QYWdlIiwicmVzdWx0c1RhYmxlIiwibGV2ZWxCb3R0b21UZXh0IiwiY3VycmVudEx2bCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIk51bWJlciIsImx2bFN0YXR1cyIsImNoZWNrU3RhdHVzIiwiYmV0V2luQ291bnRlciIsImxvY2FsZSIsInVrTGVuZyIsImVuTGVuZyIsInRlc3RVc2VycyIsInVzZXJpZCIsImJldHMiLCJkYXRlIiwiZGVidWciLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiZ2V0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXF1ZXN0IiwiaW5pdCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImNoZWNrVXNlckF1dGgiLCJyZWZyZXNoQ2FzZXMiLCJ0aGVuIiwicmVzIiwidXNlcnMiLCJzb3J0IiwiYSIsImIiLCJwb2ludHMiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsInJlbmRlclVzZXJzIiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJpdGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibG9hZFRyYW5zbGF0aW9ucyIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRCb3R0b20iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsInRyYW5zbGF0ZUtleSIsImRlZmF1bHRWYWwiLCJmb3JtYXREYXRlIiwibG9jYWxEYXRlIiwiRGF0ZSIsImRheSIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJoZWFkZXJzIiwidW5hdXRoTWVzIiwicGFydGljaXBhdGVCdG4iLCJyZXNvbHZlIiwiZ3JvdXBlZEJ5RGF0ZSIsInJlZHVjZSIsImFjYyIsInVzZXIiLCJzcGxpdCIsInB1c2giLCJkYXRlcyIsIk9iamVjdCIsImtleXMiLCJhY3RpdmVEYXRlIiwidXBkYXRlQWN0aXZlRGF0ZSIsImVsIiwidG9nZ2xlIiwiZGF0YXNldCIsImN1cnJlbnRVc2VycyIsImN1cnJlbnRVc2VyIiwiZmluZCIsInRvcFVzZXJzIiwic2xpY2UiLCJjdXJyZW50VXNlckluZGV4IiwiaW5kZXhPZiIsInBvcHVsYXRlVXNlcnNUYWJsZSIsIm5hdkNvbnRhaW5lciIsIm1hcCIsImluZGV4IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiam9pbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwiY3VycmVudFVzZXJJZCIsInRhYmxlIiwiY3JlYXRlUm93IiwiY29sdW1ucyIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY3JlYXRlVXNlckJsb2NrIiwiZXh0cmFDbGFzcyIsInBsYWNlIiwiYmxvY2siLCJpY29uIiwiaW1nIiwic3JjIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJpbmZvIiwiaWRDb250ZW50IiwicGxhY2VDb250ZW50IiwiYWRkZWRVc2VySWRzIiwiU2V0IiwidW5pcXVlVXNlcnMiLCJmaWx0ZXIiLCJoYXMiLCJyb3dzIiwicm93Q29uZmlnIiwiZmluZEluZGV4IiwibmV4dFVzZXIiLCJjdXJyZW50VXNlclBsYWNlIiwidXNlclRvUmVuZGVyIiwicm93SW5kZXgiLCJjb2xJbmRleCIsImFjdGl2ZUx2bCIsImNvbmRpdGlvbnMiLCJiZXQiLCJsdmwiLCJyZWZyZXNoTHZsIiwiYm94IiwiYWN0aXZlSW5kZXgiLCJwcmV2SW5kZXgiLCJuZXh0SW5kZXgiLCJsdmxVcCIsInNldEl0ZW0iLCJjaGVja1BsYWNlTGVuZ3RoIiwidXNlclBsYWNlIiwidXNlclRhYmxlUGxhY2UiLCJpZEFyciIsInRleHRDb250ZW50Iiwib3BlbkNhc2VBbmltIiwic2V0VGltZW91dCIsInNldFBvcHVwIiwiYnRuT3BlbiIsImJ0bkNsb3NlIiwicG9wdXAiLCJoaWRlIiwicGFyZW50Tm9kZSIsImUiLCJzdGFydENvdW50ZG93biIsImVuZFRpbWUiLCJob3Vyc0VscyIsIm1pbnV0ZXNFbHMiLCJzZWNvbmRzRWxzIiwidXBkYXRlVGltZXIiLCJub3ciLCJnZXRUaW1lIiwidGltZUxlZnQiLCJ0aW1lckludGVydmFsIiwidXBkYXRlRGlnaXRzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsImVsZW1lbnRzIiwidmFsdWUiLCJlbmRPZkRheSIsImdldEZ1bGxZZWFyIiwibHZsMSIsImx2bDIiLCJsdmwzIiwibHZsVXBCdG4iLCJiZXRXaW4iLCJiZXRDbGVhciIsImJ0bkxvY2siLCJkYXJrQnRuIiwiYXV0aEJ0biIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsImRyb3BzIiwiZHJvcCIsImlzT3BlbiIsInNjcm9sbFkiLCJwb3NpdGlvbiIsInRvcCIsIndpZHRoIiwiYWJzIiwicGFyc2VJbnQiLCJzY3JvbGxUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxZQUFXO0VBQUE7RUFDUjtFQUNBO0VBQ0EsSUFBTUEsTUFBTSxHQUFHLHdDQUF3QztJQUNuREMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0lBQ3ZEQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzQ0MsTUFBTSxHQUFHSixRQUFRLENBQUNDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO0lBQzFESSxhQUFhLEdBQUdMLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHdCQUF3QixDQUFDO0lBQ2hFRyxnQkFBZ0IsR0FBR04sUUFBUSxDQUFDRyxhQUFhLENBQUMsNEJBQTRCLENBQUM7SUFDdkVJLGtCQUFrQixHQUFHUCxRQUFRLENBQUNHLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQztJQUMzRUssUUFBUSxHQUFHUixRQUFRLENBQUNHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUNwRE0sV0FBVyxHQUFHVCxRQUFRLENBQUNHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUN2RE8sYUFBYSxHQUFHVixRQUFRLENBQUNHLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUMvRFEsV0FBVyxHQUFHWCxRQUFRLENBQUNHLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztJQUMvRFMsY0FBYyxHQUFHWixRQUFRLENBQUNHLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUNoRVUsbUJBQW1CLEdBQUdiLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLCtCQUErQixDQUFDO0lBQzdFVyxVQUFVLEdBQUdkLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEYyxlQUFlLEdBQUdmLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hEZSxZQUFZLEdBQUdoQixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUNyRGdCLFFBQVEsR0FBR2pCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM5Q2UsWUFBWSxHQUFHbEIsUUFBUSxDQUFDRyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DZ0IsZUFBZSxHQUFHbkIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQztFQUUxRSxJQUFJbUIsVUFBVSxHQUFHQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBR0MsTUFBTSxDQUFDRixjQUFjLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFFeEcsSUFBSUUsU0FBUyxHQUFHQyxXQUFXLEVBQUU7RUFDN0IsSUFBSUMsYUFBYSxHQUFHTCxjQUFjLENBQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBR0MsTUFBTSxDQUFDRixjQUFjLENBQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDakgsSUFBSUssTUFBTSw0QkFBR04sY0FBYyxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlFQUFJLElBQUk7RUFFckQsSUFBTU0sTUFBTSxHQUFHNUIsUUFBUSxDQUFDRyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ2hELElBQU0wQixNQUFNLEdBQUc3QixRQUFRLENBQUNHLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFFaEQsSUFBSXlCLE1BQU0sRUFBRUQsTUFBTSxHQUFHLElBQUk7RUFDekIsSUFBSUUsTUFBTSxFQUFFRixNQUFNLEdBQUcsSUFBSTtFQUV6QixJQUFNRyxTQUFTLEdBQUcsQ0FDZDtJQUFFQyxNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsRUFBRTtJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUM1RDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsRUFBRTtJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUM1RDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsRUFBRTtJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUM1RDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxFQUMzRDtJQUFFRixNQUFNLEVBQUUsU0FBUztJQUFFQyxJQUFJLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBc0IsQ0FBQyxDQUM5RDtFQUVELElBQUlDLEtBQUssR0FBRyxJQUFJO0VBQ2hCLElBQUlDLFFBQVEsR0FBRyxDQUFDLENBQUM7RUFDakIsSUFBTUMsY0FBYyxHQUFHLElBQUk7RUFDM0IsSUFBSUMsTUFBTSxHQUFHaEIsY0FBYyxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0YsY0FBYyxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJO0VBQy9GO0VBQ0E7O0VBRUEsU0FBU2dCLE9BQU8sR0FBRztJQUNmLE9BQU9DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQ2ZDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUM5QixDQUFDO0VBQ047RUFHQSxTQUFTQyxJQUFJLEdBQUc7SUFDWixJQUFJQyxNQUFNLENBQUNDLEtBQUssRUFBRTtNQUNkLElBQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDQyxLQUFLLENBQUNFLFFBQVEsRUFBRTtNQUNuQ1QsTUFBTSxHQUFHUSxLQUFLLENBQUNFLElBQUksQ0FBQ0MsWUFBWSxJQUFJSCxLQUFLLENBQUNFLElBQUksQ0FBQ0UsRUFBRSxJQUFJLEVBQUU7TUFDdkRDLGFBQWEsRUFBRTtNQUNmekIsV0FBVyxFQUFFO01BQ2IwQixZQUFZLENBQUMvQixVQUFVLENBQUM7TUFDeEJrQixPQUFPLEVBQUUsQ0FBQ2MsSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBRztRQUNqQixJQUFJQyxLQUFLLEdBQUdELEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFVBQUNDLENBQUMsRUFBRUMsQ0FBQztVQUFBLE9BQUtBLENBQUMsQ0FBQ0MsTUFBTSxHQUFHRixDQUFDLENBQUNFLE1BQU07UUFBQSxFQUFDO1FBQ3REO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNO01BQ0gsSUFBSUMsQ0FBQyxHQUFHLENBQUM7TUFDVCxJQUFJQyxDQUFDLEdBQUdDLFdBQVcsQ0FBQyxZQUFZO1FBQzVCLElBQUlGLENBQUMsR0FBRyxFQUFFLEVBQUU7VUFDUixJQUFJLENBQUMsQ0FBQ2hCLE1BQU0sQ0FBQ21CLFNBQVMsRUFBRTtZQUNwQnpCLE1BQU0sR0FBR00sTUFBTSxDQUFDbUIsU0FBUztZQUN6QlosYUFBYSxFQUFFO1lBQ2ZhLGFBQWEsQ0FBQ0gsQ0FBQyxDQUFDO1VBQ3BCO1FBQ0osQ0FBQyxNQUFNO1VBQ0hHLGFBQWEsQ0FBQ0gsQ0FBQyxDQUFDO1FBQ3BCO01BQ0osQ0FBQyxFQUFFLEdBQUcsQ0FBQztNQUNQVixhQUFhLEVBQUU7TUFDZnpCLFdBQVcsRUFBRTtNQUNiMEIsWUFBWSxDQUFDL0IsVUFBVSxDQUFDO01BQ3hCa0IsT0FBTyxFQUFFLENBQUNjLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUc7UUFDakIsSUFBSUMsS0FBSyxHQUFHRCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNFLElBQUksQ0FBQyxVQUFDQyxDQUFDLEVBQUVDLENBQUM7VUFBQSxPQUFLQSxDQUFDLENBQUNDLE1BQU0sR0FBR0YsQ0FBQyxDQUFDRSxNQUFNO1FBQUEsRUFBQztRQUN0RCxJQUFHLENBQUN4QixLQUFLLEVBQUM7VUFDTjhCLFdBQVcsQ0FBQ1YsS0FBSyxDQUFDO1FBQ3RCLENBQUMsTUFBSTtVQUNEVSxXQUFXLENBQUNsQyxTQUFTLENBQUM7UUFDMUI7TUFFSixDQUFDLENBQUM7SUFDTjtFQUNKO0VBRUEsU0FBU21DLFdBQVcsR0FBRztJQUNuQixJQUFJLENBQUM1QixNQUFNLEVBQUU7TUFDVDtJQUNKO0lBQ0EsSUFBTTZCLE1BQU0sR0FBRztNQUFDbkMsTUFBTSxFQUFFTTtJQUFNLENBQUM7SUFDL0JJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7TUFDYjBCLE1BQU0sRUFBRSxNQUFNO01BQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLE1BQU07SUFDL0IsQ0FBQyxDQUFDLENBQUNkLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFDWHRDLGVBQWUsQ0FBQ3dELE9BQU8sQ0FBQyxVQUFBQyxJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFBQSxFQUFDO01BQzNEMUQsWUFBWSxDQUFDdUQsT0FBTyxDQUFDLFVBQUFDLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUFBLEVBQUM7SUFDL0QsQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTQyxnQkFBZ0IsR0FBRztJQUN4QixPQUFPQyxLQUFLLFdBQUkvRSxNQUFNLHlCQUFlNkIsTUFBTSxFQUFHLENBQUN5QixJQUFJLENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlBLEdBQUcsQ0FBQ3lCLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDakUxQixJQUFJLENBQUMsVUFBQTBCLElBQUksRUFBSTtNQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRyxZQUFZLENBQUM7TUFDOUI5QyxRQUFRLEdBQUcyQyxJQUFJO01BQ2ZJLFNBQVMsRUFBRTtNQUNYLElBQUlDLGdCQUFnQixHQUFHLElBQUlDLGdCQUFnQixDQUFDLFVBQVVDLFNBQVMsRUFBRTtRQUM3REgsU0FBUyxFQUFFO01BQ2YsQ0FBQyxDQUFDO0lBRU4sQ0FBQyxDQUFDO0VBQ1Y7RUFFQSxTQUFTQSxTQUFTLEdBQUc7SUFDakIsSUFBTUksS0FBSyxHQUFHdEYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzRCxJQUFJcUYsS0FBSyxJQUFJQSxLQUFLLENBQUNDLE1BQU0sRUFBRTtNQUN2QixJQUFHbkQsY0FBYyxFQUFDO1FBQ2RrRCxLQUFLLENBQUNmLE9BQU8sQ0FBQyxVQUFBaUIsSUFBSSxFQUFJO1VBQ2xCLElBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7VUFDL0NGLElBQUksQ0FBQ0csU0FBUyxHQUFHeEQsUUFBUSxDQUFDc0QsR0FBRyxDQUFDLElBQUksMENBQTBDLEdBQUdBLEdBQUc7VUFDbEZELElBQUksQ0FBQ0ksZUFBZSxDQUFDLGdCQUFnQixDQUFDO1FBQzFDLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBSTtRQUNEYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUNwQztJQUNKO0lBQ0EsSUFBSXJELE1BQU0sS0FBSyxJQUFJLEVBQUU7TUFDakJWLFFBQVEsQ0FBQ3dELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNoQztJQUNBbUIscUJBQXFCLEVBQUU7RUFDM0I7RUFFQSxTQUFTQyxZQUFZLENBQUNMLEdBQUcsRUFBRU0sVUFBVSxFQUFFO0lBQ25DLElBQUksQ0FBQ04sR0FBRyxFQUFFO01BQ047SUFDSjtJQUNBLE9BQU90RCxRQUFRLENBQUNzRCxHQUFHLENBQUMsSUFBSU0sVUFBVSxJQUFJLDBDQUEwQyxHQUFHTixHQUFHO0VBQzFGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxTQUFTTyxVQUFVLENBQUMvRCxJQUFJLEVBQUU7SUFDdEIsSUFBTWdFLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNqRSxJQUFJLENBQUM7SUFDaEMsSUFBTWtFLEdBQUcsR0FBR0MsTUFBTSxDQUFDSCxTQUFTLENBQUNJLE9BQU8sRUFBRSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ3hELElBQU1DLEtBQUssR0FBR0gsTUFBTSxDQUFDSCxTQUFTLENBQUNPLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDRixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUMvRCxJQUFNRyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ0gsU0FBUyxDQUFDUyxRQUFRLEVBQUUsQ0FBQyxDQUFDSixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUMzRCxJQUFNSyxPQUFPLEdBQUdQLE1BQU0sQ0FBQ0gsU0FBUyxDQUFDVyxVQUFVLEVBQUUsQ0FBQyxDQUFDTixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUMvRCxpQkFBVUgsR0FBRyxjQUFJSSxLQUFLLGNBQUlFLEtBQUssY0FBSUUsT0FBTztFQUM5QztFQUdBLFNBQVNkLHFCQUFxQixDQUFDZ0IsT0FBTyxFQUFFQyxZQUFZLEVBQUU7SUFDbEQsSUFBSSxDQUFDRCxPQUFPLEVBQUU7TUFDVjtJQUNKO0lBQ0Esd0JBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQywwQkFBRTtNQUE1QixJQUFNRSxJQUFJO01BQ1hGLE9BQU8sQ0FBQ3BDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDbUMsWUFBWSxHQUFHQyxJQUFJLENBQUM7SUFDakQ7SUFDQUYsT0FBTyxDQUFDcEMsU0FBUyxDQUFDQyxHQUFHLENBQUNvQyxZQUFZLEdBQUduRixNQUFNLENBQUM7RUFDaEQ7RUFHQSxJQUFNYyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxDQUFhdUUsSUFBSSxFQUFFQyxZQUFZLEVBQUU7SUFDMUMsT0FBT3BDLEtBQUssQ0FBQy9FLE1BQU0sR0FBR2tILElBQUk7TUFDdEJFLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsY0FBYyxFQUFFO01BQ3BCO0lBQUMsR0FDR0QsWUFBWSxJQUFJLENBQUMsQ0FBQyxFQUN4QixDQUFDN0QsSUFBSSxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUN5QixJQUFJLEVBQUU7SUFBQSxFQUFDO0VBQzlCLENBQUM7RUFFRCxTQUFTNUIsYUFBYSxHQUFHO0lBQ3JCLElBQUliLE1BQU0sRUFBRTtNQUFBLDJDQUNnQnZCLFVBQVU7UUFBQTtNQUFBO1FBQWxDLG9EQUFvQztVQUFBLElBQXpCcUcsU0FBUztVQUNoQkEsU0FBUyxDQUFDMUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQy9CeEUsTUFBTSxDQUFDdUUsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25DO01BQUM7UUFBQTtNQUFBO1FBQUE7TUFBQTtNQUNELE9BQU9sQyxPQUFPLG9CQUFhSixNQUFNLGdCQUFhLENBQ3pDZSxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO1FBQ1QsSUFBSUEsR0FBRyxDQUFDdEIsTUFBTSxFQUFFO1VBQ1poQixlQUFlLENBQUN3RCxPQUFPLENBQUMsVUFBQUMsSUFBSTtZQUFBLE9BQUlBLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1VBQUEsRUFBQztVQUM5RDNELFlBQVksQ0FBQ3VELE9BQU8sQ0FBQyxVQUFBQyxJQUFJO1lBQUEsT0FBSUEsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7VUFBQSxFQUFDO1FBQzVELENBQUMsTUFBTTtVQUNIM0QsZUFBZSxDQUFDd0QsT0FBTyxDQUFDLFVBQUFDLElBQUk7WUFBQSxPQUFJQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztVQUFBLEVBQUM7VUFDM0QxRCxZQUFZLENBQUN1RCxPQUFPLENBQUMsVUFBQUMsSUFBSTtZQUFBLE9BQUlBLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1VBQUEsRUFBQztRQUMvRDtNQUNKLENBQUMsQ0FBQztJQUNWLENBQUMsTUFBTTtNQUFBLDRDQUN3QjVELGVBQWU7UUFBQTtNQUFBO1FBQTFDLHVEQUE0QztVQUFBLElBQW5DcUcsY0FBYztVQUNuQkEsY0FBYyxDQUFDM0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3hDO01BQUM7UUFBQTtNQUFBO1FBQUE7TUFBQTtNQUFBLDRDQUN1QjVELFVBQVU7UUFBQTtNQUFBO1FBQWxDLHVEQUFvQztVQUFBLElBQXpCcUcsVUFBUztVQUNoQkEsVUFBUyxDQUFDMUMsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3RDO01BQUM7UUFBQTtNQUFBO1FBQUE7TUFBQTtNQUNELE9BQU9wQyxPQUFPLENBQUM4RSxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2pDO0VBQ0o7RUFFQSxJQUFNckQsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBSVYsS0FBSyxFQUFLO0lBQzNCLElBQU1nRSxhQUFhLEdBQUdoRSxLQUFLLENBQUNpRSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJLEVBQUs7TUFDOUMsSUFBTXhGLElBQUksR0FBR3dGLElBQUksQ0FBQ3hGLElBQUksQ0FBQ3lGLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcENGLEdBQUcsQ0FBQ3ZGLElBQUksQ0FBQyxHQUFHdUYsR0FBRyxDQUFDdkYsSUFBSSxDQUFDLElBQUksRUFBRTtNQUMzQnVGLEdBQUcsQ0FBQ3ZGLElBQUksQ0FBQyxDQUFDMEYsSUFBSSxDQUFDRixJQUFJLENBQUM7TUFDcEIsT0FBT0QsR0FBRztJQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNOLElBQU1JLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNSLGFBQWEsQ0FBQyxDQUFDL0QsSUFBSSxDQUFDLFVBQUNDLENBQUMsRUFBRUMsQ0FBQztNQUFBLE9BQUssSUFBSXlDLElBQUksQ0FBQ3pDLENBQUMsQ0FBQyxHQUFHLElBQUl5QyxJQUFJLENBQUMxQyxDQUFDLENBQUM7SUFBQSxFQUFDO0lBQ2xGLElBQUl1RSxVQUFVLEdBQUdILEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFekIsSUFBTUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixDQUFJL0YsSUFBSSxFQUFLO01BQy9COEYsVUFBVSxHQUFHOUYsSUFBSTtNQUVqQmpDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsQ0FBQ3NFLE9BQU8sQ0FBQyxVQUFDMEQsRUFBRSxFQUFLO1FBQ2pFQSxFQUFFLENBQUN4RCxTQUFTLENBQUN5RCxNQUFNLENBQUMsU0FBUyxFQUFFRCxFQUFFLENBQUNFLE9BQU8sQ0FBQ2xHLElBQUksS0FBS0EsSUFBSSxDQUFDO01BQzVELENBQUMsQ0FBQztNQUNGLElBQU1tRyxZQUFZLEdBQUdkLGFBQWEsQ0FBQ3JGLElBQUksQ0FBQyxJQUFJLEVBQUU7TUFDOUMsSUFBTW9HLFdBQVcsR0FBR2hHLE1BQU0sSUFBSStGLFlBQVksQ0FBQ0UsSUFBSSxDQUFDLFVBQUFiLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUMxRixNQUFNLEtBQUtNLE1BQU07TUFBQSxFQUFDO01BQy9FLElBQUlrRyxRQUFRLEdBQUdILFlBQVksQ0FBQ0ksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDdkMsSUFBSUgsV0FBVyxFQUFFO1FBQ2IsSUFBTUksZ0JBQWdCLEdBQUdMLFlBQVksQ0FBQ00sT0FBTyxDQUFDTCxXQUFXLENBQUM7UUFDMURFLFFBQVEsZ0NBQU9BLFFBQVEsSUFBRUYsV0FBVyxFQUFDO1FBQ3JDTSxrQkFBa0IsQ0FBQ0osUUFBUSxFQUFFbEcsTUFBTSxFQUFFbkIsWUFBWSxFQUFFa0gsWUFBWSxFQUFFSyxnQkFBZ0IsQ0FBQztNQUN0RixDQUFDLE1BQU07UUFDSEUsa0JBQWtCLENBQUNKLFFBQVEsRUFBRWxHLE1BQU0sRUFBRW5CLFlBQVksRUFBRWtILFlBQVksRUFBRSxDQUFDLENBQUM7TUFDdkU7SUFDSixDQUFDO0lBRUQsSUFBTVEsWUFBWSxHQUFHNUksUUFBUSxDQUFDRyxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFDakV5SSxZQUFZLENBQUNqRCxTQUFTLEdBQUdpQyxLQUFLLENBQUNpQixHQUFHLENBQUMsVUFBQzVHLElBQUksRUFBRTZHLEtBQUs7TUFBQSwrREFDVkEsS0FBSyxLQUFLLENBQUMsR0FBRyxTQUFTLEdBQUcsRUFBRSw0QkFBZ0I3RyxJQUFJLDhCQUMvRSxJQUFJaUUsSUFBSSxDQUFDakUsSUFBSSxDQUFDLENBQUM4RyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7UUFBRTVDLEdBQUcsRUFBRSxTQUFTO1FBQUVJLEtBQUssRUFBRTtNQUFVLENBQUMsQ0FBQztJQUFBLENBRXpGLENBQUMsQ0FBQ3lDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFFUEosWUFBWSxDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQzlDLElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDMUUsU0FBUyxDQUFDMkUsUUFBUSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7UUFDM0RwQixnQkFBZ0IsQ0FBQ2tCLEtBQUssQ0FBQ0MsTUFBTSxDQUFDaEIsT0FBTyxDQUFDbEcsSUFBSSxDQUFDO01BQy9DO0lBQ0osQ0FBQyxDQUFDO0lBRUYrRixnQkFBZ0IsQ0FBQ0QsVUFBVSxDQUFDO0VBQ2hDLENBQUM7RUFFRCxTQUFTWSxrQkFBa0IsQ0FBQ3JGLEtBQUssRUFBRStGLGFBQWEsRUFBRUMsS0FBSyxFQUFFO0lBQ3JEQSxLQUFLLENBQUMzRCxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7O0lBRXRCLElBQU00RCxTQUFTLEdBQUcsU0FBWkEsU0FBUyxDQUFJQyxPQUFPLEVBQUs7TUFDM0IsSUFBTUMsR0FBRyxHQUFHekosUUFBUSxDQUFDMEosYUFBYSxDQUFDLEtBQUssQ0FBQztNQUN6Q0QsR0FBRyxDQUFDaEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQy9CK0UsR0FBRyxDQUFDRSxLQUFLLENBQUNDLFdBQVcsQ0FBQyxXQUFXLEVBQUVKLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDN0MsT0FBT0MsR0FBRztJQUNkLENBQUM7SUFFRCxJQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsQ0FBSXBDLElBQUksRUFBNkI7TUFBQSxJQUEzQnFDLFVBQVUsdUVBQUcsRUFBRTtNQUFBLElBQUVDLEtBQUs7TUFDakQsSUFBTUMsS0FBSyxHQUFHaEssUUFBUSxDQUFDMEosYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMzQ00sS0FBSyxDQUFDdkYsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQ25DLElBQUlvRixVQUFVLEVBQUVFLEtBQUssQ0FBQ3ZGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDb0YsVUFBVSxDQUFDO01BRS9DLElBQU1HLElBQUksR0FBR2pLLFFBQVEsQ0FBQzBKLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDMUNPLElBQUksQ0FBQ3hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO01BQ3ZDLElBQU13RixHQUFHLEdBQUdsSyxRQUFRLENBQUMwSixhQUFhLENBQUMsS0FBSyxDQUFDO01BQ3pDUSxHQUFHLENBQUNDLEdBQUcsR0FBRyxzQkFBc0I7TUFDaENELEdBQUcsQ0FBQ0UsR0FBRyxHQUFHLFFBQVE7TUFDbEJILElBQUksQ0FBQ0ksV0FBVyxDQUFDSCxHQUFHLENBQUM7TUFDckJGLEtBQUssQ0FBQ0ssV0FBVyxDQUFDSixJQUFJLENBQUM7TUFFdkIsSUFBTUssSUFBSSxHQUFHdEssUUFBUSxDQUFDMEosYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMxQ1ksSUFBSSxDQUFDN0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7TUFFdkMsSUFBSTZGLFNBQVMsR0FBRyxFQUFFO01BQ2xCLElBQUk5QyxJQUFJLElBQUlBLElBQUksQ0FBQzFGLE1BQU0sRUFBRTtRQUNyQndJLFNBQVMsR0FBRzlDLElBQUksQ0FBQzFGLE1BQU0sS0FBS3NILGFBQWEsdUdBRTdCNUIsSUFBSSxDQUFDMUYsTUFBTSxDQUFFO01BQzdCLENBQUMsTUFBTTtRQUNId0ksU0FBUyxHQUFHLElBQUk7TUFDcEI7O01BRUE7TUFDQSxJQUFNQyxZQUFZLEdBQUcvQyxJQUFJLCtDQUFzQ3NDLEtBQUssY0FBVyxFQUFFO01BRWpGTyxJQUFJLENBQUMzRSxTQUFTLHVCQUNoQjZFLFlBQVksNFRBQ1pELFNBQVMsNENBQW1DQSxTQUFTLGNBQVcsRUFBRSxlQUNuRTtNQUNHUCxLQUFLLENBQUNLLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO01BRXZCLElBQUk3QyxJQUFJLEVBQUU7UUFDTixJQUFNekYsSUFBSSxHQUFHaEMsUUFBUSxDQUFDMEosYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMxQzFILElBQUksQ0FBQ3lDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO1FBQ3RDMUMsSUFBSSxDQUFDMkQsU0FBUyx1RUFDMEI4QixJQUFJLENBQUN6RixJQUFJLHdNQUVwRDtRQUNHZ0ksS0FBSyxDQUFDSyxXQUFXLENBQUNySSxJQUFJLENBQUM7TUFDM0I7TUFDQSxJQUFNc0QsS0FBSyxHQUFHZ0UsS0FBSyxDQUFDckosZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7TUFDeERxRixLQUFLLENBQUNmLE9BQU8sQ0FBQyxVQUFBaUIsSUFBSSxFQUFJO1FBQ2xCLElBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDL0NGLElBQUksQ0FBQ0csU0FBUyxHQUFHeEQsUUFBUSxDQUFDc0QsR0FBRyxDQUFDLElBQUksMENBQTBDLEdBQUdBLEdBQUc7UUFDbEZELElBQUksQ0FBQ0ksZUFBZSxDQUFDLGdCQUFnQixDQUFDO01BQzFDLENBQUMsQ0FBQztNQUNGLE9BQU9vRSxLQUFLO0lBQ2hCLENBQUM7O0lBRUQ7SUFDQSxJQUFJUyxZQUFZLEdBQUcsSUFBSUMsR0FBRyxFQUFFO0lBQzVCLElBQU1DLFdBQVcsR0FBR3JILEtBQUssQ0FBQ3NILE1BQU0sQ0FBQyxVQUFBbkQsSUFBSSxFQUFJO01BQ3JDLElBQUksQ0FBQ2dELFlBQVksQ0FBQ0ksR0FBRyxDQUFDcEQsSUFBSSxDQUFDMUYsTUFBTSxDQUFDLEVBQUU7UUFDaEMwSSxZQUFZLENBQUMvRixHQUFHLENBQUMrQyxJQUFJLENBQUMxRixNQUFNLENBQUM7UUFDN0IsT0FBTyxJQUFJO01BQ2Y7TUFDQSxPQUFPLEtBQUs7SUFDaEIsQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBTStJLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsSUFBTUMsU0FBUyxHQUFHLENBQ2QsQ0FBQztNQUFFdEQsSUFBSSxFQUFFa0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7TUFBRSxTQUFPO0lBQVMsQ0FBQyxDQUFDLEVBQ25ELENBQ0k7TUFBRWxELElBQUksRUFBRWtELFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO01BQUUsU0FBTztJQUFVLENBQUMsRUFDbEQ7TUFBRWxELElBQUksRUFBRWtELFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO01BQUUsU0FBTztJQUFVLENBQUMsQ0FDckQsRUFDRCxDQUNJO01BQUVsRCxJQUFJLEVBQUUsSUFBSTtNQUFFLFNBQU87SUFBRyxDQUFDLEVBQ3pCO01BQUVBLElBQUksRUFBRWtELFdBQVcsQ0FBQ3JDLElBQUksQ0FBQyxVQUFBYixJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDMUYsTUFBTSxLQUFLc0gsYUFBYTtNQUFBLEVBQUMsSUFBSSxJQUFJO01BQUUsU0FBTztJQUFNLENBQUMsRUFDdkY7TUFBRTVCLElBQUksRUFBRSxJQUFJO01BQUUsU0FBTztJQUFHLENBQUMsQ0FDNUIsRUFDRCxDQUNJO01BQUVBLElBQUksRUFBRSxJQUFJO01BQUUsU0FBTztJQUFHLENBQUMsRUFDekI7TUFBRUEsSUFBSSxFQUFFLElBQUk7TUFBRSxTQUFPO0lBQUcsQ0FBQyxFQUN6QjtNQUFFQSxJQUFJLEVBQUUsSUFBSTtNQUFFLFNBQU87SUFBRyxDQUFDLEVBQ3pCO01BQUVBLElBQUksRUFBRSxJQUFJO01BQUUsU0FBTztJQUFHLENBQUMsQ0FDNUIsQ0FDSjs7SUFFRDtJQUNBLElBQU1nQixnQkFBZ0IsR0FBR2tDLFdBQVcsQ0FBQ0ssU0FBUyxDQUFDLFVBQUF2RCxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDMUYsTUFBTSxLQUFLc0gsYUFBYTtJQUFBLEVBQUM7SUFDckYsSUFBTTRCLFFBQVEsR0FBR3hDLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxHQUFHa0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxXQUFXLENBQUNsQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7O0lBRTdGO0lBQ0EsSUFBTXlDLGdCQUFnQixHQUFHekMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHQSxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDN0UsSUFBTTBDLFlBQVksR0FBR0QsZ0JBQWdCLEtBQUssSUFBSSxHQUFHRCxRQUFRLEdBQUcsSUFBSTs7SUFFaEU7SUFDQUgsSUFBSSxDQUFDdkcsT0FBTyxDQUFDLFVBQUNpRixPQUFPLEVBQUU0QixRQUFRLEVBQUs7TUFDaEMsSUFBTTNCLEdBQUcsR0FBR0YsU0FBUyxDQUFDQyxPQUFPLENBQUM7TUFDOUJ1QixTQUFTLENBQUNLLFFBQVEsQ0FBQyxDQUFDN0csT0FBTyxDQUFDLGdCQUE4QjhHLFFBQVEsRUFBSztRQUFBLElBQXhDNUQsSUFBSSxRQUFKQSxJQUFJO1VBQVNxQyxVQUFVO1FBQ2xELElBQUlDLEtBQUssR0FBR1ksV0FBVyxDQUFDakMsT0FBTyxDQUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUU7O1FBRTVDO1FBQ0EsSUFBSSxDQUFDQSxJQUFJLElBQUkwRCxZQUFZLEVBQUU7VUFDdkIxRCxJQUFJLEdBQUcwRCxZQUFZLENBQUMsQ0FBQztVQUNyQnBCLEtBQUssR0FBR1ksV0FBVyxDQUFDakMsT0FBTyxDQUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0M7O1FBRUFnQyxHQUFHLENBQUNZLFdBQVcsQ0FBQ1IsZUFBZSxDQUFDcEMsSUFBSSxFQUFFcUMsVUFBVSxFQUFFckMsSUFBSSxHQUFHc0MsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMzRSxDQUFDLENBQUM7O01BQ0ZULEtBQUssQ0FBQ2UsV0FBVyxDQUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQztFQUNOOztFQUlBLFNBQVNoSSxXQUFXLEdBQUc7SUFDbkJDLGFBQWEsR0FBRyxDQUFDLEdBQUcxQixRQUFRLENBQUNHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDc0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSTtJQUMxRixJQUFNNEcsU0FBUyxHQUFHdEwsUUFBUSxDQUFDRyxhQUFhLENBQUMsOEJBQThCLENBQUM7SUFDeEUsSUFBTW9MLFVBQVUsR0FBRztNQUNmQyxHQUFHLEVBQUU7UUFDRCxDQUFDLEVBQUU5SixhQUFhLEdBQUcsQ0FBQztRQUNwQixDQUFDLEVBQUVBLGFBQWEsR0FBRyxDQUFDO1FBQ3BCLENBQUMsRUFBRUEsYUFBYSxHQUFHO01BQ3ZCLENBQUM7TUFDRCtKLEdBQUcsRUFBRTtRQUNELENBQUMsRUFBRXJLLFVBQVUsS0FBSyxDQUFDO1FBQ25CLENBQUMsRUFBRUEsVUFBVSxLQUFLLENBQUM7UUFDbkIsQ0FBQyxFQUFFQSxVQUFVLEtBQUs7TUFDdEI7SUFFSixDQUFDO0lBQ0RsQixNQUFNLENBQUN1RSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDN0IsSUFBSTZHLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDcEssVUFBVSxDQUFDLElBQUltSyxVQUFVLENBQUNFLEdBQUcsQ0FBQ3JLLFVBQVUsQ0FBQyxFQUFFO01BQzFESSxTQUFTLEdBQUcsSUFBSTtNQUNoQmtLLFVBQVUsQ0FBQ3RLLFVBQVUsRUFBRUksU0FBUyxDQUFDO01BQ2pDdEIsTUFBTSxDQUFDdUUsU0FBUyxDQUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDO01BRWhDLElBQUkyRyxTQUFTLEVBQUVBLFNBQVMsQ0FBQzdHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztNQUU3QyxPQUFPbEQsU0FBUztJQUNwQjtJQUNBQSxTQUFTLEdBQUcsS0FBSztJQUNqQmtLLFVBQVUsQ0FBQ3RLLFVBQVUsRUFBRUksU0FBUyxDQUFDO0lBQ2pDLE9BQU8sS0FBSztFQUNoQjtFQUVBLFNBQVNrSyxVQUFVLENBQUN0SyxVQUFVLEVBQUVJLFNBQVMsRUFBQztJQUN0QyxJQUFHLENBQUNhLE1BQU0sRUFBRTtJQUNaakMsTUFBTSxDQUFDbUUsT0FBTyxDQUFDLFVBQUNrSCxHQUFHLEVBQUU3SCxDQUFDLEVBQUk7TUFDdEI2SCxHQUFHLENBQUNoSCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDL0I4RyxHQUFHLENBQUNoSCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDN0I4RyxHQUFHLENBQUNoSCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDN0I4RyxHQUFHLENBQUNoSCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7TUFDM0IsSUFBRyxFQUFFZixDQUFDLEtBQUt4QyxVQUFVLEVBQUU7UUFDbkJxSyxHQUFHLENBQUNoSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFFNUIsSUFBSWxELFNBQVMsS0FBSyxJQUFJLEVBQUM7VUFDbkJpSyxHQUFHLENBQUNoSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDNUI7UUFDQSxJQUFHdEQsVUFBVSxLQUFLLENBQUMsSUFBSU0sYUFBYSxJQUFJLENBQUMsSUFBSUYsU0FBUyxLQUFLLEtBQUssRUFBQztVQUM3RGlLLEdBQUcsQ0FBQ2hILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUM5QjtRQUNBLElBQUd0RCxVQUFVLEtBQUssQ0FBQyxJQUFJTSxhQUFhLElBQUksQ0FBQyxJQUFJRixTQUFTLEtBQUssSUFBSSxFQUFDO1VBQzVEaUssR0FBRyxDQUFDaEgsU0FBUyxDQUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2pDO1FBRUEsSUFBR3ZELFVBQVUsS0FBSyxDQUFDLElBQUlNLGFBQWEsSUFBSSxDQUFDLElBQUlGLFNBQVMsS0FBSyxLQUFLLEVBQUU7VUFDOURpSyxHQUFHLENBQUNoSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDOUI7UUFDQSxJQUFHdEQsVUFBVSxLQUFLLENBQUMsSUFBSU0sYUFBYSxJQUFJLENBQUMsSUFBSUYsU0FBUyxLQUFLLElBQUksRUFBRTtVQUM3RGlLLEdBQUcsQ0FBQ2hILFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQztRQUVBLElBQUd2RCxVQUFVLEtBQUssQ0FBQyxJQUFJTSxhQUFhLElBQUksQ0FBQyxJQUFJRixTQUFTLEtBQUssS0FBSyxFQUFDO1VBQzdEaUssR0FBRyxDQUFDaEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzlCO1FBQ0EsSUFBR3RELFVBQVUsS0FBSyxDQUFDLElBQUlNLGFBQWEsSUFBSSxDQUFDLElBQUlGLFNBQVMsS0FBSyxJQUFJLEVBQUM7VUFDNURpSyxHQUFHLENBQUNoSCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakM7TUFFSixDQUFDLE1BQUk7UUFDRDhHLEdBQUcsQ0FBQ2hILFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUNuQztNQUNBO01BQ0FmLENBQUMsR0FBR3hDLFVBQVUsR0FBR3FLLEdBQUcsQ0FBQ2hILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUk7TUFDbER2RCxlQUFlLENBQUNvRCxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFFWixDQUFDLEVBQUk7UUFDaEMsSUFBR3hDLFVBQVUsSUFBSSxDQUFDLEVBQUM7VUFDZm9ELElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzlCO1FBQ0EsSUFBR2QsQ0FBQyxLQUFLeEMsVUFBVSxHQUFHLENBQUMsRUFBQztVQUNwQm9ELElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2pDO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBRU47RUFFQSxTQUFTeEIsWUFBWSxDQUFDL0IsVUFBVSxFQUFFO0lBQzlCckIsS0FBSyxDQUFDd0UsT0FBTyxDQUFDLFVBQUNvSCxHQUFHLEVBQUUvSCxDQUFDLEVBQUs7TUFDdEIrSCxHQUFHLENBQUNsSCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7SUFDL0QsQ0FBQyxDQUFDO0lBQ0Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLElBQUlpSCxXQUFXLEdBQUd4SyxVQUFVLEdBQUcsQ0FBQztJQUNoQyxJQUFJd0ssV0FBVyxJQUFJN0wsS0FBSyxDQUFDd0YsTUFBTSxFQUFFO01BQzdCcUcsV0FBVyxHQUFHN0wsS0FBSyxDQUFDd0YsTUFBTSxHQUFHLENBQUM7SUFDbEM7SUFFQSxJQUFJc0csU0FBUyxHQUFHRCxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRzdMLEtBQUssQ0FBQ3dGLE1BQU0sR0FBRyxDQUFDLEdBQUdxRyxXQUFXLEdBQUcsQ0FBQztJQUN4RSxJQUFJRSxTQUFTLEdBQUdGLFdBQVcsR0FBRyxDQUFDLElBQUk3TCxLQUFLLENBQUN3RixNQUFNLEdBQUcsQ0FBQyxHQUFHcUcsV0FBVyxHQUFHLENBQUM7SUFFckU3TCxLQUFLLENBQUM2TCxXQUFXLENBQUMsQ0FBQ25ILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMzQzNFLEtBQUssQ0FBQzhMLFNBQVMsQ0FBQyxDQUFDcEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3ZDM0UsS0FBSyxDQUFDK0wsU0FBUyxDQUFDLENBQUNySCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFFeEMzRSxLQUFLLENBQUN3RSxPQUFPLENBQUMsVUFBQ29ILEdBQUcsRUFBRS9ILENBQUMsRUFBSztNQUN0QixJQUFJQSxDQUFDLEtBQUtnSSxXQUFXLEVBQUU7UUFDbkJELEdBQUcsQ0FBQ2xILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztNQUM5QjtJQUNKLENBQUMsQ0FBQztFQUNOO0VBS0EsU0FBU3FILEtBQUssR0FBRTtJQUNaM0ssVUFBVSxHQUFHQSxVQUFVLEdBQUcsQ0FBQztJQUMzQkMsY0FBYyxDQUFDMkssT0FBTyxDQUFDLFlBQVksWUFBSzVLLFVBQVUsRUFBRztJQUNyREssV0FBVyxFQUFFO0lBQ2IsT0FBT0QsU0FBUztFQUNwQjs7RUFFQTs7RUFJSjs7RUFFSSxTQUFTeUssZ0JBQWdCLEdBQUU7SUFDdkIsSUFBTUMsU0FBUyxHQUFHbE0sUUFBUSxDQUFDRyxhQUFhLENBQUMsTUFBTSxDQUFDO01BQzVDZ00sY0FBYyxHQUFHRCxTQUFTLENBQUMvTCxhQUFhLENBQUMscUJBQXFCLENBQUM7SUFFbkUsSUFBSWlNLEtBQUssR0FBR0QsY0FBYyxDQUFDRSxXQUFXLENBQUMzRSxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ2hELElBQUcwRSxLQUFLLENBQUM3RyxNQUFNLEtBQUssQ0FBQyxFQUFDO01BQ2xCNEcsY0FBYyxDQUFDMUgsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3hDO0lBQ0EsSUFBRzBILEtBQUssQ0FBQzdHLE1BQU0sS0FBSyxDQUFDLEVBQUM7TUFDbEI0RyxjQUFjLENBQUMxSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDeEM7SUFDQSxJQUFHMEgsS0FBSyxDQUFDN0csTUFBTSxLQUFLLENBQUMsRUFBQztNQUNsQjRHLGNBQWMsQ0FBQzFILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUMxQztJQUNBLElBQUcwSCxLQUFLLENBQUM3RyxNQUFNLEtBQUssQ0FBQyxFQUFDO01BQ2xCNEcsY0FBYyxDQUFDMUgsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3pDO0lBRUEsSUFBRzBILEtBQUssQ0FBQzdHLE1BQU0sS0FBSyxDQUFDLEVBQUM7TUFDbEI0RyxjQUFjLENBQUMxSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDekM7RUFDSjtFQUlBLFNBQVM0SCxZQUFZLENBQUNYLEdBQUcsRUFBQztJQUN0QkEsR0FBRyxDQUFDbEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzFCaUgsR0FBRyxDQUFDeEwsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDc0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3BEeEUsTUFBTSxDQUFDdUUsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzdCNkgsVUFBVSxDQUFDLFlBQUs7TUFDWlosR0FBRyxDQUFDeEwsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNzRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDOUQsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNQNkgsVUFBVSxDQUFDLFlBQUs7TUFDWlosR0FBRyxDQUFDbEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDUDZILFVBQVUsQ0FBQyxZQUFLO01BQ1pSLEtBQUssRUFBRTtNQUNQNUksWUFBWSxDQUFDL0IsVUFBVSxDQUFDO01BQ3hCSyxXQUFXLEVBQUU7SUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNaO0VBS0F2QixNQUFNLENBQUMrSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNsQ2xKLEtBQUssQ0FBQ3dFLE9BQU8sQ0FBQyxVQUFDb0gsR0FBRyxFQUFFL0gsQ0FBQyxFQUFJO01BQ3JCLElBQUcrSCxHQUFHLENBQUNsSCxTQUFTLENBQUMyRSxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFDakNrRCxZQUFZLENBQUNYLEdBQUcsQ0FBQztRQUNqQjtRQUNBO01BQ0o7SUFFSixDQUFDLENBQUM7RUFFTixDQUFDLENBQUM7O0VBR0YsU0FBU2EsUUFBUSxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUM7SUFDN0NILE9BQU8sQ0FBQ3hELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO01BQ25DMEQsS0FBSyxDQUFDbEksU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO01BQzlCLElBQUdpSSxJQUFJLEVBQUM7UUFDSkgsT0FBTyxDQUFDSSxVQUFVLENBQUNwSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDOUM7SUFDSixDQUFDLENBQUM7SUFDRixJQUFHZ0ksUUFBUSxFQUFDO01BQ1JBLFFBQVEsQ0FBQ3pELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO1FBQ3BDd0QsT0FBTyxDQUFDSSxVQUFVLENBQUNwSSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDN0NnSSxLQUFLLENBQUNsSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDM0I7UUFDQTtRQUNBO01BQ0osQ0FBQyxDQUFDOztNQUNGMUUsUUFBUSxDQUFDaUosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUM2RCxDQUFDLEVBQUk7UUFDckMsSUFBRyxDQUFDSCxLQUFLLENBQUN2RCxRQUFRLENBQUMwRCxDQUFDLENBQUMzRCxNQUFNLENBQUMsSUFBSTJELENBQUMsQ0FBQzNELE1BQU0sS0FBS3NELE9BQU8sRUFBQztVQUNqREUsS0FBSyxDQUFDbEksU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQzNCLElBQUdrSSxJQUFJLEVBQUM7WUFDSkgsT0FBTyxDQUFDSSxVQUFVLENBQUNwSSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7VUFDakQ7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBRUo7RUFFQTZILFFBQVEsQ0FBQ2xNLGdCQUFnQixFQUFFQyxrQkFBa0IsRUFBRUYsYUFBYSxDQUFDO0VBQzdEbU0sUUFBUSxDQUFDL0wsV0FBVyxFQUFFQyxhQUFhLEVBQUVGLFFBQVEsRUFBRSxJQUFJLENBQUM7RUFDcERnTSxRQUFRLENBQUM1TCxjQUFjLEVBQUVDLG1CQUFtQixFQUFFRixXQUFXLEVBQUUsSUFBSSxDQUFDO0VBRWhFLFNBQVNvTSxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM3QixJQUFNQyxRQUFRLEdBQUdqTixRQUFRLENBQUNDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0lBQ2hFLElBQU1pTixVQUFVLEdBQUdsTixRQUFRLENBQUNDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO0lBQ3BFLElBQU1rTixVQUFVLEdBQUduTixRQUFRLENBQUNDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO0lBRXBFLFNBQVNtTixXQUFXLEdBQUc7TUFDbkIsSUFBTUMsR0FBRyxHQUFHLElBQUluSCxJQUFJLEVBQUUsQ0FBQ29ILE9BQU8sRUFBRTtNQUNoQyxJQUFNQyxRQUFRLEdBQUdQLE9BQU8sR0FBR0ssR0FBRztNQUU5QixJQUFJRSxRQUFRLElBQUksQ0FBQyxFQUFFO1FBQ2Z4SixhQUFhLENBQUN5SixhQUFhLENBQUM7UUFDNUJDLFlBQVksQ0FBQ1IsUUFBUSxFQUFFLElBQUksQ0FBQztRQUM1QlEsWUFBWSxDQUFDUCxVQUFVLEVBQUUsSUFBSSxDQUFDO1FBQzlCTyxZQUFZLENBQUNOLFVBQVUsRUFBRSxJQUFJLENBQUM7UUFDOUI7TUFDSjtNQUVBLElBQU0xRyxLQUFLLEdBQUdpSCxJQUFJLENBQUNDLEtBQUssQ0FBRUosUUFBUSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksRUFBRSxDQUFDO01BQzVELElBQU01RyxPQUFPLEdBQUcrRyxJQUFJLENBQUNDLEtBQUssQ0FBRUosUUFBUSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsR0FBSSxFQUFFLENBQUM7TUFDekQsSUFBTUssT0FBTyxHQUFHRixJQUFJLENBQUNDLEtBQUssQ0FBRUosUUFBUSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUM7TUFFbERFLFlBQVksQ0FBQ1IsUUFBUSxFQUFFN0csTUFBTSxDQUFDSyxLQUFLLENBQUMsQ0FBQ0gsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztNQUN0RG1ILFlBQVksQ0FBQ1AsVUFBVSxFQUFFOUcsTUFBTSxDQUFDTyxPQUFPLENBQUMsQ0FBQ0wsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztNQUMxRG1ILFlBQVksQ0FBQ04sVUFBVSxFQUFFL0csTUFBTSxDQUFDd0gsT0FBTyxDQUFDLENBQUN0SCxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlEO0lBRUEsU0FBU21ILFlBQVksQ0FBQ0ksUUFBUSxFQUFFQyxLQUFLLEVBQUU7TUFDbkNELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ3hCLFdBQVcsR0FBR3lCLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDbENELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ3hCLFdBQVcsR0FBR3lCLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEM7SUFFQVYsV0FBVyxFQUFFO0lBQ2IsSUFBTUksYUFBYSxHQUFHM0osV0FBVyxDQUFDdUosV0FBVyxFQUFFLElBQUksQ0FBQztFQUN4RDtFQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJbkgsSUFBSSxFQUFFO0VBQ3RCLElBQU02SCxRQUFRLEdBQUcsSUFBSTdILElBQUksQ0FBQ21ILEdBQUcsQ0FBQ1csV0FBVyxFQUFFLEVBQUVYLEdBQUcsQ0FBQzdHLFFBQVEsRUFBRSxFQUFFNkcsR0FBRyxDQUFDaEgsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQ2lILE9BQU8sRUFBRTtFQUVqR1AsY0FBYyxDQUFDZ0IsUUFBUSxDQUFDO0VBR3hCbkosZ0JBQWdCLEVBQUUsQ0FDYnhCLElBQUksQ0FBQ1YsSUFBSSxDQUFDO0VBRWYxQyxRQUFRLENBQUNHLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQzhJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQy9EakosUUFBUSxDQUFDRyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNzRSxTQUFTLENBQUN5RCxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ25FLENBQUMsQ0FBQztFQUNGbEksUUFBUSxDQUFDRyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM4SSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUM5RGpKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDc0UsU0FBUyxDQUFDeUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUNsRSxDQUFDLENBQUM7RUFFRixJQUFNK0YsSUFBSSxHQUFHak8sUUFBUSxDQUFDRyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQzdDLElBQU0rTixJQUFJLEdBQUdsTyxRQUFRLENBQUNHLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDN0MsSUFBTWdPLElBQUksR0FBR25PLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUM3QyxJQUFNaU8sUUFBUSxHQUFHcE8sUUFBUSxDQUFDRyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ2xELElBQU1rTyxNQUFNLEdBQUdyTyxRQUFRLENBQUNHLGFBQWEsQ0FBQyxVQUFVLENBQUM7RUFDakQsSUFBTW1PLFFBQVEsR0FBR3RPLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFlBQVksQ0FBQztFQUNyRCxJQUFNb08sT0FBTyxHQUFHdk8sUUFBUSxDQUFDRyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ25ELElBQU1xTyxPQUFPLEdBQUd4TyxRQUFRLENBQUNHLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDbkQsSUFBTXNPLE9BQU8sR0FBR3pPLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFdBQVcsQ0FBQztFQUNuRCxJQUFNdU8sTUFBTSxHQUFHMU8sUUFBUSxDQUFDRyxhQUFhLENBQUMsVUFBVSxDQUFDO0VBRWpEa08sTUFBTSxDQUFDaEMsV0FBVyxzQkFBZTNLLGFBQWEsQ0FBRTtFQUVoRDJNLE1BQU0sQ0FBQ3BGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ2xDdkgsYUFBYSxHQUFHTCxjQUFjLENBQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBR0MsTUFBTSxDQUFDRixjQUFjLENBQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDN0dJLGFBQWEsR0FBR0EsYUFBYSxHQUFHLENBQUM7SUFDakNMLGNBQWMsQ0FBQzJLLE9BQU8sQ0FBQyxlQUFlLEVBQUV0SyxhQUFhLENBQUM7SUFDdEQyTSxNQUFNLENBQUNoQyxXQUFXLHNCQUFlM0ssYUFBYSxDQUFFO0lBQ2hEO0lBQ0FELFdBQVcsRUFBRTtFQUdqQixDQUFDLENBQUM7RUFFRjZNLFFBQVEsQ0FBQ3JGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ3BDNUgsY0FBYyxDQUFDc04sVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUMxQ2pOLGFBQWEsR0FBRyxDQUFDO0lBQ2pCMk0sTUFBTSxDQUFDaEMsV0FBVyxlQUFlO0lBQ2pDNUssV0FBVyxFQUFFO0lBQ2JKLGNBQWMsQ0FBQzJLLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDO0lBQ3pDckosTUFBTSxDQUFDaU0sUUFBUSxDQUFDQyxNQUFNLEVBQUU7SUFDeEI7RUFFSixDQUFDLENBQUM7O0VBRUZaLElBQUksQ0FBQ2hGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ2hDNUgsY0FBYyxDQUFDMkssT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUM7SUFDekNySixNQUFNLENBQUNpTSxRQUFRLENBQUNDLE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7RUFDRlgsSUFBSSxDQUFDakYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDaEM1SCxjQUFjLENBQUMySyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQztJQUN6Q3JKLE1BQU0sQ0FBQ2lNLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0VBQzVCLENBQUMsQ0FBQztFQUNGVixJQUFJLENBQUNsRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNoQzVILGNBQWMsQ0FBQzJLLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDO0lBQ3pDckosTUFBTSxDQUFDaU0sUUFBUSxDQUFDQyxNQUFNLEVBQUU7RUFDNUIsQ0FBQyxDQUFDO0VBRUZULFFBQVEsQ0FBQ25GLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ3BDekgsU0FBUyxHQUFHLENBQUNBLFNBQVM7SUFDdEJDLFdBQVcsRUFBRTtJQUNiRCxTQUFTLEdBQUcsQ0FBQ0EsU0FBUztFQUUxQixDQUFDLENBQUM7RUFFRitNLE9BQU8sQ0FBQ3RGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ25DakosUUFBUSxDQUFDRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3NFLFNBQVMsQ0FBQ3lELE1BQU0sQ0FBQyxPQUFPLENBQUM7RUFDdEUsQ0FBQyxDQUFDO0VBRUZzRyxPQUFPLENBQUN2RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNuQ2pKLFFBQVEsQ0FBQ29FLElBQUksQ0FBQ0ssU0FBUyxDQUFDeUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUMxQyxDQUFDLENBQUM7RUFFRnVHLE9BQU8sQ0FBQ3hGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ25DLElBQUc1RyxNQUFNLEVBQUM7TUFDTmhCLGNBQWMsQ0FBQ3NOLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQyxNQUFJO01BQ0R0TixjQUFjLENBQUMySyxPQUFPLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQztJQUNqRDtJQUNEckosTUFBTSxDQUFDaU0sUUFBUSxDQUFDQyxNQUFNLEVBQUU7RUFDM0IsQ0FBQyxDQUFDO0VBQ0ZILE1BQU0sQ0FBQ3pGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ25DLElBQUk1SCxjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUNsQ0QsY0FBYyxDQUFDc04sVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDLE1BQU07TUFDSHROLGNBQWMsQ0FBQzJLLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBQzFDO0lBQ0FySixNQUFNLENBQUNpTSxRQUFRLENBQUNDLE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7RUFHRixJQUFNQyxLQUFLLEdBQUc5TyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztFQUVwRDZPLEtBQUssQ0FBQ3ZLLE9BQU8sQ0FBQyxVQUFBd0ssSUFBSSxFQUFJO0lBQ2xCQSxJQUFJLENBQUM5RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3RDLElBQU04RixNQUFNLEdBQUdELElBQUksQ0FBQ3RLLFNBQVMsQ0FBQzJFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztNQUVoRDs7TUFFQSxJQUFNNkYsT0FBTyxHQUFHdE0sTUFBTSxDQUFDc00sT0FBTyxDQUFDLENBQUM7TUFDaENqUCxRQUFRLENBQUNvRSxJQUFJLENBQUN1RixLQUFLLENBQUN1RixRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUM7TUFDeENsUCxRQUFRLENBQUNvRSxJQUFJLENBQUN1RixLQUFLLENBQUN3RixHQUFHLGNBQU9GLE9BQU8sT0FBSSxDQUFDLENBQUM7TUFDM0NqUCxRQUFRLENBQUNvRSxJQUFJLENBQUN1RixLQUFLLENBQUN5RixLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUM7TUFDcEM3QyxVQUFVLENBQUMsWUFBSztRQUNaLElBQU0wQyxPQUFPLEdBQUd2QixJQUFJLENBQUMyQixHQUFHLENBQUNDLFFBQVEsQ0FBQ3RQLFFBQVEsQ0FBQ29FLElBQUksQ0FBQ3VGLEtBQUssQ0FBQ3dGLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakVuUCxRQUFRLENBQUNvRSxJQUFJLENBQUN1RixLQUFLLENBQUN1RixRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbkNsUCxRQUFRLENBQUNvRSxJQUFJLENBQUN1RixLQUFLLENBQUN3RixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUJuUCxRQUFRLENBQUNvRSxJQUFJLENBQUN1RixLQUFLLENBQUN5RixLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7O1FBRWhDO1FBQ0F6TSxNQUFNLENBQUM0TSxRQUFRLENBQUMsQ0FBQyxFQUFFTixPQUFPLENBQUM7TUFDL0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUlMRixJQUFJLENBQUN0SyxTQUFTLENBQUN5RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFjTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgICAvLyBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX21vdW50YWluX2tpbmcnXG4gICAgLy8gY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV92aXAnLFxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfbW91bnRhaW5fa2luZycsXG4gICAgICAgIGNhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib251c19fYm94ZXMtaXRlbVwiKSxcbiAgICAgICAgZ2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZXQtYnRuXCIpLFxuICAgICAgICBsZXZlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvbnVzX19wcm9ncmVzcy1sdmxcIiksXG4gICAgICAgIHByb2dyZXNzUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy1wb3B1cFwiKSxcbiAgICAgICAgcHJvZ3Jlc3NQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXRpdGxlLWJ0blwiKSxcbiAgICAgICAgcHJvZ3Jlc3NQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3MtcG9wdXAtY2xvc2VcIiksXG4gICAgICAgIHVwZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fd2FybmluZ1wiKSxcbiAgICAgICAgdXBkUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX191cGQtYnRuXCIpLFxuICAgICAgICB1cGRQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fd2FybmluZy1jbG9zZVwiKSxcbiAgICAgICAgcmVzdWx0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fc3VidGl0bGUtcG9wdXBcIiksXG4gICAgICAgIHJlc3VsdFBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3N1YnRpdGxlLWJ0blwiKSxcbiAgICAgICAgcmVzdWx0UG9wdXBCdG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19zdWJ0aXRsZS1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlXCIpLFxuICAgICAgICBsZXZlbEJvdHRvbVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvbnVzX19wcm9ncmVzcy1ib3R0b21cIik7XG5cbiAgICBsZXQgY3VycmVudEx2bCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50THZsXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50THZsXCIpKSA6IDFcblxuICAgIGxldCBsdmxTdGF0dXMgPSBjaGVja1N0YXR1cygpO1xuICAgIGxldCBiZXRXaW5Db3VudGVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikpIDogMFxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwidWtcIlxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGNvbnN0IHRlc3RVc2VycyA9IFtcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI1NiwgYmV0czogMTAsIGRhdGU6IFwiMjAyNS0wMi0xOFQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNTcsIGJldHM6IDgsIGRhdGU6IFwiMjAyNS0wMi0xOFQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNTgsIGJldHM6IDcsIGRhdGU6IFwiMjAyNS0wMi0xOFQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNTksIGJldHM6IDUsIGRhdGU6IFwiMjAyNS0wMi0xOFQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNTIsIGJldHM6IDMsIGRhdGU6IFwiMjAyNS0wMi0xOFQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNTMsIGJldHM6IDExLCBkYXRlOiBcIjIwMjUtMDItMTlUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjQ1LCBiZXRzOiA4LCBkYXRlOiBcIjIwMjUtMDItMTlUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjQ2LCBiZXRzOiA2LCBkYXRlOiBcIjIwMjUtMDItMTlUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjQ3LCBiZXRzOiA0LCBkYXRlOiBcIjIwMjUtMDItMTlUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjM0LCBiZXRzOiAyLCBkYXRlOiBcIjIwMjUtMDItMTlUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjMyLCBiZXRzOiAxMSwgZGF0ZTogXCIyMDI1LTAyLTIwVDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDIzMSwgYmV0czogOCwgZGF0ZTogXCIyMDI1LTAyLTIwVDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDIyMiwgYmV0czogNiwgZGF0ZTogXCIyMDI1LTAyLTIxVDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDIyMywgYmV0czogNCwgZGF0ZTogXCIyMDI1LTAyLTIyVDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDg1Njg4MiwgYmV0czogNSwgZGF0ZTogXCIyMDI1LTAyLTIzVDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDg1Njg4MywgYmV0czogNCwgZGF0ZTogXCIyMDI1LTAyLTIzVDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDg1Njg4NCwgYmV0czogMywgZGF0ZTogXCIyMDI1LTAyLTIzVDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDg1Njg4OCwgYmV0czogMiwgZGF0ZTogXCIyMDI1LTAyLTIzVDEyOjAwOjAwXCIgfSxcbiAgICBdO1xuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZTtcbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgOiBudWxsXG4gICAgLy8gdXNlcklkID0gMTAwMzAwMjY4O1xuICAgIC8vIHVzZXJJZCA9IDEwMDg1Njg4ODtcblxuICAgIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICByZXF1ZXN0KCcvdXNlcnM/bm9jYWNoZT0xJyksXG4gICAgICAgIF0pXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgICAgICByZWZyZXNoQ2FzZXMoY3VycmVudEx2bClcbiAgICAgICAgICAgIGdldERhdGEoKS50aGVuKHJlcyA9PntcbiAgICAgICAgICAgICAgICBsZXQgdXNlcnMgPSByZXNbMF0uc29ydCgoYSwgYikgPT4gYi5wb2ludHMgLSBhLnBvaW50cyk7XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyVXNlcnModXNlcnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgICAgICByZWZyZXNoQ2FzZXMoY3VycmVudEx2bClcbiAgICAgICAgICAgIGdldERhdGEoKS50aGVuKHJlcyA9PntcbiAgICAgICAgICAgICAgICBsZXQgdXNlcnMgPSByZXNbMF0uc29ydCgoYSwgYikgPT4gYi5wb2ludHMgLSBhLnBvaW50cyk7XG4gICAgICAgICAgICAgICAgaWYoIWRlYnVnKXtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModXNlcnMpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2Vycyh0ZXN0VXNlcnMpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmVxdWVzdCgnL3VzZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbi5yZXN1bHRCb3R0b20pXG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmshXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbCB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgfVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gZGlzcGxheVVzZXJJbmZvKHVzZXJJbmZvKSB7XG4gICAgLy8gICAgIGNvbnN0IGJldHMgPSB1c2VySW5mby5iZXRzLnNsaWNlKDAsIDEwKTtcbiAgICAvLyAgICAgLy8gbGV0IGJldHMgPSBbe2JldERhdGU6IG5ldyBEYXRlKCksIHN0YXR1czogJ3VuZGVmaW5lZCd9XVxuICAgIC8vICAgICAvLyByZWZyZXNoTGFzdFVwZGF0ZWREYXRlKHVzZXJJbmZvKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyAvLyBmdW5jdGlvbiByZWZyZXNoTGFzdFVwZGF0ZWREYXRlKHVzZXJJbmZvKSB7XG4gICAgLy8gLy8gICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0X19sYXN0LXVwZCcpO1xuICAgIC8vIC8vICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3RVcGQnKTtcbiAgICAvLyAvLyAgICAgaWYgKHVzZXJJbmZvLmxhc3RVcGRhdGUpIHtcbiAgICAvLyAvLyAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gZm9ybWF0RGF0ZSh1c2VySW5mby5sYXN0VXBkYXRlKTtcbiAgICAvLyAvLyAgICAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIC8vIC8vICAgICB9IGVsc2Uge1xuICAgIC8vIC8vICAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgLy8gLy8gICAgIH1cbiAgICAvLyAvLyB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgICAgY29uc3QgbG9jYWxEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRheSA9IFN0cmluZyhsb2NhbERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtb250aCA9IFN0cmluZyhsb2NhbERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGxvY2FsRGF0ZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9ICR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJVc2VycyA9ICh1c2VycykgPT4ge1xuICAgICAgICBjb25zdCBncm91cGVkQnlEYXRlID0gdXNlcnMucmVkdWNlKChhY2MsIHVzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSB1c2VyLmRhdGUuc3BsaXQoXCJUXCIpWzBdO1xuICAgICAgICAgICAgYWNjW2RhdGVdID0gYWNjW2RhdGVdIHx8IFtdO1xuICAgICAgICAgICAgYWNjW2RhdGVdLnB1c2godXNlcik7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIGNvbnN0IGRhdGVzID0gT2JqZWN0LmtleXMoZ3JvdXBlZEJ5RGF0ZSkuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYikgLSBuZXcgRGF0ZShhKSk7XG4gICAgICAgIGxldCBhY3RpdmVEYXRlID0gZGF0ZXNbMF07XG5cbiAgICAgICAgY29uc3QgdXBkYXRlQWN0aXZlRGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgICAgICAgICBhY3RpdmVEYXRlID0gZGF0ZTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX3RhYmxlLW5hdi1pdGVtXCIpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcIl9hY3RpdmVcIiwgZWwuZGF0YXNldC5kYXRlID09PSBkYXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJzID0gZ3JvdXBlZEJ5RGF0ZVtkYXRlXSB8fCBbXTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcklkICYmIGN1cnJlbnRVc2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG4gICAgICAgICAgICBsZXQgdG9wVXNlcnMgPSBjdXJyZW50VXNlcnMuc2xpY2UoMCwgNCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlckluZGV4ID0gY3VycmVudFVzZXJzLmluZGV4T2YoY3VycmVudFVzZXIpO1xuICAgICAgICAgICAgICAgIHRvcFVzZXJzID0gWy4uLnRvcFVzZXJzLCBjdXJyZW50VXNlcl07XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHRvcFVzZXJzLCB1c2VySWQsIHJlc3VsdHNUYWJsZSwgY3VycmVudFVzZXJzLCBjdXJyZW50VXNlckluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHRvcFVzZXJzLCB1c2VySWQsIHJlc3VsdHNUYWJsZSwgY3VycmVudFVzZXJzLCA0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fdGFibGUtbmF2XCIpO1xuICAgICAgICBuYXZDb250YWluZXIuaW5uZXJIVE1MID0gZGF0ZXMubWFwKChkYXRlLCBpbmRleCkgPT4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0X190YWJsZS1uYXYtaXRlbSAke2luZGV4ID09PSAwID8gXCJfYWN0aXZlXCIgOiBcIlwifVwiIGRhdGEtZGF0ZT1cIiR7ZGF0ZX1cIj5cbiAgICAgICAgICAgICR7bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwidWstVUFcIiwgeyBkYXk6IFwiMi1kaWdpdFwiLCBtb250aDogXCIyLWRpZ2l0XCIgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIGApLmpvaW4oXCJcIik7XG5cbiAgICAgICAgbmF2Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVzdWx0X190YWJsZS1uYXYtaXRlbVwiKSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUFjdGl2ZURhdGUoZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZUFjdGl2ZURhdGUoYWN0aXZlRGF0ZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgdGFibGUpIHtcbiAgICAgICAgdGFibGUuaW5uZXJIVE1MID0gJyc7IC8vINCe0YfQuNGJ0LDRlNC80L4g0YLQsNCx0LvQuNGG0Y4g0L/QtdGA0LXQtCDRgNC10L3QtNC10YDQuNC90LPQvtC8XG5cbiAgICAgICAgY29uc3QgY3JlYXRlUm93ID0gKGNvbHVtbnMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlX19yb3dcIik7XG4gICAgICAgICAgICByb3cuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbHVtbnNcIiwgY29sdW1ucyk7IC8vINCh0YLQuNC70ZYg0LTQu9GPINC60L7Qu9C+0L3QvtC6XG4gICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVVzZXJCbG9jayA9ICh1c2VyLCBleHRyYUNsYXNzID0gXCJcIiwgcGxhY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYmxvY2tcIik7XG4gICAgICAgICAgICBpZiAoZXh0cmFDbGFzcykgYmxvY2suY2xhc3NMaXN0LmFkZChleHRyYUNsYXNzKTtcblxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYmxvY2staWNvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpbWcuc3JjID0gXCIuL2ltZy90YWJsZS9pY29uLnBuZ1wiO1xuICAgICAgICAgICAgaW1nLmFsdCA9IFwiRmF2YmV0XCI7XG4gICAgICAgICAgICBpY29uLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYmxvY2staW5mb1wiKTtcblxuICAgICAgICAgICAgbGV0IGlkQ29udGVudCA9ICcnO1xuICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICBpZENvbnRlbnQgPSB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZFxuICAgICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwieW91ci1pZFwiIGRhdGEtdHJhbnNsYXRlPVwieW91cklkXCI+0KLQstC+0ZQgaWQ8L2Rpdj5gXG4gICAgICAgICAgICAgICAgICAgIDogYGlkICR7dXNlci51c2VyaWR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWRDb250ZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LrQvtGA0LjRgdGC0YPQstCw0Ycg0ZQsINGC0L4g0YDQtdC90LTQtdGA0LjQvNC+INC80ZbRgdGG0LVcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlQ29udGVudCA9IHVzZXIgPyBgPGRpdiBjbGFzcz1cInRhYmxlX19ibG9jay1wbGFjZVwiPiR7cGxhY2V9PC9kaXY+YCA6ICcnO1xuXG4gICAgICAgICAgICBpbmZvLmlubmVySFRNTCA9IGBcbiAgICAgICAgJHtwbGFjZUNvbnRlbnR9ICA8IS0tINCf0L7QutCw0LfRg9GU0LzQviDQvNGW0YHRhtC1INC60L7RgNC40YHRgtGD0LLQsNGH0LAg0YLRltC70YzQutC4INGP0LrRidC+INGUINC60L7RgNC40YHRgtGD0LLQsNGHIC0tPlxuICAgICAgICAke2lkQ29udGVudCA/IGA8ZGl2IGNsYXNzPVwidGFibGVfX2Jsb2NrLWlkXCI+JHtpZENvbnRlbnR9PC9kaXY+YCA6IFwiXCJ9XG4gICAgICAgIGA7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiZXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBiZXRzLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9faW5mby1iZXRzXCIpO1xuICAgICAgICAgICAgICAgIGJldHMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9faW5mby1iZXRzLWNvdW50ZXJcIj4ke3VzZXIuYmV0c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2luZm8tYmV0cy10ZXh0XCIgZGF0YS10cmFuc2xhdGU9XCJib251c0JldHNcIj7QstC40LPRgNCw0YjQvdGWINGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChiZXRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCk0ZbQu9GM0YLRgNGD0ZTQvNC+INC60L7RgNC40YHRgtGD0LLQsNGH0ZbQsiwg0YnQvtCxINC00L7QtNCw0YLQuCDRl9GFINGD0L3RltC60LDQu9GM0L3QvlxuICAgICAgICBsZXQgYWRkZWRVc2VySWRzID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCB1bmlxdWVVc2VycyA9IHVzZXJzLmZpbHRlcih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICghYWRkZWRVc2VySWRzLmhhcyh1c2VyLnVzZXJpZCkpIHtcbiAgICAgICAgICAgICAgICBhZGRlZFVzZXJJZHMuYWRkKHVzZXIudXNlcmlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINGA0Y/QtNC60ZbQslxuICAgICAgICBjb25zdCByb3dzID0gWzEsIDIsIDMsIDRdOyAvLyDQndCw0LvQsNGI0YLQvtCy0YPRlNC80L4gNCDRgNGP0LTQutC4XG4gICAgICAgIGNvbnN0IHJvd0NvbmZpZyA9IFtcbiAgICAgICAgICAgIFt7IHVzZXI6IHVuaXF1ZVVzZXJzWzBdIHx8IG51bGwsIGNsYXNzOiBcIl9maXJzdFwiIH1dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHsgdXNlcjogdW5pcXVlVXNlcnNbMV0gfHwgbnVsbCwgY2xhc3M6IFwiX3NlY29uZFwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiB1bmlxdWVVc2Vyc1syXSB8fCBudWxsLCBjbGFzczogXCJfc2Vjb25kXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IHVzZXI6IG51bGwsIGNsYXNzOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiB1bmlxdWVVc2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpIHx8IG51bGwsIGNsYXNzOiBcInlvdVwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiBudWxsLCBjbGFzczogXCJcIiB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHsgdXNlcjogbnVsbCwgY2xhc3M6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICB7IHVzZXI6IG51bGwsIGNsYXNzOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiBudWxsLCBjbGFzczogXCJcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogbnVsbCwgY2xhc3M6IFwiXCIgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINC90LDRj9Cy0L3RltGB0YLRjCDQv9C+0YLQvtGH0L3QvtCz0L4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsFxuICAgICAgICBjb25zdCBjdXJyZW50VXNlckluZGV4ID0gdW5pcXVlVXNlcnMuZmluZEluZGV4KHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBuZXh0VXNlciA9IGN1cnJlbnRVc2VySW5kZXggPT09IC0xID8gdW5pcXVlVXNlcnNbMF0gOiB1bmlxdWVVc2Vyc1tjdXJyZW50VXNlckluZGV4ICsgMV07XG5cbiAgICAgICAgLy8g0K/QutGJ0L4g0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LAg0L3QtdC80LDRlCDRliDQstGW0L0g0L3QtSDQsiDQv9C10YDRiNGW0Lkg0YfQtdGC0LLRltGA0YbRliwg0YLQviDRgNC10L3QtNC10YDQuNC80L4g0L3QsNGB0YLRg9C/0L3QvtCz0L5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJQbGFjZSA9IGN1cnJlbnRVc2VySW5kZXggPCA0ID8gY3VycmVudFVzZXJJbmRleCArIDEgOiBudWxsOyAvLyDQr9C60YnQviDQv9C+0YLQvtGH0L3QuNC5INC60L7RgNC40YHRgtGD0LLQsNGHINGUINGDINC/0LXRgNGI0ZbQuSDRh9C10YLQstGW0YDRhtGWXG4gICAgICAgIGNvbnN0IHVzZXJUb1JlbmRlciA9IGN1cnJlbnRVc2VyUGxhY2UgPT09IG51bGwgPyBuZXh0VXNlciA6IG51bGw7XG5cbiAgICAgICAgLy8g0KDQtdC90LTQtdGA0LjQvNC+INC60L7QttC10L0g0YDRj9C00L7QulxuICAgICAgICByb3dzLmZvckVhY2goKGNvbHVtbnMsIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBjcmVhdGVSb3coY29sdW1ucyk7XG4gICAgICAgICAgICByb3dDb25maWdbcm93SW5kZXhdLmZvckVhY2goKHsgdXNlciwgY2xhc3M6IGV4dHJhQ2xhc3MgfSwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2UgPSB1bmlxdWVVc2Vycy5pbmRleE9mKHVzZXIpICsgMTsgIC8vINCX0L3QsNGF0L7QtNC40LzQviDQv9C+0LfQuNGG0ZbRjiDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINCyINGD0L3RltC60LDQu9GM0L3QvtC80YMg0YHQv9C40YHQutGDXG5cbiAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDQv9C+0YLQvtGH0L3QvtCz0L4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsCDQvdC10LzQsCDQsiDRgtCw0LHQu9C40YbRliDRliDQstGW0L0g0L3QtSDQsiDQv9C10YDRiNGW0Lkg0YfQtdGC0LLRltGA0YbRliwg0YDQtdC90LTQtdGA0LjQvNC+INC90LDRgdGC0YPQv9C90L7Qs9C+XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyICYmIHVzZXJUb1JlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICB1c2VyID0gdXNlclRvUmVuZGVyOyAvLyDQr9C60YnQviDQv9C+0YLQvtGH0L3QvtCz0L4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsCDQvdC10LzQsNGULCDRgdGC0LDQstC40LzQviDQvdCw0YHRgtGD0L/QvdC+0LPQvlxuICAgICAgICAgICAgICAgICAgICBwbGFjZSA9IHVuaXF1ZVVzZXJzLmluZGV4T2YodXNlcikgKyAxOyAvLyDQntC90L7QstC70Y7RlNC80L4g0LzRltGB0YbQtVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjcmVhdGVVc2VyQmxvY2sodXNlciwgZXh0cmFDbGFzcywgdXNlciA/IHBsYWNlIDogJycpKTsgLy8g0K/QutGJ0L4g0LrQvtGA0LjRgdGC0YPQstCw0Ycg0ZQsINC/0LXRgNC10LTQsNGU0LzQviDQvNGW0YHRhtC1LCDRltC90LDQutGI0LUg0L/QvtGA0L7QttC90ZQg0LfQvdCw0YfQtdC90L3Rj1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpOyAvLyDQlNC+0LTQsNGU0LzQviDRgNGP0LTQvtC6INC00L4g0YLQsNCx0LvQuNGG0ZZcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrU3RhdHVzKCkge1xuICAgICAgICBiZXRXaW5Db3VudGVyIDwgNiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X190YWJsZVwiKS5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIikgOiBudWxsXG4gICAgICAgIGNvbnN0IGFjdGl2ZUx2bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLWx2bC5fYWN0aXZlXCIpO1xuICAgICAgICBjb25zdCBjb25kaXRpb25zID0ge1xuICAgICAgICAgICAgYmV0OiB7XG4gICAgICAgICAgICAgICAgMTogYmV0V2luQ291bnRlciA+IDEsXG4gICAgICAgICAgICAgICAgMjogYmV0V2luQ291bnRlciA+IDMsXG4gICAgICAgICAgICAgICAgMzogYmV0V2luQ291bnRlciA+IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbHZsOiB7XG4gICAgICAgICAgICAgICAgMTogY3VycmVudEx2bCA9PT0gMSxcbiAgICAgICAgICAgICAgICAyOiBjdXJyZW50THZsID09PSAyLFxuICAgICAgICAgICAgICAgIDM6IGN1cnJlbnRMdmwgPT09IDMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgaWYgKGNvbmRpdGlvbnMuYmV0W2N1cnJlbnRMdmxdICYmIGNvbmRpdGlvbnMubHZsW2N1cnJlbnRMdmxdKSB7XG4gICAgICAgICAgICBsdmxTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpO1xuICAgICAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUx2bCkgYWN0aXZlTHZsLmNsYXNzTGlzdC5hZGQoXCJfdXBcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBsdmxTdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgbHZsU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpe1xuICAgICAgICBpZighdXNlcklkKSByZXR1cm5cbiAgICAgICAgbGV2ZWxzLmZvckVhY2goKGx2bCwgaSkgPT57XG4gICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX2RvbmVcIilcbiAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3VwXCIpXG4gICAgICAgICAgICBpZigrK2kgPT09IGN1cnJlbnRMdmwpIHtcbiAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIilcblxuICAgICAgICAgICAgICAgIGlmIChsdmxTdGF0dXMgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl91cFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAxICYmIGJldFdpbkNvdW50ZXIgPD0gMCAmJiBsdmxTdGF0dXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAxICYmIGJldFdpbkNvdW50ZXIgPD0gMCAmJiBsdmxTdGF0dXMgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMiAmJiBiZXRXaW5Db3VudGVyIDw9IDIgJiYgbHZsU3RhdHVzID09PSBmYWxzZSApe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDIgJiYgYmV0V2luQ291bnRlciA8PSAyICYmIGx2bFN0YXR1cyA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMyAmJiBiZXRXaW5Db3VudGVyIDw9IDQgJiYgbHZsU3RhdHVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMyAmJiBiZXRXaW5Db3VudGVyIDw9IDQgJiYgbHZsU3RhdHVzID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpIDwgY3VycmVudEx2bCwgaSAsIGN1cnJlbnRMdmwsIGx2bClcbiAgICAgICAgICAgIGkgPCBjdXJyZW50THZsID8gbHZsLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKSA6IG51bGxcbiAgICAgICAgICAgIGxldmVsQm90dG9tVGV4dC5mb3JFYWNoKChpdGVtLCBpKSA9PntcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsIDw9IDMpe1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGkgPT09IGN1cnJlbnRMdmwgLSAxKXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoQ2FzZXMoY3VycmVudEx2bCkge1xuICAgICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+IHtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiLCBcIl9sZWZ0XCIsIFwiX3JpZ2h0XCIsIFwiX2xvY2tcIik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZighdXNlcklkKXtcbiAgICAgICAgLy8gICAgIGNhc2VzLmZvckVhY2goKGJveCwgaSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIik7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gICAgIHJldHVyblxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gY3VycmVudEx2bCAtIDE7XG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA+PSBjYXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gY2FzZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmV2SW5kZXggPSBhY3RpdmVJbmRleCAtIDEgPCAwID8gY2FzZXMubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMTtcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ICsgMSA+PSBjYXNlcy5sZW5ndGggPyAwIDogYWN0aXZlSW5kZXggKyAxO1xuXG4gICAgICAgIGNhc2VzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKTtcbiAgICAgICAgY2FzZXNbcHJldkluZGV4XS5jbGFzc0xpc3QuYWRkKFwiX2xlZnRcIik7XG4gICAgICAgIGNhc2VzW25leHRJbmRleF0uY2xhc3NMaXN0LmFkZChcIl9yaWdodFwiKTtcblxuICAgICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChpICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIGx2bFVwKCl7XG4gICAgICAgIGN1cnJlbnRMdmwgPSBjdXJyZW50THZsICsgMVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBgJHtjdXJyZW50THZsfWApXG4gICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgcmV0dXJuIGx2bFN0YXR1c1xuICAgIH1cblxuICAgIC8vIGNoZWNrU3RhdHVzKClcblxuXG5cbi8vIGNvbnNvbGUubG9nKGlkQXJyKVxuXG4gICAgZnVuY3Rpb24gY2hlY2tQbGFjZUxlbmd0aCgpe1xuICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnlvdVwiKSxcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlID0gdXNlclBsYWNlLnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2Jsb2NrLXBsYWNlXCIpO1xuXG4gICAgICAgIGxldCBpZEFyciA9IHVzZXJUYWJsZVBsYWNlLnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfb25lJylcbiAgICAgICAgfVxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDIpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX3R3bycpXG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSAzKXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ190aHJlZScpXG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSA0KXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ19mb3VyJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gNSl7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfZml2ZScpXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gb3BlbkNhc2VBbmltKGJveCl7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hha2VcIilcbiAgICAgICAgYm94LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19jYXBcIikuY2xhc3NMaXN0LmFkZChcIm9wZW5cIilcbiAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgYm94LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19jYXAtZnJvbnRcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgfSwgMzAwKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hvd1wiKVxuICAgICAgICB9LCAxNTApXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBsdmxVcCgpXG4gICAgICAgICAgICByZWZyZXNoQ2FzZXMoY3VycmVudEx2bClcbiAgICAgICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgfSwgNDAwMClcbiAgICB9XG5cblxuXG5cbiAgICBnZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PntcbiAgICAgICAgICAgIGlmKGJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJfYWN0aXZlXCIpKXtcbiAgICAgICAgICAgICAgICBvcGVuQ2FzZUFuaW0oYm94KVxuICAgICAgICAgICAgICAgIC8vIGdldEJ0bi5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIilcbiAgICAgICAgICAgICAgICAvLyBjaGVja1N0YXR1cygpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH0pXG5cblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwKGJ0bk9wZW4sIGJ0bkNsb3NlLCBwb3B1cCwgaGlkZSl7XG4gICAgICAgIGJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgIGlmKGhpZGUpe1xuICAgICAgICAgICAgICAgIGJ0bk9wZW4ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiX3BvcHVwXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmKGJ0bkNsb3NlKXtcbiAgICAgICAgICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICBidG5PcGVuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgLy8gaWYoaGlkZSl7XG4gICAgICAgICAgICAgICAgLy8gICAgIGJ0bk9wZW4ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiLl9wb3B1cFwiKVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgICAgIGlmKCFwb3B1cC5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQgIT09IGJ0bk9wZW4pe1xuICAgICAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICBpZihoaWRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk9wZW4ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXRQb3B1cChwcm9ncmVzc1BvcHVwQnRuLCBwcm9ncmVzc1BvcHVwQ2xvc2UsIHByb2dyZXNzUG9wdXApXG4gICAgc2V0UG9wdXAodXBkUG9wdXBCdG4sIHVwZFBvcHVwQ2xvc2UsIHVwZFBvcHVwLCB0cnVlKVxuICAgIHNldFBvcHVwKHJlc3VsdFBvcHVwQnRuLCByZXN1bHRQb3B1cEJ0bkNsb3NlLCByZXN1bHRQb3B1cCwgdHJ1ZSlcblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKGVuZFRpbWUpIHtcbiAgICAgICAgY29uc3QgaG91cnNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyX19ob3Vycy1pdGVtXCIpO1xuICAgICAgICBjb25zdCBtaW51dGVzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aW1lcl9fbWludXRlcy1pdGVtXCIpO1xuICAgICAgICBjb25zdCBzZWNvbmRzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aW1lcl9fc2Vjb25kcy1pdGVtXCIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IGVuZFRpbWUgLSBub3c7XG5cbiAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoaG91cnNFbHMsIFwiMDBcIik7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKG1pbnV0ZXNFbHMsIFwiMDBcIik7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKHNlY29uZHNFbHMsIFwiMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAoMTAwMCAqIDYwKSkgJSA2MCk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAxMDAwKSAlIDYwKTtcblxuICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCBTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4gICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4gICAgICAgICAgICB1cGRhdGVEaWdpdHMoc2Vjb25kc0VscywgU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVEaWdpdHMoZWxlbWVudHMsIHZhbHVlKSB7XG4gICAgICAgICAgICBlbGVtZW50c1swXS50ZXh0Q29udGVudCA9IHZhbHVlWzBdO1xuICAgICAgICAgICAgZWxlbWVudHNbMV0udGV4dENvbnRlbnQgPSB2YWx1ZVsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgIGNvbnN0IHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBlbmRPZkRheSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSwgMjMsIDU5LCA1OSkuZ2V0VGltZSgpO1xuXG4gICAgc3RhcnRDb3VudGRvd24oZW5kT2ZEYXkpO1xuXG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbHZsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtbWVudVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4gICAgfSlcblxuICAgIGNvbnN0IGx2bDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC0xXCIpXG4gICAgY29uc3QgbHZsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLTJcIilcbiAgICBjb25zdCBsdmwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtM1wiKVxuICAgIGNvbnN0IGx2bFVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtdXBcIilcbiAgICBjb25zdCBiZXRXaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJldC13aW5cIilcbiAgICBjb25zdCBiZXRDbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmV0LWNsZWFyXCIpXG4gICAgY29uc3QgYnRuTG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWxvY2tcIilcbiAgICBjb25zdCBkYXJrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKVxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogJHtiZXRXaW5Db3VudGVyfWBcblxuICAgIGJldFdpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGJldFdpbkNvdW50ZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0V2luQ291bnRlclwiKSkgOiAwXG4gICAgICAgIGJldFdpbkNvdW50ZXIgPSBiZXRXaW5Db3VudGVyICsgMVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmV0V2luQ291bnRlclwiLCBiZXRXaW5Db3VudGVyKVxuICAgICAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogJHtiZXRXaW5Db3VudGVyfWBcbiAgICAgICAgLy8gcmVmcmVzaEx2bChjdXJyZW50THZsKVxuICAgICAgICBjaGVja1N0YXR1cygpXG5cblxuICAgIH0pXG5cbiAgICBiZXRDbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpXG4gICAgICAgIGJldFdpbkNvdW50ZXIgPSAwXG4gICAgICAgIGJldFdpbi50ZXh0Q29udGVudCA9IGB3aW4gYmV0OiAwYFxuICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiMVwiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgLy8gcmVmcmVzaEx2bChjdXJyZW50THZsLCBsdmxTdGF0dXMpXG5cbiAgICB9KVxuXG4gICAgbHZsMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiMVwiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuICAgIGx2bDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjJcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcbiAgICBsdmwzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIzXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG5cbiAgICBsdmxVcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGx2bFN0YXR1cyA9ICFsdmxTdGF0dXNcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICBsdmxTdGF0dXMgPSAhbHZsU3RhdHVzXG5cbiAgICB9KVxuXG4gICAgYnRuTG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X190YWJsZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiX2xvY2tcIilcbiAgICB9KVxuXG4gICAgZGFya0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgICB9KVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCAnMTAwODU2ODg4JylcbiAgICAgICAgfVxuICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgZHJvcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duXCIpO1xuXG4gICAgZHJvcHMuZm9yRWFjaChkcm9wID0+IHtcbiAgICAgICAgZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc09wZW4gPSBkcm9wLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIik7IC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0LTRgNC+0L8g0LLQttC1INCy0ZbQtNC60YDQuNGC0LjQuVxuXG4gICAgICAgICAgICAvLyDQr9C60YnQviDQstGW0LTQutGA0LjQstCw0ZTQvNC+INC00YDQvtC/XG5cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTsgLy8g0JfQsNC/0LDQvCfRj9GC0L7QstGD0ZTQvNC+INC/0L7RgtC+0YfQvdGDINC/0L7Qt9C40YbRltGOINGB0LrRgNC+0LvRg1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjsgLy8g0KTRltC60YHRg9GU0LzQviBib2R5XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IGAtJHtzY3JvbGxZfXB4YDsgLy8g0J/QtdGA0LXQvNGW0YnQsNGU0LzQviBib2R5LCDRidC+0LEg0LfQsdC10YDQtdCz0YLQuCDQv9C+0YLQvtGH0L3RgyDQv9C+0LfQuNGG0ZbRjlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiOyAvLyDQqdC+0LEg0L3QtSDQt9C80ZbRidGD0LLQsNC70LDRgdGPINGI0LjRgNC40L3QsCDQv9GA0Lgg0YTRltC60YHQsNGG0ZbRl1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxZID0gTWF0aC5hYnMocGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKSk7IC8vINCe0YLRgNC40LzRg9GU0LzQviDQt9Cx0LXRgNC10LbQtdC90LjQuSDRgdC60YDQvtC7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7IC8vINCS0ZbQtNC90L7QstC70Y7RlNC80L4gbm9ybWFsINGB0YLQsNC9INC00LvRjyBib2R5XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBcIlwiOyAvLyDQodC60LjQtNCw0ZTQvNC+IHRvcFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSBcIlwiOyAvLyDQktGW0LTQvdC+0LLQu9GO0ZTQvNC+INGI0LjRgNC40L3Rg1xuXG4gICAgICAgICAgICAgICAgLy8g0J/QvtCy0LXRgNGC0LDRlNC80L7RgdGPINC90LAg0LfQsdC10YDQtdC20LXQvdGDINC/0L7Qt9C40YbRltGOXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkpO1xuICAgICAgICAgICAgfSwgMClcblxuXG5cbiAgICAgICAgICAgIGRyb3AuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7IC8vINCf0LXRgNC10LzQuNC60LDRlNC80L4g0YHRgtCw0L0g0LTRgNC+0L/QtNCw0YPQvdGDXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG59KSgpXG5cbiJdfQ==
