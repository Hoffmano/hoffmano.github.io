function switch_theme() {
	const current_theme = document.getElementById("pagestyle");

	if (current_theme.classList == "dark") {
		document
			.getElementById("pagestyle")
            .setAttribute("href", "css/style.css");
        console.log("theme changed to light mode");
        
		current_theme.classList.remove("dark");
	} else {
		document
			.getElementById("pagestyle")
			.setAttribute("href", "css/dark_mode.css");
        console.log("theme changed to dark mode");
		current_theme.classList.add("dark");
	}
}