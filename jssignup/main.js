if ($(window).width() < 585) {
  document.getElementById("or").innerHTML = "───   Or   ───";
} else {
  document.getElementById("or").innerHTML = "──────────   Or   ──────────";
}
$(window).on("resize", function () {
  var win = $(this); //this = window
  if ($(window).width() < 585) {
    document.getElementById("or").innerHTML = "───   Or   ───";
  } else {
    document.getElementById("or").innerHTML = "──────────   Or   ──────────";
  }
});
function signupchange() {
  deletetext();
  document.getElementById("googlebtn").style.display = "none";
  document.getElementById("signup").style.display = "none";
  document.getElementById("signuptxt").style.display = "none";
  document.getElementById("signin").style.display = "inline";
  document.getElementById("signintxt").style.display = "inline";
  document.getElementById("signinbtn").style.display = "none";
  document.getElementById("signupbtn").style.display = "inline";
  document.getElementById("name").style.display = "inline";
  document.getElementById("namebox").style.display = "inline";
  document.getElementById("title").innerHTML = "Sign Up";
  document.getElementById("or").style.display = "none";
  document.getElementById("title").className = "login100-form-title p-b-20";
}

function signin() {
  deletetext();
  document.getElementById("name").style.display = "none";
  document.getElementById("namebox").style.display = "none";
  document.getElementById("googlebtn").style.display = "flex";
  document.getElementById("signin").style.display = "none";
  document.getElementById("signintxt").style.display = "none";
  document.getElementById("signup").style.display = "inline";
  document.getElementById("signuptxt").style.display = "inline";
  document.getElementById("signupbtn").style.display = "none";
  document.getElementById("signinbtn").style.display = "inline";
  document.getElementById("title").innerHTML = "Sign In With";
  if ($(window).width() < 585) {
    document.getElementById("or").style.display = "block";
    document.getElementById("or").innerHTML = "───   Or   ───";
  } else {
    document.getElementById("or").style.display = "block";
    document.getElementById("or").innerHTML = "──────────   Or   ──────────";
  }
  document.getElementById("title").className = "login100-form-title p-b-50";
}

function login() {
  var userEmail = document.getElementById("email_field").value + "@kidkalc.com";
  var userPass = document.getElementById("password_field").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .then(function (user) {
      document.getElementById("error").style.color = "#00ff33";
      document.getElementById("error").innerHTML = "Log In Succesful";
      setTimeout(redirect, 2000);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      var nouser =
        "There is no user record corresponding to this identifier. The user may have been deleted.";
      var invaliduser = "The email address is badly formatted.";
      var invalidpassword =
        "The password is invalid or the user does not have a password.";

      if (error.message === nouser) {
        document.getElementById("logincontainer").style.animation =
          "shake 0.82s";
        document.getElementById("error").innerHTML = "Username Not Registered";
        setTimeout(deletetext, 5000);
      } else if (error.message === invaliduser) {
        document.getElementById("logincontainer").style.animation =
          "shake 0.82s";
        document.getElementById("error").innerHTML = "Invalid Username";
        setTimeout(deletetext, 5000);
      } else if (error.message === invalidpassword) {
        document.getElementById("logincontainer").style.animation =
          "shake 0.82s";
        document.getElementById("error").innerHTML = "Wrong Password";
        setTimeout(deletetext, 5000);
      }
    });
}

function signup() {
  var user = null;
  var userEmail = document.getElementById("email_field").value + "@kidkalc.com";
  var userPass = document.getElementById("password_field").value;
  var user_name = document.getElementById("name_field").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPass)
    .then(function () {
      document.getElementById("error").style.color = "#00ff33";
      document.getElementById("error").innerHTML = "Sign Up Succesful";
      user = firebase.auth().currentUser;
    })
    .then(function () {
      user.updateProfile({
        displayName: user_name,
      });
      useruid = user.uid;
      database = firebase.database();
      ref = database.ref("stats/" + useruid);
      ref.on("value", gotData);
    })

    .catch(function (error) {
      // Handle Errors here.
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      var invaliduser = "The email address is badly formatted.";
      var passwordlength = "The password must be 6 characters long or more.";
      var passwordlen = "Password should be at least 6 characters";
      var taken = "The email address is already in use by another account.";

      if (error.message === invaliduser) {
        document.getElementById("logincontainer").style.animation =
          "shake 0.82s";
        document.getElementById("error").innerHTML = "Invalid Username";
        setTimeout(deletetext, 5000);
      } else if (error.message === taken) {
        document.getElementById("logincontainer").style.animation =
          "shake 0.82s";
        document.getElementById("error").innerHTML = "Username Already Taken";
        setTimeout(deletetext, 5000);
      } else if (error.message === passwordlength || passwordlen) {
        document.getElementById("logincontainer").style.animation =
          "shake 0.82s";
        document.getElementById("error").innerHTML = "Password Too Short";
        setTimeout(deletetext, 5000);
      }
    });
}

function googlesignin() {
  base_provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(base_provider)
    .then(function (result) {
      console.log(result);
      setTimeout(redirect, 1000);
      console.log("Success...Google Account Linked");
    })
    .catch(function (error) {
      console.log(error);
    });
}

function logout() {
  firebase.auth().signOut();
}

function back() {
  setTimeout(redirect, 1);
}

function redirect() {
  location.replace("https://KidKalc.com");
}

function deletetext() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("logincontainer").style.animation = "none";
}

$(function () {
  $("form input").keypress(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      $("button[type=submit] .default").click();
      return false;
    } else {
      return true;
    }
  });
});

function gotData() {
  Badges.Badge1000Points = false;
  Badges.Badge10000Points = false;
  Badges.Badge100Total = false;
  Badges.BadgeFirstPlace = false;
  Badges.BadgeSecondPlace = false;
  Badges.BadgeThirdPlace = false;
  myFBref.child("stats/" + useruid).update({
    Badges,
  });
  setTimeout(redirect, 2000);
}
