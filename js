document.getElementById('toggle-contrast').addEventListener('click', function(){
    document.body.classList.toggle('high-contrast');
});

document.getElementById('personal-data-form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailValue = emailInput.Value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)){
        emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
        emailError.style.display = 'block';
        event.preventDefault(); 
    }else{
        emailError.style.display = 'none';
    }
});