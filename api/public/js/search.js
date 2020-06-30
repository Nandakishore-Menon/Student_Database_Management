/*
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
    http.open("GET", `http://localhost:4000/api/${filter}/${field}`, true);
    http.send();
});
*/
var Search = function(event){
    console.log("search");
}
const search = document.getElementById("Search");
search.addEventListener("click", Search);