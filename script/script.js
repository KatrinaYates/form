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
  var seasons = function() {
      $("#allSeason").removeClass("col-md-12").addClass("col-md-6");
      $("#fall").hide();
      $("#winter").hide();
      $("#spring").hide();
      $("#summer").hide();
  
      let x = $("#season").val();
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
  };

  $("#season").change (function() {
    seasons();
  });


  // validate that everything has been filled out
  $("form").submit(function(){
		if ($('input:checkbox').filter(':checked').length < 1){
        alert("You forgot to click on what you enjoy!");
		return false;
		}
  });

  $('#loadData').click(function() {

    let jsonURL = "demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
          $("#name").val(data.name);
          $("#email").val(data.email);
          $("#pwd").val(data.pwd);
          $("#phone").val(data.phone);
          $("#birthdaytime").val(data.birthdaytime);
          $("#season").val(data.season);
          $("#holidayFall").val(data.holidayFall);
          $("#language").val(data.language);
          $("#enjoy").val(data.enjoy);
          $("#favcolor").val(data.favcolor);

          seasons();

          //Auto check radio section
          $('input[type=radio]').each(function () {
            if (data.language === $(this).val())
            {
              $(this).prop('checked', true)
                console.log($(this));
            }
          });

          //Auto check checkbox section
          $('input[type=checkbox]').each(function () {
            if (data.enjoy === $(this).val())
            {
              $(this).prop('checked', true)
                console.log($(this));
            }
          });
        }



    });
    


  });





});