$("#pass2_register").on("keyup", function () {
    var value_pass1 = $("#pass1_register").val();
    var value_pass2 = $(this).val();
    var value_mail = $("#email_register").val();
    var value_username = $("#usernmane_register").val();
    if(value_pass1 != value_pass2) {
        $(".pass__label").css("color" , "red");
        $("#submit").attr("disabled", "disabled");
    } else{
        $(".pass__label").css("color" , "black");
    }
});