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
    leaderboardref2 = database.ref("stats/leaderboard2");
    leaderboardref2.on("value", gotLeaderboardData2);
    leaderboardref3 = database.ref("stats/leaderboard3");
    leaderboardref3.on("value", gotLeaderboardData3);
    leaderboardref4 = database.ref("stats/leaderboard4");
    leaderboardref4.on("value", gotLeaderboardData4);
    leaderboardref5 = database.ref("stats/leaderboard5");
    leaderboardref5.on("value", gotLeaderboardData5);
    leaderboardref6 = database.ref("stats/leaderboard6");
    leaderboardref6.on("value", gotLeaderboardData6);
    leaderboardref7 = database.ref("stats/leaderboard7");
    leaderboardref7.on("value", gotLeaderboardData7);
    leaderboardref8 = database.ref("stats/leaderboard8");
    leaderboardref8.on("value", gotLeaderboardData8);
  } else {
    username = "NotSignedIn";
  }
});

function gotData(data) {
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
  if (firstname == str) {
    document.getElementById("first").style.backgroundColor = "#0e1642";
  } else if (secondname == str) {
    document.getElementById("second").style.backgroundColor = "#0e1642";
  } else if (thirdname == str) {
    document.getElementById("third").style.backgroundColor = "#0e1642";
  } else if (fourthname == str) {
    document.getElementById("fourth").style.backgroundColor = "#0e1642";
  } else if (fifthname == str) {
    document.getElementById("fifth").style.backgroundColor = "#0e1642";
  } else if (sixthname == str) {
    document.getElementById("sixth").style.backgroundColor = "#0e1642";
  } else if (seventhname == str) {
    document.getElementById("seventh").style.backgroundColor = "#0e1642";
  } else if (eighthname == str) {
    document.getElementById("eighth").style.backgroundColor = "#0e1642";
  } else if (ninthname == str) {
    document.getElementById("ninth").style.backgroundColor = "#0e1642";
  } else if (tenthname == str) {
    document.getElementById("tenth").style.backgroundColor = "#0e1642";
  }
  $("#loader").fadeOut();
}

function gotLeaderboardData2(data) {
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
  document.getElementById("usernamescore21").innerHTML = firstname;
  document.getElementById("score21").innerHTML = firstaccuracy;
  document.getElementById("usernamescore22").innerHTML = secondname;
  document.getElementById("score22").innerHTML = secondaccuracy;
  document.getElementById("usernamescore23").innerHTML = thirdname;
  document.getElementById("score23").innerHTML = thirdaccuracy;
  document.getElementById("usernamescore24").innerHTML = fourthname;
  document.getElementById("score24").innerHTML = fourthaccuracy;
  document.getElementById("usernamescore25").innerHTML = fifthname;
  document.getElementById("score25").innerHTML = fifthaccuracy;
  document.getElementById("usernamescore26").innerHTML = sixthname;
  document.getElementById("score26").innerHTML = sixthaccuracy;
  document.getElementById("usernamescore27").innerHTML = seventhname;
  document.getElementById("score27").innerHTML = seventhaccuracy;
  document.getElementById("usernamescore28").innerHTML = eighthname;
  document.getElementById("score28").innerHTML = eighthaccuracy;
  document.getElementById("usernamescore29").innerHTML = ninthname;
  document.getElementById("score29").innerHTML = ninthaccuracy;
  document.getElementById("usernamescore210").innerHTML = tenthname;
  document.getElementById("score210").innerHTML = tenthaccuracy;
  for (var i = 0; i < 10; i++) {
    var dateSpan = document.createElement("span");
    dateSpan.innerHTML = "Questions";
    var span = document.getElementById("score2" + [i + 1]);
    span.appendChild(dateSpan);
  }
  if (firstname == str) {
    document.getElementById("2first").style.backgroundColor = "#0e1642";
  } else if (secondname == str) {
    document.getElementById("2second").style.backgroundColor = "#0e1642";
  } else if (thirdname == str) {
    document.getElementById("2third").style.backgroundColor = "#0e1642";
  } else if (fourthname == str) {
    document.getElementById("2fourth").style.backgroundColor = "#0e1642";
  } else if (fifthname == str) {
    document.getElementById("2fifth").style.backgroundColor = "#0e1642";
  } else if (sixthname == str) {
    document.getElementById("2sixth").style.backgroundColor = "#0e1642";
  } else if (seventhname == str) {
    document.getElementById("2seventh").style.backgroundColor = "#0e1642";
  } else if (eighthname == str) {
    document.getElementById("2eighth").style.backgroundColor = "#0e1642";
  } else if (ninthname == str) {
    document.getElementById("2ninth").style.backgroundColor = "#0e1642";
  } else if (tenthname == str) {
    document.getElementById("2tenth").style.backgroundColor = "#0e1642";
  }
  $("#loader").fadeOut();
}

function gotLeaderboardData3(data) {
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
  document.getElementById("usernamescore31").innerHTML = firstname;
  document.getElementById("score31").innerHTML = firstaccuracy;
  document.getElementById("usernamescore32").innerHTML = secondname;
  document.getElementById("score32").innerHTML = secondaccuracy;
  document.getElementById("usernamescore33").innerHTML = thirdname;
  document.getElementById("score33").innerHTML = thirdaccuracy;
  document.getElementById("usernamescore34").innerHTML = fourthname;
  document.getElementById("score34").innerHTML = fourthaccuracy;
  document.getElementById("usernamescore35").innerHTML = fifthname;
  document.getElementById("score35").innerHTML = fifthaccuracy;
  document.getElementById("usernamescore36").innerHTML = sixthname;
  document.getElementById("score36").innerHTML = sixthaccuracy;
  document.getElementById("usernamescore37").innerHTML = seventhname;
  document.getElementById("score37").innerHTML = seventhaccuracy;
  document.getElementById("usernamescore38").innerHTML = eighthname;
  document.getElementById("score38").innerHTML = eighthaccuracy;
  document.getElementById("usernamescore39").innerHTML = ninthname;
  document.getElementById("score39").innerHTML = ninthaccuracy;
  document.getElementById("usernamescore310").innerHTML = tenthname;
  document.getElementById("score310").innerHTML = tenthaccuracy;
  for (var i = 0; i < 10; i++) {
    var dateSpan = document.createElement("span");
    dateSpan.innerHTML = "Points";
    var span = document.getElementById("score3" + [i + 1]);
    span.appendChild(dateSpan);
  }
  if (firstname == str) {
    document.getElementById("3first").style.backgroundColor = "#0e1642";
  } else if (secondname == str) {
    document.getElementById("3second").style.backgroundColor = "#0e1642";
  } else if (thirdname == str) {
    document.getElementById("3third").style.backgroundColor = "#0e1642";
  } else if (fourthname == str) {
    document.getElementById("3fourth").style.backgroundColor = "#0e1642";
  } else if (fifthname == str) {
    document.getElementById("3fifth").style.backgroundColor = "#0e1642";
  } else if (sixthname == str) {
    document.getElementById("3sixth").style.backgroundColor = "#0e1642";
  } else if (seventhname == str) {
    document.getElementById("3seventh").style.backgroundColor = "#0e1642";
  } else if (eighthname == str) {
    document.getElementById("3eighth").style.backgroundColor = "#0e1642";
  } else if (ninthname == str) {
    document.getElementById("3ninth").style.backgroundColor = "#0e1642";
  } else if (tenthname == str) {
    document.getElementById("3tenth").style.backgroundColor = "#0e1642";
  }
  $("#loader").fadeOut();
}

function gotLeaderboardData4(data) {
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
  document.getElementById("usernamescore41").innerHTML = firstname;
  document.getElementById("score41").innerHTML = firstaccuracy;
  document.getElementById("usernamescore42").innerHTML = secondname;
  document.getElementById("score42").innerHTML = secondaccuracy;
  document.getElementById("usernamescore43").innerHTML = thirdname;
  document.getElementById("score43").innerHTML = thirdaccuracy;
  document.getElementById("usernamescore44").innerHTML = fourthname;
  document.getElementById("score44").innerHTML = fourthaccuracy;
  document.getElementById("usernamescore45").innerHTML = fifthname;
  document.getElementById("score45").innerHTML = fifthaccuracy;
  document.getElementById("usernamescore46").innerHTML = sixthname;
  document.getElementById("score46").innerHTML = sixthaccuracy;
  document.getElementById("usernamescore47").innerHTML = seventhname;
  document.getElementById("score47").innerHTML = seventhaccuracy;
  document.getElementById("usernamescore48").innerHTML = eighthname;
  document.getElementById("score48").innerHTML = eighthaccuracy;
  document.getElementById("usernamescore49").innerHTML = ninthname;
  document.getElementById("score49").innerHTML = ninthaccuracy;
  document.getElementById("usernamescore410").innerHTML = tenthname;
  document.getElementById("score410").innerHTML = tenthaccuracy;
  for (var i = 0; i < 10; i++) {
    var dateSpan = document.createElement("span");
    dateSpan.innerHTML = "Points";
    var span = document.getElementById("score4" + [i + 1]);
    span.appendChild(dateSpan);
  }
  if (firstname == str) {
    document.getElementById("4first").style.backgroundColor = "#0e1642";
  } else if (secondname == str) {
    document.getElementById("4second").style.backgroundColor = "#0e1642";
  } else if (thirdname == str) {
    document.getElementById("4third").style.backgroundColor = "#0e1642";
  } else if (fourthname == str) {
    document.getElementById("4fourth").style.backgroundColor = "#0e1642";
  } else if (fifthname == str) {
    document.getElementById("4fifth").style.backgroundColor = "#0e1642";
  } else if (sixthname == str) {
    document.getElementById("4sixth").style.backgroundColor = "#0e1642";
  } else if (seventhname == str) {
    document.getElementById("4seventh").style.backgroundColor = "#0e1642";
  } else if (eighthname == str) {
    document.getElementById("4eighth").style.backgroundColor = "#0e1642";
  } else if (ninthname == str) {
    document.getElementById("4ninth").style.backgroundColor = "#0e1642";
  } else if (tenthname == str) {
    document.getElementById("4tenth").style.backgroundColor = "#0e1642";
  }
  $("#loader").fadeOut();
}

function gotLeaderboardData5(data) {
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
  document.getElementById("usernamescore51").innerHTML = firstname;
  document.getElementById("score51").innerHTML = firstaccuracy;
  document.getElementById("usernamescore52").innerHTML = secondname;
  document.getElementById("score52").innerHTML = secondaccuracy;
  document.getElementById("usernamescore53").innerHTML = thirdname;
  document.getElementById("score53").innerHTML = thirdaccuracy;
  document.getElementById("usernamescore54").innerHTML = fourthname;
  document.getElementById("score54").innerHTML = fourthaccuracy;
  document.getElementById("usernamescore55").innerHTML = fifthname;
  document.getElementById("score55").innerHTML = fifthaccuracy;
  document.getElementById("usernamescore56").innerHTML = sixthname;
  document.getElementById("score56").innerHTML = sixthaccuracy;
  document.getElementById("usernamescore57").innerHTML = seventhname;
  document.getElementById("score57").innerHTML = seventhaccuracy;
  document.getElementById("usernamescore58").innerHTML = eighthname;
  document.getElementById("score58").innerHTML = eighthaccuracy;
  document.getElementById("usernamescore59").innerHTML = ninthname;
  document.getElementById("score59").innerHTML = ninthaccuracy;
  document.getElementById("usernamescore510").innerHTML = tenthname;
  document.getElementById("score510").innerHTML = tenthaccuracy;
  for (var i = 0; i < 10; i++) {
    var dateSpan = document.createElement("span");
    dateSpan.innerHTML = "Points";
    var span = document.getElementById("score5" + [i + 1]);
    span.appendChild(dateSpan);
  }
  if (firstname == str) {
    document.getElementById("5first").style.backgroundColor = "#0e1642";
  } else if (secondname == str) {
    document.getElementById("5second").style.backgroundColor = "#0e1642";
  } else if (thirdname == str) {
    document.getElementById("5third").style.backgroundColor = "#0e1642";
  } else if (fourthname == str) {
    document.getElementById("5fourth").style.backgroundColor = "#0e1642";
  } else if (fifthname == str) {
    document.getElementById("5fifth").style.backgroundColor = "#0e1642";
  } else if (sixthname == str) {
    document.getElementById("5sixth").style.backgroundColor = "#0e1642";
  } else if (seventhname == str) {
    document.getElementById("5seventh").style.backgroundColor = "#0e1642";
  } else if (eighthname == str) {
    document.getElementById("5eighth").style.backgroundColor = "#0e1642";
  } else if (ninthname == str) {
    document.getElementById("5ninth").style.backgroundColor = "#0e1642";
  } else if (tenthname == str) {
    document.getElementById("5tenth").style.backgroundColor = "#0e1642";
  }
  $("#loader").fadeOut();
}

function gotLeaderboardData6(data) {
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
  document.getElementById("usernamescore61").innerHTML = firstname;
  document.getElementById("score61").innerHTML = firstaccuracy;
  document.getElementById("usernamescore62").innerHTML = secondname;
  document.getElementById("score62").innerHTML = secondaccuracy;
  document.getElementById("usernamescore63").innerHTML = thirdname;
  document.getElementById("score63").innerHTML = thirdaccuracy;
  document.getElementById("usernamescore64").innerHTML = fourthname;
  document.getElementById("score64").innerHTML = fourthaccuracy;
  document.getElementById("usernamescore65").innerHTML = fifthname;
  document.getElementById("score65").innerHTML = fifthaccuracy;
  document.getElementById("usernamescore66").innerHTML = sixthname;
  document.getElementById("score6").innerHTML = sixthaccuracy;
  document.getElementById("usernamescore67").innerHTML = seventhname;
  document.getElementById("score67").innerHTML = seventhaccuracy;
  document.getElementById("usernamescore68").innerHTML = eighthname;
  document.getElementById("score68").innerHTML = eighthaccuracy;
  document.getElementById("usernamescore69").innerHTML = ninthname;
  document.getElementById("score69").innerHTML = ninthaccuracy;
  document.getElementById("usernamescore610").innerHTML = tenthname;
  document.getElementById("score610").innerHTML = tenthaccuracy;
  for (var i = 0; i < 10; i++) {
    var dateSpan = document.createElement("span");
    dateSpan.innerHTML = "Points";
    var span = document.getElementById("score6" + [i + 1]);
    span.appendChild(dateSpan);
  }
  if (firstname == str) {
    document.getElementById("6first").style.backgroundColor = "#0e1642";
  } else if (secondname == str) {
    document.getElementById("6second").style.backgroundColor = "#0e1642";
  } else if (thirdname == str) {
    document.getElementById("6third").style.backgroundColor = "#0e1642";
  } else if (fourthname == str) {
    document.getElementById("6fourth").style.backgroundColor = "#0e1642";
  } else if (fifthname == str) {
    document.getElementById("6fifth").style.backgroundColor = "#0e1642";
  } else if (sixthname == str) {
    document.getElementById("6sixth").style.backgroundColor = "#0e1642";
  } else if (seventhname == str) {
    document.getElementById("6seventh").style.backgroundColor = "#0e1642";
  } else if (eighthname == str) {
    document.getElementById("6eighth").style.backgroundColor = "#0e1642";
  } else if (ninthname == str) {
    document.getElementById("6ninth").style.backgroundColor = "#0e1642";
  } else if (tenthname == str) {
    document.getElementById("6tenth").style.backgroundColor = "#0e1642";
  }
  $("#loader").fadeOut();
}

function gotLeaderboardData7(data) {
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
  document.getElementById("usernamescore71").innerHTML = firstname;
  document.getElementById("score71").innerHTML = firstaccuracy;
  document.getElementById("usernamescore72").innerHTML = secondname;
  document.getElementById("score72").innerHTML = secondaccuracy;
  document.getElementById("usernamescore73").innerHTML = thirdname;
  document.getElementById("score73").innerHTML = thirdaccuracy;
  document.getElementById("usernamescore74").innerHTML = fourthname;
  document.getElementById("score74").innerHTML = fourthaccuracy;
  document.getElementById("usernamescore75").innerHTML = fifthname;
  document.getElementById("score75").innerHTML = fifthaccuracy;
  document.getElementById("usernamescore76").innerHTML = sixthname;
  document.getElementById("score76").innerHTML = sixthaccuracy;
  document.getElementById("usernamescore77").innerHTML = seventhname;
  document.getElementById("score77").innerHTML = seventhaccuracy;
  document.getElementById("usernamescore78").innerHTML = eighthname;
  document.getElementById("score78").innerHTML = eighthaccuracy;
  document.getElementById("usernamescore79").innerHTML = ninthname;
  document.getElementById("score79").innerHTML = ninthaccuracy;
  document.getElementById("usernamescore710").innerHTML = tenthname;
  document.getElementById("score710").innerHTML = tenthaccuracy;
  for (var i = 0; i < 10; i++) {
    var dateSpan = document.createElement("span");
    dateSpan.innerHTML = "Points";
    var span = document.getElementById("score7" + [i + 1]);
    span.appendChild(dateSpan);
  }
  if (firstname == str) {
    document.getElementById("7first").style.backgroundColor = "#0e1642";
  } else if (secondname == str) {
    document.getElementById("7second").style.backgroundColor = "#0e1642";
  } else if (thirdname == str) {
    document.getElementById("7third").style.backgroundColor = "#0e1642";
  } else if (fourthname == str) {
    document.getElementById("7fourth").style.backgroundColor = "#0e1642";
  } else if (fifthname == str) {
    document.getElementById("7fifth").style.backgroundColor = "#0e1642";
  } else if (sixthname == str) {
    document.getElementById("7sixth").style.backgroundColor = "#0e1642";
  } else if (seventhname == str) {
    document.getElementById("7seventh").style.backgroundColor = "#0e1642";
  } else if (eighthname == str) {
    document.getElementById("7eighth").style.backgroundColor = "#0e1642";
  } else if (ninthname == str) {
    document.getElementById("7ninth").style.backgroundColor = "#0e1642";
  } else if (tenthname == str) {
    document.getElementById("7tenth").style.backgroundColor = "#0e1642";
  }
  $("#loader").fadeOut();
}

function gotLeaderboardData8(data) {
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
  document.getElementById("usernamescore81").innerHTML = firstname;
  document.getElementById("score81").innerHTML = firstaccuracy;
  document.getElementById("usernamescore82").innerHTML = secondname;
  document.getElementById("score82").innerHTML = secondaccuracy;
  document.getElementById("usernamescore83").innerHTML = thirdname;
  document.getElementById("score83").innerHTML = thirdaccuracy;
  document.getElementById("usernamescore84").innerHTML = fourthname;
  document.getElementById("score84").innerHTML = fourthaccuracy;
  document.getElementById("usernamescore85").innerHTML = fifthname;
  document.getElementById("score85").innerHTML = fifthaccuracy;
  document.getElementById("usernamescore86").innerHTML = sixthname;
  document.getElementById("score86").innerHTML = sixthaccuracy;
  document.getElementById("usernamescore87").innerHTML = seventhname;
  document.getElementById("score87").innerHTML = seventhaccuracy;
  document.getElementById("usernamescore88").innerHTML = eighthname;
  document.getElementById("score88").innerHTML = eighthaccuracy;
  document.getElementById("usernamescore89").innerHTML = ninthname;
  document.getElementById("score89").innerHTML = ninthaccuracy;
  document.getElementById("usernamescore810").innerHTML = tenthname;
  document.getElementById("score810").innerHTML = tenthaccuracy;
  for (var i = 0; i < 10; i++) {
    var dateSpan = document.createElement("span");
    dateSpan.innerHTML = "Points";
    var span = document.getElementById("score8" + [i + 1]);
    span.appendChild(dateSpan);
  }
  if (firstname == str) {
    document.getElementById("8first").style.backgroundColor = "#0e1642";
  } else if (secondname == str) {
    document.getElementById("8second").style.backgroundColor = "#0e1642";
  } else if (thirdname == str) {
    document.getElementById("8third").style.backgroundColor = "#0e1642";
  } else if (fourthname == str) {
    document.getElementById("8fourth").style.backgroundColor = "#0e1642";
  } else if (fifthname == str) {
    document.getElementById("8fifth").style.backgroundColor = "#0e1642";
  } else if (sixthname == str) {
    document.getElementById("8sixth").style.backgroundColor = "#0e1642";
  } else if (seventhname == str) {
    document.getElementById("8seventh").style.backgroundColor = "#0e1642";
  } else if (eighthname == str) {
    document.getElementById("8eighth").style.backgroundColor = "#0e1642";
  } else if (ninthname == str) {
    document.getElementById("8ninth").style.backgroundColor = "#0e1642";
  } else if (tenthname == str) {
    document.getElementById("8tenth").style.backgroundColor = "#0e1642";
  }
  $("#loader").fadeOut();
}

function back() {
  setTimeout(redirect, 1);
}

function redirect() {
  location.replace("https://KidKalc.com");
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

var presscount = 0;

function rightpress() {
  if(presscount < 7)
  {
    presscount += 1;
  }
  leaderboardcount();
}

function leftpress() {
  if(presscount > 0)
  {
    presscount -= 1;
  }
  leaderboardcount();
}

function leaderboardcount() {
  if (presscount == 0) {
    document.getElementById('firstleaderboard').style.display = 'block';
    document.getElementById('secondleaderboard').style.display = 'none';
    document.getElementById('thirdleaderboard').style.display = 'none';
    document.getElementById('fourthleaderboard').style.display = 'none';
    document.getElementById('fifthleaderboard').style.display = 'none';
    document.getElementById('sixthleaderboard').style.display = 'none';
    document.getElementById('seventhleaderboard').style.display = 'none';
    document.getElementById('eigthleaderboard').style.display = 'none';
  }
  else if (presscount == 1) {
    document.getElementById('firstleaderboard').style.display = 'none';
    document.getElementById('secondleaderboard').style.display = 'block';
    document.getElementById('thirdleaderboard').style.display = 'none';
    document.getElementById('fourthleaderboard').style.display = 'none';
    document.getElementById('fifthleaderboard').style.display = 'none';
    document.getElementById('sixthleaderboard').style.display = 'none';
    document.getElementById('seventhleaderboard').style.display = 'none';
    document.getElementById('eigthleaderboard').style.display = 'none';
  }
  else if (presscount == 2) {
    document.getElementById('firstleaderboard').style.display = 'none';
    document.getElementById('secondleaderboard').style.display = 'none';
    document.getElementById('thirdleaderboard').style.display = 'block';
    document.getElementById('fourthleaderboard').style.display = 'none';
    document.getElementById('fifthleaderboard').style.display = 'none';
    document.getElementById('sixthleaderboard').style.display = 'none';
    document.getElementById('seventhleaderboard').style.display = 'none';
    document.getElementById('eigthleaderboard').style.display = 'none';
  }
  else if (presscount == 3) {
    document.getElementById('firstleaderboard').style.display = 'none';
    document.getElementById('secondleaderboard').style.display = 'none';
    document.getElementById('thirdleaderboard').style.display = 'none';
    document.getElementById('fourthleaderboard').style.display = 'block';
    document.getElementById('fifthleaderboard').style.display = 'none';
    document.getElementById('sixthleaderboard').style.display = 'none';
    document.getElementById('seventhleaderboard').style.display = 'none';
    document.getElementById('eigthleaderboard').style.display = 'none';
  }
  else if (presscount == 4) {
    document.getElementById('firstleaderboard').style.display = 'none';
    document.getElementById('secondleaderboard').style.display = 'none';
    document.getElementById('thirdleaderboard').style.display = 'none';
    document.getElementById('fourthleaderboard').style.display = 'none';
    document.getElementById('fifthleaderboard').style.display = 'block';
    document.getElementById('sixthleaderboard').style.display = 'none';
    document.getElementById('seventhleaderboard').style.display = 'none';
    document.getElementById('eigthleaderboard').style.display = 'none';
  }
  else if (presscount == 5) {
    document.getElementById('firstleaderboard').style.display = 'none';
    document.getElementById('secondleaderboard').style.display = 'none';
    document.getElementById('thirdleaderboard').style.display = 'none';
    document.getElementById('fourthleaderboard').style.display = 'none';
    document.getElementById('fifthleaderboard').style.display = 'none';
    document.getElementById('sixthleaderboard').style.display = 'block';
    document.getElementById('seventhleaderboard').style.display = 'none';
    document.getElementById('eigthleaderboard').style.display = 'none';
  }
  else if (presscount == 6) {
    document.getElementById('firstleaderboard').style.display = 'none';
    document.getElementById('secondleaderboard').style.display = 'none';
    document.getElementById('thirdleaderboard').style.display = 'none';
    document.getElementById('fourthleaderboard').style.display = 'none';
    document.getElementById('fifthleaderboard').style.display = 'none';
    document.getElementById('sixthleaderboard').style.display = 'none';
    document.getElementById('seventhleaderboard').style.display = 'block';
    document.getElementById('eigthleaderboard').style.display = 'none';
  }
  else if (presscount == 7) {
    document.getElementById('firstleaderboard').style.display = 'none';
    document.getElementById('secondleaderboard').style.display = 'none';
    document.getElementById('thirdleaderboard').style.display = 'none';
    document.getElementById('fourthleaderboard').style.display = 'none';
    document.getElementById('fifthleaderboard').style.display = 'none';
    document.getElementById('sixthleaderboard').style.display = 'none';
    document.getElementById('seventhleaderboard').style.display = 'none';
    document.getElementById('eigthleaderboard').style.display = 'block';
  }
}