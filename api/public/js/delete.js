var http = new XMLHttpRequest();

http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        document.getElementById("data").innerHTML = this.responseText;
    }
}

const form = document.getElementById("searchForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var filter = document.getElementById("filter").value;
    var field = document.getElementById("field").value;
    console.log(filter);
    http.open("DELETE", `http://localhost:4000/api/${filter}/${field}`, true);
    http.send();
    document.getElementsByClassName('left')[0].innerHTML=`<div class="form"><h1 id="stadd">Student deleted.</h1></div>`;
});