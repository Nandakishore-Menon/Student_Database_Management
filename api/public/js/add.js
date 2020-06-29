function loadPage(){
        console.log('in load')
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
            
        var add = new XMLHttpRequest();
            
        add.addEventListener("error", function(event){
            alert("error");
        });
        console.log(obj);
        add.open('POST', "http://localhost:4000/api/", true);
        add.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        //add.status=204;
        add.send(obj);

        //document.getElementById('righttext').innerHTML = `Student Added`;
    

};

var http = new XMLHttpRequest();
var regbool=false;
http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var obj = JSON.parse(this.responseText);
        if(obj.length != 0){
            console.log("reg id present");
            regbool=false;
            alert(`Student with resgistration number ${obj[0].reg_id} is already present in database. Try another registration number.`);
            //this.readyState=1;
            return false;
        }
        else{
            console.log("reg id not present");
            regbool=true;
        }
    }
}

const form = document.getElementById("initialForm");
var add = document.getElementById("reg_id");
const addbut = document.getElementById("addBut");
addbut.addEventListener("click", function(event){
    if(regbool==true){
        loadPage();
        return true;
    }
    else{
        alert(`Student with resgistration number ${document.getElementById("reg_id").value} is already present in database. Try another registration number.`);
        return false;
    }
});
add.addEventListener("blur", function(event){
    //event.preventDefault();
    var reg_id = document.getElementById("reg_id").value;
    http.open("GET", `http://localhost:4000/api/reg_id/${reg_id}`, true);
    http.send();
});