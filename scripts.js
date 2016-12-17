document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".collapsible").forEach(function (element) {
        element.addEventListener("click", function (event) {
            var div = event.target.nextElementSibling;
            if ("block" === div.style.display)
                div.style.display = "none";
            else
                div.style.display = "block";
        });
    });
});