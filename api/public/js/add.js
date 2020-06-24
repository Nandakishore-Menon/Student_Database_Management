var http = new XMLHttpRequest();
function loadPage(){
    var h = new XMLHttpRequest();
    h.onload = function(){
    document.getElementById('bform').innerHTML = this.responseText;
    function sendData() {
        var elements = form.elements;
        var obj ={};
        for(var i = 0 ; i < elements.length-1 ; i++){
            var item = elements.item(i);
            if(item.type == "number" || item.type == "tel"){
                obj[item.name] = Number(item.value);
            }
            else{
                obj[item.name] = item.value;
            }
        }
        obj = JSON.stringify(obj);
            
        var http = new XMLHttpRequest();
            
        http.addEventListener("error", function(event){
            alert("error");
        });
    
        http.open('POST', "http://localhost:4000/api/", true);
        http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        http.send(obj);
        document.getElementById('bform').innerText = "Student added";
    }
    const form = document.getElementById("studentForm");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        sendData();
    });
    }
    h.open('GET', 'add.html');
    h.send();
}

http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var obj = JSON.parse(this.responseText);
        if(obj.length != 0){
            console.log("reg id present");
            document.getElementById('data').textContent = `Student with resgistration number ${obj[0].reg_id} is already present in database. Try another registration number.`
        }
        else{
            console.log("reg id not present");
            loadPage();
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