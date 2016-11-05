/**
 * Created by Nejc on 22. 10. 2016.
 */

var button_back, button_forward;
var welcome;
var nav_bar;
var header;
var wrapper;
var mq;

var distance_to_add_class;

function init() {
    console.log("Hello world!");

    welcome = document.getElementById("welcome");
    header = document.getElementById("header");
    wrapper = document.getElementById("wrapper");

    nav_bar = document.getElementById("nav_bar");
    console.log("Navigation button wrapper", nav_bar.offsetTop);

    distance_to_add_class = nav_bar.offsetTop;

    button_back = document.getElementById("button_back");
    button_forward = document.getElementById("button_forward");

    var scroll_list = document.getElementById("scroll_list");
    console.log("Scrolling distance available", scroll_list.scrollWidth - scroll_list.clientWidth);



    // media query event handler
    if (matchMedia) {
        var mq = window.matchMedia("only screen and (max-width: 767px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }
}

function WidthChange(mq) {
    if (mq.matches) {
        console.log("MOBILE");

        window.onresize = function(event) {
            //do nothing
        };
    } else {
        console.log("DESKTOP");
        button_back.addEventListener("click", function() {
            scroll(scroll_list, 500, "left");
        });
        button_forward.addEventListener("click", function() {
            scroll(scroll_list, 500, "right");
        });
        window.addEventListener("scroll", scrollListener);

        window.onresize = function(event) {
            console.log("CHANGED WIDTH");
            distance_to_add_class = nav_bar.offsetTop;
        };
    }
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
            element.scrollLeft-=100;
            setTimeout(function() {
                scroll(element, distance-100, direction);
            }, 50);
        } else {
            element.scrollLeft+=100;
            setTimeout(function() {
                scroll(element, distance-100, direction);
            }, 50);
        }
    }
}



window.addEventListener('keydown', function (event) {
    console.log(event.keyCode);
});

function scrollListener(e) {
    //console.log("Scrolling", e);
    console.log(wrapper.scrollTop,  nav_bar.offsetTop);
    if(window.scrollY > distance_to_add_class) {
        console.log("Add class");
        nav_bar.classList.remove("not_fixed");
        nav_bar.classList.add("fixed");
    } else {
        nav_bar.classList.remove("fixed");
        nav_bar.classList.add("not_fixed");
    }
}

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