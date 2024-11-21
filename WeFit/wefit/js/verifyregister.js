//Function used to verify information
function verifyRegister(){
    var email = document.getElementById("UserEmail").value;
    var firstName = document.getElementById("UserFirstName").value;
    var lastName = document.getElementById("UserLastName").value;
    var age = document.getElementById("UserAge").value;
    var phone = document.getElementById("UserPhoneNumber").value;
    var password = document.getElementById("UserPassword").value;
    var passwordConfirmation = document.getElementById("UserConfirmedPassword").value;
    var gender = document.getElementById("UserGender").value;
    

    if(email.length == 0 || firstName.length == 0 || lastName.length == 0 || age == 0 || phone.length == 0 || password.length == 0 || passwordConfirmation.length == 0 || gender){
        if(email.length == 0){
            EmailSpan.innerHTML="<tr><td><font color='red'>Field is Required</font><tr><td>";
        }
        else{
            EmailSpan.innerHTML ="";
        }

        if(firstName.length == 0){
            FirstNameSpan.innerHTML="<tr><td><font color='red'>Field is Required</font><tr><td>";
        }
        else{
            FirstNameSpan.innerHTML ="";
        }

        if(lastName.length == 0){
            LastNameSpan.innerHTML="<tr><td><font color='red'>Field is Required</font><tr><td>";
        }
        else{
            LastNameSpan.innerHTML ="";
        }

        if(age < 14){
            AgeSpan.innerHTML="<tr><td><font color='red'>Age cannot be less than 14</font><tr><td>";
        }
        else{
            AgeSpan.innerHTML ="";
        }

        if(phone.length == 0){
            PhoneSpan.innerHTML="<tr><td><font color='red'>Field is Required</font><tr><td>";
        }
        else{
            PhoneSpan.innerHTML ="";
        }

        if(password.length == 0){
            PasswordSpan.innerHTML="<tr><td><font color='red'>Field is Required</font><tr><td>";
        }
        else{
            PasswordSpan.innerHTML ="";
        }
        
        switch(passwordConfirmation.length){
            case 0 : ConfirmPasswordSpan.innerHTML ="<tr><td><font color='red'>Field is Required</font><tr><td>";
                break;   
            default: ConfirmPasswordSpan.innerHTML = "";
                break;
        }

       // if(passwordConfirmation.length == 0){
         //   ConfirmPasswordSpan.innerHTML="<tr><td><font color='red'>Field is Required</font><tr><td>";
        //}
        //else{
         //   ConfirmPasswordSpan.innerHTML ="";
        //}

    }
    if(email.length > 50 || firstName.length > 50 || lastName.length > 50 || phone.length > 10 || (phone.length < 10 && phone.length > 0) || (password.length < 10 && password.length > 0) || (passwordConfirmation.length < 10 && passwordConfirmation.length > 0)){
        if(email.length > 50){
            EmailSpan.innerHTML="<tr><td><font color='red'>Email cannot be more than 50 characters long</font><tr><td>";
        }
        if(firstName.length > 50){
            FirstNameSpan.innerHTML="<tr><td><font color='red'>First name cannot be more than 50 characters long</font><tr><td>";
        }
        if(lastName.length > 50){
            LastNameSpan.innerHTML="<tr><td><font color='red'>Last name cannot be more than 50 characters long</font><tr><td>";
        }
        if(phone.length > 10){
            PhoneSpan.innerHTML="<tr><td><font color='red'>Phone number should only be 10 digits long</font><tr><td>";
        }
        else if(phone.length > 0 && phone.length < 10){
            PhoneSpan.innerHTML="<tr><td><font color='red'>Please enter valid phone number (555-555-5555)</font><tr><td>";    
        }
        else{
            PhoneSpan.innerHTML="";
        }

        if(password.length < 10){
            PasswordSpan.innerHTML="<tr><td><font color='red'>Password must be at least 10 characters long</font><tr><td>";
        }
        if(passwordConfirmation.length < 10 ){
            ConfirmPasswordSpan.innerHTML="<tr><td><font color='red'>Password must be at least 10 characters long</font><tr><td>";
        }
    }
    else if(password !== passwordConfirmation){
        ConfirmPasswordSpan.innerHTML="<tr><td><font color='red'>Passwords must match</font><tr><td>"
    }
    else{
        RegisterForm.submit();
    }
}