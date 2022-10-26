
// active NavBar
let navEl = document.querySelector(".navigation-wrap");
window.onscroll= function(){
    if (document.documentElement.scrollTop > 20) {
        navEl.classList.add("scroll-on");
    } else {
        navEl.classList.remove("scroll-on");
    }
}

// nav hide
let navLinkEl = document.querySelectorAll(".nav-link");
let navCollapseEl = document.querySelector(".navbar-collapse.collapse");
navLinkEl.forEach((el) => {
    el.addEventListener("click", () => {
        navCollapseEl.classList.remove("show");
    })
})

//counter design 
document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration) {
        let counterEl = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            counterEl.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 900, 3000);   
    counter("count2", 0, 1000, 3000);   
    counter("count3", 0, 500, 3000);   
    counter("count4", 0, 200, 3000);   
})