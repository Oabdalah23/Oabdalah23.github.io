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
var Grade4 = {};
var TotalCoins = {};
var ref;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    username = user;
    useruid = user.uid;
    database = firebase.database();
    ref = database.ref('stats/'+useruid);
    ref.on('value', gotData)
  } else {
    username = "NotSignedIn"
  }
});

function gotData(data) {
  var stats = data.val();
  var keys = Object.keys(stats);
  for (var i = 0; i < keys.length; i++)
  {
    var k = keys[i];
    var scorefirebase = stats[k].Grade4Score;
    var totalfirebase = stats[k].Grade4Total;
    var coinfirebase = stats[k].CoinsFirebase;
    if (totalfirebase != undefined) {
      localStorage.setItem("savedtotal4", JSON.stringify(totalfirebase));
      total = totalfirebase;
      document.getElementById("coins").innerHTML = "Total\n" + totalfirebase;
      document.getElementById("dropdowncoins").innerHTML = "Total: " + totalfirebase;
    }
    if (coinfirebase != undefined){
      localStorage.setItem("savedcoin", JSON.stringify(coinfirebase));
    }
    if (scorefirebase != undefined){
      localStorage.setItem("savedscore4", JSON.stringify(scorefirebase));
      score = scorefirebase;
      document.getElementById("finprompt").innerHTML = "Score\n" + scorefirebase;
      document.getElementById("dropdownscore").innerHTML = "Score: " + scorefirebase;
    }
  }
}

$(document).ready(function () {
  var isshow = localStorage.getItem("isshow4");
  if (isshow == null) {
    localStorage.setItem("isshow4", 1);

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

if (JSON.parse(localStorage.getItem("savedscore4")) > 0) {
  score = JSON.parse(localStorage.getItem("savedscore4"));
  document.getElementById("finprompt").innerHTML = "Score\n" + score;
  document.getElementById("dropdownscore").innerHTML = "Score: " + score;
} else {
  score = 0;
}

if (JSON.parse(localStorage.getItem("savedtotal4")) > 0) {
  total = JSON.parse(localStorage.getItem("savedtotal4"));
  document.getElementById("coins").innerHTML = "Total\n" + total;
  document.getElementById("dropdowncoins").innerHTML = "Total: " + total;
} else {
  total = 1;
}

operations = ["+", "-", "*", "/"];
operation = operations[Math.floor(Math.random() * operations.length)];
if (operation == "+") {
  num1 = 1000;
  num2 = 1000;
  accans = num1 + num2;
  while (accans > 1000) {
    num1 = Math.floor(Math.random() * 1000 + 1);
    num2 = Math.floor(Math.random() * 1000 + 1);
    accans = num1 + num2;
    if (accans < 334) {
      d = 1;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #57c95a";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #57c95a";
      }
    } else if (accans < 667) {
      d = 2;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ffcc66";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ffcc66";
      }
    } else if (accans < 1001) {
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
  num1 = Math.floor(Math.random() * 1000 + 1);
  num2 = Math.floor(Math.random() * 1000 + 1);
  if (num1 > num2) {
    document.getElementById("question").innerHTML = num1 + " - " + num2;
    accans = num1 - num2;
    if (accans < 334) {
      d = 1;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #57c95a";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #57c95a";
      }
    } else if (accans < 667) {
      d = 2;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ffcc66";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ffcc66";
      }
    } else if (accans < 1001) {
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
    if (accans < 334) {
      d = 1;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #57c95a";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #57c95a";
      }
    } else if (accans < 667) {
      d = 2;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ffcc66";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ffcc66";
      }
    } else if (accans < 1001) {
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
} else if (operation == "*") {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  document.getElementById("question").innerHTML = num1 + " × " + num2;
  accans = num1 * num2;
  if (accans < 34) {
    d = 1;
    if ($(window).width() < 950) {
      document.getElementById("question").style.textShadow = "3px 3px #57c95a";
    } else {
      document.getElementById("difficulty").style.textShadow =
        "2px 2px #57c95a";
    }
  } else if (accans < 67) {
    d = 2;
    if ($(window).width() < 950) {
      document.getElementById("question").style.textShadow = "3px 3px #ffcc66";
    } else {
      document.getElementById("difficulty").style.textShadow =
        "2px 2px #ffcc66";
    }
  } else if (accans < 101) {
    d = 3;
    if ($(window).width() < 950) {
      document.getElementById("question").style.textShadow = "3px 3px #ff5e5e";
    } else {
      document.getElementById("difficulty").style.textShadow =
        "2px 2px #ff5e5e";
    }
  }
} else if (operation == "/") {
  num2 = Math.floor(Math.random() * 10 + 1);
  items = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72],
    [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84],
    [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
    [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108],
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  ];
  x = Math.floor(Math.random() * 11);
  num1 = items[num2 - 1][x];
  document.getElementById("question").innerHTML = num1 + " ÷ " + num2;
  accans = num1 / num2;
  if (accans < 5) {
    d = 1;
    if ($(window).width() < 950) {
      document.getElementById("question").style.textShadow = "3px 3px #57c95a";
    } else {
      document.getElementById("difficulty").style.textShadow =
        "2px 2px #57c95a";
    }
  } else if (accans < 9) {
    d = 2;
    if ($(window).width() < 950) {
      document.getElementById("question").style.textShadow = "3px 3px #ffcc66";
    } else {
      document.getElementById("difficulty").style.textShadow =
        "2px 2px #ffcc66";
    }
  } else if (accans < 13) {
    d = 3;
    if ($(window).width() < 950) {
      document.getElementById("question").style.textShadow = "3px 3px #ff5e5e";
    } else {
      document.getElementById("difficulty").style.textShadow =
        "2px 2px #ff5e5e";
    }
  }
}

function newquestion() {
  localStorage.setItem("savedtotal4", JSON.stringify(total));
  localStorage.setItem("savedscore4", JSON.stringify(score));
  document.getElementById("textbox").style.color = "white";
  document.getElementById("textbox").style.textShadow = "0.3vw 0.3vw #0095ff";
  document.getElementById("textbox").readOnly = false;
  if (username != "NotSignedIn") {
    Grade4.Grade4Score = score;
    Grade4.Grade4Total = total;
    myFBref.child('stats/'+useruid).update({
      Grade4
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

  var input = document.getElementById("textbox");
  setCaretPosition(input, input.value.length);
  document.getElementById("textbox").value = "";
  operations = ["+", "-", "*", "/"];
  operation = operations[Math.floor(Math.random() * operations.length)];
  if (operation == "+") {
    num1 = 1000;
    num2 = 1000;
    accans = num1 + num2;
    while (accans > 1000) {
      num1 = Math.floor(Math.random() * 1000 + 1);
      num2 = Math.floor(Math.random() * 1000 + 1);
      accans = num1 + num2;
      if (accans < 334) {
        d = 1;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #57c95a";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #57c95a";
        }
      } else if (accans < 667) {
        d = 2;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #ffcc66";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #ffcc66";
        }
      } else if (accans < 1001) {
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
    num1 = Math.floor(Math.random() * 1000 + 1);
    num2 = Math.floor(Math.random() * 1000 + 1);
    if (num1 > num2) {
      document.getElementById("question").innerHTML = num1 + " - " + num2;
      accans = num1 - num2;
      if (accans < 334) {
        d = 1;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #57c95a";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #57c95a";
        }
      } else if (accans < 667) {
        d = 2;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #ffcc66";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #ffcc66";
        }
      } else if (accans < 1001) {
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
      if (accans < 334) {
        d = 1;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #57c95a";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #57c95a";
        }
      } else if (accans < 667) {
        d = 2;
        if ($(window).width() < 950) {
          document.getElementById("question").style.textShadow =
            "3px 3px #ffcc66";
        } else {
          document.getElementById("difficulty").style.textShadow =
            "2px 2px #ffcc66";
        }
      } else if (accans < 1001) {
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
  } else if (operation == "*") {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    document.getElementById("question").innerHTML = num1 + " × " + num2;
    accans = num1 * num2;
    if (accans < 34) {
      d = 1;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #57c95a";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #57c95a";
      }
    } else if (accans < 67) {
      d = 2;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ffcc66";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ffcc66";
      }
    } else if (accans < 101) {
      d = 3;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ff5e5e";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ff5e5e";
      }
    }
  } else if (operation == "/") {
    num2 = Math.floor(Math.random() * 10 + 1);
    items = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
      [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
      [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
      [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72],
      [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84],
      [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
      [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108],
      [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    ];
    x = Math.floor(Math.random() * 11);
    num1 = items[num2 - 1][x];
    document.getElementById("question").innerHTML = num1 + " ÷ " + num2;
    accans = num1 / num2;
    if (accans < 5) {
      d = 1;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #57c95a";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #57c95a";
      }
    } else if (accans < 9) {
      d = 2;
      if ($(window).width() < 950) {
        document.getElementById("question").style.textShadow =
          "3px 3px #ffcc66";
      } else {
        document.getElementById("difficulty").style.textShadow =
          "2px 2px #ffcc66";
      }
    } else if (accans < 13) {
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

function actual() {
  if ($(window).width() < 900) {
    document.getElementById("textbox").value = accans;
    document.getElementById("textbox").style.textShadow = "0px 0px white";
    document.getElementById("textbox").style.color = "##57c95a";
  } else {
    document.getElementById("textbox").value = accans;
    document.getElementById("textbox").style.textShadow =
      "0.3vw 0.3vw ##57c95a";
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
