var UserDetails = [];

var http = new XMLHttpRequest();

http.onreadystatechange = function () {
  if (http.readyState === 4) {
    var response = JSON.parse(http.responseText);
    UserDetails = response;
    //console.log(UserDetails);
    displayUser(UserDetails);
    //console.log(UserDetails);
  }
};

http.open("GET", "http://localhost:3000/user");

http.send();
//console.log(UserDetails);

function displayUser(UserDetails) {
  var userTableBody = document.getElementById("userTableBody");
  userTableBody.innerHTML = "";
  for (i = 0; i < UserDetails.length; i++) {
    console.log(UserDetails[i].uName);
    var newRow = document.createElement("tr");
    var newName = document.createElement("td");
    newName.innerHTML = UserDetails[i].uName;
    newRow.appendChild(newName);
    var newEmail = document.createElement("td");
    newEmail.innerHTML = UserDetails[i].uEmail;
    newRow.appendChild(newEmail);
    var newRole = document.createElement("td");
    newRole.innerHTML = UserDetails[i].uRole;
    newRow.appendChild(newRole);
    var newStatus = document.createElement("td");
    newStatus.innerHTML = UserDetails[i].uStatus;
    newRow.appendChild(newStatus);
    var newAction = document.createElement("td");
    newAction.classList.add("action");
    newAction.innerHTML = `
    <button onclick="editUser('${UserDetails[i].id}')">Edit</button>
  <button onclick="deleteUser('${UserDetails[i].id}')">Delete</button>
    `;
    newRow.appendChild(newAction);
    userTableBody.appendChild(newRow);
  }
}

function deleteUser(userId) {
  console.log(typeof userId);
  try {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          var response = JSON.parse(http.responseText);
          window.alert("Product deleted successfully");
        } else {
          window.alert("Error: " + http.status + " - " + http.statusText);
        }
      }
    };

    http.open("DELETE", "http://localhost:3000/user/" + userId);
    http.send();
  } catch (error) {
    window.alert("An error occurred: " + error.message);
  }
}
function editUser(userId) {
  console.log(typeof userId);
  var userDetail = [];
  try {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          var response = http.responseText;
          console.log(typeof response);
          sessionStorage.setItem("user", response);

          // window.alert("Product deleted successfully" + response.uName);
          window.location.href = "EditUserpage.html";
        } else {
          window.alert("Error: " + http.status + " - " + http.statusText);
        }
      }
    };

    http.open("GET", "http://localhost:3000/user/" + userId);
    http.send();
  } catch (error) {
    window.alert("An error occurred: " + error.message);
  }
}

function filterUsers1() {
  var userRole = document.getElementById("role").value;
  sessionStorage.setItem("userRole", userRole);
  console.log(userRole);
  displayUser1(UserDetails);
  console.log(UserDetails, userRole);
}
function displayUser1(UserDetails) {
  var userTableBody = document.getElementById("userTableBody");
  userTableBody.innerHTML = "";
  var userRole1 = sessionStorage.getItem("userRole");
  console.log(typeof userRole1);
  for (i = 0; i < UserDetails.length; i++) {
    if (userRole1 == UserDetails[i].uRole) {
      console.log(UserDetails[i].uName);
      var newRow = document.createElement("tr");
      var newName = document.createElement("td");
      newName.innerHTML = UserDetails[i].uName;
      newRow.appendChild(newName);
      var newEmail = document.createElement("td");
      newEmail.innerHTML = UserDetails[i].uEmail;
      newRow.appendChild(newEmail);
      var newRole = document.createElement("td");
      newRole.innerHTML = UserDetails[i].uRole;
      newRow.appendChild(newRole);
      var newStatus = document.createElement("td");
      newStatus.innerHTML = UserDetails[i].uStatus;
      newRow.appendChild(newStatus);
      var newAction = document.createElement("td");
      newAction.classList.add("action");
      newAction.innerHTML = `
    <button onclick="editUser('${UserDetails[i].id}')">Edit</button>
  <button onclick="deleteUser('${UserDetails[i].id}')">Delete</button>
    `;
      newRow.appendChild(newAction);
      userTableBody.appendChild(newRow);
    } else if (userRole1 == "0") {
      displayUser(UserDetails);
    }
  }
}

function filterUsers() {
  var userStaus = document.getElementById("status").value;
  sessionStorage.setItem("userStaus", userStaus);
  console.log(userStaus);
  displayUser2(UserDetails);
  console.log(UserDetails, userStaus);
}
function displayUser2(UserDetails) {
  var userTableBody = document.getElementById("userTableBody");
  userTableBody.innerHTML = "";
  var userStaus1 = sessionStorage.getItem("userStaus");
  console.log(typeof userRole1);
  for (i = 0; i < UserDetails.length; i++) {
    if (userStaus1 == UserDetails[i].uStatus) {
      console.log(UserDetails[i].uName);
      var newRow = document.createElement("tr");
      var newName = document.createElement("td");
      newName.innerHTML = UserDetails[i].uName;
      newRow.appendChild(newName);
      var newEmail = document.createElement("td");
      newEmail.innerHTML = UserDetails[i].uEmail;
      newRow.appendChild(newEmail);
      var newRole = document.createElement("td");
      newRole.innerHTML = UserDetails[i].uRole;
      newRow.appendChild(newRole);
      var newStatus = document.createElement("td");
      newStatus.innerHTML = UserDetails[i].uStatus;
      newRow.appendChild(newStatus);
      var newAction = document.createElement("td");
      newAction.classList.add("action");
      newAction.innerHTML = `
    <button onclick="editUser('${UserDetails[i].id}')">Edit</button>
  <button onclick="deleteUser('${UserDetails[i].id}')">Delete</button>
    `;
      newRow.appendChild(newAction);
      userTableBody.appendChild(newRow);
    } else if (userStaus1 == "0") {
      displayUser(UserDetails);
    }
  }
}

let searchBar = document.querySelector("#search");
searchBar.onkeydown = function (event) {
  // Check if the Enter key (key code 13) was pressed
  if (event.key === "Enter" || event.keyCode === 13) {
    // Prevent the default action, if necessary
    event.preventDefault();

    // Call your search function or execute your search logic here
    console.log("Enter key pressed, performing search for:", searchBar.value);
    var username = searchBar.value;
    sessionStorage.setItem("userName", username);
    // Example: performSearch(searchBar.value);
    displayUser3(UserDetails);
  }
};
function displayUser3(UserDetails) {
  var userTableBody = document.getElementById("userTableBody");
  userTableBody.innerHTML = "";
  var userName1 = sessionStorage.getItem("userName");
  console.log(typeof userRole1);
  for (i = 0; i < UserDetails.length; i++) {
    if (userName1 == UserDetails[i].uName) {
      console.log(UserDetails[i].uName);
      var newRow = document.createElement("tr");
      var newName = document.createElement("td");
      newName.innerHTML = UserDetails[i].uName;
      newRow.appendChild(newName);
      var newEmail = document.createElement("td");
      newEmail.innerHTML = UserDetails[i].uEmail;
      newRow.appendChild(newEmail);
      var newRole = document.createElement("td");
      newRole.innerHTML = UserDetails[i].uRole;
      newRow.appendChild(newRole);
      var newStatus = document.createElement("td");
      newStatus.innerHTML = UserDetails[i].uStatus;
      newRow.appendChild(newStatus);
      var newAction = document.createElement("td");
      newAction.classList.add("action");
      newAction.innerHTML = `
    <button onclick="editUser('${UserDetails[i].id}')">Edit</button>
  <button onclick="deleteUser('${UserDetails[i].id}')">Delete</button>
    `;
      newRow.appendChild(newAction);
      userTableBody.appendChild(newRow);
    }
  }
}
