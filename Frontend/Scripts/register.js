let submit_register = document.querySelector(".registerform");
let apiuser = "https://rapid-chess-back.onrender.com/user/";

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
      Swal.fire({
        title: "Registered Successfully!",
        text: "You are registered successfully.",
        icon: "success",
      }).then((res) => {
        if (res.value) {
          window.location.href = "./login.html";
        } else {
          Swal.fire({
            title: "Wrong Credentials!",
            text: "Try Again",
            icon: "error",
          });
        }
      });
    }
  } catch (err) {
    Swal.fire({
      title: "User Already Registered!",
      text: "Please Login",
      icon: "error",
    });
  }


  // try {
  //   // Save user data to local storage
  //   let RegisterUserDataBase =
  //     JSON.parse(localStorage.getItem("userdatabase")) || [];
  //   RegisterUserDataBase.push(obj);
  //   localStorage.setItem("userdatabase", JSON.stringify(RegisterUserDataBase));
  //   alert("User data has been successfully saved to local storage");
  // } catch (err) {
  //   console.log("Error saving user data to local storage");
  // }

  // window.location.href = "./login.html";
});
