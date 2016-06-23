$(document).ready(function(){
	// ===================== File uploader init
	$('input[type=file]').customFile();

	// ===================== Magnific inline init
	$(function () {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});
});