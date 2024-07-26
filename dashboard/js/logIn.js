
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');



const loginForm = document.getElementById('loginForm')
// const requestButton = document.getElementById('requestButton')
loginForm.addEventListener('submit', (e)=> {
    e.preventDefault()

    const email = emailInput.value;
    const password = passwordInput.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential)=> {
        const user = userCredential.user 
        if (user) {
            loginForm.disabled = true
            setTimeout(function(){
                window.location.replace("https://granite-finance.github.io/granite/dashboard/dashboard.html");
            }, 1000)
        } else {
            const popup = document.getElementById('popup-alert');
            popup.style.display = 'block';

            // Hide the pop-up alert after 10 seconds
            setTimeout(function() {
                popup.style.display = 'none';
            }, 10000); // 10000 milliseconds = 10 seconds
        }
        // window.location.replace("/dashboard/user/dashboard.html")
    })
    .catch(error => {
        const parseJson = JSON.parse(error.message)
        console.log(error)
        // alert(parseJson.error.message)
        console.log(parseJson.error.message)
        const popup = document.getElementById('popup-alert');
        popup.textContent = parseJson.error.message
            popup.style.display = 'block';

            // Hide the pop-up alert after 10 seconds
            setTimeout(function() {
                popup.style.display = 'none';
            }, 10000); // 10000 milliseconds = 10 seconds
    })
})





