var contact_active_state = false;

window.addEventListener("load", function () {
    var viewport900 = window.matchMedia("(min-width: 900px)");
    var viewport1035 = window.matchMedia("(min-width: 1035px");
    var viewport1100 = window.matchMedia("(min-width: 1100px)");
    var viewport1381 = window.matchMedia("(min-width: 1381px)");

    var header_block_1 = document.getElementsByClassName("contact-header-block-1-before");
    var header_block_2 = document.getElementsByClassName("contact-header-block-2-before");
    var header_block_3 = document.getElementsByClassName("contact-header-block-3-before");

    var text_1 = document.getElementsByClassName("contact-text-1");

    var form_block = document.getElementsByClassName("contact-form-container");
    var form = document.getElementsByClassName("contact-form-1");

    var undercircle_1 = document.getElementsByClassName("contact-undercircle-1");
    var undercircle_2 = document.getElementsByClassName("contact-undercircle-2");
    var undercircle_3 = document.getElementsByClassName("contact-undercircle-3");

    var circle_1 = document.getElementsByClassName("contact-circle-1");
    var circle_2 = document.getElementsByClassName("contact-circle-2");
    var circle_3 = document.getElementsByClassName("contact-circle-3");
    var circle_1_after = document.getElementsByClassName("contact-circle-1-after");
    var circle_2_after = document.getElementsByClassName("contact-circle-2-after");
    var circle_3_after = document.getElementsByClassName("contact-circle-3-after");

    var ver_bar_1 = document.getElementsByClassName("contact-ver-bar-1");

    var hor_bar_1 = document.getElementsByClassName("contact-hor-bar-1");
    var hor_bar_2 = document.getElementsByClassName("contact-hor-bar-2");

    if (contact_active_state) {
        if (viewport900.matches) {
            header_block_1[0].style.opacity = "1.0";
            header_block_2[0].style.opacity = "1.0";
            header_block_3[0].style.opacity = "1.0";

            text_1[0].style.opacity = "1.0";

            form_block[0].style.transform = "scaleX(1)";
            form[0].style.opacity = "1.0";

            undercircle_1[0].style.opacity = "1.0";
            undercircle_2[0].style.opacity = "1.0";
            undercircle_3[0].style.opacity = "1.0";

            ver_bar_1[0].style.height = ((circle_3[0].getBoundingClientRect().y - ver_bar_1[0].getBoundingClientRect().y) + 7) + "px";

            if (viewport1381.matches) {
                ver_bar_1[0].style.left = "175.2%";
                hor_bar_1[0].style.width = "76.74%";
                hor_bar_2[0].style.width = "64%";
            }
            else if (viewport1100.matches) {
                ver_bar_1[0].style.left = "175.26%";
                hor_bar_1[0].style.width = "76.82%";
                hor_bar_2[0].style.width = "64%";
            }
            else if (viewport1035.matches) {
                ver_bar_1[0].style.left = "175.5%";
                hor_bar_1[0].style.width = "77.72%";
                hor_bar_2[0].style.width = "54%";
            }
            else {
                hor_bar_1[0].style.width = "78.2%";
                hor_bar_2[0].style.width = "54%";
            }

            if (viewport1100.matches) {
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
            }
        }
    }
});

window.addEventListener("resize", function () {
    var viewport900 = window.matchMedia("(min-width: 900px)");
    var viewport1035 = window.matchMedia("(min-width: 1035px");
    var viewport1100 = window.matchMedia("(min-width: 1100px)");
    var viewport1381 = window.matchMedia("(min-width: 1381px)");

    var header_block_1 = document.getElementsByClassName("contact-header-block-1-before");
    var header_block_2 = document.getElementsByClassName("contact-header-block-2-before");
    var header_block_3 = document.getElementsByClassName("contact-header-block-3-before");

    var text_1 = document.getElementsByClassName("contact-text-1");

    var form_block = document.getElementsByClassName("contact-form-container");
    var form = document.getElementsByClassName("contact-form-1");

    var undercircle_1 = document.getElementsByClassName("contact-undercircle-1");
    var undercircle_2 = document.getElementsByClassName("contact-undercircle-2");
    var undercircle_3 = document.getElementsByClassName("contact-undercircle-3");

    var circle_1 = document.getElementsByClassName("contact-circle-1");
    var circle_2 = document.getElementsByClassName("contact-circle-2");
    var circle_3 = document.getElementsByClassName("contact-circle-3");
    var circle_1_after = document.getElementsByClassName("contact-circle-1-after");
    var circle_2_after = document.getElementsByClassName("contact-circle-2-after");
    var circle_3_after = document.getElementsByClassName("contact-circle-3-after");

    var ver_bar_1 = document.getElementsByClassName("contact-ver-bar-1");

    var hor_bar_1 = document.getElementsByClassName("contact-hor-bar-1");
    var hor_bar_2 = document.getElementsByClassName("contact-hor-bar-2");

    if (contact_active_state) {
        if (viewport900.matches) {
            header_block_1[0].style.opacity = "1.0";
            header_block_2[0].style.opacity = "1.0";
            header_block_3[0].style.opacity = "1.0";

            text_1[0].style.opacity = "1.0";

            form_block[0].style.transform = "scaleX(1)";
            form[0].style.opacity = "1.0";

            undercircle_1[0].style.opacity = "1.0";
            undercircle_2[0].style.opacity = "1.0";
            undercircle_3[0].style.opacity = "1.0";

            ver_bar_1[0].style.height = ((circle_3[0].getBoundingClientRect().y - ver_bar_1[0].getBoundingClientRect().y) + 7) + "px";

            if (viewport1381.matches) {
                ver_bar_1[0].style.left = "175.2%";
                hor_bar_1[0].style.width = "76.74%";
                hor_bar_2[0].style.width = "64%";
            }
            else if (viewport1100.matches) {
                ver_bar_1[0].style.left = "175.26%";
                hor_bar_1[0].style.width = "76.82%";
                hor_bar_2[0].style.width = "64%";
            }
            else if (viewport1035.matches) {
                ver_bar_1[0].style.left = "175.5%";
                hor_bar_1[0].style.width = "77.72%";
                hor_bar_2[0].style.width = "54%";
            }
            else {
                hor_bar_1[0].style.width = "78.2%";
                hor_bar_2[0].style.width = "54%";
            }

            if (viewport1100.matches) {
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
            }
        }
    }
});

setInterval(function () {
    var viewport900 = window.matchMedia("(min-width: 900px)");
    var viewport1035 = window.matchMedia("(min-width: 1035px");
    var viewport1100 = window.matchMedia("(min-width: 1100px)");
    var viewport1381 = window.matchMedia("(min-width: 1381px)");

    var circle_3 = document.getElementsByClassName("contact-circle-3");

    var ver_bar_1 = document.getElementsByClassName("contact-ver-bar-1");

    var hor_bar_1 = document.getElementsByClassName("contact-hor-bar-1");
    var hor_bar_2 = document.getElementsByClassName("contact-hor-bar-2");

    if (viewport900.matches && contact_active_state) {
        ver_bar_1[0].style.height = ((circle_3[0].getBoundingClientRect().y - ver_bar_1[0].getBoundingClientRect().y) + 7) + "px";

        if (viewport1381.matches) {
            ver_bar_1[0].style.left = "175.2%";
            hor_bar_1[0].style.width = "76.74%";
            hor_bar_2[0].style.width = "64%";
        }
        else if (viewport1100.matches) {
            ver_bar_1[0].style.left = "175.26%";
            hor_bar_1[0].style.width = "76.82%";
            hor_bar_2[0].style.width = "64%";
        }
        else if (viewport1035.matches) {
            ver_bar_1[0].style.left = "175.5%";
            hor_bar_1[0].style.width = "77.72%";
            hor_bar_2[0].style.width = "54%";
        }
        else {
            ver_bar_1[0].style.left = "175.7%";
            hor_bar_1[0].style.width = "78.2%";
            hor_bar_2[0].style.width = "54%";
        }
    }
}, 2500);