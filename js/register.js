$("#pass2_register").on("keyup", function() { // Выполняем скрипт при изменении содержимого 2-го поля
    var value_input1 = $("#pass1_register").val(); // Получаем содержимое 1-го поля
    var value_input2 = $(this).val(); // Получаем содержимое 2-го поля
    
    if(value_input1 != value_input2) { // Условие, если поля не совпадают
        
        $(".pass__label").css("color" , "red");
        $("#submit").attr("disabled", "disabled"); // Запрещаем отправку формы
        
    } else { // Условие, если поля совпадают
    
        $("#submit").removeAttr("disabled");  // Разрешаем отправку формы
        $(".pass__label").css("color" , "black");
    }
    
});