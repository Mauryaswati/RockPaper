const choices = document.querySelectorAll(".choice")
// console.log(choices)

const score = document. getElementById("score")
// console.log(score)

const result = document.querySelector("#result")
// console.log(result)

const modal = document.querySelector(".modal")
// console.log(modal)

const restart = document.getElementById("restart")
// console.log(restart)

const scoreboard ={
    computer:0,
    player:0
}

function play(e){
    restart.style.display =' inline-block'
    const playerchoice= e.target.id
    //  console.log (playerchoices)
    const ComputerChoice =getComputerChoice()
    // console.log(ComputerChoice)
    let winner =getWinner(playerchoice,ComputerChoice)
    showWinner(winner,ComputerChoice)
}

for(let i=0;i<choices.length;i++){
choices[i].addEventListener("click",play)
}


function getComputerChoice (){
     const randomNumber = Math.ceil(Math .random()*100)
     if(randomNumber <= 49)
      return "paper"
     else if(randomNumber >50 && randomNumber<90)
     return"rock"
     else
     return"scissor"
}

function getWinner(pc,cc){
if(pc==cc)
return"draw"
else if(pc=="rock"){
    if(cc="paper"){
        return"computer"
    }else{
        return"player"
    }
}else if(pc=="paper"){
    if(cc==scissors){
        return "computer"
    }else{
        return "player"
    }
}else if(pc == "scissors"){
    if(cc=="rock"){
        return"computer"
    }else{
        return "player"
    }
}
}

 function showWinner(winner,computerChoice){
     if(winner=="player"){
        scoreboard.player++

        result.innerHTML=`<h1 class='text-win'>  you  win!! </h1>
        <i class ="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose</p>
        `
      
     }else if(winner=="computer"){
     scoreboard.computer++

            result.innerHTML=`<h1 class='text-loss'>loss!!</h1>
          <i class="fas fa-hand-${computerChoice} fa-10x"></i>
          <p>Computer chose</p>
     `

     } else{
        result.innerHTML=`<h1 class='text-loss'>its-draw!!</h1>
     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
     <p>Computer chose</p>
     `
     }

     score.innerHTML=`
     <p>player:${scoreboard.player}</p>
     <p>computer:${scoreboard.computer}</p>
     `

     modal.style.display ="block"
    }

    window.addEventListener("click",clearModel)

    function clearModel(e){
        if(e.target.className =="modal"){
            modal.style.display ="none"
        }
    }