fetch("/assets/test/test.json")
    .then((response) => response.json())
    .then((json) => console.log(json));


const a = document.createElement("div");
const b = document.createTextNode("Hi There");

a.appendChild(b);

const currentdiv = document.getElementById("div1");
document.body.insertBefore(a,currentdiv);