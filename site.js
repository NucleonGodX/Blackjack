
let msg=''
let msgEl=document.getElementById("msg-el")
let cardEl=document.getElementById('cards-el')
let sumEl=document.getElementById('sum-el')
let startBt=document.getElementById('start-btn')

function startGame(){
let firstCard= Math.floor((Math.random() * 14) + 1);

let secondCard = Math.floor((Math.random() * 14) + 1);

let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
if(sum<=20){
    msg="Do you want to draw a new card?"
    startBt.innerText="New Card"
    
    }
    
else if(sum===21)
    {msg="WOAAAH U HAVE WON THE BLACKJACK"
    hasBlackJack=true
    startBt.innerText="Play Again"}

   
else
    {msg="You've lost it lad"
    isAlive=false
    startBt.innerText="Try Again"}


msgEl.innerText=msg
cardEl.innerText="Cards: "+firstCard+","+secondCard
sumEl.innerText="Sum: "+sum

}



