// Find the New Project button by class name
var newProjectButton = document.getElementById("new-project");



// Add a click event listener to the New Project button

newProjectButton.addEventListener("click", newProject);

var projectList = document.querySelector('.project-list');

var listItems = projectList.getElementsByTagName('li');



//Create a new list item when clicking on the "Add" button
//https://www.w3schools.com/howto/howto_js_todolist.asp
function newProject() {
    var li = document.createElement("li");
    // var projectList = document.getElementById("project-list");
    var projectName = document.getElementById("project-name-input").value;

    li.setAttribute("data-project", projectName);
    var t = document.createTextNode(projectName);
    li.appendChild(t);
    
    if (projectName === '') {
        alert("You must write something!");
    } else {
        //document.getElementById("project-list").appendChild(li);
        projectList.appendChild(li);
    }
    document.getElementById("project-name-input").value = "";

    //update project list items
    listItems = projectList.getElementsByTagName('li');
}
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
                newTaskButton.addEventListener('click', createTask);
                taskButtonInstance++;



            //     var chatbox = document.createElement('div');
            //     var title = document.createTextNode('AI Assistant');
            //     chatbox.appendChild(title);
            //     var csrftoken = '{ csrf_token }';
            //     chatbox.innerHTML = `
            //      <h1 style="color: white; margin-top: 15px">AI Assistant</h1><div class="content AI-Assistant">
            //     <div class="container p-3">
            //         <div class="mb-3">
            //             <form method="post">
            //             <script>
            //             var csrf = "{{ csrf_token }}"
            //             </script>
            //                 <label for="prompt" class="form-label"><strong>Prompt: </strong></label>
            //                 <textarea class="form-control" type="textarea" id="prompt" name="prompt"
            //                     rows="3"></textarea>
            //                 <br>
            //                 <button class="btn btn-primary" type="submit">Submit</button>
            //             </form>
            //         </div>
            //         <br>
            //         <div class="mb-3">
            //             <h6>Response:</h6>
            //             <div class="container border overflow-auto h-50" id="response"></div>

            //         </div>
            //     </div>
            // </div>`

            // document.getElementById('chatbox').appendChild(chatbox);
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
        var t = document.createTextNode('task');
        task.appendChild(t);
        task.innerHTML = `
            <input type="checkbox"></input>
            <input type="textbox" placeholder="Enter task"></input>
            <span class="task-name"><br></span>
            <p>Due date:
            <input type="date" class="due-date" value="" placeholder="Due Date"><br>Expected Hours to finish task:</input>
            <input type="number" class="expected-finish" value="" placeholder="Expected Finish"><br></input>
            <button class="start-focus">Start Focus Session</button>
        `;
        taskList.appendChild(task);
    
        document.getElementById("task-list").appendChild(task);
    }











