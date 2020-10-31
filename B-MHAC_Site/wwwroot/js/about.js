var about_active_state = false;

window.addEventListener("load", function () {
    var viewport_under900 = window.matchMedia("(max-width: 900px)");
    var viewport_over900 = window.matchMedia("(min-width: 900px)");
    var viewport_under1100 = window.matchMedia("(max-width: 1100px)");
    var viewport_over1100 = window.matchMedia("(min-width: 1100px)");

    var header_block_1 = document.getElementsByClassName("about-header-block-1-before");
    var header_text_1 = document.getElementsByClassName("about-header-text-1");
    var header_block_2 = document.getElementsByClassName("about-header-block-2-before");
    var header_text_2 = document.getElementsByClassName("about-header-text-2");

    var text_block_1 = document.getElementsByClassName("about-text-block-1");
    var text_1 = document.getElementsByClassName("about-text-1");
    var text_block_2 = document.getElementsByClassName("about-text-block-2");
    var list_item_1 = document.getElementsByClassName("about-list-item-1");
    var list_item_2 = document.getElementsByClassName("about-list-item-2");
    var list_item_3 = document.getElementsByClassName("about-list-item-3");
    var list_item_4 = document.getElementsByClassName("about-list-item-4");

    var undercircle_1 = document.getElementsByClassName("about-undercircle-1");
    var undercircle_2 = document.getElementsByClassName("about-undercircle-2");
    var undercircle_3 = document.getElementsByClassName("about-undercircle-3");

    var circle_1 = document.getElementsByClassName("about-circle-1");
    var circle_1_after = document.getElementsByClassName("about-circle-1-after");
    var circle_2 = document.getElementsByClassName("about-circle-2");
    var circle_2_after = document.getElementsByClassName("about-circle-2-after");
    var circle_3 = document.getElementsByClassName("about-circle-3");
    var circle_3_after = document.getElementsByClassName("about-circle-3-after");
    var circle_4 = document.getElementsByClassName("about-circle-4");
    var circle_4_after = document.getElementsByClassName("about-circle-4-after");
    var circle_5 = document.getElementsByClassName("about-circle-5");
    var circle_5_after = document.getElementsByClassName("about-circle-5-after");
    var circle_6 = document.getElementsByClassName("about-circle-6");
    var circle_6_after = document.getElementsByClassName("about-circle-6-after");
    var circle_7 = document.getElementsByClassName("about-circle-7");
    var circle_7_after = document.getElementsByClassName("about-circle-7-after");

    var ver_bar_1 = document.getElementsByClassName("about-ver-bar-1");
    var ver_bar_2 = document.getElementsByClassName("about-ver-bar-2");

    var hor_bar_2 = document.getElementsByClassName("about-hor-bar-2");
    var hor_bar_3 = document.getElementsByClassName("about-hor-bar-3");
    var hor_bar_4 = document.getElementsByClassName("about-hor-bar-4");
    var hor_bar_5 = document.getElementsByClassName("about-hor-bar-5");
    var hor_bar_6 = document.getElementsByClassName("about-hor-bar-6");
    var hor_bar_7 = document.getElementsByClassName("about-hor-bar-7");
    var hor_bar_8 = document.getElementsByClassName("about-hor-bar-8");

    if (about_active_state) {
        //CODE
        //header blocks and text
        header_block_1[0].style.opacity = "1.0";
        header_text_1[0].style.opacity = "1.0";
        header_block_2[0].style.opacity = "1.0";
        header_text_2[0].style.opacity = "1.0";

        //text blocks and text
        text_block_1[0].style.transform = "scaleY(1)";
        text_1[0].style.opacity = "1.0";

        list_item_1[0].style.opacity = "1.0";
        list_item_2[0].style.opacity = "1.0";
        list_item_3[0].style.opacity = "1.0";
        list_item_4[0].style.opacity = "1.0";

        if (viewport_over900.matches) {
            text_block_2[0].style.marginLeft = "8.5%";
            text_block_2[0].style.opacity = "1.0";

            //the undercircles to border the outside of the circles if needed
            undercircle_1[0].style.opacity = "1.0";
            undercircle_2[0].style.opacity = "1.0";
            undercircle_3[0].style.opacity = "1.0";

            //the vertical bars in our grid system
            ver_bar_1[0].style.top = (hor_bar_2[0].getBoundingClientRect().y - header_block_1[0].getBoundingClientRect().y) + "px";
            ver_bar_1[0].style.height = ((hor_bar_3[0].getBoundingClientRect().y - ver_bar_1[0].getBoundingClientRect().y) + 8) + "px";
            ver_bar_2[0].style.top = (hor_bar_4[0].getBoundingClientRect().y - header_block_2[0].getBoundingClientRect().y) + "px";
            ver_bar_2[0].style.height = ((hor_bar_8[0].getBoundingClientRect().y - ver_bar_2[0].getBoundingClientRect().y) + 8) + "px";

            //the horizontal bars in our grid system
            hor_bar_2[0].style.width = "75%";
            hor_bar_3[0].style.width = "63.2%";
            hor_bar_4[0].style.width = "9.8%";
            hor_bar_5[0].style.width = "35%";
            hor_bar_6[0].style.width = "35%";
            hor_bar_7[0].style.width = "35%";
            hor_bar_8[0].style.width = "35%";
        }

        if (viewport_under900.matches) {
            text_block_2[0].style.marginLeft = "0%";
            text_block_2[0].style.opacity = "1.0";

            //circles on the page
            circle_4[0].style.width = "15px";
            circle_4[0].style.height = "15px";
            circle_4_after[0].style.width = "10px";
            circle_4_after[0].style.height = "8px";
            circle_5[0].style.width = "15px";
            circle_5[0].style.height = "15px";
            circle_5_after[0].style.width = "10px";
            circle_5_after[0].style.height = "8px";
            circle_6[0].style.width = "15px";
            circle_6[0].style.height = "15px";
            circle_6_after[0].style.width = "10px";
            circle_6_after[0].style.height = "8px";
            circle_7[0].style.width = "15px";
            circle_7[0].style.height = "15px";
            circle_7_after[0].style.width = "10px";
            circle_7_after[0].style.height = "8px";
        }
        else if (viewport_under1100.matches) {
            //circles on the page
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
            circle_5[0].style.width = "20px";
            circle_5[0].style.height = "20px";
            circle_5_after[0].style.width = "14px";
            circle_5_after[0].style.height = "10px";
            circle_6[0].style.width = "20px";
            circle_6[0].style.height = "20px";
            circle_6_after[0].style.width = "14px";
            circle_6_after[0].style.height = "10px";
            circle_7[0].style.width = "20px";
            circle_7[0].style.height = "20px";
            circle_7_after[0].style.width = "14px";
            circle_7_after[0].style.height = "10px";
        }
        else if (viewport_over1100.matches) {
            //circles on the page
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
            circle_5[0].style.width = "25px";
            circle_5[0].style.height = "25px";
            circle_5_after[0].style.width = "17px";
            circle_5_after[0].style.height = "13px";
            circle_6[0].style.width = "25px";
            circle_6[0].style.height = "25px";
            circle_6_after[0].style.width = "17px";
            circle_6_after[0].style.height = "13px";
            circle_7[0].style.width = "25px";
            circle_7[0].style.height = "25px";
            circle_7_after[0].style.width = "17px";
            circle_7_after[0].style.height = "13px";
        }
    }
});

window.addEventListener("resize", function () {
    var viewport_under900 = window.matchMedia("(max-width: 900px)");
    var viewport_under1100 = window.matchMedia("(max-width: 1100px)");
    var viewport_over1100 = window.matchMedia("(min-width: 1100px)");

    var header_block_1 = document.getElementsByClassName("about-header-block-1");
    var header_block_2 = document.getElementsByClassName("about-header-block-2");
    var text_block_2 = document.getElementsByClassName("about-text-block-2");

    var circle_1 = document.getElementsByClassName("about-circle-1");
    var circle_1_after = document.getElementsByClassName("about-circle-1-after");
    var circle_2 = document.getElementsByClassName("about-circle-2");
    var circle_2_after = document.getElementsByClassName("about-circle-2-after");
    var circle_3 = document.getElementsByClassName("about-circle-3");
    var circle_3_after = document.getElementsByClassName("about-circle-3-after");
    var circle_4 = document.getElementsByClassName("about-circle-4");
    var circle_4_after = document.getElementsByClassName("about-circle-4-after");
    var circle_5 = document.getElementsByClassName("about-circle-5");
    var circle_5_after = document.getElementsByClassName("about-circle-5-after");
    var circle_6 = document.getElementsByClassName("about-circle-6");
    var circle_6_after = document.getElementsByClassName("about-circle-6-after");
    var circle_7 = document.getElementsByClassName("about-circle-7");
    var circle_7_after = document.getElementsByClassName("about-circle-7-after");

    var ver_bar_1 = document.getElementsByClassName("about-ver-bar-1");
    var ver_bar_2 = document.getElementsByClassName("about-ver-bar-2");

    var hor_bar_2 = document.getElementsByClassName("about-hor-bar-2");
    var hor_bar_3 = document.getElementsByClassName("about-hor-bar-3");
    var hor_bar_4 = document.getElementsByClassName("about-hor-bar-4");
    var hor_bar_5 = document.getElementsByClassName("about-hor-bar-5");
    var hor_bar_6 = document.getElementsByClassName("about-hor-bar-6");
    var hor_bar_7 = document.getElementsByClassName("about-hor-bar-7");
    var hor_bar_8 = document.getElementsByClassName("about-hor-bar-8");

    if (about_active_state) {
        if (viewport_under900.matches) {
            text_block_2[0].style.marginLeft = "0%";
            text_block_2[0].style.opacity = "1.0";

            //circles on the page
            circle_4[0].style.width = "15px";
            circle_4[0].style.height = "15px";
            circle_4_after[0].style.width = "10px";
            circle_4_after[0].style.height = "8px";
            circle_5[0].style.width = "15px";
            circle_5[0].style.height = "15px";
            circle_5_after[0].style.width = "10px";
            circle_5_after[0].style.height = "8px";
            circle_6[0].style.width = "15px";
            circle_6[0].style.height = "15px";
            circle_6_after[0].style.width = "10px";
            circle_6_after[0].style.height = "8px";
            circle_7[0].style.width = "15px";
            circle_7[0].style.height = "15px";
            circle_7_after[0].style.width = "10px";
            circle_7_after[0].style.height = "8px";
        }
        else if (viewport_under1100.matches) {
            text_block_2[0].style.marginLeft = "8.5%";
            text_block_2[0].style.opacity = "1.0";

            //circles on the page
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
            circle_5[0].style.width = "20px";
            circle_5[0].style.height = "20px";
            circle_5_after[0].style.width = "14px";
            circle_5_after[0].style.height = "10px";
            circle_6[0].style.width = "20px";
            circle_6[0].style.height = "20px";
            circle_6_after[0].style.width = "14px";
            circle_6_after[0].style.height = "10px";
            circle_7[0].style.width = "20px";
            circle_7[0].style.height = "20px";
            circle_7_after[0].style.width = "14px";
            circle_7_after[0].style.height = "10px";

            ver_bar_1[0].style.top = (hor_bar_2[0].getBoundingClientRect().y - header_block_1[0].getBoundingClientRect().y) + "px";
            ver_bar_1[0].style.height = ((hor_bar_3[0].getBoundingClientRect().y - ver_bar_1[0].getBoundingClientRect().y) + 8) + "px"
            ver_bar_2[0].style.top = (hor_bar_4[0].getBoundingClientRect().y - header_block_2[0].getBoundingClientRect().y) + "px";
            ver_bar_2[0].style.height = ((hor_bar_8[0].getBoundingClientRect().y - ver_bar_2[0].getBoundingClientRect().y) + 8) + "px"

            //the horizontal bars in our grid system
            hor_bar_2[0].style.width = "75%";
            hor_bar_3[0].style.width = "63.2%";
            hor_bar_4[0].style.width = "9.8%";
            hor_bar_5[0].style.width = "35%";
            hor_bar_6[0].style.width = "35%";
            hor_bar_7[0].style.width = "35%";
            hor_bar_8[0].style.width = "35%";
        }
        else {
            //circles on the page
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
            circle_5[0].style.width = "25px";
            circle_5[0].style.height = "25px";
            circle_5_after[0].style.width = "17px";
            circle_5_after[0].style.height = "13px";
            circle_6[0].style.width = "25px";
            circle_6[0].style.height = "25px";
            circle_6_after[0].style.width = "17px";
            circle_6_after[0].style.height = "13px";
            circle_7[0].style.width = "25px";
            circle_7[0].style.height = "25px";
            circle_7_after[0].style.width = "17px";
            circle_7_after[0].style.height = "13px";

            ver_bar_1[0].style.top = (hor_bar_2[0].getBoundingClientRect().y - header_block_1[0].getBoundingClientRect().y) + "px";
            ver_bar_1[0].style.height = ((hor_bar_3[0].getBoundingClientRect().y - ver_bar_1[0].getBoundingClientRect().y) + 8) + "px"
            ver_bar_2[0].style.top = (hor_bar_4[0].getBoundingClientRect().y - header_block_2[0].getBoundingClientRect().y) + "px";
            ver_bar_2[0].style.height = ((hor_bar_8[0].getBoundingClientRect().y - ver_bar_2[0].getBoundingClientRect().y) + 8) + "px"

            //the horizontal bars in our grid system
            hor_bar_2[0].style.width = "75%";
            hor_bar_3[0].style.width = "63.2%";
            hor_bar_4[0].style.width = "9.8%";
            hor_bar_5[0].style.width = "35%";
            hor_bar_6[0].style.width = "35%";
            hor_bar_7[0].style.width = "35%";
            hor_bar_8[0].style.width = "35%";
        }
    }

    if (viewport_over1100.matches && about_active_state) {
        text_block_2[0].style.marginLeft = "8.5%";
        text_block_2[0].style.opacity = "1.0";

        ver_bar_1[0].style.top = (hor_bar_2[0].getBoundingClientRect().y - header_block_1[0].getBoundingClientRect().y) + "px";
        ver_bar_1[0].style.height = ((hor_bar_3[0].getBoundingClientRect().y - ver_bar_1[0].getBoundingClientRect().y) + 8) + "px"
        ver_bar_2[0].style.top = (hor_bar_4[0].getBoundingClientRect().y - header_block_2[0].getBoundingClientRect().y) + "px";
        ver_bar_2[0].style.height = ((hor_bar_8[0].getBoundingClientRect().y - ver_bar_2[0].getBoundingClientRect().y) + 8) + "px"
    }
});

setInterval(function () {
    var viewport_over900 = window.matchMedia("(min-width: 900px)");

    var header_block_1 = document.getElementsByClassName("about-header-block-1");
    var header_block_2 = document.getElementsByClassName("about-header-block-2");

    var ver_bar_1 = document.getElementsByClassName("about-ver-bar-1");
    var ver_bar_2 = document.getElementsByClassName("about-ver-bar-2");

    var hor_bar_2 = document.getElementsByClassName("about-hor-bar-2");
    var hor_bar_3 = document.getElementsByClassName("about-hor-bar-3");
    var hor_bar_4 = document.getElementsByClassName("about-hor-bar-4");
    var hor_bar_8 = document.getElementsByClassName("about-hor-bar-8");

    if (viewport_over900.matches && about_active_state) {
        ver_bar_1[0].style.top = (hor_bar_2[0].getBoundingClientRect().y - header_block_1[0].getBoundingClientRect().y) + "px";
        ver_bar_1[0].style.height = ((hor_bar_3[0].getBoundingClientRect().y - ver_bar_1[0].getBoundingClientRect().y) + 8) + "px"
        ver_bar_2[0].style.top = (hor_bar_4[0].getBoundingClientRect().y - header_block_2[0].getBoundingClientRect().y) + "px";
        ver_bar_2[0].style.height = ((hor_bar_8[0].getBoundingClientRect().y - ver_bar_2[0].getBoundingClientRect().y) + 8) + "px"
    }
}, 2500);
