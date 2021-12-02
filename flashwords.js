let isWordFinished = true;
let duration = 3000;
let timer;

window.onload = function(){
    //startボタン押下時処理
    var btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click",function(){
        startFlash();
    })
    //stopボタン押下時処理
    var btnStop = document.getElementById("btnStop");
    btnStop.addEventListener("click",function(){
        stopFlash();
    })
}

//フラッシュ表示の開始
const startFlash = function(){
    console.log("start flash");
    isWordFinished=true;
    timer = this.setInterval(flashProc, duration);
}

//フラッシュ表示の終了
const stopFlash = function(){
    console.log("stop flash");
    isWordFinished=true;
    clearInterval(timer);
}

//フラッシュ表示処理
const flashProc = function(){
    if(isWordFinished){
        isWordFinished=false;
        console.log("new word");
        return;
    }
    else{
        isWordFinished=true;
        console.log("word answer");
        return;
    }
}