// 設定開始（メッセージの内容と動きを設定してください）

var msg = 'Readmeファイルなどに特に記述のない限り、データに含まれるファイルの著作権は私エレトレマスターにあります。一部のデータは他の方の素材を利用させていただいております。そのようなデータには、各データの作者様に著作権があります。'; // メッセージ内容
var speed = 50; // 表示スピード（1に近いほど速く）
var flag = 1; // 繰り返し（0 = 繰り返す｜1 = 1回だけ）

// 設定終了


var count = 0;

function disp(){

	var type = msg.substring(0, count);

	// テキストフィールドにデータを渡す処理
	document.getElementById("show").textContent = type;

	count ++;

	var rep = setTimeout("disp()", speed);

	if(count > msg.length){

		if(flag == 1){ clearTimeout(rep); }
		else{ count = 0; }

	}

}