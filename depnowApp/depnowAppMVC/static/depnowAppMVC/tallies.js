let selectedTally = null;

function toggleMilestone(tallyNumber) {
    var tallyBox = document.getElementById('tallyBox');
    var tallies = tallyBox.getElementsByClassName('tally');

    if (selectedTally === tallies[tallyNumber - 1]) {
        // If the same tally is clicked again, unselect it
        selectedTally.classList.remove('active');
        selectedTally = null;
        hideMilestoneBox();
    } else {
        // Otherwise, select the new tally
        if (selectedTally !== null) {
            selectedTally.classList.remove('active');
        }
        tallies[tallyNumber - 1].classList.add('active');
        selectedTally = tallies[tallyNumber - 1];
        showMilestoneBox();
        updateMilestoneLabel(tallyNumber);
    }
}

function showMilestoneBox() {
    var milestoneBox = document.getElementById('milestoneBox');
    milestoneBox.style.display = 'block';
}

function hideMilestoneBox() {
    var milestoneBox = document.getElementById('milestoneBox');
    milestoneBox.style.display = 'none';
}

function updateMilestoneLabel(tallyNumber) {
    var clickedTallyLabel = document.getElementById('clickedTallyLabel');
    clickedTallyLabel.textContent = getTallyTime(tallyNumber);
}

function getTallyTime(tallyNumber) {
    var times = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM'];
    return times[tallyNumber - 1];
}

function saveMilestone() {
    if (selectedTally === null) {
        alert('Please select a tally before saving the milestone.');
        return;
    }

    var milestoneInput = document.getElementById('milestoneInput').value;
    console.log('Milestone Reached for', getTallyTime(getTallyNumber(selectedTally)), ':', milestoneInput);

    // Mark the tally as completed
    selectedTally.classList.add('completed');

    // Optionally, you can do something else with the milestone value, like storing it or displaying it on the page.

    // Clear the input field, hide the milestone box, and unselect the tally
    document.getElementById('milestoneInput').value = '';
    hideMilestoneBox();
    selectedTally.classList.remove('active');
    selectedTally = null;
}

function getTallyNumber(tallyElement) {
    var tallyBox = document.getElementById('tallyBox');
    var tallies = tallyBox.getElementsByClassName('tally');
    for (var i = 0; i < tallies.length; i++) {
        if (tallies[i] === tallyElement) {
            return i + 1;
        }
    }
    return null;
}
