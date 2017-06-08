$(document).on('click', 'a', function(event) {


    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


$(document).ready(function() {

    const config = {
        apiKey: "AIzaSyD5eqGeGoJKiDUXQA36Qi5_Qtoqs3aVqL0",
        authDomain: "portfolio-messenger.firebaseapp.com",
        databaseURL: "https://portfolio-messenger.firebaseio.com",
        projectId: "portfolio-messenger",
        storageBucket: "portfolio-messenger.appspot.com",
        messagingSenderId: "51564714549"
    };
    firebase.initializeApp(config);
    $(".form1").on('submit', event => {
        event.preventDefault();
        const name = $('#from_name').val();
        const email = $('#from_email').val();
        const message = $('#comments').val();
        console.log(name, email, message);
        firebase.database().ref('clients').push({
            name,
            email,
            message

        });
        $(".alert-success").css('visibility', 'visible').fadeTo(4000, 0);
        document.getElementById('from_name').value = "";
        document.getElementById('from_email').value = "";
        document.getElementById('comments').value = "";
        




        
    });


});