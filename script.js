function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/';
}

function displaySuccessMessage(message) {
    var successMessage = document.getElementById('success-message');
    successMessage.textContent = message;
}

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simulated user creation and login (you should handle this securely on the server)
    if (username === 'user' && password === '123') {
        setCookie('user', username, 1); // Set a cookie with the username, valid for 1 day
        errorMessage.textContent = '';
        displaySuccessMessage('Successful login!');
    } else if (confirm('User not found. Do you want to create a new account?')) {
        setCookie('user', username, 1); // Set a cookie with the username, valid for 1 day
        errorMessage.textContent = '';
        displaySuccessMessage('Account created and logged in!');
        window.location.href = 'video_page.html';
    } else {
        eraseCookie('user'); // Clear the cookie on unsuccessful login or account creation
        errorMessage.textContent = 'Login canceled.';
    }
}

// Check for an existing session on page load
window.onload = function () {
    var username = getCookie('user');
    if (username) {
        document.getElementById('username').value = username;
        displaySuccessMessage('Welcome back, ' + username + '!');
    }
};
