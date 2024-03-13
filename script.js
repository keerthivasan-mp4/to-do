 const inputBox = document.getElementById("input-box");

                const listContainer = document.getElementById("list-container");

                function addTask() {

                    if (inputBox.value === '') {

                        alert("You must write something!");
                    }

                    else {
                        let li = document.createElement("li");
                        li.innerHTML = inputBox.value;
                        listContainer.appendChild(li);

                        let span = document.createElement("span");
                        span.innerHTML = "\u00d7";
                        li.appendChild(span);



                    }
                    inputBox.value="";
                    save();
                }

// click
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        save();
    }
}, false) 


//save 
function save(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//display

function display(){
    listContainer.innerHTML = localStorage.getItem("data");
}

display();







