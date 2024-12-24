
export const mergesort = async () => {
    const bars = document.querySelectorAll(".array-bar");
    const barHeights = Array.from(bars).map(bar => parseInt(bar.style.height));

    async function mergeSortHelper(start, end) {

        if (start >= end) return;

        const mid = Math.floor((start + end) / 2);

        await mergeSortHelper(start, mid);
        await mergeSortHelper(mid + 1, end);
        await merge(start, mid, end);
    }

    async function merge(start, mid, end) {
        const left = barHeights.slice(start, mid + 1);
        const right = barHeights.slice(mid + 1, end + 1);
        let i = 0, j = 0, k = start;

        while (i < left.length && j < right.length) {
            bars[k].style.backgroundColor = "#ff6f61";
            await new Promise(resolve => setTimeout(resolve, 100));

            if (left[i] <= right[j]) {
                barHeights[k] = left[i];
                bars[k].style.height = `${left[i]}%`;
                bars[k].setAttribute("data-height", left[i]);
                i++;
            } else {
                barHeights[k] = right[j];
                bars[k].style.height = `${right[j]}%`;
                bars[k].setAttribute("data-height", right[j]);
                j++;
            }
            bars[k].style.backgroundColor = "#6b6b6b";
            k++;
        }

        while (i < left.length) {

            bars[k].style.backgroundColor = "#ff6f61";
            await new Promise(resolve => setTimeout(resolve, 100));
            barHeights[k] = left[i];
            bars[k].style.height = `${left[i]}%`;
            bars[k].setAttribute("data-height", left[i]);
            bars[k].style.backgroundColor = "#6b6b6b";
            i++;
            k++;
        }

        while (j < right.length) {
            
            bars[k].style.backgroundColor = "#ff6f61";
            await new Promise(resolve => setTimeout(resolve, 100));
            barHeights[k] = right[j];
            bars[k].style.height = `${right[j]}%`;
            bars[k].setAttribute("data-height", right[j]);
            bars[k].style.backgroundColor = "#6b6b6b";
            j++;
            k++;
        }
    }

    await mergeSortHelper(0, barHeights.length - 1);
};
