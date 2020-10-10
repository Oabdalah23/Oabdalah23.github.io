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
      var badge1000total = stats[k].Badge1000Total; 
      var leaderboardcheck = stats[k].BadgeLeaderboard;
      var badgestreak1 = stats[k].Streak1;
      var badgestreak2 = stats[k].Streak2;
      var badgestreak3 = stats[k].Streak3;
      var badgestreak4 = stats[k].Streak4;
    }
    if(badge1000 == true)
    {
        document.getElementById('soul-badge').style.opacity = '1';
    }
    else {
      document.getElementById('soul-badge').style.opacity = '30%';
    }
    if(badge10000 == true)
    {
        document.getElementById('volcano-badge').style.opacity = '1';
    }
    else {
      document.getElementById('volcano-badge').style.opacity = '30%';
    }
    if(badge100 == true)
    {
        document.getElementById('marsh-badge').style.opacity = '1';
    }
    else {
      document.getElementById('marsh-badge').style.opacity = '30%';
    }
    if(badge1 == true)
    {
        document.getElementById('boulder-badge').style.opacity = '1';
    }
    else {
      document.getElementById('boulder-badge').style.opacity = '30%';
    }
    if(badge2 == true)
    {
        document.getElementById('cascade-badge').style.opacity = '1';
    }
    else {
      document.getElementById('cascade-badge').style.opacity = '30%';
    }
    if(badge3 == true)
    {
        document.getElementById('thunder-badge').style.opacity = '1';
    }
    else {
      document.getElementById('thunder-badge').style.opacity = '30%';
    }
    if(badge1000total == true)
    {
        document.getElementById('mercury-badge').style.opacity = '1';
    }
    else {
      document.getElementById('mercury-badge').style.opacity = '30%';
    }
    if(leaderboardcheck == true)
    {
        document.getElementById('rain-badge').style.opacity = '1';
    }
    else {
      document.getElementById('rain-badge').style.opacity = '30%';
    }
    if(badgestreak1 == true)
    {
        document.getElementById('streak1-badge').style.opacity = '1';
    } 
    else {
      document.getElementById('streak1-badge').style.opacity = '30%';
    }
    if(badgestreak2 == true)
    {
        document.getElementById('streak2-badge').style.opacity = '1';
    }
    else {
      document.getElementById('streak2-badge').style.opacity = '30%';
    }
    if(badgestreak3 == true)
    {
        document.getElementById('streak3-badge').style.opacity = '1';
    }
    else {
      document.getElementById('streak3-badge').style.opacity = '30%';
    }
    if(badgestreak4 == true)
    {
        document.getElementById('streak4-badge').style.opacity = '1';
    }
    else {
      document.getElementById('streak4-badge').style.opacity = '30%';
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


var slideIndex = 0;
var slideIndexCurrent = 0;
showSlides();
//showSlidesCurrent(slideIndexCurrent);

function currentSlide(n) {
  showSlidesCurrent(slideIndexCurrent = n);

}


/*** CURRENT SLIDE on click ***/
function currentSlide(n) {
  showSlidesCurrent(slideIndexCurrent = n);

}

function showSlidesCurrent(n) {
  //var slideIndex = 1;
  var i;
  var slides = document.getElementsByClassName("wrapper");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexCurrent = 1}   

  if (n < 0) {slideIndexCurrent = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexCurrent-1].style.display = "block";  
  dots[slideIndexCurrent-1].className += " active";
  slideIndexCurrent++;
}


/*** SHOW SLIDE with timer ***/
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("wrapper");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//  showSlidesCurrent(slideIndexCurrent);
