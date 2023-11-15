// Find the New Project button by class name
var newProjectButton = document.getElementById("new-project-button");



// Add a click event listener to the New Project button

//newProjectButton.addEventListener("click", newProject);

var projectList = document.querySelector('.project-list');

var listItems = projectList.getElementsByTagName('li');



//Create a new list item when clicking on the "Add" button
//https://www.w3schools.com/howto/howto_js_todolist.asp
// function newProject() {
//     var li = document.createElement("li");
//     // var projectList = document.getElementById("project-list");
//     var projectName = document.getElementById("id_name").value;

//     li.setAttribute("data-project", projectName);
//     var t = document.createTextNode(projectName);
//     li.appendChild(t);
    
//     if (projectName === '') {
//         alert("You must write something!");
//     } else {
//         //document.getElementById("project-list").appendChild(li);
//         projectList.appendChild(li);
//     }
//     document.getElementById("id_name").value = "";

//     //update project list items
//     listItems = projectList.getElementsByTagName('li');
// }
var projectTitle = document.getElementById('project-title');

//start for loop before project is clicked on to be ready for click
projectList.addEventListener('mouseover', displayProjectDetails);

var taskButtonInstance = 0;
// var newTaskButton;
const taskButtonLoc = document.getElementById('new-task-button-location');
// Function to display project detailsew
function displayProjectDetails() {
    // Add a click event listener to each <li> element
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', function () {
            // Get the text content of the clicked <li> element
            var projectName = this.textContent;
    
            // Display the text content in the display area
            //displayArea.textContent = 'You clicked: ' + textContent;
            projectTitle.textContent = projectName;

            //show the button to create a new task when a project is selected. Only 1 button shown.
            if(taskButtonInstance == 0)
            {
                var newTaskButton = document.createElement('button');
                newTaskButtonName = document.createTextNode('Create New Task')
                newTaskButton.appendChild(newTaskButtonName);
                taskButtonLoc.appendChild(newTaskButton);
                newTaskButton.addEventListener('click', showPopup);
                taskButtonInstance++;


             }
           
           
        });
    }




    }

   




    const projectDetails = document.querySelector('.project-details');

    var taskList = document.getElementById('task-list');
   // var newTaskButton = document.getElementById('new-task-button');

    

    function createTask()
    {
        var task = document.createElement("li");
    
        task.setAttribute("class", 'task');
        task.setAttribute("href", "{% url 'tracker' %}");
        var t = document.createTextNode('task yo');
        task.appendChild(t);
        task.innerHTML = `
<!-- The modal popup -->
        <div class="modal" id="modal">
            <div class="modal-content">
                <span class="close" onclick="hidePopup()">&times;</span>

                 <input type="checkbox"></input>
            <input type="textbox" placeholder="Enter task"></input>
            <span class="task-name"><br></span>
            <p>Due date:
            <input type="date" class="due-date" value="" placeholder="Due Date"><br>Expected Hours to finish task:</input> 
            <!-- <input type="number" class="expected-finish" value="" placeholder="Expected Finish"><br></input>
            <button class="start-focus">Start Focus Session</button>-->
                <br>
                <button type="button" id='createTask'>Create Task</button>
            </div>
        </div>

          
        `;
        taskList.appendChild(task);
    
        document.getElementById("task-list").appendChild(task);

        document.getElementById('createTask').addEventListener('click', hidePopup)

    }




// Show the modal popup
function showPopup() {
    createTask();
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    
}


// Hide the modal popup
function hidePopup() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}







