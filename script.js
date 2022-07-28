// Get all required elements.....






function get(){ 
    const inputBox = document.querySelector("#displayscreen").value;       // Value Taken from  displayscreen .....  
    const addbtn = document.querySelector(".inputField button");     // Value are inserted to display ........    
   
    if(inputBox.trim() !=0){                     
        addbtn.classList.add("active");       // displayscreen is Not empty  the  .active attributes are started working......                         
    }
    else{
        addbtn.classList.remove("active");       
    }
    
}

//if user click on the add button

function set(){
    let userdata = document.querySelector("#displayscreen").value;         
    let getLocalStorage =  localStorage.getItem("New Todo");            //Getting Local Storage ......     New Todo is also called object .....  
    if(getLocalStorage== null)                                 //local storage is Null ................
    {
        listArr = [];    //create empty array
    }
    else
    {
        listArr = JSON.parse(getLocalStorage);      //Transforming JSON String into a js Object ...........
    }
    listArr.push(userdata );
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask() ;       //calling show task function................
}


function showtask()
{
    const pending = document.querySelector(".penndingTask");
    pending.textContent = listArr.length;  // passing the length value in todo footer   .............
    let newLiTag = "  " ;
    listArr.forEach(myFunction);

    function myFunction(elements , index)
        {
            document.getElementById("todolist").innerHTML = newLiTag;
            newLiTag +=  `<li> ${elements}  <span onclick= "deleteTask(${index})";> D </span></li>`;
        }
       
}

function deleteTask(index)
{
    let getLocalStorage =  localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage); 
    listArr = splice(index , 1);             // Delete the particular tasl in li .............
    // After remove the task (li)  and update tha local storage again .........  
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask();
}
//Delete All Clear Button ..............

function Clearbutton()
{
    const Clear = document.querySelector(".footer button");
    listArr = [];

  // After removing clear ................

    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask();


}