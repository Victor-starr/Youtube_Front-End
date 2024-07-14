document.addEventListener("DOMContentLoaded", function() {
    var showMoreButton = document.getElementById("show-more");
    var shortcutsContent = document.querySelector(".shortcuts-content-cover");
    var shortcutsBox = document.querySelector(".shortcuts-box");

    showMoreButton.addEventListener("click", function() {
        if (shortcutsContent.clientHeight === 478) {
            shortcutsContent.style.transition = "height 0.5s";
            shortcutsContent.style.height = "902px";
            shortcutsBox.style.overflow = "visible";
        } else {
            shortcutsContent.style.transition = "height 0.5s";
            shortcutsContent.style.height = "478px";
            shortcutsBox.style.overflow = "hidden";
        }
    });
});
