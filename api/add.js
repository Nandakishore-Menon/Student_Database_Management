window.addEventListener("load", function(){
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
    }
    const form = document.getElementById("studentForm");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        sendData();
    });
});