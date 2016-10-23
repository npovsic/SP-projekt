/**
 * Created by Nejc on 22. 10. 2016.
 */

var button_back, button_forward;

function init() {
    console.log("Hello world!");

    button_back = document.getElementById("button_back");
    button_forward = document.getElementById("button_forward");

    var scroll_list = document.getElementById("scroll_list");
    console.log(scroll_list.scrollWidth - scroll_list.clientWidth);


    button_back.addEventListener("click", function() {
        scroll(scroll_list, 300, "left");
    });
    button_forward.addEventListener("click", function() {
        scroll(scroll_list, 300, "right");
    });

}

function scroll(element, distance, direction) {
    if(distance <= 0) {
        console.log(element.scrollLeft);
        if(element.scrollLeft == 0) {
            button_back.style.display = "none";
        } else {
            button_back.style.display = "block";
        }

        if(element.scrollWidth - element.clientWidth == element.scrollLeft) {
            button_forward.style.display = "none";
        } else {
            button_forward.style.display = "block";
        }
    } else {
        if(direction == "left") {
            element.scrollLeft-=50;
            setTimeout(function() {
                scroll(element, distance-50, direction);
            }, 50);
        } else {
            element.scrollLeft+=50;
            setTimeout(function() {
                scroll(element, distance-50, direction);
            }, 50);
        }
    }
}

window.addEventListener('keydown', function (event) {
    console.log(event.keyCode);
});

window.addEventListener("scroll", function(e) {
    console.log("Scrolling", e);
    //if(wrapper.scrollTop > 130) {
    //    header.classList.remove("top");
    //    header.classList.add("fixed");
    //} else {
    //    header.classList.remove("fixed");
    //    header.classList.add("top");
    //}
});