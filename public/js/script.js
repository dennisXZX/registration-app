$(document).ready(function(){

    $("#registrationForm").submit(function(){

        // prevent the default form submit button action
        event.preventDefault();

        // retrieve the input values from the form
        const name = $("#name").val();
        const nationality = $("#nationality").val();
        const occupation = $("#occupation").val();

        // send a post request to register-success page
        $.ajax({
            method: "POST",
            url: "register-success",
            data: { name: name, nationality: nationality, occupation: occupation}

        }).done(function(result){
                window.location.replace('register-success');
        });

    });

});