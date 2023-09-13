"use strict";
let myForm = document.getElementById("myform");
let myFormBtn = document.getElementById("form-btn");
let itemInput = document.querySelectorAll(".js-form__input");
console.log(1);

myFormBtn.addEventListener("click", (event) => {
	for (let i = 0; i < itemInput.length; i++) {
		if (!itemInput[i].validity.valid) {
			itemInput[i].parentElement.classList.add("s-error");
		} else {
			itemInput[i].parentElement.classList.remove("s-error");
		}
	}
});
