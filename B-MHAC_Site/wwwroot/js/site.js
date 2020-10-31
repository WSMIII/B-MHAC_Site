window.addEventListener("load", function () {
    if (document.URL.includes("Works")) {
        index_active_state = false;
        works_active_state = true;
        about_active_state = false;
        contact_active_state = false;
    }
    else if (document.URL.includes("About")) {
        index_active_state = false;
        works_active_state = false;
        about_active_state = true;
        contact_active_state = false;
    }
    else if (document.URL.includes("Contact")) {
        index_active_state = false;
        works_active_state = false;
        about_active_state = false;
        contact_active_state = true;
    }
    else {
        index_active_state = true;
        works_active_state = false;
        about_active_state = false;
        contact_active_state = false;
    }
});

window.addEventListener("resize", function () {
    var viewport600 = window.matchMedia("(max-width: 600px)");
    var viewport900 = window.matchMedia("(max-width: 900px)");
    var header_box = document.getElementById("site-header");
    var home_link = document.getElementsByClassName("home-link-1");
    var works_link = document.getElementsByClassName("works-link");
    var about_link = document.getElementsByClassName("about-link");
    var contact_link = document.getElementsByClassName("contact-link");
    var header_left_bar = document.getElementsByClassName("header-left-bar");
    var header_right_bar = document.getElementsByClassName("header-right-bar");

    if (viewport600.matches && window.scrollY < 5) {
        header_left_bar[0].style.width = "38%";
        header_right_bar[0].style.width = "38%";
    }

    if (viewport900.matches) {
        header_box.style.height = "40px";
        home_link[0].style.display = "none";
        home_link[0].style.marginLeft = "0%";
        works_link[0].style.display = "none";
        works_link[0].style.marginLeft = "0%";
        about_link[0].style.display = "none";
        contact_link[0].style.display = "none";
    }
    else {
        header_box.style.height = "auto";
        home_link[0].style.display = "block";
        works_link[0].style.display = "block";
        about_link[0].style.display = "block";
        contact_link[0].style.display = "block";

        if (window.scrollY < 5) {
            home_link[0].style.marginLeft = "2.63%";
            works_link[0].style.marginLeft = "59.15%";
            header_left_bar[0].style.width = "44.16%";
            header_right_bar[0].style.width = "44.16%";
        }
        else {
            home_link[0].style.marginLeft = "7.89%";
            works_link[0].style.marginLeft = "48.63%";
        }
    }
});

document.addEventListener("scroll", function () {
    var viewport900 = window.matchMedia("(max-width: 900px)");
    var viewport600 = window.matchMedia("(max-width: 600px)");
    var header_box = document.getElementById("site-header");
    var home_link_1 = document.getElementsByClassName("home-link-1");
    var works_link = document.getElementsByClassName("works-link");
    var header_left_bar = document.getElementsByClassName("header-left-bar");
    var header_right_bar = document.getElementsByClassName("header-right-bar");

    if (viewport600.matches) {
        if (window.scrollY < 5) {
            header_box.style.backgroundColor = "rgba(0, 0, 0, 1.0)";
            header_left_bar[0].style.width = "38%";
            header_right_bar[0].style.width = "38%";
        }
        else {
            header_box.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
            header_left_bar[0].style.width = "0%";
            header_right_bar[0].style.width = "0%";
        }
    }
    else if (viewport900.matches){
        if (window.scrollY < 5) {
            header_box.style.backgroundColor = "rgba(0, 0, 0, 1.0)";
            header_left_bar[0].style.width = "44.16%";
            header_right_bar[0].style.width = "44.16%";
        }
        else {
            header_box.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
            header_left_bar[0].style.width = "0%";
            header_right_bar[0].style.width = "0%";
        }
    }
    else {
        if (window.scrollY < 5) {
            header_box.style.backgroundColor = "rgba(0, 0, 0, 1.0)";
            home_link_1[0].style.marginLeft = "2.63%";
            works_link[0].style.marginLeft = "59.15%";
            header_left_bar[0].style.width = "44.16%";
            header_right_bar[0].style.width = "44.16%";
        }
        else {
            header_box.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
            home_link_1[0].style.marginLeft = "7.89%";
            works_link[0].style.marginLeft = "48.63%";
            header_left_bar[0].style.width = "0%";
            header_right_bar[0].style.width = "0%";
        }
    }

    if (window.scrollY > 500) {
        header_box.style.opacity = "0.0";
    }
    else {
        header_box.style.opacity = "1.0";
    }
});

var menuState = false;

function mobileMenu() {
    var header_box = document.getElementById("site-header");
    var header_logo = document.getElementsByClassName("header-logo");
    var header_link = document.getElementsByClassName("home-link-2");
    var menu = document.getElementsByClassName("header-menu-mobile");
    var home_link = document.getElementsByClassName("home-link-1");
    var works_link = document.getElementsByClassName("works-link");
    var about_link = document.getElementsByClassName("about-link");
    var contact_link = document.getElementsByClassName("contact-link");
    var body_box = document.getElementById("site-body");

    if (menuState) {
        header_box.style.height = "40px";
        header_box.style.backgroundColor = "#000000";
        header_box.style.flexFlow = "row nowrap";
        header_logo[0].style.display = "block";
        header_link[0].style.display = "block";
        menu[0].style.marginTop = "20px";
        home_link[0].style.display = "none";
        works_link[0].style.display = "none";
        about_link[0].style.display = "none";
        contact_link[0].style.display = "none";
        body_box.style.overflowY = "visible";
        menuState = false;
    }
    else {
        header_box.style.height = "100%";
        header_box.style.backgroundColor = "#696969";
        header_box.style.flexFlow = "column nowrap";
        header_logo[0].style.display = "none";
        header_link[0].style.display = "none";
        menu[0].style.marginTop = "20px";
        home_link[0].style.display = "block";
        works_link[0].style.display = "block";
        about_link[0].style.display = "block";
        contact_link[0].style.display = "block";
        body_box.style.overflowY = "hidden";
        menuState = true;
    }
}