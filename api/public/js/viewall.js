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
			st+= `<section class="field col-lg-3"> ${arr[i].class} </section>`;
			st+= `<section class="field col-lg-3" id="reg_id"> ${arr[i].reg_id} </section>`;
			st+= `<button class="del">Delete</button></div>`;
			//document.getElementById("left").innerHTML += `<td> ${arr[i].dob} </td>`;
			//document.getElementById("left").innerHTML += `</div>`;
			document.getElementById("left").innerHTML+=st;

		}
		//document.getElementById("left").innerHTML+="</div>";

		const d = document.getElementsByClassName("del");
		Array.from(d).forEach(function(item, i){
			item.addEventListener('click', function(event){
				var student = document.querySelector(`#left div:nth-child(${i+1})`);
				var name = student.querySelector('.name').textContent;
				var confirmation = confirm(`Are you sure you want to delete ${name} from database?`);
				if(confirmation == true)
				{
					var reg = Number(student.querySelector('#reg_id').textContent);
					var deleteRequest = new XMLHttpRequest();
					deleteRequest.onreadystatechange = function(){
						if (this.readyState == 4 && this.status == 200){
							alert(`${name} deleted from database`);
						}
					}
					deleteRequest.open('DELETE', `http://localhost:4000/api/reg_id/${reg}`, true);
					deleteRequest.send();
				}
			});
		});
	}
}
http.open("GET", "http://localhost:4000/api/", true);
http.send();
});