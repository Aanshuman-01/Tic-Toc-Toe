console.log("Welcome to Tic Tac Toe")
let music=new Audio("music.mp3")
let audioturn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X"
let isGameover=false;

//Function to change the turn
const changeTurn = ()=>{
    return turn ==="X"?"0":"X"
}

//Function to check for a win
const checkWin=()=>{
        let boxtext=document.getElementsByClassName('boxtext');
         let wins=[
          [0,1,2,2,5,0],
          [3,4,5,2,15,0],
          [6,7,8,2,25,0],
          [0,3,6,-8,15,90],
          [1,4,7,2,15,90],
          [2,5,8,12,15,90],
          [0,4,8,2,15,45],
          [2,4,6,2,15,137]
         ]
         wins.forEach(e=>{
            if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
              document.querySelector('.info').innerText=boxText=boxtext[e[0]].innerText +"Won"
              isGameover=true
              document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
              document.querySelector(".line").style.width="25vw";
              document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            }
         })
}

//Game Logic
music.play()
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
  let boxtext=element.querySelector('.boxtext')
  element.addEventListener('click',()=>{
    if(boxtext.innerText===''){
        boxtext.innerText=turn;
        turn=changeTurn();
        audioturn.play();
        checkWin();
        if(!isGameover){
        document.getElementsByClassName("info")[0].innerText="Turn for" +turn;
      }
    }
  }) 
})
//Add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
      element.innerText=""
    });
    turn="X";
    isGameover=false
      document.querySelector(".line").style.width="0vw";
      document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})
