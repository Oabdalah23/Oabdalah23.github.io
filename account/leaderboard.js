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

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    user = firebase.auth().currentUser;
    var email_id = user.email;
    str = email_id.split("@");
    str.pop();
    str = str[0];
    username = user;
    useruid = user.uid;
    database = firebase.database();
    ref = database.ref("stats/leaderboard");
    ref.on("value", gotData);
  } else {
    username = "NotSignedIn";
  }
});

function gotData(data) {
  var stats = data.val();
  firstname = stats['first'].Name;
  firstaccuracy = stats['first'].Accuracy
  secondname = stats['second'].Name;
  secondaccuracy = stats['second'].Accuracy
  thirdname = stats['third'].Name;
  thirdaccuracy = stats['third'].Accuracy;
  document.getElementById("usernamescore1").innerHTML = firstname;
  document.getElementById("score1").innerHTML = firstaccuracy;
  document.getElementById("usernamescore2").innerHTML = secondname;
  document.getElementById("score2").innerHTML = secondaccuracy;
  document.getElementById("usernamescore3").innerHTML = thirdname;
  document.getElementById("score3").innerHTML = thirdaccuracy;
  for (var i = 0; i < 3; i++) {
    var dateSpan = document.createElement("span");
    dateSpan.innerHTML = "Accuracy";
    var span = document.getElementById("score" + [i + 1]);
    span.appendChild(dateSpan);
  }
}
