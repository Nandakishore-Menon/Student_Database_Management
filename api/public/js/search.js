var Search = function(){
    var Reg_id = document.getElementById("Reg_id");
    var Name = document.getElementById("Name");

    Reg_id.addEventListener("input", function(event){
        if(Reg_id.value){
            Name.readOnly = true;
        }
        else{
            Name.readOnly = false;
        }
    });
    Name.addEventListener("input", function(event){
        if(Name.value){
            Reg_id.readOnly = true;
        }
        else{
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