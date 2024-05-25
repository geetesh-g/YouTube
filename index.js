// YouTube application

// Navbar importing
import { commanNav } from "./scripts.js";

let navItems = commanNav();
document.querySelector("#navbar").innerHTML = navItems;

// Get data from server
let searchTerm = async () => {
	console.log("inside function");

	const API_KEY = "AIzaSyBM74d-W9g6qXCkJ2qB5fbL7VLsSytS-Vk";
	const query = document.querySelector("#search").value;
	if (!query) {
		alert("Please enter a search term");
		return;
	}

	try {
		document.querySelector("#container").innerHTML = "<p>Loading...</p>";

		let response = await fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&videoEmbeddable=true&order=date&key=${API_KEY}`
		);

		let data = await response.json();
		if (data.items) {
			let actual_data = data.items;
			console.log(actual_data);
			searchItem(actual_data);
		} else {
			document.querySelector("#container").innerHTML =
				"<p>No results found.</p>";
		}
	} catch (err) {
		console.error(err);
		document.querySelector("#container").innerHTML =
			"<p>Error fetching data.</p>";
	}
};

// Add event listener to search button
document.querySelector("#searchTerm").addEventListener("click", searchTerm);

// Append data to DOM
let searchItem = (data) => {
	document.querySelector("#container").innerHTML = "";
	data.forEach(({ snippet, id: { videoId } }) => {
		let section = document.createElement("section");
		section.addEventListener("click", () => {
			showMovie(snippet, videoId);
		});

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

// Play video
const showMovie = (snippet, videoId) => {
	let data = {
		snippet,
		videoId,
	};
	data = JSON.stringify(data);
	localStorage.setItem("video", data);

	window.location.href = "video.html";
};
