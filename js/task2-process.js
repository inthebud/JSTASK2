var objRoles = JSON.parse(sessionStorage.roles);//所有玩家身份
var stateArray = JSON.parse(sessionStorage.rolesState);//所有玩家身份与状态
var day = sessionStorage.days;//天数传递
var dayText = ["第一天","第二天","第三天","第四天","第五天","第六天","第七天","第八天"];
var stepColors = JSON.parse(sessionStorage.stepColors);//步骤状态传递
console.log(day);
console.log(sessionStorage.stepColors);
var record = JSON.parse(sessionStorage.record);//游戏操作记录传递
function setProcess(step1color,step2color,step3color,step4color){
    var div = "<div class=\"days\">\n"+
        "<div class=\"day1\" onclick=\"hideVsShow(this)\">"+dayText[i]+"</div>\n"+
        "<div class=\"lines-outter\">\n"+
        "<ul class=\"lines\">\n"+
        "<li class=\""+step1color+" stepRecord\" id=\"step1\" onclick='changeStep1(this)'><div class=\"img1\"></div>杀手杀人</li>\n"+
        "<li class=\""+step2color+"\" id=\"step2\" onclick='changeStep2(this)'><div class=\"img2\"></div>亡灵发表遗言</li>\n"+
        "<li class=\""+step3color+"\" id=\"step3\" onclick='changeStep3(this)'>玩家依次发言</li>\n"+
        "<li class=\""+step4color+"\" id=\"step4\" onclick='changeStep4(this)'>全民投票</li>\n"+
        "</ul>\n"+
        "</div>\n"+
        "</div>";
    $(".main").append(div);
    if(record[i*2]){
        console.log(record);
        var div2 = "<p class = \"describe\">"+ record[i*2].deadNumber+"号被杀死，身份是"+record[i*2].deadRole+"</p>\n";
        $(".stepRecord").eq(i).after(div2);
    }
    if(stepColors[i+1]){
        $(".lines-outter").eq(i).hide();
    }
}
$(document).ready(function(){
    for (i=0;i<day;i++){
        setProcess(stepColors[i].everyStep.step1color,stepColors[i].everyStep.step2color,stepColors[i].everyStep.step3color,stepColors[i].everyStep.step4color);
    }
});

function changeStep1(data){
    $(function(){
        var x = $(data).parents(".days").index();
        console.log(x);
        if(stepColors[x].everyStep.step1color==="green"){
            alert("请按顺序进行游戏");
        }else{
            stepColors[x].everyStep.step1color = "green";
            sessionStorage.stepColors = JSON.stringify(stepColors);
            window.location.href = "task2-votePage.html";
        }

    });
}
function changeStep2(data){
    $(function(){
        var x = $(data).parents(".days").index();
        console.log(x);
        if(stepColors[x].everyStep.step1color==="blue"||stepColors[x].everyStep.step2color==="green"){
            alert("请按顺序进行游戏");
        }else{
            alert("亡灵发表遗言");
            $(data).removeClass("blue").addClass("green");

            stepColors[x].everyStep.step2color = "green";
            sessionStorage.stepColors = JSON.stringify(stepColors);
        }
    });
}
function changeStep3(data){
    $(function(){
        var x = $(data).parents(".days").index();
        console.log(x);
        if(stepColors[x].everyStep.step2color==="blue"||stepColors[x].everyStep.step3color==="green"){
            alert("请按顺序进行游戏");
        }else{
            alert("玩家依次发言");
            $(data).removeClass("blue").addClass("green");

            stepColors[x].everyStep.step3color = "green";
            sessionStorage.stepColors = JSON.stringify(stepColors);
        }
    });
}
function changeStep4(data){
    $(function(){
        var x = $(data).parents(".days").index();
        console.log(x);
        if(stepColors[x].everyStep.step3color==="blue"||stepColors[x].everyStep.step4color==="green"){
            alert("请按顺序进行游戏");
        }else{
            $(data).removeClass("blue").addClass("green");

            stepColors[x].everyStep.step4color = "green";
            sessionStorage.stepColors = JSON.stringify(stepColors);
            sessionStorage.vote = "true";
            window.location.href = "task2-votePage.html";
        }
    });
}
function hideVsShow(data){
    var target = data.nextSibling.nextSibling;
    $(function(){
        $(target).slideToggle();
    });
    // var thisObj= document.querySelector(".day1")
    // var target = thisObj.nextSibling.nextSibling;
    // if (target.style.display==="none") {
    //     target.style.display="block";
    // }else{
    //     target.style.display="none";
    // }
}
function change(date){
    if(sessionStorage.color!=="green"){
        sessionStorage.color="green";
        window.location.href = "task2-votePage.html";
    }else{
        window.location.href = "task2-votePage.html";
    }
}
function endGame(){
    var a = confirm("确定结束游戏吗？");
    if(a===true){
        sessionStorage.clear();
        window.location.href = "task2-1.html";
    }
}