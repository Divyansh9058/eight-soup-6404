let submit_register = document.querySelector(".registerform");
let apiuser = "http://localhost:3000/user/";

submit_register.addEventListener("submit", async (event) => {
  event.preventDefault();

  let input_tags = document.querySelectorAll(".registerform input");
  let obj = {
    name: input_tags[0].value,
    email: input_tags[1].value,
    password: input_tags[2].value,
  };

  try {
    // Save user data to MongoDB
    let response = await fetch(`${apiuser}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let res = await response.json();
    console.log(res);
    if (res.status == "success") {
      alert("User has been successfully created");
    }
  } catch (err) {
    console.log("Error saving user data to MongoDB");
  }

  try {
    // Save user data to local storage
    let RegisterUserDataBase =
      JSON.parse(localStorage.getItem("userdatabase")) || [];
    RegisterUserDataBase.push(obj);
    localStorage.setItem("userdatabase", JSON.stringify(RegisterUserDataBase));
    alert("User data has been successfully saved to local storage");
  } catch (err) {
    console.log("Error saving user data to local storage");
  }

  window.location.href = "./login.html";
});
