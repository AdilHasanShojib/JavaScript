let boxs=document.querySelectorAll(".box");
let btn=document.querySelector(".reset");
let newbtn=document.querySelector("#new");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turn0=true;
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn0=true;
    enabledGame();
    msgContainer.classList.add("hide");

}

const disabledGame=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
 
const enabledGame=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}


boxs.forEach((box)=>{
  box.addEventListener("click",()=>{
   
    if(turn0){
        box.innerText="0";
        turn0=false;
    }
    else{

        box.innerText="X";
        turn0=true;

    }
    box.disabled=true;

    checkWinner();

  })
})

const showWinner=(winner)=>{
  msg.innerText=`Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledGame();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        
        let pos1=boxs[pattern[0]].innerText;
        let pos2=boxs[pattern[1]].innerText;
        let pos3=boxs[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3!=""){

            if(pos1===pos2 && pos2===pos3){
                console.log("Winner");
                showWinner(pos1);
            }

        }
    }
}

btn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);