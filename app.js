let gamesqe=[];
let usersqe=[];

let btns=["yellow","red","purple","green"];

let start=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(start==false){
        console.log("game is satrted");
        start=true;
    }
    levelup();

});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
    
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 250);
    
}

function levelup(){
    usersqe=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gamesqe.push(randcolor);
    console.log(gamesqe);
    gameflash(randbtn);

}

function checkAns(idx){
    if(usersqe[idx]===gamesqe[idx]){
        if(usersqe.length==gamesqe.length){
            setTimeout(levelup ,250);
        }
    }else{
        h2.innerHTML=`Game Over! your score was<b>${level}</b> <br>Press any key to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";

        },150);
       reset();

    }

}

function btnpress () {
    console.log(this);
    let btn=this;
    userflash(btn);   
    
    usercolor=btn.getAttribute("id");
    usersqe.push(usercolor);

    checkAns(usersqe.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    start=false;
    gamesqe=[];
    usersqe=[];
    level=0;
}
