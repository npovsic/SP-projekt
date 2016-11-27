/**
 * Created by Nejc on 27. 11. 2016.
 */


function validation() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (username.value == "" || password.value == "") {
        var login_error = document.getElementById("login_error");
        login_error.style.display = "block";

        setTimeout(function() {
           login_error.style.display = "none" ;
        }, 5000);
    }
    else if (username.value == "npovsic" || password.value == "password") {
        var close = document.getElementById("close_button");
        close.click();
    }
}