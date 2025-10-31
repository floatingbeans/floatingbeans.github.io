function win(url) {

var audio = new Audio('CLICKER.mp3');
audio.play()
audio.addEventListener('ended', () => {
    alert("the navbar is only for archiving reasons, all links are broken \nredirecting to homepage...")
  window.location.assign('index.html');
});
 }
window.onload = function () {

    var oldbar = document.getElementById("bar");
    var newbar = document.createElement("div");
    
     


    newbar.id = "bar";
    newbar.innerHTML = `
    
        <section class="tabs" style="max-width: 100%">
            <menu role="tablist">
                <button role="tab" aria-controls="tab-A" onclick=" win('index.html')">Homepage</button>
                <button role="tab" aria-controls="tab-B" onclick=" win('socials.html')">Socials</button>
                <button role="tab" aria-controls="tab-C" onclick=" win('projects.html')">Projects</button>
                <button role="tab" aria-controls="tab-E"onclick= "win('about.html')" >about/misc</button>
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
        
    }
    else {
        window.location.href = "compat.html"
    }
}, 50);




