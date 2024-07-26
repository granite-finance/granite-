
// dashboard
const userName = document.getElementById("userName")
const walletBalance = document.getElementById("walletBalance")
// const walletBalances = document.getElementById('walletBalances')
firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
        const userId = user.uid;
        // Get a reference to the database
        const database = firebase.database();
        const ref = database.ref(`users/${userId}`);

        // Retrieve data once
        ref.once('value')
        .then((snapshot) => {
            const data = snapshot.val();
            console.log(data);
            userName.innerText = 'Hi, ' + data.username
            walletBalance.innerText = '$' + data.amount + '.00'


            //   <!-- getting username on tawk.io api -->
             // Set Tawk.to visitor details
             Tawk_API = Tawk_API || {};
             Tawk_API.visitor = {
                 name: data.username,
                 email: data.email
             };

             // Ensure Tawk.to is fully loaded before setting the event listener
            Tawk_API.onLoad = function() {
                // Register an event listener for message sent
                Tawk_API.onChatMessageSent = function(data) {
                    // data contains the message details
                    const message = data.message;
                    const username = Tawk_API.visitor.name;
                    console.log("Message:", message);
                    console.log("Username:", username);
                    // Here you can send the data to your server or perform any other action
                };
            };
    
            // Set a callback function to capture the event when a message is sent
            Tawk_API.onLoad = function() {
                // Make sure Tawk_API is loaded
                if (Tawk_API) {
                    // Register an event listener for message sent
                    Tawk_API.onChatMessageSent = function(data) {
                        // data contains the message details
                        var message = data.message;
                        // Assuming username is stored in the visitor object
                        var username = Tawk_API.visitor.name;
                        console.log("Message:", message);
                        console.log("Username:", username);
                        
                        // Here you can send the data to your server or perform any other action
                    };
                }
            };
            
            // Optionally, set the visitor's name and email if you have it
            Tawk_API.visitor = {
                name: data.username,  // Replace with dynamic data if available
                email: data.email  // Replace with dynamic data if available
            };
            //  <!-- end getting username on tawk.io api -->

        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    } else {
        // window.location.replace("index.html")
    }
})





const logOutBtn = document.getElementById("logOutBtn")
logOutBtn.addEventListener('click', ()=> {
    firebase.auth().signOut()
        .then(() => {
            // Sign-out successful.
            console.log('User signed out');
            window.location.href = "https://granite-finance.github.io/granite";
        })
        .catch((error) => {
            // An error happened.
            console.error('Error signing out:', error);
    });

})






