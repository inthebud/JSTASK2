var objRoles = JSON.parse(sessionStorage.roles);
var stateArray = JSON.parse(sessionStorage.rolesState);
var killed = JSON.parse(sessionStorage.killed);
var stepColors = JSON.parse(sessionStorage.stepColors);
var day = JSON.parse(sessionStorage.days);//天数传递
console.log(objRoles);
 console.log(stateArray);
 console.log(sessionStorage.vote);
var record = JSON.parse(sessionStorage.record);
var keeler = sessionStorage.keeler;
var civilian = sessionStorage.civilian;
function setPeople(color){
        var div = "<div class=\"headPortrait\" onclick=\"kill(this)\" >\n"+
            "<div class=\"a\">\n"+
            "<div class=\"identity "+ color +"\">" +objRoles[i]+"</div>\n"+
            "<div class=\"number\">"+ (i+1) + "号</div>\n"+
            "</div>\n"+
            "<div class=\"hover\">\n"+
            "<div class=\"hover1\" ></div>\n"+
            "<div class=\"hover2\"></div>\n"+
            "<div class=\"hover3\"></div>\n"+
            "<div class=\"hover4\"></div>\n"+
            "</div>\n"+
            "</div>";
        $(".main").append(div);
}
$(document).ready(function(){
    for(i=0;i<stateArray.length;i++){
        if(stateArray[i].alive==="no"){
            setPeople("green");
        }else{
            setPeople("blue");
        }
    }
});
function kill(data){
    var roleBox = data.firstChild.nextSibling;
    console.log(roleBox);
    $(function () {
        var index = $(data).index();
        console.log(index);
        var a = confirm("确定杀掉这个人吗？");
        if(a===true) {
            if(stateArray[index].alive==="no"){
                alert("换个人吧，此人已死");
            }else if(stateArray[index].role==="杀手"&&sessionStorage.vote==="false"){
                alert("杀手不能自杀哦！")
            }else if(killed === true){
                alert("不要这么贪心，一次只能杀一人")
            }
            else{
                roleBox.firstChild.nextSibling.style.backgroundColor = "#83b09a";
                stateArray[index].alive = "no";
                record.push({day:sessionStorage.days,deadNumber:index+1,deadRole:stateArray[index].role});
                killed = true;
                sessionStorage.killed = killed;
                console.log(stateArray);
                console.log(record);
                sessionStorage.rolesState=JSON.stringify(stateArray);
                sessionStorage.record = JSON.stringify(record);
                //改变存活的杀手与平民的人数
                if(stateArray[index].role==="平民"){
                    civilian = civilian-1;
                    sessionStorage.civilian = civilian;
                }else{
                    keeler = keeler-1;
                    sessionStorage.keeler = keeler;
                }
                console.log("keeler:"+keeler+",civilian:"+civilian);
            }
        }
    })
}
function killVsJump(){
    if(killed===false){
        alert("请按顺序游戏，杀个人再走吧！")
    }else if(keeler<civilian&&sessionStorage.vote==="true"&&keeler!==0) {
        sessionStorage.vote = "false";
        sessionStorage.days = day+1;
        sessionStorage.killed = false;
        stepColors.push({date:sessionStorage.days,everyStep:{step1color:"blue",step2color:"blue",step3color:"blue",step4color:"blue"}});
        sessionStorage.stepColors = JSON.stringify(stepColors);
        window.location.href = "task2-process.html";
    }else if(keeler<civilian&&sessionStorage.vote==="false"&&keeler!==0){
        sessionStorage.killed = false;
        window.location.href = "task2-process.html";
    }
    else{
        window.location.href = "task2-3.html";
    }
}