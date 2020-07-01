
var signUpButton = document.getElementById('Add');
const signInButton = document.getElementById('GoBack');
const container = document.getElementById('container');
var lr;

function queryfunc(x) {
  if (x.matches) { 
        lr=document.getElementsByClassName('left')[0];
        var signUpButton=document.getElementById('Addid');
        console.log(lr);
        console.log(signUpButton);
        signUpButton.addEventListener('click', () => {
    //container.classList.add("right-panel-active");
    //console.log(lr);
    lr.innerHTML=`<iframe name="dest"></iframe>
                <form id="initialForm" target="dest">
                    <h1>Add Student</h1>
                    <input type="number" name="reg_id" id="reg_id" placeholder="Registration number" required />
                    <input type="text" name="name" placeholder="Name" required/>
                    <select id="gender" name="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text" id="sclass" placeholder="Class" name="class" required>
                    <input type="number" id="roll_no" placeholder="Roll number" name="roll_no" required>
                    <button id="addBut">Add</button>
                </form>`;
    Add();
});
  } 
  else {
        lr=document.getElementsByClassName('right')[0];
        var signUpButton = document.getElementById('Add');
        signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    //console.log(lr);
    lr.innerHTML=`<iframe name="dest"></iframe>
                <form id="initialForm" target="dest">
                    <h1>Add Student</h1>
                    <input type="number" name="reg_id" id="reg_id" placeholder="Registration number" required />
                    <input type="text" name="name" placeholder="Name" required/>
                    <select id="gender" name="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text" id="sclass" placeholder="Class" name="class" required>
                    <input type="number" id="roll_no" placeholder="Roll number" name="roll_no" required>
                    <button id="addBut">Add</button>
                </form>`;
    Add();
});

  }
}
var x = window.matchMedia("(max-width: 767px)");

if(x.matches){
    queryfunc(x);
}
else{
    queryfunc(x);
}
x.addListener(queryfunc);

// signUpButton.addEventListener('click', () => {
//     container.classList.add("right-panel-active");
//     //console.log(lr);
//     lr.innerHTML=`<iframe name="dest"></iframe>
//                 <form id="initialForm" target="dest">
//                     <h1>Add Student</h1>
//                     <input type="number" name="reg_id" id="reg_id" placeholder="Registration number" required />
//                     <input type="text" name="name" placeholder="Name" required/>
//                     <select id="gender" name="gender">
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Other">Other</option>
//                     </select>
//                     <input type="text" id="sclass" placeholder="Class" name="class" required>
//                     <input type="number" id="roll_no" placeholder="Roll number" name="roll_no" required>
//                     <button id="addBut">Add</button>
//                 </form>`;
//     Add();
// });

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    document.getElementsByClassName('left')[0].innerHTML=
                `<div class="form" action="#">
                    <h1>View Student</h1>
                    <input type="number" name="reg_id" id="Reg_id" placeholder="Registration number" />
                    <span>OR</span>
                    <input type="text" name="name" id="Name" placeholder="Name" />
                    <button id="Search">Search</button>
                    <button id="viewAll">View All</button>
                    <button class="ghost hidden" id="Addid">Add</button>
                </div>`;
    Search();
    const view = document.getElementById("viewAll");
    view.addEventListener("click", View);
});


