let boxes = document.querySelectorAll(".box")
let msgBox = document.querySelector(".msgBox")
let turn0 = true
let winnerMsg = document.querySelector(".winner")
let newGame = document.querySelector(".new")
let reset = document.querySelector(".reset")
const winPatters=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
function addText(box){
    box.innerText = "X"
}
const resetGame = () =>{
    for(let box of boxes){
        box.innerHTML = ""
        box.disabled = false;
    }
}
const disableBtns=()=>{
    for(let box of boxes){
        box.disabled = true
    }
}
const showWinner = (p)=>{
    winnerMsg.innerHTML= `winner is ${p}`
    msgBox.classList.remove("hide")
    disableBtns();
}
const checkWinner = () => {
    for(let pattern of winPatters){
        let p1 =boxes[pattern[0]].innerText
        let p2 =boxes[pattern[1]].innerText
        let p3 =boxes[pattern[2]].innerText
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                showWinner(p1)
            }
        }
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML = "O"
            turn0 = false
        }else{
            box.innerHTML = "X"
            turn0 = true
        }
        box.disabled = true
        checkWinner();
    });
})
newGame.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)
