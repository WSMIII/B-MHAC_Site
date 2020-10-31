var works_active_state = false;
var active_state = false;

var dev_state = false;
var prod_state = false;
var post_state = false;

window.addEventListener("load", function () {
    var works_viewport900 = window.matchMedia("(min-width: 900px)");
    var works_viewport1100 = window.matchMedia("(min-width: 1100px)");
    var header_block_1 = document.getElementsByClassName("works-header-block-1-before");

    var undercircle_1 = document.getElementsByClassName("works-undercircle-1");
    var circle_1 = document.getElementsByClassName("works-circle-1");
    var circle_1_after = document.getElementsByClassName("works-circle-1-after");

    if (works_active_state) {
        if (works_viewport900.matches) {
            header_block_1[0].style.opacity = "1.0";

            undercircle_1[0].style.opacity = "1.0";

            if (works_viewport1100.matches) {
                circle_1[0].style.width = "25px";
                circle_1[0].style.height = "25px";
                circle_1_after[0].style.width = "17px";
                circle_1_after[0].style.height = "13px";
            }
            else {
                circle_1[0].style.width = "20px";
                circle_1[0].style.height = "20px";
                circle_1_after[0].style.width = "14px";
                circle_1_after[0].style.height = "10px";
            }
        }
    }
});

window.addEventListener("resize", function () {
    var works_viewport900 = window.matchMedia("(min-width: 900px)");
    var works_viewport1100 = window.matchMedia("(min-width: 1100px)");

    var works_cover = document.getElementsByClassName("works-dev-block-cover");
    var prod_cover = document.getElementsByClassName("works-prod-block-cover");
    var post_cover = document.getElementsByClassName("works-post-block-cover");

    var circle_1 = document.getElementsByClassName("works-circle-1");
    var circle_1_after = document.getElementsByClassName("works-circle-1-after");
    var circle_2 = document.getElementsByClassName("works-circle-2");
    var circle_2_after = document.getElementsByClassName("works-circle-2-after");
    var circle_3 = document.getElementsByClassName("works-circle-3");
    var circle_3_after = document.getElementsByClassName("works-circle-3-after");
    var circle_4 = document.getElementsByClassName("works-circle-4");
    var circle_4_after = document.getElementsByClassName("works-circle-4-after");

    var ver_bar_1 = document.getElementsByClassName("works-ver-bar-1");
    var hor_bar_1 = document.getElementsByClassName("works-hor-bar-1");
    var hor_bar_2 = document.getElementsByClassName("works-hor-bar-2");
    var hor_bar_3 = document.getElementsByClassName("works-hor-bar-3");
    var hor_bar_4 = document.getElementsByClassName("works-hor-bar-4");

    if (works_active_state) {
        if (works_viewport900.matches) {
            works_cover[0].style.transformOrigin = "left";
            prod_cover[0].style.transformOrigin = "left";
            post_cover[0].style.transformOrigin = "left";

            ver_bar_1[0].style.height = ((hor_bar_4[0].getBoundingClientRect().y - ver_bar_1[0].getBoundingClientRect().y) + 9) + "px";

            hor_bar_1[0].style.width = "12.8%";
            hor_bar_2[0].style.width = "5%";
            hor_bar_3[0].style.width = "5%";
            hor_bar_4[0].style.width = "5%";

            if (works_viewport1100.matches) {
                circle_1[0].style.width = "25px";
                circle_1[0].style.height = "25px";
                circle_1_after[0].style.width = "17px";
                circle_1_after[0].style.height = "13px";
                circle_2[0].style.width = "25px";
                circle_2[0].style.height = "25px";
                circle_2_after[0].style.width = "17px";
                circle_2_after[0].style.height = "13px";
                circle_3[0].style.width = "25px";
                circle_3[0].style.height = "25px";
                circle_3_after[0].style.width = "17px";
                circle_3_after[0].style.height = "13px";
                circle_4[0].style.width = "25px";
                circle_4[0].style.height = "25px";
                circle_4_after[0].style.width = "17px";
                circle_4_after[0].style.height = "13px";
            }
            else {
                circle_1[0].style.width = "20px";
                circle_1[0].style.height = "20px";
                circle_1_after[0].style.width = "14px";
                circle_1_after[0].style.height = "10px";
                circle_2[0].style.width = "20px";
                circle_2[0].style.height = "20px";
                circle_2_after[0].style.width = "14px";
                circle_2_after[0].style.height = "10px";
                circle_3[0].style.width = "20px";
                circle_3[0].style.height = "20px";
                circle_3_after[0].style.width = "14px";
                circle_3_after[0].style.height = "10px";
                circle_4[0].style.width = "20px";
                circle_4[0].style.height = "20px";
                circle_4_after[0].style.width = "14px";
                circle_4_after[0].style.height = "10px";
            }

        }
        else {
            works_cover[0].style.transformOrigin = "top";
            prod_cover[0].style.transformOrigin = "top";
            post_cover[0].style.transformOrigin = "top";
        }
    }
});

function startPage() {
    var works_viewport900 = window.matchMedia("(min-width: 900px)");
    var works_viewport1100 = window.matchMedia("(min-width: 1100px)");
    var hover_text_1 = document.getElementById("works-hover-text-1");
    var hover_text_2 = document.getElementById("works-hover-text-2");
    var dev_block = document.getElementsByClassName("works-dev-block-before");
    var prod_block = document.getElementsByClassName("works-prod-block-before");
    var post_block = document.getElementsByClassName("works-post-block-before");
    var dev_cover = document.getElementsByClassName("works-dev-block-cover");
    var prod_cover = document.getElementsByClassName("works-prod-block-cover");
    var post_cover = document.getElementsByClassName("works-post-block-cover");

    var circle_2 = document.getElementsByClassName("works-circle-2");
    var circle_2_after = document.getElementsByClassName("works-circle-2-after");
    var circle_3 = document.getElementsByClassName("works-circle-3");
    var circle_3_after = document.getElementsByClassName("works-circle-3-after");
    var circle_4 = document.getElementsByClassName("works-circle-4");
    var circle_4_after = document.getElementsByClassName("works-circle-4-after");

    var ver_bar_1 = document.getElementsByClassName("works-ver-bar-1");
    var hor_bar_1 = document.getElementsByClassName("works-hor-bar-1");
    var hor_bar_2 = document.getElementsByClassName("works-hor-bar-2");
    var hor_bar_3 = document.getElementsByClassName("works-hor-bar-3");
    var hor_bar_4 = document.getElementsByClassName("works-hor-bar-4");

    if (works_active_state && !active_state) {
        hover_text_1.innerHTML = "Click panels to see more!";
        hover_text_2.innerHTML = "Hover over panels to see more!";

        if (works_viewport900.matches) {
            dev_block[0].style.opacity = "1.0";
            prod_block[0].style.opacity = "1.0";
            post_block[0].style.opacity = "1.0";

            dev_cover[0].style.transform = "scaleX(1)";
            prod_cover[0].style.transform = "scaleX(1)";
            post_cover[0].style.transform = "scaleX(1)";

            if (works_viewport1100.matches) {
                circle_2[0].style.width = "25px";
                circle_2[0].style.height = "25px";
                circle_2_after[0].style.width = "17px";
                circle_2_after[0].style.height = "13px";
                circle_3[0].style.width = "25px";
                circle_3[0].style.height = "25px";
                circle_3_after[0].style.width = "17px";
                circle_3_after[0].style.height = "13px";
                circle_4[0].style.width = "25px";
                circle_4[0].style.height = "25px";
                circle_4_after[0].style.width = "17px";
                circle_4_after[0].style.height = "13px";
            }
            else {
                circle_2[0].style.width = "20px";
                circle_2[0].style.height = "20px";
                circle_2_after[0].style.width = "14px";
                circle_2_after[0].style.height = "10px";
                circle_3[0].style.width = "20px";
                circle_3[0].style.height = "20px";
                circle_3_after[0].style.width = "14px";
                circle_3_after[0].style.height = "10px";
                circle_4[0].style.width = "20px";
                circle_4[0].style.height = "20px";
                circle_4_after[0].style.width = "14px";
                circle_4_after[0].style.height = "10px";
            }

            ver_bar_1[0].style.height = ((hor_bar_4[0].getBoundingClientRect().y - ver_bar_1[0].getBoundingClientRect().y) + 9) + "px";

            hor_bar_1[0].style.width = "12.8%";
            hor_bar_2[0].style.width = "5%";
            hor_bar_3[0].style.width = "5%";
            hor_bar_4[0].style.width = "5%";
        }
        else {
            dev_block[0].style.opacity = "1.0";
            prod_block[0].style.opacity = "1.0";
            post_block[0].style.opacity = "1.0";

            dev_cover[0].style.transform = "scaleY(1)";
            prod_cover[0].style.transform = "scaleY(1)";
            post_cover[0].style.transform = "scaleY(1)";
        }
        active_state = true;
    }
}

function developBlockOpen() {
    var viewport900 = window.matchMedia("(min-width: 900px)");
    var hover_text_1 = document.getElementById("works-hover-text-1");
    var hover_text_2 = document.getElementById("works-hover-text-2");
    var works_cover = document.getElementsByClassName("works-dev-block-cover");
    var develop_full_reel = document.getElementsByClassName("works-dev-reel-full");
    var develop_icon = document.getElementsByClassName("works-dev-icon");
    var develop_text = document.getElementsByClassName("works-dev-cover-text");

    if (active_state) {
        if (viewport900.matches) {
            works_cover[0].style.transform = "scaleX(0)";
            works_cover[0].style.transformOrigin = "left";

            develop_icon[0].style.opacity = "0.0";
            develop_icon[0].style.transitionDelay = "0s";
            develop_text[0].style.opacity = "0.0";
            develop_text[0].style.transitionDelay = "0s";
            develop_full_reel[0].playbackRate = 1.2;
            develop_full_reel[0].play();
        }
        else {
            works_cover[0].style.transform = "scaleY(0)";
            works_cover[0].style.transformOrigin = "top";
            develop_full_reel[0].playbackRate = 1.2;
            develop_full_reel[0].play();
        }
        hover_text_1.style.color = "rgba(35, 35, 35, 0.0)";
        hover_text_2.style.color = "rgba(35, 35, 35, 0.0)";
        hover_text_1.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 0.0)";
        hover_text_2.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 0.0)";
    }
}

function developBlockClose() {
    var viewport900 = window.matchMedia("(min-width: 900px)");
    var hover_text_1 = document.getElementById("works-hover-text-1");
    var hover_text_2 = document.getElementById("works-hover-text-2");
    var works_cover = document.getElementsByClassName("works-dev-block-cover");
    var develop_full_reel = document.getElementsByClassName("works-dev-reel-full");
    var develop_body_reel = document.getElementsByClassName("works-dev-reel-body");
    var develop_icon = document.getElementsByClassName("works-dev-icon");
    var develop_text = document.getElementsByClassName("works-dev-cover-text");

    if (active_state) {
        if (viewport900.matches) {
            works_cover[0].style.transform = "scaleX(1)";
            works_cover[0].style.transformOrigin = "left";
        }
        else {
            works_cover[0].style.transform = "scaleY(1)";
            works_cover[0].style.transformOrigin = "top";
        }
        hover_text_1.style.color = "rgba(35, 35, 35, 0.5)";
        hover_text_2.style.color = "rgba(35, 35, 35, 0.5)";
        hover_text_1.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 1.0)";
        hover_text_2.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 1.0)";
        develop_icon[0].style.opacity = "1.0";
        develop_icon[0].style.transitionDelay = "1s";
        develop_text[0].style.opacity = "1.0";
        develop_text[0].style.transitionDelay = "1.3s";
        develop_full_reel[0].pause();
        develop_full_reel[0].currentTime = 0;
        develop_body_reel[0].pause();
        develop_body_reel[0].loop = false;
        develop_body_reel[0].currentTime = 0;
        develop_full_reel[0].style.display = "block";
        develop_body_reel[0].style.display = "none";
    }
}

function flipDevelopBlock() {
    if (active_state) {
        if (dev_state) {
            developBlockClose();
            dev_state = false;
        }
        else {
            developBlockOpen();
            dev_state = true;
        }
    }
}

function productionBlockOpen() {
    var viewport900 = window.matchMedia("(min-width: 900px)");
    var hover_text_1 = document.getElementById("works-hover-text-1");
    var hover_text_2 = document.getElementById("works-hover-text-2");
    var prod_cover = document.getElementsByClassName("works-prod-block-cover");
    var production_full_reel = document.getElementsByClassName("works-prod-reel-full");
    var production_icon = document.getElementsByClassName("works-prod-icon");
    var production_text = document.getElementsByClassName("works-prod-cover-text");

    if (active_state) {
        if (viewport900.matches) {
            prod_cover[0].style.transform = "scaleX(0)";
            prod_cover[0].style.transformOrigin = "left";
            production_icon[0].style.opacity = "0.0";
            production_icon[0].style.transitionDelay = "0s";
            production_text[0].style.opacity = "0.0";
            production_text[0].style.transitionDelay = "0s";
            production_full_reel[0].playbackRate = 1.2;
            production_full_reel[0].play();
        }
        else {
            prod_cover[0].style.transform = "scaleY(0)";
            prod_cover[0].style.transformOrigin = "top";
            production_full_reel[0].playbackRate = 1.2;
            production_full_reel[0].play();
        }
        hover_text_1.style.color = "rgba(35, 35, 35, 0.0)";
        hover_text_2.style.color = "rgba(35, 35, 35, 0.0)";
        hover_text_1.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 0.0)";
        hover_text_2.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 0.0)";
    }
}

function productionBlockClose() {
    var viewport900 = window.matchMedia("(min-width: 900px)");
    var hover_text_1 = document.getElementById("works-hover-text-1");
    var hover_text_2 = document.getElementById("works-hover-text-2");
    var prod_cover = document.getElementsByClassName("works-prod-block-cover");
    var production_full_reel = document.getElementsByClassName("works-prod-reel-full");
    var production_body_reel = document.getElementsByClassName("works-prod-reel-body");
    var production_icon = document.getElementsByClassName("works-prod-icon");
    var production_text = document.getElementsByClassName("works-prod-cover-text");

    if (active_state) {
        if (viewport900.matches) {
            prod_cover[0].style.transform = "scaleX(1)";
            prod_cover[0].style.transformOrigin = "left";
        }
        else {
            prod_cover[0].style.transform = "scaleY(1)";
            prod_cover[0].style.transformOrigin = "top";
        }
        hover_text_1.style.color = "rgba(35, 35, 35, 0.5)";
        hover_text_2.style.color = "rgba(35, 35, 35, 0.5)";
        hover_text_1.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 1.0)";
        hover_text_2.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 1.0)";
        production_icon[0].style.opacity = "1.0";
        production_icon[0].style.transitionDelay = "1s";
        production_text[0].style.opacity = "1.0";
        production_text[0].style.transitionDelay = "1.3s";
        production_full_reel[0].pause();
        production_full_reel[0].currentTime = 0;
        production_body_reel[0].pause();
        production_body_reel[0].loop = false;
        production_body_reel[0].currentTime = 0;
        production_full_reel[0].style.display = "block";
        production_body_reel[0].style.display = "none";
    }
}

function flipProductionBlock() {
    if (active_state) {
        if (prod_state) {
            productionBlockClose();
            prod_state = false;
        }
        else {
            productionBlockOpen();
            prod_state = true;
        }
    }
}

function postBlockOpen() {
    var viewport900 = window.matchMedia("(min-width: 900px)");
    var hover_text_1 = document.getElementById("works-hover-text-1");
    var hover_text_2 = document.getElementById("works-hover-text-2");
    var post_cover = document.getElementsByClassName("works-post-block-cover");
    var post_full_reel = document.getElementsByClassName("works-post-reel-full");
    var post_icon = document.getElementsByClassName("works-post-icon");
    var post_text = document.getElementsByClassName("works-post-cover-text");

    if (active_state) {
        if (viewport900.matches) {
            post_cover[0].style.transform = "scaleX(0)";
            post_cover[0].style.transformOrigin = "left";
            post_icon[0].style.opacity = "0.0";
            post_icon[0].style.transitionDelay = "0s";
            post_text[0].style.opacity = "0.0";
            post_text[0].style.transitionDelay = "0s";
            post_full_reel[0].playbackRate = 1.2;
            post_full_reel[0].play();
        }
        else {
            post_cover[0].style.transform = "scaleY(0)";
            post_cover[0].style.transformOrigin = "top";
            post_full_reel[0].playbackRate = 1.2;
            post_full_reel[0].play();
        }
        hover_text_1.style.color = "rgba(35, 35, 35, 0.0)";
        hover_text_2.style.color = "rgba(35, 35, 35, 0.0)";
        hover_text_1.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 0.0)";
        hover_text_2.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 0.0)";
    }
}

function postBlockClose() {
    var viewport900 = window.matchMedia("(min-width: 900px)");
    var hover_text_1 = document.getElementById("works-hover-text-1");
    var hover_text_2 = document.getElementById("works-hover-text-2");
    var post_cover = document.getElementsByClassName("works-post-block-cover");
    var post_full_reel = document.getElementsByClassName("works-post-reel-full");
    var post_body_reel = document.getElementsByClassName("works-post-reel-body");
    var post_icon = document.getElementsByClassName("works-post-icon");
    var post_text = document.getElementsByClassName("works-post-cover-text");

    if (active_state) {
        if (viewport900.matches) {
            post_cover[0].style.transform = "scaleX(1)";
            post_cover[0].style.transformOrigin = "left";
        }
        else {
            post_cover[0].style.transform = "scaleY(1)";
            post_cover[0].style.transformOrigin = "top";
        }
        hover_text_1.style.color = "rgba(35, 35, 35, 0.5)";
        hover_text_2.style.color = "rgba(35, 35, 35, 0.5)";
        hover_text_1.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 1.0)";
        hover_text_2.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 1.0)";
        post_icon[0].style.opacity = "1.0";
        post_icon[0].style.transitionDelay = "1s";
        post_text[0].style.opacity = "1.0";
        post_text[0].style.transitionDelay = "1.3s";
        post_full_reel[0].pause();
        post_full_reel[0].currentTime = 0;
        post_body_reel[0].pause();
        post_body_reel[0].loop = false;
        post_body_reel[0].currentTime = 0;
        post_full_reel[0].style.display = "block";
        post_body_reel[0].style.display = "none";
    }
}

function flipPostBlock() {
    if (active_state) {
        if (post_state) {
            postBlockClose();
            post_state = false;
        }
        else {
            postBlockOpen();
            post_state = true;
        }
    }
}

function playDevelopBody() {
    var develop_full_reel = document.getElementsByClassName("works-dev-reel-full");
    var develop_body_reel = document.getElementsByClassName("works-dev-reel-body");

    develop_full_reel[0].pause();
    develop_full_reel[0].currentTime = 0;
    develop_full_reel[0].style.display = "none";
    develop_body_reel[0].style.display = "block";
    develop_body_reel[0].playbackRate = 1.2;
    develop_body_reel[0].play();
    develop_body_reel[0].loop = true;
}

function playProductionBody() {
    var production_full_reel = document.getElementsByClassName("works-prod-reel-full");
    var production_body_reel = document.getElementsByClassName("works-prod-reel-body");

    production_full_reel[0].pause();
    production_full_reel[0].currentTime = 0;
    production_full_reel[0].style.display = "none";
    production_body_reel[0].style.display = "block";
    production_body_reel[0].playbackRate = 1.2;
    production_body_reel[0].play();
    production_body_reel[0].loop = true;
}

function playPostBody() {
    var post_full_reel = document.getElementsByClassName("works-post-reel-full");
    var post_body_reel = document.getElementsByClassName("works-post-reel-body");

    post_full_reel[0].pause();
    post_full_reel[0].currentTime = 0;
    post_full_reel[0].style.display = "none";
    post_body_reel[0].style.display = "block";
    post_body_reel[0].playbackRate = 1.2;
    post_body_reel[0].play();
    post_body_reel[0].loop = true;
}