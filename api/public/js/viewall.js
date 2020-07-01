var display = function(arr){
	document.getElementsByClassName('left')[0].setAttribute("id","left");
	document.getElementById("left").innerHTML="";

	var st="";
	for (var i = 0; i<arr.length; i++){
		st="";
		st+= `<div class="stu box">`;
		st+= `<section class="field" ><span class="title">Reg_id:&nbsp;&nbsp;</span><span id="reg_id">${arr[i].reg_id}</span> </section>`;
		st+= `<section class="field"><span class="title">Name:&nbsp;&nbsp;</span> <span class="name">${arr[i].name}</span> </section>`;
		st+= `<section class="field" ><span class="title">Gender:&nbsp;&nbsp;</span><span id="gender">${arr[i].gender}</span> </section>`;
		st+= `<section class="field" ><span class="title">Class:&nbsp;&nbsp;</span><span id="cl">${arr[i].class}</span> </section>`;
		st+= `<section class="field"><span class="title">Roll_no:&nbsp;&nbsp;</span><span id="roll_no">${arr[i].roll_no}</span> </section>`;
		st+= `<button class="del">Delete</button><button class="upd">Update</button></div>`;
		document.getElementById("left").innerHTML+=st;
	}

	const d = document.getElementsByClassName("del");
	Array.from(d).forEach(function(item, i){
		item.addEventListener('click', function(event){
			var student = document.querySelector(`#left div:nth-child(${i+1})`);
			var name = student.querySelector('.name').textContent;
			var confirmation = confirm(`Are you sure you want to delete ${name} from database?`);
			if(confirmation == true){
				var reg = Number(student.querySelector('#reg_id').textContent);
				var deleteRequest = new XMLHttpRequest();
				deleteRequest.onreadystatechange = function(){
					if (this.readyState == 4 && this.status == 200){
						//alert(`${name} deleted from database`);
						document.getElementsByClassName('left')[0].innerHTML=`<div class="form"><h1 id="stadd">${name}'s data has been deleted.</h1></div>`;
					}
				}
				deleteRequest.open('DELETE', `http://localhost:4000/api/reg_id/${reg}`, true);
				deleteRequest.send();
			}
		});
	});

	const u = document.getElementsByClassName("upd");
	Array.from(u).forEach(function(item, i){
		item.addEventListener('click', function(event){
			var student = document.querySelector(`#left div:nth-child(${i+1})`);
			var name = student.querySelector('.name').textContent;
	
			var cl=student.querySelector('#cl').textContent;
			var roll=student.querySelector('#roll_no').textContent;
			document.getElementsByClassName('left')[0].innerHTML=`<iframe name="dest2"></iframe>
                <form id="updForm" target="dest2">
                    <h1>Add Student</h1>
                    <input type="text" name="name" value="" placeholder="${name}"/>
                    <select id="gender" name="gender" value="">
                    	<option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text" id="sclass" value="" placeholder="${cl}" name="class">
                    <input type="number" id="roll_no" value="" placeholder="${roll}" name="roll_no">
                    <button id="updBut">Update</button>
                </form>`;
            document.getElementById('updBut').addEventListener('click',function(event){
            	var confirmation = confirm(`Are you sure you want to update ${name} in database?`);
               	var form = document.getElementById("updForm");
               	var elements = form.elements;
		        var json ={};
		        for(var i = 0 ; i < elements.length-1 ; i++){
					var item = elements.item(i);
		            if(item.value!=""){
		                console.log(item.name);
	                	if(item.type == "number" || item.type == "tel"){
		                    json[item.name] = Number(item.value);
		                }
		                else{
		                    json[item.name] = item.value;
		                }
		            }
		        };
		        json=JSON.stringify(json);
	            console.log(json);
				if(confirmation == true)
				{
					var reg = Number(student.querySelector('#reg_id').textContent);
					var updateRequest = new XMLHttpRequest();
					updateRequest.onreadystatechange = function(){
						if (this.readyState == 4 && this.status == 200){
							//alert(`${name} updated database`);
							document.getElementsByClassName('left')[0].innerHTML=`<div class="form"><h1 id="stadd">${name}'s data has been updated.</h1></div>`;
						}
					}
					updateRequest.open('PUT', `http://localhost:4000/api/reg_id/${reg}`, true);
					updateRequest.setRequestHeader('Content-type','application/json; charset=utf-8');
					updateRequest.send(json);
					//alert("Updated");

				}
			});
		});
	});
}

var View = function(event){
	var http = new XMLHttpRequest();

	http.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			var arr = JSON.parse(this.responseText);
			display(arr);
		}
	}
	http.open("GET", "http://localhost:4000/api/", true);
	http.send();
}
const but = document.getElementById("viewAll");

but.addEventListener("click", View);
