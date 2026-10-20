// jQuery 4.0.0 DOM Manipulations
$(document).ready(function () {
    // (a) document.getElementById("myElement").textContent = "Modified Text";
    // jQuery equivalent using .text()
    $("#myElement").text("Modified Text");

    // (b) document.querySelector("#myDIV").classList.add("myStyle");
    // jQuery equivalent using .addClass()
    $("#myDIV").addClass("myStyle");

    // (c) document.getElementById("myButton").addEventListener("click", () => alert("Button clicked!"));
    // jQuery equivalent using .on("click", ...)
    $("#myButton").on("click", function () {
        alert("Button clicked!");
    });
});
