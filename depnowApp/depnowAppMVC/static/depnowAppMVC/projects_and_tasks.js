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
//const taskButtonLoc = document.getElementById('new-task-button-location');
// Function to display project detailsew
function displayProjectDetails() {
    // Add a click event listener to each <li> element
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', function () {
            // Get the text content of the clicked <li> element
            // var projectName = this.textContent;
    
            // // Display the text content in the display area
            // //displayArea.textContent = 'You clicked: ' + textContent;
            // projectTitle.textContent = projectName;

            //show the button to create a new task when a project is selected. Only 1 button shown.
            // if(taskButtonInstance == 0)
            // {
            //     var newTaskButton = document.createElement('button');
            //     newTaskButtonName = document.createTextNode('Create New Task')
            //     newTaskButton.appendChild(newTaskButtonName);
            //     taskButtonLoc.appendChild(newTaskButton);
            //     newTaskButton.addEventListener('click', showPopup);
            //     taskButtonInstance++;


            //  }

           
           
        });
    }




    }

   
//     document.getElementById('new-task-button').addEventListener('click', showPopup);




//     const projectDetails = document.querySelector('.project-details');

//     var taskList = document.getElementById('task-list');
//    // var newTaskButton = document.getElementById('new-task-button');

    

// //     function createTask()
// //     {
// //         var task = document.createElement("li");
    
// //         task.setAttribute("class", 'task');
// //         task.setAttribute("href", "{% url 'tracker' %}");
// //         var t = document.createTextNode('task yo');
// //         task.appendChild(t);
// //         task.innerHTML = `
// // <!-- The modal popup -->
// //         <div class="modal" id="modal">
// //             <div class="modal-content">
// //                 <span class="close" onclick="hidePopup()">&times;</span>
// //                     {{form2}}
           
// //                 <br>
// //                 <button type="button" id='createTask'>Create Task</button>
// //             </div>
// //         </div>

          
// //         `;
// //         taskList.appendChild(task);
    
// //         document.getElementById("task-list").appendChild(task);

// //         document.getElementById('createTask').addEventListener('click', hidePopup)

// //     }




// // Show the modal popup
// function showPopup() {
//     //createTask();
//     var modal = document.getElementById('modal');
//     modal.style.display = 'block';
    
// }


// // Hide the modal popup
// function hidePopup() {
//     var modal = document.getElementById('modal');
//     modal.style.display = 'none';
// }







//  <input type="textbox" placeholder="Enter task"></input>
//             <span class="task-name"><br></span>
//             <p>Due date:
//             <input type="date" class="due-date" value="" placeholder="Due Date"><br>Expected Hours to finish task:</input> 
//             <!-- <input type="number" class="expected-finish" value="" placeholder="Expected Finish"><br></input>
//             <button class="start-focus">Start Focus Session</button>--></p>
 let collectedText = '';
 let data = document.currentScript.dataset;
let taskRecCheckboxChecked = false;
let taskRecCheckbox = document.getElementById("RecTasks");
taskRecCheckbox.addEventListener('change', () => {
    if (taskRecCheckbox.checked)
    {
        taskRecCheckboxChecked = true;
        let myList = document.getElementById('task-list');

        // Initialize an empty string to store the collected text
       

        // Loop through each li element and append its text content to the string
        myList.querySelectorAll('li').forEach(li => {
            collectedText += li.textContent + ' ';
        });
    }
    else
    {
        taskRecCheckboxChecked = false;
    }
    
});
 $(document).ready(function () {
            // Send the form on enter keypress and avoid if shift is pressed 
            // $('#prompt').keypress(function (event) {
            //     if (event.keyCode === 13 && !event.shiftKey) {
            //         event.preventDefault();
            //         $('form').submit();
            //     }
            // });
            $('#message-to-AI').on('click', function (event) {
                event.preventDefault();
                // get the CSRF token from the cookie 
                var csrftoken = Cookies.get('csrftoken');

                // set the CSRF token in the AJAX headers 
                $.ajaxSetup({
                    headers: { 'X-CSRFToken': csrftoken }
                });
                // Get the prompt 
                var prompt = $('#prompt').val();

               

                var dateTime = new Date();
                var time = dateTime.toLocaleTimeString();
                // Add the prompt to the response div 
                $('#response').append('<p>(' + time + ') ' + prompt + '</p>');
                 if (taskRecCheckboxChecked === true)
                {
                    prompt += " Break this task into subtasks and only respond with bullet list of subtask . Use the given task's description and deadline to create dated subtasks specific to the task's description shown here : " + collectedText;
                   
                    // let title = data.title
                    // console.log(title)
                    // let projectEntryID = data.projectEntry;
                    // console.log(projectEntryID);
                   
                }
                let projectEntryID = document.getElementById("project-entry-id");
                // Clear the prompt 
                $('#prompt').val('');
                $.ajax({
                    url: '/tasks_and_AI_chat/'+ projectEntryID.textContent + '/',
                    type: 'POST',
                    data: { prompt: prompt },
                    dataType: 'json',
                    success: function (data) {
                        var responseObject = JSON.parse(data.response);
                        responseObject = responseObject.response


                        // Now responseObject is a JavaScript object
                        console.log(responseObject);
                        $('#response').append('<p>(' + time + ') ' + responseObject + '</p>');
                    }
                });
            });
            // $('#new-project-button').on('click', function (event) {
            //     event.preventDefault();
            //     // get the CSRF token from the cookie 
            //     var csrftoken = Cookies.get('csrftoken');

            //     // set the CSRF token in the AJAX headers 
            //     $.ajaxSetup({
            //         headers: { 'X-CSRFToken': csrftoken }
            //     });
            //     // Get the prompt 
            //     var projectName = $('#project-name-input').val();

            //     //add project to project list
            //     $('#project-list').append('<li>' + projectName + '</li>');
            //     //clear new project prompt
            //     $('#project-name-input').val('');
            // //     $.ajax({
            // //     url: '/projects_and_tasks',  
            // //     type: 'POST',
            // //     data: {projectName : projectName},
            // //     dataType: 'json',
            // //     success: function(data) {
            // //         $('#project-list').append('<li>' + )
            // //     },
            // //     error: function(error) {
          
            // //         console.error('Error:', error);
            // //     }
            // // });
            // });
        }); 
