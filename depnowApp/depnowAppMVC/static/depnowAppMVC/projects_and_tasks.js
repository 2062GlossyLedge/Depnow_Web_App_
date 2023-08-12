const projectListItems = document.querySelectorAll('.project-list li');
const projectDetails = document.querySelector('.project-details');
const projectTitle = projectDetails.querySelector('h1');
const taskList = projectDetails.querySelector('.task-list');
const newTaskButton = projectDetails.querySelector('.new-task-button');

// Add click event listener to project list items
projectListItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectName = item.getAttribute('data-project');
        displayProjectDetails(projectName);
    });
});

// Function to display project details
function displayProjectDetails(projectName) {
    projectTitle.textContent = projectName;
     // Set the project title in the tasks content area
     document.getElementById('project-title').textContent = projectName;



    // Clear existing task list
    taskList.innerHTML = '';

    // TODO: Load tasks for the selected project and populate taskList
     // Simulated tasks for demonstration
    const tasks = [
        { name: 'Task 1', dueDate: '2023-08-15', expectedFinish: '5' },
        { name: 'Task 2', dueDate: '2023-08-18', expectedFinish: '20' },
        { name: 'Task 3', dueDate: '2023-08-20', expectedFinish: '2' }
        // Add more tasks as needed
    ];

    // Populate task list
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox"></input>
            <span class="task-name">${task.name}<br></span>
            <p>Due date:
            <input type="date" class="due-date" value="${task.dueDate}" placeholder="Due Date"><br>Expected Hours to finish task:</input>
            <input type="number" class="expected-finish" value="${task.expectedFinish}" placeholder="Expected Finish"><br></input>
            <button class="start-focus">Start Focus Session</button>
        `;
        taskList.appendChild(taskItem);
    });

    // Show the project details view
    projectDetails.style.display = 'block';
}

// Add click event listener to new task button
newTaskButton.addEventListener('click', () => {
    // TODO: Implement functionality to create a new task for the selected project
});
