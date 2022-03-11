'use strict'
//カレンダーに必要な処理
const date =new Date();//現在時刻の取得

//現在の月を表示し、使用する必要のある月を取得すること
const renderCalender = () =>{
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1, 0
        ).getDate();

    const prevLastDay =new Date(
        date.getFullYear(),
        date.getMonth(), 0)
        .getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1, 0)
        .getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
    ];

    

    document.querySelector(".date h1").innerHTML
    =months[date.getMonth()];
    //querySelectorメソッドを使ってclassがdateのh1に現在の月を取得し、入力する
    //DOMプロパティの一つであるinnerHTMLでコンテンツを変更を行う

    document.querySelector('.date p').innerHTML
    =new Date().toLocaleDateString();

    let days = "";

    for(let x = firstDayIndex; x > 0; x--){
        days += `<div class ="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for(let i = 1; i <= lastDay; i++){
        if(i === new Date().getDate() && 
        date.getMonth() === new Date().getMonth()){
            days += `<div class = "today">${i}</div>`;
            
        }else{
            days += `<div>${i}</div>`;
            

        }
    
    } 

    for(let j = 1;j<=nextDays;j++){
       days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};


    document.querySelector('.prev').addEventListener("click",()=>{
        date.setMonth(date.getMonth() - 1);
        renderCalender();
    });

    document.querySelector('.next').addEventListener('click',()=>{
        date.setMonth(date.getMonth() + 1);
        renderCalender();
    });

    
    renderCalender();

    /*function getPram(name,url){
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }*/


    
//indexに関わる処理
    //クリックするとin-Select-days.htmlが中央下にスライドで出てくる


    //日にちをクリックすることで追加できるようになる

    //追加をクリックするとin-schedule.html画面がスライドで出てくる


//in-Scheduleに関わる処理
   // document.querySelector(".months-and-days h2").innerHTML
    //=months[date.getMonth()];

    //indexで指定した日にちと曜日を表示する

    //予定を入力してそれを保存する
    //const scheduleMessage = document.getElementById("schedule-message");

    //in-Scheduleで保存した内容をとってくる
    


//Slect-daysの処理
    //indexで指定した日にちと曜日を表示する

    //in-Scheduleで保存した予定を追加する

//追加後のindexに関わる処理
    //in-Scheduleで保存した予定を表示する


//それぞれのカレンダー日にちをクリックするとin-Schedule.htmlに移動する。
    const days = document.getElementById("days");
    days.addEventListener("click",function(event){
        event.preventDefault();
        location.href = "./in-Schedule.html";
        console.log("clickしました");
    })
//クリックした後にin-Scheduleの日付をクリックした場所の日付にする
    /*const day = ()=>{
        ("days").on("click",function(){
            ("days").addClass("select-day");
            (".months-and-days h2").text($(this).text())
        });
    };
    */
//クエリ文字列を用いてdayに名前をつけてURLに固有の名前をつける
/*
const day = ()=>{
        ("days").on("click",function(){
            ("days").removeClass("select");
            (this).addClass("select");
            ("#month-day h3").text($(this).text())
        });
    }; */

    //insertData += '<td onclick="setDate(\''+year+'-'+month+'-'+calendarData[i]['day']+'\')">';