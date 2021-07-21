'use strict';

let num = Math.floor(Math.random()*20)+1;
console.log(num);

let scr = 20;

let hs = 0;

document.querySelector(".again").addEventListener("click" , function(){
  scr = 20;
  num = Math.floor(Math.random()*20)+1;
  console.log(num);

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".message").textContent = "Start guessing..."

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".score").textContent = scr ;

  document.querySelector(".guess").value="";

  document.querySelector(".number").textContent="?";
})

document.querySelector(".check").addEventListener("click" , function(){
  const guess = Number(document.querySelector(".guess").value);

  if(!guess){
    document.querySelector('.message').textContent = "❌ No Number";
  }

  else if(guess > num){
    if(scr > 0){
    document.querySelector('.message').textContent = "🙄 Too High";
    scr--;
    document.querySelector(".score").textContent = scr;
  }
  else{
    document.querySelector('.message').textContent = "😑 Kya Gunda Banega Re Tu";
  }
}
  else if(guess < num){
    if(scr > 0){
    document.querySelector('.message').textContent = "🥱 Too Low";
    scr--;
    document.querySelector(".score").textContent = scr;
  }
  else{
    document.querySelector('.message').textContent = "😑 Kya Gunda Banega Re Tu";
  }
} 
  else if(guess === num){
    document.querySelector('.message').textContent = "🎉 Correct Number";

    document.querySelector(".number").textContent = num;

    document.querySelector("body").style.backgroundColor = '#60b347';

    document.querySelector(".number").style.width = '30rem';

    if(scr > hs ){
      hs = scr ;
    document.querySelector(".highscore").textContent = hs;
    }
  }
});