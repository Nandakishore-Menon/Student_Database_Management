var http = new XMLHttpRequest();
function loadPage(){
    var h = new XMLHttpRequest();
    h.onload = function(){
        document.getElementById('initialForm').innerHTML = this.responseText;
    }
    h.open('GET', 'add.html');
    h.send();
}
http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var obj = JSON.parse(this.responseText);
        console.log(obj);
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