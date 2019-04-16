$("#contactForm").submit(function(event){
 // cancels the form submission
 	event.preventDefault();
 	submitForm();
});


function submitForm(){
    // Values from form
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();
    var gender = $("#gender").val();
    var payment1 = $("#payment1").val();
     
    $.ajax({
        type: "POST",
        url: "php/process.php",
        data: "firstname="+ name + "&lastname="+ lastname + "&email="+ email + "&gender="+ gender + "&payment1="+ payment1,
        success : function(text){
            if(text == "success"){
                formSuccess();
            }else {
            	formError();
            	submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
