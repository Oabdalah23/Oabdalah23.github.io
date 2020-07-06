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
    ref = database.ref('stats');
    ref.on("value", gotData);
  } else {
    username = "NotSignedIn";
  }
});


function gotData(data) {
  var stats = data.val();
  var keys = Object.keys(stats);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var TotalAccuracy = stats[k].TotalAccuracy;
    var accuracy = TotalAccuracy.Accuracy;
    var name = TotalAccuracy.Name;
    document.getElementById('usernamescore'+[i+1]).innerHTML = name;
    document.getElementById('score'+[i+1]).innerHTML = accuracy;
    var dateSpan = document.createElement('span')
    dateSpan.innerHTML = "Accuracy";
    var span = document.getElementById('score'+[i+1]);
    span.appendChild(dateSpan);

  }
}
