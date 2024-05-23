import { commanNav } from "./scripts.js";

let navbar = commanNav();
document.querySelector("#navbar").innerHTML = navbar;

const showVideo = () => {
	document.querySelector("#container").innerHTML = "";
	let playVideo = JSON.parse(localStorage.getItem("video"));

	let videoId = playVideo.videoId;
	console.log(videoId);

	let iframe = document.createElement("iframe");
	iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
	iframe.width = "560";
	iframe.height = "315";
	iframe.setAttribute("allow", "fullscreen");
	iframe.setAttribute("allowfullscreen", "");

	document.querySelector("#container").append(iframe);
};

showVideo();

// const showHome = () => {
// 	let section = document.createElement("section");
// 	let span = document.createElement("span");
// 	span.setAttribute("class", "material-symbols-outlined");
// 	span.innerHTML = "home";

// 	section.append(span);
// 	document.querySelector("#container").append(section);
// };

// document.querySelector("#menu").addEventListener("click", showHome);
