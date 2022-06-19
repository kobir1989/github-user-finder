//init github
const github = new Github();
//init UI
const ui = new UI();

// search input
const serchUser = document.getElementById("searchUser");

// searchinput event listener
serchUser.addEventListener("keyup", (e) => {
  //get input text
  const userText = e.target.value;
  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "404" || "Not Found") {
        //show alert
        ui.showAlert("User not found!", "alert alert-danger");
      } else {
        //show profile
        ui.showProfile(data.profile);
      }
      console.log(data);
    });
    console.log(userText);
  } else {
    // clear profile
    ui.clearProfile();
  }
});
