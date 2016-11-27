/**
 * Created by Nejc on 22. 10. 2016.
 */

var button_back, button_forward;
var welcome;
var nav_bar;
var header;
var wrapper;
var scroll_list;
var scroll_list_display;
var mq;
var gl;

var scrolling_distance;
var distance = 200;

var distance_to_add_class;

var konami = [
    38,
    38,
    40,
    40,
    37,
    39,
    37,
    39,
    66,
    65
];

var key_buffer = [];

function init() {
    console.log("It's not safe here, go back!");

    welcome = document.getElementById("welcome");
    header = document.getElementById("header");
    wrapper = document.getElementById("wrapper");

    nav_bar = document.getElementById("nav_bar");

    distance_to_add_class = nav_bar.offsetTop;

    button_back = document.getElementById("button_back");
    button_forward = document.getElementById("button_forward");

    scroll_list = document.getElementById("scroll_list");
    scrolling_distance = scroll_list.scrollWidth - scroll_list.clientWidth;

    initCanvas();

    scroll_list_display = getStyle("scroll_list", "display");

    // media query event handler
    if (matchMedia) {
        mq = window.matchMedia("only screen and (max-width: 425px)");
        mq.addListener(widthChange);
        widthChange(mq);
    }
}

function getStyle(id, name)
{
    var element = document.getElementById(id);
    return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

function initCanvas() {
    var canvas = document.getElementById("logo_canvas");

    gl = initWebGL(canvas);

    if (!gl) {
        return;
    }
    canvas.width = welcome.offsetWidth;

    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function initWebGL(canvas) {
    gl = null;

    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) {
        console.log("Unable to initialize WebGL. Your browser may not support it.");
    }

    return gl;
}

function widthChange(mq) {
    if (mq.matches) {
        window.onresize = function(event) {
            //do nothing
        };
    } else {
        console.log();
        if (scroll_list_display != "flex") {
            button_back.addEventListener("click", function() {
                scroll(scroll_list, "left");
            });
            button_forward.addEventListener("click", function() {
                scroll(scroll_list, "right");
            });
        }
        else {
            button_forward.style.display = "none";
        }

        window.addEventListener("scroll", scrollListener);

        window.onresize = function(event) {
            var scroll_list = document.getElementById("scroll_list");
            distance_to_add_class = nav_bar.offsetTop;
            scrolling_distance = scroll_list.scrollWidth - scroll_list.clientWidth;
        };
    }
}

function scroll(element, direction) {
    if(direction == "left") {
        element.style.transform = "translate3d(0px,0,0)";
        distance = 0;
        button_back.style.display = "none";
        button_forward.style.display = "block";
    }
    else {
        element.style.transform = "translate3d(-"+scrolling_distance+"px,0,0)";
        button_back.style.display = "block";
        button_forward.style.display = "none";
    }
}

window.addEventListener('keydown', function (event) {
    key_buffer.push(event.keyCode);

    if(key_buffer[key_buffer.length-1] == konami[key_buffer.length-1]) {
        if (key_buffer.length == konami.length) {
            var audio = document.querySelector("audio");
            audio.src = "css/assets/audio.mp3";
            audio.loop = true;
            audio.play();

            var elements = document.querySelectorAll('link[rel=stylesheet]');
            for (var i = 0; i < elements.length; i++){
                elements[i].parentNode.removeChild(elements[i]);
            }
            document.body.style.backgroundImage = "url(css/assets/bg_stars.gif)";

            var textnode = document.createTextNode("Oops, looks like you disabled all CSS stylesheets, good luck finding anything now!");
            welcome.style.color = "#fff";
            welcome.style.fontSize = "3em";
            welcome.style.textAlign = "center";
            welcome.insertBefore(textnode, welcome.childNodes[0]);
        }
    }
    else {
        key_buffer = [];
    }
});

function scrollListener(e) {
    if(window.scrollY > distance_to_add_class) {
        if(!nav_bar.classList.contains("fixed")) {
            console.log("Add class");
            nav_bar.classList.remove("not_fixed");
            nav_bar.classList.add("fixed");
        }
    } else {
        if(nav_bar.classList.contains("fixed")) {
            console.log("Remove class");
            nav_bar.classList.remove("fixed");
            nav_bar.classList.add("not_fixed");
        }
    }
}