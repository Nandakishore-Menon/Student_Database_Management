console.log("test1");
var http = new XMLHttpRequest();



http.onreadystatechange = function(){
	console.log("test2");
	console.log(this.readyState);
	console.log(this.status);
	if (this.readyState == 4){
		var arr = JSON.parse(this.responseText);
		for (var i = 0; i<arr.length; i++){
			console.log(arr[i]);
			document.getElementById("data").innerHTML += `<tr>`;
			document.getElementById("data").innerHTML += `<td> ${arr[i].name}</td>`;
			document.getElementById("data").innerHTML += `<td> ${arr[i].class}</td>`;
			document.getElementById("data").innerHTML += `<td> ${arr[i].roll_no}</td>`;
			document.getElementById("data").innerHTML += `<td> ${arr[i].dob}</td>`;
			document.getElementById("data").innerHTML += `</tr>`;
		}
		
	}
}
http.open("GET", "http://localhost:4000/api/", true);
http.send();
