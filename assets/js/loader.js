const loader = document.querySelector('.loader');

window.onload = function() {
    setTimeout(() => {
        loader.style.display = 'none'
    }, 4000);
}
