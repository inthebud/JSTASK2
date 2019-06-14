if (sessionStorage.num) {
	document.getElementById("number").innerHTML = sessionStorage.getItem("num");
	document.getElementById("footer").innerHTML = "查看" + sessionStorage.num + "号身份";
}
function jump(){
	if (sessionStorage.num) {
		sessionStorage.num = Number(sessionStorage.num)+1;
	}else{
		sessionStorage.num = 2 ;
	}
	window.location.href="task2-flop2.html";
}
function jumpback(){
	window.location.href="task2-set.html";
}