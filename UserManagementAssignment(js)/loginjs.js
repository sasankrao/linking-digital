function RegisterPage() {
  window.location.href = "Registration.html";
}
function loginUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var isFormValid = validateName(username) && validatePassword(password);
  if (isFormValid) {
    var UserData = [];

    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/user");
    console.log("Nidhi");

    http.onreadystatechange = function () {
      console.log(http.readyState);
      if (http.readyState === 4) {
        var response = JSON.parse(http.responseText);
        UserData = response;

        for (i = 0; i < UserData.length; i++) {
          if (username == UserData[i].uName && UserData[i].uRole == "user") {
            console.log(typeof UserData[i]);
            const userResponse = JSON.stringify(UserData[i]);
            sessionStorage.setItem("userDetail", userResponse);
            window.location.href = "SingleUserDetail.html";
            //storeData(UserData[i].uName, UserData[i].uRole);
            //passDataToAnotherPage();

            // window.location.href = "SingleUserDetail.html";
            break;
          } else if (
            username == UserData[i].uName &&
            UserData[i].uRole == "admin"
          ) {
            window.location.href = "AllUserDetail.html";
            break;
          }

          //displayProducts(products);
        }
      }
      //window.alert("wrong username or password ");
    };
    http.send();
  }

  /*function storeData(username, role) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("role", role);
    //alert('Data stored in session storage');
  }
  function passDataToAnotherPage() {
    const username = sessionStorage.getItem("username");
    const role = sessionStorage.getItem("role");

    if (username && role) {
      // Construct the URL with query parameters
      const url = `SingleUserDetail.html?username=${encodeURIComponent(
        username
      )}&role=${encodeURIComponent(role)}`;
      // Navigate to the new page
      window.location.href = url;
    } else {
      alert("No data found in session storage");
    }
  } */

  function validateName(username) {
    if (username.length === 0) {
      document.getElementById("nameErrorMsg").style.display = "block";
      document.getElementById("nameErrorMsg").innerHTML =
        "UserName is mandatory";
      return false;
    } else {
      return true;
    }
  }

  function validatePassword(password) {
    var passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (password.length === 0) {
      document.getElementById("passwordErrorMsg").style.display = "block";
      document.getElementById("passwordErrorMsg").innerHTML =
        "Password is mandatory";
      return false;
    } else if (!passwordRegex.test(password)) {
      document.getElementById("passwordErrorMsg").style.display = "block";
      document.getElementById("passwordErrorMsg").innerHTML =
        "Minimum eight characters, at least one letter, one number and one special character";
      return false;
    } else {
      document.getElementById("passwordErrorMsg").style.display = "none";
      return true;
    }
  }
}

function changePassword() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var UserData = {
    username: username,
    password: password,
  };
  const loginData = JSON.stringify(UserData);
  sessionStorage.setItem("LoginDataPasword", loginData);
  window.location.href = "PasswordManagement.html";
}
