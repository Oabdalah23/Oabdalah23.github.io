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
var str;

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
  fourthname = stats['fourth'].Name;
  fourthaccuracy = stats['fourth'].Accuracy;
  fifthname = stats['fifth'].Name;
  fifthaccuracy = stats['fifth'].Accuracy;
  sixthname = stats['sixth'].Name;
  sixthaccuracy = stats['sixth'].Accuracy;
  seventhname = stats['seventh'].Name;
  seventhaccuracy = stats['seventh'].Accuracy;
  eighthname = stats['eighth'].Name;
  eighthaccuracy = stats['eighth'].Accuracy;
  ninthname = stats['ninth'].Name;
  ninthaccuracy = stats['ninth'].Accuracy;
  tenthname = stats['tenth'].Name;
  tenthaccuracy = stats['tenth'].Accuracy;
  document.getElementById("usernamescore1").innerHTML = firstname;
  document.getElementById("score1").innerHTML = firstaccuracy;
  document.getElementById("usernamescore2").innerHTML = secondname;
  document.getElementById("score2").innerHTML = secondaccuracy;
  document.getElementById("usernamescore3").innerHTML = thirdname;
  document.getElementById("score3").innerHTML = thirdaccuracy;
  document.getElementById("usernamescore4").innerHTML = fourthname;
  document.getElementById("score4").innerHTML = fourthaccuracy;
  document.getElementById("usernamescore5").innerHTML = fifthname;
  document.getElementById("score5").innerHTML = fifthaccuracy;
  document.getElementById("usernamescore6").innerHTML = sixthname;
  document.getElementById("score6").innerHTML = sixthaccuracy;
  document.getElementById("usernamescore7").innerHTML = seventhname;
  document.getElementById("score7").innerHTML = seventhaccuracy;
  document.getElementById("usernamescore8").innerHTML = eighthname;
  document.getElementById("score8").innerHTML = eighthaccuracy;
  document.getElementById("usernamescore9").innerHTML = ninthname;
  document.getElementById("score9").innerHTML = ninthaccuracy;
  document.getElementById("usernamescore10").innerHTML = tenthname;
  document.getElementById("score10").innerHTML = tenthaccuracy;
  for (var i = 0; i < 10; i++) {
    var dateSpan = document.createElement("span");
    dateSpan.innerHTML = "Points";
    var span = document.getElementById("score" + [i + 1]);
    span.appendChild(dateSpan);
  }
  if(firstname == str){
    document.getElementById('first').style.backgroundColor = "#0e1642";
  }
  else if(secondname == str){
    document.getElementById('second').style.backgroundColor = "#0e1642";
  }
  else if(thirdname == str){
    document.getElementById('third').style.backgroundColor = "#0e1642";
  }
  $("#loader").fadeOut();
}

function back()
{
    setTimeout(redirect,1)
}

function redirect(){
  location.replace("https://KidKalc.com")
}