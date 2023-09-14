"use strict";
let myFormBtn = document.getElementById("form-btn");
let tryBtn = document.getElementById("tryButton");
let itemInput = document.querySelectorAll(".js-form__input");

myFormBtn.addEventListener("click", (event) => {
	for (let i = 0; i < itemInput.length; i++) {
		if (!itemInput[i].validity.valid) {
			itemInput[i].parentElement.classList.add("s-error");
			//event.preventDefault();
		} else {
			itemInput[i].parentElement.classList.remove("s-error");
		}
	}
});
tryBtn.addEventListener("click", (event) => {
	itemInput[0].focus();
});
