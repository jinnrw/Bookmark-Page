// var sort = document.getElementById('sort');

// Sortable.create(sort, {
// 	delay: 500,
// 	animation: 150,
// 	ghostClass: 'ghost'
// });

  $( function() {
    $( "#sortable" ).sortable({
			distance: 5
		});
		
    $( "#sortable" ).disableSelection();
  } );