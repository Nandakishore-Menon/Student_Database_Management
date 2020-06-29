const but = document.getElementById("viewAll");

but.addEventListener("click", function(event){

var http = new XMLHttpRequest();

http.onreadystatechange = function(){
	if (this.readyState == 4 && this.status == 200){
		var arr = JSON.parse(this.responseText);
		document.getElementById("left").innerHTML="";
		var st="";
		for (var i = 0; i<arr.length; i++){
			st="";
			//document.getElementById("left").innerHTML += `<div class="stu box">`;
			st+= `<div class="stu box"><section class="field name col-lg-3"> ${arr[i].name} </section>`;
			st+= `<section class="field class col-lg-3"> ${arr[i].class} </section>`;
			st+= `<section class="field roll_no col-lg-3"> ${arr[i].roll_no} </section>`;
			st+=`<button class="del">Delete</button></div>`;
			//document.getElementById("left").innerHTML += `<td> ${arr[i].dob} </td>`;
			//document.getElementById("left").innerHTML += `</div>`;
			document.getElementById("left").innerHTML+=st;

		}
		//document.getElementById("left").innerHTML+="</div>";
	}
}
http.open("GET", "http://localhost:4000/api/", true);
http.send();
});