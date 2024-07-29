function login(){
    let userEmail = document.getElementById('emailInput');
    let userEmailLength = userEmail.value.length;
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let userPass = document.getElementById('passwordInput');
    let userPassLength = userPass.value.length;

    if(userPassLength <= 0 || userEmailLength <= 0){
        alert('You have to fill the field!');
    }
    else if(userEmailLength >= 20 || !(userEmail.value.match(emailformat))){
        document.getElementById('emailError').innerHTML = 'Enter a valid email!';
        return;
    }
    else if(userPassLength < 6){
        document.getElementById('passwordError').innerHTML = 'Enter a valid password!';
        return;
    }
    else{
        alert('You can enter!');
    }
  
}