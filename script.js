const button = document.getElementById("btn");

let state = 1;

button.addEventListener("click", () => {
	if (state == 1) {
        console.log('execute 1');
        document.body.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
		state = 0;
	} else if (state == 0) {
        console.log('execute 0');
		document.body.style.background = "linear-gradient(to right, #034378, #2d4e68)";
		state = 1;
	} else {
		alert("error");
	}
});
