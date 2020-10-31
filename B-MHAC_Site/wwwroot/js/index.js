var index_active_state = false;

window.addEventListener("load", function () {
    var index_viewport900 = window.matchMedia("(min-width: 900px)");
    var index_viewport1160 = window.matchMedia("(min-width: 1160px)");

    var index_reel = document.getElementsByClassName("index-reel");

    var header_block_1 = document.getElementsByClassName("index-header-block-1-before");
    var header_block_2 = document.getElementsByClassName("index-header-block-2-before");

    var text_block_1 = document.getElementsByClassName("index-text-block-1");
    var text_1 = document.getElementsByClassName("index-text-1");
    var text_block_2 = document.getElementsByClassName("index-text-block-2");
    var text_2 = document.getElementsByClassName("index-text-2");

    var undercircle_2 = document.getElementsByClassName("index-undercircle-left");
    var undercircle_3 = document.getElementsByClassName("index-undercircle-right");

    var circle_1 = document.getElementsByClassName("index-circle-1");
    var circle_1_after = document.getElementsByClassName("index-circle-1-after");
    var circle_2 = document.getElementsByClassName("index-circle-2");
    var circle_2_after = document.getElementsByClassName("index-circle-2-after");
    var circle_3 = document.getElementsByClassName("index-circle-3");
    var circle_3_after = document.getElementsByClassName("index-circle-3-after");

    var ver_bar = document.getElementsByClassName("index-ver-bar");

    var hor_pinkbar = document.getElementsByClassName("index-hor-pinkbar");
    var hor_bluebar = document.getElementsByClassName("index-hor-bluebar");

    var scrollAmount = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (index_active_state) {
        if (index_viewport900.matches) {
            index_reel[0].src = "https://bmhacmedia.blob.core.windows.net/videos/Reel01.mp4";
        }
        else {
            index_reel[0].src = "https://bmhacmedia.blob.core.windows.net/videos/MobileReel01.mp4";
        }
    }

    if (index_active_state && ((window.scrollY >= (scrollAmount * .25)) || ((scrollAmount) <= 500))) {

        if (index_viewport900.matches) {
            header_block_1[0].style.opacity = "1.0";
            header_block_2[0].style.opacity = "1.0";

            text_block_1[0].style.transform = "scaleY(1)";
            text_block_1[0].style.padding = "3.24%";
            text_block_2[0].style.transform = "scaleY(1)";
            text_block_2[0].style.padding = "3.24%";
            text_1[0].style.opacity = "1.0";
            text_2[0].style.opacity = "1.0";

            undercircle_2[0].style.opacity = "1.0";
            undercircle_3[0].style.opacity = "1.0";

            ver_bar[0].style.height = ((hor_bluebar[0].getBoundingClientRect().y - ver_bar[0].getBoundingClientRect().y) + 8) + "px";

            hor_bluebar[0].style.width = "11.1%";
            hor_pinkbar[0].style.width = "10.1%";

            if (index_viewport1160.matches) {
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

document.addEventListener("scroll", function () {
    var index_viewport900 = window.matchMedia("(min-width: 900px)");
    var index_viewport1160 = window.matchMedia("(min-width: 1160px)");
    var header_block_1 = document.getElementsByClassName("index-header-block-1-before");
    var text_block_1 = document.getElementsByClassName("index-text-block-1");
    var text_1 = document.getElementsByClassName("index-text-1");
    var header_block_2 = document.getElementsByClassName("index-header-block-2-before");
    var text_block_2 = document.getElementsByClassName("index-text-block-2");
    var text_2 = document.getElementsByClassName("index-text-2");
    var circle_1 = document.getElementsByClassName("index-circle-1");
    var circle_1_after = document.getElementsByClassName("index-circle-1-after");
    var circle_2 = document.getElementsByClassName("index-circle-2");
    var circle_2_after = document.getElementsByClassName("index-circle-2-after");
    var circle_3 = document.getElementsByClassName("index-circle-3");
    var circle_3_after = document.getElementsByClassName("index-circle-3-after");
    var undercircle_2 = document.getElementsByClassName("index-undercircle-left");
    var undercircle_3 = document.getElementsByClassName("index-undercircle-right");
    var hor_pinkbar = document.getElementsByClassName("index-hor-pinkbar");
    var hor_bluebar = document.getElementsByClassName("index-hor-bluebar");
    var ver_bar = document.getElementsByClassName("index-ver-bar");

    var scrollAmount = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (index_active_state) {
        if (window.scrollY <= (scrollAmount * .25) && (scrollAmount) > 500 && index_viewport900.matches) {
            header_block_1[0].style.opacity = "0.0";
            header_block_1[0].style.transitionDelay = "0s";
            header_block_1[0].style.transitionDuration = "0s";
            header_block_2[0].style.opacity = "0.0";
            header_block_2[0].style.transitionDelay = "0s";
            header_block_2[0].style.transitionDuration = "0s";

            text_block_1[0].style.transform = "scaleY(0)";
            text_block_1[0].style.padding = "0px";
            text_block_1[0].style.transitionDelay = "0s";
            text_block_1[0].style.transitionDuration = "0s";
            text_block_2[0].style.transform = "scaleY(0)";
            text_block_2[0].style.padding = "0px";
            text_block_2[0].style.transitionDelay = "0s";
            text_block_2[0].style.transitionDuration = "0s";
            text_1[0].style.opacity = "0.0";
            text_1[0].style.transitionDelay = "0s";
            text_1[0].style.transitionDuration = "0s";
            text_2[0].style.opacity = "0.0";
            text_2[0].style.transitionDelay = "0s";
            text_2[0].style.transitionDuration = "0s";

            undercircle_2[0].style.opacity = "0.0";
            undercircle_2[0].style.transitionDelay = "0s";
            undercircle_2[0].style.transitionDuration = "0s";
            undercircle_3[0].style.opacity = "0.0";
            undercircle_3[0].style.transitionDelay = "0s";
            undercircle_3[0].style.transitionDuration = "0s";

            circle_1[0].style.width = "0px";
            circle_1[0].style.height = "0px";
            circle_1[0].style.transitionDuration = "0s";
            circle_1_after[0].style.width = "0px";
            circle_1_after[0].style.height = "0px";
            circle_1_after[0].style.transitionDuration = "0s";
            circle_2[0].style.width = "0px";
            circle_2[0].style.height = "0px";
            circle_2[0].style.transitionDelay = "0s";
            circle_2[0].style.transitionDuration = "0s";
            circle_2_after[0].style.width = "0px";
            circle_2_after[0].style.height = "0px";
            circle_2_after[0].style.transitionDelay = "0s";
            circle_2_after[0].style.transitionDuration = "0s";
            circle_3[0].style.width = "0px";
            circle_3[0].style.height = "0px";
            circle_3[0].style.transitionDelay = "0s";
            circle_3[0].style.transitionDuration = "0s";
            circle_3_after[0].style.width = "0px";
            circle_3_after[0].style.height = "0px";
            circle_3_after[0].style.transitionDelay = "0s";
            circle_3_after[0].style.transitionDuration = "0s";

            ver_bar[0].style.height = "0px";
            ver_bar[0].style.transitionDelay = "0s";
            ver_bar[0].style.transitionDuration = "0s";

            hor_bluebar[0].style.width = "0px";
            hor_bluebar[0].style.transitionDelay = "0s";
            hor_bluebar[0].style.transitionDuration = "0s";

            hor_pinkbar[0].style.width = "0px";
            hor_pinkbar[0].style.transitionDelay = "0s";
            hor_pinkbar[0].style.transitionDuration = "0s";
        }
        else {
            if (index_viewport900.matches) {
                header_block_1[0].style.opacity = "1.0";
                header_block_1[0].style.transitionDelay = "3.1s";
                header_block_1[0].style.transitionDuration = "1s";
                header_block_2[0].style.opacity = "1.0";
                header_block_2[0].style.transitionDelay = "4.2s";
                header_block_2[0].style.transitionDuration = "1s";

                text_block_1[0].style.transform = "scaleY(1)";
                text_block_1[0].style.padding = "3.24%";
                text_block_1[0].style.transitionDelay = "4.6s";
                text_block_1[0].style.transitionDuration = "1s";
                text_block_2[0].style.transform = "scaleY(1)";
                text_block_2[0].style.padding = "3.24%";
                text_block_2[0].style.transitionDelay = "5.7s";
                text_block_2[0].style.transitionDuration = "1s";

                text_1[0].style.opacity = "1.0";
                text_1[0].style.transitionDelay = "5.6s";
                text_1[0].style.transitionDuration = "1s";
                text_2[0].style.opacity = "1.0";
                text_2[0].style.transitionDelay = "6.7s";
                text_2[0].style.transitionDuration = "1s";

                undercircle_2[0].style.opacity = "1.0";
                undercircle_2[0].style.transitionDelay = "3.1s";
                undercircle_2[0].style.transitionDuration = "1s";
                undercircle_3[0].style.opacity = "1.0";
                undercircle_3[0].style.transitionDelay = "4.2s";
                undercircle_3[0].style.transitionDuration = "1s";

                ver_bar[0].style.height = ((hor_bluebar[0].getBoundingClientRect().y - ver_bar[0].getBoundingClientRect().y) + 8) + "px";
                ver_bar[0].style.transitionDelay = ".5s";
                ver_bar[0].style.transitionDuration = "2.7s";

                hor_bluebar[0].style.width = "11.1%";
                hor_bluebar[0].style.transitionDelay = "3.2s";
                hor_bluebar[0].style.transitionDuration = ".5s";

                hor_pinkbar[0].style.width = "10.1%";
                hor_pinkbar[0].style.transitionDelay = "2.1s";
                hor_pinkbar[0].style.transitionDuration = ".5s";

                if (index_viewport1160.matches) {
                    circle_1[0].style.width = "25px";
                    circle_1[0].style.height = "25px";
                    circle_1[0].style.transitionDuration = ".5s";
                    circle_1_after[0].style.width = "17px";
                    circle_1_after[0].style.height = "13px";
                    circle_1_after[0].style.transitionDuration = ".5s";
                    circle_2[0].style.width = "25px";
                    circle_2[0].style.height = "25px";
                    circle_2[0].style.transitionDelay = "2.6s";
                    circle_2[0].style.transitionDuration = ".5s";
                    circle_2_after[0].style.width = "17px";
                    circle_2_after[0].style.height = "13px";
                    circle_2_after[0].style.transitionDelay = "2.6s";
                    circle_2_after[0].style.transitionDuration = ".5s";
                    circle_3[0].style.width = "25px";
                    circle_3[0].style.height = "25px";
                    circle_3[0].style.transitionDelay = "3.7s";
                    circle_3[0].style.transitionDuration = ".5s";
                    circle_3_after[0].style.width = "17px";
                    circle_3_after[0].style.height = "13px";
                    circle_3_after[0].style.transitionDelay = "3.7s";
                    circle_3_after[0].style.transitionDuration = ".5s";
                }
                else {
                    circle_1[0].style.width = "20px";
                    circle_1[0].style.height = "20px";
                    circle_1[0].style.transitionDuration = ".5s";
                    circle_1_after[0].style.width = "14px";
                    circle_1_after[0].style.height = "10px";
                    circle_1_after[0].style.transitionDuration = ".5s";
                    circle_2[0].style.width = "20px";
                    circle_2[0].style.height = "20px";
                    circle_2[0].style.transitionDelay = "2.6s";
                    circle_2[0].style.transitionDuration = ".5s";
                    circle_2_after[0].style.width = "14px";
                    circle_2_after[0].style.height = "10px";
                    circle_2_after[0].style.transitionDelay = "2.6s";
                    circle_2_after[0].style.transitionDuration = ".5s";
                    circle_3[0].style.width = "20px";
                    circle_3[0].style.height = "20px";
                    circle_3[0].style.transitionDelay = "3.7s";
                    circle_3[0].style.transitionDuration = ".5s";
                    circle_3_after[0].style.width = "14px";
                    circle_3_after[0].style.height = "10px";
                    circle_3_after[0].style.transitionDelay = "3.7s";
                    circle_3_after[0].style.transitionDuration = ".5s";
                }
            }
        }
    }    
});

window.addEventListener("resize", function () {
    var index_viewport900 = window.matchMedia("(min-width: 900px)");
    var index_viewport1160 = window.matchMedia("(min-width: 1160px)");
    var header_block_1 = document.getElementsByClassName("index-header-block-1-before");
    var text_block_1 = document.getElementsByClassName("index-text-block-1");
    var text_1 = document.getElementsByClassName("index-text-1");
    var header_block_2 = document.getElementsByClassName("index-header-block-2-before");
    var text_block_2 = document.getElementsByClassName("index-text-block-2");
    var text_2 = document.getElementsByClassName("index-text-2");
    var circle_1 = document.getElementsByClassName("index-circle-1");
    var circle_1_after = document.getElementsByClassName("index-circle-1-after");
    var circle_2 = document.getElementsByClassName("index-circle-2");
    var circle_2_after = document.getElementsByClassName("index-circle-2-after");
    var circle_3 = document.getElementsByClassName("index-circle-3");
    var circle_3_after = document.getElementsByClassName("index-circle-3-after");
    var undercircle_2 = document.getElementsByClassName("index-undercircle-left");
    var undercircle_3 = document.getElementsByClassName("index-undercircle-right");
    var hor_pinkbar = document.getElementsByClassName("index-hor-pinkbar");
    var hor_bluebar = document.getElementsByClassName("index-hor-bluebar");
    var ver_bar = document.getElementsByClassName("index-ver-bar");

    var scrollAmount = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (index_active_state) {
        if (window.scrollY <= (scrollAmount * .25) && scrollAmount > 500 && index_viewport900.matches) {
            header_block_1[0].style.opacity = "0.0";
            header_block_1[0].style.transitionDelay = "0s";
            header_block_1[0].style.transitionDuration = "0s";
            header_block_2[0].style.opacity = "0.0";
            header_block_2[0].style.transitionDelay = "0s";
            header_block_2[0].style.transitionDuration = "0s";

            text_block_1[0].style.transform = "scaleY(0)";
            text_block_1[0].style.padding = "0px";
            text_block_1[0].style.transitionDelay = "0s";
            text_block_1[0].style.transitionDuration = "0s";
            text_block_2[0].style.transform = "scaleY(0)";
            text_block_2[0].style.padding = "0px";
            text_block_2[0].style.transitionDelay = "0s";
            text_block_2[0].style.transitionDuration = "0s";
            text_1[0].style.opacity = "0.0";
            text_1[0].style.transitionDelay = "0s";
            text_1[0].style.transitionDuration = "0s";
            text_2[0].style.opacity = "0.0";
            text_2[0].style.transitionDelay = "0s";
            text_2[0].style.transitionDuration = "0s";

            undercircle_2[0].style.opacity = "0.0";
            undercircle_2[0].style.transitionDelay = "0s";
            undercircle_2[0].style.transitionDuration = "0s";
            undercircle_3[0].style.opacity = "0.0";
            undercircle_3[0].style.transitionDelay = "0s";
            undercircle_3[0].style.transitionDuration = "0s";

            circle_1[0].style.width = "0px";
            circle_1[0].style.height = "0px";
            circle_1[0].style.transitionDuration = "0s";
            circle_1_after[0].style.width = "0px";
            circle_1_after[0].style.height = "0px";
            circle_1_after[0].style.transitionDuration = "0s";
            circle_2[0].style.width = "0px";
            circle_2[0].style.height = "0px";
            circle_2[0].style.transitionDelay = "0s";
            circle_2[0].style.transitionDuration = "0s";
            circle_2_after[0].style.width = "0px";
            circle_2_after[0].style.height = "0px";
            circle_2_after[0].style.transitionDelay = "0s";
            circle_2_after[0].style.transitionDuration = "0s";
            circle_3[0].style.width = "0px";
            circle_3[0].style.height = "0px";
            circle_3[0].style.transitionDelay = "0s";
            circle_3[0].style.transitionDuration = "0s";
            circle_3_after[0].style.width = "0px";
            circle_3_after[0].style.height = "0px";
            circle_3_after[0].style.transitionDelay = "0s";
            circle_3_after[0].style.transitionDuration = "0s";

            ver_bar[0].style.height = "0px";
            ver_bar[0].style.transitionDelay = "0s";
            ver_bar[0].style.transitionDuration = "0s";

            hor_bluebar[0].style.width = "0px";
            hor_bluebar[0].style.transitionDelay = "0s";
            hor_bluebar[0].style.transitionDuration = "0s";

            hor_pinkbar[0].style.width = "0px";
            hor_pinkbar[0].style.transitionDelay = "0s";
            hor_pinkbar[0].style.transitionDuration = "0s";
        }
        else {
            if (!index_viewport900.matches) {
                header_block_1[0].style.opacity = "1.0";
                header_block_1[0].style.transitionDelay = "0.5s";
                header_block_1[0].style.transitionDuration = "1s";
                header_block_2[0].style.opacity = "1.0";
                header_block_2[0].style.transitionDelay = "0.5s";
                header_block_2[0].style.transitionDuration = "1s";

                text_block_1[0].style.transform = "scaleY(1)";
                text_block_1[0].style.padding = "3.24%";
                text_block_1[0].style.transitionDelay = "0.5s";
                text_block_1[0].style.transitionDuration = "1s";
                text_block_2[0].style.transform = "scaleY(1)";
                text_block_2[0].style.padding = "3.24%";
                text_block_2[0].style.transitionDelay = "0.5s";
                text_block_2[0].style.transitionDuration = "1s";

                text_1[0].style.opacity = "1.0";
                text_1[0].style.transitionDelay = "0.5s";
                text_1[0].style.transitionDuration = "1s";
                text_2[0].style.opacity = "1.0";
                text_2[0].style.transitionDelay = "0.5s";
                text_2[0].style.transitionDuration = "1s";
            }
            else {
                header_block_1[0].style.opacity = "1.0";
                header_block_1[0].style.transitionDelay = "3.1s";
                header_block_1[0].style.transitionDuration = "1s";
                header_block_2[0].style.opacity = "1.0";
                header_block_2[0].style.transitionDelay = "4.2s";
                header_block_2[0].style.transitionDuration = "1s";

                text_block_1[0].style.transform = "scaleY(1)";
                text_block_1[0].style.padding = "3.24%";
                text_block_1[0].style.transitionDelay = "4.6s";
                text_block_1[0].style.transitionDuration = "1s";
                text_block_2[0].style.transform = "scaleY(1)";
                text_block_2[0].style.padding = "3.24%";
                text_block_2[0].style.transitionDelay = "5.7s";
                text_block_2[0].style.transitionDuration = "1s";

                text_1[0].style.opacity = "1.0";
                text_1[0].style.transitionDelay = "5.6s";
                text_1[0].style.transitionDuration = "1s";
                text_2[0].style.opacity = "1.0";
                text_2[0].style.transitionDelay = "6.7s";
                text_2[0].style.transitionDuration = "1s";

                undercircle_2[0].style.opacity = "1.0";
                undercircle_2[0].style.transitionDelay = "3.1s";
                undercircle_2[0].style.transitionDuration = "1s";
                undercircle_3[0].style.opacity = "1.0";
                undercircle_3[0].style.transitionDelay = "4.2s";
                undercircle_3[0].style.transitionDuration = "1s";

                ver_bar[0].style.height = ((hor_bluebar[0].getBoundingClientRect().y - ver_bar[0].getBoundingClientRect().y) + 8) + "px";
                ver_bar[0].style.transitionDelay = ".5s";
                ver_bar[0].style.transitionDuration = "2.7s";

                hor_bluebar[0].style.width = "11.1%";
                hor_bluebar[0].style.transitionDelay = "3.2s";
                hor_bluebar[0].style.transitionDuration = ".5s";

                hor_pinkbar[0].style.width = "10.1%";
                hor_pinkbar[0].style.transitionDelay = "2.1s";
                hor_pinkbar[0].style.transitionDuration = ".5s";

                if (index_viewport1160.matches) {
                    circle_1[0].style.width = "25px";
                    circle_1[0].style.height = "25px";
                    circle_1[0].style.transitionDuration = ".5s";
                    circle_1_after[0].style.width = "17px";
                    circle_1_after[0].style.height = "13px";
                    circle_1_after[0].style.transitionDuration = ".5s";
                    circle_2[0].style.width = "25px";
                    circle_2[0].style.height = "25px";
                    circle_2[0].style.transitionDelay = "2.6s";
                    circle_2[0].style.transitionDuration = ".5s";
                    circle_2_after[0].style.width = "17px";
                    circle_2_after[0].style.height = "13px";
                    circle_2_after[0].style.transitionDelay = "2.6s";
                    circle_2_after[0].style.transitionDuration = ".5s";
                    circle_3[0].style.width = "25px";
                    circle_3[0].style.height = "25px";
                    circle_3[0].style.transitionDelay = "3.7s";
                    circle_3[0].style.transitionDuration = ".5s";
                    circle_3_after[0].style.width = "17px";
                    circle_3_after[0].style.height = "13px";
                    circle_3_after[0].style.transitionDelay = "3.7s";
                    circle_3_after[0].style.transitionDuration = ".5s";
                }
                else {
                    circle_1[0].style.width = "20px";
                    circle_1[0].style.height = "20px";
                    circle_1[0].style.transitionDuration = ".5s";
                    circle_1_after[0].style.width = "14px";
                    circle_1_after[0].style.height = "10px";
                    circle_1_after[0].style.transitionDuration = ".5s";
                    circle_2[0].style.width = "20px";
                    circle_2[0].style.height = "20px";
                    circle_2[0].style.transitionDelay = "2.6s";
                    circle_2[0].style.transitionDuration = ".5s";
                    circle_2_after[0].style.width = "14px";
                    circle_2_after[0].style.height = "10px";
                    circle_2_after[0].style.transitionDelay = "2.6s";
                    circle_2_after[0].style.transitionDuration = ".5s";
                    circle_3[0].style.width = "20px";
                    circle_3[0].style.height = "20px";
                    circle_3[0].style.transitionDelay = "3.7s";
                    circle_3[0].style.transitionDuration = ".5s";
                    circle_3_after[0].style.width = "14px";
                    circle_3_after[0].style.height = "10px";
                    circle_3_after[0].style.transitionDelay = "3.7s";
                    circle_3_after[0].style.transitionDuration = ".5s";
                }
            }
        }
    }
});

setInterval(function () {
    var index_viewport900 = window.matchMedia("(min-width: 900px)");
    var hor_bluebar = document.getElementsByClassName("index-hor-bluebar");
    var ver_bar = document.getElementsByClassName("index-ver-bar");

    var scrollAmount = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (index_active_state && index_viewport900.matches) {
        if (window.scrollY >= (scrollAmount * .25) || (scrollAmount <= 500)) {
            ver_bar[0].style.height = ((hor_bluebar[0].getBoundingClientRect().y - ver_bar[0].getBoundingClientRect().y) + 8) + "px";
        }
    }
}, 2500);