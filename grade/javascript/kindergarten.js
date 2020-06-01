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
firebase.analytics();


var myFBref = new Firebase("https://kidkalc.firebaseio.com/");

var useruid;
var username;
var Stats = {};
var score = 0;
var coins = 0;
var total = 1;
var d;

if (JSON.parse(localStorage.getItem("savedscore")) > 0) {
  score = JSON.parse(localStorage.getItem("savedscore"));
  document.getElementById("finprompt").innerHTML = "Score\n" + score;
  document.getElementById("dropdownscore").innerHTML = "Score: " + score;
} else {
  score = 0;
}

if (JSON.parse(localStorage.getItem("savedcoin")) > 0) {
  coins = JSON.parse(localStorage.getItem("savedcoin"));
} else {
  coins = 0;
}

if (JSON.parse(localStorage.getItem("savedtotal")) > 0) {
  total = JSON.parse(localStorage.getItem("savedtotal"));
  document.getElementById("coins").innerHTML = "Total\n" + total;
  document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
} else {
  total = 1;
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    username = user;
    useruid = user.uid;
    Stats.KindergartenScore = score;
    Stats.KindergartenTotal = total;
    Stats.KindergartenCoins = coins;
    myFBref.child(useruid).set({
      Stats
    })
    myFBref.once("value", function(data) {
      childScore = data.val();
      localStorage.setItem("savedscore", JSON.stringify(childScore.KindergartenScore)); 
      localStorage.setItem("savedtotal", JSON.stringify(childScore.KindergartenTotal));
      localStorage.setItem("savedcoin", JSON.stringify(childScore.KindergartenCoins));
    });
  } else {
    username = "NotSignedIn"
  }
});


$(document).ready(function () {
  var isshow = localStorage.getItem("isshow1");
  if (isshow == null) {
    localStorage.setItem("isshow1", 1);

    // Show popup here
    $("#myModal").modal("show");
  }
});

function help() {
  $("#myModal").modal("show");
}

if (JSON.parse(localStorage.getItem("savedscore")) > 0) {
  score = JSON.parse(localStorage.getItem("savedscore"));
  document.getElementById("finprompt").innerHTML = "Score\n" + score;
  document.getElementById("dropdownscore").innerHTML = "Score: " + score;
} else {
  score = 0;
}

if (JSON.parse(localStorage.getItem("savedcoin")) > 0) {
  coins = JSON.parse(localStorage.getItem("savedcoin"));
} else {
  coins = 0;
}

if (JSON.parse(localStorage.getItem("savedtotal")) > 0) {
  total = JSON.parse(localStorage.getItem("savedtotal"));
  document.getElementById("coins").innerHTML = "Total\n" + total;
  document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
} else {
  total = 1;
}

if (coins > 0) {
  document.getElementById("game").style.display = "block";
} else {
  document.getElementById("game").style.display = "none";
}

num1 = 500;
num2 = 500;
accans = num1 + num2;
while (accans > 10) {
  num1 = Math.floor(Math.random() * 10 + 1);
  num2 = Math.floor(Math.random() * 10 + 1);
  accans = num1 + num2;
  if (accans < 5) {
    d = 1;
    if ($(window).width() < 950) {
      document.getElementById("question").style.textShadow = "3px 3px #57c95a";
    } else {
      document.getElementById("difficulty").style.textShadow =
        "2px 2px #57c95a";
    }
  } else if (accans < 8) {
    d = 2;
    if ($(window).width() < 950) {
      document.getElementById("question").style.textShadow = "3px 3px #ffcc66";
    } else {
      document.getElementById("difficulty").style.textShadow =
        "2px 2px #ffcc66";
    }
  } else if (accans < 11) {
    d = 3;
    if ($(window).width() < 950) {
      document.getElementById("question").style.textShadow = "3px 3px #ff5e5e";
    } else {
      document.getElementById("difficulty").style.textShadow =
        "2px 2px #ff5e5e";
    }
  }
}

document.getElementById("question").innerHTML = num1 + " + " + num2;

function game() {
  coins = coins - 1;
  localStorage.setItem("savedcoin", JSON.stringify(coins));
  window.location.href = "/game";
  document.getElementById("game").style.display = "none";
  if (username != "NotSignedIn") {
    Stats.KindergartenScore = score;
    Stats.KindergartenTotal = total;
    Stats.KindergartenCoins = coins;
    myFBref.child(useruid).set({
      Stats
    })
  }
}

function newquestion() {
  localStorage.setItem("savedtotal", JSON.stringify(total));
  localStorage.setItem("savedscore", JSON.stringify(score));
  if (total % 15 == 0 && total != 0) {
    coins = coins + 1;
  }
  if (coins > 0) {
    document.getElementById("game").style.display = "block";
  } else {
    document.getElementById("game").style.display = "none";
  }
  localStorage.setItem("savedcoin", JSON.stringify(coins));
  document.getElementById("textbox").style.color = "white";
  document.getElementById("textbox").style.textShadow = "0.3vw 0.3vw #0095ff";
  document.getElementById("textbox").readOnly = false;
  if (username != "NotSignedIn") {
    Stats.KindergartenScore = score;
    Stats.KindergartenTotal = total;
    Stats.KindergartenCoins = coins;
    myFBref.child(useruid).set({
      Stats
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

  var input = document.getElementById("textbox");
  setCaretPosition(input, input.value.length);
  document.getElementById("textbox").value = "";
  num1 = 500;
  num2 = 500;
  accans = num1 + num2;
  while (accans > 10) {
    num1 = Math.floor(Math.random() * 10 + 1);
    num2 = Math.floor(Math.random() * 10 + 1);
    accans = num1 + num2;
    if (accans < 5) {
      d = 1;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #57c95a";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #57c95a";
      }
    } else if (accans < 8) {
      d = 2;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ffcc66";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ffcc66";
      }
    } else if (accans < 11) {
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

function outputname() {
  document.getElementById("textbox").readOnly = true;
  var x, y, name, a, b, answer;
  y = document.getElementById("textbox").value;
  if (y == accans) {
    if ($(window).width() < 900) {
      if (d == 1) {
        score = score + 1;
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#57c95a";
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      } else if (d == 2) {
        score = score + 2;
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#57c95a";
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      } else if (d == 3) {
        score = score + 3;
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#57c95a";
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      }
    } else {
      if (d == 1) {
        score = score + 1;
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #57c95a";
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      } else if (d == 2) {
        score = score + 2;
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #57c95a";
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      } else if (d == 3) {
        score = score + 3;
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #57c95a";
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      }
    }
  } else {
    if ($(window).width() < 900) {
      if (score > 1) {
        score = score - 2;
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      } else if (score == 1) {
        score = score - 1;
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      } else {
        total = total + 1;
        document.getElementById("textbox").style.textShadow = "0px 0px white";
        document.getElementById("textbox").style.color = "#ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      }
    } else {
      if (score > 1) {
        score = score - 2;
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      } else if (score == 1) {
        score = score - 1;
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      } else {
        total = total + 1;
        document.getElementById("coins").innerHTML = "Total\n" + total;
        document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
        document.getElementById("textbox").style.textShadow =
          "0.3vw 0.3vw #ff5e5e";
        setTimeout(actual, 750);
        document.getElementById("finprompt").innerHTML = "Score\n" + score;
        document.getElementById("dropdownscore").innerHTML = "Score: " + score;
      }
    }
  }
}

var input = document.getElementById("textbox");
input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.getElementById("check").click();
    setTimeout(newquestion, 2250);
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
