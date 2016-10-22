/**
 * Created by Nejc on 22. 10. 2016.
 */

function init() {
    console.log("Hello world!");

    var header = document.getElementById("header");

    var wrapper = document.getElementById("wrapper");

    wrapper.addEventListener("scroll", function(e) {
        console.log("Scrolling", e);
        //if(wrapper.scrollTop > 130) {
        //    header.classList.remove("top");
        //    header.classList.add("fixed");
        //} else {
        //    header.classList.remove("fixed");
        //    header.classList.add("top");
        //}
    });


}

window.addEventListener('keydown', function (event) {
    console.log(event.keyCode);
});