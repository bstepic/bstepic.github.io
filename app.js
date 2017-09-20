(function () {
    // get necessary elements
    var allItems = document.querySelector(".all-items").children;
    var experienceItems = document.querySelector(".professional-list");

    // experience items click handler
    experienceItems.onclick = function (e) {
        var currentSection = e.target.getAttribute("id");
        if (currentSection) {
            var len = allItems.length;
            var currentItem;
            while (len) {
                len--;
                currentItem = allItems[len];
                currentItem.classList.add("hidden");
                if (currentItem.className.startsWith(currentSection)) {
                    currentItem.classList.remove("hidden");
                }
            }
        }
    };
})();
