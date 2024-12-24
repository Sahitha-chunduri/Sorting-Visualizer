import { swap} from "./script.js";

export const selectionsort = async () => {
 
    const bars = document.querySelectorAll(".array-bar");
   
    for (let i = 0; i < bars.length; i++) {
        let minIndex = i;
        bars[minIndex].style.backgroundColor = "#ff6f61";

        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.backgroundColor = "#ff6f61"; 

            if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
                bars[minIndex].style.backgroundColor = "white"; 
                minIndex = j; 
                bars[minIndex].style.backgroundColor = "#ff6f61"; 
            } else {
                bars[j].style.backgroundColor = "white";
            }
        }

        if (minIndex !== i) {
            await swap(bars[i], bars[minIndex]);
        }

        bars[i].style.backgroundColor = "#6b6b6b";
    }
};
