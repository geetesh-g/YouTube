//You Tube application

let searchTerm = async () => {
	console.log("inside function");
	let term = document.querySelector("#search").value;
	const API_KEY = "AIzaSyDiU4yA62IeO8iO0_rKxvDLEeEGBrlB0g4";

	let response = await fetch(
		`https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=10&q=${term}&key=${API_KEY}`
	);

	let data = await response.json();
	let actual_data = data.items;
	console.log(actual_data);
	searchItem(actual_data);
};

let searchItem = (data) => {
	document.querySelector("#container").innerHTML = "";
	data.forEach(({ snippet }) => {
		let section = document.createElement("section");

		let p_title = document.createElement("p");
		p_title.innerText = snippet.title;

		let chanel = document.createElement("h4");
		chanel.innerText = snippet.channelTitle;

		let thumbnail = document.createElement("img");
		thumbnail.src = snippet.thumbnails.high.url;

		section.append(thumbnail, p_title, chanel);

		document.querySelector("#container").append(section);
	});
};

let content = [];

let clicked = (el) => {
	content.push(el);
	console.log(content);
};
