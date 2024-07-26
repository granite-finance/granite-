// JavaScript code to toggle password visibility
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('comfirmPassword');
    const togglePasswordIcon = document.getElementById('comfirmPasswordIcon');

    togglePasswordIcon.addEventListener('click', function () {
        // Toggle the input type between 'password' and 'text'
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle the icon between eye and eye-slash
        if (type === 'password') {
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        } else {
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('togglePassword');

    togglePasswordIcon.addEventListener('click', function () {
        // Toggle the input type between 'password' and 'text'
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle the icon between eye and eye-slash
        if (type === 'password') {
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        } else {
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        }
    });
});


  