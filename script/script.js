$(document).ready(function(){
    $("form").submit(function(){
		if ($('input:checkbox').filter(':checked').length < 1){
        alert("You forgot to click on what you enjoy!");
		return false;
		}
    });
});