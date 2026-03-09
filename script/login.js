document.getElementById('signin-btn')
.addEventListener('click', function(){
    const userNameInput = document.getElementById('username-input');
    const userName = userNameInput.value;
    
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;

    if(userName === 'admin' && password === 'admin123'){
        alert('Login successful!');
        
        window.location.assign('home.html');
    } else {
        alert('Invalid username or password.');
        return;
    }
} )