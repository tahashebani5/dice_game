
var n= localStorage.getItem("n");
var p1 = localStorage.getItem("p1");
var p2 = localStorage.getItem("p2");
if (n >= 2) {
    
  var player1 = Math.floor(Math.random() * 6 + 1);
  var player2 = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".player1").setAttribute("src","./assets/images/dice"+ player1 +".png")
  document.querySelector(".player2").setAttribute("src","./assets/images/dice"+ player2 +".png")
  if(player1 > player2){
      document.querySelector("h1").innerText = "Player 1 Win";
      var p1 =Number(p1)+ 1;
      localStorage.setItem("p1", p1);
  } else if(player2 > player1){
      document.querySelector("h1").innerText = "Player 2 Win";
      var p2 =Number(p2)+ 1;
      localStorage.setItem("p2", p2);
  }else{
     document.querySelector("h1").innerText = "Draw!";
  }
}

var n =Number(n)+ 1;
localStorage.setItem("n", n);

if (n > 7) {
    var n =1;
    localStorage.setItem("n", n);
    if (n === 1) {
    if(p1 > p2){
        document.querySelector("h1").innerText = "Player 1 Win with " + p1 + " points";
        document.querySelector("h1").style.fontSize = "7.5rem";
    } else if(p2 > p1){
        document.querySelector("h1").innerText = "Player 2 Win with " + p2 + " points";
        document.querySelector("h1").style.fontSize = "7.5rem";
    }else{
       document.querySelector("h1").innerText = "Draw! Play Again";
    }

    }
    var p1 =0;
    localStorage.setItem("p1", p1);
      var p2 =0;
    localStorage.setItem("p2", p2);
}
    

