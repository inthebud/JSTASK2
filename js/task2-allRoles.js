//身份数组传递
var objRoles = JSON.parse(sessionStorage.roles);
//创建流程页面状态数组对象
var stepColors = [ {date:"1",everyStep:{step1color:"blue",step2color:"blue",step3color:"blue",step4color:"blue"}} ];
sessionStorage.stepColors = JSON.stringify(stepColors);
console.log(objRoles);
//创建身份与存活状态数组对象
var stateArray = new Array(objRoles.length);
for(i=0;i<objRoles.length;i++){
    stateArray[i] ={role:objRoles[i],alive:"yes"};
}
console.log(stateArray);
sessionStorage.rolesState = JSON.stringify(stateArray);
//创建天数
var day = 1;
sessionStorage.days = day;
//创建表示群众投票或杀手杀人操作的变量
sessionStorage.vote = "false";
//创建记录操作过程的对象
var record = [];
sessionStorage.record = JSON.stringify(record);
//创建记录是否已经杀过人的变量
sessionStorage.killed = false;
$(document).ready(function(){
    for (var i = 0; i < objRoles.length; i++) {
        var div = "<div class=\"headPortrait\">\n"+
            "<div class=\"a\">\n"+
            "<div class=\"identity\">"+objRoles[i]+"</div>\n"+
            "<div class=\"number\">"+ (i+1) + "号</div>\n"+
            "</div>\n"+
            "<div class=\"hover\">\n"+
            "<div class=\"hover1\" id=\"hover1Id\"></div>\n"+
            "<div class=\"hover2\"></div>\n"+
            "<div class=\"hover3\"></div>\n"+
            "<div class=\"hover4\"></div>\n"+
            "</div>\n"+
            "</div>";
        $(".main").append(div);
    }
});