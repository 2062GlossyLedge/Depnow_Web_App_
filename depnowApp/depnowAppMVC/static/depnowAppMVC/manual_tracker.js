function submitFocusSession() {
    // Get input values
    var hours = document.getElementById('hours').value;
    var minutes = document.getElementById('minutes').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Combine date and time into a single string
    var dateTime = date + ' ' + time;

    // Create a JavaScript Date object from the combined date and time string
    var focusDate = new Date(dateTime);

    // Check if the Date object is valid
    if (isNaN(focusDate)) {
        alert('Invalid date or time format. Please enter a valid date and time.');
        return;
    }

    // Perform any additional actions with the data (e.g., store it in a database, display it on the page, etc.)
    console.log('Focus Session Date and Time:', focusDate);
    console.log('Focus Session Duration:', hours, 'hours', minutes, 'minutes');
    console.log('Rating:', rating, 'out of 5');
    console.log('Reflection:', reflection);

    // Optionally, you can submit the form to a server using AJAX or a form submission mechanism
    // For this example, we will just log the data to the console.

    // Clear the form fields after submission
    document.getElementById('focusForm').reset();
}
