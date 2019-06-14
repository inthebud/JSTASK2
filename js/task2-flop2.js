var objroles = JSON.parse(sessionStorage.roles);
document.getElementById("myRole").innerHTML = "角色：" + objroles[sessionStorage.num-2];
if(sessionStorage.num){
    document.getElementById("number").innerHTML = sessionStorage.getItem("num")-1;
    if (sessionStorage.num<=objroles.length){
        document.getElementById("footer").innerHTML = "隐藏并传递给" + sessionStorage.num + "号";
    } else{
        document.getElementById("footer").innerHTML = "法官查看";
    }
}

function jump(){
    if (sessionStorage.num<=objroles.length){
        window.location.href = "task2-flop1.html";
    } else{
        window.location.href = "task2-allRoles.html";
    }
}

function jumpback(){
    sessionStorage.removeItem("num");
    window.location.href="task2-set.html";
}