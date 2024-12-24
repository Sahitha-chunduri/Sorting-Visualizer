# Sorting-Visualizer

Overview
The Sorting Visualizer is a web-based tool that visually demonstrates how different sorting algorithms work. Users can generate random arrays and sort them using various algorithms, observing the step-by-step process through color-coded bars.

Features
Generate New Array: Create a new array of random heights to visualize sorting algorithms.
Sorting Algorithms Supported:
  Bubble Sort,
  Selection Sort,
  Insertion Sort,
  Merge Sort,
  Quick Sort.

Dynamic Visualization: 
  Bars change colors to indicate comparisons and sorted elements.
  Smooth animations for swaps.

Reset Colors: Resets the bar colors before starting a new sorting operation.

File Structure
  HTML (index.html)
    The main structure of the webpage:
        Contains the array container for the bars.
        Buttons to trigger sorting and array generation.
        Imports the required JavaScript modules.

  CSS (style.css)
    Defines the styling for the container, array bars, and buttons. 

  JavaScript
      script.js
      Handles:  
        Array generation.
        Color resetting.
        Swapping bar heights during sorting.

  Each sorting algorithm (Selection Sort, Insertion Sort, Merge Sort, Quick Sort) is implemented in its own module (e.g., selectionsort.js, insertionsort.js, etc.), following a similar pattern as bubblesort.js.

How to Use
  Open the Application:
    Open the index.html file in a web browser.
  Generate a New Array:
    Click the "Generate New Array" button to create a random set of bars.
  Choose a Sorting Algorithm:
    Click on the button for the desired sorting algorithm:
      Bubble Sort
      Selection Sort
      Insertion Sort
      Merge Sort
      Quick Sort
  Observe the Visualization:
    Watch the bars change colors and positions as the sorting algorithm progresses.
  Reset and Repeat:
    Use the "Generate New Array" button to start with a new random array or choose another sorting algorithm.
Check out the live demo of the Sorting Visualizer [here](https://sahitha-chunduri.github.io/Sorting-Visualizer/).
