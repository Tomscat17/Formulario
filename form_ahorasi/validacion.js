function validarFormulario() {
    var retornoEmail = validarEmail();
    var retornoPassword = validarPassword();
    var retornoConfirmPassword = validarConfirmPassword();
    var retornoAddress = validarAddress();
    var retornoCommune = validarCommune();
    var retornoPhone = validarPhone();
    var retornoWebsite = validarWebsite();
    var retornoHobbies = validarHobbies();

    return retornoEmail && retornoPassword && retornoConfirmPassword && retornoAddress && retornoCommune && retornoPhone && retornoWebsite && retornoHobbies;
}

function validarEmail() {
    var inputEmail = document.getElementById("email");
    var divErrorEmail = document.getElementById("error-email");
    var correo = inputEmail.value.trim();
    var posArroba = correo.indexOf("@");
    var posPunto = correo.lastIndexOf(".");
    var arrCorreo = correo.split(".");
    var extension = arrCorreo[arrCorreo.length - 1];
    
    if (posArroba > 0 && posPunto > posArroba && (extension.length > 1 && extension.length <= 3)) {
        divErrorEmail.innerHTML = "";
        return true;
    } else {
        divErrorEmail.innerHTML = "El correo electrónico no tiene el formato correcto";
        divErrorEmail.className = "text-danger small mt-1";
        return false;
    }
}

function validarPassword() {
    var inputPassword = document.getElementById("password");
    var divErrorPassword = document.getElementById("error-password");
    var password = inputPassword.value;
    var hasDigit = false;
    var hasLetter = false;

    for (var i = 0; i < password.length; i++) {
        var char = password[i];
        if (char >= '0' && char <= '9') {
            hasDigit = true;
        } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            hasLetter = true;
        }
    }

    if (password.length >= 3 && password.length <= 6 && hasDigit && hasLetter) {
        divErrorPassword.innerHTML = "";
        return true;
    } else {
        divErrorPassword.innerHTML = "La contraseña debe tener de 3 a 6 caracteres y al menos un dígito y una letra";
        divErrorPassword.className = "text-danger small mt-1";
        return false;
    }
}

function validarConfirmPassword() {
    var inputPassword = document.getElementById("password");
    var inputConfirmPassword = document.getElementById("confirmPassword");
    var divErrorConfirmPassword = document.getElementById("error-confirmPassword");
    var confirmPassword = inputConfirmPassword.value;

    if (confirmPassword === inputPassword.value) {
        divErrorConfirmPassword.innerHTML = "";
        return true;
    } else {
        divErrorConfirmPassword.innerHTML = "Las contraseñas no coinciden";
        divErrorConfirmPassword.className = "text-danger small mt-1";
        return false;
    }
}

function validarAddress() {
    var inputAddress = document.getElementById("address");
    var divErrorAddress = document.getElementById("error-address");
    var address = inputAddress.value.trim();

    if (address) {
        divErrorAddress.innerHTML = "";
        return true;
    } else {
        divErrorAddress.innerHTML = "La dirección es obligatoria";
        divErrorAddress.className = "text-danger small mt-1";
        return false;
    }
}

function validarCommune() {
    var selectCommune = document.getElementById("commune");
    var divErrorCommune = document.getElementById("error-commune");
    var commune = selectCommune.value;

    if (commune !== "default") {
        divErrorCommune.innerHTML = "";
        return true;
    } else {
        divErrorCommune.innerHTML = "Debe seleccionar una comuna";
        divErrorCommune.className = "text-danger small mt-1";
        return false;
    }
}

function validarPhone() {
    var inputPhone = document.getElementById("phone");
    var divErrorPhone = document.getElementById("error-phone");
    var phone = inputPhone.value.trim();
    var isNumeric = true;

    for (var i = 0; i < phone.length; i++) {
        if (phone[i] < '0' || phone[i] > '9') {
            isNumeric = false;
            break;
        }
    }

    if (isNumeric && phone.length > 0) {
        divErrorPhone.innerHTML = "";
        return true;
    } else {
        divErrorPhone.innerHTML = "El número de teléfono no tiene el formato correcto";
        divErrorPhone.className = "text-danger small mt-1";
        return false;
    }
}

function validarWebsite() {
    var inputWebsite = document.getElementById("website");
    var divErrorWebsite = document.getElementById("error-website");
    var website = inputWebsite.value.trim();

    if (website === '' || (website.startsWith('http://') || website.startsWith('https://'))) {
        divErrorWebsite.innerHTML = "";
        return true;
    } else {
        divErrorWebsite.innerHTML = "La URL del sitio web no tiene el formato correcto";
        divErrorWebsite.className = "text-danger small mt-1";
        return false;
    }
}

function validarHobbies() {
    var hobbiesList = document.getElementById('hobbiesList').children;
    var divErrorHobbies = document.getElementById('error-hobbies');

    if (hobbiesList.length >= 2) {
        divErrorHobbies.innerHTML = "";
        return true;
    } else {
        divErrorHobbies.innerHTML = "Debe agregar al menos 2 aficiones";
        divErrorHobbies.className = "text-danger small mt-1";
        return false;
    }
}


document.getElementById('addHobbyButton').addEventListener('click', function() {
    const hobbyInput = document.getElementById('hobbyInput');
    const hobbiesList = document.getElementById('hobbiesList');
    const hobby = hobbyInput.value.trim();

    if (hobby) {
        const li = document.createElement('li');
        li.textContent = hobby;
        li.className = 'list-group-item';
        hobbiesList.appendChild(li);
        hobbyInput.value = '';
    }
});

var botonEnviar = document.querySelector('button[type="submit"]');


botonEnviar.addEventListener('click', function(event) {    
    event.preventDefault();
    var esValido = validarFormulario();
    if (esValido) {
        window.location.href = "exito.html";
    }
});