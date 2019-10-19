var categories = document.querySelectorAll(".c-gallery__header--category");
var cards = document.querySelectorAll(".c-card");
categories = Array.prototype.slice.call(categories, 0);
cards = Array.prototype.slice.call(cards, 0);

categories.forEach(function (category) {
    category.addEventListener("click", function () {
        categories.forEach(function (link) {
            return link.classList.add("c-gallery__header--inactive");
        });
        this.classList.remove("c-gallery__header--inactive");

        switch (category.id) {
            case "categoryPrint":
                cards.forEach(function (postcard) {
                    return postcard.classList.contains("print") ? postcard.classList.add("c-card--show") : postcard.classList.remove("c-card--show");
                });
                break;
            case "categoryWeb":
                cards.forEach(function (postcard) {
                    return postcard.classList.contains("web") ? postcard.classList.add("c-card--show") : postcard.classList.remove("c-card--show");
                });
                break;
            default:
                cards.forEach(function (postcard) {
                    return postcard.classList.add("c-card--show");
                });
        }
    }, false);
});