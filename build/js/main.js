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
    if (userId === null) {
      document.querySelector(".bonus__progress").style.margin = "0";
      document.querySelector(".bonus__progress-wrap").style.opacity = "0";
      return;
    }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY2FzZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRCdG4iLCJxdWVyeVNlbGVjdG9yIiwibGV2ZWxzIiwicHJvZ3Jlc3NQb3B1cCIsInByb2dyZXNzUG9wdXBCdG4iLCJwcm9ncmVzc1BvcHVwQ2xvc2UiLCJ1cGRQb3B1cCIsInVwZFBvcHVwQnRuIiwidXBkUG9wdXBDbG9zZSIsInJlc3VsdFBvcHVwIiwicmVzdWx0UG9wdXBCdG4iLCJyZXN1bHRQb3B1cEJ0bkNsb3NlIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsIm1haW5QYWdlIiwicmVzdWx0c1RhYmxlIiwibGV2ZWxCb3R0b21UZXh0IiwiY3VycmVudEx2bCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIk51bWJlciIsImx2bFN0YXR1cyIsImNoZWNrU3RhdHVzIiwiYmV0V2luQ291bnRlciIsImxvY2FsZSIsInVrTGVuZyIsImVuTGVuZyIsInRlc3RVc2VycyIsInVzZXJpZCIsImJldHMiLCJkYXRlIiwiZGVidWciLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiZ2V0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXF1ZXN0IiwiaW5pdCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImNoZWNrVXNlckF1dGgiLCJyZWZyZXNoQ2FzZXMiLCJ0aGVuIiwicmVzIiwidXNlcnMiLCJzb3J0IiwiYSIsImIiLCJwb2ludHMiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsInJlbmRlclVzZXJzIiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJpdGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibG9hZFRyYW5zbGF0aW9ucyIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRCb3R0b20iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsInRyYW5zbGF0ZUtleSIsImRlZmF1bHRWYWwiLCJmb3JtYXREYXRlIiwibG9jYWxEYXRlIiwiRGF0ZSIsImRheSIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJoZWFkZXJzIiwidW5hdXRoTWVzIiwicGFydGljaXBhdGVCdG4iLCJyZXNvbHZlIiwiZ3JvdXBlZEJ5RGF0ZSIsInJlZHVjZSIsImFjYyIsInVzZXIiLCJzcGxpdCIsInB1c2giLCJkYXRlcyIsIk9iamVjdCIsImtleXMiLCJhY3RpdmVEYXRlIiwidXBkYXRlQWN0aXZlRGF0ZSIsImVsIiwidG9nZ2xlIiwiZGF0YXNldCIsImN1cnJlbnRVc2VycyIsImN1cnJlbnRVc2VyIiwiZmluZCIsInRvcFVzZXJzIiwic2xpY2UiLCJjdXJyZW50VXNlckluZGV4IiwiaW5kZXhPZiIsInBvcHVsYXRlVXNlcnNUYWJsZSIsIm5hdkNvbnRhaW5lciIsIm1hcCIsImluZGV4IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiam9pbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwiY3VycmVudFVzZXJJZCIsInRhYmxlIiwiY3JlYXRlUm93IiwiY29sdW1ucyIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY3JlYXRlVXNlckJsb2NrIiwiZXh0cmFDbGFzcyIsInBsYWNlIiwiYmxvY2siLCJpY29uIiwiaW1nIiwic3JjIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJpbmZvIiwiaWRDb250ZW50IiwicGxhY2VDb250ZW50IiwiYWRkZWRVc2VySWRzIiwiU2V0IiwidW5pcXVlVXNlcnMiLCJmaWx0ZXIiLCJoYXMiLCJyb3dzIiwicm93Q29uZmlnIiwiZmluZEluZGV4IiwibmV4dFVzZXIiLCJjdXJyZW50VXNlclBsYWNlIiwidXNlclRvUmVuZGVyIiwicm93SW5kZXgiLCJjb2xJbmRleCIsImFjdGl2ZUx2bCIsImNvbmRpdGlvbnMiLCJiZXQiLCJsdmwiLCJyZWZyZXNoTHZsIiwibWFyZ2luIiwib3BhY2l0eSIsImJveCIsImFjdGl2ZUluZGV4IiwicHJldkluZGV4IiwibmV4dEluZGV4IiwibHZsVXAiLCJzZXRJdGVtIiwiY2hlY2tQbGFjZUxlbmd0aCIsInVzZXJQbGFjZSIsInVzZXJUYWJsZVBsYWNlIiwiaWRBcnIiLCJ0ZXh0Q29udGVudCIsIm9wZW5DYXNlQW5pbSIsInNldFRpbWVvdXQiLCJzZXRQb3B1cCIsImJ0bk9wZW4iLCJidG5DbG9zZSIsInBvcHVwIiwiaGlkZSIsInBhcmVudE5vZGUiLCJlIiwic3RhcnRDb3VudGRvd24iLCJlbmRUaW1lIiwiaG91cnNFbHMiLCJtaW51dGVzRWxzIiwic2Vjb25kc0VscyIsInVwZGF0ZVRpbWVyIiwibm93IiwiZ2V0VGltZSIsInRpbWVMZWZ0IiwidGltZXJJbnRlcnZhbCIsInVwZGF0ZURpZ2l0cyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJlbGVtZW50cyIsInZhbHVlIiwiZW5kT2ZEYXkiLCJnZXRGdWxsWWVhciIsImx2bDEiLCJsdmwyIiwibHZsMyIsImx2bFVwQnRuIiwiYmV0V2luIiwiYmV0Q2xlYXIiLCJidG5Mb2NrIiwiZGFya0J0biIsImF1dGhCdG4iLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJkZXRhaWxzIiwiZHJvcGRvd24iLCJvcGVuIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdwb3J0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJzY3JvbGxCeSIsInRvcCIsImJlaGF2aW9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFlBQVc7RUFBQTtFQUNSO0VBQ0E7RUFDQSxJQUFNQSxNQUFNLEdBQUcsd0NBQXdDO0lBQ25EQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7SUFDdkRDLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQzNDQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7SUFDMURJLGFBQWEsR0FBR0wsUUFBUSxDQUFDRyxhQUFhLENBQUMsd0JBQXdCLENBQUM7SUFDaEVHLGdCQUFnQixHQUFHTixRQUFRLENBQUNHLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUN2RUksa0JBQWtCLEdBQUdQLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLDhCQUE4QixDQUFDO0lBQzNFSyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQ3BETSxXQUFXLEdBQUdULFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQ3ZETyxhQUFhLEdBQUdWLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQy9EUSxXQUFXLEdBQUdYLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBQy9EUyxjQUFjLEdBQUdaLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQ2hFVSxtQkFBbUIsR0FBR2IsUUFBUSxDQUFDRyxhQUFhLENBQUMsK0JBQStCLENBQUM7SUFDN0VXLFVBQVUsR0FBR2QsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDckRjLGVBQWUsR0FBR2YsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDeERlLFlBQVksR0FBR2hCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3JEZ0IsUUFBUSxHQUFHakIsUUFBUSxDQUFDRyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzlDZSxZQUFZLEdBQUdsQixRQUFRLENBQUNHLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0NnQixlQUFlLEdBQUduQixRQUFRLENBQUNDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDO0VBRTFFLElBQUltQixVQUFVLEdBQUdDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHQyxNQUFNLENBQUNGLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUV4RyxJQUFJRSxTQUFTLEdBQUdDLFdBQVcsRUFBRTtFQUM3QixJQUFJQyxhQUFhLEdBQUdMLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHQyxNQUFNLENBQUNGLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUNqSCxJQUFJSyxNQUFNLDRCQUFHTixjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUVBQUksSUFBSTtFQUVyRCxJQUFNTSxNQUFNLEdBQUc1QixRQUFRLENBQUNHLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDaEQsSUFBTTBCLE1BQU0sR0FBRzdCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUVoRCxJQUFJeUIsTUFBTSxFQUFFRCxNQUFNLEdBQUcsSUFBSTtFQUN6QixJQUFJRSxNQUFNLEVBQUVGLE1BQU0sR0FBRyxJQUFJO0VBRXpCLElBQU1HLFNBQVMsR0FBRyxDQUNkO0lBQUVDLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxFQUFFO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzVEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxFQUFFO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzVEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxFQUFFO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzVEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFBRSxTQUFTO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFzQixDQUFDLEVBQzNEO0lBQUVGLE1BQU0sRUFB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QUFDOztFQUdGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFnQkosQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgLy8gY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9tb3VudGFpbl9raW5nJ1xuICAgIC8vIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfdmlwJyxcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX21vdW50YWluX2tpbmcnLFxuICAgICAgICBjYXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9udXNfX2JveGVzLWl0ZW1cIiksXG4gICAgICAgIGdldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2V0LWJ0blwiKSxcbiAgICAgICAgbGV2ZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib251c19fcHJvZ3Jlc3MtbHZsXCIpLFxuICAgICAgICBwcm9ncmVzc1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3MtcG9wdXBcIiksXG4gICAgICAgIHByb2dyZXNzUG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy10aXRsZS1idG5cIiksXG4gICAgICAgIHByb2dyZXNzUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXBvcHVwLWNsb3NlXCIpLFxuICAgICAgICB1cGRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3dhcm5pbmdcIiksXG4gICAgICAgIHVwZFBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fdXBkLWJ0blwiKSxcbiAgICAgICAgdXBkUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3dhcm5pbmctY2xvc2VcIiksXG4gICAgICAgIHJlc3VsdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3N1YnRpdGxlLXBvcHVwXCIpLFxuICAgICAgICByZXN1bHRQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0X19zdWJ0aXRsZS1idG5cIiksXG4gICAgICAgIHJlc3VsdFBvcHVwQnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fc3VidGl0bGUtcG9wdXAtY2xvc2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZVwiKSxcbiAgICAgICAgbGV2ZWxCb3R0b21UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib251c19fcHJvZ3Jlc3MtYm90dG9tXCIpO1xuXG4gICAgbGV0IGN1cnJlbnRMdmwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEx2bFwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEx2bFwiKSkgOiAxXG5cbiAgICBsZXQgbHZsU3RhdHVzID0gY2hlY2tTdGF0dXMoKTtcbiAgICBsZXQgYmV0V2luQ291bnRlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRXaW5Db3VudGVyXCIpKSA6IDBcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/PyBcInVrXCJcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBjb25zdCB0ZXN0VXNlcnMgPSBbXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyNTYsIGJldHM6IDEwLCBkYXRlOiBcIjIwMjUtMDItMThUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjU3LCBiZXRzOiA4LCBkYXRlOiBcIjIwMjUtMDItMThUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjU4LCBiZXRzOiA3LCBkYXRlOiBcIjIwMjUtMDItMThUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjU5LCBiZXRzOiA1LCBkYXRlOiBcIjIwMjUtMDItMThUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjUyLCBiZXRzOiAzLCBkYXRlOiBcIjIwMjUtMDItMThUMTI6MDA6MDBcIiB9LFxuICAgICAgICB7IHVzZXJpZDogMTAwMzAwMjUzLCBiZXRzOiAxMSwgZGF0ZTogXCIyMDI1LTAyLTE5VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI0NSwgYmV0czogOCwgZGF0ZTogXCIyMDI1LTAyLTE5VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI0NiwgYmV0czogNiwgZGF0ZTogXCIyMDI1LTAyLTE5VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDI0NywgYmV0czogNCwgZGF0ZTogXCIyMDI1LTAyLTE5VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDIzNCwgYmV0czogMiwgZGF0ZTogXCIyMDI1LTAyLTE5VDEyOjAwOjAwXCIgfSxcbiAgICAgICAgeyB1c2VyaWQ6IDEwMDMwMDIzMiwgYmV0czogMTEsIGRhdGU6IFwiMjAyNS0wMi0yMFQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyMzEsIGJldHM6IDgsIGRhdGU6IFwiMjAyNS0wMi0yMFQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyMjIsIGJldHM6IDYsIGRhdGU6IFwiMjAyNS0wMi0yMVQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDAzMDAyMjMsIGJldHM6IDQsIGRhdGU6IFwiMjAyNS0wMi0yMlQxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDA4NTY4ODIsIGJldHM6IDUsIGRhdGU6IFwiMjAyNS0wMi0yM1QxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDA4NTY4ODMsIGJldHM6IDQsIGRhdGU6IFwiMjAyNS0wMi0yM1QxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDA4NTY4ODQsIGJldHM6IDMsIGRhdGU6IFwiMjAyNS0wMi0yM1QxMjowMDowMFwiIH0sXG4gICAgICAgIHsgdXNlcmlkOiAxMDA4NTY4ODgsIGJldHM6IDIsIGRhdGU6IFwiMjAyNS0wMi0yM1QxMjowMDowMFwiIH0sXG4gICAgXTtcblxuICAgIGxldCBkZWJ1ZyA9IHRydWU7XG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpIDogbnVsbFxuICAgIC8vIHVzZXJJZCA9IDEwMDMwMDI2ODtcbiAgICAvLyB1c2VySWQgPSAxMDA4NTY4ODg7XG5cbiAgICBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgcmVxdWVzdCgnL3VzZXJzP25vY2FjaGU9MScpLFxuICAgICAgICBdKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICAgICAgcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpXG4gICAgICAgICAgICBnZXREYXRhKCkudGhlbihyZXMgPT57XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzWzBdLnNvcnQoKGEsIGIpID0+IGIucG9pbnRzIC0gYS5wb2ludHMpO1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlclVzZXJzKHVzZXJzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYyA9IDA7XG4gICAgICAgICAgICB2YXIgaSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICAgICAgcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpXG4gICAgICAgICAgICBnZXREYXRhKCkudGhlbihyZXMgPT57XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzWzBdLnNvcnQoKGEsIGIpID0+IGIucG9pbnRzIC0gYS5wb2ludHMpO1xuICAgICAgICAgICAgICAgIGlmKCFkZWJ1Zyl7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHVzZXJzKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGVzdFVzZXJzKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24ucmVzdWx0Qm90dG9tKVxuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbCkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWwgfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIGRpc3BsYXlVc2VySW5mbyh1c2VySW5mbykge1xuICAgIC8vICAgICBjb25zdCBiZXRzID0gdXNlckluZm8uYmV0cy5zbGljZSgwLCAxMCk7XG4gICAgLy8gICAgIC8vIGxldCBiZXRzID0gW3tiZXREYXRlOiBuZXcgRGF0ZSgpLCBzdGF0dXM6ICd1bmRlZmluZWQnfV1cbiAgICAvLyAgICAgLy8gcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbyk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLy8gZnVuY3Rpb24gcmVmcmVzaExhc3RVcGRhdGVkRGF0ZSh1c2VySW5mbykge1xuICAgIC8vIC8vICAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdF9fbGFzdC11cGQnKTtcbiAgICAvLyAvLyAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0VXBkJyk7XG4gICAgLy8gLy8gICAgIGlmICh1c2VySW5mby5sYXN0VXBkYXRlKSB7XG4gICAgLy8gLy8gICAgICAgICBzcGFuLmlubmVySFRNTCA9IGZvcm1hdERhdGUodXNlckluZm8ubGFzdFVwZGF0ZSk7XG4gICAgLy8gLy8gICAgICAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAvLyAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAvLyAgICAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vIC8vICAgICB9XG4gICAgLy8gLy8gfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjb25zdCBkYXkgPSBTdHJpbmcobG9jYWxEYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcobG9jYWxEYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBob3VycyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhsb2NhbERhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRofSAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGdldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVXNlcnMgPSAodXNlcnMpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBlZEJ5RGF0ZSA9IHVzZXJzLnJlZHVjZSgoYWNjLCB1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gdXNlci5kYXRlLnNwbGl0KFwiVFwiKVswXTtcbiAgICAgICAgICAgIGFjY1tkYXRlXSA9IGFjY1tkYXRlXSB8fCBbXTtcbiAgICAgICAgICAgIGFjY1tkYXRlXS5wdXNoKHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuICAgICAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5rZXlzKGdyb3VwZWRCeURhdGUpLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIpIC0gbmV3IERhdGUoYSkpO1xuICAgICAgICBsZXQgYWN0aXZlRGF0ZSA9IGRhdGVzWzBdO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgYWN0aXZlRGF0ZSA9IGRhdGU7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0X190YWJsZS1uYXYtaXRlbVwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJfYWN0aXZlXCIsIGVsLmRhdGFzZXQuZGF0ZSA9PT0gZGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VycyA9IGdyb3VwZWRCeURhdGVbZGF0ZV0gfHwgW107XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJJZCAmJiBjdXJyZW50VXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAgICAgbGV0IHRvcFVzZXJzID0gY3VycmVudFVzZXJzLnNsaWNlKDAsIDQpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJbmRleCA9IGN1cnJlbnRVc2Vycy5pbmRleE9mKGN1cnJlbnRVc2VyKTtcbiAgICAgICAgICAgICAgICB0b3BVc2VycyA9IFsuLi50b3BVc2VycywgY3VycmVudFVzZXJdO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGUsIGN1cnJlbnRVc2VycywgY3VycmVudFVzZXJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGUsIGN1cnJlbnRVc2VycywgNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRfX3RhYmxlLW5hdlwiKTtcbiAgICAgICAgbmF2Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGVzLm1hcCgoZGF0ZSwgaW5kZXgpID0+IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdF9fdGFibGUtbmF2LWl0ZW0gJHtpbmRleCA9PT0gMCA/IFwiX2FjdGl2ZVwiIDogXCJcIn1cIiBkYXRhLWRhdGU9XCIke2RhdGV9XCI+XG4gICAgICAgICAgICAke25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcInVrLVVBXCIsIHsgZGF5OiBcIjItZGlnaXRcIiwgbW9udGg6IFwiMi1kaWdpdFwiIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICBgKS5qb2luKFwiXCIpO1xuXG4gICAgICAgIG5hdkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlc3VsdF9fdGFibGUtbmF2LWl0ZW1cIikpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVBY3RpdmVEYXRlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVBY3RpdmVEYXRlKGFjdGl2ZURhdGUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHRhYmxlKSB7XG4gICAgICAgIHRhYmxlLmlubmVySFRNTCA9ICcnOyAvLyDQntGH0LjRidCw0ZTQvNC+INGC0LDQsdC70LjRhtGOINC/0LXRgNC10LQg0YDQtdC90LTQtdGA0LjQvdCz0L7QvFxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVJvdyA9IChjb2x1bW5zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fcm93XCIpO1xuICAgICAgICAgICAgcm93LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2x1bW5zXCIsIGNvbHVtbnMpOyAvLyDQodGC0LjQu9GWINC00LvRjyDQutC+0LvQvtC90L7QulxuICAgICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjcmVhdGVVc2VyQmxvY2sgPSAodXNlciwgZXh0cmFDbGFzcyA9IFwiXCIsIHBsYWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2Jsb2NrXCIpO1xuICAgICAgICAgICAgaWYgKGV4dHJhQ2xhc3MpIGJsb2NrLmNsYXNzTGlzdC5hZGQoZXh0cmFDbGFzcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2Jsb2NrLWljb25cIik7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IFwiLi9pbWcvdGFibGUvaWNvbi5wbmdcIjtcbiAgICAgICAgICAgIGltZy5hbHQgPSBcIkZhdmJldFwiO1xuICAgICAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaW5mby5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2Jsb2NrLWluZm9cIik7XG5cbiAgICAgICAgICAgIGxldCBpZENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgaWRDb250ZW50ID0gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWRcbiAgICAgICAgICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cInlvdXItaWRcIiBkYXRhLXRyYW5zbGF0ZT1cInlvdXJJZFwiPtCi0LLQvtGUIGlkPC9kaXY+YFxuICAgICAgICAgICAgICAgICAgICA6IGBpZCAke3VzZXIudXNlcmlkfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkQ29udGVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCv0LrRidC+INC60L7RgNC40YHRgtGD0LLQsNGHINGULCDRgtC+INGA0LXQvdC00LXRgNC40LzQviDQvNGW0YHRhtC1XG4gICAgICAgICAgICBjb25zdCBwbGFjZUNvbnRlbnQgPSB1c2VyID8gYDxkaXYgY2xhc3M9XCJ0YWJsZV9fYmxvY2stcGxhY2VcIj4ke3BsYWNlfTwvZGl2PmAgOiAnJztcblxuICAgICAgICAgICAgaW5mby5pbm5lckhUTUwgPSBgXG4gICAgICAgICR7cGxhY2VDb250ZW50fSAgPCEtLSDQn9C+0LrQsNC30YPRlNC80L4g0LzRltGB0YbQtSDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINGC0ZbQu9GM0LrQuCDRj9C60YnQviDRlCDQutC+0YDQuNGB0YLRg9Cy0LDRhyAtLT5cbiAgICAgICAgJHtpZENvbnRlbnQgPyBgPGRpdiBjbGFzcz1cInRhYmxlX19ibG9jay1pZFwiPiR7aWRDb250ZW50fTwvZGl2PmAgOiBcIlwifVxuICAgICAgICBgO1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgYmV0cy5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2luZm8tYmV0c1wiKTtcbiAgICAgICAgICAgICAgICBiZXRzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2luZm8tYmV0cy1jb3VudGVyXCI+JHt1c2VyLmJldHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19pbmZvLWJldHMtdGV4dFwiIGRhdGEtdHJhbnNsYXRlPVwiYm9udXNCZXRzXCI+0LLQuNCz0YDQsNGI0L3RliDRgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQoYmV0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQpNGW0LvRjNGC0YDRg9GU0LzQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9GW0LIsINGJ0L7QsSDQtNC+0LTQsNGC0Lgg0ZfRhSDRg9C90ZbQutCw0LvRjNC90L5cbiAgICAgICAgbGV0IGFkZGVkVXNlcklkcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgdW5pcXVlVXNlcnMgPSB1c2Vycy5maWx0ZXIodXNlciA9PiB7XG4gICAgICAgICAgICBpZiAoIWFkZGVkVXNlcklkcy5oYXModXNlci51c2VyaWQpKSB7XG4gICAgICAgICAgICAgICAgYWRkZWRVc2VySWRzLmFkZCh1c2VyLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDRgNGP0LTQutGW0LJcbiAgICAgICAgY29uc3Qgcm93cyA9IFsxLCAyLCAzLCA0XTsgLy8g0J3QsNC70LDRiNGC0L7QstGD0ZTQvNC+IDQg0YDRj9C00LrQuFxuICAgICAgICBjb25zdCByb3dDb25maWcgPSBbXG4gICAgICAgICAgICBbeyB1c2VyOiB1bmlxdWVVc2Vyc1swXSB8fCBudWxsLCBjbGFzczogXCJfZmlyc3RcIiB9XSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IHVzZXI6IHVuaXF1ZVVzZXJzWzFdIHx8IG51bGwsIGNsYXNzOiBcIl9zZWNvbmRcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogdW5pcXVlVXNlcnNbMl0gfHwgbnVsbCwgY2xhc3M6IFwiX3NlY29uZFwiIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgeyB1c2VyOiBudWxsLCBjbGFzczogXCJcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogdW5pcXVlVXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKSB8fCBudWxsLCBjbGFzczogXCJ5b3VcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogbnVsbCwgY2xhc3M6IFwiXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IHVzZXI6IG51bGwsIGNsYXNzOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgeyB1c2VyOiBudWxsLCBjbGFzczogXCJcIiB9LFxuICAgICAgICAgICAgICAgIHsgdXNlcjogbnVsbCwgY2xhc3M6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICB7IHVzZXI6IG51bGwsIGNsYXNzOiBcIlwiIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXTtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L3QsCDQvdCw0Y/QstC90ZbRgdGC0Ywg0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LBcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJbmRleCA9IHVuaXF1ZVVzZXJzLmZpbmRJbmRleCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgbmV4dFVzZXIgPSBjdXJyZW50VXNlckluZGV4ID09PSAtMSA/IHVuaXF1ZVVzZXJzWzBdIDogdW5pcXVlVXNlcnNbY3VycmVudFVzZXJJbmRleCArIDFdO1xuXG4gICAgICAgIC8vINCv0LrRidC+INC/0L7RgtC+0YfQvdC+0LPQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINC90LXQvNCw0ZQg0ZYg0LLRltC9INC90LUg0LIg0L/QtdGA0YjRltC5INGH0LXRgtCy0ZbRgNGG0ZYsINGC0L4g0YDQtdC90LTQtdGA0LjQvNC+INC90LDRgdGC0YPQv9C90L7Qs9C+XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyUGxhY2UgPSBjdXJyZW50VXNlckluZGV4IDwgNCA/IGN1cnJlbnRVc2VySW5kZXggKyAxIDogbnVsbDsgLy8g0K/QutGJ0L4g0L/QvtGC0L7Rh9C90LjQuSDQutC+0YDQuNGB0YLRg9Cy0LDRhyDRlCDRgyDQv9C10YDRiNGW0Lkg0YfQtdGC0LLRltGA0YbRllxuICAgICAgICBjb25zdCB1c2VyVG9SZW5kZXIgPSBjdXJyZW50VXNlclBsYWNlID09PSBudWxsID8gbmV4dFVzZXIgOiBudWxsO1xuXG4gICAgICAgIC8vINCg0LXQvdC00LXRgNC40LzQviDQutC+0LbQtdC9INGA0Y/QtNC+0LpcbiAgICAgICAgcm93cy5mb3JFYWNoKChjb2x1bW5zLCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gY3JlYXRlUm93KGNvbHVtbnMpO1xuICAgICAgICAgICAgcm93Q29uZmlnW3Jvd0luZGV4XS5mb3JFYWNoKCh7IHVzZXIsIGNsYXNzOiBleHRyYUNsYXNzIH0sIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlID0gdW5pcXVlVXNlcnMuaW5kZXhPZih1c2VyKSArIDE7ICAvLyDQl9C90LDRhdC+0LTQuNC80L4g0L/QvtC30LjRhtGW0Y4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsCDQsiDRg9C90ZbQutCw0LvRjNC90L7QvNGDINGB0L/QuNGB0LrRg1xuXG4gICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LAg0L3QtdC80LAg0LIg0YLQsNCx0LvQuNGG0ZYg0ZYg0LLRltC9INC90LUg0LIg0L/QtdGA0YjRltC5INGH0LXRgtCy0ZbRgNGG0ZYsINGA0LXQvdC00LXRgNC40LzQviDQvdCw0YHRgtGD0L/QvdC+0LPQvlxuICAgICAgICAgICAgICAgIGlmICghdXNlciAmJiB1c2VyVG9SZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IHVzZXJUb1JlbmRlcjsgLy8g0K/QutGJ0L4g0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LAg0L3QtdC80LDRlCwg0YHRgtCw0LLQuNC80L4g0L3QsNGB0YLRg9C/0L3QvtCz0L5cbiAgICAgICAgICAgICAgICAgICAgcGxhY2UgPSB1bmlxdWVVc2Vycy5pbmRleE9mKHVzZXIpICsgMTsgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC80ZbRgdGG0LVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY3JlYXRlVXNlckJsb2NrKHVzZXIsIGV4dHJhQ2xhc3MsIHVzZXIgPyBwbGFjZSA6ICcnKSk7IC8vINCv0LrRidC+INC60L7RgNC40YHRgtGD0LLQsNGHINGULCDQv9C10YDQtdC00LDRlNC80L4g0LzRltGB0YbQtSwg0ZbQvdCw0LrRiNC1INC/0L7RgNC+0LbQvdGUINC30L3QsNGH0LXQvdC90Y9cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTsgLy8g0JTQvtC00LDRlNC80L4g0YDRj9C00L7QuiDQtNC+INGC0LDQsdC70LjRhtGWXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBjaGVja1N0YXR1cygpIHtcbiAgICAgICAgYmV0V2luQ291bnRlciA8IDYgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fdGFibGVcIikuY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpIDogbnVsbFxuICAgICAgICBjb25zdCBhY3RpdmVMdmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy1sdmwuX2FjdGl2ZVwiKTtcbiAgICAgICAgY29uc3QgY29uZGl0aW9ucyA9IHtcbiAgICAgICAgICAgIGJldDoge1xuICAgICAgICAgICAgICAgIDE6IGJldFdpbkNvdW50ZXIgPiAxLFxuICAgICAgICAgICAgICAgIDI6IGJldFdpbkNvdW50ZXIgPiAzLFxuICAgICAgICAgICAgICAgIDM6IGJldFdpbkNvdW50ZXIgPiA1LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGx2bDoge1xuICAgICAgICAgICAgICAgIDE6IGN1cnJlbnRMdmwgPT09IDEsXG4gICAgICAgICAgICAgICAgMjogY3VycmVudEx2bCA9PT0gMixcbiAgICAgICAgICAgICAgICAzOiBjdXJyZW50THZsID09PSAzLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIGdldEJ0bi5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIik7XG4gICAgICAgIGlmIChjb25kaXRpb25zLmJldFtjdXJyZW50THZsXSAmJiBjb25kaXRpb25zLmx2bFtjdXJyZW50THZsXSkge1xuICAgICAgICAgICAgbHZsU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKTtcbiAgICAgICAgICAgIGdldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvY2tcIik7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVMdmwpIGFjdGl2ZUx2bC5jbGFzc0xpc3QuYWRkKFwiX3VwXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gbHZsU3RhdHVzO1xuICAgICAgICB9XG4gICAgICAgIGx2bFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICByZWZyZXNoTHZsKGN1cnJlbnRMdmwsIGx2bFN0YXR1cylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKXtcbiAgICAgICAgaWYodXNlcklkID09PSBudWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzc1wiKS5zdHlsZS5tYXJnaW4gPSBcIjBcIlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fcHJvZ3Jlc3Mtd3JhcFwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldmVscy5mb3JFYWNoKChsdmwsIGkpID0+e1xuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl9kb25lXCIpXG4gICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl92b2lkXCIpXG4gICAgICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl91cFwiKVxuICAgICAgICAgICAgaWYoKytpID09PSBjdXJyZW50THZsKSB7XG4gICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG5cbiAgICAgICAgICAgICAgICBpZiAobHZsU3RhdHVzID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdXBcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMSAmJiBiZXRXaW5Db3VudGVyIDw9IDAgJiYgbHZsU3RhdHVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QuYWRkKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA9PT0gMSAmJiBiZXRXaW5Db3VudGVyIDw9IDAgJiYgbHZsU3RhdHVzID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDIgJiYgYmV0V2luQ291bnRlciA8PSAyICYmIGx2bFN0YXR1cyA9PT0gZmFsc2UgKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50THZsID09PSAyICYmIGJldFdpbkNvdW50ZXIgPD0gMiAmJiBsdmxTdGF0dXMgPT09IHRydWUgKXtcbiAgICAgICAgICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfdm9pZFwiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDMgJiYgYmV0V2luQ291bnRlciA8PSA0ICYmIGx2bFN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBsdmwuY2xhc3NMaXN0LmFkZChcIl92b2lkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMdmwgPT09IDMgJiYgYmV0V2luQ291bnRlciA8PSA0ICYmIGx2bFN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX3ZvaWRcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSA8IGN1cnJlbnRMdmwsIGkgLCBjdXJyZW50THZsLCBsdmwpXG4gICAgICAgICAgICBpIDwgY3VycmVudEx2bCA/IGx2bC5jbGFzc0xpc3QuYWRkKFwiX2RvbmVcIikgOiBudWxsXG4gICAgICAgICAgICBsZXZlbEJvdHRvbVRleHQuZm9yRWFjaCgoaXRlbSwgaSkgPT57XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEx2bCA8PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpID09PSBjdXJyZW50THZsIC0gMSl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpIHtcbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIiwgXCJfbGVmdFwiLCBcIl9yaWdodFwiLCBcIl9sb2NrXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYoIXVzZXJJZCl7XG4gICAgICAgIC8vICAgICBjYXNlcy5mb3JFYWNoKChib3gsIGkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBhY3RpdmVJbmRleCA9IGN1cnJlbnRMdmwgLSAxO1xuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPj0gY2FzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IGNhc2VzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJldkluZGV4ID0gYWN0aXZlSW5kZXggLSAxIDwgMCA/IGNhc2VzLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCArIDEgPj0gY2FzZXMubGVuZ3RoID8gMCA6IGFjdGl2ZUluZGV4ICsgMTtcblxuICAgICAgICBjYXNlc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIik7XG4gICAgICAgIGNhc2VzW3ByZXZJbmRleF0uY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpO1xuICAgICAgICBjYXNlc1tuZXh0SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJfcmlnaHRcIik7XG5cbiAgICAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiBsdmxVcCgpe1xuICAgICAgICBjdXJyZW50THZsID0gY3VycmVudEx2bCArIDFcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgYCR7Y3VycmVudEx2bH1gKVxuICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgIHJldHVybiBsdmxTdGF0dXNcbiAgICB9XG5cbiAgICAvLyBjaGVja1N0YXR1cygpXG5cblxuXG4vLyBjb25zb2xlLmxvZyhpZEFycilcblxuICAgIGZ1bmN0aW9uIGNoZWNrUGxhY2VMZW5ndGgoKXtcbiAgICAgICAgY29uc3QgdXNlclBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55b3VcIiksXG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZSA9IHVzZXJQbGFjZS5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19ibG9jay1wbGFjZVwiKTtcblxuICAgICAgICBsZXQgaWRBcnIgPSB1c2VyVGFibGVQbGFjZS50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX29uZScpXG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRBcnIubGVuZ3RoID09PSAyKXtcbiAgICAgICAgICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ190d28nKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gMyl7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfdGhyZWUnKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkQXJyLmxlbmd0aCA9PT0gNCl7XG4gICAgICAgICAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfZm91cicpXG4gICAgICAgIH1cblxuICAgICAgICBpZihpZEFyci5sZW5ndGggPT09IDUpe1xuICAgICAgICAgICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX2ZpdmUnKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIG9wZW5DYXNlQW5pbShib3gpe1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpXG4gICAgICAgIGJveC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fY2FwXCIpLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpXG4gICAgICAgIGdldEJ0bi5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGJveC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fY2FwLWZyb250XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIH0sIDMwMClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX3Nob3dcIilcbiAgICAgICAgfSwgMTUwKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgbHZsVXAoKVxuICAgICAgICAgICAgcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpXG4gICAgICAgICAgICBjaGVja1N0YXR1cygpXG4gICAgICAgIH0sIDQwMDApXG4gICAgfVxuXG5cblxuXG4gICAgZ2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIGNhc2VzLmZvckVhY2goKGJveCwgaSkgPT57XG4gICAgICAgICAgICBpZihib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2FjdGl2ZVwiKSl7XG4gICAgICAgICAgICAgICAgb3BlbkNhc2VBbmltKGJveClcbiAgICAgICAgICAgICAgICAvLyBnZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgICAgICAgICAgLy8gY2hlY2tTdGF0dXMoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9KVxuXG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cChidG5PcGVuLCBidG5DbG9zZSwgcG9wdXAsIGhpZGUpe1xuICAgICAgICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICBpZihoaWRlKXtcbiAgICAgICAgICAgICAgICBidG5PcGVuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcIl9wb3B1cFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZihidG5DbG9zZSl7XG4gICAgICAgICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgYnRuT3Blbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIC8vIGlmKGhpZGUpe1xuICAgICAgICAgICAgICAgIC8vICAgICBidG5PcGVuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcIi5fcG9wdXBcIilcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgICAgICBpZighcG9wdXAuY29udGFpbnMoZS50YXJnZXQpICYmIGUudGFyZ2V0ICE9PSBidG5PcGVuKXtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgaWYoaGlkZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5PcGVuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0UG9wdXAocHJvZ3Jlc3NQb3B1cEJ0biwgcHJvZ3Jlc3NQb3B1cENsb3NlLCBwcm9ncmVzc1BvcHVwKVxuICAgIHNldFBvcHVwKHVwZFBvcHVwQnRuLCB1cGRQb3B1cENsb3NlLCB1cGRQb3B1cCwgdHJ1ZSlcbiAgICBzZXRQb3B1cChyZXN1bHRQb3B1cEJ0biwgcmVzdWx0UG9wdXBCdG5DbG9zZSwgcmVzdWx0UG9wdXAsIHRydWUpXG5cbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bihlbmRUaW1lKSB7XG4gICAgICAgIGNvbnN0IGhvdXJzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aW1lcl9faG91cnMtaXRlbVwiKTtcbiAgICAgICAgY29uc3QgbWludXRlc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX21pbnV0ZXMtaXRlbVwiKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX3NlY29uZHMtaXRlbVwiKTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgdGltZUxlZnQgPSBlbmRUaW1lIC0gbm93O1xuXG4gICAgICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCBcIjAwXCIpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhtaW51dGVzRWxzLCBcIjAwXCIpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhzZWNvbmRzRWxzLCBcIjAwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCkpICUgNjApO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gMTAwMCkgJSA2MCk7XG5cbiAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhob3Vyc0VscywgU3RyaW5nKGhvdXJzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgICAgICAgICAgdXBkYXRlRGlnaXRzKG1pbnV0ZXNFbHMsIFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgICAgICAgICAgdXBkYXRlRGlnaXRzKHNlY29uZHNFbHMsIFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGlnaXRzKGVsZW1lbnRzLCB2YWx1ZSkge1xuICAgICAgICAgICAgZWxlbWVudHNbMF0udGV4dENvbnRlbnQgPSB2YWx1ZVswXTtcbiAgICAgICAgICAgIGVsZW1lbnRzWzFdLnRleHRDb250ZW50ID0gdmFsdWVbMV07XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUaW1lcigpO1xuICAgICAgICBjb25zdCB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZW5kT2ZEYXkgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCksIDIzLCA1OSwgNTkpLmdldFRpbWUoKTtcblxuICAgIHN0YXJ0Q291bnRkb3duKGVuZE9mRGF5KTtcblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWx2bFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLW1lbnVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuICAgIH0pXG5cbiAgICBjb25zdCBsdmwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtMVwiKVxuICAgIGNvbnN0IGx2bDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC0yXCIpXG4gICAgY29uc3QgbHZsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLTNcIilcbiAgICBjb25zdCBsdmxVcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLXVwXCIpXG4gICAgY29uc3QgYmV0V2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZXQtd2luXCIpXG4gICAgY29uc3QgYmV0Q2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJldC1jbGVhclwiKVxuICAgIGNvbnN0IGJ0bkxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1sb2NrXCIpXG4gICAgY29uc3QgZGFya0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIilcbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgYmV0V2luLnRleHRDb250ZW50ID0gYHdpbiBiZXQ6ICR7YmV0V2luQ291bnRlcn1gXG5cbiAgICBiZXRXaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBiZXRXaW5Db3VudGVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldFdpbkNvdW50ZXJcIikpIDogMFxuICAgICAgICBiZXRXaW5Db3VudGVyID0gYmV0V2luQ291bnRlciArIDFcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJldFdpbkNvdW50ZXJcIiwgYmV0V2luQ291bnRlcilcbiAgICAgICAgYmV0V2luLnRleHRDb250ZW50ID0gYHdpbiBiZXQ6ICR7YmV0V2luQ291bnRlcn1gXG4gICAgICAgIC8vIHJlZnJlc2hMdmwoY3VycmVudEx2bClcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuXG5cbiAgICB9KVxuXG4gICAgYmV0Q2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmV0V2luQ291bnRlclwiKVxuICAgICAgICBiZXRXaW5Db3VudGVyID0gMFxuICAgICAgICBiZXRXaW4udGV4dENvbnRlbnQgPSBgd2luIGJldDogMGBcbiAgICAgICAgY2hlY2tTdGF0dXMoKVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjFcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIC8vIHJlZnJlc2hMdmwoY3VycmVudEx2bCwgbHZsU3RhdHVzKVxuXG4gICAgfSlcblxuICAgIGx2bDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudEx2bFwiLCBcIjFcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcbiAgICBsdmwyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIyXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG4gICAgbHZsMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIFwiM1wiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuXG4gICAgbHZsVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBsdmxTdGF0dXMgPSAhbHZsU3RhdHVzXG4gICAgICAgIGNoZWNrU3RhdHVzKClcbiAgICAgICAgbHZsU3RhdHVzID0gIWx2bFN0YXR1c1xuXG4gICAgfSlcblxuICAgIGJ0bkxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdF9fdGFibGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcIl9sb2NrXCIpXG4gICAgfSlcblxuICAgIGRhcmtCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgfSlcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgJzEwMDg1Njg4OCcpXG4gICAgICAgIH1cbiAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duXCIpOyAvLyDQkdCw0YLRjNC60ZbQstGB0YzQutC40LkgZGV0YWlsc1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wLXR4dFwiKTtcblxuICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcihcInRvZ2dsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkZXRhaWxzLm9wZW4pIHsgLy8g0KHQv9GA0LDRhtGM0L7QstGD0ZQg0YLRltC70YzQutC4INC/0YDQuCDQstGW0LTQutGA0LjRgtGC0ZZcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBkcm9wZG93bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INC00YDQvtC/0LTQsNGD0L0g0LLQuNGF0L7QtNC40YLRjCDQt9CwINC80LXQttGWINC10LrRgNCw0L3RgyDQstC90LjQt1xuICAgICAgICAgICAgICAgIGlmIChyZWN0LmJvdHRvbSA+IHZpZXdwb3J0SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHJlY3QuYm90dG9tIC0gdmlld3BvcnRIZWlnaHQgKyA4MCwgLy8gMTBweCDigJQg0LfQsNC/0LDRgVxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LTRgNC+0L/QtNCw0YPQvSDQstC40YXQvtC00LjRgtGMINC30LAg0LLQtdGA0YXQvdGOINC80LXQttGDINC10LrRgNCw0L3Rg1xuICAgICAgICAgICAgICAgIGlmIChyZWN0LnRvcCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcmVjdC50b3AgLSA4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy8gY29uc3QgZHJvcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duXCIpO1xuICAgIC8vXG4gICAgLy8gZHJvcHMuZm9yRWFjaChkcm9wID0+IHtcbiAgICAvLyAgICAgZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBpc0lPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW07XG4gICAgLy8gICAgICAgICBjb25zdCBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkfGNyaW9zfGZ4aW9zKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnN0IGlzTW9iaWxlU2FmYXJpID0gaXNJT1MgJiYgaXNTYWZhcmk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmICghaXNNb2JpbGVTYWZhcmkpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyDQkdC70L7QutGD0ZTQvNC+INC/0YDQvtC60YDRg9GC0LrRgyDRgdGC0L7RgNGW0L3QutC4INCx0LXQtyDQtNC10YDQs9Cw0L3QvdGPXG4gICAgLy8gICAgICAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBgLSR7c2Nyb2xsWX1weGA7XG4gICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0LrQvtGA0LXQutGG0ZbRjiDQtNC70Y8g0YjQuNGA0LjQvdC4LCDRidC+0LEg0YPQvdC40LrQvdGD0YLQuCDRgdGC0YDQuNCx0LrRltCyINGB0YLQvtGA0ZbQvdC60LhcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIC8vICAgICAgICAgICAgIGlmIChzY3JvbGxiYXJXaWR0aCA+IDApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkU2Nyb2xsWSA9IE1hdGguYWJzKHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCkpO1xuICAgIC8vICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICAvLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBcIlwiO1xuICAgIC8vICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gXCJcIjtcbiAgICAvLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzYXZlZFNjcm9sbFkpO1xuICAgIC8vICAgICAgICAgICAgIH0sIDApO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAvLyDQlNC70Y8gaU9TINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gYWx0ZXJuYXRpdmUg0YHQv9C+0YHRltCxXG4gICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGRyb3Auc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJuZWFyZXN0XCIsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgIC8vICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGRyb3AuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxufSkoKVxuXG4iXX0=
