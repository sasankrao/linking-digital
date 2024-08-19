var SUserDetail = [];

var http = new XMLHttpRequest();

http.onreadystatechange = function () {
  if (http.readyState === 4) {
    var response = JSON.parse(http.responseText);
    SUserDetail = response;
    console.log(SUserDetail);
    displayUser(SUserDetail);
  }
};

http.open("GET", "http://localhost:3000/user");

http.send();

function displayUser(SUserDetail) {
  var profileCard = document.getElementById("profile-card");
  profileCard.innerHTML = "";
  var obj1 = getQueryParams();
  for (i = 0; i < SUserDetail.length; i++) {
    if (
      SUserDetail[i].uName == obj1.username &&
      SUserDetail[i].uRole == obj1.role
    ) {
      console.log(SUserDetail[i].uName);
      var divProfile = document.createElement("div");
      divProfile.classList.add("profile");
      var h3 = document.createElement("h3");
      h3.innerHTML = SUserDetail[i].uName;
      var p = document.createElement("p");
      p.innerHTML = SUserDetail[i].uEmail;
      divProfile.appendChild(h3);
      divProfile.appendChild(p);

      profileCard.appendChild(divProfile);
    }
  }
}
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const sessionObj = {
    username: params.get("username"),
    role: params.get("role"),
  };
  return sessionObj;
}
