// now we will use class and we will see how to execute it

class User {
	constructor() {}

	validateUsername = (username) => {
		return username.includes("@") ? false : true;
	};

	validatePassword = (password) => {
		return password.length < 8 ? false : true;
	};

	signUp = async (n, e, u, p, m, d) => {
		if (this.validateUsername(u) && this.validatePassword(p)) {
			this.name = n;
			this.email = e;
			this.username = u;
			this.password = p;
			this.mobile = m;
			this.discription = d;

			const api_key = "https://masai-api-mocker.herokuapp.com/auth/register";

			try {
				const response = await fetch(api_key, {
					method: "POST",
					mode: "no-cors",
					body: JSON.stringify(this),
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				console.log(data);
			} catch (error) {
				console.log(error);
			}

			console.log("function is working");
		}
	};
}

const user = new User();

const Register = () => {
	const reg_form = document.querySelector("#reg_form");

	const name = reg_form.name.value;
	const email = reg_form.email.value;
	const username = reg_form.username.value;

	const password = reg_form.password.value;
	const mobile = reg_form.mobile.value;
	const description = reg_form.description.value;

	user.signUp(name, email, username, password, mobile, description);
};
