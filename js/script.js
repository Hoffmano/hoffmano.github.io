let theme_button = document.getElementById("theme-switch");

function switch_theme() {
    const current_theme = document.getElementById("pagestyle")
    console.log(current_theme.classList);
    

    if (current_theme.classList == "dark") {
        document.getElementById("pagestyle").setAttribute("href", "css/style.css"); 
        current_theme.classList.remove("dark")
    }
    else {
        document
			.getElementById("pagestyle")
			.setAttribute("href", "css/dark_mode.css");
		current_theme.classList.add("dark");
    }
}

theme_button.addEventListener("click", switch_theme, false);