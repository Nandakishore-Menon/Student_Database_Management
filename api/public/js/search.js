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
var Search = function(){
    console.log("test");
    var Reg_id = document.getElementById("reg_id");
    //console.log(Reg_id);
    var Name = document.getElementById("name");
    //console.log(Name);

    Reg_id.addEventListener("input", function(event){
        console.log("reg active");
        console.log(Reg_id.value);
        if(Reg_id.value){
            Name.readOnly = true;
        }
        else{
            Name.readOnly = false;
        }
    });
    Name.addEventListener("input", function(event){ 
        console.log(Reg_id);
        console.log(Reg_id.value);
        //console.log(Name.value);
        if(Name.value){
            console.log("name entered");
            Reg_id.readOnly = true;
        }
        else{
            console.log("name not entered");
            Reg_id.readOnly = false;
        }
    });
    var search = document.getElementById("Search");
    search.addEventListener("click", function(event){
        var http = new XMLHttpRequest();

        http.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                var arr = JSON.parse(this.responseText);
                display(arr);
                }
            }
        
        if(Reg_id.value){
            http.open("GET", `http://localhost:4000/api/reg_id/${Reg_id.value}`, true);
            http.send();
        }
        else if(Name.value){
            http.open("GET", `http://localhost:4000/api/name/${Name.value}`, true);
            http.send();
        }
    });
}
Search();