firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;

    console.log(firebase.auth().currentUser.uid);

    console.log(user);

    document.getElementById( "account" ).setAttribute( "onClick", "javascript: showusernamepopup();" );

    document.getElementById("account").style.animation = "none";

    if(user != null){

      console.log(user);


      var email_id = user.email;
      var str = email_id.split('@');
      str.pop();

      document.getElementById("exampleModalLabel").innerHTML = "Welcome " + (str);

    } 

  } else {
    // No user is signed in.

    document.getElementById( "account" ).setAttribute( "onClick", "location.href='account';" );

    document.getElementById("account").style.animation = "moema 2s infinite";

  }
});

function showusernamepopup() {  
  $('#myusername').modal('show');
}

$(document).ready(function() {
    var isshow = localStorage.getItem('isshow');
    if (isshow == null) {
        localStorage.setItem('isshow', 1);

        // Show popup here
        $('#myModal').modal('show');
    }
});

function help() {
  $('#myModal').modal('show');
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

function topleftpopup (){
  Toast.fire({
  icon: 'success',
  title: 'Have Fun!'
    })
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["KidKalc", "The Future", "Perfection"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

function logout(){
  firebase.auth().signOut();
  document.getElementById( "account" ).setAttribute( "onClick", "location.href='account';" );
  document.getElementById("account").style.animation = "moema 2s infinite";
}