
export const insertionsort = async () => {
    const bars = document.querySelectorAll(".array-bar");

    for (let i = 1; i < bars.length; i++) {

        let key = parseInt(bars[i].style.height);
        let j = i - 1;

        bars[i].style.backgroundColor = "#ff6f61";

        while (j >= 0 && parseInt(bars[j].style.height) > key) {
            
            bars[j].style.backgroundColor = "#ff6f61";

            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].setAttribute("data-height", bars[j].getAttribute("data-height"));

            await new Promise((resolve) => setTimeout(resolve, 100));

            bars[j].style.backgroundColor = "white";

            j--;
        }

        bars[j + 1].style.height = `${key}%`;
        bars[j + 1].setAttribute("data-height", key);

        bars[i].style.backgroundColor = "#6b6b6b";

        await new Promise((resolve) => setTimeout(resolve, 100));
        bars[i].style.backgroundColor = "white";
    }

    for (let bar of bars) {
        bar.style.backgroundColor = "#6b6b6b";
    }
};
