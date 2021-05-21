const desktopHeader = document.querySelector(".header");
const mobileHeader = document.querySelector(".mobile-header");
const navButton = document.querySelector(".nav-btn");
const mobileHeaderLogo = document.querySelector(".mobile-header__logo");

window.onscroll = () => {
    if(document.documentElement.scrollTop > 300) {
        if(window.innerWidth > 992) {
            desktopHeader.classList.add("header-scroll-desktop");
        } else {
            mobileHeader.classList.add("header-scroll-mobile");
        }
    } else {
        desktopHeader.classList.remove("header-scroll-desktop");
        mobileHeader.classList.remove("header-scroll-mobile");
    }
}

navButton.onclick = () => {
    if(desktopHeader.classList.contains("header-sliding")) {
        desktopHeader.classList.remove("header-sliding");
        navButton.classList.remove("nav-btn-sliding");
        mobileHeaderLogo.style.opacity = "1";
    } else {
        desktopHeader.classList.add("header-sliding");
        navButton.classList.add("nav-btn-sliding");
        mobileHeaderLogo.style.opacity = "0";
    }
}