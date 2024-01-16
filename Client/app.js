document
  .querySelector(".register_button")
  .addEventListener("click", async () => {
    const userName = document.querySelector(".username");
    const userEmail = document.querySelector(".email");
    const userPhone = document.querySelector(".phone");
    const userPassword = document.querySelector(".password");
    const userConfirmPassword = document.querySelector(".confirm_password");

    const obj = {
      userName: userName.value,
      email: userEmail.value,
      phone: userPhone.value,
      pwd: userPassword.value,
    };

    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const json = await response.json();
    console.log(json);
  });

document.querySelector(".login_auth").addEventListener("click", async () => {
  const userEmailAuth = document.querySelector(".email_auth");
  const userPasswordAuth = document.querySelector(".pwd_auth");

  const objAuth = {
    email: userEmailAuth.value,
    pwd: userPasswordAuth.value,
  };

  const response = await fetch("http://localhost:3000/api/authorize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objAuth),
  });

  const json = await response.json();
  console.log(json);
});
