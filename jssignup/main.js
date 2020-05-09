(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

function signupchange () {
    deletetext();
    document.getElementById('googlebtn').style.display = "none";
    document.getElementById('signup').style.display = "none";
    document.getElementById('signuptxt').style.display = "none";
    document.getElementById('signin').style.display = "inline";
    document.getElementById('signintxt').style.display = "inline";
    document.getElementById('signinbtn').style.display = "none";
    document.getElementById('signupbtn').style.display = "inline";
    document.getElementById("title").innerHTML = "Sign Up";
    document.getElementById('or').style.display = "none";
    document.getElementById("title").className = "login100-form-title p-b-20"; 


}

function signin () {
    deletetext();
    document.getElementById('googlebtn').style.display = "flex";
    document.getElementById('signin').style.display = "none";
    document.getElementById('signintxt').style.display = "none";
    document.getElementById('signup').style.display = "inline";
    document.getElementById('signuptxt').style.display = "inline";
    document.getElementById('signupbtn').style.display = "none";
    document.getElementById('signinbtn').style.display = "inline";
    document.getElementById("title").innerHTML = "Sign In With";
    document.getElementById('or').style.display = "block";
    document.getElementById("title").className = "login100-form-title p-b-50"; 

}


  
function login(){
  
    var userEmail = (document.getElementById("email_field").value + "@kidkalc.com");
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(user){
        document.getElementById('error').style.color = "#00ff33";
        document.getElementById('error').innerHTML = "Log In Succesful";
        setTimeout(redirect,2000)
    
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      var nouser = "There is no user record corresponding to this identifier. The user may have been deleted.";
      var invaliduser = "The email address is badly formatted.";
      var invalidpassword = "The password is invalid or the user does not have a password.";


      if(error.message === nouser)
      {
         document.getElementById('error').innerHTML = "Username Not Registered";
         setTimeout(deletetext,5000);
      }
      else if(error.message === invaliduser)
      {
         document.getElementById('error').innerHTML = "Invalid Username";
         setTimeout(deletetext,5000);
      }
      else if(error.message === invalidpassword)
      {
         document.getElementById('error').innerHTML = "Wrong Password";
         setTimeout(deletetext,5000);
      }

  
    });
  
}
  
function signup() {
    var userEmail = (document.getElementById("email_field").value + "@kidkalc.com");
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(user){
        document.getElementById('error').style.color = "#00ff33";
        document.getElementById('error').innerHTML = "Sign Up Succesful";
        setTimeout(redirect,2000)
    
    
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      var invaliduser = "The email address is badly formatted."
      var passwordlength = "The password must be 6 characters long or more."
      var passwordlen = "Password should be at least 6 characters";
      var taken = "The email address is already in use by another account."
      
  
      if(error.message === invaliduser)
      {
         document.getElementById('error').innerHTML = "Invalid Username";
         setTimeout(deletetext,5000);
      }
      else if(error.message === passwordlength || passwordlen)
      {
         document.getElementById('error').innerHTML = "Password Too Short";
         setTimeout(deletetext,5000);
      }
      else if(error.message === taken)
      {
         document.getElementById('error').innerHTML = "Username Already Taken";
         setTimeout(deletetext,5000);
      }
  
      
    });
  
}
  
function googlesignin(){
    base_provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(base_provider).then(function(result) {
      console.log(result)
      setTimeout(redirect,1000);
      console.log("Success...Google Account Linked")
  
    }).catch(function(error){
      console.log(error)
  
    })
}
  
function logout(){
    firebase.auth().signOut();
}

function redirect(){
    location.replace("https://KidKalc.com")
}

function deletetext()
{
    document.getElementById('error').innerHTML = '';
}
  