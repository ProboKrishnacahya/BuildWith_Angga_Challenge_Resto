// * Website Preloading
const fadeOut = () => {
    const preloaderWrapper = document.querySelector('.preloader');
    preloaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

