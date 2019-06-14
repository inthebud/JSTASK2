var sum = document.getElementById("inputid").value;
var keeler,civilian;
function setting(event){
	sum  = document.getElementById("inputid").value;
	if(sum>3 && sum<19){
		keeler = Math.floor(sum*0.25);
		civilian = sum-keeler;
		sessionStorage.keeler = keeler;
		sessionStorage.civilian = civilian;
		document.getElementById("keelertext").innerHTML="杀手"+keeler+"人";
		document.getElementById("civiliantext").innerHTML="平民"+civilian+"人";

		//创建一个长度等于所有人数的数组，每个元素赋值为“平民”
		var role = new Array(sum);
		for (var i = 0; i < sum; i++) {
			role[i] = "平民" ;
		}

		//创建一个长度等于所有人数的数组，存放上一个数组的索引数字
		var roleIndex = new Array(sum);
		for (var i = 0; i<sum; i++){
			roleIndex[i] = i;
		}

		for(var i=roleIndex.length; i--;){
			//取出一个0-sum之间的随机数
			var random = Math.floor(Math.random()*(i+1));
			//将原roleIndex数组的最后一位取出临时赋值给temp变量
			var temp = roleIndex[i];
			//将从原roleIndex取出的随机某一位元素赋值给倒数最后一位
			roleIndex[i] = roleIndex[random];
			//将原最后一位元素赋值给之前获取的随机元素
			roleIndex[random]=temp;
			console.log(i);
			//以上操作循环，每次都将原数组索引为i的元素与i之前的随机某一位元素互换,
			//最终得到一个数字0-sum随机排列的数组roleIndex
		}
		//从roleIndex数组中取出与杀手人数相等的前几位乱序数字为索引，将杀手身份赋值给对应元素
		for(var i = 0; i<keeler ;i++){
			role[roleIndex[i]] = "杀手";
		}
		console.log(role);
		sessionStorage.roles = JSON.stringify(role);
	}else{
		document.getElementById("keelertext").innerHTML="杀手"+ "&emsp;" + "人";
		document.getElementById("civiliantext").innerHTML="平民"+ "&emsp;" + "人";
		document.getElementById('hiddenalert').style.display='block';
	}
}
function jump(){
	sum = document.getElementById("inputid").value;
	if(sum>3 && sum<19){
		window.location.href="task2-flop1.html";
	}else{
		document.getElementById("keelertext").innerHTML="杀手"+ "&emsp;" + "人";
		document.getElementById("civiliantext").innerHTML="平民"+ "&emsp;" + "人";
		document.getElementById('hiddenalert').style.display='block';
	}
}
function jumpback(){
	window.location.href="task2-1.html";
}
var str = 'sad';
