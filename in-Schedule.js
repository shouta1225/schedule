'use strict'
//✖️のボタンをクリックするとindex.htmlのページに戻る
const close = document.getElementById("close");
    close.addEventListener("click",function(event){
        event.preventDefault();
        location.href = "./index.html";
        console.log("clickしました");
    })

//現在クリックした場所が何月何日かを表示する
//document.getElementById(".months-and-days h2").innerHTML
  //  =months[date.getMonth()];