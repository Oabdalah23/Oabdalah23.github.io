var config = {
  apiKey: "AIzaSyCSY_guUTymv77PDeCi9A8K11bmAystFX8",
  authDomain: "kidkalc.firebaseapp.com",
  databaseURL: "https://kidkalc.firebaseio.com",
  projectId: "kidkalc",
  storageBucket: "kidkalc.appspot.com",
  messagingSenderId: "363718905093",
  appId: "1:363718905093:web:72636a6498d6d86a00fb6c",
  measurementId: "G-NNTSP3W22H",
};
firebase.initializeApp(config);
firebase.analytics();

var myFBref = new Firebase("https://kidkalc.firebaseio.com/");
var user;
var ref;
var useruid;
var username;
var total = 0;
var score = 0;
var coins = 0;
var TotalAccuracy = {};
var first = {};
var second = {};
var third = {};
var fourth = {};
var fifth = {};
var sixth = {};
var seventh = {};
var eighth = {};
var ninth = {};
var tenth = {};

var str = "";

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    user = firebase.auth().currentUser;
    var email_id = user.email;
    str = email_id.split("@");
    str.pop();
    str = str[0];

    document
      .getElementById("account")
      .setAttribute("onClick", "javascript: showusernamepopup();");

    document.getElementById("account").style.animation = "none";

    if (user != null) {
      var userdisplayname = user.displayName;

      if (userdisplayname != null) {
        document.getElementById("exampleModalLabel").innerHTML =
          "Welcome " + userdisplayname;
      } else {
        document.getElementById("exampleModalLabel").innerHTML =
          "Welcome " + str;
      }
    }
    username = user;
    useruid = user.uid;
    database = firebase.database();
    ref = database.ref("stats/" + useruid);
    ref.on("value", gotData);
    leaderboardref = database.ref("stats/leaderboard");
    leaderboardref.on("value", gotLeaderboardData);
  } else {
    username = "NotSignedIn";

    document
      .getElementById("account")
      .setAttribute("onClick", "location.href='account';");

    document.getElementById("account").style.animation = "moema 2s infinite";
  }
});

var firstname;
var firstaccuracy;
var secondname;
var secondaccuracy;
var thirdname;
var thirdaccuracy;
var fourthname;
var fourthaccuracy;
var fifthname;
var fifthaccuracy;
var sixthname;
var sixthaccuracy;
var seventhname;
var seventhaccuracy;
var eighthname;
var eighthaccuracy;
var ninthname;
var ninthaccuracy;
var tenthname;
var tenthaccuracy;

function gotData(data) {
  var stats = data.val();
  var keys = Object.keys(stats);
  total = 0;
  score = 0;
  coins = 0;
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var total0firebase = stats[k].KindergartenTotal;
    var total1firebase = stats[k].Grade1Total;
    var total2firebase = stats[k].Grade2Total;
    var total3firebase = stats[k].Grade3Total;
    var total4firebase = stats[k].Grade4Total;
    var total5firebase = stats[k].Grade5Total;
    var score0firebase = stats[k].KindergartenScore;
    var score1firebase = stats[k].Grade1Score;
    var score2firebase = stats[k].Grade2Score;
    var score3firebase = stats[k].Grade3Score;
    var score4firebase = stats[k].Grade4Score;
    var score5firebase = stats[k].Grade5Score;
    var coinsfirebase = stats[k].CoinsFirebase;
    if (total0firebase != undefined) {
      total += total0firebase;
    }
    if (total1firebase != undefined) {
      total += total1firebase;
    }
    if (total2firebase != undefined) {
      total += total2firebase;
    }
    if (total3firebase != undefined) {
      total += total3firebase;
    }
    if (total4firebase != undefined) {
      total += total4firebase;
    }
    if (total5firebase != undefined) {
      total += total5firebase;
    }
    if (score0firebase != undefined) {
      score += score0firebase;
    }
    if (score1firebase != undefined) {
      score += score1firebase;
    }
    if (score2firebase != undefined) {
      score += score2firebase;
    }
    if (score3firebase != undefined) {
      score += score3firebase;
    }
    if (score4firebase != undefined) {
      score += score4firebase;
    }
    if (score5firebase != undefined) {
      score += score5firebase;
    }
    if (coinsfirebase != undefined) {
      coins = coinsfirebase;
    }
  }
  accuracy = Math.round(100 * (score / total)) / 100;
  TotalAccuracy.Accuracy = accuracy;
  TotalAccuracy.Name = str;
  document.getElementById("accuracy").innerHTML = accuracy;
  myFBref.child("stats/" + useruid).update({
    TotalAccuracy,
  });
  document.getElementById("totalquestions").innerHTML = total;
  document.getElementById("totalscore").innerHTML = score;
  document.getElementById("totalcoins").innerHTML = coins;
}

function gotLeaderboardData(data) {
  var stats = data.val();
  firstname = stats["first"].Name;
  firstaccuracy = stats["first"].Accuracy;
  secondname = stats["second"].Name;
  secondaccuracy = stats["second"].Accuracy;
  thirdname = stats["third"].Name;
  thirdaccuracy = stats["third"].Accuracy;
  fourthname = stats["fourth"].Name;
  fourthaccuracy = stats["fourth"].Accuracy;
  fifthname = stats["fifth"].Name;
  fifthaccuracy = stats["fifth"].Accuracy;
  sixthname = stats["sixth"].Name;
  sixthaccuracy = stats["sixth"].Accuracy;
  seventhname = stats["seventh"].Name;
  seventhaccuracy = stats["seventh"].Accuracy;
  eighthname = stats["eighth"].Name;
  eighthaccuracy = stats["eighth"].Accuracy;
  ninthname = stats["ninth"].Name;
  ninthaccuracy = stats["ninth"].Accuracy;
  tenthname = stats["tenth"].Name;
  tenthaccuracy = stats["tenth"].Accuracy;
  if (accuracy > firstaccuracy) {
    first.Name = str;
    first.Accuracy = accuracy;
    second.Name = firstname;
    second.Accuracy = firstaccuracy;
    third.Name = secondname;
    third.Accuracy = secondaccuracy;
    fourth.Name = thirdname;
    fourth.Accuracy = thirdaccuracy;
    fifth.Name = fourthname;
    fifth.Accuracy = fourthaccuracy;
    sixth.Name = fifthname;
    sixth.Accuracy = fifthaccuracy;
    seventh.Name = sixthname;
    seventh.Accuracy = sixthaccuracy;
    eighth.Name = seventhname;
    eighth.Accuracy = seventhaccuracy;
    ninth.Name = eighthname;
    ninth.Accuracy = eighthaccuracy;
    tenth.Name = ninthname;
    ten.Accuracy = ninthaccuracy;
    myFBref.child("stats/leaderboard").update({
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
      tenth,
    });
  } else if (accuracy > secondaccuracy && str !== firstname) {
    second.Name = str;
    second.Accuracy = accuracy;
    third.Name = secondaccuracy;
    third.Accuracy = secondaccuracy;
    fourth.Name = thirdname;
    fourth.Accuracy = thirdaccuracy;
    fifth.Name = fourthname;
    fifth.Accuracy = fourthaccuracy;
    sixth.Name = fifthname;
    sixth.Accuracy = fifthaccuracy;
    seventh.Name = sixthname;
    seventh.Accuracy = sixthaccuracy;
    eighth.Name = seventhname;
    eighth.Accuracy = seventhaccuracy;
    ninth.Name = eighthname;
    ninth.Accuracy = eighthaccuracy;
    tenth.Name = ninthname;
    ten.Accuracy = ninthaccuracy;
    myFBref.child("stats/leaderboard").update({
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
      tenth,
    });
  } else if (
    accuracy > thirdaccuracy &&
    str !== firstname &&
    str !== secondname
  ) {
    third.Name = str;
    third.Accuracy = accuracy;
    fourth.Name = thirdname;
    fourth.Accuracy = thirdaccuracy;
    fifth.Name = fourthname;
    fifth.Accuracy = fourthaccuracy;
    sixth.Name = fifthname;
    sixth.Accuracy = fifthaccuracy;
    seventh.Name = sixthname;
    seventh.Accuracy = sixthaccuracy;
    eighth.Name = seventhname;
    eighth.Accuracy = seventhaccuracy;
    ninth.Name = eighthname;
    ninth.Accuracy = eighthaccuracy;
    tenth.Name = ninthname;
    ten.Accuracy = ninthaccuracy;
    myFBref.child("stats/leaderboard").update({
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
      tenth,
    });
  } else if (
    accuracy > fourthaccuracy &&
    str !== firstname &&
    str !== secondname &&
    str !== thirdname
  ) {
    fourth.Name = str;
    fourth.Accuracy = accuracy;
    fifth.Name = fourthname;
    fifth.Accuracy = fourthaccuracy;
    sixth.Name = fifthname;
    sixth.Accuracy = fifthaccuracy;
    seventh.Name = sixthname;
    seventh.Accuracy = sixthaccuracy;
    eighth.Name = seventhname;
    eighth.Accuracy = seventhaccuracy;
    ninth.Name = eighthname;
    ninth.Accuracy = eighthaccuracy;
    tenth.Name = ninthname;
    ten.Accuracy = ninthaccuracy;
    myFBref.child("stats/leaderboard").update({
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
      tenth,
    });
  } else if (
    accuracy > fifthaccuracy &&
    str !== firstname &&
    str !== secondname &&
    str !== thirdname &&
    str !== fourthname
  ) {
    fifth.Name = str;
    fifth.Accuracy = accuracy;
    sixth.Name = fifthname;
    sixth.Accuracy = fifthaccuracy;
    seventh.Name = sixthname;
    seventh.Accuracy = sixthaccuracy;
    eighth.Name = seventhname;
    eighth.Accuracy = seventhaccuracy;
    ninth.Name = eighthname;
    ninth.Accuracy = eighthaccuracy;
    tenth.Name = ninthname;
    ten.Accuracy = ninthaccuracy;
    myFBref.child("stats/leaderboard").update({
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
      tenth,
    });
  } else if (
    accuracy > sixthaccuracy &&
    str !== firstname &&
    str !== secondname &&
    str !== thirdname &&
    str !== fourthname &&
    str !== fifthname
  ) {
    sixth.Name = str;
    sixth.Accuracy = accuracy;
    seventh.Name = sixthname;
    seventh.Accuracy = sixthaccuracy;
    eighth.Name = seventhname;
    eighth.Accuracy = seventhaccuracy;
    ninth.Name = eighthname;
    ninth.Accuracy = eighthaccuracy;
    tenth.Name = ninthname;
    ten.Accuracy = ninthaccuracy;
    myFBref.child("stats/leaderboard").update({
      sixth,
      seventh,
      eighth,
      ninth,
      tenth,
    });
  } else if (
    accuracy > seventhaccuracy &&
    str !== firstname &&
    str !== secondname &&
    str !== thirdname &&
    str !== fourthname &&
    str !== fifthname &&
    str !== sixthname
  ) {
    seventh.Name = str;
    seventh.Accuracy = accuracy;
    eighth.Name = seventhname;
    eighth.Accuracy = seventhaccuracy;
    ninth.Name = eighthname;
    ninth.Accuracy = eighthaccuracy;
    tenth.Name = ninthname;
    ten.Accuracy = ninthaccuracy;
    myFBref.child("stats/leaderboard").update({
      seventh,
      eighth,
      ninth,
      tenth,
    });
  } else if (
    accuracy > eighthaccuracy &&
    str !== firstname &&
    str !== secondname &&
    str !== thirdname &&
    str !== fourthname &&
    str !== fifthname &&
    str !== sixthname &&
    str !== seventhname
  ) {
    eighth.Name = str;
    eighth.Accuracy = accuracy;
    ninth.Name = eighthname;
    ninth.Accuracy = eighthaccuracy;
    tenth.Name = ninthname;
    ten.Accuracy = ninthaccuracy;
    myFBref.child("stats/leaderboard").update({
      eighth,
      ninth,
      tenth,
    });
  } else if (
    accuracy > ninthaccuracy &&
    str !== firstname &&
    str !== secondname &&
    str !== thirdname &&
    str !== fourthname &&
    str !== fifthname &&
    str !== sixthname &&
    str !== seventhname &&
    str !== eighthname
  ) {
    ninth.Name = str;
    ninth.Accuracy = accuracy;
    tenth.Name = ninthname;
    ten.Accuracy = ninthaccuracy;
    myFBref.child("stats/leaderboard").update({
      ninth,
      tenth,
    });
  } else if (
    accuracy > tenthaccuracy &&
    str !== firstname &&
    str !== secondname &&
    str !== thirdname &&
    str !== fourthname &&
    str !== fifthname &&
    str !== sixthname &&
    str !== seventhname &&
    str !== eighthname &&
    str !== ninthname
  ) {
    tenth.Name = str;
    ten.Accuracy = accuracy;
    myFBref.child("stats/leaderboard").update({
      tenth,
    });
  }
}

function showusernamepopup() {
  $("#myusername").modal("show");
}

$(document).ready(function () {
  var isshow = localStorage.getItem("isshow");
  if (isshow == null) {
    localStorage.setItem("isshow", 1);

    // Show popup here
    $("#myModal").modal("show");
  }
});

function help() {
  $("#myModal").modal("show");
}

const Toast = Swal.mixin({
  toast: true,
  position: "top-start",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function topleftpopup() {
  Toast.fire({
    icon: "success",
    title: "Have Fun!",
  });
}

function signoutsuccess() {
  Toast.fire({
    icon: "success",
    title: "Signed Out Successfully",
  });
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["KidKalc", "The Future", "Perfection"];
const typingDelay = 250;
const erasingDelay = 180;
const newTextDelay = 2500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

function logout() {
  firebase.auth().signOut();
  document
    .getElementById("account")
    .setAttribute("onClick", "location.href='account';");
  document.getElementById("account").style.animation = "moema 2s infinite";
  signoutsuccess();
}

function leaderboard() {
  window.location.href = "account/leaderboard";
}
