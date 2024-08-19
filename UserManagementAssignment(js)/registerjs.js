function registerUser() {
  var userName = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cPassword = document.getElementById("confirm-password").value;
  var role = document.getElementById("role").value;
  var status = document.getElementById("status").value;
  console.log(typeof role);
  console.log(typeof status);
  validateRole(role);
  validateStatus(status);
  var isFormValid =
    validateName() &&
    validateEmail(email) &&
    validatePassword(password) &&
    validateRole(role) &&
    validateStatus(status);
  if (isFormValid) {
    function generateRandomId(min, max) {
      // Generate a random number between min (inclusive) and max (exclusive)
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // Example usage:
    const randomId = generateRandomId(100, 1000).toString();
    console.log(randomId);
    var obj = {
      id: randomId,
      uName: userName,
      uEmail: email,
      uPassword: password,
      confirmPassword: cPassword,
      uRole: role,
      uStatus: status,
    };

    var http = new XMLHttpRequest();
    http.open("POST", "http://localhost:3000/user");
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        console.log(http.status);
        if (http.status === 201) {
          // Request is successful
          window.location.href = "Login.html";
          var response = http.responseText;
          console.log(response);
        } else {
          window.alert("Error:", http.status, http.statusText);
          //console.error();
        }
      }
    };
    http.send(JSON.stringify(obj));
  }
  function validateName(name) {
    if (username.length === 0) {
      document.getElementById("nameErrorMsg").style.display = "block";
      document.getElementById("nameErrorMsg").innerHTML =
        "UserName is mandatory";
      return false;
    } else {
      return true;
    }
  }
  function validateEmail(email) {
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (email.length === 0) {
      document.getElementById("emailErrorMsg").style.display = "block";
      document.getElementById("emailErrorMsg").innerHTML = "Email is mandatory";
      return false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailErrorMsg").style.display = "block";
      document.getElementById("emailErrorMsg").innerHTML =
        "Incorrect email format";
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

  /*function validateConfirmPassword(cPassword) {
    var passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (cPassword.length != 0 && cPassword === password) {
      if (!passwordRegex.test(cPassword)) {
        document.getElementById("confirmPasswordErrorMsg").style.display =
          "block";
        document.getElementById("confirmPasswordErrorMsg").innerHTML =
          "Minimum eight characters, at least one letter, one number and one special character";
        return false;
      } else {
        document.getElementById("confirmPasswordErrorMsg").style.display =
          "none";
        return true;
      }
    }
  } */
  function validateRole(role) {
    if (role === "0") {
      document.getElementById("roleErrorMsg").style.display = "block";
      document.getElementById("roleErrorMsg").innerHTML = "role is mandatory";
      return false;
    } else {
      return true;
    }
  }

  function validateStatus(status) {
    if (status === "0") {
      document.getElementById("statusErrorMsg").style.display = "block";
      document.getElementById("statusErrorMsg").innerHTML =
        "status is mandatory";
      return false;
    } else {
      return true;
    }
  }
}
