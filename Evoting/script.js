// Handle registration form submission
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const voteForm = document.getElementById('voteForm');
    
    // Registration Page
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const aadhar = document.getElementById('aadhar').value;
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const state = document.getElementById('state').value;

            if (aadhar && name && age && state) {
                const userId = 'USER-' + Math.floor(Math.random() * 1000000);
                
                // Save registration details in localStorage (for demo purposes)
                localStorage.setItem('userId', userId);
                localStorage.setItem('aadhar', aadhar);
                localStorage.setItem('name', name);

                // Display confirmation and generated user ID
                document.getElementById('userId').textContent = userId;
                document.getElementById('registrationForm').style.display = 'none';
                document.getElementById('confirmation').style.display = 'block';
            }
        });
    }

    // Login Page
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const enteredUserId = document.getElementById('userId').value;
            const enteredAadhar = document.getElementById('aadhar').value;
            const enteredName = document.getElementById('name').value;

            const storedUserId = localStorage.getItem('userId');
            const storedAadhar = localStorage.getItem('aadhar');
            const storedName = localStorage.getItem('name');

            if (enteredUserId === storedUserId && enteredAadhar === storedAadhar && enteredName === storedName) {
                // Successful login, redirect to voting page
                document.getElementById('loginMessage').textContent = 'Login Successful! Redirecting to vote...';
                setTimeout(() => window.location.href = 'vote.html', 2000);
            } else {
                document.getElementById('loginMessage').textContent = 'Invalid credentials. Please try again.';
                document.getElementById('loginMessage').style.color = 'red';
            }
        });
    }

    // Voting Page
    if (voteForm) {
        voteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const candidate = document.getElementById('candidateSelect').value;
            
            if (candidate) {
                // Simulate voting and show success message
                document.getElementById('voteMessage').textContent = `You have successfully voted for ${candidate}!`;
                document.getElementById('voteMessage').style.display = 'block';
            } else {
                document.getElementById('voteMessage').textContent = 'Please select a candidate before voting.';
                document.getElementById('voteMessage').style.display = 'block';
                document.getElementById('voteMessage').style.color = 'red';
            }
        });
    }
});

// ------------------------------------------
document.getElementById('vote-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');

    if (selectedCandidate) {
        alert(`You voted for: ${selectedCandidate.value}`);
    } else {
        alert('Please select a candidate before continuing.');
    }
});
