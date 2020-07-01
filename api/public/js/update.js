function loadPage(reg){
    var h = new XMLHttpRequest();
    h.onload = function(){
    document.getElementById('Body').innerHTML = this.responseText;
    document.getElementById('reg_id').value = reg;
    function sendData() {
        var elements = form.elements;
        var obj ={};
        for(var i = 0 ; i < elements.length-1 ; i++){
            var item = elements.item(i);
            if(item.value){
                if(item.type == "number" || item.type == "tel"){
                    obj[item.name] = Number(item.value);
                }
                else{
                    obj[item.name] = item.value;
                }
            }
        }
        obj = JSON.stringify(obj);
        console.log(obj);
        var http = new XMLHttpRequest();
            
        http.addEventListener("error", function(event){
            alert("error");
        });
    
        http.open('PUT', `http://localhost:4000/api/reg_id/${reg}`, true);
        http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        http.send(obj);
        document.getElementsByClassName('left')[0].innerHTML=`<div class="form"><h1 id="stadd">Student updated.</h1></div>`;
    }
    const form = document.getElementById("studentForm");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        sendData();
    });
    }
    h.open('GET', 'update.html');
    h.send();
}


var http = new XMLHttpRequest();
http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var obj = JSON.parse(this.responseText);
        if(obj.length != 0){
            console.log("reg id present");
            loadPage(reg_id.value);
        }
        else{
            console.log("reg id not present");
            document.getElementById('data').textContent = 
            `Student with resgistration number ${reg_id.value} is not present in database.
            Try another registration number.`;
        }
    }
}

const form = document.getElementById("initialForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var reg_id = document.getElementById("reg_id").value;
    http.open("GET", `http://localhost:4000/api/reg_id/${reg_id}`, true);
    http.send();
});