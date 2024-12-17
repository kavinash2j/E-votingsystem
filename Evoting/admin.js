// // Drawer Toggle Functionality
// const drawer = document.getElementById("drawer");
// const drawerToggle = document.querySelector(".drawer-toggle");
// const backArrow = document.querySelector(".back-arrow");

// drawerToggle.addEventListener("click", function() {
//     drawer.classList.toggle("open"); // Toggle the open class to open/close the drawer

//     // Show the back arrow only when the drawer is open
//     backArrow.style.display = drawer.classList.contains("open") ? "block" : "none";
// });

// // Back Arrow Functionality
// backArrow.addEventListener("click", function() {
//     // Close the drawer when the back arrow is clicked
//     drawer.classList.remove("open");
//     backArrow.style.display = "none"; // Hide back arrow when the drawer is closed
// });

// // Fetching votes from Local Storage
// let votes = JSON.parse(localStorage.getItem('votes')) || {};

// // Handle the form submission for adding candidates
// document.getElementById("candidateForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const candidateName = document.getElementById("candidateName").value;
//     const partyName = document.getElementById("partyName").value;

//     if (candidateName && partyName) {
//         // Add new candidate to votes
//         if (!votes[candidateName]) {
//             votes[candidateName] = {
//                 party: partyName,
//                 count: 0
//             };
//         }

//         // Save the updated votes to Local Storage
//         localStorage.setItem("votes", JSON.stringify(votes));

//         // Clear input fields
//         document.getElementById("candidateForm").reset();

//         // Update the vote table and chart
//         renderResultsTable();
//         updateChart();
//     }
// });

// // Function to render the vote results table
// function renderResultsTable() {
//     const tableBody = document.querySelector("#resultsTable tbody");
//     tableBody.innerHTML = ''; // Clear the table

//     // Loop through the votes object and create table rows
//     for (const candidate in votes) {
//         const row = document.createElement("tr");

//         const candidateCell = document.createElement("td");
//         const partyCell = document.createElement("td");
//         const voteCell = document.createElement("td");
//         const deleteCell = document.createElement("td"); // New delete cell

//         candidateCell.textContent = candidate;
//         partyCell.textContent = votes[candidate].party;
//         voteCell.textContent = votes[candidate].count;

//         // Create delete button/icon
//         const deleteBtn = document.createElement("span");
//         deleteBtn.innerHTML = "&#10060;"; // Unicode for 'X' icon
//         deleteBtn.classList.add("delete-btn");
//         deleteBtn.onclick = function() {
//             deleteCandidate(candidate); // Call the delete function when clicked
//         };

//         deleteCell.appendChild(deleteBtn);

//         row.appendChild(candidateCell);
//         row.appendChild(partyCell);
//         row.appendChild(voteCell);
//         row.appendChild(deleteCell);

//         tableBody.appendChild(row);
//     }
// }

// // Function to delete a candidate
// function deleteCandidate(candidateName) {
//     // Remove the candidate from the votes object
//     delete votes[candidateName];

//     // Save the updated votes to Local Storage
//     localStorage.setItem("votes", JSON.stringify(votes));

//     // Update the vote table and chart
//     renderResultsTable();
//     updateChart();
// }

// // Function to update the chart with vote data
// function updateChart() {
//     const ctx = document.getElementById('voteChart').getContext('2d');
    
//     const candidateNames = Object.keys(votes);
//     const voteCounts = candidateNames.map(name => votes[name].count);

//     const chartData = {
//         labels: candidateNames,
//         datasets: [{
//             label: 'Votes',
//             data: voteCounts,
//             backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple'],
//             borderColor: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'],
//             borderWidth: 1
//         }]
//     };

//     new Chart(ctx, {
//         type: 'bar',
//         data: chartData,
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }

// // Initial render of the vote results and chart
// renderResultsTable();
// updateChart();
