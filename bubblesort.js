import { swap} from "./script.js";

export const bubblesort = async () => {
    const bars = document.querySelectorAll(".array-bar");
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {

            bars[j].style.backgroundColor = "#ff6f61";
            bars[j + 1].style.backgroundColor = "#ff6f61";

            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                await swap(bars[j], bars[j + 1]);
            }

            bars[j].style.backgroundColor = "white";
            bars[j + 1].style.backgroundColor = "white";
        }

        bars[bars.length - i - 1].style.backgroundColor = "#6b6b6b";
    }

};
