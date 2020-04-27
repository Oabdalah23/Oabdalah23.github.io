score = 0;
coins = 0;

if(coins>0)
  {
    document.getElementById("game").style.display = "block";
  }
else
  {
    document.getElementById("game").style.display = "none";
  }

 operations = ['+','-','*','/'];
 operation = operations[Math.floor(Math.random() * operations.length)];
 if(operation == '+')
 {
    num1 = 1000;
    num2 = 1000;
    accans = num1 + num2;
    while(accans>1000)
    {
      num1 = Math.floor(Math.random()*1000+1);
      num2 = Math.floor(Math.random()*1000+1);
      accans = num1 + num2;
    } 
    document.getElementById("question").innerHTML = num1+" + "+num2;
 }
 else if(operation == '-')
 {
   num1 = Math.floor(Math.random()*1000+1);
   num2 = Math.floor(Math.random()*1000+1);
  if(num1 > num2)
  {
    document.getElementById("question").innerHTML = num1+" - "+num2;
    accans = num1 - num2;
  }
  else
  {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    document.getElementById("question").innerHTML = num1+" - "+num2;
    accans = num1 - num2;
  }
 }
  else if(operation == '*')
 {
    num1 = Math.floor(Math.random()*10);
    num2 = Math.floor(Math.random()*10);
    document.getElementById("question").innerHTML = num1+" × "+num2;
    accans = num1 * num2;
 }
 else if(operation == '/')
 {
    num2 = Math.floor(Math.random()*10+1);
      items = [
      [1,2,3,4,5,6,7,8,9,10,11,12],
      [2,4,6,8,10,12,14,16,18,20,22,24],
      [3,6,9,12,15,18,21,24,27,30,33,36],
      [4,8,12,16,20,24,28,32,36,40,44,48],
      [5,10,15,20,25,30,35,40,45,50,55,60],
      [6,12,18,24,30,36,42,48,54,60,66,72],
      [7,14,21,28,35,42,49,56,63,70,77,84],
      [8,16,24,32,40,48,56,64,72,80,88,96],
      [9,18,27,36,45,54,63,72,81,90,99,108],
      [10,20,30,40,50,60,70,80,90,100,110,120]
    ];
    x = Math.floor(Math.random()*11);
    num1 = items[num2-1][x];
    document.getElementById("question").innerHTML = num1+" ÷ "+num2;
    accans = num1 / num2;
 }

function game () {
  coins =  coins - 1;
  document.getElementById("coins").innerHTML="Coins\n"+coins;
  document.getElementById("dropdowncoins").innerHTML="Coins: "+coins;
  window.location.href="/game";
  document.getElementById("game").style.display = "none";
}
 
function newquestion() {
  if(score % 15 == 0 && score != 0)
    {
      coins = coins + 1;
      document.getElementById("coins").innerHTML="Coins\n"+coins;
      document.getElementById("dropdowncoins").innerHTML="Coins: "+coins;
    }
  if(coins>0)
    {
      document.getElementById("game").style.display = "block";
    }
  else
    {
      document.getElementById("game").style.display = "none";
    }
  document.getElementById('textbox').style.color = "white";
  document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw blue";
  document.getElementById("textbox").readOnly = false;
    
  function setCaretPosition(ctrl, pos) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos); 
  } 
  else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

  var input = document.getElementById('textbox');
  setCaretPosition(input, input.value.length);
  document.getElementById('textbox').value = '';
   operations = ['+','-','*','/'];
 operation = operations[Math.floor(Math.random() * operations.length)];
 if(operation == '+')
 {
    num1 = 1000;
    num2 = 1000;
    accans = num1 + num2;
    while(accans>1000)
    {
      num1 = Math.floor(Math.random()*1000+1);
      num2 = Math.floor(Math.random()*1000+1);
      accans = num1 + num2;
    } 
    document.getElementById("question").innerHTML = num1+" + "+num2;
 }
 else if(operation == '-')
 {
   num1 = Math.floor(Math.random()*1000+1);
   num2 = Math.floor(Math.random()*1000+1);
  if(num1 > num2)
  {
    document.getElementById("question").innerHTML = num1+" - "+num2;
    accans = num1 - num2;
  }
  else
  {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    document.getElementById("question").innerHTML = num1+" - "+num2;
    accans = num1 - num2;
  }
 }
  else if(operation == '*')
 {
    num1 = Math.floor(Math.random()*10);
    num2 = Math.floor(Math.random()*10);
    document.getElementById("question").innerHTML = num1+" × "+num2;
    accans = num1 * num2;
 }
 else if(operation == '/')
 {
    num2 = Math.floor(Math.random()*10+1);
      items = [
      [1,2,3,4,5,6,7,8,9,10,11,12],
      [2,4,6,8,10,12,14,16,18,20,22,24],
      [3,6,9,12,15,18,21,24,27,30,33,36],
      [4,8,12,16,20,24,28,32,36,40,44,48],
      [5,10,15,20,25,30,35,40,45,50,55,60],
      [6,12,18,24,30,36,42,48,54,60,66,72],
      [7,14,21,28,35,42,49,56,63,70,77,84],
      [8,16,24,32,40,48,56,64,72,80,88,96],
      [9,18,27,36,45,54,63,72,81,90,99,108],
      [10,20,30,40,50,60,70,80,90,100,110,120]
    ];
    x = Math.floor(Math.random()*11);
    num1 = items[num2-1][x];
    document.getElementById("question").innerHTML = num1+" ÷ "+num2;
    accans = num1 / num2;
 }
}

function actual() {
  if ($(window).width() < 900) {
    document.getElementById('textbox').value = accans;
    document.getElementById('textbox').style.textShadow = "0px 0px white";
    document.getElementById('textbox').style.color = "green";
  }
  else {
    document.getElementById('textbox').value = accans;
    document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw green";
  }
}

function outputname() {
  document.getElementById("textbox").readOnly = true;
  var x,y,name,a,b,answer;
  y = document.getElementById("textbox").value;
  if (y == accans) {
    if ($(window).width() < 900) {
      score = score + 1;
      document.getElementById('textbox').style.textShadow = "0px 0px white";
      document.getElementById('textbox').style.color = "green";
      document.getElementById("finprompt").innerHTML="Score\n"+score;
      document.getElementById("dropdownscore").innerHTML="Score: "+score;
    }
    else {
      score = score + 1;
      document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw green";
      document.getElementById("finprompt").innerHTML="Score\n"+score;
      document.getElementById("dropdownscore").innerHTML="Score: "+score;
    }
  } 
  else {
    if ($(window).width() < 900) {
      if(score>1) {
        score = score - 2;
        document.getElementById('textbox').style.textShadow = "0px 0px white";
        document.getElementById('textbox').style.color = "red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
      else if(score==1) {
        score = score - 1;
        document.getElementById('textbox').style.textShadow = "0px 0px white";
        document.getElementById('textbox').style.color = "red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
      else {
        document.getElementById('textbox').style.textShadow = "0px 0px white";
        document.getElementById('textbox').style.color = "red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
    }
    else {
      if(score>1) {
        score = score - 2;
        document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
      else if(score==1) {      
        score = score - 1;
        document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
      else {
        document.getElementById('textbox').style.textShadow = "0.3vw 0.3vw red";
        setTimeout(actual,750);
        document.getElementById("finprompt").innerHTML="Score\n"+score;
        document.getElementById("dropdownscore").innerHTML="Score: "+score;
      }
    }
  }
}

var input = document.getElementById("textbox");
input.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.getElementById("check").click();
    setTimeout(newquestion,2250);
  }
});

function setCaretPosition(ctrl, pos) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  } 
  else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

var input = document.getElementById('textbox');
setCaretPosition(input, input.value.length);

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}


// Install input filters.
setInputFilter(document.getElementById("textbox"), function(value) {
  return /^-?\d*$/.test(value); });