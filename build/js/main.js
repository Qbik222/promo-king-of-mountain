"use strict";

var userPlace = document.querySelector(".you"),
  userTablePlace = userPlace.querySelector(".table__block-place"),
  cases = document.querySelectorAll(".bonus__boxes-item"),
  getBtn = document.querySelector(".get-btn"),
  levels = document.querySelectorAll(".bonus__progress-lvl"),
  progressPopup = document.querySelector(".bonus__progress-popup"),
  progressPopupBtn = document.querySelector(".bonus__progress-title-btn"),
  progressPopupClose = document.querySelector(".bonus__progress-popup-close"),
  updPopup = document.querySelector(".bonus__upd-popup"),
  updPopupBtn = document.querySelector(".bonus__upd-btn"),
  updPopupClose = document.querySelector(".bonus__upd-popup-close");
var currentLvl = sessionStorage.getItem("currentLvl") ? Number(sessionStorage.getItem("currentLvl")) : 1;
var lvlStatus = false;
function refreshLvl(currentLvl) {
  levels.forEach(function (lvl, i) {
    lvl.classList.remove("_active");
    lvl.classList.remove("_done");
    if (++i === currentLvl) {
      lvl.classList.add("_active");
    } else {
      lvl.classList.remove("_active");
    }
    console.log(i < currentLvl, i, currentLvl, lvl);
    i < currentLvl ? lvl.classList.add("_done") : null;
  });
}

// function refreshCases(currentLvl) {
//     cases.forEach((box, i) => {
//         box.classList.remove("_active", "_left", "_right")
//         if (++i === currentLvl) {
//             box.classList.add("_active");
//         } else {
//             box.classList.remove("_active");
//         }
//
//
//         i !== currentLvl ? box.classList.add("_lock") : box.classList.remove("_lock");
//
//         currentLvl > cases.length ? cases[cases.length - 1].classList.remove("_lock") : null;
//         currentLvl > cases.length ? cases[cases.length - 1].classList.add("_active") : null;
//     });
//
// }

function refreshCases(currentLvl) {
  cases.forEach(function (box, i) {
    box.classList.remove("_active", "_left", "_right", "_lock");
  });
  var activeIndex = currentLvl - 1; // Перетворюємо рівень у індекс масиву
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
refreshCases(currentLvl);
refreshLvl(currentLvl);
function lvlUp() {
  currentLvl = currentLvl + 1;
  sessionStorage.setItem("currentLvl", "".concat(currentLvl));
  refreshLvl(currentLvl);
}
function checkStatus() {
  if (lvlStatus) {
    getBtn.classList.remove("_lock");
    document.querySelector(".bonus__progress-lvl._active").classList.add("_up");
  }
}
checkStatus();
// getBtn.addEventListener("click", () =>{
//     if(lvlStatus){
//         lvlUp()
//     }
// })

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
  setTimeout(function () {
    box.querySelector(".box__cap-front").classList.add("hide");
  }, 300);
  setTimeout(function () {
    box.classList.add("_show");
  }, 450);
  setTimeout(function () {
    lvlUp();
    refreshCases(currentLvl);
  }, 2000);
}
getBtn.addEventListener('click', function () {
  cases.forEach(function (box, i) {
    if (box.classList.contains("_active")) {
      openCaseAnim(box);
      getBtn.classList.add("_lock");
    }
  });
});
function setPopup(btnOpen, btnClose, popup) {
  btnOpen.addEventListener("click", function () {
    popup.classList.remove("hide");
  });
  btnClose.addEventListener("click", function () {
    popup.classList.add("hide");
  });
  document.addEventListener("click", function (e) {
    if (!popup.contains(e.target) && e.target !== btnOpen) {
      popup.classList.add("hide");
    }
  });
}
setPopup(progressPopupBtn, progressPopupClose, progressPopup);
setPopup(updPopupBtn, updPopupClose, updPopup);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidXNlclBsYWNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidXNlclRhYmxlUGxhY2UiLCJjYXNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRCdG4iLCJsZXZlbHMiLCJwcm9ncmVzc1BvcHVwIiwicHJvZ3Jlc3NQb3B1cEJ0biIsInByb2dyZXNzUG9wdXBDbG9zZSIsInVwZFBvcHVwIiwidXBkUG9wdXBCdG4iLCJ1cGRQb3B1cENsb3NlIiwiY3VycmVudEx2bCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIk51bWJlciIsImx2bFN0YXR1cyIsInJlZnJlc2hMdmwiLCJmb3JFYWNoIiwibHZsIiwiaSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoQ2FzZXMiLCJib3giLCJhY3RpdmVJbmRleCIsImxlbmd0aCIsInByZXZJbmRleCIsIm5leHRJbmRleCIsImx2bFVwIiwic2V0SXRlbSIsImNoZWNrU3RhdHVzIiwiaWRBcnIiLCJ0ZXh0Q29udGVudCIsInNwbGl0Iiwib3BlbkNhc2VBbmltIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsInNldFBvcHVwIiwiYnRuT3BlbiIsImJ0bkNsb3NlIiwicG9wdXAiLCJlIiwidGFyZ2V0Iiwic3RhcnRDb3VudGRvd24iLCJlbmRUaW1lIiwiaG91cnNFbHMiLCJtaW51dGVzRWxzIiwic2Vjb25kc0VscyIsInVwZGF0ZVRpbWVyIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lTGVmdCIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lckludGVydmFsIiwidXBkYXRlRGlnaXRzIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsIlN0cmluZyIsInBhZFN0YXJ0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInNldEludGVydmFsIiwiZW5kT2ZEYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInRvZ2dsZSIsImx2bDEiLCJsdmwyIiwibHZsMyIsImx2bFVwQnRuIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDMUNDLGNBQWMsR0FBR0gsU0FBUyxDQUFDRSxhQUFhLENBQUMscUJBQXFCLENBQUM7RUFDL0RFLEtBQUssR0FBR0gsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztFQUN2REMsTUFBTSxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7RUFDM0NLLE1BQU0sR0FBR04sUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztFQUMxREcsYUFBYSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztFQUNoRU8sZ0JBQWdCLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0VBQ3ZFUSxrQkFBa0IsR0FBR1QsUUFBUSxDQUFDQyxhQUFhLENBQUMsOEJBQThCLENBQUM7RUFDM0VTLFFBQVEsR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDdERVLFdBQVcsR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFDdkRXLGFBQWEsR0FBR1osUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFFdkUsSUFBSVksVUFBVSxHQUFHQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBR0MsTUFBTSxDQUFDRixjQUFjLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFFeEcsSUFBSUUsU0FBUyxHQUFHLEtBQUs7QUFFckIsU0FBU0MsVUFBVSxDQUFDTCxVQUFVLEVBQUM7RUFDM0JQLE1BQU0sQ0FBQ2EsT0FBTyxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsQ0FB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TUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sRUFBRTtBQUM1QixDQUFDLENBQUM7QUFFRkgsUUFBUSxDQUFDdkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7RUFDcEN4QixTQUFTLEdBQUcsQ0FBQ0EsU0FBUztFQUN0QmtCLFdBQVcsRUFBRTtFQUNibEIsU0FBUyxHQUFHLENBQUNBLFNBQVM7QUFFMUIsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1c2VyUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnlvdVwiKSxcbiAgICAgIHVzZXJUYWJsZVBsYWNlID0gdXNlclBsYWNlLnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2Jsb2NrLXBsYWNlXCIpLFxuICAgICAgY2FzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvbnVzX19ib3hlcy1pdGVtXCIpLFxuICAgICAgZ2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZXQtYnRuXCIpLFxuICAgICAgbGV2ZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib251c19fcHJvZ3Jlc3MtbHZsXCIpLFxuICAgICAgcHJvZ3Jlc3NQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXBvcHVwXCIpLFxuICAgICAgcHJvZ3Jlc3NQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXRpdGxlLWJ0blwiKSxcbiAgICAgIHByb2dyZXNzUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3Byb2dyZXNzLXBvcHVwLWNsb3NlXCIpLFxuICAgICAgdXBkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX191cGQtcG9wdXBcIiksXG4gICAgICB1cGRQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9udXNfX3VwZC1idG5cIiksXG4gICAgICB1cGRQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib251c19fdXBkLXBvcHVwLWNsb3NlXCIpO1xuXG5sZXQgY3VycmVudEx2bCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50THZsXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50THZsXCIpKSA6IDFcblxubGV0IGx2bFN0YXR1cyA9IGZhbHNlXG5cbmZ1bmN0aW9uIHJlZnJlc2hMdmwoY3VycmVudEx2bCl7XG4gICAgbGV2ZWxzLmZvckVhY2goKGx2bCwgaSkgPT57XG4gICAgICAgIGx2bC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICBsdmwuY2xhc3NMaXN0LnJlbW92ZShcIl9kb25lXCIpXG4gICAgICAgIGlmKCsraSA9PT0gY3VycmVudEx2bCkge1xuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbHZsLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coaSA8IGN1cnJlbnRMdmwsIGkgLCBjdXJyZW50THZsLCBsdmwpXG4gICAgICAgIGkgPCBjdXJyZW50THZsID8gbHZsLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKSA6IG51bGxcbiAgICB9KVxuXG59XG5cbi8vIGZ1bmN0aW9uIHJlZnJlc2hDYXNlcyhjdXJyZW50THZsKSB7XG4vLyAgICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4vLyAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiLCBcIl9sZWZ0XCIsIFwiX3JpZ2h0XCIpXG4vLyAgICAgICAgIGlmICgrK2kgPT09IGN1cnJlbnRMdmwpIHtcbi8vICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKTtcbi8vICAgICAgICAgfVxuLy9cbi8vXG4vLyAgICAgICAgIGkgIT09IGN1cnJlbnRMdmwgPyBib3guY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpIDogYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcbi8vXG4vLyAgICAgICAgIGN1cnJlbnRMdmwgPiBjYXNlcy5sZW5ndGggPyBjYXNlc1tjYXNlcy5sZW5ndGggLSAxXS5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvY2tcIikgOiBudWxsO1xuLy8gICAgICAgICBjdXJyZW50THZsID4gY2FzZXMubGVuZ3RoID8gY2FzZXNbY2FzZXMubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIikgOiBudWxsO1xuLy8gICAgIH0pO1xuLy9cbi8vIH1cblxuXG5mdW5jdGlvbiByZWZyZXNoQ2FzZXMoY3VycmVudEx2bCkge1xuICAgIGNhc2VzLmZvckVhY2goKGJveCwgaSkgPT4ge1xuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIiwgXCJfbGVmdFwiLCBcIl9yaWdodFwiLCBcIl9sb2NrXCIpO1xuICAgIH0pO1xuXG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gY3VycmVudEx2bCAtIDE7IC8vINCf0LXRgNC10YLQstC+0YDRjtGU0LzQviDRgNGW0LLQtdC90Ywg0YMg0ZbQvdC00LXQutGBINC80LDRgdC40LLRg1xuICAgIGlmIChhY3RpdmVJbmRleCA+PSBjYXNlcy5sZW5ndGgpIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPSBjYXNlcy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGxldCBwcmV2SW5kZXggPSBhY3RpdmVJbmRleCAtIDEgPCAwID8gY2FzZXMubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMTtcbiAgICBsZXQgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggKyAxID49IGNhc2VzLmxlbmd0aCA/IDAgOiBhY3RpdmVJbmRleCArIDE7XG5cbiAgICBjYXNlc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIik7XG4gICAgY2FzZXNbcHJldkluZGV4XS5jbGFzc0xpc3QuYWRkKFwiX2xlZnRcIik7XG4gICAgY2FzZXNbbmV4dEluZGV4XS5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpO1xuXG4gICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICAgIGlmIChpICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbnJlZnJlc2hDYXNlcyhjdXJyZW50THZsKVxucmVmcmVzaEx2bChjdXJyZW50THZsKVxuXG5mdW5jdGlvbiBsdmxVcCgpe1xuICAgIGN1cnJlbnRMdmwgPSBjdXJyZW50THZsICsgMVxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50THZsXCIsIGAke2N1cnJlbnRMdmx9YClcbiAgICByZWZyZXNoTHZsKGN1cnJlbnRMdmwpXG59XG5cbmZ1bmN0aW9uIGNoZWNrU3RhdHVzKCl7XG4gICAgaWYobHZsU3RhdHVzKXtcbiAgICAgICAgZ2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvbnVzX19wcm9ncmVzcy1sdmwuX2FjdGl2ZVwiKS5jbGFzc0xpc3QuYWRkKFwiX3VwXCIpXG4gICAgfVxufVxuY2hlY2tTdGF0dXMoKVxuLy8gZ2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9Pntcbi8vICAgICBpZihsdmxTdGF0dXMpe1xuLy8gICAgICAgICBsdmxVcCgpXG4vLyAgICAgfVxuLy8gfSlcblxubGV0IGlkQXJyID0gdXNlclRhYmxlUGxhY2UudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcblxuLy8gY29uc29sZS5sb2coaWRBcnIpXG5cbmlmKGlkQXJyLmxlbmd0aCA9PT0gMSl7XG4gICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX29uZScpXG59XG5pZihpZEFyci5sZW5ndGggPT09IDIpe1xuICAgIHVzZXJUYWJsZVBsYWNlLmNsYXNzTGlzdC5hZGQoJ190d28nKVxufVxuaWYoaWRBcnIubGVuZ3RoID09PSAzKXtcbiAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfdGhyZWUnKVxufVxuaWYoaWRBcnIubGVuZ3RoID09PSA0KXtcbiAgICB1c2VyVGFibGVQbGFjZS5jbGFzc0xpc3QuYWRkKCdfZm91cicpXG59XG5cbmlmKGlkQXJyLmxlbmd0aCA9PT0gNSl7XG4gICAgdXNlclRhYmxlUGxhY2UuY2xhc3NMaXN0LmFkZCgnX2ZpdmUnKVxufVxuXG5mdW5jdGlvbiBvcGVuQ2FzZUFuaW0oYm94KXtcbiAgICBib3guY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpXG4gICAgYm94LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19jYXBcIikuY2xhc3NMaXN0LmFkZChcIm9wZW5cIilcbiAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICBib3gucXVlcnlTZWxlY3RvcihcIi5ib3hfX2NhcC1mcm9udFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIH0sIDMwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9zaG93XCIpXG4gICAgfSwgNDUwKVxuICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIGx2bFVwKClcbiAgICAgICAgcmVmcmVzaENhc2VzKGN1cnJlbnRMdmwpXG4gICAgfSwgMjAwMClcbn1cblxuXG5cblxuZ2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgY2FzZXMuZm9yRWFjaCgoYm94LCBpKSA9PntcbiAgICAgICAgaWYoYm94LmNsYXNzTGlzdC5jb250YWlucyhcIl9hY3RpdmVcIikpe1xuICAgICAgICAgICAgb3BlbkNhc2VBbmltKGJveClcbiAgICAgICAgICAgIGdldEJ0bi5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIilcbiAgICAgICAgfVxuXG4gICAgfSlcblxufSlcblxuXG5mdW5jdGlvbiBzZXRQb3B1cChidG5PcGVuLCBidG5DbG9zZSwgcG9wdXApe1xuICAgIGJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgIH0pXG4gICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgaWYoIXBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPT0gYnRuT3Blbil7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuc2V0UG9wdXAocHJvZ3Jlc3NQb3B1cEJ0biwgcHJvZ3Jlc3NQb3B1cENsb3NlLCBwcm9ncmVzc1BvcHVwKVxuc2V0UG9wdXAodXBkUG9wdXBCdG4sIHVwZFBvcHVwQ2xvc2UsIHVwZFBvcHVwKVxuXG5mdW5jdGlvbiBzdGFydENvdW50ZG93bihlbmRUaW1lKSB7XG4gICAgY29uc3QgaG91cnNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyX19ob3Vycy1pdGVtXCIpO1xuICAgIGNvbnN0IG1pbnV0ZXNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVyX19taW51dGVzLWl0ZW1cIik7XG4gICAgY29uc3Qgc2Vjb25kc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZXJfX3NlY29uZHMtaXRlbVwiKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgdGltZUxlZnQgPSBlbmRUaW1lIC0gbm93O1xuXG4gICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xuICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCBcIjAwXCIpO1xuICAgICAgICAgICAgdXBkYXRlRGlnaXRzKG1pbnV0ZXNFbHMsIFwiMDBcIik7XG4gICAgICAgICAgICB1cGRhdGVEaWdpdHMoc2Vjb25kc0VscywgXCIwMFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCkpICUgNjApO1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAxMDAwKSAlIDYwKTtcblxuICAgICAgICB1cGRhdGVEaWdpdHMoaG91cnNFbHMsIFN0cmluZyhob3VycykucGFkU3RhcnQoMiwgXCIwXCIpKTtcbiAgICAgICAgdXBkYXRlRGlnaXRzKG1pbnV0ZXNFbHMsIFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCBcIjBcIikpO1xuICAgICAgICB1cGRhdGVEaWdpdHMoc2Vjb25kc0VscywgU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsIFwiMFwiKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGlnaXRzKGVsZW1lbnRzLCB2YWx1ZSkge1xuICAgICAgICBlbGVtZW50c1swXS50ZXh0Q29udGVudCA9IHZhbHVlWzBdO1xuICAgICAgICBlbGVtZW50c1sxXS50ZXh0Q29udGVudCA9IHZhbHVlWzFdO1xuICAgIH1cblxuICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgY29uc3QgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcbn1cblxuY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbmNvbnN0IGVuZE9mRGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpLCAyMywgNTksIDU5KS5nZXRUaW1lKCk7XG5cbnN0YXJ0Q291bnRkb3duKGVuZE9mRGF5KTtcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG59KVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbHZsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC1tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcbn0pXG5cbmNvbnN0IGx2bDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2bC0xXCIpXG5jb25zdCBsdmwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtMlwiKVxuY29uc3QgbHZsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHZsLTNcIilcbmNvbnN0IGx2bFVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sdmwtdXBcIilcblxubHZsMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIxXCIpXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG59KVxubHZsMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIyXCIpXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG59KVxubHZsMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMdmxcIiwgXCIzXCIpXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG59KVxuXG5sdmxVcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgbHZsU3RhdHVzID0gIWx2bFN0YXR1c1xuICAgIGNoZWNrU3RhdHVzKClcbiAgICBsdmxTdGF0dXMgPSAhbHZsU3RhdHVzXG5cbn0pXG5cbiJdfQ==
