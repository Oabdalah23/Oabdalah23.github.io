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

var myFBref = new Firebase("https://kidkalc.firebaseio.com/");
var user;
var ref;
var useruid;
var username;
var total = 0;
var score = 0;
var coins = 0;
var TotalAccuracy = {};
var Badges = {};
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
var Streak = {};
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
var eleventhname;
var eleventhaccuracy;
var leaderboardcheck;

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
  while (1 === 1) {
    if (score >= firstaccuracy) {
      if (str == firstname) {
        first.Name = str;
        first.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          first,
        });
        break;
      } else if (
        str !== secondname &&
        str !== thirdname &&
        str !== fourthname &&
        str !== fifthname &&
        str !== sixthname &&
        str !== seventhname &&
        str !== eighthname &&
        str !== ninthname &&
        str !== tenthname
      ) {
        first.Name = str;
        first.Accuracy = score;
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
        tenth.Accuracy = ninthaccuracy;
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
        break;
      } else if (str == secondname) {
        first.Name = str;
        first.Accuracy = score;
        second.Name = firstname;
        second.Accuracy = firstaccuracy;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
        });
        break;
      } else if (str == thirdname) {
        first.Name = str;
        first.Accuracy = score;
        second.Name = firstname;
        second.Accuracy = firstaccuracy;
        third.Name = secondname;
        third.Accuracy = secondaccuracy;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
        });
        break;
      } else if (str == fourthname) {
        first.Name = str;
        first.Accuracy = score;
        second.Name = firstname;
        second.Accuracy = firstaccuracy;
        third.Name = secondname;
        third.Accuracy = secondaccuracy;
        fourth.Name = thirdname;
        fourth.Accuracy = thirdaccuracy;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
          fourth,
        });
        break;
      } else if (str == fifthname) {
        first.Name = str;
        first.Accuracy = score;
        second.Name = firstname;
        second.Accuracy = firstaccuracy;
        third.Name = secondname;
        third.Accuracy = secondaccuracy;
        fourth.Name = thirdname;
        fourth.Accuracy = thirdaccuracy;
        fifth.Name = fourthname;
        fifth.Accuracy = fourthaccuracy;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
          fourth,
          fifth,
        });
        break;
      } else if (str == sixthname) {
        first.Name = str;
        first.Accuracy = score;
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
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
          fourth,
          fifth,
          sixth,
        });
        break;
      } else if (str == seventhname) {
        first.Name = str;
        first.Accuracy = score;
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
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
          fourth,
          fifth,
          sixth,
          seventh,
        });
        break;
      } else if (str == eighthname) {
        first.Name = str;
        first.Accuracy = score;
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
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == ninthname) {
        first.Name = str;
        first.Accuracy = score;
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
        });
        break;
      } else if (str == tenthname) {
        first.Name = str;
        first.Accuracy = score;
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
        tenth.Accuracy = ninthaccuracy;
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
        break;
      }
    } else if (score >= secondaccuracy) {
      if (str == firstname) {
        first.Name = str;
        first.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          first,
        });
        break;
      } else if (str == secondname) {
        second.Name = str;
        second.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          second,
        });
        break;
      } else if (
        str !== thirdname &&
        str !== fourthname &&
        str !== fifthname &&
        str !== sixthname &&
        str !== seventhname &&
        str !== eighthname &&
        str !== ninthname &&
        str !== tenthname
      ) {
        second.Name = str;
        second.Accuracy = score;
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
        tenth.Accuracy = ninthaccuracy;
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
        break;
      } else if (str == thirdname) {
        second.Name = str;
        second.Accuracy = score;
        third.Name = secondname;
        third.Accuracy = secondaccuracy;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
        });
        break;
      } else if (str == fourthname) {
        second.Name = str;
        second.Accuracy = score;
        third.Name = secondname;
        third.Accuracy = secondaccuracy;
        fourth.Name = thirdname;
        fourth.Accuracy = thirdaccuracy;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
        });
        break;
      } else if (str == fifthname) {
        second.Name = str;
        second.Accuracy = score;
        third.Name = secondname;
        third.Accuracy = secondaccuracy;
        fourth.Name = thirdname;
        fourth.Accuracy = thirdaccuracy;
        fifth.Name = fourthname;
        fifth.Accuracy = fourthaccuracy;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
          fifth,
        });
        break;
      } else if (str == sixthname) {
        second.Name = str;
        second.Accuracy = score;
        third.Name = secondname;
        third.Accuracy = secondaccuracy;
        fourth.Name = thirdname;
        fourth.Accuracy = thirdaccuracy;
        fifth.Name = fourthname;
        fifth.Accuracy = fourthaccuracy;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
          fifth,
          sixth,
        });
        break;
      } else if (str == seventhname) {
        second.Name = str;
        second.Accuracy = score;
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
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
          fifth,
          sixth,
          seventh,
        });
        break;
      } else if (str == eighthname) {
        second.Name = str;
        second.Accuracy = score;
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
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == ninthname) {
        second.Name = str;
        second.Accuracy = score;
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
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == tenthname) {
        second.Name = str;
        second.Accuracy = score;
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
        tenth.Accuracy = ninthaccuracy;
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
        break;
      }
    } else if (score >= thirdaccuracy) {
      if (str == firstname) {
        first.Name = secondname;
        first.Accuracy = secondaccuracy;
        second.Name = str;
        second.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
        });
        break;
      } else if (str == secondname) {
        second.Name = str;
        second.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          second,
        });
        break;
      } else if (str == thirdname) {
        third.Name = str;
        third.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          third,
        });
        break;
      } else if (
        str !== fourthname &&
        str !== fifthname &&
        str !== sixthname &&
        str !== seventhname &&
        str !== eighthname &&
        str !== ninthname &&
        str !== tenthname
      ) {
        third.Name = str;
        third.Accuracy = score;
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
        tenth.Accuracy = ninthaccuracy;
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
        break;
      } else if (str == fourthname) {
        third.Name = str;
        third.Accuracy = score;
        fourth.Name = thirdname;
        fourth.Accuracy = thirdaccuracy;
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
        });
        break;
      } else if (str == fifthname) {
        third.Name = str;
        third.Accuracy = score;
        fourth.Name = thirdname;
        fourth.Accuracy = thirdaccuracy;
        fifth.Name = fourthname;
        fifth.Accuracy = fourthaccuracy;
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
          fifth,
        });
        break;
      } else if (str == sixthname) {
        third.Name = str;
        third.Accuracy = score;
        fourth.Name = thirdname;
        fourth.Accuracy = thirdaccuracy;
        fifth.Name = fourthname;
        fifth.Accuracy = fourthaccuracy;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
          fifth,
          sixth,
        });
        break;
      } else if (str == seventhname) {
        third.Name = str;
        third.Accuracy = score;
        fourth.Name = thirdname;
        fourth.Accuracy = thirdaccuracy;
        fifth.Name = fourthname;
        fifth.Accuracy = fourthaccuracy;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
          fifth,
          sixth,
          seventh,
        });
        break;
      } else if (str == eighthname) {
        third.Name = str;
        third.Accuracy = score;
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
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == ninthname) {
        third.Name = str;
        third.Accuracy = score;
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
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == tenthname) {
        third.Name = str;
        third.Accuracy = score;
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
        tenth.Accuracy = ninthaccuracy;
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
        break;
      }
    } else if (score >= fourthaccuracy) {
      if (str == firstname) {
        first.Name = secondname;
        first.Accuracy = secondaccuracy;
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = str;
        third.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
        });
        break;
      } else if (str == secondname) {
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = str;
        third.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
        });
        break;
      } else if (str == thirdname) {
        third.Name = str;
        third.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          third,
        });
        break;
      } else if (str == fourthname) {
        fourth.Name = str;
        fourth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fourth,
        });
        break;
      } else if (
        str !== fifthname &&
        str !== sixthname &&
        str !== seventhname &&
        str !== eighthname &&
        str !== ninthname &&
        str !== tenthname
      ) {
        fourth.Name = str;
        fourth.Accuracy = score;
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
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      } else if (str == fifthname) {
        fourth.Name = str;
        fourth.Accuracy = score;
        fifth.Name = fourthname;
        fifth.Accuracy = fourthaccuracy;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
        });
        break;
      } else if (str == sixthname) {
        fourth.Name = str;
        fourth.Accuracy = score;
        fifth.Name = fourthname;
        fifth.Accuracy = fourthaccuracy;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
        });
        break;
      } else if (str == seventhname) {
        fourth.Name = str;
        fourth.Accuracy = score;
        fifth.Name = fourthname;
        fifth.Accuracy = fourthaccuracy;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
          seventh,
        });
        break;
      } else if (str == eighthname) {
        fourth.Name = str;
        fourth.Accuracy = score;
        fifth.Name = fourthname;
        fifth.Accuracy = fourthaccuracy;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == ninthname) {
        fourth.Name = str;
        fourth.Accuracy = score;
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
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == tenthname) {
        fourth.Name = str;
        fourth.Accuracy = score;
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
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      }
    } else if (score >= fifthaccuracy) {
      if (str == firstname) {
        first.Name = secondname;
        first.Accuracy = secondaccuracy;
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = str;
        fourth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
          fourth,
        });
        break;
      } else if (str == secondname) {
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = str;
        fourth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
        });
        break;
      } else if (str == thirdname) {
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = str;
        fourth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
        });
        break;
      } else if (str == fourthname) {
        fourth.Name = str;
        fourth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fourth,
        });
        break;
      } else if (str == fifthname) {
        fifth.Name = str;
        fifth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fifth,
        });
        break;
      } else if (
        str !== sixthname &&
        str !== seventhname &&
        str !== eighthname &&
        str !== ninthname &&
        str !== tenthname
      ) {
        fifth.Name = str;
        fifth.Accuracy = score;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        tenth.Name = ninthname;
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      } else if (str == sixthname) {
        fifth.Name = str;
        fifth.Accuracy = score;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
        });
        break;
      } else if (str == seventhname) {
        fifth.Name = str;
        fifth.Accuracy = score;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
          seventh,
        });
        break;
      } else if (str == eighthname) {
        fifth.Name = str;
        fifth.Accuracy = score;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == ninthname) {
        fifth.Name = str;
        fifth.Accuracy = score;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == tenthname) {
        fifth.Name = str;
        fifth.Accuracy = score;
        sixth.Name = fifthname;
        sixth.Accuracy = fifthaccuracy;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        tenth.Name = ninthname;
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      }
    } else if (score >= sixthaccuracy) {
      if (str == firstname) {
        first.Name = secondname;
        first.Accuracy = secondaccuracy;
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = str;
        fifth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
          fourth,
          fifth,
        });
        break;
      } else if (str == secondname) {
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = str;
        fifth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
          fifth,
        });
        break;
      } else if (str == thirdname) {
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = str;
        fifth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
          fifth,
        });
        break;
      } else if (str == fourthname) {
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = str;
        fifth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
        });
        break;
      } else if (str == fifthname) {
        fifth.Name = str;
        fifth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fifth,
        });
        break;
      } else if (str == sixthname) {
        sixth.Name = str;
        sixth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          sixth,
        });
        break;
      } else if (
        str !== seventhname &&
        str !== eighthname &&
        str !== ninthname &&
        str !== tenthname
      ) {
        sixth.Name = str;
        sixth.Accuracy = score;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        tenth.Name = ninthname;
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          sixth,
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      } else if (str == seventhname) {
        sixth.Name = str;
        sixth.Accuracy = score;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        myFBref.child("stats/leaderboard").update({
          sixth,
          seventh,
        });
      } else if (str == eighthname) {
        sixth.Name = str;
        sixth.Accuracy = score;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        myFBref.child("stats/leaderboard").update({
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == ninthname) {
        sixth.Name = str;
        sixth.Accuracy = score;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        myFBref.child("stats/leaderboard").update({
          sixth,
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == tenthname) {
        sixth.Name = str;
        sixth.Accuracy = score;
        seventh.Name = sixthname;
        seventh.Accuracy = sixthaccuracy;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        tenth.Name = ninthname;
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          sixth,
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      }
    } else if (score >= seventhaccuracy) {
      if (str == firstname) {
        first.Name = secondname;
        first.Accuracy = secondaccuracy;
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = str;
        sixth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
          fourth,
          fifth,
          sixth,
        });
        break;
      } else if (str == secondname) {
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = str;
        sixth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
          fifth,
          sixth,
        });
        break;
      } else if (str == thirdname) {
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = str;
        sixth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
          fifth,
          sixth,
        });
        break;
      } else if (str == fourthname) {
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = str;
        sixth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
        });
        break;
      } else if (str == fifthname) {
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = str;
        sixth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
        });
        break;
      } else if (str == sixthname) {
        sixth.Name = str;
        sixth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          sixth,
        });
        break;
      } else if (str == seventhname) {
        seventh.Name = str;
        seventh.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          seventh,
        });
        break;
      } else if (str !== eighthname && str !== ninthname && str !== tenthname) {
        seventh.Name = str;
        seventh.Accuracy = score;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        tenth.Name = ninthname;
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      } else if (str == eighthname) {
        seventh.Name = str;
        seventh.Accuracy = score;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        myFBref.child("stats/leaderboard").update({
          seventh,
          eighth,
        });
        break;
      } else if (str == ninthname) {
        seventh.Name = str;
        seventh.Accuracy = score;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        myFBref.child("stats/leaderboard").update({
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == tenthname) {
        seventh.Name = str;
        seventh.Accuracy = score;
        eighth.Name = seventhname;
        eighth.Accuracy = seventhaccuracy;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        tenth.Name = ninthname;
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      }
    } else if (score >= eighthaccuracy) {
      if (str == firstname) {
        first.Name = secondname;
        first.Accuracy = secondaccuracy;
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = str;
        seventh.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
          fourth,
          fifth,
          sixth,
          seventh,
        });
        break;
      } else if (str == secondname) {
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = str;
        seventh.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
          fifth,
          sixth,
          seventh,
        });
        break;
      } else if (str == thirdname) {
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = str;
        seventh.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
          fifth,
          sixth,
          seventh,
        });
        break;
      } else if (str == fourthname) {
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = str;
        seventh.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
          seventh,
        });
        break;
      } else if (str == fifthname) {
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = str;
        seventh.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
          seventh,
        });
        break;
      } else if (str == sixthname) {
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = str;
        seventh.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          sixth,
          seventh,
        });
        break;
      }
      if (str == seventhname) {
        seventh.Name = str;
        seventh.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          seventh,
        });
        break;
      } else if (str == eighthname) {
        eighth.Name = str;
        eighth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          eighth,
        });
        break;
      } else if (str !== ninthname && str !== tenthname) {
        eighth.Name = str;
        eighth.Accuracy = score;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        tenth.Name = ninthname;
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          eighth,
          ninth,
          tenth,
        });
        break;
      } else if (str == ninthname) {
        eighth.Name = str;
        eighth.Accuracy = score;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        myFBref.child("stats/leaderboard").update({
          eighth,
          ninth,
        });
        break;
      } else if (str == tenthname) {
        eighth.Name = str;
        eighth.Accuracy = score;
        ninth.Name = eighthname;
        ninth.Accuracy = eighthaccuracy;
        tenth.Name = ninthname;
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          eighth,
          ninth,
          tenth,
        });
        break;
      }
    } else if (score >= ninthaccuracy) {
      if (str == firstname) {
        first.Name = secondname;
        first.Accuracy = secondaccuracy;
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = str;
        eighth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          first,
          second,
          third,
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == secondname) {
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = str;
        eighth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == thirdname) {
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = str;
        eighth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == fourthname) {
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = str;
        eighth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == fifthname) {
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = str;
        eighth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == sixthname) {
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = str;
        eighth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          sixth,
          seventh,
          eighth,
        });
        break;
      } else if (str == seventhname) {
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = str;
        eighth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          seventh,
          eighth,
        });
        break;
      } else if (str == eighthname) {
        eighth.Name = str;
        eighth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          eighth,
        });
        break;
      } else if (str == ninthname) {
        ninth.Name = str;
        ninth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          ninth,
        });
        break;
      } else {
        ninth.Name = str;
        ninth.Accuracy = score;
        tenth.Name = ninthname;
        tenth.Accuracy = ninthaccuracy;
        myFBref.child("stats/leaderboard").update({
          ninth,
          tenth,
        });
        break;
      }
    } else if (score >= tenthaccuracy) {
      if (str == firstname) {
        first.Name = secondname;
        first.Accuracy = secondaccuracy;
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = str;
        ninth.Accuracy = score;
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
        });
        break;
      } else if (str == secondname) {
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = str;
        ninth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          second,
          third,
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == thirdname) {
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = str;
        ninth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          third,
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == fourthname) {
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = str;
        ninth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == fifthname) {
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = str;
        ninth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == sixthname) {
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = str;
        ninth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          sixth,
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == seventhname) {
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = str;
        ninth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          seventh,
          eighth,
          ninth,
        });
        break;
      } else if (str == eighthname) {
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = str;
        ninth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          eighth,
          ninth,
        });
        break;
      } else if (str == ninthname) {
        ninth.Name = str;
        ninth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          ninth,
        });
        break;
      } else {
        tenth.Name = str;
        tenth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          tenth,
        });
        break;
      }
    } else if (score === tenthaccuracy) {
      if (str == firstname) {
        first.Name = secondname;
        first.Accuracy = secondaccuracy;
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = tenthname;
        ninth.Accuracy = tenthaccuracy;
        tenth.Name = str;
        tenth.Accuracy = score;
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
        break;
      } else if (str == secondname) {
        second.Name = thirdname;
        second.Accuracy = thirdaccuracy;
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = tenthname;
        ninth.Accuracy = tenthaccuracy;
        tenth.Name = str;
        tenth.Accuracy = score;
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
        break;
      } else if (str == thirdname) {
        third.Name = fourthname;
        third.Accuracy = fourthaccuracy;
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = tenthname;
        ninth.Accuracy = tenthaccuracy;
        tenth.Name = str;
        tenth.Accuracy = score;
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
        break;
      } else if (str == fourthname) {
        fourth.Name = fifthname;
        fourth.Accuracy = fifthaccuracy;
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = tenthname;
        ninth.Accuracy = tenthaccuracy;
        tenth.Name = str;
        tenth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fourth,
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      } else if (str == fifthname) {
        fifth.Name = sixthname;
        fifth.Accuracy = sixthaccuracy;
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = tenthname;
        ninth.Accuracy = tenthaccuracy;
        tenth.Name = str;
        tenth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          fifth,
          sixth,
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      } else if (str == sixthname) {
        sixth.Name = seventhname;
        sixth.Accuracy = seventhaccuracy;
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = tenthname;
        ninth.Accuracy = tenthaccuracy;
        tenth.Name = str;
        tenth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          sixth,
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      } else if (str == seventhname) {
        seventh.Name = eighthname;
        seventh.Accuracy = eighthaccuracy;
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = tenthname;
        ninth.Accuracy = tenthaccuracy;
        tenth.Name = str;
        tenth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          seventh,
          eighth,
          ninth,
          tenth,
        });
        break;
      } else if (str == eighthname) {
        eighth.Name = ninthname;
        eighth.Accuracy = ninthaccuracy;
        ninth.Name = tenthname;
        ninth.Accuracy = tenthaccuracy;
        tenth.Name = str;
        tenth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          eighth,
          ninth,
          tenth,
        });
        break;
      } else if (str == ninthname) {
        ninth.Name = tenthname;
        ninth.Accuracy = tenthaccuracy;
        tenth.Name = str;
        tenth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          ninth,
          tenth,
        });
        break;
      } else if (str == tenthname) {
        tenth.Name = str;
        tenth.Accuracy = score;
        myFBref.child("stats/leaderboard").update({
          tenth,
        });
        break;
      }
    } else if (str == firstname && score < tenthaccuracy) {
      first.Name = secondname;
      first.Accuracy = secondaccuracy;
      second.Name = thirdname;
      second.Accuracy = thirdaccuracy;
      third.Name = fourthname;
      third.Accuracy = fourthaccuracy;
      fourth.Name = fifthname;
      fourth.Accuracy = fifthaccuracy;
      fifth.Name = sixthname;
      fifth.Accuracy = sixthaccuracy;
      sixth.Name = seventhname;
      sixth.Accuracy = seventhaccuracy;
      seventh.Name = eighthname;
      seventh.Accuracy = eighthaccuracy;
      eighth.Name = ninthname;
      eighth.Accuracy = ninthaccuracy;
      ninth.Name = tenthname;
      ninth.Accuracy = tenthaccuracy;
      tenth.Name = "KidKalcExtra";
      tenth.Accuracy = tenthaccuracy - 1;
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
      break;
    } else if (str == secondname && score < tenthaccuracy) {
      second.Name = thirdname;
      second.Accuracy = thirdaccuracy;
      third.Name = fourthname;
      third.Accuracy = fourthaccuracy;
      fourth.Name = fifthname;
      fourth.Accuracy = fifthaccuracy;
      fifth.Name = sixthname;
      fifth.Accuracy = sixthaccuracy;
      sixth.Name = seventhname;
      sixth.Accuracy = seventhaccuracy;
      seventh.Name = eighthname;
      seventh.Accuracy = eighthaccuracy;
      eighth.Name = ninthname;
      eighth.Accuracy = ninthaccuracy;
      ninth.Name = tenthname;
      ninth.Accuracy = tenthaccuracy;
      tenth.Name = "KidKalcExtra";
      tenth.Accuracy = tenthaccuracy - 1;
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
      break;
    } else if (str == thirdname && score < tenthaccuracy) {
      third.Name = fourthname;
      third.Accuracy = fourthaccuracy;
      fourth.Name = fifthname;
      fourth.Accuracy = fifthaccuracy;
      fifth.Name = sixthname;
      fifth.Accuracy = sixthaccuracy;
      sixth.Name = seventhname;
      sixth.Accuracy = seventhaccuracy;
      seventh.Name = eighthname;
      seventh.Accuracy = eighthaccuracy;
      eighth.Name = ninthname;
      eighth.Accuracy = ninthaccuracy;
      ninth.Name = tenthname;
      ninth.Accuracy = tenthaccuracy;
      tenth.Name = "KidKalcExtra";
      tenth.Accuracy = tenthaccuracy - 1;
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
      break;
    } else if (str == fourthname && score < tenthaccuracy) {
      fourth.Name = fifthname;
      fourth.Accuracy = fifthaccuracy;
      fifth.Name = sixthname;
      fifth.Accuracy = sixthaccuracy;
      sixth.Name = seventhname;
      sixth.Accuracy = seventhaccuracy;
      seventh.Name = eighthname;
      seventh.Accuracy = eighthaccuracy;
      eighth.Name = ninthname;
      eighth.Accuracy = ninthaccuracy;
      ninth.Name = tenthname;
      ninth.Accuracy = tenthaccuracy;
      tenth.Name = "KidKalcExtra";
      tenth.Accuracy = tenthaccuracy - 1;
      myFBref.child("stats/leaderboard").update({
        fourth,
        fifth,
        sixth,
        seventh,
        eighth,
        ninth,
        tenth,
      });
      break;
    } else if (str == fifthname && score < tenthaccuracy) {
      fifth.Name = sixthname;
      fifth.Accuracy = sixthaccuracy;
      sixth.Name = seventhname;
      sixth.Accuracy = seventhaccuracy;
      seventh.Name = eighthname;
      seventh.Accuracy = eighthaccuracy;
      eighth.Name = ninthname;
      eighth.Accuracy = ninthaccuracy;
      ninth.Name = tenthname;
      ninth.Accuracy = tenthaccuracy;
      tenth.Name = "KidKalcExtra";
      tenth.Accuracy = tenthaccuracy - 1;
      myFBref.child("stats/leaderboard").update({
        fifth,
        sixth,
        seventh,
        eighth,
        ninth,
        tenth,
      });
      break;
    } else if (str == sixthname && score < tenthaccuracy) {
      sixth.Name = seventhname;
      sixth.Accuracy = seventhaccuracy;
      seventh.Name = eighthname;
      seventh.Accuracy = eighthaccuracy;
      eighth.Name = ninthname;
      eighth.Accuracy = ninthaccuracy;
      ninth.Name = tenthname;
      ninth.Accuracy = tenthaccuracy;
      tenth.Name = "KidKalcExtra";
      tenth.Accuracy = tenthaccuracy - 1;
      myFBref.child("stats/leaderboard").update({
        sixth,
        seventh,
        eighth,
        ninth,
        tenth,
      });
      break;
    } else if (str == seventhname && score < tenthaccuracy) {
      seventh.Name = eighthname;
      seventh.Accuracy = eighthaccuracy;
      eighth.Name = ninthname;
      eighth.Accuracy = ninthaccuracy;
      ninth.Name = tenthname;
      ninth.Accuracy = tenthaccuracy;
      tenth.Name = "KidKalcExtra";
      tenth.Accuracy = tenthaccuracy - 1;
      myFBref.child("stats/leaderboard").update({
        seventh,
        eighth,
        ninth,
        tenth,
      });
      break;
    } else if (str == eighthname && score < tenthaccuracy) {
      eighth.Name = ninthname;
      eighth.Accuracy = ninthaccuracy;
      ninth.Name = tenthname;
      ninth.Accuracy = tenthaccuracy;
      tenth.Name = "KidKalcExtra";
      tenth.Accuracy = tenthaccuracy - 1;
      myFBref.child("stats/leaderboard").update({
        eighth,
        ninth,
        tenth,
      });
      break;
    } else if (str == ninthname && score < tenthaccuracy) {
      ninth.Name = tenthname;
      ninth.Accuracy = tenthaccuracy;
      tenth.Name = "KidKalcExtra";
      tenth.Accuracy = tenthaccuracy - 1;
      myFBref.child("stats/leaderboard").update({
        ninth,
        tenth,
      });
      break;
    } else if (str == tenthname && score < tenthaccuracy) {
      tenth.Name = "KidKalcExtra";
      tenth.Accuracy = tenthaccuracy - 1;
      myFBref.child("stats/leaderboard").update({
        tenth,
      });
      break;
    } else {
      break;
    }
  }
  if (
    str == firstname ||
    str == secondname ||
    str == thirdname ||
    str == fourthname ||
    str == fifthname ||
    str == sixthname ||
    str == seventhname ||
    str == eighthname ||
    str == ninthname ||
    str == tenthname
  ) {
    leaderboardcheck = true;
    Badges.BadgeLeaderboard = leaderboardcheck;
    myFBref.child("stats/" + useruid).update({
      Badges,
    });
  } else {
    leaderboardcheck = false;
    Badges.BadgeLeaderboard = leaderboardcheck;
    myFBref.child("stats/" + useruid).update({
      Badges,
    });
  }
}

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

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  var loginstreakdate = stats["Streak"].LoginStreakDate;
  var loginstreakcount = stats["Streak"].LoginStreak;

  if (loginstreakcount == undefined) {
    loginstreakdate = today;
    loginstreakcount = 0;
  } else {
    day1 = new Date(loginstreakdate);
    day2 = new Date(today);
    Difference_In_Time = day2.getTime() - day1.getTime();
    Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    loginstreakdate = today;
    if (Difference_In_Days == 1) {
      loginstreakcount += 1;
      if (loginstreakcount >= 3) {
        document.getElementById("loginstreak").innerHTML = loginstreakcount;
        document.getElementById("firemoji").innerHTML = "🔥";
      } else {
        document.getElementById("loginstreak").innerHTML = loginstreakcount;
      }
    } else {
      if (loginstreakcount >= 3) {
        document.getElementById("loginstreak").innerHTML = loginstreakcount;
        document.getElementById("firemoji").innerHTML = "🔥";
      } else {
        document.getElementById("loginstreak").innerHTML = loginstreakcount;
      }
    }
  }
  Streak.LoginStreakDate = loginstreakdate;
  Streak.LoginStreak = loginstreakcount;
  myFBref.child("stats/" + useruid).update({
    Streak,
  });

  var badge1000check = stats["Badges"].Badge1000Points;
  var badge10000check = stats["Badges"].Badge10000Points;
  var badge100check = stats["Badges"].Badge100Total;
  var badge1check = stats["Badges"].BadgeFirstPlace;
  var badge2check = stats["Badges"].BadgeSecondPlace;
  var badge3check = stats["Badges"].BadgeThirdPlace;
  var badge1000totalcheck = stats["Badges"].Badge1000Total;
  var badgestreak1check = stats["Badges"].BadgeStreak1;
  var badgestreak2check = stats["Badges"].BadgeStreak2;
  var badgestreak3check = stats["Badges"].BadgeStreak3;
  var badgestreak4check = stats["Badges"].BadgeStreak4;

  if (badge1000check == undefined || badge1000check == false) {
    if (score < 1000) {
      badge1000 = false;
      badge10000 = false;
    } else if (score >= 1000) {
      badge1000 = true;
    }
  } else {
    badge1000 = true;
  }
  if (badge10000check == undefined || badge10000check == false) {
    if (score >= 1000 && score < 10000) {
      badge10000 = false;
    } else if (score >= 10000) {
      badge10000 = true;
    }
  } else {
    badge10000 = true;
  }
  if (badge100check == undefined || badge100check == false) {
    if (total < 100) {
      badge100 = false;
      badge1000total = false;
    } else if (total >= 100) {
      badge100 = true;
    }
  } else {
    badge100 = true;
  }
  if (badge1000totalcheck == undefined || badge1000totalcheck == false) {
    if (total < 1000) {
      badge1000total = false;
    } else if (total >= 1000) {
      badge1000total = true;
    }
  } else {
    badge1000total = true;
  }
  if (badge1check == undefined || badge1check == false) {
    badge1 = false;
  } else {
    badge1 = true;
  }
  if (badge2check == undefined || badge2check == false) {
    badge2 = false;
  } else {
    badge2 = true;
  }
  if (badge3check == undefined || badge3check == false) {
    badge3 = false;
  } else {
    badge3 = true;
  }
  if (badgestreak1check == undefined || badgestreak1check == false) {
    if (loginstreakcount < 7) {
      badgestreak1 = false;
      badgestreak2 = false;
      badgestreak3 = false;
      badgestreak4 = false;
    } else if (loginstreakcount >= 7) {
        badgestreak1 = true;
    }
  } else {
    badgestreak1 = true;
  }
  if (badgestreak2check == undefined || badgestreak2check == false) {
    if (loginstreakcount < 28) {
      badgestreak2 = false;
      badgestreak3 = false;
      badgestreak4 = false;
    } else if (loginstreakcount >= 28) {
        badgestreak2 = true;
    }
  } else {
    badgestreak2 = true;
  }
  if (badgestreak3check == undefined || badgestreak3check == false) {
    if (loginstreakcount < 182) {
      badgestreak3 = false;
      badgestreak4 = false;
    } else if (loginstreakcount >= 182) {
        badgestreak3 = true;
    }
  } else {
    badgestreak3 = true;
  }
  if (badgestreak4check == undefined || badgestreak4check == false) {
    if (loginstreakcount < 365) {
      badgestreak4 = false;
    } else if (loginstreakcount >= 365) {
        badgestreak4 = true;
    }
  } else {
    badgestreak4 = true;
  }
  Badges.Badge1000Points = badge1000;
  Badges.Badge10000Points = badge10000;
  Badges.Badge100Total = badge100;
  Badges.BadgeFirstPlace = badge1;
  Badges.BadgeSecondPlace = badge2;
  Badges.BadgeThirdPlace = badge3;
  Badges.BadgeLeaderboard = leaderboardcheck;
  Badges.Badge1000Total = badge1000total;
  Badges.Streak1 = badgestreak1;
  Badges.Streak2 = badgestreak2;
  Badges.Streak3 = badgestreak3;
  Badges.Streak4 = badgestreak4;
  myFBref.child("stats/" + useruid).update({
    Badges,
  });

  document.getElementById("totalquestions").innerHTML = total;
  document.getElementById("totalscore").innerHTML = score;
  //document.getElementById("totalcoins").innerHTML = coins;
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
function badges() {
  window.location.href = "badges";
}

first.Name = str;
first.Accuracy = score;
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
tenth.Accuracy = ninthaccuracy;

var datecount = 1;

var dates = [
  "10/1/2020 12:1 AM EST",
  "11/1/2020 12:1 AM EST",
  "12/1/2020 12:1 AM EST",
  "01/1/2021 12:1 AM EST",
];

var end = new Date(dates[datecount]);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function getESTOffset() {
  return new Date().getTimezoneOffset() - end.getTimezoneOffset();
}

function showRemaining() {
  var now = new Date();
  var distance = end - now - getESTOffset() * _hour;
  if (distance < 0) {
    end = new Date(dates[1]);
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor(distance / _hour);
  var minutes = Math.floor(distance / _minute);
  if (days > 0) {
    document.getElementById("time").innerHTML = days;
    document.getElementById("end").innerHTML = " Days";
  } else if (hours > 0) {
    document.getElementById("time").innerHTML = hours;
    document.getElementById("end").innerHTML = " Hours";
  } else {
    document.getElementById("time").innerHTML = minutes;
    document.getElementById("end").innerHTML = " Minutes";
  }
}

timer = setInterval(showRemaining, 1000);

var isSafari =
  navigator.vendor &&
  navigator.vendor.indexOf("Apple") > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf("CriOS") == -1 &&
  navigator.userAgent.indexOf("FxiOS") == -1;

if (isSafari === true) {
  $("#icon").remove();
  document.getElementById("topleftitle").innerHTML = "KidKalc";
}
