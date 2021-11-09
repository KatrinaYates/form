$(document).ready(function() {

  // validate the email immediatly
  $("#email").blur (function() {
    let email = $(this).val();
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (!testEmail.test(email))
      alert("Please enter a valid email address");
  });

  // validate the phone number immediatly
  $("#phone").blur (function() {
    let phone = $(this).val();
    var testPhone = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (!testPhone.test(phone))
      alert("Please enter a valid phone number");
  });

  // create a flow of choices
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

  // validate that everything has been filled out
  $("form").submit(function(){
		if ($('input:checkbox').filter(':checked').length < 1){
        alert("You forgot to click on what you enjoy!");
		return false;
		}
  });

  //load info from JSON data
  // $("#loadData").click(function() {
  //   $.getJSON("../demo.js?callback=showJSON", function(result){
  //     $.each(result, function(i, field){
  //       $("div").append(field + " ");
  // });

});