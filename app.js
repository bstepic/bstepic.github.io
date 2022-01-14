(function () {
    // get necessary elements
    const allItems = document.querySelector(".content-container").children;
    const experienceItems = document.querySelector(".professional-list");

    // experience items click handler
    experienceItems.onclick = function (e) {
        const currentSection = e.target.getAttribute("id");
        if (currentSection) {
            let len = allItems.length;
            let currentItem;
            while (len--) {
                currentItem = allItems[len];
                currentItem.classList.add("hidden");
                if (currentItem.className.startsWith(currentSection)) {
                    currentItem.classList.remove("hidden");
                }
            }
        }
    };
})();
