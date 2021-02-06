$(document).ready(function() {
	let popupWindow = $(".popup");

	$(".user").on("click", () => {
		popupWindow.show();
	})

	$(".popup-close").on("click", () => {
		popupWindow.hide();
	})
});