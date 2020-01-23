let spaceNotes = () => {
	if ($('p').length > 1) {
		for (let i = 0; i < $('p').length - 1; i++) {
			let currentElement = $('p').eq(i);
			currentElement.addClass('notepad__note--space');
		}
	}
};

$(document).ready(() => {
	let empty = 'Nothing here yet.';

	spaceNotes();

	$('#submit').on('click', (e) => {
		e.preventDefault();

		if ($('#notes').html().includes(empty)) {
			$('#notes').html('');
		}

		let input = $('#input').val();

		$('#notes').append('<p>' + input + '</p>');

		$('p').addClass('notepad__note');

		spaceNotes();

		$('#input').val('');
	});

	// $('.form__btn').on('active', () => {
	// 	$(this).addClass('form__btn--success');
	// });

	$('#clear').on('click', (e) => {
		e.preventDefault();

		$('#notes').html('<p>' + empty + '</p>');
		$('p').addClass('notepad__note--empty');
	});
});
