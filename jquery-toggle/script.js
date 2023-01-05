$(document).ready(function(){
    $("button").text("Click to hide the paragraph.");
    $("button").click(function(){
        $("p").toggle();
        var text = $("button").text();
        $("button").text(
            text == "Click to hide the paragraph." ? "Click to show the paragraph." : "Click to hide the paragraph."
        )
    });
});