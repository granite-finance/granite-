const resetPasswordBtn = document.getElementById('resetPasswordBtn')
const resetEmail = document.getElementById('resetEmail');
const ResetMessage = document.getElementById('ResetMessage')
resetPasswordBtn.addEventListener('click', (e)=> {
    firebase.auth().sendPasswordResetEmail(resetEmail.value)
    .then(() => {
        alert('Password reset email sent!')
        ResetMessage.textContent = 'Password reset email sent!';
    })
    .catch((error) => {
        ResetMessage.textContent = `Error: ${error.message}`;
    });
})