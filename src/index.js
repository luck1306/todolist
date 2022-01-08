const ol = document.querySelector("ol");
const new_li = document.createElement("li");
const input_box = document.querySelector("input");
const new_input = document.createElement("input");

const li1 = document.getElementById('1'),li2 = document.getElementById('2'),li3 = document.getElementById('3'),
li4 = document.getElementById('4'),li5 = document.getElementById('5'), ub1 = document.getElementById("updatebtn1")
, ub2 = document.getElementById("updatebtn2"), ub3 = document.getElementById("updatebtn3"), ub4 = document.getElementById("updatebtn4")
, ub5 = document.getElementById("updatebtn5"), db1 = document.getElementById("deletebtn1"), db2 = document.getElementById("deletebtn2")
, db3 = document.getElementById("deletebtn3"), db4 = document.getElementById("deletebtn4"), db5 = document.getElementById("deletebtn5");
let count;
const list = [li1, li2, li3, li4, li5];

function create_list_enterkey() {
    if (window.event.keyCode == 13){
        count = 1;
        for (i in list) {
            if (i.value === null || i.value === undefined){
                break;
            }
            count++;
        }
        switch(count){
            case 1:
                li1.innerHTML = input_box.value;
                break;
            case 2:
                li2.innerHTML = input_box.value;
                break;
            case 3:
                li3.innerHTML = input_box.value;
                break;
            case 4:
                li4.innerHTML = input_box.value;
                break;
            case 5:
                li5.innerHTML = input_box.value;
                break;
            default:
                alert('list is full!!');
        }
        
    }
}

function updateinput(li) {
    if (window.event.keyCode == 13) {
        li.innerHTML = new_input.value;
    }
}

function reset_new_input() {
    new_input.value = null;
}

ub1.addEventListener('click', () =>{
    console.log("ubdate button 1");
    new_input.setAttribute("placeholder", "수정할 내용");
    new_input.setAttribute("onkeyup", "updateinput(li1)");
    //new_input.placeholder = "수정할 내용";
    //new_input.onkeyup = "updateinput(li1)";
    li1.appendChild(new_input);
    reset_new_input();
});
ub2.addEventListener('click', () =>{
    console.log("ubdate button 2");
    new_input.setAttribute("placeholder", "수정할 내용");
    new_input.setAttribute("onkeyup", "updateinput(li2)");
    //new_input.placeholder = "수정할 내용";
    //new_inputonkeyup = "updateinput(li2)";
    li2.appendChild(new_input);
    reset_new_input();
});
ub3.addEventListener('click', () =>{
    console.log("ubdate button 3");
    new_input.setAttribute("placeholder", "수정할 내용");
    new_input.setAttribute("onkeyup", "updateinput(li3)");
    //new_input.placeholder = "수정할 내용";
    //new_input.onkeyup = "updateinput(li3)";
    li3.appendChild(new_input);
    reset_new_input();
});
ub4.addEventListener('click', () =>{
    console.log("ubdate button 4");
    new_input.setAttribute("placeholder", "수정할 내용");
    new_input.setAttribute("onkeyup", "updateinput(li4)");
    //new_input.placeholder = "수정할 내용";
    //new_input.onkeyup = "updateinput(li4)";
    li4.appendChild(new_input);
    reset_new_input();
});
ub5.addEventListener('click', () =>{
    console.log("ubdate button 5");
    new_input.setAttribute("placeholder", "수정할 내용");
    new_input.setAttribute("onkeyup", "updateinput(li5)");
    //new_input.placeholder = "수정할 내용";
    //new_input.onkeyup = "updateinput(li5)";
    li5.appendChild(new_input);
    reset_new_input();
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
db1.addEventListener('click', () => {
    console.log("delete button 1");
    li1.innerHTML = null;
});
db2.addEventListener('click', () => {
    console.log("delete button 2");
    li2.innerHTML = null;
});
db3.addEventListener('click', () => {
    console.log("delete button 3");
    li3.innerHTML = null;
});
db4.addEventListener('click', () => {
    console.log("delete button 4");
    li4.innerHTML = null;
});
db5.addEventListener('click', () => {
    console.log("delete button 5");
    li5.innerHTML = null;
});