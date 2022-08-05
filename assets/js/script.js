//* Start of Website Preloading
const fadeOut = () => {
    const preloaderWrapper = document.querySelector('.preloader');
    preloaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);
//* End of Website Preloading

//* Start of Restaurant Photo (Image Slider)
// Returns the first element within the document that matches the specified or group of selectors.
let outerSlider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slider-inner");

let pressed = false;
let startX;
let horizontal;

// Appends an event listener for events whose type attribute value is type by using mousemove event that fired at an element when a cursor touches the target element's area.
// Triggered at an element when a pointing device button is pressed while the pointer is inside the element.
outerSlider.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    outerSlider.style.cursor = "grabbing";
});

// Triggered at an element when a cursor is initially moved so that its hotspot is within the element at which the event was fired.
outerSlider.addEventListener("mouseenter", () => {
    outerSlider.style.cursor = "grab";
});

// Triggered at an element when a cursor is moved out of it.
outerSlider.addEventListener("mouseleave", () => {
    outerSlider.style.cursor = "default";
});

// Triggered at an element when a button on a pointing device is released while the pointer is located inside it.
outerSlider.addEventListener("mouseup", () => {
    outerSlider.style.cursor = "grab";
    pressed = false;
});

// Triggered at an element when a cursor is moved while the cursor's hotspot is inside it.
outerSlider.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault(); // Stop the default action of an element from happening

    horizontal = e.offsetX;

    innerSlider.style.left = `${horizontal - startX}px`;

    boundaryDetection();
});

// Block-scoped variable declaration for checking the edge of element area
const boundaryDetection = () => {
    // Returns a `DOMRect` object providing information about the size of an element and its position relative to the viewport.
    let outer = outerSlider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    // Convert `string` argument to return an integer of the specified radix/ base
    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }

    // `Document Object Model` Style Object for sliding from right to the left with radix/ base value from `parseInt`
    if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
};
//* End of Restaurant Photo (Image Slider)