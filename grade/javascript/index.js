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
var user;
var ref;
var useruid;
var username;
var total = 0;
var score = 0;
var coins = 0;
var TotalAccuracy = {};
var str = '';

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    user = firebase.auth().currentUser;
    var email_id = user.email;
    str = email_id.split("@");
    str.pop();

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
    ref = database.ref(useruid);
    ref.on('value', gotData)

  } else {
    username = "NotSignedIn"

    document
      .getElementById("account")
      .setAttribute("onClick", "location.href='account';");

    document.getElementById("account").style.animation = "moema 2s infinite";
  }
});

function gotData(data) {
  var stats = data.val();
  var keys = Object.keys(stats);
  for (var i = 0; i < keys.length; i++)
  {
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
    total = 0;
    score = 0;
    coins = 0;
    if (total0firebase != undefined){
      total += total0firebase;
    }
    if (total1firebase != undefined){
      total += total1firebase;
    }
    if (total2firebase != undefined){
      total += total2firebase;
    }
    if (total3firebase != undefined){
      total += total3firebase;
    }
    if (total4firebase != undefined){
      total += total4firebase;
    }
    if (total5firebase != undefined){
      total += total5firebase;
    }
    if (score0firebase != undefined){
      score += score0firebase;
    }
    if (score1firebase != undefined){
      score += score1firebase;
    }
    if (score2firebase != undefined){
      score += score2firebase;
    }
    if (score3firebase != undefined){
      score += score3firebase;
    }
    if (score4firebase != undefined){
      score += score4firebase;
    }
    if (score5firebase != undefined){
      score += score5firebase;
    }
    if (coinsfirebase != undefined){
      coins = coinsfirebase;
    }
  }
    TotalAccuracy.Accuracy = Math.round(100*(score/total))/100;
    TotalAccuracy.Name = str;
    document.getElementById('accuracy').innerHTML = Math.round(100*(score/total))/100;
    myFBref.child(useruid).update({
      TotalAccuracy
    })
  document.getElementById('totalquestions').innerHTML = total;
  document.getElementById('totalscore').innerHTML = score;
  document.getElementById('totalcoins').innerHTML = coins;
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
