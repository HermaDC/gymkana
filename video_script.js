document.addEventListener('DOMContentLoaded', function () {
    // Check for an existing session on page load
    var username = getCookie('user');
    if (username) {
        displaySuccessMessage('Welcome back, ' + username + '!');
    } else {
        // Redirect to the login page if there is no active session
        window.location.href = 'index.html';
    }
});

function displaySuccessMessage(message) {
    var successMessage = document.getElementById('success-message');
    successMessage.textContent = message;
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
