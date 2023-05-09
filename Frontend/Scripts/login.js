let inputloginform = document.querySelector(".loginform");

let apiuser="https://rapid-chess-back.onrender.com/user/"

inputloginform.addEventListener("submit", (e) => {
    e.preventDefault();
    let input_tags = document.querySelectorAll(".loginform input");
    let obj = {};
    obj.email = input_tags[0].value;
    obj.password = input_tags[1].value;
    login(obj)
})

async function login(obj) {
    try {
        let response = await fetch(`${apiuser}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })

        let res=await response.json()

        console.log(res);

        if(res.msg=="login successful"){
            sessionStorage.setItem("name",res.name)
            localStorage.setItem("auth_token", JSON.stringify(res.token));
            // let name=res.name;
            localStorage.setItem("name", res.name);
            // alert("login successfull");


            // document.cookie=`token=${res.token}`;
            // document.cookie=`token=${res.name}`;
            Swal.fire({
                title: "Logged In successfully!",
                text: "You are logged in successfully.",
                icon: "success",
              }).then((res) => {
                if (res.value) {
                  window.location.href = "https://rapid-chess-back.onrender.com/chess/";
                } else {
                  Swal.fire({
                    title: "Wrong Credentials!",
                    text: "Try Again",
                    icon: "error",
                  });
                }
              });

            // window.location.href = "http://localhost:3000/chess/"

        }

          else {
            alert("wrong credentials")
        }
    }
    catch (err) {
        Swal.fire({
            title: "Wrong Credentials!",
            text: "Try Again",
            icon: "error",
          });
        console.log("Some error");
    }
}




















// async function login(obj) {
//     try {
//         let login_data = await fetch(`${apiuser}login`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(obj)
//         })
//         if (login_data.ok) {
//             let token = await login_data.json();
//             localStorage.setItem("auth_token", token.token);

//             alert("login successfull");
//             window.location.href = "userprofile.html"
//         } else {
//             alert("wrong credentials")
//         }
//     }
//     catch (err) {
//         alert("wrong credentials")
//         console.log("Some error");
//     }
// }




