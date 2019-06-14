var objRoles = JSON.parse(sessionStorage.roles);
var stateArray = JSON.parse(sessionStorage.rolesState);

var stepColors = JSON.parse(sessionStorage.stepColors);
var day = JSON.parse(sessionStorage.days);//天数传递
console.log(objRoles);
console.log(stateArray);
console.log(day);
var record = JSON.parse(sessionStorage.record);
console.log(record);
var keeler = JSON.parse(sessionStorage.keeler);
var civilian = sessionStorage.civilian;
var dayText = ["第一天","第二天","第三天","第四天","第五天","第六天","第七天","第八天"];
if(keeler===0){
    $(function(){
        $(".result").css({"background-image":"url(images/33_2.png)"});
    })
}else{
    $(function(){
        $(".result").css({"background-image":"url(images/33.png)"});
    })
}
function recordText(){
    var div =
        "<div class=\"date\">\n"+
        "<div class=\"line1\">\n"+
        "<div class=\"day\">"+dayText[i]+"</div>\n"+
        "<div class=\"time\">0小时07分</div>\n"+
    "</div>\n"+
    "<div class=\"line2\">晚上："+record[i*2].deadNumber+"号被杀手杀死，"+record[i*2].deadNumber+"号是"+record[i*2].deadRole+"</div>\n"+
    "<div class=\"line3\">白天："+record[i*2+1].deadNumber+"号被全民投票投死，"+record[i*2+1].deadNumber+"号是"+record[i*2+1].deadRole+"</div>\n"+
    "</div>";
    $(".part2").append(div);
}
$(document).ready(function(){
    for (i=0;i<day;i++){
        recordText();
    }
    document.getElementById("text1id").innerHTML = "本次游戏共经历"+day+"天";
    document.getElementById("text2id").innerHTML = "剩余玩家：<br>杀  手: "+keeler+"人<br>平  民:"+civilian+"人<br>";
});
function onceAgain() {
    sessionStorage.clear();
    window.location.href = "task2-1.html";
}