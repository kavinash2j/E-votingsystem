function showEditForm() {
    // Show the edit form
    document.getElementById('edit-form').style.display = 'block';
}

function saveProfile() {
    // Get the input values for name and email
    var fullName = document.getElementById('edit-full-name').value;
    var email = document.getElementById('edit-email').value;
    var dob = document.getElementById('edit-dob').value;
    var phone = document.getElementById('edit-phone').value;
    var address = document.getElementById('edit-address').value;

    // Update the profile display
    document.getElementById('user-name').textContent = fullName;
    document.getElementById('user-email').textContent = email;
    document.getElementById('full-name-display').textContent = fullName;
    document.getElementById('email-display').textContent = email;
    document.getElementById('dob-display').textContent = dob;
    document.getElementById('phone-display').textContent = phone;
    document.getElementById('address-display').textContent = address;

    // Hide the edit form
    document.getElementById('edit-form').style.display = 'none';
}