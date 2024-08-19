function passwordUpdate() {
  const currentPassword = document.getElementById("current-password").value;
  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";
  var loginDetail = JSON.parse(sessionStorage.getItem("LoginDataPasword"));
  console.log(loginDetail);
  var UserData = [];

  // var userID = loginDetail.id;
  if (currentPassword == loginDetail.password) {
    if (newPassword == confirmPassword) {
      var http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/user");
      http.setRequestHeader("Content-Type", "application/json");
      http.onreadystatechange = function () {
        if (http.readyState === 4) {
          if (http.status === 200) {
            var response = JSON.parse(http.responseText);
            UserData = response;
            for (i = 0; i < UserData.length; i++) {
              if (loginDetail.username == UserData[i].uName) {
                var result1 = UserData[i];
                updatePassword(result1);
              }
            }
          } else {
            window.alert("Error: " + http.status + " - " + http.statusText);
          }
        }
      };
      http.send();
    }
  }
}

function updatePassword(res1) {
  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  var userID = res1.id;
  res1.uPassword = newPassword;
  res1.confirmPassword = confirmPassword;
  var http = new XMLHttpRequest();
  http.open("PUT", "http://localhost:3000/user/" + userID);
  http.setRequestHeader("Content-Type", "application/json");
  http.onreadystatechange = function () {
    if (http.readyState === 4) {
      if (http.status === 200) {
        alert("Product updated successfully");
      } else {
        window.alert("Error: " + http.status + " - " + http.statusText);
      }
    }
  };
  http.send(JSON.stringify(res1));
}
