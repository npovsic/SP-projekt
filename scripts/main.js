/**
 * Created by Nejc on 22. 10. 2016.
 */

var button_back, button_forward;
var welcome;
var navigation_buttons_wrapper;
var header;
var wrapper;

var distance_to_add_class;

function init() {
    console.log("Hello world!");

    welcome = document.getElementById("welcome");
    header = document.getElementById("header");
    wrapper = document.getElementById("wrapper");

    navigation_buttons_wrapper = document.getElementById("navigation_buttons_wrapper");
    console.log("Navigation button wrapper", navigation_buttons_wrapper.offsetTop);

    distance_to_add_class = navigation_buttons_wrapper.offsetTop;

    button_back = document.getElementById("button_back");
    button_forward = document.getElementById("button_forward");

    var scroll_list = document.getElementById("scroll_list");
    console.log("Scrolling distance available", scroll_list.scrollWidth - scroll_list.clientWidth);


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

        if(element.scrollWidth - element.clientWidth <= element.scrollLeft) {
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
    //console.log("Scrolling", e);
    console.log(wrapper.scrollTop,  navigation_buttons_wrapper.offsetTop);
    if(window.scrollY > distance_to_add_class) {
        console.log("Add class");
        navigation_buttons_wrapper.classList.remove("not_fixed");
        navigation_buttons_wrapper.classList.add("fixed");
    } else {
        navigation_buttons_wrapper.classList.remove("fixed");
        navigation_buttons_wrapper.classList.add("not_fixed");
    }
});


//.item{
//    top : 0%;
//    position : absolute;
//    width: 200px;
//    height : 200px;
//    transition : transform 0.15s linear, opacity 0.15s;
//    -webkit-transition : -webkit-transform 0.15s linear, opacity 0.15s
//}
//var item = document.getElementById("item");
//item.style.transform = "translate3d(210px,0,0)";
//item.style.webkitTransform = "translate3d(210px,0,0)";