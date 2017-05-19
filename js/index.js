var startUp = function () {
    $("#form").validate();

};

$("#form").validate({
    errorClass: "my-error-class",
    rules: {
        name: "required",
        number: {
            required: true,
            minlength: 10,
        },
        state: "required",
        question: "required"
    },

    messages: {
        name: "This field is required",
        number: "Phone number- Please enter a valid phone number",
        state: "This field is required",
        question: "This field is required"
    },

});


$(document).ready(startUp);


// function phonenumber(inputtxt) {
//     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//     if ((number.value.match(phoneno))  
//         {  
//         return true;
//     }  
//       else  
//     {
//         alert("Invalid phone number");
//         return false;
//     }
// }


