

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("menu-burger");
    const menu = document.getElementById("menu-principal");

    if (!burger || !menu) {
        return;
    }

    function fermerMenu() {
        menu.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Ouvrir le menu");
    }

    burger.addEventListener("click", function () {
        const estOuvert =
            burger.getAttribute("aria-expanded") === "true";

        burger.setAttribute("aria-expanded", String(!estOuvert));
        burger.setAttribute(
            "aria-label",
            estOuvert ? "Ouvrir le menu" : "Fermer le menu"
        );

        menu.classList.toggle("is-open", !estOuvert);
    });

    menu.querySelectorAll("a").forEach(function (lien) {
        lien.addEventListener("click", fermerMenu);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            fermerMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            fermerMenu();
        }
    });
});
