var loginTemplate = `<form class="odin-login-form" method="get" action="/assets/js/login.js">
    <img src="/assets/images/odin-logo.png" alt="ODIN">
    <div class="odin-login-form-section">
        <input class="odin-login-form-in-text" type="email" required placeholder="Username">
        <input class="odin-login-form-in-text" type="password" required placeholder="Password">
    </div>
    <input class="odin-login-form-btn" type="submit" value="Login">
</form>`

document.getElementById("main-container").innerHTML = loginTemplate;