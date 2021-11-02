$(document).ready(function() {
  $("form").submit(function(){
		if ($('input:checkbox').filter(':checked').length < 1){
        alert("You forgot to click on what you enjoy!");
		return false;
		}
  });


  $("#season").change (function() {
    $("#allSeason").removeClass("col-md-12").addClass("col-md-6");
    $("#fall").hide();
    $("#winter").hide();
    $("#spring").hide();
    $("#summer").hide();

    let x = this.value
    switch(x) {
      case "fall":
        $("#fall").show();
        break;
      case "winter":
        $("#winter").show();
        break;
      case "spring":
        $("#spring").show();
        break;
      case "summer":
        $("#summer").show();
        break;
      default:
        break;
    };

  });
});


// $("inputUserName").blur () {
//   let userName = $(this).val();
//   window.alert(username);
// }

