firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
        setTimeout(function(){
            window.location.replace("https://granite-finance.github.io/granite/dashboard/dashboard.html");
        }, 1000)
    } 
})