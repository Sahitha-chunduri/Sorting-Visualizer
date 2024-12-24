const arraycontainer = document.getElementById("array-container");

export const generatearray = () => {
    arraycontainer.innerHTML = ""; 
    // Generate 30 random heights between 20% and 100%
    for (let i = 0; i < 30; i++) {
        const barHeight = Math.floor(Math.random() * 80) + 20;
        const arraybar = document.createElement("div");
        arraybar.classList.add("array-bar");
        arraybar.style.height = `${barHeight}%`;
        arraybar.setAttribute("data-height", `${barHeight}`); 
        arraycontainer.appendChild(arraybar);
    }
};
export const resetColors = () => {
    const bars = document.querySelectorAll(".array-bar");
    bars.forEach(bar => {
        bar.style.backgroundColor = "white"; 
    });
};

export const swap = (bar1, bar2) => {
    return new Promise((resolve) => {
        const temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;

        // Update data-height attributes
        bar1.setAttribute("data-height", bar1.style.height.replace('%', ''));
        bar2.setAttribute("data-height", bar2.style.height.replace('%', ''));

        setTimeout(() => {
            resolve();
        }, 100);
    });
};

// Generate initial array on load
generatearray();
