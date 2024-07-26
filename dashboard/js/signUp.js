const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('firstName');

const passwordInput = document.getElementById('password');
const comfirmPasswordInput = document.getElementById('comfirmPassword')
// const country = document.getElementById('country');
const phoneNumberInput = document.getElementById('phoneNumber');
// const cityInput = document.getElementById('city');



signupForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const email = emailInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const comfirmPassword = comfirmPasswordInput.value
    const phoneNumber = phoneNumberInput.value;

    if (password == comfirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                // user.sendEmailVerification();
                

                // Store additional user data in the Realtime Database
                firebase.database().ref('users/' + user.uid).set({
                    username: username,
                    email: email,
                    phoneNumber: phoneNumber,
                    amount: 0
                }).then(() => {
                    signupForm.disabled = true
                    console.log("User data added to the database successfully!");
                    const popup = document.getElementById('popup-alert');
                    popup.style.display = 'block';

                    // Hide the pop-up alert after 10 seconds
                    setTimeout(function() {
                        popup.style.display = 'none';
                    }, 10000); // 10000 milliseconds = 10 seconds

                    // alert(`Registration completed, check your email to verify your email`)
                    setTimeout(function(){
                        window.location.replace("https://granite-finance.github.io/granite/dashboard/dashboard.html");
                    }, 1000)
                }).catch(error => {
                    console.error("Error adding user data to the database: ", error);
                });

            })
            .catch(error => {
                console.log(error.message)
                alert(error.message)
                // const errorMessage = error.message;
                // message.innerText = errorMessage;
        });

    } else {
        alert('Password and Comfirm password must the same.')
        console.log(password + 'and ' + comfirmPassword)
    }

    
});










