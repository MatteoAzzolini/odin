var loginTemplate = `<form class="odin-login-form" method="get" action="/assets/js/login.js">
    <img src="/assets/images/odin-logo.png" alt="ODIN">
    <div class="odin-login-form-section">
        <input class="odin-login-form-in-text" type="email" required placeholder="Username">
        <input class="odin-login-form-in-text" type="password" required placeholder="Password">
    </div>
    <input class="odin-login-form-btn" type="submit" value="Login">
</form>`

function loadAsset(url,type,todo) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.responseType = type;

    xhr.onload = function(){
        todo(xhr.response);
    };
    xhr.send();

}

function populate(blob){
    let reader = new FileReader();
    reader.readAsText(blob);
    reader.onload = function(){
        alert(reader.result);
        await document.getElementById("main-content").innerHTML = reader.result;
    }
    
}



loadAsset("/assets/templates/login-form.html",'blob',populate);
