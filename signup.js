// let's take it from scratch
// first-of-all we will solve this problem with local storage method then we will use server
// using brute force approach

const Register = () => {
	const name = document.querySelector("#name").value;
	const email = document.querySelector("#email").value;
	const username = document.querySelector("#username").value;
	const password = document.querySelector("#password").value;
	const mobile = document.querySelector("#mobile").value;
	const description = document.querySelector("#description").value;

	const user = {
		name,
		email,
		username,
		password,
		mobile,
		description,
	};

	const userName = username.includes("@") ? false : true;
	const pass = password.length < 8 ? false : true;

	if (userName && pass) {
		localStorage.setItem("Userdata", JSON.stringify(user));
		alert("User Registered");
	} else {
		alert("Invalid Username or password");
	}

	document.querySelector("#reg_form").reset();
};

const Login = () => {
	const username = document.querySelector("#login-username").value;
	const password = document.querySelector("#login-password").value;
	let userData = JSON.parse(localStorage.getItem("Userdata"));
	console.log(userData);

	if (userData.username == username && userData.password == password) {
		alert("Login Successful");
		window.location.href = "index.html";
	} else {
		alert("User does not exist");
	}

	document.querySelector("login").reset();
};
