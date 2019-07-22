document.getElementById("AboutButton").addEventListener("click", function() {
	var about = document.querySelector(".about");
	var productPage = document.querySelector(".product-page");
	if(!about.classList.contains("show")) {
		about.classList.remove("hide");
		about.classList.add("fade-in");
		about.classList.remove("fade-out-top");
		if(productPage) {
			productPage.classList.add("no-scroll");
		}
	}
});

document.getElementById("ContactButton").addEventListener("click", function() {
	var contact = document.querySelector(".contact");
	var productPage = document.querySelector(".product-page");
	if(!contact.classList.contains("show")) {
		contact.classList.remove("hide");
		contact.classList.add("fade-in");
		contact.classList.remove("fade-out-top");
		if(productPage) {
			productPage.classList.add("no-scroll");
		}
	}
});

document.querySelector(".overlay__exit--about").addEventListener("click", function() {
	var about = document.querySelector(".about");
	about.classList.add("fade-out-top");
	about.classList.remove("fade-in");
	var navbar = document.querySelector(".navbar");
	navbar.classList.remove("navbar--active");
	// about.classList.add("hide");
	var productPage = document.querySelector(".product-page");
	if(productPage) {
		productPage.classList.remove("no-scroll");
	}
});

document.querySelector(".overlay__exit--contact").addEventListener("click", function() {
	var contact = document.querySelector(".contact");
	contact.classList.add("fade-out-top");
	contact.classList.remove("fade-in");
	var form = document.querySelector(".contact__form");
	form.reset();
	var navbar = document.querySelector(".navbar");
	navbar.classList.remove("navbar--active");
	// about.classList.add("hide");
	var productPage = document.querySelector(".product-page");
	if(productPage) {
		productPage.classList.remove("no-scroll");
	}
});

document.querySelector(".navbar__expand").addEventListener("click", function() {
	var navbar = document.querySelector(".navbar");
	navbar.classList.toggle("navbar--active");
});

var products = document.querySelectorAll(".product");
products.forEach(function(product) {
	product.addEventListener("click", function() {
		console.log(this.querySelector(".product__overlay"));
		this.querySelector(".product__overlay").classList.add("fade-in");
		this.querySelector(".product__overlay").classList.remove("fade-out-top");
	});
});

var productExit = document.querySelectorAll(".product__exit");
productExit.forEach(function(button) {
	button.addEventListener("click", function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log(this.parentNode);
		this.parentNode.classList.remove("fade-in");
		this.parentNode.classList.add("fade-out-top");
	});
});

var contactForm = document.querySelector(".contact__form");
contactForm.addEventListener("submit", function(e) {
	e.preventDefault();
	console.log(this);
	this.classList.add("hide");
	var contactSent = document.querySelector(".contact__sent");
	contactSent.classList.remove("hide");
	this.reset();
	// setTimeout(function() {
	// 	contactForm.classList.remove("hide");
	// 	contactSent.classList.add("hide");
	// }, 2000);
	setTimeout(function() {
		window.location.reload(true);
	}, 2000);
});


// document.getElementById("ContactButton").addEventListener("click", function() {
// 	var contact = document.querySelector(".contact");
// 	var navbar = document.querySelector(".navbar");
// 	var navbarList = document.querySelector(".navbar__list");
// 	var aboutButton = document.querySelector("#AboutButton");
// 	var overlayExit = document.querySelector(".overlay__exit");
// 	contact.classList.toggle("hide");
// 	if(!contact.classList.contains("show")) {
// 		this.classList.add("button--active");
// 		navbar.classList.add("navbar--active");
// 		overlayExit.classList.remove("hide");
// 		navbarList.classList.add("hide");
// 	}
// });
