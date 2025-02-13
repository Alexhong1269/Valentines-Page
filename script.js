document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelector("#movingbutton");

    if (b) {
        b.addEventListener("click", function () {
            let maxWidth = window.innerWidth - b.offsetWidth;
            let maxHeight = window.innerHeight - b.offsetHeight;

            let i = Math.floor(Math.random() * maxWidth);
            let j = Math.floor(Math.random() * maxHeight);

            b.style.position = "absolute";
            b.style.left = i + "px";
            b.style.top = j + "px";
        });
    }
});
