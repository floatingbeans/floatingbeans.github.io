window.onload = function () {
    var oldbar = document.getElementById("bar");
    var newbar = document.createElement("div");

    newbar.id = "bar";
    newbar.innerHTML = `
        <section class="tabs" style="max-width: 100%">
            <menu role="tablist">
                <button role="tab" aria-controls="tab-A" onclick=" window.location.assign('index.html')">Homepage</button>
                <button role="tab" aria-controls="tab-B" onclick=" window.location.assign('socials.html')">Socials</button>
                <button role="tab" aria-controls="tab-C" onclick=" window.location.assign('projects.html')">Projects</button>
                <button role="tab" aria-controls="tab-D" onclick=" window.location.assign('old/warn.html')">Half Life</button>
                <button role="tab" aria-controls="tab-E" disabled>Misc (coming soon)</button>
            </menu>
        </section>
    `;

    if (oldbar) {
        oldbar.replaceWith(newbar);
    } else {
        console.warn("Element with ID 'bar' not found.");
    }
};


     
var timer = window.setInterval(function(){
    // your code goes here ...
 if(window.screen.availWidth > 887 || window.screen.availHeight > 884) {
        console.log("You're safe, for now.")
    }
    else {
        window.location.href = "compat.html"
    }
}, 50);