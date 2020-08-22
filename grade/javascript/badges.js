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

var str = "";

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
    ref = database.ref("stats/" + useruid);
    ref.on("value", gotData);
  } else {
    username = "NotSignedIn";
  }
});

function gotData(data) {
    
    var stats = data.val();
    var keys = Object.keys(stats);
    for (var i = 0; i < keys.length; i++)
    {
      var k = 'Badges';
      var badge1000 = stats[k].Badge1000Points;
      var badge10000 = stats[k].Badge10000Points;
      var badge100 = stats[k].Badge100Total;
      var badge1 = stats[k].BadgeFirstPlace;
      var badge2 = stats[k].BadgeSecondPlace;
      var badge3 = stats[k].BadgeThirdPlace; 
    }
    console.log(badge100);
    if(badge1000 == true)
    {
        document.getElementById('soul-badge').style.opacity = '1';
    }
    if(badge10000 == true)
    {
        document.getElementById('volcano-badge').style.opacity = '1';
    }
    if(badge100 == true)
    {
        document.getElementById('marsh-badge').style.opacity = '1';
    }
    if(badge1 == true)
    {
        document.getElementById('boulder-badge').style.opacity = '1';
    }
    if(badge2 == true)
    {
        document.getElementById('cascade-badge').style.opacity = '1';
    }
    if(badge3 == true)
    {
        document.getElementById('thunder-badge').style.opacity = '1';
    }
    $("#loader").fadeOut();
  }

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

var isSafari =
  navigator.vendor &&
  navigator.vendor.indexOf("Apple") > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf("CriOS") == -1 &&
  navigator.userAgent.indexOf("FxiOS") == -1;

if (isSafari === true) {
  $("#icon").remove();
  document.getElementById("spana").innerHTML = "A";
}

function back() {
  setTimeout(redirect, 1);
}

function redirect() {
  location.replace("https://KidKalc.com");
}
