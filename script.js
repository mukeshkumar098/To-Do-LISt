let inputtodo = document.getElementById("inputtodo");
let buttontodo = document.getElementById("buttontodo");
showtask()
buttontodo.addEventListener("click", function() {
    inputtodovalu = inputtodo.value;
    if (inputtodovalu.trim() != 0) {


        let webtask = localStorage.getItem("localtask");
        if (webtask == null) {
            taskobj = [];

        } else {
            taskobj = JSON.parse(webtask);
        }
        taskobj.unshift(inputtodovalu);
        localStorage.setItem("localtask", JSON.stringify(taskobj));
        inputtodo.value = '';

    }
    showtask();
})

function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskobj = [];

    } else {
        taskobj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskobj.forEach((item, index) => {
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    <td>${item}</td>
                    
                    <td><button class="btn btn btn-success" type="button" onclick="edittasks(${index})">Edit</button></td>
                    <td><button class="btn btn-danger"" type="button" onclick="deletee()" >Delete</button></td>
                </tr>`;

    });
    addedtasklist.innerHTML = html;
    //edit task
}

function edittasks(index) {
    let saveindex = document.getElementById("saveindex");
    let buttontodo = document.getElementById("buttontodo");
    let savebuttontodo = document.getElementById("savebuttontodo")
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    inputtodo.value = taskobj[index];
    buttontodo.style.display = "none"
    savebuttontodo.style.display = "block"
}
// savetask
let savebuttontodo = document.getElementById("savebuttontodo");

savebuttontodo.addEventListener("click", function() {
    let inputtodo = document.getElementById("inputtodo");
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;
    taskobj[saveindex] = inputtodo.value;
    savebuttontodo.style.display = "none"
    buttontodo.style.display = "block"
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    inputtodo.value = '';
    showtask();


})

function deletee(index) {
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    taskobj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    showtask();
}

window.onload = function() {
    setTimeout(() => {
        document.getElementById("welcomemsg").style.display = 'none';

    }, 2000);


};
// const dashicon = document.querySelector(".fa-bars")
// const dashboard = document.getElementsByClassName("dash");
// dashicon.addEventListener("click", () => {
//     dashboard.style.display = "block";
// })