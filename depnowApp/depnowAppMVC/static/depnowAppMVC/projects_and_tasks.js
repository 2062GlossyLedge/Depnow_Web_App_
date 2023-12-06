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
let recExpTimeCheckboxChecked = false;
let easyFirstCheckboxChecked = false;
let hardFirstCheckboxChecked = false;
let bbCheckboxChecked = false;
let spCheckboxChecked = false;
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

        document.getElementById("prompt").setAttribute("placeholder", "Enter your task, then press submit");

        // first sub checkoff box
        let recExpTimeCheckbox = document.createElement("input");
        recExpTimeCheckbox.setAttribute("type", "checkbox");
        recExpTimeCheckbox.setAttribute("id", "rec-exp-time");

        let recExpTimeLabel = document.createElement("label");
        recExpTimeLabel.setAttribute("for", "rec-exp-time");
        let recExpTimeCheckboxName = document.createTextNode("include recommended time to complete each subtask ");
        recExpTimeLabel.appendChild(recExpTimeCheckboxName);

        document.getElementById("AI-checkboxes").appendChild(recExpTimeCheckbox);
        document.getElementById("AI-checkboxes").appendChild(recExpTimeLabel);
        document.getElementById("AI-checkboxes").appendChild(document.createElement("br"));
        recExpTimeCheckbox.addEventListener('change', () => {
            if(recExpTimeCheckbox.checked)
            {
                 document.getElementById("prompt").setAttribute("placeholder", "Enter the task and how much time you have to complete the task, then press submit");
                recExpTimeCheckboxChecked = true;
            }
            else{
                 recExpTimeCheckboxChecked = false;
            }
        })

         //second sub checkoff box 
         let easyFirstCheckbox = document.createElement("input");
        easyFirstCheckbox.setAttribute("type", "checkbox");
        easyFirstCheckbox.setAttribute("id", "easy-first");

        let easyFirstLabel = document.createElement("label");
        easyFirstLabel.setAttribute("for", "easy-first");
        let easyFirstCheckboxName = document.createTextNode("Recommend easy tasks first ");
        easyFirstLabel.appendChild(easyFirstCheckboxName);

        document.getElementById("AI-checkboxes").appendChild(easyFirstCheckbox);
        document.getElementById("AI-checkboxes").appendChild(easyFirstLabel);
        document.getElementById("AI-checkboxes").appendChild(document.createElement("br"));

        easyFirstCheckbox.addEventListener('change', () => {
            if(easyFirstCheckbox.checked)
            {
                easyFirstCheckboxChecked = true;
            }
            else{
                easyFirstCheckboxChecked = false;
            }
        })

         //third sub checkoff box 
         let hardFirstCheckbox = document.createElement("input");
        hardFirstCheckbox.setAttribute("type", "checkbox");
        hardFirstCheckbox.setAttribute("id", "hard-first");

        let hardFirstLabel = document.createElement("label");
        hardFirstLabel.setAttribute("for", "hard-first");
        let hardFirstCheckboxName = document.createTextNode("Recommend hard tasks first");
        hardFirstLabel.appendChild(hardFirstCheckboxName);

        document.getElementById("AI-checkboxes").appendChild(hardFirstCheckbox);
        document.getElementById("AI-checkboxes").appendChild(hardFirstLabel);
        document.getElementById("AI-checkboxes").appendChild(document.createElement("br"));

        hardFirstCheckbox.addEventListener('change', () => {
            if(hardFirstCheckbox.checked)
            {
                hardFirstCheckboxChecked = true;
            }
            else{
                hardFirstCheckboxChecked = false;
            }
        })

         //fourth sub checkoff box 
         let bbCheckbox = document.createElement("input");
        bbCheckbox.setAttribute("type", "checkbox");
        bbCheckbox.setAttribute("id", "bb");

        let bbLabel = document.createElement("label");
        bbLabel.setAttribute("for", "bb");
        let bbCheckboxName = document.createTextNode("Recommend unspecific subtasks ");
        bbLabel.appendChild(bbCheckboxName);

        document.getElementById("AI-checkboxes").appendChild(bbCheckbox);
        document.getElementById("AI-checkboxes").appendChild(bbLabel);
        document.getElementById("AI-checkboxes").appendChild(document.createElement("br"));

        bbCheckbox.addEventListener('change', () => {
            if(bbCheckbox.checked)
            {
                bbCheckboxChecked = true;
            }
            else{
                bbCheckboxChecked = false;
            }
            });

             //fifth sub checkoff box 
         let spCheckbox = document.createElement("input");
        spCheckbox.setAttribute("type", "checkbox");
        spCheckbox.setAttribute("id", "sp");

        let spLabel = document.createElement("label");
        spLabel.setAttribute("for", "sp");
        let spCheckboxName = document.createTextNode("Recommend specific subtasks");
        spLabel.appendChild(spCheckboxName);

        document.getElementById("AI-checkboxes").appendChild(spCheckbox);
        document.getElementById("AI-checkboxes").appendChild(spLabel);
        document.getElementById("AI-checkboxes").appendChild(document.createElement("br"));

        spCheckbox.addEventListener('change', () => {
            if(spCheckbox.checked)
            {
                spCheckboxChecked = true;
            }
            else{
                spCheckboxChecked = false;
            }
        })

       


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
                $('#response').append('<p> > ' + prompt + '</p>');
                 if (taskRecCheckboxChecked === true)
                {
                    prompt += " is my task. Given that task, provide me with new subtasks to the task and only respond with bullet list of subtask . Include task's description shown here to make specific subtasks written below the task: " + collectedText;
                   
                    // let title = data.title
                    // console.log(title)
                    // let projectEntryID = data.projectEntry;
                    // console.log(projectEntryID);
                   
                }
                if (recExpTimeCheckboxChecked === true)
                {
                    prompt +=". Include the recommened amount of time to complete each subtask given the amount of time I have to do the task."
                }
               if(easyFirstCheckboxChecked === true)
                {
                    prompt +=". Create the easiest subtasks first. "
                }
                if(hardFirstCheckboxChecked === true)
                {
                    prompt += ". Create the hardest subtasks first"
                }
                if(bbCheckboxChecked === true)
                {
                    prompt += ". Make every subtask unspecific "
                }
                else if(spCheckboxChecked === true)
                {
                    prompt += ". Make every subtask specific"
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
                        $('#response').append('<p> - ' + responseObject + '</p>');
                    }
                });
            });
            
        }); 
    
