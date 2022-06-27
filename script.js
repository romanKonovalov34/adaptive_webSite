document.querySelector(".button-menu").addEventListener('click', function() {
    document.querySelector(".menu__drop").classList.toggle("menu__drop_shown");
    document.querySelector(".menu__list").classList.toggle("menu__list_shown");
    document.querySelector(".button-menu").classList.toggle("button-menu_active");
});