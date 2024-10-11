var machineListTemplate = `<div class="odin-machine-list-card">
<div class="odin-machine-list-card-img">
    <img src="/assets/images/odin-logo.png" alt="machine">
</div>
<div class="odin-machine-list-card-section-long">
    <div class="odin-machine-list-card-par-container">
        <p class="odin-machine-list-card-par-title">ID: </p>
        <p class="odin-machine-list-card-par-value">2127</p>
    </div>
    <div class="odin-machine-list-card-par-container">
        <p class="odin-machine-list-card-par-title">TYPE: </p>
        <p class="odin-machine-list-card-par-value">H.C.</p>
    </div>
    <div class="odin-machine-list-card-par-container">
        <p class="odin-machine-list-card-par-title">STATE: </p>
        <p class="odin-machine-list-card-par-value">Production</p>
    </div>
</div>
<div class="odin-machine-list-card-section-long">
    <div class="odin-machine-list-card-par-container">
        <p class="odin-machine-list-card-par-title">RECIPE: </p>
        <p class="odin-machine-list-card-par-value">GRAFE10X12345</p>
    </div>
    <div class="odin-machine-list-card-par-container">
        <p class="odin-machine-list-card-par-title">PROGRESSION: </p>
        <p class="odin-machine-list-card-par-value">84%</p>
    </div>
    <div class="odin-machine-list-card-par-container">
        <p class="odin-machine-list-card-par-title">OPERATOR: </p>
        <p class="odin-machine-list-card-par-value">S. Divone</p>
    </div>
</div>
</div>
`
var total = '';

for (let index = 0; index < 4; index++){
    total = total + machineListTemplate;
}

document.getElementById("main-container").innerHTML = total;

