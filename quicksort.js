import { swap} from "./script.js";

export const quicksort = async () => {
    const bars = document.querySelectorAll(".array-bar");

    async function quickSortHelper(start, end) {

        if (start >= end) return;

        const pivotIndex = await partition(start, end);
        await quickSortHelper(start, pivotIndex - 1);
        await quickSortHelper(pivotIndex + 1, end);
    }

    async function partition(start, end) {

        const pivotValue = parseInt(bars[end].style.height);
        bars[end].style.backgroundColor = "#ff6f61";
        let pivotIndex = start;

        for (let i = start; i < end; i++) {

            bars[i].style.backgroundColor = "#ff6f61";

            if (parseInt(bars[i].style.height) < pivotValue) {
                await swap(bars[i], bars[pivotIndex]);
                pivotIndex++;
            }

            bars[i].style.backgroundColor = "white";
        }

        await swap(bars[pivotIndex], bars[end]);
        bars[pivotIndex].style.backgroundColor = "#6b6b6b";

        return pivotIndex;
    }

    await quickSortHelper(0, bars.length - 1);

    for (let bar of bars) {
        bar.style.backgroundColor = "#6b6b6b";
    }

};
