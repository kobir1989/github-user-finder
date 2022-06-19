//init github
const github = new Github();

// search input
const serchUser = document.getElementById("searchUser");

// searchinput event listener
serchUser.addEventListener("keyup", (e) => {
  //get input text
  const userText = e.target.value;
  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //show alert
      } else {
        //show profile
      }
      console.log(data);
    });
    console.log(userText);
  } else {
    // clear profile
  }
});
