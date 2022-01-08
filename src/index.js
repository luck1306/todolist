const ol = document.querySelector("ol");
const new_li = document.createElement("li");
const input_box = document.querySelector("input");
const li1 = document.getElementById('1'),li2 = document.getElementById('2'),li3 = document.getElementById('3'),
li4 = document.getElementById('4'),li5 = document.getElementById('5');
let count = 1;

const form = document.getElementById("form").onsubmit = () => {
    switch(count){
        case 1:
            li1.innerHTML = input_box.value;
            count++;
            break;
        case 2:
            li2.innerHTML = input_box.value;
            count++;
            break;
        case 3:
            li3.innerHTML = input_box.value;
            count++;
            break;
        case 4:
            li4.innerHTML = input_box.value;
            count++;
            break;
        case 5:
            li5.innerHTML = input_box.value;
            count++;
            break;
    }
}