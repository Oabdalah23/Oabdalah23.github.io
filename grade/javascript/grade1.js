var config = {
  apiKey: "AIzaSyCSY_guUTymv77PDeCi9A8K11bmAystFX8",
  authDomain: "kidkalc.firebaseapp.com",
  databaseURL: "https://kidkalc.firebaseio.com",
  projectId: "kidkalc",
  storageBucket: "kidkalc.appspot.com",
  messagingSenderId: "363718905093",
  appId: "1:363718905093:web:72636a6498d6d86a00fb6c",
  measurementId: "G-NNTSP3W22H"
};
firebase.initializeApp(config);

var myFBref = new Firebase("https://kidkalc.firebaseio.com/");

var useruid;
var username;
var Grade1 = {};
var TotalCoins = {};
var ref;
var notenter = 0;
//var timeramount = 0;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    username = user;
    useruid = user.uid;
    database = firebase.database();
    ref = database.ref('stats/'+useruid);
    ref.on('value', gotData)
  } else {
    username = "NotSignedIn"
    setTimeout(loaderout, 1000);
  }
});

function gotData(data) {
  var stats = data.val();
  if (stats == undefined)
  {
    loaderout();
  }
  var keys = Object.keys(stats);
  for (var i = 0; i < keys.length; i++)
  {
    var k = keys[i];
    var scorefirebase = stats[k].Grade1Score;
    var totalfirebase = stats[k].Grade1Total;
    var coinfirebase = stats[k].CoinsFirebase;
    if (totalfirebase != undefined) {
      localStorage.setItem("savedtotal1", JSON.stringify(totalfirebase));
      total = totalfirebase;
      document.getElementById("totalq").innerHTML = totalfirebase;
    }
    if (coinfirebase != undefined){
      localStorage.setItem("savedcoin", JSON.stringify(coinfirebase));
    }
    if (scorefirebase != undefined){
      localStorage.setItem("savedscore1", JSON.stringify(scorefirebase));
      score = scorefirebase;
      document.getElementById("scoreq").innerHTML = scorefirebase;
    }
  }
  loaderout();
  //timer();
}

$(document).ready(function () {
  var isshow = localStorage.getItem("isshowg1");
  if (isshow == null) {
    localStorage.setItem("isshowg1", 1);

    // Show popup here
    $("#myModal").modal("show");
  }
});

function help() {
  $("#myModal").modal("show");
}

var score = 0;
var coins = 0;
var total = 1;
var d;

if (JSON.parse(localStorage.getItem("savedscore1")) > 0) {
  score = JSON.parse(localStorage.getItem("savedscore1"));
  document.getElementById("scoreq").innerHTML = score;
} else {
  score = 0;
}

if (JSON.parse(localStorage.getItem("savedtotal1")) > 0) {
  total = JSON.parse(localStorage.getItem("savedtotal1"));
  document.getElementById("totalq").innerHTML = total;
} else {
  total = 1;
}

operations = ["+", "-"];
operation = operations[Math.floor(Math.random() * operations.length)];
if (operation == "+") {
  num1 = 500;
  num2 = 500;
  accans = num1 + num2;
  while (accans > 70) {
    num1 = Math.floor(Math.random() * 70 + 1);
    num2 = Math.floor(Math.random() * 70 + 1);
    accans = num1 + num2;
    if (accans < 29) {
      d = 1;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #57c95a";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #57c95a";
      }
    } else if (accans < 48) {
      d = 2;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ffcc66";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ffcc66";
      }
    } else if (accans < 71) {
      d = 3;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ff5e5e";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ff5e5e";
      }
    }
  }
  document.getElementById("question").innerHTML = num1 + " + " + num2;
} else if (operation == "-") {
  num1 = Math.floor(Math.random() * 50 + 1);
  num2 = Math.floor(Math.random() * 50 + 1);
  if (num1 > num2) {
    document.getElementById("question").innerHTML = num1 + " - " + num2;
    accans = num1 - num2;
    if (accans < 29) {
      d = 1;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #57c95a";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #57c95a";
      }
    } else if (accans < 48) {
      d = 2;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ffcc66";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ffcc66";
      }
    } else if (accans < 71) {
      d = 3;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ff5e5e";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ff5e5e";
      }
    }
  } else {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    document.getElementById("question").innerHTML = num1 + " - " + num2;
    accans = num1 - num2;
    if (accans < 29) {
      d = 1;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #57c95a";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #57c95a";
      }
    } else if (accans < 48) {
      d = 2;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ffcc66";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ffcc66";
      }
    } else if (accans < 71) {
      d = 3;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ff5e5e";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ff5e5e";
      }
    }
  }
}

function newquestion() {
  //timeramount = 1;
  //timer();
  notenter = notenter - 1;
  localStorage.setItem("savedtotal1", JSON.stringify(total));
  localStorage.setItem("savedscore1", JSON.stringify(score));
  document.getElementById("textbox").style.color = "white";
  document.getElementById("textbox").style.textShadow = "0.3vw 0.3vw #0095ff";
  document.getElementById("textbox").readOnly = false;
  if (username != "NotSignedIn") {
    Grade1.Grade1Score = score;
    Grade1.Grade1Total = total;
    myFBref.child('stats/'+useruid).update({
      Grade1
    })
  }
  if (username != "NotSignedIn") {
    TotalCoins.CoinsFirebase = coins;
    myFBref.child('stats/'+useruid).update({
      TotalCoins
    })
  }

  function setCaretPosition(ctrl, pos) {
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);
    } else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }
  window.setInterval(function(){
    autocorrect();
  }, 1000);
  var input = document.getElementById("textbox");
  setCaretPosition(input, input.value.length);
  document.getElementById("textbox").value = "";
  operations = ["+", "-"];
  operation = operations[Math.floor(Math.random() * operations.length)];
  if (operation == "+") {
    num1 = 500;
    num2 = 500;
    accans = num1 + num2;
    while (accans > 70) {
      num1 = Math.floor(Math.random() * 70 + 1);
      num2 = Math.floor(Math.random() * 70 + 1);
      accans = num1 + num2;
      if (accans < 29) {
        d = 1;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #57c95a";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #57c95a";
        }
      } else if (accans < 48) {
        d = 2;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #ffcc66";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #ffcc66";
        }
      } else if (accans < 71) {
        d = 3;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #ff5e5e";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #ff5e5e";
        }
      }
    }
    document.getElementById("question").innerHTML = num1 + " + " + num2;
  } else if (operation == "-") {
    num1 = Math.floor(Math.random() * 50 + 1);
    num2 = Math.floor(Math.random() * 50 + 1);
    if (num1 > num2) {
      document.getElementById("question").innerHTML = num1 + " - " + num2;
      accans = num1 - num2;
      if (accans < 29) {
        d = 1;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #57c95a";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #57c95a";
        }
      } else if (accans < 48) {
        d = 2;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #ffcc66";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #ffcc66";
        }
      } else if (accans < 71) {
        d = 3;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #ff5e5e";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #ff5e5e";
        }
      }
    } else {
      num1 = num1 + num2;
      num2 = num1 - num2;
      num1 = num1 - num2;
      document.getElementById("question").innerHTML = num1 + " - " + num2;
      accans = num1 - num2;
      if (accans < 29) {
        d = 1;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #57c95a";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #57c95a";
        }
      } else if (accans < 48) {
        d = 2;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #ffcc66";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #ffcc66";
        }
      } else if (accans < 71) {
        d = 3;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #ff5e5e";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #ff5e5e";
        }
      }
    }
  }
}

function actual() {
  if ($(window).width() < 900) {
    document.getElementById("textbox").value = accans;
    document.getElementById("textbox").style.textShadow = "0px 0px white";
    document.getElementById("textbox").style.color = "#57c95a";
  } else {
    document.getElementById("textbox").value = accans;
    document.getElementById("textbox").style.textShadow = "0.3vw 0.3vw #57c95a";
  }
}

window.setInterval(function(){
  autocorrect();
}, 1000);

function autocorrect() {
  y = document.getElementById("textbox").value;
  if (y == accans) {
    clearInterval();
    if(notenter ==  0){
      //timeramount = 1;
      //timer();
      notenter = notenter + 1;
      document.getElementById("check").click();
      setTimeout(newquestion, 2250);
    }
  }
}


function outputname() {
  document.getElementById("textbox").readOnly = true;
  //timeramount = 1;
  //timer();
  var x, y, name, a, b, answer;
  y = document.getElementById("textbox").value;
  if (y == accans) {
    if ($(window).width() < 900) {
      if (d == 1) {
        score = score + 1;
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#57c95a";
        document.getElementById("scoreq").innerHTML = score;
      } else if (d == 2) {
        score = score + 2;
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#57c95a";
        document.getElementById("scoreq").innerHTML = score;
      } else if (d == 3) {
        score = score + 3;
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#57c95a";
        document.getElementById("scoreq").innerHTML = score;
      }
    } else {
      if (d == 1) {
        score = score + 1;
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #57c95a";
        document.getElementById("scoreq").innerHTML = score;
      } else if (d == 2) {
        score = score + 2;
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #57c95a";
        document.getElementById("scoreq").innerHTML = score;
      } else if (d == 3) {
        score = score + 3;
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #57c95a";
        document.getElementById("scoreq").innerHTML = score;
      }
    }
  } else {
    if ($(window).width() < 900) {
      if (score > 1) {
        score = score - 2;
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("scoreq").innerHTML = score;
      } else if (score == 1) {
        score = score - 1;
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("scoreq").innerHTML = score;
      } else {
        total = total + 1;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("scoreq").innerHTML = score;
      }
    } else {
      if (score > 1) {
        score = score - 2;
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("scoreq").innerHTML = score;
      } else if (score == 1) {
        score = score - 1;
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("scoreq").innerHTML = score;
      } else {
        total = total + 1;
        document.getElementById("totalq").innerHTML = total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("scoreq").innerHTML = score;
      }
    }
  }
}

var input = document.getElementById("textbox");
input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    if(document.getElementById("textbox").value != ""){
      if(notenter ==  0){
        notenter = notenter + 1;
        e.preventDefault();
        document.getElementById("check").click();
        setTimeout(newquestion, 2250);
      }
    }
  }
});

function setCaretPosition(ctrl, pos) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

var input = document.getElementById("textbox");
setCaretPosition(input, input.value.length);

function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

// Install input filters.
setInputFilter(document.getElementById("textbox"), function (value) {
  return /^-?\d*$/.test(value);
});

function loaderout() {
  $("#loader").fadeOut();
}

function back() {
  window.location.href = "https://kidkalc.com";
}

var isSafari =
  navigator.vendor &&
  navigator.vendor.indexOf("Apple") > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf("CriOS") == -1 &&
  navigator.userAgent.indexOf("FxiOS") == -1;

if(isSafari === true) {
  $("#icon").remove();
  document.getElementById('spana').innerHTML = "A";
}

/*
function timer() {
  if (timeramount > 0)
  {
      clearInterval(timerinterval);
      timeramount = 0;
      return;
  }
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 13;
  const ALERT_THRESHOLD = 6;

  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD,
    },
  };

  const TIME_LIMIT = 20;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("timer").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;

  function onTimesUp() {
    clearInterval(timerinterval);
    document.getElementById("check").click();
  }
  timerinterval = setInterval(function () {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `${seconds}`;
    }
  
    return `${seconds}`;
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
}
*/