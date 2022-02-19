//for some reason this should be globally available and
//not be inside Game class. Let's leave it like this and see
const canvasElement = document.querySelector('canvas');

//and for some reason this can be inside Game class
//and not necessarily be globally available. Isn't other classes
//like player etc also part of canvas and they should also use
//methods brought by 2d? Let's try leaving it like this for now
const context = canvasElement.getContext('2d'); // getContext (2d) gives me an object with methods and properties of 2d canvas. I assign it to a varible  so that I can use the methods of that object later (such as .fillRect()
